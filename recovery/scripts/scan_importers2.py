#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
targets = [3146, 2694, 1180, 2672, 3215, 3217, 3620, 1776, 2651, 1705, 4682, 4701, 2695]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
for n in targets:
    files = sorted(set(hits[n]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{n}: {len(files)} {files}")
