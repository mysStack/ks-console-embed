#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "DINGTALK_SETTINGS",
    "WECOM_SETTINGS",
    "FEISHU_SETTINGS",
    "SLACK_TOKEN",
    "WEBHOOK_SETTINGS",
    "MAIL_SETTINGS",
    "NOTIFICATION_CONDITION_SETTING",
    "GRAY_RELEASE_VERSION",
    "CANARY_BY_TRAFFIC",
    "CANARY_BY_CONTENT",
    "BLUE_GREEN_DEPLOYMENT",
    "MIRROR_POLICY",
    "CD_SETTINGS",
    "HELM_PARAMETERS",
    "KUSTOMIZE",
    "SYNC_STRATEGY",
    "PARAM_KEY",
    "COMPONENT_SELECT",
    "SCHEMA_FORM",
    "COOKIE_MATCH",
    "HEADER_MATCH",
    "SELECT_COMPONENT",
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
