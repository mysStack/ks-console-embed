#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

parents = [
    "components/Forms/AppDeploy/AppConfig.js",
    "components/Forms/Cluster/ServiceComponents/ComponentSelect.js",
    "components/Forms/Cluster/ClusterSettings/StorageParams.js",
    "components/Forms/Cluster/AdvanceSettings/KSSettings.js",
    "components/Forms/Cluster/NodeList.js",
    "components/Forms/Pipelines/ActionsInput.js",
    "components/Forms/Pipelines/ParamsInput.js",
    "pages/workspaces/components/Modals/WorkspaceCreate/ClusterSettings.js",
    "pages/devops/components/Pipeline/PipelineTemplate.js",
    "components/Forms/ImageBuilder/S2IForm/TemplateSelect.js",
    "components/Forms/ImageBuilder/B2IForm/BinaryFileUploader.js",
    "components/Forms/CD/BaseInfo.js",
    "components/Forms/CD/Advance/CodeRepoSetting.js",
    "components/Forms/CD/Advance/SyncSetting.js",
]
for name in parents:
    mod = pairs.get(name)
    if not mod:
        print("MISS parent", name)
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known_mods and int(mid) >= 800:
            kids.append(m)
    kids = list(dict.fromkeys(kids))
    print(f"{name} -> {mod}")
    print("  unnamed:", kids)

# importer uniqueness for likely kids
targets = [3146, 3147, 3148, 2694, 2695, 2696, 2688, 1620, 1621, 3215, 3217,
           3619, 3620, 3283, 3284, 3285, 1611, 2599, 2651, 1617, 1059, 1060]
hits = defaultdict(list)
needles = {n: f"./module-{n}.js" for n in targets}
for path in UNPACKED.glob("module-*.js"):
    t = path.read_text(encoding="utf-8", errors="ignore")
    for n, needle in needles.items():
        if needle in t:
            hits[n].append(path.name)
print("\n=== importers ===")
for n in targets:
    files = sorted(set(hits[n]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    if files:
        print(f"{n}: {len(files)} {files[:10]}")
