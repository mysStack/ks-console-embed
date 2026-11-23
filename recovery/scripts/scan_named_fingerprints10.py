#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("actions/workspace", "workspace.quota.edit"),
    ("actions/volume", "volume.snapshotContent.baseInfo.edit"),
    ("actions/serviceaccount", "serviceaccount.role.edit"),
    ("actions/storageclass", "storageclass.pvc.autoresizer"),
    ("actions/toolbox", "toolbox.logquery"),
    ("actions/user", "user.modifypassword"),
    ("actions/service", "fedservice.gateway.edit"),
    ("actions/router", "fedproject.router.rules.edit"),
    ("actions/secret", "secret.default"),
    ("actions/resource.edit", "resource.yaml.edit"),
    ("actions/role", "role.create"),
    ("actions/project", "project.assignworkspace"),
    ("actions/resource.delete", "resource.batch.stop"),
    ("actions/pipeline", "pipeline.scanRepositoryLogs"),
    ("actions/openpitrix", "openpitrix.category.ajust"),
    ("actions/node", "node.edge.add"),
    ("actions/network", "network.ipool.assignworkspace"),
    ("actions/member", "member.remove.batch"),
    ("actions/log.collection", "log.collection.active.switch"),
    ("actions/group", "group.user.remove"),
    ("actions/imagebuilder", "imagebuilder.rerun"),
    ("actions/federated", "federated.project.add.cluster"),
    ("actions/fluxcd", "fluxcd.create"),
    ("actions/gateways", "gateways.batch.delete"),
    ("actions/devopsImageBuilder", "devops.imagebuilder.baseinfo.edit"),
    ("actions/devops", "devops.edit.allowlist"),
    ("actions/devops.credential", "devops.credential.create"),
    ("actions/custom.monitoring", "custom.monitoring.create"),
    ("actions/configmap", "configmap.create"),
    ("actions/alerting", "enable.alerting.rule"),
    ("actions/application", "crd.app.addroute"),
    ("actions/cd", "cd.sync"),
    ("actions/cluster", "cluster.updateKubeConfig"),
    ("actions/codeRepo", "codeRepo.create"),
    ("actions/PV", "pv.batch.delete"),
    ("actions/index require.context", "require.context"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:48} hits={len(hits):3} new={new[:3]} known={already[:2]}")
