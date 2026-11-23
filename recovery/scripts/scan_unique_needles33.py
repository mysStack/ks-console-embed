#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN))
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]

parents = [
    "pages/devops/components/Pipeline.js",
    "pages/devops/components/Pipeline/Card.js",
    "pages/devops/components/Pipeline/Edges.js",
    "pages/devops/components/Pipeline/StepsEditor.js",
    "pages/devops/components/Pipeline/StepsEditorOld.js",
    "pages/devops/components/Pipeline/StepsSelectorOld.js",
    "pages/devops/components/Pipeline/StepModals/FromCodeRepository.js",
    "pages/devops/components/Pipeline/Sider.js",
    "pages/devops/components/Pipeline/store.js",
    "components/Modals/GrafanaModal/Uploader.js",
    "components/Modals/FullCreate/Steps.js",
    "components/Modals/FullCreate/Code.js",
    "components/Modals/Bill.js",
    "components/Modals/ProjectSelect.js",
    "components/Modals/WithBack.js",
    "components/Modals/ContainerLog.js",
    "components/Modals/FullscreenModal.js",
]
for name in parents:
    mod = pairs.get(name)
    print(name, "->", mod)
    if not mod:
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known and int(mid) >= 800 and not is_css(m):
            kids.append(m)
    print("  unnamed-js", list(dict.fromkeys(kids)))

needles = [
    "LOAD_PREVIOUS_TASKS",
    "LoadPrevData_Desc",
    "This parameter is required",
    "KUBERNETES_DEPLOY_DEPRECATED_TIP",
    "kubernetesDeploy_DESC",
    "waitForQualityGate_DESC",
    "withSonarQubeEnv_DESC",
    "checkout_DESC",
    "git_DESC",
    "echo_DESC",
    "INPUT_PARAMETERS",
    "BRANCH_SI",
    "CREDENTIAL_SI",
    "NO_PROJECT_FOUND",
    "CLUSTER_GROUP_EMPTY_DESC",
    "RESOURCE_CONSUMPTION_RANK",
    "CURRENT_RESOURCE_CONSUMPTION",
    "LAST_STAGE_CONSUMPTION",
    "UPLOAD_FROM_LOCAL_TITLE",
    "FILE_SIZE",
    "CUSTOM_MONITORING_DASHBOARD",
    "GRAPH_TYPES",
    "ADD_MONITOR_ITEM",
    "METER_RESOURCE_DESC",
    "SELECT_TIME_RANGE",
    "CONTAINER_LOGS",
    "SESSION_TIMEOUT",
    "DOWNLOAD_LOGS",
    "FULLSCREEN",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)
print("==== needles ====")
for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n} unnamed={unnamed[:8] or files[:5]}")
