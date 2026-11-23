#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "app_gover.svg",
    "AppGoverIcon",
    "GatewayEmpty",
    "getLastMonitoringData",
    "PolarAngleAxis",
    "NODE_PL",
    "NodesTop5",
    "cluster_cpu_usage",
    "cluster_memory_usage_wo_cache",
    "ingress_request_cpu_usage",
    "Enable Gateway",
    "ENABLE_GATEWAY",
    "CREATE_GATEWAY",
    "CLUSTER_PROVIDERS",
    "getRoutes",
    "clusters/containers/Base/Detail",
    "core/containers/Base/Detail",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
