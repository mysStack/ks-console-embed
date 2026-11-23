#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
needles = [
    "SPECIFY_NODE_DESC",
    "CLUSTER_NODE_PL",
    "EDGE_NODE_PL",
    "POD_IP_POOL",
    "POD_IP_POOL_DESC",
    "VOLUME_ADD_METADATA_DESC",
    "CLUSTER_VOLUME_DIFF_DESC",
    "EDIT",
    "showEdit",
    "CheckboxGroup",
    "fedprojects",
    "S2I_ENVIRONMENT",
    "BINARY_FILE",
    "REPO_SELECT",
    "BITBUCKET",
    "PIPELINE_PARAM",
    "INTERNET_ACCESS",
    "EXTERNAL_ACCESS",
    "NODE_SCHEDULE",
    "POD_AFFINITY",
    "PREFERRED_DURING",
    "REQUIRED_DURING",
    "MATCH_EXPRESSIONS",
    "ADD_CAPABILITY",
    "DROP_CAPABILITY",
    "LINUX_CAPABILITIES",
    "VOLUME_STORAGE_CLASS_DESC",
    "VOLUME_SIZE_TIP",
    "CREATE_VOLUME_BY_STORAGE_CLASS",
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
targets = [1050, 862, 3559, 1568, 1549, 2442, 2444, 2585, 1604, 2558, 1332, 1608, 1199, 1124, 1201, 1724, 2283, 1100, 1772, 1301, 1103, 1531, 1532, 1094, 1095]
hits = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("==== importers ====")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    head = p.read_text(encoding="utf-8", errors="ignore")[:30].replace("\n", " ")
    print(n, sorted(set(hits[n]))[:8], "|", head)
