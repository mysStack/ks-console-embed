#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "AUDIT_LOG_SEARCH",
    "RESOURCE_EVENT_SEARCH",
    "login-servers",
    "MangeButton",
    "consolev3",
    "consoleRouteChange",
    "getPreferredLang",
    "dist/v3dist",
    "localeManifest",
    "nodename",
    "kubectl",
    "AuditingSearch",
    "EventSearch",
    "KubeCtl",
    "MANAGE",
    "caret-up",
    "placement",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    strong = [h for h in hits if h not in {"kubectl", "MANAGE", "caret-up", "placement", "KubeCtl"}]
    if strong:
        print(p.name, hits)
