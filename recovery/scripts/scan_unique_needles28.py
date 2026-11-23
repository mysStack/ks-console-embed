#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
needles = [
    "PATTERN_TAG_VALUE_INVALID_TIP",
    "ADD_SERVICE_ADDRESS",
    "PROTOCOL_VALUE",
    "CERTIFICATE_VALUE",
    "PATH_VALUE",
    "SERVICE_VALUE",
    "PORT_VALUE",
    "ROUTE_ADD_METADATA_DESC",
    "SPECIFY_SUBPATH",
    "CONTAINER_LOG_PATH",
    "GID_RANGE_TIP",
    "IMMEDIATE_BINDING",
    "BINDING_WAIT",
    "NEW_VERSION_NUMBER",
    "NEW_VERSION_NUMBER_DESC",
    "NEW_VERSION_NUMBER_EMPTY_DESC",
    "GRAYSCALE_VERSION",
    "GRAYSCALE_REPLICA",
    "VERSIONS",
    "SELECT_ROLE_TIP",
    "EMPTY_KEY",
    "AVAILABLE_QUOTAS",
    "REQUEST_EXCEED_LIMIT",
    "REQUEST_EXCEED_AVAILABLE_QUOTA",
    "CPU_REQUEST",
    "GPU_TYPE",
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
    print(f"{len(files):3} {n} unnamed={unnamed[:8] or files[:5]}")

from collections import defaultdict as dd
targets = [1904, 4671, 4672, 4674, 4679, 4673, 4678, 1905, 1903]
hits = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("==== gray importers ====")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    if not p.exists():
        print(n, "MISS")
        continue
    head = p.read_text(encoding="utf-8", errors="ignore")[:24].replace("\n", " ")
    print(n, sorted(set(hits[n])), "|", head)
