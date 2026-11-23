#!/usr/bin/env python3
"""Strict-verify slice50 pins. Reject WHIZARD copies, weak needles,
skip-list, 2-importer without unique orig, barrels, generic methods.
Also dump Topology Detail sibling uniqueness for sequential 1:1.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
}
WHIZARD_COPY_RANGE = range(4043, 4338)
WEAK_METHODS = {
    "if", "store", "fetchData", "data", "render", "className", "onClick",
    "state", "super", "switch", "toggle", "close", "run", "points", "scroll",
    "tabSize", "TreeNode", "canvas", "label", "format", "value", "key",
    "name", "options", "onChange", "maxHeight", "originData", "sort_type",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
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
    names = method_assign.findall(text) + method_class.findall(text) + method_decl.findall(text) + render_pat.findall(text)
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
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} mid={mid_of(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:10])
    print("    methods", extract_methods(text)[:20])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:16]])
    print("    head", text[:240].replace("\n", " | ")[:220])


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


CANDIDATES = [
    ("components/Cards/Volumes/Item.js", "module-3898.js", "unique_importer_1_1", "components/Cards/Volumes.js"),
    ("components/Base/CodeEditor/AceEditor.js", "module-2007.js", "method:tabSize", None),
    ("components/Graph.js", "module-1914.js", "method:toggleFullScreen", "pages/fedprojects/containers/Applications/Detail/TrafficManangement.js"),
    ("components/Graph/utils.js", "module-4752.js", "method:points", None),
    ("components/Modals/Edit/Form.js", "module-2925.js", "method:handleSaveForm", None),
    ("components/Modals/Edit/Form/wrapper.js", "module-2926.js", "method:handleSaveChange", None),
    ("components/Tree.js", "module-5770.js", "method:TreeNode", None),
    ("components/Tree/Tree.js", "module-4367.js", "method:getTreeNodes", None),
    ("components/Tree/TreeNode.js", "module-1864.js", "method:getNodeChildren", None),
    ("pages/clusters/containers/Monitor/Cluster/Monitor/Etcd.js", "module-4144.js", "method:getQuantileData", "pages/clusters/containers/Monitor/Cluster/routes.js"),
    ("pages/clusters/containers/Monitor/Cluster/Overview.js", "module-4139.js", "method:updateData", "pages/clusters/containers/Monitor/Cluster/routes.js"),
    ("pages/fedprojects/components/ClusterDiffSettings.js", "module-2929.js", "method:handleLocal", None),
    ("pages/fedprojects/containers/Gateway/Access.js", "module-1867.js", "method:showGatewaySetting", None),
    ("pages/projects/components/Cards/Replica/Status/NumberControl.js", "module-3845.js", "method:handlePlusOne", None),
    ("pages/projects/components/Modals/PodsMonitoring.js", "module-1818.js", "method:fetchResources", None),
    ("pages/projects/components/Modals/TracingDetail/SpanDetail.js", "module-4780.js", "method:renderContentBody", "pages/projects/components/Modals/TracingDetail.js"),
    ("pages/projects/components/Modals/TracingDetail/SpanGraph/CanvasGraph.js", "module-4783.js", "method:renderIntoCanvas", None),
    ("pages/projects/containers/Deployments/Detail/ResourceStatus.js", "module-1415.js", "method:handleDeleteHpa", None),
    ("stores/devops/imgBuilder.js", "module-257.js", "method:run", None),
    ("stores/rank.js", "module-4330.js", "method:sort_type", None),
]


def check(key, mod, reason, parent_key):
    print(f"\n=== {key} -> {mod} [{reason}] parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if not op:
        return reject(key, mod, "missing orig")
    if is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "css/skip")
    if mod in known_mods:
        return reject(key, mod, f"already named {mod_to_names[mod]}")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "cluster_or_other_path_onto_whizard_copy")
    if key in {"components/Graph.js", "components/Tree.js", "components/Base.js", "utils.js"}:
        return reject(key, mod, "barrel")
    if "ImageBuilder" in key or key.startswith("stores/rank"):
        return reject(key, mod, "skip_family")
    if "Deployments/Detail/ResourceStatus" in key:
        return reject(key, mod, "prior_skip_resource_status")
    otext = op.read_text(encoding="utf-8", errors="ignore")
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    up = sorted(set(importers[mod]))
    print("    orig_importers", oimps)
    print("    orig_methods", extract_methods(otext)[:16])
    print("    orig_t", list(dict.fromkeys(t_pat.findall(otext)))[:12])
    needle = reason.split(":")[-1] if ":" in reason else None
    if needle and needle in WEAK_METHODS:
        return reject(key, mod, f"weak_method {needle}")
    if parent_key:
        parent_mod = pairs.get(parent_key)
        unique_named_parent = up == [parent_mod] if parent_mod else False
        unique_orig = oimps == [parent_key]
        print("    unique_named_parent", unique_named_parent, "unique_orig", unique_orig)
        if unique_named_parent and unique_orig:
            return accept(key, mod, "unique_importer_of_uniquely_named_parent")
    files, unnamed, named = unique_unpacked(needle, method_index) if needle else (set(), [], [])
    if needle:
        print(f"    method {needle!r} unnamed={unnamed[:6]} named={named[:4]} nfiles={len(files)}")
        if unnamed != [mod] and files != {mod}:
            # still allow if unique among unnamed after skip
            if unnamed != [mod]:
                return reject(key, mod, f"method not unique unnamed={unnamed}")
        orig_hits = orig_method.get(needle, [])
        print("    orig_method_hits", orig_hits[:8], "count", len(orig_hits))
        if orig_hits != [key]:
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            if unnamed_orig != [key]:
                return reject(key, mod, f"orig method not unique {orig_hits[:6]}")
        if len(up) != 1 or (up and up[0] not in known_mods and not parent_key):
            named_up = [i for i in up if i in known_mods]
            print("    named_importers", [(i, mod_to_names.get(i, [])) for i in named_up])
            if len(named_up) != 1 and len(up) != 1:
                # unique method 1-hit in unpacked + unique orig method can still pin
                if unnamed == [mod] and orig_hits == [key]:
                    return accept(key, mod, f"unique_method_1hit {needle}")
                return reject(key, mod, f"not unique importer {up[:6]}")
        if unnamed == [mod] and orig_hits == [key]:
            return accept(key, mod, f"unique_method_1hit {needle}")
    return reject(key, mod, "no unique evidence")


for item in CANDIDATES:
    check(*item)


print("\n=== Topology Detail sequential dump ===")
parent_key = "pages/projects/containers/Services/Topology/Detail.js"
parent_mod = pairs[parent_key]
print("parent", parent_mod)
print("orig_local", orig_local_imps.get(parent_key))
print("unpacked_kids", list(dict.fromkeys(imp_unpacked.findall(unpacked[parent_mod]))))
for m in ["module-4607.js", "module-4609.js", "module-4612.js", "module-4615.js", "module-4617.js", "module-4619.js"]:
    dump_mod(m)
    ut = []
    for k in dict.fromkeys(t_pat.findall(unpacked.get(m, ""))):
        unn = [f for f in t_index[k] if f not in known_mods]
        if unn == [m] or t_index[k] == {m}:
            ut.append(k)
    print("    unique_t_among_unnamed", ut[:12])
for key in [
    "pages/projects/containers/Services/Topology/Detail/BaseInfo.js",
    "pages/projects/containers/Services/Topology/Detail/Connections.js",
    "pages/projects/containers/Services/Topology/Detail/Childrens.js",
    "pages/projects/containers/Services/Topology/Detail/Containers.js",
    "pages/projects/containers/Services/Topology/Detail/Tables.js",
]:
    op = orig_path_for(key)
    text = op.read_text(encoding="utf-8", errors="ignore") if op else ""
    print(f"ORIG {key}")
    print("  imps", orig_imp_targets.get(key))
    print("  methods", extract_methods(text)[:16])
    print("  t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    print("  locals", orig_local_imps.get(key))
    print("  head", text[:200].replace("\n", " | ")[:180])


print("\n=== Cascader Options / 1489 / 2102 ===")
for m in ["module-1489.js", "module-2102.js", "module-1273.js"]:
    dump_mod(m)
op = orig_path_for("components/Base/Cascader/Options.js")
if op:
    text = op.read_text(encoding="utf-8", errors="ignore")
    print("ORIG Options", extract_methods(text)[:16], list(dict.fromkeys(t_pat.findall(text)))[:12])
    print("  imps", orig_imp_targets.get("components/Base/Cascader/Options.js"))


print("\n=== GroupTree 1861 / 4367 / 1864 vs EditGroup skip ===")
for m in ["module-1861.js", "module-4367.js", "module-1864.js", "module-5770.js", "module-1309.js"]:
    dump_mod(m)


print("\n=== ACCEPTED ===")
for key, mod, why in accepted:
    print(f'    "{key}": "{mod}",  # {why}')
print("accepted_count", len(accepted))
print("\n=== REJECTED ===")
for key, mod, why in rejected:
    print(f"  {key} -> {mod} :: {why}")
print("rejected_count", len(rejected))
