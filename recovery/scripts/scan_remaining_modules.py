#!/usr/bin/env python3
"""Find unique e.module / resourceName assignments not yet in KNOWN."""
from pathlib import Path
import re
from collections import defaultdict

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
KNOWN = set(re.findall(r"module-\d+\.js", KNOWN_PY))

mod_pat = re.compile(r'(?:e|t|this)\.module = "([^"]+)"')
res_pat = re.compile(r'(?:e|t|this)\.resourceName = "([^"]+)"')

by_module = defaultdict(list)
by_resource = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    if path.name in KNOWN:
        continue
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in set(mod_pat.findall(text)):
        by_module[m].append(path.name)
    for m in set(res_pat.findall(text)):
        by_resource[m].append(path.name)

print("=== unique module= not in KNOWN ===")
for name, files in sorted(by_module.items(), key=lambda x: (len(x[1]), x[0])):
    if len(files) <= 2:
        print(f"{len(files):2} {name:40} {files}")

print("\n=== unique resourceName= not in KNOWN ===")
for name, files in sorted(by_resource.items(), key=lambda x: (len(x[1]), x[0])):
    if len(files) <= 2:
        print(f"{len(files):2} {name:40} {files}")
