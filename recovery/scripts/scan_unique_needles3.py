#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "fetchHarborList",
    "IMAGE_PLACEHOLDER",
    "NO_IMAGE_FOUND",
    "nginx:latest",
    "unitOptions",
    "trimEnd",
    "exprBuilder.workload",
    "WorkloadSelect",
    "NodeSelect",
    "SELECT_NODES",
    "SELECT_WORKLOAD",
    "MONITORING_TARGET_SCAP",
    "CustomExpr",
    "EXPRESSION",
    "ALERTING_POLICY_EXPRESSION",
    "PromQL Query",
    "QUERY_EXPRESSION",
    "METRICS_QUERY",
    "selectedImageTag",
    "onSelectImageTag",
    "radioOnlyOneListContent",
    "hubType === \"dockerHub\"",
    "enableImageSearch",
    "SELINUX_CONTEXT",
    "USER_AND_USER_GROUP",
    "privileged",
    "allowPrivilegeEscalation",
    "addCapabilities",
    "dropCapabilities",
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
