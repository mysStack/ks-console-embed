#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "imagebuildStrategies",
    "imagebuilds",
    "namespacemembers",
    "getTenantClustersUrl",
    "kapis/tenant.kubesphere.io/v1beta1${path}/clusters",
    "status_time",
    "resourceName = \"reviews\"",
    "t.resourceName = \"reviews\"",
    "e.resourceName = \"reviews\"",
    "clustersConfig",
    "filterResourceLevel",
    "isUnsupportedResourceError",
    "unsupportedListResult",
    "silenceUnsupportedListReject",
    "continues = { 1: \"\" }",
    "continues = {",
    "this.module = \"imagebuilds\"",
    "e.module = \"imagebuilds\"",
    "kapis/builder.kubesphere.io/v1alpha1",
    "storageclasscapabilities",
    "safeAtob",
    "resourceName = \"node\"",
    "e.resourceName = \"node\"",
    "t.resourceName = \"node\"",
    "${this.apiVersion}/nodes",
    "type: \"statistics\"",
    "getApi = () => `${this.apiVersion}/nodes`",
    "handleUpload",
    "ReactFileReader",
    "getAllYAMLValue",
    "STOP_TITLE_SI",
    "hideAlias",
    "closable={readOnly}",
    "member.list",
    "originData = []",
    "s2iListReject",
    "listReject",
    "workload/env",
    "configmaps/${name}/env",
    "secrets/${name}/env",
    "rank/workspace",
    "openpitrix/store",
    "app_id",
    "category_id",
    "meter/cluster",
    "hasNameSpacesType",
    "getListConfig",
    "federated.list",
    "remainingItemCount",
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
