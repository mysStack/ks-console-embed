#!/usr/bin/env python3
"""Unique orig t() and unique unpacked literals for remaining CM/modal pins."""
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
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')

importers = defaultdict(list)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)

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

print("==== orig t uniqueness ====")
for k in [
    "Y_AXIS",
    "EDIT_TEMPLATE",
    "SAVE_TEMPLATE",
    "NO_REFRESHING",
    "DASHBOARD_TITILE",
    "CUSTOM_DISPLAY_STYLE",
    "CUSTOM_DISPLAY_MODAL_DESC",
    "THRESHOLD_FILL_DESC",
    "HIGHT_RULES",
    "DATA_TYPE",
    "LOG_COLLECTION_TIPS",
    "GRAPH_NAME",
    "BASIC_INFORMATION",
]:
    files = src_t.get(k, [])
    print(f"  t({k!r}) orig_hits={len(files)} {files[:6]}")

print("\n==== orig unique importers exact path fragments ====")
for frag in [
    "../components/Form/Graph",
    "../components/Graph/GraphDescription",
    "./containers/Title",
    "./containers/TimeRangeSelect",
    "./containers/TextContainer",
    "./containers/ThemeSwitchButton",
    "./components/Clock",
    "./components/Modal/Theme",
    "./components/Layout",
    "./store",
    "./options",
    "../components/TitleInput",
    "../components/TimeRangeSelect",
    "../components/TextPanelList",
    "../components/SquareButton",
    "../components/DarkThemeSelect",
    "pages/clusters/containers/LogCollections/config",
    "./DurationSelect",
    "components/Modals/WithBack",
    "../../TableColumnStyleModal",
    "../FormInput/ColorSelector",
]:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag in raw or raw.endswith(frag):
                hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits, "count", len(hits))

print("\n==== unpacked unique literals in 1632 children / others ====")
needles = [
    "changeTitle",
    "changeTheme",
    "changeTimeRange",
    "handeCustomSelect",
    "FULL_TIME_FORMAT",
    "textMonitorsRow",
    "TextPanelListEditor",
    "shouldMonitorDeatilShow",
    "recentTimeRange",
    "refreshInterval",
    "DASHBOARD_TITILE",
    "translateTimeAlias",
    "getMsFromTimeAlias",
    "getISOStringFromDate",
    "HIGHT_RULES",
    "DATA_TYPE",
    "shouldInputModalShow",
    "handleCustomColseClick",
    "collectionMap",
    "selectCollectionType",
    "LOG_COLLECTION_TIPS",
    "hiddenBack",
    "wrapperOnBack",
    "wrapperTitle",
    "showDropDown",
    "changeLastTime",
    "hiddenDropdown",
    "durationDropdown",
    "legendsVisibleStates",
    "handleQuickSelect",
    "changeRefreshInterval",
    "NO_REFRESHING",
    "EDIT_TEMPLATE",
    "Y_AXIS",
    "CUSTOM_DISPLAY_STYLE",
    "unitTransformMap",
]
for needle in needles:
    hits = []
    for path in UNPACKED.glob("module-*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if needle in text:
            mid = re.search(r"\d+", path.name).group()
            hits.append((path.name, "named" if mid in known_mods else "unnamed"))
    print(needle, hits[:8], "count", len(hits))

print("\n==== short dumps of remaining unique-importer 1632 kids ====")

def snippet(n, needles_local):
    name = f"module-{n}.js"
    text = (UNPACKED / name).read_text(encoding="utf-8", errors="ignore")
    imps = sorted(set(importers[name]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    keys = list(dict.fromkeys(t_pat.findall(text)))
    print(f"\nmodule-{n} importers={named_imps} t={keys[:10]}")
    for nd in needles_local:
        if nd in text:
            print("  has", nd)
    # export default / function / class
    for line in text.splitlines():
        if "export default" in line or "class " in line[:80] or "function " in line[:80]:
            print(" ", line[:140])
            if "export default" in line:
                break

for n in [2757, 2759, 2760, 2762, 2763, 2765, 2769, 2771, 2772, 2845, 2846, 2847, 2848, 2851, 2853, 1633, 1634, 2797, 1394, 3479, 3810, 2806, 2807]:
    snippet(n, [
        "changeTitle", "changeTheme", "changeTimeRange", "handeCustomSelect",
        "textMonitors", "Clock", "theme", "refresh", "TitleInput",
        "SquareButton", "DarkThemeSelect", "TimeRangeSelect", "Layout",
        "collectionConfig", "widthBack", "WithBack", "hiddenBack",
        "Y_AXIS", "CUSTOM_DISPLAY", "ColorSelector", "HIGHT_RULES",
        "showDropDown", "DurationSelect", "wrapperOnBack",
    ])
