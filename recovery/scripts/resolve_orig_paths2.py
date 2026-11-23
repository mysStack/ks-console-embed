#!/usr/bin/env python3
from pathlib import Path

root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
cands = [
    "pages/projects/components/Modals/DeployApp",
    "pages/projects/components/Modals/ServiceMonitor",
    "components/Modals/CredentialCreate",
    "pages/projects/components/Modals/UpdateGateway",
    "pages/projects/components/Modals/WorkloadDelete",
    "pages/projects/components/Modals/RouteRulesEdit",
    "pages/projects/components/Modals/ServiceSetting",
    "pages/projects/components/Modals/ServiceGatewaySetting",
    "components/Modals/Pipelines/ScanRepositoryLogs",
    "components/Modals/Pipelines/Copy",
    "components/Modals/Pipelines/Base",
    "pages/projects/components/Modals/ConfigTemplate",
    "pages/projects/components/Modals/ServiceSetting/StatefulSet",
    "components/Forms/Workload/ClusterDiffSettings",
    "components/Forms/Volume/ClusterDiffSettings",
    "components/Modals/CustomMonitoring",
]
for c in cands:
    found = []
    for ext in [".js", ".jsx", "/index.js", "/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(("OK  " if found else "MISS"), c, "->", found)
