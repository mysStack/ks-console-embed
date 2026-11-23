#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
targets = [
    1179, 2682, 2684, 2687, 2691, 2693, 2698, 1712, 3145, 3149,
    1608, 1610, 3214, 3216, 3218, 2654, 3282, 3286, 1199, 3280,
    2671, 2673, 2675, 2669, 3614, 3616, 3618, 2598, 2600, 1332,
    2690, 2681, 3149,
]
hits = defaultdict(list)
needles = {n: f'./module-{n}.js' for n in targets}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n, needle in needles.items():
        if needle in text:
            hits[n].append(path.name)
for n in targets:
    files = sorted(set(hits[n]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{n}: {len(files)} {files[:12]}")
