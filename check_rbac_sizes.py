import json
try:
    with open('pr-bench.json') as f:
        data = json.load(f)
        found = False
        print("\n--- rbacModelSizes Results ---")
        for d in data:
            if 'rbacModelSizes' in d['benchmark']:
                found = True
                name = d['benchmark'].split('.')[-1]
                # Try to find params if available
                params = d.get('params', {})
                size = params.get('size', '')
                if size:
                    name += f" (size={size})"
                score = d['primaryMetric']['score']
                unit = d['primaryMetric']['scoreUnit']
                print(f"{name}: {score:.4f} {unit}")
        if not found:
            print("No rbacModelSizes found in pr-bench.json")
except Exception as e:
    print(f"Error: {e}")
