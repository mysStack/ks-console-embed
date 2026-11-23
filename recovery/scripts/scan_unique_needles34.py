#!/usr/bin/env python3
"""Verify extra child pins: unique 1-hit t() and unique named parent importer vs original."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
mod_to_name = {v: k for k, v in pairs.items()}

imp_unpacked = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

importers = defaultdict(list)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)


def dump_mod(n, expected_path=None):
    name = f"module-{n}.js"
    p = UNPACKED / name
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    unique = []
    twohit = []
    for k in keys:
        files = sorted(t_index[k], key=lambda s: int(s.split("-")[1].split(".")[0]))
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == [name]:
            unique.append(k)
        elif unnamed == [name]:
            unique.append(f"{k} (unnamed-only; also {files})")
        elif len(files) <= 3:
            twohit.append((k, files))
    imps = sorted(set(importers[name]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    head = text[:240].replace("\n", " | ")
    print(f"\n=== {name} expect={expected_path}")
    print("  importers", named_imps)
    print("  unique_t", unique[:12])
    print("  fewhit_t", twohit[:6])
    print("  all_t", keys[:12])
    print("  head", head[:220])


print("---- StepModalsOld children in import order ----")
old_names = [
    "echo", "shell", "dir", "container", "archiveArtifacts", "git", "checkout",
    "input", "withCredentials", "kubernetesDeploy", "timeout", "branch",
    "environment", "expression", "sonarqube", "script", "waitForQualityGate",
    "mail", "cd",
]
for i, n in enumerate(range(3232, 3251)):
    dump_mod(n, f"pages/devops/components/Pipeline/StepModalsOld/{old_names[i]}.js")

print("\n---- StepsSelector extra 3262 ----")
dump_mod(3262, "pages/devops/components/Pipeline/StepModals.js?")

print("\n---- original StepModals importers ----")
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    if "StepModals" in text and "StepModalsOld" not in text.replace("from '../StepModals'", "FROM_NEW"):
        rels = [r for r in imp_orig.findall(text) if "StepModals" in r]
        if rels:
            print(p.relative_to(SRC).as_posix(), rels)

print("\n---- Bill Cluster unique children ----")
bill_kids = [3511, 833, 950, 3513, 3518, 3521, 3523, 3527, 3529, 3531, 3535, 3537, 3538]
orig_bill = [
    "??3511", "??833", "??950",
    "components/Modals/Bill/components/Crumb.js",
    "Title?", "SideCard?", "MeterDetailCard?", "TimeSelect?", "LineChart?",
    "Tables?", "ResourceSelect?", "ConstomPieChart?", "??3538",
]
for n in bill_kids:
    dump_mod(n)

print("\n---- GraphRowsEditor 2837 and neighbors ----")
for n in [2829, 2831, 2833, 2835, 2837]:
    dump_mod(n)

print("\n---- orig unique importers of Bill components / GraphTypeSelectModal / StepModals children ----")
needles = {
    "Bill/Home": "Modals/Bill/Home",
    "Crumb": "Bill/components/Crumb",
    "Title": "Bill/components/Title",
    "SideCard": "Bill/components/SideCard",
    "MeterDetailCard": "Bill/components/MeterDetailCard",
    "TimeSelect": "Bill/components/TimeSelect",
    "LineChart": "Bill/components/LineChart",
    "Tables": "Bill/components/Tables",
    "ResourceSelect": "Bill/components/ResourceSelect",
    "ConstomPieChart": "Bill/components/ConstomPieChart",
    "GraphTypeSelectModal": "GraphTypeSelectModal",
    "RowTitleEditor": "RowTitleEditor",
    "RowsSortItem": "RowsSortItem",
    "AddPanel": "AddPanel",
    "echo": "StepModalsOld/echo",
    "branch_old": "StepModalsOld/branch",
    "branch_new": "StepModals/branch",
    "params_new": "StepModals/params",
    "TableMonitorForm": "TableMonitorForm",
    "TextMonitorForm": "TextMonitorForm",
}
for label, frag in needles.items():
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag.split("/")[-1] in raw and (frag.split("/")[-1] == raw.rstrip("/").split("/")[-1].split(".")[0] or frag in (p.parent / raw).as_posix()):
                # tighter: resolve
                pass
        rel = p.relative_to(SRC).as_posix()
        if frag.replace("\\", "/") in text and ("from " in text or "require(" in text):
            for raw in imp_orig.findall(text):
                if frag.split("/")[-1] in raw:
                    hits.append((rel, raw))
    print(label, hits[:8], "count", len(hits))
