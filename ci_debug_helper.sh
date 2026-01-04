#!/bin/bash
set -e

# ==========================================
# jCasbin CI Debug Helper Script
# ==========================================

echo ">>> [1/6] Checking environment dependencies..."
if ! command -v java &> /dev/null; then
    echo "Installing dependencies..."
    apt-get update -qq
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq tzdata
    apt-get install -y -qq openjdk-8-jdk maven git jq python3 curl
else
    echo "Dependencies already installed. Skipping."
fi

# ==========================================
# Safety Mechanism
# ==========================================
if [ "$PWD" == "/workspace" ]; then
    echo "----------------------------------------------------------------"
    echo "WARNING: You are running in the mounted volume /workspace."
    echo "The benchmark script performs 'git checkout' which changes files."
    echo "To protect your Windows host files, we will copy the project"
    echo "to a safe internal directory: /root/jcasbin-debug"
    echo "----------------------------------------------------------------"
    
    rm -rf /root/jcasbin-debug
    cp -r /workspace /root/jcasbin-debug
    cd /root/jcasbin-debug
    echo ">>> Switched working directory to: $(pwd)"
fi

# ==========================================
# Git Configuration & Variables
# ==========================================
echo ">>> [2/6] Configuring Git and calculating SHAs..."
# We need to fetch origin to ensure we have the commits
git config --global --add safe.directory "*"
git fetch -q origin master

export GITHUB_WORKSPACE="$PWD"
# HEAD is current; BASE is origin/master
export HEAD_SHA=$(git rev-parse HEAD)
export BASE_SHA=$(git rev-parse origin/master)

echo "    BASE_SHA: $BASE_SHA"
echo "    HEAD_SHA: $HEAD_SHA"
echo "----------------------------------------"
echo "Commit Info for BASE_SHA:"
git log -n 1 "$BASE_SHA"
echo "----------------------------------------"

# ==========================================
# Define run_bench function (Matches CI)
# ==========================================
run_bench () {
    local sha="$1"
    local out="$2"
    local pattern_all='org\.casbin\.jcasbin\.main\.benchmark\.(EnforcerBenchmark|CachedEnforcerBenchmark|RoleManagerBenchmark|ManagementApiBenchmark)\..*'
    local pattern_unstable='.*(RoleManagerBenchmark\.roleManagerLarge|RoleManagerBenchmark\.buildRoleLinks.*Large).*'
    
    echo ">>> Checkout $sha..."
    git checkout -f "$sha"
    # Clean but exclude json files (results from previous runs)
    git clean -fdx -e "*.json"

    # Inject JMH dependencies into pom.xml if not present
    if ! grep -q "jmh-core" pom.xml; then
      sed -i 's|</dependencies>|    <dependency><groupId>org.openjdk.jmh</groupId><artifactId>jmh-core</artifactId><version>1.37</version><scope>test</scope></dependency>\n        <dependency><groupId>org.openjdk.jmh</groupId><artifactId>jmh-generator-annprocess</artifactId><version>1.37</version><scope>test</scope></dependency>\n    </dependencies>|' pom.xml
    fi

    echo ">>> Compiling..."
    mvn -q clean test-compile dependency:build-classpath -DincludeScope=test -Dmdep.outputFile=cp.txt
    local tmp_log
    tmp_log="$(mktemp)"

    set +e
    # 1. Run Stable Benchmarks (Realistic Mode for Simulation)
    echo ">>> Running Stable Benchmarks (Realistic Mode)..."
    java -Xms3g -Xmx3g -Xmn2g -XX:+AlwaysPreTouch -cp "target/test-classes:target/classes:$(cat cp.txt)" org.openjdk.jmh.Main \
      -wi 3 -i 3 -f 1 \
      -w 1 -r 1 \
      -prof gc \
      -rf json -rff "stable.json" \
      -e "$pattern_unstable" \
      "$pattern_all" | tee "$tmp_log"
    
    # 2. Run Unstable Benchmarks (Realistic Mode)
    echo ">>> Running Unstable Benchmarks (Realistic Mode)..."
    java -Xms4g -Xmx4g -Xmn3g -XX:+AlwaysPreTouch -XX:+UseParallelGC -cp "target/test-classes:target/classes:$(cat cp.txt)" org.openjdk.jmh.Main \
      -wi 3 -i 3 -f 2 \
      -w 2s -r 2s \
      -prof gc \
      -gc true \
      -rf json -rff "unstable.json" \
      "$pattern_unstable" | tee -a "$tmp_log"
    
    local rc="${PIPESTATUS[0]}"
    set -e

    echo "--- DEBUG: File listing after benchmarks ---"
    ls -la
    echo "--- DEBUG: JSON file sizes ---"
    ls -l *.json || true
    echo "----------------------------------------"

    # Merge results
    if [ -f "stable.json" ] && [ -f "unstable.json" ]; then
        jq -s 'add' stable.json unstable.json > "$GITHUB_WORKSPACE/$out"
    elif [ -f "stable.json" ]; then
        mv stable.json "$GITHUB_WORKSPACE/$out"
    elif [ -f "unstable.json" ]; then
        mv unstable.json "$GITHUB_WORKSPACE/$out"
    else
        echo "[]" > "$GITHUB_WORKSPACE/$out"
    fi

    if [[ "$rc" != "0" ]]; then
      if grep -q "No matching benchmarks" "$tmp_log"; then
         echo "Warning: No matching benchmarks found or JMH exited with error. Check logs."
         return 0
      fi
      if [ -s "$GITHUB_WORKSPACE/$out" ] && [ "$(cat "$GITHUB_WORKSPACE/$out")" != "[]" ]; then
          echo "Warning: JMH exited with error code $rc but results were generated."
          return 0
      fi
      return "$rc"
    fi
}

