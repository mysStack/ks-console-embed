#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))

needles = [
    "FROM_CONFIGMAP",
    "FROM_SECRET",
    "DUPLICATE_KEYS",
    "ENVIRONMENT_INVALID_TIP",
    "ENVIRONMENT_CANNOT_BE_EMPTY",
    "KEY_IN_RESOURCE",
    "ADD_ENVIRONMENT_VARIABLE",
    "CREATE_CONFIG",
    "BATCH_REFERENCE",
    "ENVIRONMENT_REFERENCE_PL",
    "ADD_ENVIRONMENT_REFERENCE",
    "NO_CONFIGMAP_SECRET",
    "ENVIRONMENT_PREFIX",
    "BATCH_REFERENCE_DESC",
    "CONFIGMAP_PL",
    "PATTERN_ENV_NAME",
    "envType",
    "customization",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)
for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n}")
    print(f"    unnamed: {unnamed[:8] or files[:6]}")

# CSS vs JS for env kids
for mid in (2252, 2254, 2255, 1535, 1168, 934, 1000):
    p = UNPACKED / f"module-{mid}.js"
    text = p.read_text(encoding="utf-8", errors="ignore")[:200]
    print("---", mid, text.split("\n")[0][:80], "len", p.stat().st_size)
