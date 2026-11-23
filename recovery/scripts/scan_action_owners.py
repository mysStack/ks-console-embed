#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
PAIRS = {
    "actions/workspace.js": "workspace.quota.edit",
    "actions/volume.js": "volume.snapshotContent.baseInfo.edit",
    "actions/serviceaccount.js": "serviceaccount.role.edit",
    "actions/storageclass.js": "storageclass.pvc.autoresizer",
    "actions/toolbox.js": "toolbox.logquery",
    "actions/user.js": "user.modifypassword",
    "actions/service.js": "fedservice.gateway.edit",
    "actions/router.js": "fedproject.router.rules.edit",
    "actions/secret.js": "secret.default",
    "actions/resource.edit.js": "resource.yaml.edit",
    "actions/role.js": "role.create",
    "actions/project.js": "project.assignworkspace",
    "actions/resource.delete.js": "resource.batch.stop",
    "actions/pipeline.js": "pipeline.scanRepositoryLogs",
    "actions/openpitrix.js": "openpitrix.category.ajust",
    "actions/node.js": "node.edge.add",
    "actions/network.js": "network.ipool.assignworkspace",
    "actions/member.js": "member.remove.batch",
    "actions/log.collection.js": "log.collection.active.switch",
    "actions/group.js": "group.user.remove",
    "actions/imagebuilder.js": "imagebuilder.rerun",
    "actions/federated.js": "federated.project.add.cluster",
    "actions/gateways.js": "gateways.batch.delete",
    "actions/devops.js": "devops.edit.allowlist",
    "actions/devops.credential.js": "devops.credential.create",
    "actions/custom.monitoring.js": "custom.monitoring.create",
    "actions/configmap.js": "configmap.create",
    "actions/alerting.js": "enable.alerting.rule",
    "actions/application.js": "crd.app.addroute",
    "actions/cd.js": "cd.sync",
    "actions/cluster.js": "cluster.updateKubeConfig",
    "actions/codeRepo.js": "codeRepo.create",
    "actions/PV.js": "pv.batch.delete",
}

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
for path, key in PAIRS.items():
    obj = '"%s": {' % key
    hits = [fn for fn, t in index.items() if obj in t]
    print("%2d %s %s" % (len(hits), path, hits))
