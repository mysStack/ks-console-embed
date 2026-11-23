#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "TAKE_OVER",
    "TAKE_OFFLINE",
    "INVALID_NOTIFICATION_CONDITION",
    "ADD_CURRENT_USER",
    "PREFIX_MATCH",
    "KEYWORDS_LIST",
    "EMPTY_KEYWORDS_DESC",
    "PUBLISH_STRATEGY_TITLE",
    "LATEST_VERSION_SCAP",
    "EXACT_MATCH",
]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in NEEDLES:
        if needle in text:
            hits[needle].append(path.name)
for needle in NEEDLES:
    files = sorted(hits[needle], key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{len(files):3} {needle}")
    if 0 < len(files) <= 8:
        print("    " + ", ".join(files))

from collections import defaultdict as dd
imp = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in (3080, 3082, 3084, 3086, 3088, 3090, 1675):
        if f"./module-{n}.js" in text:
            imp[n].append(path.name)
print("item importers")
for n, files in sorted(imp.items()):
    print(n, sorted(set(files)))
