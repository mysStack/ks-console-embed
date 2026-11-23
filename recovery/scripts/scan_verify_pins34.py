#!/usr/bin/env python3
"""Verify candidate unique pins: unique t() and/or unique importer of uniquely named parent."""
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
imp_orig = re.compile(
    r"""(?:from|require\()\s*['"]([^'"]+)['"]"""
)
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')
inject_pat = re.compile(r"inject\s*\(\s*['\"]([^'\"]+)['\"]")

CANDIDATES = [
    ("pages/devops/components/Pipeline/StepsSelector.js", "module-3261.js", "Enter an expression"),
    ("pages/devops/components/Pipeline/StepsEditor/StepContainer.js", "module-1723.js", None),
    ("pages/devops/components/Pipeline/StepsEditor/StepCard.js", "module-3273.js", "Add nesting steps"),
    ("pages/devops/components/Pipeline/StepsEditorOld/StepContainer.js", "module-1722.js", None),
    ("pages/devops/components/Pipeline/StepsEditorOld/StepCard.js", "module-3259.js", None),
    ("pages/devops/components/Pipeline/StepModalsOld.js", "module-3231.js", None),
    ("components/Modals/Bill/Home.js", "module-3507.js", "RESOURCE_CONSUMPTION_DESC"),
    ("components/Modals/Bill/Details.js", "module-3509.js", None),
    ("components/Modals/Bill/Details/Cluster.js", "module-3510.js", "CURRENT_RESOURCE_CONSUMPTION"),
    ("components/Modals/CustomMonitoring/containers/MonitorEditor.js", "module-2776.js", "MONITOR_TYPE_NO_SUPPORT"),
    ("components/Modals/CustomMonitoring/containers/GraphMonitorForm.js", "module-2792.js", "GRAPH_TYPES"),
    ("components/Modals/CustomMonitoring/containers/GraphOverview.js", "module-2821.js", None),
    ("components/Modals/CustomMonitoring/containers/GraphRowsEditor.js", "module-2828.js", "ADD_MONITOR_ITEM"),
]


def orig_path(named):
    stem = named[:-3] if named.endswith(".js") else named
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            return p
    return None


def orig_local_imports(path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    rels = []
    for raw in imp_orig.findall(text):
        if raw.startswith("."):
            rels.append(raw)
    return rels, text


def child_basename(raw):
    raw = raw.split("?")[0]
    base = raw.rstrip("/").split("/")[-1]
    if base in {"index", "index.js", "index.jsx"}:
        parts = raw.rstrip("/").split("/")
        if len(parts) >= 2:
            return parts[-2]
    for suf in (".js", ".jsx"):
        if base.endswith(suf):
            return base[: -len(suf)]
    return base


# who uniquely imports which relative child from original named files
orig_child_importers = defaultdict(list)
for named, mod in pairs.items():
    p = orig_path(named)
    if not p:
        continue
    rels, _ = orig_local_imports(p)
    for raw in rels:
        orig_child_importers[(named, child_basename(raw))].append(raw)


def unique_orig_importers_of_child(parent_named, child_basename_s):
    """Files in original src that uniquely import this child from parent dir."""
    p = orig_path(parent_named)
    if not p:
        return []
    hits = []
    for named, mod in pairs.items():
        op = orig_path(named)
        if not op:
            continue
        rels, _ = orig_local_imports(op)
        for raw in rels:
            if child_basename(raw) == child_basename_s:
                hits.append((named, raw))
    return hits


# unpack importer index
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

# t() uniqueness across unpacked
t_hits = defaultdict(list)
literal_needles = [
    "Enter an expression",
    "Add nesting steps",
    "RESOURCE_CONSUMPTION_DESC",
    "CURRENT_RESOURCE_CONSUMPTION",
    "MONITOR_TYPE_NO_SUPPORT",
    "GRAPH_TYPES",
    "ADD_MONITOR_ITEM",
]
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in literal_needles:
        if n in text:
            t_hits[n].append(path.name)


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]


