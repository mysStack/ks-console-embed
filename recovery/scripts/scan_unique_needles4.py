#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "POD_IP_POOL",
    "OPENELB_NOT_READY",
    "fedPreifx",
    "ADD_NODE_SELECTOR",
    "DUPLICATE_LABELS",
    "getLocalStorageItem",
    "setLocalStorageItem",
    "NameWithAction",
    "fetchMetadata",
    "SELECT_NODE_TIP",
    "MONITORING_TARGETS",
    "allowPrivilegeEscalation",
    "ADD_EDGE_IPPOOL",
    "SELECT_EDGE_NODE",
    "ASIN_EDGE_NODE_AUTO",
    "ACCESS_NODEPORT_TIP",
    "LOAD_BALANCER_PROVIDER",
    "nodeSelector",
    "PromQLInput",
    "grafana",
    "ModifyPassword",
    "InviteMember",
    "FedProjectCreate",
    "QuotaEdit",
    "SetDefaultStorageClass",
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
