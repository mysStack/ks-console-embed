#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
targets = [2257, 2258, 2259, 2260, 2261, 2291, 2292, 2294, 2312, 2326, 1546, 1547, 1165, 2289, 2322, 2324, 2328, 1100, 1300]
hits = defaultdict(list)
cssish = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    head = p.read_text(encoding="utf-8", errors="ignore")[:40].replace("\n", " ")
    print(n, "importers", sorted(set(hits[n])), "|", head)
