#!/usr/bin/env python3
from collections import Counter
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
needles = [
    "require.r(",
    "require.d(",
    "require.n(",
    "require.o(",
    "require.t(",
    "return require(t)",
    "return require(n)",
    "return require(e)",
]

counts = Counter()
files = {k: [] for k in needles}
for path in UNPACKED.glob("*.js"):
    text = path.read_text(errors="replace")
    for needle in needles:
        if needle in text:
            counts[needle] += 1
            if len(files[needle]) < 15:
                files[needle].append(path.name)

print("counts", dict(counts))
for needle, names in files.items():
    if names:
        print(needle, names)
