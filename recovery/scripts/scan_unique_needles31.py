#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
KNOWN = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN))
needles = [
    "TAINTS_TIPS",
    "TAINT_SELECT_TIPS",
    "TAINT_DELETE_TIP",
    "PREFER_NOSCHEDULE",
    "NOSCHEDULE",
    "NOEXECUTE",
    "SELECT_RESOURCE_TIP",
    "APPLICATION_RESOURCE_COUNT",
    "EDIT_PROJECT_QUOTAS",
    "LoadPrevData_Desc",
    "pipeline-content",
    "ADD_ENVIRONMENT_VARIABLE",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)
for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n} unnamed={unnamed[:8] or files[:5]}")

imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
parents = [
    "components/Modals/Node/TaintManagement.js",
    "components/Modals/QuotaEdit.js",
    "components/Modals/Pipelines/PipelineEdit.js",
    "components/Forms/ImageBuilder/S2IForm.js",
    "pages/devops/components/Pipeline.js",
]
print("==== parent kids ====")
for name in parents:
    mod = pairs.get(name)
    print(name, "->", mod)
    if not mod:
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known and int(mid) >= 800:
            kids.append(m)
    print("  unnamed", list(dict.fromkeys(kids)))

from collections import defaultdict as dd
targets = [3223, 3227, 3037, 3039, 1742, 3298, 3299, 2595, 1608]
hits = dd(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("==== extra importers ====")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    if not p.exists():
        print(n, "MISS")
        continue
    head = p.read_text(encoding="utf-8", errors="ignore")[:24].replace("\n", " ")
    print(n, sorted(set(hits[n]))[:6], "|", head)
