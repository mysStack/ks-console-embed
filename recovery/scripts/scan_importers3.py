#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
targets = [1699, 1703, 1705, 1702, 1706, 1707, 4681, 4689, 1906]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
for n in targets:
    files = sorted(set(hits[n]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{n}: {len(files)} {files}")
