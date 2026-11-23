#!/usr/bin/env python3
"""Match original src stores/utils unique literals to unpacked modules."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"

NEEDLES = [
    ("stores/base.js", "dryRun ? '?dryRun=All'"),
    ("stores/base.list.js", "silent: true"),
    ("stores/websocket.js", "WebSocketStore"),
    ("stores/root.js", "RootStore"),
    ("stores/user.js", "kapis/iam.kubesphere.io/v1alpha2/users"),
    ("stores/role.js", "globalroles"),
    ("stores/workspace.js", "workspaces.kubesphere.io"),
    ("stores/project.js", "getWatchListUrl = ({ cluster } = {}) =>"),
    ("stores/pod.js", "pods.kubesphere.io"),
    ("stores/volume.js", "persistentvolumeclaims"),
    ("stores/secret.js", "getDataKey"),
    ("stores/configmap.js", "configmaps"),
    ("stores/service.js", "ksServices"),
    ("stores/ingress.js", "ingresses"),
    ("stores/crd.js", "customresourcedefinitions"),
    ("stores/component.js", "componentstatuses"),
    ("stores/terminal.js", "kapis/terminal.kubesphere.io"),
    ("stores/gateway.js", "kapis/gateway.kubesphere.io"),
    ("stores/group.js", "workspacetemplates"),
    ("stores/devops.js", "devops.kubesphere.io"),
    ("stores/codeRepo.js", "coderepositories"),
    ("stores/cd.js", "continuousdeployments"),
    ("stores/openelb.js", "openelb.kubesphere.io"),
    ("stores/pv.js", "persistentvolumes"),
    ("stores/quota.js", "resourcequotas"),
    ("stores/limitrange.js", "limitranges"),
    ("stores/serviceAccount.js", "serviceaccounts"),
    ("stores/storageClass.js", "storageclasses"),
    ("stores/volumeSnapshot.js", "volumesnapshots"),
    ("stores/volumeSnapshotClasses.js", "volumesnapshotclasses"),
    ("stores/volumeSnapshotContent.js", "volumesnapshotcontents"),
    ("stores/edgenode.js", "edgenodes"),
    ("stores/event.js", "events.k8s.io"),
    ("stores/eventSearch.js", "kapis/events.kubesphere.io"),
    ("stores/auditing.js", "kapis/auditing.kubesphere.io"),
    ("stores/dashboard.js", "kapis/resources.kubesphere.io/v1alpha3/users"),
    ("stores/clusterdashboard.js", "clusterdashboard"),
    ("stores/overview.js", "getResourceMetrics"),
    ("stores/grayrelease.js", "grayreleases"),
    ("stores/accessor.js", "accessors"),
    ("stores/openpitrix/app.js", "openpitrix.io/v1/apps"),
    ("stores/openpitrix/repo.js", "openpitrix.io/v1/repos"),
    ("stores/openpitrix/application.js", "openpitrix.io/v1/applications"),
    ("stores/alerting/policy.js", "alerting.kubesphere.io/v2beta1/rules"),
    ("stores/alerting/message.js", "alerting.kubesphere.io/v2beta1/alerts"),
    ("stores/logging/query.js", "kapis/logging.kubesphere.io"),
    ("stores/logging/collection/output.js", "fluentbitoutputs"),
    ("stores/monitoring/base.js", "kapis/monitoring.kubesphere.io"),
    ("stores/monitoring/cluster.js", "cluster_cpu_usage"),
    ("stores/notification/config.js", "notification.kubesphere.io/v2beta1/configs"),
    ("stores/notification/receiver.js", "notification.kubesphere.io/v2beta1/receivers"),
    ("utils/cookie.js", "document.cookie"),
    ("utils/time.js", "getLocalTime"),
    ("utils/status.js", "getWorkloadStatus"),
    ("utils/form.templates.js", "FORM_TEMPLATES"),
    ("utils/cluster.js", "getClusterUrl"),
    ("utils/monitoring.js", "getValueByUnit"),
    ("utils/log.js", "getLogs"),
    ("utils/action.js", "getAction"),
    ("utils/base64.js", "safeAtob"),
    ("utils/localStorage.js", "safeParseJSON"),
    ("utils/app.js", "getAppCategoryNames"),
    ("utils/workload.js", "getContainers"),
    ("utils/volume.js", "getVolumeType"),
    ("utils/service.js", "getServiceType"),
    ("utils/meter.js", "getMeterData"),
    ("utils/alerting.js", "getAlertingResource"),
    ("utils/devops.js", "getPipelineStatus"),
    ("utils/group.js", "flattenGroup"),
    ("components/Modals/EditYaml.js", "EditYaml"),
    ("components/Modals/Delete.js", "ResourceDelete"),
    ("components/Modals/EditBasicInfo.js", "EditBasicInfo"),
    ("components/Forms/Base.js", "Form.Item"),
    ("components/Base/Avatar.js", "Avatar"),
    ("components/Base/Banner.js", "Banner"),
    ("components/Cards/Pods.js", "PodsCard"),
    ("components/KubeTools.js", "KubeTools"),
    ("components/Layout/Header.js", "Header"),
    ("components/Modals/KubeCtl.js", "KubeCtl"),
    ("components/Modals/KubeConfig.js", "KubeConfig"),
]

known_text = KNOWN_PY.read_text(encoding="utf-8")
known_modules = set(re.findall(r"module-\d+\.js", known_text))

index = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    index[path.name] = text

print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    already = [h for h in hits if h in known_modules]
    new = [h for h in hits if h not in known_modules]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:45} hits={len(hits):2} new={new[:6]} known={already[:3]}")
