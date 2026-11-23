#!/usr/bin/env python3
"""Verify candidate pins vs original unique t()/literals and unique named importer."""
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
    if not p.exists():
        print(f"\n=== {name} MISSING expect={expected_path}")
        return
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
    head = text[:280].replace("\n", " | ")
    print(f"\n=== {name} expect={expected_path}")
    print("  importers", named_imps)
    print("  unique_t", unique[:12])
    print("  fewhit_t", twohit[:6])
    print("  all_t", keys[:12])
    print("  head", head[:240])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("  UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])


CANDIDATES = [
    (3267, "pages/devops/components/Pipeline/StepModals/pipeline.js"),
    (3268, "pages/devops/components/Pipeline/StepModals/application.js"),
    (3269, "pages/devops/components/Pipeline/StepModals/credential.js"),
    (3270, "pages/devops/components/Pipeline/StepModals/reaction.js"),
    (2777, "TextMonitorForm or FormContainer?"),
    (2779, "TextMonitorForm or FormContainer?"),
    (2803, "TableMonitorForm?"),
    (2822, "GraphList?"),
    (2839, "GraphOverviewLayout or GraphRows?"),
    (2841, "GraphOverviewLayout or GraphRows?"),
]

print("---- expected unique-looking children ----")
for n, exp in CANDIDATES:
    dump_mod(n, exp)

print("\n---- orig unique t() of remaining modals ----")
modal_files = [
    "components/Modals/ProjectSelect/index.jsx",
    "components/Modals/WithBack/index.jsx",
    "components/Modals/ContainerLog/index.jsx",
    "components/Modals/FullscreenModal/index.jsx",
    "components/Modals/LogSearch/Logging/Detail/DurationSelect/index.jsx",
]
orig_t = defaultdict(list)
for rel in modal_files:
    p = SRC / rel
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    print(f"\nORIG {rel} t={keys}")
    for k in keys:
        orig_t[k].append(rel)

# uniqueness in original src
print("\n---- orig t uniqueness across src ----")
src_t = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    rel = p.relative_to(SRC).as_posix()
    for k in t_pat.findall(text):
        src_t[k].append(rel)

for rel in modal_files:
    p = SRC / rel
    keys = list(dict.fromkeys(t_pat.findall(p.read_text(encoding="utf-8", errors="ignore"))))
    for k in keys:
        files = src_t[k]
        print(f"  t({k!r}) orig_files={len(files)} sample={files[:4]}")

print("\n---- unpacked hits for unique orig modal t() / literals ----")
needles = [
    "CONTAINER_LOGS_NOT_SUPPORTED",
    "CONTAINER_LOGS",
    "wrapperOnBack",
    "hiddenBack",
    "durationDropdown",
    "kubefed-host-namespace",
    "MULTI_CLUSTER_PROJECT_PL",
    "TABLE_SETTINGS",
    "MONITOR_TYPE_NO_SUPPORT",
    "SELECT_CREDENTIAL_DESC",
    "fromCodeRepository",
    "getCDListData",
    "importCodeRepo",
    "pageClose",
    "isSinglePage",
    "timed-task",
]
for needle in needles:
    hits = []
    for path in UNPACKED.glob("module-*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if needle in text:
            mid = re.search(r"\d+", path.name).group()
            hits.append((path.name, "named" if mid in known_mods else "unnamed"))
    print(needle, hits[:8], "count", len(hits))

print("\n---- orig unique importers of remaining modals ----")
for frag in [
    "Modals/ProjectSelect",
    "Modals/WithBack",
    "Modals/ContainerLog",
    "Modals/FullscreenModal",
    "DurationSelect",
]:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag.split("/")[-1] in raw:
                hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits, "count", len(hits))
