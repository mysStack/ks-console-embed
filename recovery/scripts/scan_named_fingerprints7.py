#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("stores/event lastTimestamp", "lastTimestamp"),
    ("stores/overview fetchResourceStatus", "fetchResourceStatus"),
    ("stores/federated.list continues", "continues"),
    ("stores/member.list originData", "originData"),
    ("stores/devops/pipelines FORM_HEAR", "FORM_HEAR"),
    ("stores/devops/pipelines form-urlencoded", "application/x-www-form-urlencoded"),
    ("stores/devops/run commitsList", "commitsList"),
    ("stores/devops/scm 428", "isAccessTokenWrong"),
    ("stores/devops/scm bitbucket-server", "bitbucket-server"),
    ("stores/workload/env variables", "safeAtob"),
    ("stores/openpitrix/review reviews", 'resourceName = "reviews"'),
    ("stores/openpitrix/store repo-helm", "repo-helm"),
    ("stores/storageclasscapabilities", "storageclasscapabilities"),
    ("stores/network/utils layoutSingleNodes", "layoutSingleNodes"),
    ("stores/network/utils gHeight", "gHeight"),
    ("stores/logging/statistics containers", "statistics.containers"),
    ("stores/silenceUnsupported", "silenceUnsupportedListReject"),
    ("stores/cluster/api getTenantClustersUrl", "getTenantClustersUrl"),
    ("stores/cluster/member namespacemembers", "namespacemembers"),
    ("stores/monitoring/cluster cluster_cpu", "cluster_cpu_usage"),
    ("stores/monitoring/node node_cpu", "node_cpu_utilisation"),
    ("stores/devops/log pipeline log", "pipelinerunlog"),
    ("stores/rank/node rank node", "rank/nodes"),
    ("INPUT_NAME_TO_CONFIRM", "INPUT_NAME_TO_CONFIRM_DELETE"),
    ("YamlEdit readOnly", "readOnly"),
    ("CreateModal yaml", "CREATE_YAML"),
    ("Base Avatar", "Avatar"),
    ("components Cards/Banner", "BANNER_DESC"),
    ("EditMode monaco", "monaco"),
    ("KubeConfig Modal", "DOWNLOAD_KUBECONFIG"),
    ("Form.Item unique", "PATTERN_SERVICE_NAME"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:48} hits={len(hits):3} new={new[:4]} known={already[:2]}")
