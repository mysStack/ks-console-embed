#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))

needles = [
    "fromEnvFromReference",
    "isDuplicateEnvFrom",
    "toEnvFromReference",
    "gitops.kubesphere.io/images",
    "kustomize.namePrefix",
    "NAME_PREFIX",
    "PARMMETER_TYPES",
    "defaultSecretStore",
    "withDefaultSecrets",
    "selectedClassName",
    "S2iEnviroment",
    "CONFIGMAP_REF",
    "SECRET_REF",
    "RESOURCE_AND_KEY",
    "valuesFiles",
    "helm.values",
    "PRUNE_PROPAGATION_POLICY_OPTIONS",
    "SYNC_STRATEGY",
    "parameter_type",
    "wrapper_item_com",
    "NodeGroupProject",
    "TimeUnitInput",
    "CONFIG_MAP_OR_SECRET",
    "ENV_FROM",
    "RESOURCE_TYPE",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)

for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n}")
    print(f"    all: {files[:8]}")
    print(f"    unnamed: {unnamed[:8]}")
