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
    "pages/devops/components/Pipeline/Sider.js",
    "pages/devops/components/Pipeline/nodesRender.js",
    "components/Modals/Node/TaintManagement/TaintInput.js",
    "components/Modals/QuotaEdit/Quotas.js",
    "components/Inputs/S2iEnviroment.js",
    "components/Modals/Pipelines/PipelineEdit.js",
    "components/Modals/GrafanaModal.js",
    "components/Modals/FullCreate.js",
    "components/Modals/QuotaEdit.js",
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
    "Add Parallel Stage",
    "not support edit nested stage",
    "pipeline_conditions",
    "Unnamed",
    "Add Step",
    "Configuration error",
    "pipeline syntax error",
    "AGENT_TYPE_DESC",
    "CUSTOM_PIPELIEN",
    "IMPORT_FROM_CODE_REPO",
    "KUBERNETES_DEPLOY_DEPRECATED_TIP",
    "waitForQualityGate_DESC",
    "withSonarQubeEnv_DESC",
    "This parameter is required",
    "SELECT_RESOURCE_TIP",
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
