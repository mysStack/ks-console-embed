#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in (1368, 1700, 3079, 3080):
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
for n in (1368, 1700, 3079, 3080):
    print(n, sorted(set(hits[n])))
needles = ["EMAIL_EXISTS", "EMAIL_EMPTY_DESC", "INVALID_EMAIL", "MAX_EAMIL_COUNT", "CURRENT_USER"]
from collections import defaultdict as dd
h = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)
for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{len(files):3} {n} {files[:6]}")
