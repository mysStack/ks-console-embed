#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = set(re.findall(r"module-\d+\.js", (ROOT / "recovery/scripts/add_known_named.py").read_text()))

NEEDLES = [
    ("utils/log hightLighted", "hightLighted"),
    ("utils/meter MERTER_TYPE", "MERTER_TYPE"),
    ("utils/meter METER_RESOURCE_USAGE", "METER_RESOURCE_USAGE"),
    ("utils/alerting ALL_METRICS_CONFIG", "ALL_METRICS_CONFIG"),
    ("utils/devops git_source", "bitbucket_server_source"),
    ("utils/devops updatePipelineParams", "multi_branch_pipeline"),
    ("utils/localStorage expires", "getLocalStorageItem"),
    ("utils/form.persist cache", "_cache_"),
    ("utils/fed.templates placement", "clusterOverrides"),
    ("utils/cluster getOverrides", "getOverrides"),
    ("utils/action triggerAction", "triggerAction"),
    ("utils/configReferenceImpact", "createRestartPatch"),
    ("utils/devOpsRepos", "devOpsRepos"),
    ("utils/podStatusLocale", "podStatusLocale"),
    ("utils/time getTimeDiff", "getTimeDiff"),
    ("utils/request already", "getClusterUrl"),
    ("YamlEditModal EditMode", "YamlEditModal"),
    ("DeleteModal resource confirm", "INPUT_NAME_TO_CONFIRM"),
    ("EditBasicInfoModal alias", "PATTERN_ALIAS_NAME"),
    ("components EditMode", "EditMode"),
    ("components Base Modal", "export default class Modal"),
    ("Bill constats MERTER", "RESOURCES_METER_TYPE"),
    ("alerting metrics config", "configs/alerting"),
    ("fed templates federated", "FederatedNamespace"),
]

index = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== unique hits ===")
for name, needle in NEEDLES:
    hits = [fn for fn, text in index.items() if needle in text]
    new = [h for h in hits if h not in KNOWN]
    already = [h for h in hits if h in KNOWN]
    flag = "OK" if len(hits) == 1 else ("MULTI" if hits else "MISS")
    print(f"{flag:5} {name:42} hits={len(hits):3} new={new[:4]} known={already[:2]}")
