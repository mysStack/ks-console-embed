#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("volume PersistentVolumeClaim", "PersistentVolumeClaim"),
    ("volume snapshotType", "getSnapshotType"),
    ("secret registrysecrets", "registrysecrets"),
    ("logging query size from", "log_query"),
    ("notification config api", 'return "kapis/notification.kubesphere.io/v2beta2"'),
    ("cd module cds", 'module = "cds"'),
    ("monitoring getMinuteValue", "getMinuteValue"),
    ("monitoring fillEmpty", "fillEmptyMetrics"),
    ("crd customresourcedefinitions module", 'module = "customresourcedefinitions"'),
    ("componentstatuses", "componentstatuses"),
    ("serviceaccounts module", 'module = "serviceaccounts"'),
    ("configmaps module", 'module = "configmaps"'),
    ("secrets module", 'module = "secrets"'),
    ("ingresses module", 'module = "ingresses"'),
    ("services module", 'module = "services"'),
    ("storageclasses module", 'module = "storageclasses"'),
    ("limitranges module", 'module = "limitranges"'),
    ("resourcequotas module", 'module = "resourcequotas"'),
    ("persistentvolumes module", 'module = "persistentvolumes"'),
    ("volumesnapshots module", 'module = "volumesnapshots"'),
    ("volumesnapshotcontents module", 'module = "volumesnapshotcontents"'),
    ("edgenodes module", 'module = "edgenodes"'),
    ("fluentbitoutputs", "fluentbitoutputs"),
    ("continuousdeployments", "applications.argoproj.io"),
    ("s2ibuilders module", 'module = "s2ibuilders"'),
    ("grayrelease strategies module", 'module = "strategies"'),
    ("workload hpa", "horizontalpodautoscalers"),
    ("openpitrix application", 'resourceName = "applications"'),
    ("openpitrix category", 'resourceName = "categories"'),
    ("devops pipelines store", "getPipelinesUrl"),
    ("devops credential store", "credentials.devops"),
    ("event search store", "events.kubesphere.io"),
    ("auditing store", "auditing.kubesphere.io"),
    ("dashboard store", "fetchStatistics"),
    ("meter store", "metering.kubesphere.io"),
    ("websocket already", "watchByKey"),
    ("utils monitoring getValueByUnit", "getValueByUnit"),
    ("utils cluster already", "getClusterUrl"),
    ("utils localStorage", "safeParseJSON"),
    ("utils cookie already", "encodeURIComponent"),
    ("utils log strip", "logStripANSI"),
    ("utils alerting getAlertingResource", "getAlertingResource"),
    ("utils devops getPipelineStatus", "getPipelineStatus"),
    ("utils action getAction", "ACTION_ICONS"),
    ("utils time getLocalTime def", "export const getLocalTime"),
    ("utils form persist", "form.persist"),
    ("utils fed templates", "FED_TEMPLATES"),
    ("components EditYaml modal title", "t(\"EDIT_YAML\")"),
    ("components Delete modal", "ResourceDeleteModal"),
    ("components EditBasicInfo", "t(\"EDIT_INFO\")"),
    ("components Header globalNav", "GlobalNav"),
    ("components Banner", "export default class Banner"),
    ("components Avatar", "export default function Avatar"),
    ("notification receiver module", 'module = "receivers"'),
    ("notification secret module", 'module = "secrets"'),
    ("logging collection", "outputs.logging.kubesphere.io"),
    ("monitoring cluster_cpu_usage store only", "cluster_cpu_utilisation"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:45} hits={len(hits):3} new={new[:4]} known={already[:2]}")
