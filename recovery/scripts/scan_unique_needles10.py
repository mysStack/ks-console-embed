#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "DEVOPS_PROJECT_CREATE_DESC",
    "NO_DEVOPS_INSTALL",
    "DEVOPS_ADMIN_DESC",
    "EDIT_ALLOWLIST",
    "CODE_REPOSITORY_EXIST_DESC",
    "DEPLOYMENT_LOCATION_EXIST_DESC",
    "USER_DASHBOARD_EMPTY_TITLE",
    "RESOURCE_CONSUMPTION_STATISTICS",
    "VOLUME_EXPAND_TIP",
    "RECREATE_CONFIRM_DESC",
    "CLUSTER_FIELD_EMPTY",
    "S2I_UPDATE_WORKLOAD",
    "S2I_UPDATA_WORKLOAD_DESC",
    "SET_AS_DEFAULT_REGISTRY_DESC",
    "SET_AS_DEFAULT",
    "PROJECT_CLUSTER",
    "EDIT_WORKSPACE_QUOTA",
    "GRAFANA_DASHBOARD",
    "monitor.svg",
    "CREATE_COMPOSED_APP",
    "DELETE_SERVICE",
    "REMOVE_CLUSTER_TIP_A",
    "DELETE_CONTINUOUS_DEPLOYMENT",
    "lb.kubesphere.local",
    "metadata.generateName",
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
