#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "CHAT_ID_TIP",
    "WEBHOOK_URL_DESC",
    "WEBHOOK_USERNAME_EMPTY_DESC",
    "SPECIFY_REQUEST_PARAMETERS_DESC",
    "KEY_EQ_VALUE",
    "BLUE_GREEN_DEPLOYMENT_DESC",
    "VERSION_OFFLINE",
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

# importers of 4697 3143
from collections import defaultdict as dd
imp = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in (4697, 3143, 1856):
        if f"./module-{n}.js" in text:
            imp[n].append(path.name)
print("importers")
for n, files in imp.items():
    print(n, sorted(set(files)))
