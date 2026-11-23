#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "FROM_APP_STORE_DESC",
    "CREATE_APP_DESC",
    "EDIT_MONITORING_EXPORTER",
    "COLLECTION_INTERVAL_MIN_DESC",
    "CREATE_CREDENTIAL",
    "CREDENTIAL_NAME_EXIST_DESC",
    "UPDATED_GATEWAY_TITLE",
    "UPDATE_GATEWAY_DESC",
    "DELETE_CUSTOM_SCALING_WITH_WORKLOAD",
    "NO_WORKLOAD_RELATED_RESOURCE_DESC",
    "DELETE_MULTIPLE_WORKLOADS",
    "EDIT_ROUTING_RULES",
    "UNKNOWN_SERVICE_TYPE",
    "SERVICE_EXTERNAL_ACCESS_DESC",
    "REPOSITORY_SCAN_LOGS",
    "LOGS_OBTAINED_SUCCESSFULLY",
    "PIPELINE_NAME_TIP",
    "PIPELINE_NAME_DESC",
    "KUBECONFIG_CONTENT_DESC",
    "PASSWORD_TOKEN",
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
    if 0 < len(files) <= 6:
        print("    " + ", ".join(files))
