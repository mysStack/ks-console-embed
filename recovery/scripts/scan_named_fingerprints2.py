#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"

NEEDLES = [
    ("stores/pod.js", "getWorkloadVolumes"),
    ("stores/gateway.js", "kubesphere-router-kubesphere-system"),
    ("stores/gateway.js:old", "/router"),
    ("stores/alerting/policy.js", "globalrulegroups"),
    ("stores/alerting/message.js", "alerts?"),
    ("utils/EventBus.js", "handleError"),
    ("stores/codeRepo.js", "gitrepositories"),
    ("stores/cd.js", "continuousdeployments"),
    ("stores/secret.js", "getDataKey"),
    ("stores/volume.js", "persistentvolumeclaims"),
    ("stores/pv.js", "persistentvolumes"),
    ("stores/quota.js", "resourcequotas"),
    ("stores/component.js", "componentstatuses"),
    ("stores/crd.js", "customresourcedefinitions"),
    ("stores/edgenode.js", "edgenodes"),
    ("stores/terminal kubeconfig fetch", "fetchKubeConfig"),
    ("stores/openpitrix/app.js", "apps?"),
    ("stores/openpitrix/repo.js", "repos?"),
    ("stores/logging/query.js", "logquery"),
    ("stores/eventSearch.js", "eventquery"),
    ("stores/auditing.js", "auditquery"),
    ("stores/dashboard.js", "fetchResourceUsage"),
    ("stores/monitoring/base.js", "filter_meter"),
    ("stores/notification/config.js", "notification.kubesphere.io"),
    ("stores/workload/index.js", "getWorkloadUrl"),
    ("stores/service.js", "ksServices"),
    ("stores/ingress.js", "extensions/v1beta1"),
    ("utils/workload.js", "getWorkloadVolumes"),
    ("utils/status.js", "getPodStatusAndRestartCount"),
    ("utils/cluster.js", "getClusterUrl"),
    ("utils/monitoring.js", "getValueByUnit"),
    ("utils/log.js", "getLogsPath"),
    ("utils/action.js", "getActions"),
    ("utils/meter.js", "getMeterData"),
    ("utils/alerting.js", "getAlertingResource"),
    ("utils/devops.js", "getPipelineStatus"),
    ("utils/group.js", "formatTreeData"),
    ("utils/localStorage.js", "safeParseJSON"),
    ("utils/time.js", "getLocalTime"),
    ("utils/volume.js", "getVolumeType"),
    ("utils/service.js", "getServiceType"),
    ("components/Modals/EditYaml.js", "isCodeMode"),
    ("components/Modals/Delete.js", "ResourceDelete"),
    ("components/Modals/EditBasicInfo.js", "EditBasicInfo"),
    ("components/Modals/KubeConfig.js", "fetchKubeConfig"),
    ("components/Layout/Header.js", "showGlobalNav"),
    ("components/KubeTools.js", "KubeCtl"),
    ("stores/root.js:toggle", "toggleGlobalNav"),
    ("stores/federated.list.js", "FederatedList"),
    ("stores/member.list.js", "MemberList"),
    ("stores/logging/collection/output.js", "fluentbit"),
    ("stores/monitoring/custom/monitor.js", "CustomMonitoring"),
    ("stores/s2i/builder.js", "s2ibuilders"),
    ("stores/grayrelease.js", "strategies"),
    ("stores/network/policy.js", "namespacenetworkpolicies"),
    ("stores/network/ippool.js", "ippools"),
    ("stores/openpitrix/application.js", "applications"),
    ("stores/devops/pipelines.js", "pipelines"),
    ("stores/devops/credential.js", "credentials"),
]

known = set(re.findall(r"module-\d+\.js", KNOWN_PY.read_text(encoding="utf-8")))
index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}

print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in known]
    already = [h for h in hits if h in known]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:42} hits={len(hits):3} new={new[:5]} known={already[:2]}")
