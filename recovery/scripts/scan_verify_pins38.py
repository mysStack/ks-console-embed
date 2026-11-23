#!/usr/bin/env python3
"""Verify candidate pins vs unique t()/literals and unique named importer."""
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


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]


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
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        kid_id = re.search(r"\d+", m).group()
        if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
            kids.append(m)
    print(f"\n=== {name} expect={expected_path}")
    print("  importers", named_imps)
    print("  unnamed-js", kids)
    print("  unique_t", unique[:12])
    print("  fewhit_t", twohit[:8])
    print("  all_t", keys[:15])
    print("  css_only", is_css(name))
    print("  head", text[:360].replace("\n", " | ")[:320])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("  UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])
    for needle in [
        "legendsVisibleStates",
        "shouldInputModalShow",
        "LOG_COLLECTION_TIPS",
        "hiddenBack",
        "wrapperOnBack",
        "showDropDown",
        "EDIT_TEMPLATE",
        "SAVE_TEMPLATE",
        "NO_REFRESHING",
        "DASHBOARD_TITILE",
        "Y_AXIS",
        "changeModeToEditing",
        "changeRefreshInterval",
        "shouldMonitorDeatilShow",
        "CUSTOM_DISPLAY_STYLE",
        "CUSTOM_DISPLAY_MODAL_DESC",
        "THRESHOLD_FILL_DESC",
    ]:
        if needle in text:
            print("  has", needle)


CANDIDATES = [
    (2824, "ComposeWithLegends"),
    (2825, "ComposeWithLegends CSS or Compose"),
    (1636, "Compose 2-hit?"),
    (2805, "TableColumnStyle"),
    (2819, "TableColumnStyleModal?"),
    (2806, "TableColumnStyle CSS?"),
    (3809, "LogCollectionCreate"),
    (3810, "WithBack"),
    (3479, "DurationSelect"),
    (1632, "CustomMonitoring index already named"),
    (2792, "GraphMonitorForm already named"),
    (2799, "Form/Graph?"),
    (2772, "TextPanelList?"),
]

print("---- candidate dumps ----")
for n, exp in CANDIDATES:
    dump_mod(n, exp)

print("\n---- unique t() needles across unpacked ----")
needles = [
    "Y_AXIS",
    "EDIT_TEMPLATE",
    "SAVE_TEMPLATE",
    "NO_REFRESHING",
    "DASHBOARD_TITILE",
    "CUSTOM_DISPLAY_STYLE",
    "CUSTOM_DISPLAY_MODAL_DESC",
    "THRESHOLD_FILL_DESC",
    "TIMERANGE_SELECTOR_MSG",
    "SELECT_TIME_RANGE",
    "CUSTOM_TIME_RANGE",
    "SINGLE_STATE_CHART",
    "CHART_TYPES",
    "ALERT_LABELS",
    "ALERT_FUNCTIONS",
    "ALERT_RATE_RANGES",
    "ALERT_METRICS",
    "LOG_COLLECTION_TIPS",
    "hiddenBack",
    "legendsVisibleStates",
    "shouldInputModalShow",
    "changeRefreshInterval",
    "changeModeToEditing",
]
for needle in needles:
    hits = []
    for path in UNPACKED.glob("module-*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if needle in text:
            mid = re.search(r"\d+", path.name).group()
            hits.append((path.name, "named" if mid in known_mods else "unnamed"))
    print(needle, hits[:10], "count", len(hits))

print("\n---- unnamed children of CustomMonitoring index 1632 ----")
dump_mod(1632, "CustomMonitoring index")
text = (UNPACKED / "module-1632.js").read_text(encoding="utf-8", errors="ignore")
kids = list(dict.fromkeys(imp_unpacked.findall(text)))
print("  all kids", kids)
for kid in kids:
    kid_id = re.search(r"\d+", kid).group()
    if kid_id in known_mods:
        print(f"  NAMED {kid} -> {mod_to_name.get(kid)}")
        continue
    if is_css(kid):
        print(f"  CSS {kid}")
        continue
    dump_mod(int(kid_id), f"child of 1632")

print("\n---- unnamed children of GraphMonitorForm 2792 ----")
text = (UNPACKED / "module-2792.js").read_text(encoding="utf-8", errors="ignore")
for m in list(dict.fromkeys(imp_unpacked.findall(text))):
    kid_id = re.search(r"\d+", m).group()
    if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
        dump_mod(int(kid_id), f"child of GraphMonitorForm")

print("\n---- orig unique importers GraphDescription / Form/Graph / TitleInput / SquareButton / DarkThemeSelect / Layout / store / options ----")
for frag in [
    "GraphDescription",
    "Form/Graph",
    "TitleInput",
    "SquareButton",
    "DarkThemeSelect",
    "components/Layout",
    "CustomMonitoring/store",
    "CustomMonitoring/options",
    "Modal/Theme",
    "TextPanelList",
    "TableColumnStyleModal",
    "FormInput/GraphType",
    "FormInput/ColorSelector",
]:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag.split("/")[-1] in raw:
                hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits[:8], "count", len(hits))
