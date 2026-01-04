import json
import os

def load_bench(path):
    if not os.path.exists(path):
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    # Map "benchmark name" -> {score, scoreError}
    res = {}
    for b in data:
        name = b['benchmark'].split('.')[-1]
        pm = b['primaryMetric']
        score = pm['score']
        error = pm['scoreError']
        res[name] = (score, error)
    return res

def show_fluctuation(label, path):
    print(f"\n--- {label} Fluctuation ({path}) ---")
    data = load_bench(path)
    if not data:
        print("No data found.")
        return

    print(f"{'Benchmark':<50} | {'Score':<15} | {'Error':<15} | {'Fluctuation (%)':<15}")
    print("-" * 105)
    
    unstable_keywords = ["Large"]
    
    for name, (score, error) in data.items():
        # Filter for unstable group keywords if needed, or show all
        if any(k in name for k in unstable_keywords):
            pct = (error / score) * 100 if score > 0 else 0.0
            print(f"{name:<50} | {score:,.2f}        | {error:,.2f}        | {pct:.2f}%")

show_fluctuation("Base Run (Before Opt)", "base-bench.json")
show_fluctuation("PR Run (Before Opt)", "pr-bench.json")
