#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "SELECT_HOST_CLUSTER_WARNING",
    "PARAMETER_NAME_EMPTY_DESC",
    "ENABLE_TAG_BRANCH_DISCOVERY",
    "FEDPROJECT_CANNOT_DEPLOY_APP_TIP",
    "SLACK_TOKEN_DESC",
    "MIRROR_POLICY_DESC",
    "TRAFFIC_DISTRIBUTION",
    "DINGTALK_CONVERSATION",
    "WECOM_AGENT_ID",
    "FEISHU_APP_ID",
    "MAIL_SERVER",
    "SMTP_SERVER",
    "WEBHOOK_URL",
    "KEYWORD",
    "RECEIVER_SETTINGS",
    "NOTIFICATION_LANGUAGE",
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
