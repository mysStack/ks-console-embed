#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "SMTP_SERVER_ADDRESS",
    "ENTER_WECOM_AGENT_ID_DESC",
    "WECOM_AGENT_ID",
    "FEISHU_APP_ID_DESC",
    "DINGTALK_SECRET",
    "WEBHOOK_SETTINGS_DESC",
    "CANARY_BY_TRAFFIC_DESC",
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
