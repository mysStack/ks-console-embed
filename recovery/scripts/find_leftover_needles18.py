#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "need_rebuild_",
    "fetchClusterConfigz",
    "enterCluster",
    "showNameAndAlias",
    "clusterStore",
    "ManageButton",
    "NodesTop5",
    "ResourceItem",
    "PhysicalResourceItem",
    "ServiceSelect",
    "VersionManage",
    "StoreManage",
    "AuditRecord",
    "ChartCard",
    "StatusText",
    "FluxApp",
    "Destination",
    "CleanWs",
    "clean workspace",
    "kubernetesYaml",
    "KubeConfig",
    "ModifyMember",
    "RadioButtons",
    "EmptyCard",
    "BillIcon",
    "CustomToolTip",
    "layout.js",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
