#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "ingress_request_cpu_usage",
    "ingress_request_memory_bytes",
    "GatewayMonitorStore",
    "startAutoRefresh",
    "hostGateway",
    "ProjectGatewayList",
    "CHANGE_PASSWORD_LATER",
    "CHANGE_PASSWORD_TIP",
    "CHANGE_PASSWORD",
    "PASSWORD_MUST",
    "PASSWORD_LENGTH",
    "stores/user",
    "PATTERN_PASSWORD",
    "stores/monitoring/gateway",
    "ObjectMapper",
    "joinSelector",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
