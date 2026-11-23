#!/usr/bin/env python3
from pathlib import Path

root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
cands = [
    "components/Forms/Pipelines/ParamsFormModal",
    "components/Modals/Pipelines/AdvanceEdit",
    "components/Modals/Pipelines/PipelineEdit",
    "pages/devops/components/Modals/JenkinsEdit",
    "components/Forms/LoggingCollection/Status",
    "components/Forms/Elasticsearch/Settings",
    "components/Forms/KafkaForm/Settings",
    "components/Forms/Fluentd/Settings",
    "components/Modals/Network/Policies",
    "components/Modals/Network/Policies/IpBlock",
    "components/Modals/Network/Policies/AddByYaml",
    "components/Modals/Network/IPPoolsCreate",
    "components/Modals/Network/IPPoolWorkspace",
    "components/Forms/Cluster/NodeList/AddNode",
    "pages/clusters/components/Modals/AddNodeType",
    "pages/clusters/components/Modals/NodeLog",
    "components/Modals/ObjectEdit",
    "components/Modals/Node/TaintManagement",
    "components/Modals/Node/TaintManagement/Batch",
    "components/Forms/Cluster/EdgeNode/AddNode",
    "pages/projects/components/Modals/RepoApp",
    "pages/projects/components/Modals/AppEdit",
    "pages/projects/components/Modals/AppTemplateEdit",
    "components/Modals/AppRepoCreate",
    "pages/apps/components/Modals/AppCreate",
    "pages/apps/components/Modals/HelmUpload",
    "pages/apps/components/Modals/AppEdit",
    "pages/apps/components/Modals/AppDeploy",
    "pages/apps/components/Modals/Confirm",
    "pages/apps/components/Modals/AppReview",
    "pages/apps/components/Modals/ReviewReject",
    "pages/apps/components/Modals/CategoryCreate",
    "pages/apps/components/Modals/CategoryAdjust",
    "pages/apps/components/Modals/AppAgreement",
    "components/Forms/Volume/ClusterDiffSettings",
    "pages/projects/components/Modals/DefaultResourceEdit",
]
for c in cands:
    found = []
    for ext in [".js", ".jsx", "/index.js", "/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(("OK  " if found else "MISS"), c, "->", found)
