#!/usr/bin/env python3
from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
cands = [
    "components/Forms/GrayRelease/PolicyConfig/Canary/CookieMatch",
    "components/Forms/GrayRelease/PolicyConfig/Canary/HeaderMatch",
    "components/Forms/GrayRelease/PolicyConfig/Canary/OSSelect",
    "components/Forms/GrayRelease/PolicyConfig/Bluegreen/VersionSelect",
    "components/Forms/Notification/BaseForm",
    "components/Forms/Notification/BaseForm/ConditionSelect",
    "components/Forms/Notification/MailForm/Item",
    "components/Forms/Notification/DingTalkForm/Item",
    "components/Forms/Notification/DingTalkForm/KeyWords",
    "components/Forms/Notification/WeComForm/Item",
    "components/Forms/AppDeploy/BasicInfo",
    "components/Forms/CD/Advance",
    "components/Forms/CD/Advance/Parameter",
]
for c in cands:
    found = []
    for ext in [".js", ".jsx", "/index.js", "/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(("OK  " if found else "MISS"), c, "->", found)
