#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "SELECT_PERSISITENT_VOLUME_CLAIM",
    "HOSTPATH_TIP",
    "HOST_PATH_EMPTY",
    "PVC_NOT_SELECT",
    "VOLUME_NAME_EXIST",
    "exprBuilder.node.names",
    "exprBuilder.node.metricThreshold",
    "CONTAINER_SECURITY_CONTEXT_DESC",
    "PATTERN_IMAGE_TAG",
    "IMAGE_PLACEHOLDER",
    "SEARCH_IMAGE",
    "DropdownContent",
    "MONITORING_TARGET",
    "SELECT_MONITORING_TARGET",
    "RESOURCE_METRICS_CONFIG",
    "CUSTOM_RULE",
    "ruleTemplate",
    "PromQL",
    "PROMQL",
    "THRESHOLD_DURATION",
    "ALERT_RULE_NAME",
    "learnMoreTip",
    "gpuLimitsArr",
    "ImageTagRadio",
    "latest tags",
    "IMAGE_TIME_TAG",
    "noWorkload",
    "getTenantClustersUrl",
    "EventBus",
    "eventKeys",
    "configReferenceImpact",
    "podStatusLocale",
    "devOpsRepos",
    "localStorage",
    "silenceUnsupported",
    "storageclasscapabilities",
    "unsupportedListResult",
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
