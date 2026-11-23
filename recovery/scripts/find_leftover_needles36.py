#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "workspace-item",
    "kubesphere.io/member-count",
    "DEVOPS_PROJECT_NUMBER",
    "cluster_pod_quota",
    "cluster_disk_size_capacity",
    "clusters/components/Modals/ClusterSelect",
    "showSelect",
    "HOW_TO_INVITE_USERS",
    "DEVOPS_BASEINFO_DESC",
    "APP_STORE",
    "default-workspace.svg",
    "getRadarOptions",
    "NodesTop5",
    "NodesStatus",
    "ManageButton",
    "kubesphere.io/devops-count",
    "kubesphere.io/namespace-count",
    "workspaces/components/Modals/WorkspaceSelect",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
