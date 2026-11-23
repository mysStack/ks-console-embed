#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "CLUSTER_MAX_PODS_DESC",
    "MAX_PODS",
    "KUBE_PODS_CIDR_DESC",
    "PODS_CIDR",
    "HELM_APP_SCHEMA_FORM_TIP",
    "UPLOAD_ARTIFACT_FILE",
    "CUSTOM_PIPELIEN",
    "INVALID_WORKSPACE_NAME",
    "ADD_NODE_TO_THE_CLUSTER",
    "ADD_STRATEGY",
    "BUILD_ENVIRONMENT",
    "ADD_ENVIRONMENT_VARIABLE",
    "WORKSPACE_NAME_EXISTS_DESC",
    "CLUSTER_KUBESPHERE_SETTINGS_DESC",
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
