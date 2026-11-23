#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "DELETE_CONTINUOUS_DEPLOYMENT",
    "NO_CONTINUOUS_DEPLOYMENT_RELATED_RESOURCE_DESC",
    "lb.kubesphere.local",
    "REMOVE_CLUSTER_TIP_A",
    "INPUT_KUBECONFIG",
    "CREATE_DEVOPS_PROJECT",
    "DEVOPS_PROJECT_CREDENTIAL",
    "CREATE_CODE_REPOSITORY",
    "FED_PROJECT",
    "CREATE_FEDERATED_PROJECT",
    "DEPLOY_APP",
    "CREATE_COMPOSED_APP",
    "SERVICE_MONITOR",
    "ALERTING_POLICY",
    "ALERT_MONITORING",
    "VIEW_METRIC",
    "CONFIRM_ALERT",
    "SILENCE",
    "EDIT_RULES",
    "CREATE_GATEWAY",
    "UPDATE_GATEWAY",
    "LOG_COLLECTION",
    "ES_SETTINGS",
    "KAFKA_SETTINGS",
    "FLUENTD",
    "TAINT_MANAGEMENT",
    "CORDON",
    "UNCORDON",
    "HPA",
    "HORIZONTAL_POD_AUTOSCALER",
    "REDEPLOY",
    "ROLL_BACK",
    "EXPAND_VOLUME",
    "CREATE_SNAPSHOT",
    "ANNOTATIONS_EDIT",
    "ROUTE_RULES",
    "SET_DEFAULT_SECRET_CLASS",
    "BILLING",
    "RESOURCE_CONSUMPTION",
    "CREATE_WORKSPACE",
    "DELETE_WORKSPACE",
    "EDIT_QUOTA",
    "NETWORK_POLICY",
    "IPPOOL",
    "CREATE_IPPOOL",
    "SCAN_REPO",
    "COPY_PIPELINE",
    "EDIT_JENKINSFILE",
    "RERUN",
    "IMAGE_BUILDER_RERUN",
    "CONFIGMAP_EDIT",
    "SECRET_EDIT",
    "SERVICE_CREATE",
    "DELETE_SERVICE",
    "CUSTOM_MONITORING",
    "GRAFANA",
    "PV_STATUS",
    "CLUSTER_CONFIG",
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
