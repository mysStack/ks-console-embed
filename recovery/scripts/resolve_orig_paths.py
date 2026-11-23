#!/usr/bin/env python3
from pathlib import Path

root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
cands = [
    "components/Modals/CDDelete",
    "components/Modals/FullCreate",
    "components/Modals/DevOpsCreate",
    "components/Modals/DevOpsEdit",
    "components/Modals/DevOpsAllowList",
    "components/Modals/CodeRepoCreate",
    "components/Modals/SetDefaultSecretClass",
    "components/Modals/Bill",
    "components/Modals/FedProjectCreate",
    "pages/clusters/components/Modals/UnbindCluster",
    "pages/projects/components/Modals/AlertingConfirm",
    "pages/projects/components/Modals/CreateApp",
    "pages/projects/components/Modals/CreateAppService",
    "pages/projects/components/Modals/ServiceDelete",
    "pages/projects/components/Modals/ConfigMapEdit",
    "pages/projects/components/Modals/SecretEdit",
    "pages/projects/components/Modals/GatewaySetting",
    "pages/projects/components/Modals/ExpandVolume",
    "pages/projects/components/Modals/ResourceSnapshot",
    "pages/projects/components/Modals/ResourceNamed",
    "pages/projects/components/Modals/Redeploy",
    "pages/projects/components/Modals/RollBack",
    "pages/projects/components/Modals/HPA",
    "pages/projects/components/Modals/RouteAnnotationsEdit",
    "pages/projects/components/Modals/ServiceCreate",
    "workspaces/components/Modals/WorkspaceCreate",
    "workspaces/components/Modals/QuotaEdit",
    "workspaces/components/Modals/WorkspaceDelete",
    "components/Forms/Cluster/KubeConfig",
    "components/Forms/AlertingPolicy/EditBasicInfo",
    "components/Modals/Monitoring/AlertMonitoring",
    "components/Forms/ImageBuilder/RerunForm",
    "components/Forms/Cluster/constants",
    "pages/projects/containers/CustomMonitoring/CreateDashborad",
    "pages/projects/containers/CustomMonitoring/EditDashborad",
]
for c in cands:
    found = []
    for ext in [".js", ".jsx", "/index.js", "/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(("OK  " if found else "MISS"), c, "->", found)
