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

def parse_alloc_metric(metric):
    """Parses allocation metric (B/op)."""
    score = float(metric.get("score", 0.0))
    error = float(metric.get("scoreError", 0.0))
    # We assume B/op, but could check unit if needed
    return score, error

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
        
        # Extract primary metric (Time)
        primary = b.get("primaryMetric", {})
        val_ns, err_ns = metric_to_ns_per_op(primary)
        
        # Extract secondary metric (Alloc)
        secondary = b.get("secondaryMetrics", {})
        alloc_metric = secondary.get("gc.alloc.rate.norm", {})
        alloc_val, alloc_err = parse_alloc_metric(alloc_metric)
        
        # Extract rounds/iterations if available
        # JMH 'measurementIterations'
        rounds = int(b.get("measurementIterations", 1))
        
        grouped[name].append({
            "time_val": val_ns,
            "time_err": err_ns,
            "alloc_val": alloc_val,
            "alloc_err": alloc_err,
            "rounds": rounds
        })
        
    # Aggregate
    aggregated = {}
    for name, entries in grouped.items():
        if not entries: continue
        
        # Time Stats
        time_vals = [e["time_val"] for e in entries]
        time_mean = sum(time_vals) / len(time_vals)
        
        if len(time_vals) > 1:
            time_var = sum((x - time_mean) ** 2 for x in time_vals) / (len(time_vals) - 1)
            time_std = math.sqrt(time_var)
        else:
            time_std = entries[0]["time_err"]
            
        # Alloc Stats
        alloc_vals = [e["alloc_val"] for e in entries]
        alloc_mean = sum(alloc_vals) / len(alloc_vals)
        # Alloc usually has very low variance between forks for deterministic code,
        # but we calculate stddev anyway.
        if len(alloc_vals) > 1:
            alloc_var = sum((x - alloc_mean) ** 2 for x in alloc_vals) / (len(alloc_vals) - 1)
            alloc_std = math.sqrt(alloc_var)
        else:
            alloc_std = entries[0]["alloc_err"]

        # Total rounds (approximate)
        total_rounds = sum(e["rounds"] for e in entries)
            
        aggregated[name] = {
            "time": {"mean": time_mean, "stddev": time_std},
            "alloc": {"mean": alloc_mean, "stddev": alloc_std},
            "rounds": len(entries) # Number of shards/samples
        }
    return aggregated

def format_time_val(val_ns):
    if val_ns is None: return "N/A"
    if val_ns < 1000: return f"{val_ns:.2f}ns"
    if val_ns < 1e6: return f"{val_ns/1e3:.2f}us"
    if val_ns < 1e9: return f"{val_ns/1e6:.2f}ms"
    return f"{val_ns/1e9:.2f}s"

def format_alloc_val(val_b):
    if val_b is None: return "N/A"
    # Usually integer bytes, but mean can be float
    return f"{int(val_b)} B/op"

def print_table(title, unit_label, data_extractor, format_func, all_names, base_map, pr_map):
    w_name = 50
    w_val = 20
    
    print(f"\n{title}")
    print(f"{'':<{w_name}}│   old base.json    │   new pr.json      │")
    print(f"{'':<{w_name}}│   {unit_label:<17}│   {unit_label:<17}│")

    base_means = []
    pr_means = []
    
    need_low_sample_note = False
    
    for name in all_names:
        base_entry = base_map.get(name)
        pr_entry = pr_map.get(name)
        
        base_val = data_extractor(base_entry)["mean"] if base_entry else 0
        pr_val = data_extractor(pr_entry)["mean"] if pr_entry else 0
        
        base_std = data_extractor(base_entry)["stddev"] if base_entry else 0
        pr_std = data_extractor(pr_entry)["stddev"] if pr_entry else 0
        
        base_rounds = base_entry["rounds"] if base_entry else 0
        pr_rounds = pr_entry["rounds"] if pr_entry else 0

        if base_val > 0: base_means.append(base_val)
        if pr_val > 0: pr_means.append(pr_val)

        def format_cell(val, std, rounds):
            if val == 0: return "N/A"
            
            # For B/op, std is often 0 or very small.
            if std == 0:
                std_str = ""
            elif rounds < 2 and std == 0:
                std_str = "± ∞"
            else:
                pct = (std / val) * 100
                if pct < 0.01: std_str = ""
                else: std_str = f"± {pct:.0f}%"
            
            note = ""
            if rounds < 6 and std == 0: # Only warn if we don't have a valid error estimate
                note = "¹"
                # Side effect in print_table is tricky, but acceptable for this script
                nonlocal need_low_sample_note
                need_low_sample_note = True
            
            s = format_func(val)
            if std_str:
                s += f" {std_str}"
            if note:
                s += f" {note}"
            return s

        base_str = format_cell(base_val, base_std, base_rounds) if base_entry else "N/A"
        pr_str = format_cell(pr_val, pr_std, pr_rounds) if pr_entry else "N/A"

        print(f"{name:<{w_name}} {base_str:<{w_val}} {pr_str:<{w_val}}")
        
    # GeoMean
    if base_means and pr_means:
        b_geo = [x for x in base_means if x > 0]
        p_geo = [x for x in pr_means if x > 0]
        
        g_base_str = "N/A"
        g_pr_str = "N/A"
        
        if b_geo:
            g_b = math.exp(sum(math.log(x) for x in b_geo) / len(b_geo))
            g_base_str = format_func(g_b)
        if p_geo:
            g_p = math.exp(sum(math.log(x) for x in p_geo) / len(p_geo))
            g_pr_str = format_func(g_p)
            
        print(f"{'geomean':<{w_name}} {g_base_str:<{w_val}} {g_pr_str:<{w_val}}")
        
    return need_low_sample_note

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

    # Table 1: Execution Time
    note1 = print_table(
        "Execution Time:", 
        "sec/op", 
        lambda x: x["time"], 
        format_time_val, 
        all_names, base_map, pr_map
    )

    # Table 2: Memory Allocation
    note2 = print_table(
        "Memory Allocation:", 
        "B/op", 
        lambda x: x["alloc"], 
        format_alloc_val, 
        all_names, base_map, pr_map
    )

    if note1 or note2:
        print("\n¹ need >= 6 samples for confidence interval at level 0.95")

if __name__ == "__main__":
    main()