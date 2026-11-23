#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("stores/devops/getPipelines", "getPipelinesStore"),
    ("configs/openpitrix/version DEFAULT_QUERY", "DEFAULT_QUERY_STATUS"),
    ("configs/openpitrix/version HANDLE_TYPE", "HANDLE_TYPE_TO_SHOW"),
    ("configs/openpitrix/version STATUS_TO_ACTION_ADMIN", "STATUS_TO_ACTION_ADMIN"),
    ("KubeConfig kubeconfig.yaml", "kubeconfig.yaml"),
    ("SyncModal PRUNE", "PRUNE_PROPAGATION_POLICY_OPTIONS"),
    ("ScrollLoad isRemainingData", "isRemainingData"),
    ("Dragger enableToggleFullScreen", "enableToggleFullScreen"),
    ("NotifyConfirm confirmText", "confirmText"),
    ("SetDefaultStorageClass", "SET_AS_DEFAULT_STORAGE_CLASS"),
    ("GrafanaModal type json", "GrafanaModal"),
    ("InviteMember Modal", "INVITE_MEMBER"),
    ("CheckableText Toggle", "CheckableText"),
    ("TypeSelect debounce", "TypeSelect"),
    ("Base Banner rightIcon", "rightIcon"),
    ("Base Avatar renderClusterTip", "renderClusterTip"),
    ("steps dashborads dashboard icon", "icon: \"dashboard\""),
    ("steps deployments cdn", "icon: \"cdn\""),
    ("steps fluxcd", "FLUXCD"),
    ("steps grayreleases", "GRAY_RELEASE"),
    ("steps imagebuilder", "IMAGE_BUILDER"),
    ("steps volume.snapshot.class", "VOLUME_SNAPSHOT_CLASS"),
    ("FullscreenModal", "FullscreenModal"),
    ("UserTip Cards/Tips", "UserTip"),
    ("PATTERN_URL grafana", "PATTERN_URL"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:52} hits={len(hits):3} new={new[:4]} known={already[:2]}")
