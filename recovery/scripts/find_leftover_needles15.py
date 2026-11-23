#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "REPS_ADDRESS",
    "ISSUE_FEEDBACK",
    "PART_IN_DISCUSSION",
    "CODE_CONTRIBUTE",
    "GITHUB_STAR",
    "KS_DESCRIPTION",
    "describtion",
    "fetchLimitRanges",
    "limitRanges.data",
    "MoreActions",
    "FullscreenModal",
    "kubernetesYaml",
    "cleanWs",
    "imageBuildStrategies",
    "silenceUnsupported",
    "storageclasscapabilities",
    "AUTOSCALER",
    "storageclass-autoresizer",
    "AreaColor",
    "ToggleView",
    "CLUSTER_NODE_STATUS",
    "NODES_TOP_5",
    "RESOURCE_USAGE_TITLE",
    "BillIcon",
    "quota-edit",
    "REQUESTS_CPU",
    "LIMITS_MEMORY",
    "podStatusLocale",
    "configReferenceImpact",
    "fluxcd",
    "VOLUME_SNAPSHOT_STEPS",
    "localStorage.setItem",
    "ks-username",
    "LoginConfirm",
    "PASSWORD_CONFIRM",
    "EnvVariables",
    "Metadata",
    "kubeconfig",
    "RebuildS2i",
    "ImageArtifacts",
    "GrayRelease",
    "AuditingSearch",
    "EventSearch",
    "KubeCtl",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
