#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "resourceName = \"reviews\"",
    'resourceName = "reviews"',
    "fetchReviewList",
    "repo-helm",
    "STORE_QUERY_STATUS",
    "namespacemembers",
    "storageclasscapabilities",
    "type: \"init\"",
    "type: 'init'",
    'type:"init"',
    "type: \"work\"",
    "secretKeyRef",
    "getTenantClustersUrl",
    "MemberList",
    "queryApps",
    "status_time",
    "adjustCategory",
    "KUBE_PARAMS",
    "NETWORK_PARAMS",
    "STORAGE_PARAMS",
    "KS_SETTINGS",
    "APP_DEPLOY",
    "HELM_APP_SCHEMA",
    "NOTIFICATION_CONDITION",
    "DINGTALK_KEYWORD",
    "FEISHU",
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