# ==========================================
# Run Benchmarks
# ==========================================
echo ">>> [3/6] Running Base Benchmark ($BASE_SHA)..."
run_bench "$BASE_SHA" "base-bench.json"

echo ">>> [4/6] Running PR Benchmark ($HEAD_SHA)..."
run_bench "$HEAD_SHA" "pr-bench.json"

# ==========================================
# Generate Report
# ==========================================
echo ">>> [5/6] Generating Python Report..."
python3 - <<'PY' > jcasbin_benchmark_PRcheck.txt
import json
import math
import os
from typing import Any, Dict, Optional, Tuple, List

def load_results(path: str) -> Dict[str, Dict[str, float]]:
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        return {}

    out: Dict[str, Dict[str, float]] = {}
    for bench in data:
        key = map_benchmark_key(bench)
        if not key:
            continue

        primary = bench.get("primaryMetric", {})
        sec, _ = metric_to_ns_per_op(primary)
        
        b_op = 0.0
        secondary = bench.get("secondaryMetrics", {})
        alloc_rate = secondary.get("·gc.alloc.rate.norm")
        if alloc_rate:
            unit = str(alloc_rate.get("scoreUnit", "") or "")
            if unit == "B/op":
                b_op = float(alloc_rate.get("score", 0.0))

        rec = out.setdefault(key, {})
        rec["ns_op"] = sec
        rec["b_op"] = b_op
    return out

def metric_to_ns_per_op(metric: Dict[str, Any]) -> Tuple[float, float]:
    score = float(metric.get("score", 0.0))
    err = float(metric.get("scoreError", 0.0) or 0.0)
    unit = str(metric.get("scoreUnit", "") or "")

    if unit.endswith("/op"):
        t_unit = unit.split("/", 1)[0]
        mult = {"ns": 1.0, "us": 1e3, "ms": 1e6, "s": 1e9}.get(t_unit)
        if mult is None:
            return (score, err)
        return (score * mult, err * mult)

    if unit.startswith("ops/"):
        denom = unit.split("/", 1)[1]
        mult = {"ns": 1e-9, "us": 1e-6, "ms": 1e-3, "s": 1.0}.get(denom)
        if mult is None:
            return (1.0 / score * 1e9 if score else 0.0, 0.0)
        
        ops_per_sec = score / mult
        ns_op = 1e9 / ops_per_sec if ops_per_sec else 0.0
        return (ns_op, 0.0)

    return (score, err)

