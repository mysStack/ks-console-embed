#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("edgenode join", "edgeruntime.kubesphere.io"),
    ("hpa outdated", "horizontalpodautoscalers_outdated"),
    ("workload hpaStore", "hpaStore"),
    ("component exceptionCount", "exceptionCount"),
    ("pipelines pipelineConfig", "pipelineConfig"),
    ("alerting alerts module", 'module = "alerts"'),
    ("notification configs module", 'module = "configs"'),
    ("clusterdashboard grafana", "clusterdashboards/${"),
    ("dashboard grafana", "/dashboards/${"),
    ("limitranges module", 'module = "limitranges"'),
    ("volumesnapshotclasses module", 'module = "volumesnapshotclasses"'),
    ("openpitrix sortKey", "create_time"),
    ("openpitrix MAX_LIMIT", "MAX_LIMIT"),
    ("credential store", "credentials.devops.kubesphere.io"),
    ("accessor module", 'module = "accessors"'),
    ("container store", "getContainerDetail"),
    ("crd.resource", "customresourcedefinitions"),
    ("application crd", "applications.kubesphere.io"),
    ("project.federated", "federatednamespaces"),
    ("federated.list", "Federated"),
    ("workload revision", "replicasets"),
    ("workload record", "controllerrevisions"),
    ("workload env", "fetchEnv"),
    ("s2i run", "s2iruns"),
    ("openpitrix version", 'resourceName = "versions"'),
    ("openpitrix file", "package_files"),
    ("openpitrix review", 'resourceName = "reviews"'),
    ("openpitrix audit", "app_audits"),
    ("devops run", "jenkinsfile"),
    ("devops scm", "validate"),
    ("monitoring cluster store", "cluster_cpu_usage"),
    ("rank index", "RankingStore"),
    ("kubekey", "kubekey"),
    ("validateWebhookCF", "validatingwebhookconfigurations"),
    ("storageclasscapabilities", "storageclasscapabilities"),
    ("topology store", "networktopology"),
    ("logging histogram", "histogram"),
    ("logging statistics", "statistics"),
    ("member.list", "MemberList"),
    ("cluster member", "clustermembers"),
    ("overview store", "fetchResourceMetrics"),
    ("event store", "events.k8s.io"),
    ("compareVersion", "compareVersion"),
    ("withDryRun", "withDryRun"),
    ("getComponentStatus", "getComponentStatus"),
    ("createRestartPatch", "createRestartPatch"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:40} hits={len(hits):3} new={new[:4]} known={already[:2]}")
