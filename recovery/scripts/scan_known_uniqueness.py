#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

src = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = re.findall(r'"([^"]+)": "(module-\d+\.js)"', src)
print("keys", len(pairs))
by_mod = defaultdict(list)
by_path = defaultdict(list)
prefixes = defaultdict(int)
for path, mod in pairs:
    by_mod[mod].append(path)
    by_path[path].append(mod)
    prefixes[path.split("/")[0]] += 1
print("unique_modules", len(by_mod))
print("dup_paths", sum(1 for p, ms in by_path.items() if len(set(ms)) > 1))
multi = {m: ps for m, ps in by_mod.items() if len(ps) > 1}
print("modules_with_multiple_paths", len(multi))
print("prefixes", dict(sorted(prefixes.items(), key=lambda kv: -kv[1])))
print("sample_multi", list(multi.items())[:8])