def map_benchmark_key(bench: Dict[str, Any]) -> Optional[str]:
    name = str(bench.get("benchmark", "") or "")
    params = bench.get("params") or {}
    
    if "." in name:
        method = name.rsplit(".", 1)[-1]
    else:
        method = name

    if method == "rbacModelSizes":
        size = str(params.get("size", "") or "")
        if size in ("small", "medium", "large"):
            return f"RBACModelSizes/{size}"
        return None

    if method in ("addPolicy", "removePolicy", "hasPolicy"):
        size_val = str(params.get("currentRuleSize", "") or "")
        size_map = {"1000": "Small", "10000": "Medium", "100000": "Large"}
        suffix = size_map.get(size_val, "")
        if suffix:
            return f"{method[0].upper()}{method[1:]}{suffix}"
        return None

    mapping = {
        "rbacModel": "RBACModel",
        "abacModel": "ABACModel",
        "abacRuleModel": "ABACRuleModel",
        "rbacModelWithResourceRoles": "RBACModelWithResourceRoles",
        "rbacModelWithDomains": "RBACModelWithDomains",
        "rbacModelWithDeny": "RBACModelWithDeny",
        "rbacModelWithDomainPatternLarge": "RBACModelWithDomainPatternLarge",
        "cachedRbacModel": "CachedRBACModel",
        "cachedAbacModel": "CachedABACModel",
        "cachedRbacModelWithResourceRoles": "CachedRBACModelWithResourceRoles",
        "cachedRbacModelWithDomains": "CachedRBACModelWithDomains",
        "cachedRbacModelWithDeny": "CachedRBACModelWithDeny",
        "cachedRbacModelMediumParallel": "CachedRBACModelMediumParallel"
    }
    
    if method in mapping:
        return mapping[method]
    
    return method[0].upper() + method[1:]

def fmt_ns(ns: float) -> str:
    if ns < 0 or math.isnan(ns): return "-"
    return f"{ns:,.1f}"

def fmt_b_op(b: float) -> str:
    if b < 0 or math.isnan(b): return "-"
    return f"{b:,.0f}"

def get_status(diff: float, is_unstable: bool) -> str:
    threshold = 0.15 if is_unstable else 0.10
    if diff < -threshold:
        return "🚀"
    elif diff > threshold:
        return "🐌"
    else:
        return "➡️"

def geomean(values: List[float]) -> float:
    vals = [v for v in values if v > 0]
    if not vals:
        return 0.0
    return math.exp(sum(math.log(v) for v in vals) / len(vals))

base = load_results("base-bench.json")
pr = load_results("pr-bench.json")
all_keys = sorted(list(set(base.keys()) | set(pr.keys())))

def is_unstable_bench(name: str) -> bool:
    return "Large" in name

print("### Benchmark Performance Report (ns/op)")
print("| Benchmark | Base (ns/op) | PR (ns/op) | Change | Status |")
print("| :--- | :--- | :--- | :--- | :--- |")

base_vals = []
pr_vals = []

for k in all_keys:
    b_ns = base.get(k, {}).get("ns_op", 0.0)
    p_ns = pr.get(k, {}).get("ns_op", 0.0)

    if b_ns > 0 and p_ns > 0:
        base_vals.append(b_ns)
        pr_vals.append(p_ns)
        diff = (p_ns - b_ns) / b_ns
        status = get_status(diff, is_unstable_bench(k))
        diff_str = f"{diff:+.2%}"
    else:
        diff_str = "-"
        status = "-"

    print(f"| {k} | {fmt_ns(b_ns)} | {fmt_ns(p_ns)} | {diff_str} | {status} |")
PY

echo ">>> [6/6] Done! Report generated at jcasbin_benchmark_PRcheck.txt"
echo "--------------------------------------------------------"
cat jcasbin_benchmark_PRcheck.txt
