import json
import os

def merge(files, output_file):
    merged_data = []
    for fpath in files:
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list):
                    merged_data.extend(data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, indent=4)
    print(f"Merged {files} into {output_file}")

# Merge Run 1 (Base)
merge(['base_stable.json', 'base_unstable.json'], 'base-bench.json')

# Merge Run 2 (PR)
merge(['pr_stable.json', 'pr_unstable.json'], 'pr-bench.json')
