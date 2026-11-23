#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
needles = [
    "e.module =",
    "this.module =",
]
# remaining unique children
needles2 = [
    "VOLUME_SIZE_TIP",
    "editVolumeTemplate",
    "editVolume",
    "CLUSTER_VOLUME_DIFF",
    "ACCESS_MODE_TCAP",
    "limitrange",
    "namespacemembers",
    "getTenantClustersUrl",
    "fetchReviewList",
    "silenceUnsupported",
    "federated.list",
    "storageclasscapabilities",
    "imgBuilder",
    "imageBuildStrategies",
    "imageBuilderRun",
    "listReject",
    "getLocalStorageItem",
    "NameWithAction",
    "podStatusLocale",
    "configReferenceImpact",
    "devOpsRepos",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles2:
        if n in text:
            h[n].append(path.name)
for n in needles2:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n} unnamed={unnamed[:8] or files[:5]}")

from collections import defaultdict as dd
targets = [3560, 1772, 1548, 1568, 1549, 1301, 1103, 1124, 1201, 1332, 1608, 1604, 2283, 2884, 2887, 1675]
hits = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("==== importers ====")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    head = p.read_text(encoding="utf-8", errors="ignore")[:32].replace("\n", " ")
    print(n, sorted(set(hits[n]))[:8], "|", head)
