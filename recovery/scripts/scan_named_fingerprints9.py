#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("HOC withList _PL", "_PL"),
    ("HOC withList resource.baseinfo.edit", "resource.baseinfo.edit"),
    ("HOC withDefaultSecrets typo", "refecthDefaultSecret"),
    ("HOC default-class secret", "secret.kubesphere.io/is-default-class=true"),
    ("codeQuality sonarstatus", "sonarstatus"),
    ("custom template DAFAULT_TIME", "DAFAULT_TIME"),
    ("custom template DATASOURCE", "DATASOURCE"),
    ("platform /kubesphere", "/kubesphere"),
    ("unsupported not supported", "isUnsupportedResourceError"),
    ("unsupportedListResult", "unsupportedListResult"),
    ("Forms BaseInfo APP_LABEL_MODULES", "APP_LABEL_MODULES"),
    ("meter cluster CLUSTER_PROVIDER_ICON", "CLUSTER_PROVIDER_ICON"),
    ("MONITOR_PANEL_TYPE", "MONITOR_PANEL_TYPE"),
    ("CreateUidFactory", "CreateUidFactory"),
    ("signlestat typo", "signlestat"),
    ("now-30m", "now-30m"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:48} hits={len(hits):3} new={new[:4]} known={already[:2]}")
