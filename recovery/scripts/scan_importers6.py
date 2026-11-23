#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN))
known = set(re.findall(r"module-(\d+)\.js", KNOWN))

parents = {
    "Env": "module-1291.js",
    "CD Placement": pairs.get("components/Forms/CD/Advance/Placement.js"),
    "CD CodeRepo": pairs.get("components/Forms/CD/Advance/CodeRepoSetting.js"),
    "CD Sync": pairs.get("components/Forms/CD/Advance/SyncSetting.js"),
    "CD BaseInfo": pairs.get("components/Forms/CD/BaseInfo.js"),
}

# reverse: who imports named CD children
targets = [
    1291, 2651, 2653, 2655, 2650, 2887, 2884, 1675,
]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
for n in targets:
    print(n, sorted(set(hits[n])))

# unnamed children of EnvironmentInput 1291
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
text = (UNPACKED / "module-1291.js").read_text(encoding="utf-8", errors="ignore")
kids = []
for m in imp.findall(text):
    mid = re.search(r"\d+", m).group()
    if mid not in known and int(mid) >= 800:
        kids.append(m)
print("1291 unnamed", list(dict.fromkeys(kids)))
