#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "INTERNAL_TRAFFIC_DIRECTION_DESC",
    "EXTERNAL_TRAFFIC_DIRECTION_DESC",
    "SELECT_RULE_DIRECTION_TIP",
    "ADD_ALLOWLIST_ENTRY",
    "SYNC_INTERVAL_TIP",
    "SYNC_INTERVAL_INVALID",
    "APP_NOTE",
    "UPLOAD_HELM_CHART_DESC",
    "DELETE_APP_TEMPLATE_DESC",
    "ADD_VERSION_SUCCESSFUL",
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
