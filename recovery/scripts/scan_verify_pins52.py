#!/usr/bin/env python3
"""Strict-verify slice52 pins: ContainerSetting 2935 unique importer,
Overview Initializing/Dashboard siblings, CustomScaling Card 2911,
plus Dashboard/Initializing unique children (Tools/KubeKeyCluster).
Reject ResourceStatus 1415, TrafficCard, CSS, WHIZARD copies, barrels.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764", "1415",
}
WHIZARD_COPY_RANGE = range(4043, 4338)
WEAK_METHODS = {
    "if", "store", "fetchData", "data", "render", "className", "onClick",
    "state", "super", "switch", "toggle", "close", "run", "points", "scroll",
    "tabSize", "TreeNode", "canvas", "label", "format", "value", "key",
    "name", "options", "onChange", "maxHeight", "originData", "sort_type",
    "children", "exports",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
method_assign = re.compile(
    r"""(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function"""
)
method_class = re.compile(
    r"""(?:^|\n)\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
)
method_decl = re.compile(
    r"""(?:^|\n)\s*(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")
export_const_pat = re.compile(
    r"""(?:export\s+const|exports\.|export\s+function)\s+([A-Za-z_][A-Za-z0-9_]*)"""
)


def mid_of(mod):
    return int(re.search(r"\d+", mod).group())


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    parts = []
    for part in joined.split("/"):
        if part in (".", ""):
            continue
        if part == "..":
            if parts:
                parts.pop()
            continue
        parts.append(part)
    rel = "/".join(parts)
    for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
        cand = rel + ext
        p = SRC / cand
        if p.exists() and p.is_file():
            return norm_key(p.relative_to(SRC).as_posix())
    return None


def extract_methods(text):
    names = (
        method_assign.findall(text)
        + method_class.findall(text)
        + method_decl.findall(text)
        + render_pat.findall(text)
        + export_const_pat.findall(text)
    )
    return list(dict.fromkeys(n for n in names if n and not n.startswith("_")))


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
method_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for n in extract_methods(text):
        method_index[n].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_method = defaultdict(list)
orig_str = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for n in extract_methods(text):
        orig_method[n].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} mid={mid_of(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:12])
    print("    methods", extract_methods(text)[:20])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:16]])
    print("    head", text[:280].replace("\n", " | ")[:240])


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and str(mid_of(f)) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


accepted = []
rejected = []


def reject(key, mod, why):
    print("  VERDICT REJECT", why)
    rejected.append((key, mod, why))
    return False


def accept(key, mod, why):
    print("  VERDICT ACCEPT", why)
    accepted.append((key, mod, why))
    return True


def check_unique_importer(key, mod, parent_key, extra_named=None):
    extra_named = extra_named or {}
    print(f"\n=== UNIQUE_IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if not op:
        return reject(key, mod, "missing orig")
    if is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "css/skip")
    if mod in known_mods:
        return reject(key, mod, f"already named {mod_to_names[mod]}")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "whizard_copy")
    otext = op.read_text(encoding="utf-8", errors="ignore")
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    up = sorted(set(importers[mod]))
    parent_mod = extra_named.get(parent_key) or pairs.get(parent_key)
    print("    orig_importers", oimps)
    print("    orig_methods", extract_methods(otext)[:16])
    print("    orig_t", list(dict.fromkeys(t_pat.findall(otext)))[:12])
    print("    unique_named_parent", up == [parent_mod], "unique_orig", oimps == [parent_key])
    if up != [parent_mod]:
        return reject(key, mod, f"unpacked importers {up} != [{parent_mod}]")
    if oimps == [parent_key]:
        return accept(key, mod, f"unique_importer_1_1 parent={parent_key}")
    # allow route-alias parent: orig importer is containers/Overview.js while named key is overview.js
    if parent_mod and up == [parent_mod] and len(oimps) == 1:
        oimp_mod = extra_named.get(oimps[0]) or pairs.get(oimps[0])
        if oimp_mod == parent_mod:
            return accept(key, mod, f"unique_importer_route_alias parent={parent_key} orig_imp={oimps[0]}")
    return reject(key, mod, f"orig importers {oimps}")


def check_family_sibling(key, mod, needle, kind, parent_key, sibs, extra_named=None):
    extra_named = extra_named or {}
    print(f"\n=== FAMILY {key} -> {mod} [{kind}:{needle}] parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if not op:
        return reject(key, mod, "missing orig")
    if is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "css/skip")
    if mod in known_mods:
        return reject(key, mod, f"already named {mod_to_names[mod]}")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "whizard_copy")
    otext = op.read_text(encoding="utf-8", errors="ignore")
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    up = sorted(set(importers[mod]))
    parent_mod = extra_named.get(parent_key) or pairs.get(parent_key)
    print("    orig_importers", oimps)
    print("    orig_methods", extract_methods(otext)[:16])
    print("    orig_t", list(dict.fromkeys(t_pat.findall(otext)))[:12])
    unique_named_parent = up == [parent_mod] if parent_mod else False
    unique_orig = oimps == [parent_key]
    print("    unique_named_parent", unique_named_parent, "unique_orig", unique_orig)
    if kind == "t":
        files, unnamed, named = unique_unpacked(needle, t_index)
        orig_hits = orig_t.get(needle, [])
    elif kind == "lit":
        files, unnamed, named = unique_unpacked(needle, str_index)
        orig_hits = orig_str.get(needle, [])
    else:
        files, unnamed, named = unique_unpacked(needle, method_index)
        orig_hits = orig_method.get(needle, [])
    sib_unn = [f for f in unnamed if f in sibs]
    print(f"    {kind} {needle!r} unnamed={unnamed[:8]} sib={sib_unn} named={named[:4]}")
    print("    orig_hits", orig_hits[:8], "count", len(orig_hits))
    if sib_unn != [mod] and unnamed != [mod] and files != {mod}:
        return reject(key, mod, f"needle not unique among siblings {sib_unn}")
    if unique_named_parent and (sib_unn == [mod] or unnamed == [mod]):
        return accept(key, mod, f"unique_among_siblings {kind}:{needle}")
    return reject(key, mod, "no unique evidence")


extra = {
    "pages/clusters/containers/Overview.js": "module-3678.js",
    "pages/clusters/overview.js": "module-3678.js",
}

check_unique_importer(
    "pages/fedprojects/components/ContainerSetting.js",
    "module-2935.js",
    "pages/fedprojects/components/ContainerImage.js",
)
check_family_sibling(
    "pages/clusters/containers/Overview/Initializing.js",
    "module-3704.js",
    "showEditYAML",
    "method",
    "pages/clusters/containers/Overview.js",
    {"module-3679.js", "module-3704.js"},
    extra,
)
check_family_sibling(
    "pages/clusters/containers/Overview/Dashboard.js",
    "module-3679.js",
    "showEditYAML",
    "method",
    "pages/clusters/containers/Overview.js",
    {"module-3679.js", "module-3704.js"},
    extra,
)

print("\n=== sequential Dashboard after Initializing ===")
print("orig_local", orig_local_imps.get("pages/clusters/containers/Overview.js"))
print("unpack", list(dict.fromkeys(imp_unpacked.findall(unpacked["module-3678.js"]))))
print("importers 3679", sorted(set(importers["module-3679.js"])))
print("importers 3704", sorted(set(importers["module-3704.js"])))
dash_ok = (
    orig_local_imps.get("pages/clusters/containers/Overview.js")
    == [
        "pages/clusters/containers/Overview/Dashboard.js",
        "pages/clusters/containers/Overview/Initializing.js",
    ]
)
unpack_js = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked["module-3678.js"])))
    if m in {"module-3679.js", "module-3704.js"}
]
print("dash_orig_order_ok", dash_ok, "unpack_js", unpack_js)
if dash_ok and unpack_js == ["module-3679.js", "module-3704.js"]:
    accept(
        "pages/clusters/containers/Overview/Dashboard.js",
        "module-3679.js",
        "sequential_after_unique_sibling Initializing=3704",
    )

check_unique_importer(
    "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/Card.js",
    "module-2911.js",
    "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/WorkloadTable.js",
)

print("\n=== Initializing unique kids vs KubeKeyCluster ===")
init_mod = "module-3704.js"
dump_mod(init_mod)
init_kids = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked[init_mod])))
    if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
]
print("init_unnamed_js", init_kids)
print("init_orig_local", orig_local_imps.get("pages/clusters/containers/Overview/Initializing.js"))
for kid in init_kids:
    dump_mod(kid)
    print("  unique importers", sorted(set(importers[kid])))

print("\n=== Dashboard unique kids vs orig locals ===")
dash_mod = "module-3679.js"
dump_mod(dash_mod)
dash_kids = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked[dash_mod])))
    if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
]
print("dash_unnamed_js", dash_kids)
print("dash_orig_local", orig_local_imps.get("pages/clusters/containers/Overview/Dashboard.js"))
unique_dash_kids = [m for m in dash_kids if sorted(set(importers[m])) == [dash_mod]]
print("dash_unique_kids", unique_dash_kids)
for kid in unique_dash_kids:
    dump_mod(kid)

print("\n=== Tools handleTool among Dashboard unique kids ===")
files, unnamed, named = unique_unpacked("handleTool", method_index)
print("handleTool unnamed", unnamed, "named", named[:4], "orig", orig_method.get("handleTool"))
check_family_sibling(
    "pages/clusters/containers/Overview/Dashboard/Tools.js",
    "module-3685.js",
    "handleTool",
    "method",
    "pages/clusters/containers/Overview/Dashboard.js",
    set(unique_dash_kids),
    {"pages/clusters/containers/Overview/Dashboard.js": "module-3679.js"},
)

print("\n=== KubeKeyCluster unique importer of Initializing ===")
check_unique_importer(
    "pages/clusters/containers/Overview/Initializing/KubeKeyCluster.js",
    "module-3705.js",
    "pages/clusters/containers/Overview/Initializing.js",
    {"pages/clusters/containers/Overview/Initializing.js": "module-3704.js"},
)

print("\n=== ContainerSetting remaining unnamed kids ===")
cs_kids = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked["module-2935.js"])))
    if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
]
print("cs_unnamed_js", cs_kids)
print("cs_orig_local", orig_local_imps.get("pages/fedprojects/components/ContainerSetting.js"))
for kid in cs_kids:
    dump_mod(kid)

print("\n=== vendor leftover needles in live unnamed ===")
ENTRY = UNPACKED / "entry.js"
live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
texts = dict(unpacked)
if ENTRY.exists():
    texts["entry.js"] = ENTRY.read_text(encoding="utf-8", errors="ignore")
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    for m in imp_unpacked.findall(texts.get(cur, "")):
        if m not in seen:
            stack.append(m)
print("live_modules", len(live), "aliased", len(aliased))
NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("semver validRange", "validRange"),
    ("filesize", "filesize"),
    ("numeral", "numeral("),
    ("js-cookie", "js-cookie"),
    ("tinycolor2", "tinycolor"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource", "new EventSource"),
]
for n, needle in NEEDLES:
    hits = []
    for name, text in texts.items():
        if needle in text and name in live:
            mid = re.search(r"\d+", name)
            mid = mid.group() if mid else ""
            if mid not in aliased:
                hits.append(name)
    if hits:
        print(f"  {n}: {hits[:8]} ({len(hits)})")
        for f in hits[:3]:
            print(f"    {f} importers={sorted(set(importers[f]))[:6]}")
    else:
        print(f"  {n}: none")

print("\n=== ACCEPTED ===")
seen_acc = set()
for key, mod, why in accepted:
    pair = (key, mod)
    if pair in seen_acc:
        continue
    seen_acc.add(pair)
    print(f'    "{key}": "{mod}",  # {why}')
print("accepted_unique_pairs", len(seen_acc))
print("\n=== REJECTED ===")
for key, mod, why in rejected:
    print(f"  {key} -> {mod} :: {why}")
print("rejected_count", len(rejected))
