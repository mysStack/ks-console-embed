#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
needles = [
    "REPLICA_LOW_SI",
    "REPLICA_LOW_PL",
    "TOTAL_REPLICAS_EMPTY_DESC",
    "ENTER_POSITIVE_INTEGER_DESC",
    "SPECIFY_REPLICAS",
    "SPECIFY_WEIGHTS",
    "HTTP_REQUEST",
    "TCP_PORT",
    "PROBE_RADIO_CONFIG",
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
    print(f"{len(files):3} {n} unnamed={unnamed[:6] or files[:5]}")

# kids of 2294
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
text = (UNPACKED / "module-2294.js").read_text(encoding="utf-8", errors="ignore")
kids = []
for m in imp.findall(text):
    mid = re.search(r"\d+", m).group()
    if mid not in known and int(mid) >= 800:
        kids.append(m)
print("2294 unnamed", list(dict.fromkeys(kids)))
text = (UNPACKED / "module-2257.js").read_text(encoding="utf-8", errors="ignore")
kids = []
for m in imp.findall(text):
    mid = re.search(r"\d+", m).group()
    if mid not in known and int(mid) >= 800:
        kids.append(m)
print("2257 unnamed", list(dict.fromkeys(kids)))
