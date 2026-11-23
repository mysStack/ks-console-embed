#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("workload env variables", "encryptKey"),
    ("workload resource isExistService", "isExistService"),
    ("logging histogram 15m", 'interval = "15m"'),
    ("logging statistics operation", 'operation: "statistics"'),
    ("crd.resource continues", "continues"),
    ("application errorRatio", "errorRatio"),
    ("kubekey api", "kubekey.kubesphere.io"),
    ("cluster member namespacemembers", "namespacemembers"),
    ("events store fetchList", "/events?"),
    ("openpitrix files resource", 'resourceName = "files"'),
    ("openpitrix reviews", 'resourceName = "reviews"'),
    ("openpitrix store repo-helm", "repo-helm"),
    ("overview resource quota", "resource.quota"),
    ("rank total_page", "total_page"),
    ("topology processTopology", "processTopology"),
    ("cluster api tenant clusters", "getTenantClustersUrl"),
    ("devops run pipelineStore", "pipelineStore"),
    ("meter cluster ICON_TYPES", "filterResourceLevel"),
    ("federated.list continues", "continues = {"),
    ("member.list MemberList", "selectedRowKeys"),
    ("application crd transformTraces", "transformTraces"),
    ("monitoring custom monitor", "CustomMonitor"),
    ("logging histogram histograms", "histograms"),
    ("kkclusters mapper", "kkclusters"),
    ("STORE_QUERY_STATUS", "STORE_QUERY_STATUS"),
    ("UPLOAD_CHECK_RULES", "UPLOAD_CHECK_RULES"),
    ("downloadFileFromBase64", "downloadFileFromBase64"),
    ("TIME_MICROSECOND_MAP", "TIME_MICROSECOND_MAP"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:42} hits={len(hits):3} new={new[:4]} known={already[:2]}")
