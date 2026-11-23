#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
needles = [
    "NEW_VERSION_NUMBER_EXIST_DESC",
    "NEW_VERSION_NUMBER_INVALID_DESC",
    "GRAYSCALE_IMAGE",
    "GRAY_APP_NAME",
    "NO_SERVICE_MESH_TIP",
    "NO_WORKLOAD_FOUND_TIP",
    "UNSUPPORTED_WORKLOAD_TYPE",
    "UNFINISHED_GRAY_TASK",
    "LONG_NAME_DESC",
    "SELECT_GRAY_COMPONENT_TIP",
    "MOUNT_PATH",
    "KEY_EQ_VALUE",
    "BROKER",
    "BROKERS",
    "TAIL_UNIT",
    "SELECT_SPECIFIC_KEYS_DESC",
    "SNAPSHOT_FORM",
    "FORM_TEMPLATE",
    "CLUSTER_DIFF",
    "CONTAINERS_MAPPER",
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

# importers of high-value unnamed kids
from collections import defaultdict as dd
targets = [2083, 2315, 2063, 2881, 1295, 1039, 926, 807, 1669, 1595, 2556, 1322, 2562, 3341, 1606, 3396, 3571, 1772, 3567, 2967, 1332, 1608, 1599, 1600, 1601, 1602, 1603, 1568, 1549, 2603, 2585, 2442, 2444, 2283]
hits = dd(list)
css = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("==== importers ====")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    head = p.read_text(encoding="utf-8", errors="ignore")[:28].replace("\n", " ")
    print(n, sorted(set(hits[n])), "|", head)
