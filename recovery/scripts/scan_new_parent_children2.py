#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

parents = [
    "components/Forms/GrayRelease/PolicyConfig/Canary/ByContent.js",
    "components/Forms/GrayRelease/PolicyConfig/Bluegreen.js",
    "components/Forms/Notification/MailForm.js",
    "components/Forms/Notification/DingTalkForm.js",
    "components/Forms/Notification/WeComForm.js",
    "components/Forms/Notification/SlackForm.js",
    "components/Forms/Notification/WebhookForm.js",
    "components/Forms/Notification/FeiShuForm.js",
    "components/Forms/AppDeploy/AppConfig/SchemaForm.js",
    "components/Forms/AppDeploy/BasicInfo/Placement.js",
    "components/Forms/CD/Advance/Placement.js",
    "components/Forms/Cluster/ParamInput.js",
]
for name in parents:
    mod = pairs.get(name)
    if not mod:
        print("MISS", name)
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known_mods and int(mid) >= 800:
            kids.append(m)
    print(f"{name} -> {mod}")
    print("  unnamed:", list(dict.fromkeys(kids)))