print("==== candidates ====")
for named, mod, needle in CANDIDATES:
    print(f"\n## {named} -> {mod}")
    already = re.search(r"\d+", mod).group() in known_mods
    print("  already_named", already, "as", mod_to_name.get(mod))
    p = orig_path(named)
    print("  orig", p.relative_to(SRC).as_posix() if p else "MISSING")
    if p:
        rels, otext = orig_local_imports(p)
        print("  orig_local_imports", rels)
        injs = inject_pat.findall(otext)
        if injs:
            print("  orig_inject", injs)
        tkeys = list(dict.fromkeys(t_pat.findall(otext)))
        print("  orig_t", tkeys[:12])

    mp = UNPACKED / mod
    if not mp.exists():
        print("  UNPACKED MISSING")
        continue
    mtext = mp.read_text(encoding="utf-8", errors="ignore")
    kids = imp_unpacked.findall(mtext)
    print("  unpacked_imports", kids)
    injs = inject_pat.findall(mtext)
    if injs:
        print("  unpacked_inject", injs)
    tkeys = list(dict.fromkeys(t_pat.findall(mtext)))
    print("  unpacked_t", tkeys[:12])

    imps = sorted(set(importers[mod]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    unnamed_imps = [i for i in imps if re.search(r"\d+", i).group() not in known_mods]
    print("  importers", len(imps), named_imps)
    print("  unnamed_importers", unnamed_imps)

    if needle:
        files = sorted(t_hits[needle], key=lambda s: int(s.split("-")[1].split(".")[0]))
        unnamed_n = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        print(f"  needle {needle!r} hits={len(files)} files={files} unnamed={unnamed_n}")
        unique_t = files == [mod] or (len(unnamed_n) == 1 and unnamed_n[0] == mod and all(
            re.search(r"\d+", f).group() in known_mods or f == mod for f in files
        ))
        # unique among ALL unpacked if only this module, or unique among unnamed
        print("  unique_literal_all", files == [mod])
        print("  unique_literal_unnamed", unnamed_n == [mod])

    # unique importer of uniquely named parent
    unique_named_parent_imps = [
        (i, n) for i, n in named_imps if n != "?"
    ]
    if len(imps) == 1 and unique_named_parent_imps:
        parent_mod, parent_name = unique_named_parent_imps[0]
        child_base = Path(named).stem
        # check original parent uniquely imports this child
        parent_orig = orig_path(parent_name)
        orig_unique = False
        orig_hits = []
        if parent_orig:
            for named2, mod2 in pairs.items():
                op = orig_path(named2)
                if not op:
                    continue
                rels, _ = orig_local_imports(op)
                for raw in rels:
                    if child_basename(raw) == child_base or raw.rstrip("/").endswith(Path(named).stem) or child_basename(raw) == Path(named).parent.name and Path(named).stem == Path(named).parent.name:
                        orig_hits.append((named2, raw))
            # tighter: child path fragment
            frag = named.replace(".js", "")
            orig_hits = []
            for named2, mod2 in pairs.items():
                op = orig_path(named2)
                if not op:
                    continue
                rels, _ = orig_local_imports(op)
                for raw in rels:
                    # resolve relative
                    resolved = (op.parent / raw).resolve()
                    try:
                        rel = resolved.relative_to(SRC).as_posix()
                    except Exception:
                        rel = raw
                    if frag in rel or child_basename(raw) == Path(named).name.replace(".js", "") or (
                        named.endswith("/" + child_basename(raw) + ".js")
                        or named.endswith(child_basename(raw) + ".js")
                    ):
                        if child_basename(raw) in named or named.endswith(child_basename(raw) + ".js"):
                            orig_hits.append((named2, raw, rel))
        print("  unique_importer_parent", parent_name, parent_mod)
        print("  orig_importers_of_same_basename", orig_hits)
        orig_unique = len({h[0] for h in orig_hits}) == 1 and orig_hits and orig_hits[0][0] == parent_name
        print("  orig_parent_uniquely_imports_child", orig_unique)
    elif len(imps) == 1:
        print("  unique_importer_but_unnamed_parent", imps)
    elif len(imps) == 0:
        print("  NO_IMPORTERS")
    else:
        print("  NOT_UNIQUE_IMPORTER")
