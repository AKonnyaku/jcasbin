import json
import sys
import math
import re
from collections import defaultdict

# Force UTF-8 output
sys.stdout.reconfigure(encoding="utf-8")

def load_json(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {path}: {e}", file=sys.stderr)
        return None

def metric_to_ns_per_op(metric):
    """Converts JMH metric to ns/op."""
    score = float(metric.get("score", 0.0))
    error = float(metric.get("scoreError", 0.0))
    unit = str(metric.get("scoreUnit", "") or "")

    if unit.endswith("/op"): # Time mode (ns/op, ms/op, etc.)
        t_unit = unit.split("/", 1)[0]
        mult = {"ns": 1.0, "us": 1e3, "ms": 1e6, "s": 1e9}.get(t_unit)
        if mult is None: return (score, error)
        return (score * mult, error * mult)

    if unit.startswith("ops/"): # Throughput mode (ops/s, ops/ms)
        denom = unit.split("/", 1)[1]
        mult = {"ns": 1e-9, "us": 1e-6, "ms": 1e-3, "s": 1.0}.get(denom)
        if mult is None: return (0.0, 0.0)
        
        ops_per_sec = score / mult
        ops_error = error / mult
        
        if ops_per_sec == 0: return (0.0, 0.0)
        
        ns_op = 1e9 / ops_per_sec
        # Relative error propagation: d(1/x) / (1/x) = dx / x
        # So error_ns = ns_op * (ops_error / ops_per_sec)
        ns_error = ns_op * (ops_error / ops_per_sec)
        
        return (ns_op, ns_error)

    return (score, error)

def normalize_name(name):
    # JMH name usually includes package.class.method
    # We want just the method name or a cleaner version
    if "." in name:
        name = name.rsplit(".", 1)[-1]
    return name

def parse_benchmarks(data):
    """Parses and aggregates benchmark data."""
    # data is {'benchmarks': [ ... ]}
    raw_benchmarks = data.get('benchmarks', [])
    
    # Group by benchmark name
    grouped = defaultdict(list)
    for b in raw_benchmarks:
        name = normalize_name(b.get("benchmark", ""))
        if not name: continue
        
        # Extract primary metric
        primary = b.get("primaryMetric", {})
        val_ns, err_ns = metric_to_ns_per_op(primary)
        
        # Extract rounds/iterations if available
        # JMH 'measurementIterations'
        rounds = int(b.get("measurementIterations", 1))
        
        grouped[name].append({
            "val": val_ns,
            "error": err_ns,
            "rounds": rounds
        })
        
    # Aggregate
    aggregated = {}
    for name, entries in grouped.items():
        if not entries: continue
        
        # Mean of means
        vals = [e["val"] for e in entries]
        mean = sum(vals) / len(vals)
        
        # Total rounds (approximate)
        total_rounds = sum(e["rounds"] for e in entries)
        
        # StdDev of the means (if we have multiple shards)
        if len(vals) > 1:
            variance = sum((x - mean) ** 2 for x in vals) / (len(vals) - 1)
            stddev = math.sqrt(variance)
        else:
            # If only one result (typical for JMH), use its reported error as stddev
            stddev = entries[0]["error"]
            
        aggregated[name] = {
            "mean": mean,     # in ns
            "stddev": stddev, # in ns
            "rounds": len(vals) # Number of shards/samples (e.g., 5)
        }
    return aggregated

def format_val(val_ns):
    if val_ns is None: return "N/A"
    if val_ns < 1000: return f"{val_ns:.2f}ns"
    if val_ns < 1e6: return f"{val_ns/1e3:.2f}us"
    if val_ns < 1e9: return f"{val_ns/1e6:.2f}ms"
    return f"{val_ns/1e9:.2f}s"

def main():
    if len(sys.argv) < 3:
        print("Usage: python pytest_benchstat.py base.json pr.json")
        sys.exit(1)

    base_data = load_json(sys.argv[1])
    pr_data = load_json(sys.argv[2])

    if not base_data or not pr_data:
        sys.exit(1)

    base_map = parse_benchmarks(base_data)
    pr_map = parse_benchmarks(pr_data)

    all_names = sorted(set(base_map.keys()) | set(pr_map.keys()))

    # Print Header (PyCasbin style)
    print("goos: linux")
    print("goarch: amd64")
    print("pkg: github.com/casbin/jcasbin") 
    print("cpu: GitHub Actions Runner")
    print("")

    w_name = 50
    w_val = 20

    print(f"{'':<{w_name}}│   old base.json    │   new pr.json      │")
    print(f"{'':<{w_name}}│    sec/op          │    sec/op          │")

    base_means = []
    pr_means = []
    
    need_low_sample_note = False
    need_insignificant_note = False

    for name in all_names:
        base = base_map.get(name)
        pr = pr_map.get(name)

        base_mean = base["mean"] if base else 0
        pr_mean = pr["mean"] if pr else 0
        
        base_std = base["stddev"] if base else 0
        pr_std = pr["stddev"] if pr else 0
        
        base_rounds = base["rounds"] if base else 0 
        pr_rounds = pr["rounds"] if pr else 0

        if base_mean > 0: base_means.append(base_mean)
        if pr_mean > 0: pr_means.append(pr_mean)

        def format_cell(val, std, rounds):
            if val == 0: return "N/A"
            if rounds < 2 or std == 0:
                std_str = "± ∞"
            else:
                pct = (std / val) * 100
                std_str = f"± {pct:.0f}%"
            
            note = ""
            if rounds < 6:
                note = "¹"
                nonlocal need_low_sample_note
                need_low_sample_note = True
            
            return f"{format_val(val)} {std_str} {note}"

        base_str = format_cell(base_mean, base_std, base_rounds) if base else "N/A"
        pr_str = format_cell(pr_mean, pr_std, pr_rounds) if pr else "N/A"

        print(f"{name:<{w_name}} {base_str:<{w_val}} {pr_str:<{w_val}}")

    if base_means and pr_means:
        b_geo = [x for x in base_means if x > 0]
        p_geo = [x for x in pr_means if x > 0]
        
        g_base_str = "N/A"
        g_pr_str = "N/A"
        
        if b_geo:
            g_b = math.exp(sum(math.log(x) for x in b_geo) / len(b_geo))
            g_base_str = format_val(g_b)
        if p_geo:
            g_p = math.exp(sum(math.log(x) for x in p_geo) / len(p_geo))
            g_pr_str = format_val(g_p)
            
        print(f"{'geomean':<{w_name}} {g_base_str:<{w_val}} {g_pr_str:<{w_val}}")

    if need_low_sample_note:
        print("¹ need >= 6 samples for confidence interval at level 0.95")

if __name__ == "__main__":
    main()
