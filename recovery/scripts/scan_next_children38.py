#!/usr/bin/env python3
"""Unnamed JS children of newly named parents + remaining CM/Bill/Modal pins."""
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
name_to_mod = pairs

imp_unpacked = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=!<>\[\]{} -]{8,})['"]""")

PARENTS = [
    2823, 2804, 2777, 2779, 2803, 2822, 2839, 2841, 2826, 2842, 2789, 3524, 3532,
    3510, 3523, 3531,
]

importers = defaultdict(list)
t_index = defaultdict(set)
lit_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for k in str_pat.findall(text):
        lit_index[k].add(path.name)


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]


def orig_path(named):
    stem = named[:-3] if named.endswith(".js") else named
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            return p
    return None


def unique_t_for(mod, text=None):
    if text is None:
        text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    unique = []
    for k in keys:
        files = t_index[k]
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == {mod} or unnamed == [mod]:
            unique.append((k, sorted(files)[:6], "all" if files == {mod} else "unnamed"))
    return keys, unique


def dump_kid(kid):
    ktext = (UNPACKED / kid).read_text(encoding="utf-8", errors="ignore")
    keys, unique_keys = unique_t_for(kid, ktext)
    unique_lits = []
    for k in list(dict.fromkeys(str_pat.findall(ktext))):
        files = lit_index[k]
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == {kid} or unnamed == [kid]:
            unique_lits.append((k[:80], sorted(files)[:4], "all" if files == {kid} else "unnamed"))
    imps = sorted(set(importers[kid]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    print(f"  {kid}")
    print("    importers", named_imps)
    print("    t", keys[:12])
    print("    unique_t", unique_keys[:8])
    print("    unique_lit", unique_lits[:8])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("    UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])
    print("    head", ktext[:220].replace("\n", " | ")[:200])


print("==== unnamed children of uniquely named parents ====")
all_kids = []
for mid in PARENTS:
    mod = f"module-{mid}.js"
    name = mod_to_name.get(mod, "?")
    print(f"\n{name} -> {mod}")
    if not (UNPACKED / mod).exists():
        print("  MISSING FILE")
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        kid_id = re.search(r"\d+", m).group()
        if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
            kids.append(m)
    print("  unnamed-js", kids)
    op = orig_path(name) if name != "?" else None
    if op:
        rels = [r for r in imp_orig.findall(op.read_text(encoding="utf-8", errors="ignore")) if r.startswith(".")]
        print("  orig_local", rels)
        print("  orig_file", op.relative_to(SRC).as_posix())
    for kid in kids:
        all_kids.append((name, mod, kid))
        dump_kid(kid)


print("\n==== remaining orig CustomMonitoring files vs KNOWN ====")
cm_root = SRC / "components/Modals/CustomMonitoring"
known_names = set(name_to_mod)
for p in sorted(cm_root.rglob("*")):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or ".scss" in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    candidates = [
        rel,
        rel.replace(".jsx", ".js"),
        re.sub(r"/index\.(jsx|js)$", ".js", rel),
        re.sub(r"/index\.(jsx|js)$", "/index.js", rel),
    ]
    named = any(c in known_names for c in candidates)
    keys = list(dict.fromkeys(t_pat.findall(p.read_text(encoding="utf-8", errors="ignore"))))
    status = "NAMED" if named else "UNNAMED"
    print(f"  {status} {rel} t={keys[:8]}")


print("\n==== remaining orig Bill files vs KNOWN ====")
bill_root = SRC / "components/Modals/Bill"
for p in sorted(bill_root.rglob("*")):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    rel = p.relative_to(SRC).as_posix()
    candidates = [
        rel,
        rel.replace(".jsx", ".js"),
        re.sub(r"/index\.(jsx|js)$", ".js", rel),
    ]
    named = any(c in known_names for c in candidates)
    keys = list(dict.fromkeys(t_pat.findall(p.read_text(encoding="utf-8", errors="ignore"))))
    status = "NAMED" if named else "UNNAMED"
    print(f"  {status} {rel} t={keys[:8]}")


print("\n==== leftover modal module importers ====")
for n in [1764, 3810, 3809, 3479, 3480]:
    name = f"module-{n}.js"
    if not (UNPACKED / name).exists():
        print(name, "MISSING")
        continue
    text = (UNPACKED / name).read_text(encoding="utf-8", errors="ignore")
    keys, unique = unique_t_for(name, text)
    imps = sorted(set(importers[name]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    print(f"\n{name} named={mod_to_name.get(name, '?')}")
    print("  importers", named_imps)
    print("  t", keys[:12])
    print("  unique_t", unique[:8])
    print("  head", text[:220].replace("\n", " | ")[:200])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("  UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])


print("\n==== orig unique t() for remaining CM/Bill/Modals ====")
src_t = defaultdict(list)
src_imp = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        src_t[k].append(rel)
    for raw in imp_orig.findall(text):
        src_imp[raw].append(rel)

focus = [
    "components/Modals/CustomMonitoring/components/Graph/ComposeWithLegends/index.jsx",
    "components/Modals/CustomMonitoring/components/Graph/Compose/index.jsx",
    "components/Modals/CustomMonitoring/components/Graph/GraphDescription/index.jsx",
    "components/Modals/CustomMonitoring/components/Form/ItemContianer/index.jsx",
    "components/Modals/CustomMonitoring/components/Form/Field/index.jsx",
    "components/Modals/CustomMonitoring/components/Form/Graph/index.jsx",
    "components/Modals/CustomMonitoring/components/EditMonitorFormLayout/index.jsx",
    "components/Modals/CustomMonitoring/components/FormGroupCard/index.jsx",
    "components/Modals/CustomMonitoring/components/FormInput/Template/ColumeInput/index.jsx",
    "components/Modals/CustomMonitoring/components/FormInput/Template/GrafanaTargetInput/index.jsx",
    "components/Modals/CustomMonitoring/components/FormInput/TableColumnStyle/index.jsx",
    "components/Modals/CustomMonitoring/components/FormInput/ColorSelector/index.jsx",
    "components/Modals/CustomMonitoring/components/MetircQueryInput/index.jsx",
    "components/Modals/CustomMonitoring/components/ErrorContainer/index.jsx",
    "components/Modals/CustomMonitoring/containers/TimeRangeSelect.jsx",
    "components/Modals/CustomMonitoring/containers/SwitchButton.jsx",
    "components/Modals/CustomMonitoring/containers/Title.jsx",
    "components/Modals/CustomMonitoring/containers/ThemeSwitchButton.jsx",
    "components/Modals/CustomMonitoring/containers/RefreshIntervalSelector.jsx",
    "components/Modals/CustomMonitoring/containers/TextContainer.jsx",
    "components/Modals/CustomMonitoring/components/Clock/index.jsx",
    "components/Modals/CustomMonitoring/components/PromQLInput/index.jsx",
    "components/Modals/Bill/components/BillIcon/index.jsx",
    "components/Modals/Bill/components/CustomToolTip/index.jsx",
    "components/Modals/Bill/constats.js",
    "components/Modals/LogSearch/Logging/Detail/DurationSelect/index.jsx",
    "components/Modals/WithBack/index.jsx",
    "components/Modals/LogCollectionCreate/index.jsx",
    "components/Modals/FullscreenModal/index.jsx",
    "components/Modals/ProjectSelect/index.jsx",
    "components/Modals/ContainerLog/index.jsx",
]
for rel in focus:
    p = SRC / rel
    if not p.exists():
        print(f"MISSING {rel}")
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    print(f"\nORIG {rel}")
    print("  t", keys)
    for k in keys:
        files = src_t[k]
        print(f"    t({k!r}) orig_hits={len(files)} {files[:5]}")


print("\n==== orig unique importers of remaining targets ====")
frags = [
    "ComposeWithLegends",
    "Compose",
    "GraphDescription",
    "ItemContianer",
    "Form/Field",
    "EditMonitorFormLayout",
    "FormGroupCard",
    "ColumeInput",
    "GrafanaTargetInput",
    "TableColumnStyle",
    "ColorSelector",
    "MetircQueryInput",
    "ErrorContainer",
    "TimeRangeSelect",
    "SwitchButton",
    "ThemeSwitchButton",
    "RefreshIntervalSelector",
    "TextContainer",
    "Clock",
    "PromQLInput",
    "BillIcon",
    "CustomToolTip",
    "DurationSelect",
    "WithBack",
    "LogCollectionCreate",
    "FullscreenModal",
    "ProjectSelect",
    "ContainerLog",
    "constats",
]
for frag in frags:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            last = raw.rstrip("/").split("/")[-1].split(".")[0]
            if frag.split("/")[-1] in raw and (frag in raw or last == frag.split("/")[-1]):
                hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits[:8], "count", len(hits))


print("\n==== unpacked needles for unique orig keys ====")
needles = [
    "COLUMN_NAME",
    "FIELD_NAME",
    "DISPLAY_FORMAT",
    "TABLE_SETTINGS",
    "GRAPH_NAME",
    "legendsVisibleStates",
    "EditMonitorFormLayou",
    "CustomMonitorMetircQueryInput",
    "FormItemContainer",
    "CLUSTER_CONSUMPTION",
    "WORKSPACE_CONSUMPTION",
    "RESOURCES_METER_TYPE",
    "CONTAINER_LOGS_NOT_SUPPORTED",
    "wrapperOnBack",
    "hiddenBack",
    "durationDropdown",
    "kubefed-host-namespace",
    "MULTI_CLUSTER_PROJECT_PL",
    "MONITOR_TYPE_NO_SUPPORT",
    "TimeRangeSelect",
    "RefreshIntervalSelector",
    "ThemeSwitchButton",
    "TextContainer",
    "PromQLInput",
    "GrafanaTargetInput",
    "BillIcon",
    "CustomToolTip",
]
for needle in needles:
    hits = []
    for path in UNPACKED.glob("module-*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if needle in text:
            mid = re.search(r"\d+", path.name).group()
            hits.append((path.name, "named" if mid in known_mods else "unnamed"))
    print(needle, hits[:8], "count", len(hits))
