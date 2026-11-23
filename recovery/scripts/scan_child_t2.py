#!/usr/bin/env python3
from pathlib import Path
import re
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
mods = [3146, 3148, 2694, 1180, 2688, 1620, 2672, 3215, 1718, 3217, 1719,
        3620, 3622, 1776, 3285, 2596, 2599, 2651, 1617, 1705, 4682, 4701]
pat = re.compile(r't\("([^"]+)"\)')
for n in mods:
    p = UNPACKED / f"module-{n}.js"
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(pat.findall(text)))
    head = text[:80].replace("\n", " ")
    print(f"=== {n} keys={keys[:8]} head={head[:70]}")

NEEDLES = [
    "SLACK_TOKEN",
    "CANARY_BY_TRAFFIC",
    "MIRROR_POLICY",
    "SCHEMA_FORM",
    "COMPONENT_NAME",
    "PARAM_INPUT",
]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in NEEDLES:
        if needle in text:
            hits[needle].append(path.name)
print("\n=== uniqueness ===")
for needle in NEEDLES:
    files = sorted(hits[needle], key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{len(files):3} {needle} {files[:6]}")
