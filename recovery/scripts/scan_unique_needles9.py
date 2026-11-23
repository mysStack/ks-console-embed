#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "ALERTING_POLICY_CHECK_INTERVAL_DESC",
    "VIEW_METRIC_DATA_TCAP",
    "NO_MONITOR_METRIC",
    "CREATE_COMPOSED_APP",
    "DELETE_SERVICE",
    "DEVOPS_PROJECT_DESC",
    "CREATE_DEVOPS_PROJECT_DESC",
    "DEVOPS_PROJECT_SETTINGS",
    "ALLOWLIST",
    "CODE_REPO",
    "CREATE_CODE_REPO",
    "FEDERATED_PROJECT_PL",
    "CREATE_FEDERATED_PROJECT",
    "PROJECT_CLUSTER",
    "EDIT_CONFIGMAP",
    "EDIT_SECRET",
    "CREATE_SERVICE",
    "EDIT_EXTERNAL_ACCESS",
    "REDEPLOY_CONFIRM",
    "ROLLBACK",
    "REVISION_RECORDS",
    "AUTOSCALING",
    "EXPAND_VOLUME_DESC",
    "CREATE_SNAPSHOT_TITLE",
    "EDIT_ANNOTATIONS",
    "EDIT_RULES",
    "SET_DEFAULT_SECRET",
    "CREATE_WORKSPACE_DESC",
    "DELETE_WORKSPACE_TIP",
    "EDIT_WORKSPACE_QUOTA",
    "IMAGE_BUILDER",
    "RERUN_IMAGE_BUILDER",
    "S2I_RERUN",
    "LOG_COLLECTION_TYPE",
    "ES_ADDRESS",
    "BROKER_ADDRESS",
    "FLUENTD_ADDRESS",
    "CREATE_IP_POOL",
    "ASSIGN_WORKSPACE",
    "TAINTS",
    "EDIT_TAINTS",
    "ADD_TAINT",
    "ADD_NODE",
    "NODE_LOG",
    "OBJECT_EDIT",
    "BILLING_CONSUME",
    "RESOURCE_STATUS",
    "PIPELINE_COPY",
    "SCAN_LOGS",
    "ADVANCE_SETTINGS",
    "JENKINSFILE",
    "GRAFANA_DASHBOARD",
    "IMPORT_GRAFANA",
    "CREATE_APP_REPO",
    "APP_TEMPLATE",
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
    if 0 < len(files) <= 5:
        print("    " + ", ".join(files))
