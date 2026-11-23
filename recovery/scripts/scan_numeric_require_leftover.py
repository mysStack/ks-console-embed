#!/usr/bin/env python3
"""Leftover numeric require() in unpacked after Babel rewriteWebpack4Runtime.

Only report source that still has require(N). Rewrite is a separate step
and must keep evidence (target module exists).
"""
from collections import Counter, defaultdict
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
pat = re.compile(r"""require\(\s*(\d+)\s*\)""")
dyn_pat = re.compile(r"""require\(\s*([^)'"]+)\)""")

hits = Counter()
files = []
by_file = defaultdict(list)
for path in sorted(UNPACKED.glob("module-*.js")):
    text = path.read_text(encoding="utf-8", errors="ignore")
    found = pat.findall(text)
    if found:
        hits.update(found)
        files.append((path.name, found[:12], len(found)))
        by_file[path.name] = found

print("files_with_numeric_require", len(files))
print("unique_ids", len(hits))
print("top_ids", hits.most_common(30))
print("files", files[:40])

print("\n=== id -> target exists? ===")
for module_id, count in hits.most_common(40):
    target = UNPACKED / f"module-{module_id}.js"
    print(f"  {module_id} count={count} exists={target.exists()} size={target.stat().st_size if target.exists() else 0}")

print("\n=== evidence snippets ===")
for name, found, n in files[:25]:
    text = (UNPACKED / name).read_text(encoding="utf-8", errors="ignore")
    snippets = []
    for m in pat.finditer(text):
        start = max(0, m.start() - 40)
        end = min(len(text), m.end() + 40)
        snippets.append(text[start:end].replace("\n", " | "))
        if len(snippets) >= 3:
            break
    print(f"{name} n={n} ids={found} snip={snippets}")
