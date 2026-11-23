#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN_PY = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')

importers = defaultdict(list)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)

mods = [3262, 3263, 3264, 3265, 3266, 3248, 3249, 3250, 2829, 2831, 2833, 2835]
for n in mods:
    name = f"module-{n}.js"
    text = (UNPACKED / name).read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    kids = [m for m in dict.fromkeys(imp.findall(text)) if int(re.search(r"\d+", m).group()) >= 800]
    unique = []
    for k in keys:
        files = sorted(t_index[k])
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
        if files == [name] or unnamed == [name]:
            unique.append(k)
    imps = sorted(set(importers[name]))
    print(f"\n=== {name} importers={imps}")
    print("  kids", kids)
    print("  t", keys[:15])
    print("  unique_t", unique[:12])
    # show distinctive identifiers
    for needle in ["export {", "export default", "function(", "name: \"", "waitForQualityGate", "mail", "cd", "INPUT_PARAMETERS", "BRANCH_SI", "sortHandlerClassName", "editing", "handleEditClick"]:
        if needle in text:
            print("  has", repr(needle))
