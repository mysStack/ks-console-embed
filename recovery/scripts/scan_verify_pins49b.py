#!/usr/bin/env python3
"""Strict-verify remaining slice49 candidates. Reject cluster-path aliases
onto whizard copies, weak needles, skip-list, 2-importer without unique orig.
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
    "1135", "1798", "1800",
}
WHIZARD_COPY_RANGE = range(4043, 4338)

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

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
    names = method_assign.findall(text) + method_class.findall(text)
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
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:8])
    print("    methods", extract_methods(text)[:16])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:12]])


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


def check_imp(key, mod, parent_key):
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "missing/skip")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "cluster_or_other_path_onto_whizard_copy")
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    parent_text = unpacked.get(parent_mod, "")
    unique_kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or str(mid_of(m)) in SKIP_MODS or mid_of(m) < 70:
            continue
        if m in {
            "module-553.js", "module-239.js", "module-243.js", "module-1.js",
            "module-3.js", "module-186.js", "module-14.js", "module-31.js",
            "module-36.js", "module-37.js", "module-55.js", "module-56.js",
            "module-51.js",
        }:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    locals_ = [
        c for c in orig_local_imps.get(parent_key, [])
        if not str(c).endswith((".scss", ".css")) and c not in known_keys
    ]
    ok = unique_named_parent and unique_orig and unique_kids == [mod] and locals_ == [key]
    print("  unique_named_parent", unique_named_parent, up)
    print("  unique_orig", unique_orig, oimps)
    print("  unique_kids", unique_kids, "orig_unnamed_local", locals_)
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "imp"))
    return ok


def check_method(key, mod, needle, parent_key=None):
    print(f"\n=== METHOD {key} -> {mod} needle={needle!r} parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if needle in {"if", "store", "fetchData", "data", "render", "onAdd", "onClick", "PROCESS"}:
        return reject(key, mod, "weak")
    if not op or mod in known_mods or is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "missing/skip")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "cluster_or_other_path_onto_whizard_copy")
    files, unnamed, named = unique_unpacked(needle, method_index)
    orig_hits = orig_method.get(needle, [])
    in_mod = needle in extract_methods(unpacked.get(mod, ""))
    in_orig = needle in extract_methods(op.read_text(encoding="utf-8", errors="ignore"))
    ok = in_mod and in_orig and unnamed == [mod] and orig_hits == [key]
    print("  in_mod", in_mod, "in_orig", in_orig)
    print("  method_unnamed", unnamed, "named", named[:4])
    print("  orig_hits", orig_hits)
    if parent_key:
        parent_mod = pairs.get(parent_key)
        up = sorted(set(importers[mod]))
        print("  importers_are_parent", parent_mod in up, up)
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "method:"+needle))
    return ok


def check_t(key, mod, needle, parent_key=None):
    print(f"\n=== T {key} -> {mod} needle={needle!r} parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if needle in {"PROCESS", "NAME", "STATUS", "NONE"}:
        return reject(key, mod, "weak_t")
    if not op or mod in known_mods or is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "missing/skip")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "cluster_or_other_path_onto_whizard_copy")
    files, unnamed, named = unique_unpacked(needle, t_index)
    orig_hits = orig_t.get(needle, [])
    in_mod = needle in t_pat.findall(unpacked.get(mod, ""))
    in_orig = needle in t_pat.findall(op.read_text(encoding="utf-8", errors="ignore"))
    ok = in_mod and in_orig and unnamed == [mod] and orig_hits == [key] and not named
    print("  in_mod", in_mod, "in_orig", in_orig)
    print("  t_unnamed", unnamed, "named", named[:4], "orig_hits", orig_hits)
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "t:"+needle))
    return ok


print("\n=== ImageSlider unique importer + methods (Slider.js skip is filename false positive) ===")
if check_imp(
    "pages/apps/components/AppInfo/ImageSlider.js",
    "module-3188.js",
    "pages/apps/components/AppInfo.js",
):
    accepted.append((
        "pages/apps/components/AppInfo/ImageSlider.js",
        "module-3188.js",
        "imp:AppInfo unique ./ImageSlider; methods handleClickImage/closeOverlay",
    ))
for n in ["handleClickImage", "closeOverlay", "getPrevNextIdx", "showNextPic"]:
    files, unnamed, named = unique_unpacked(n, method_index)
    print(f"  {n} unnamed={unnamed} named={named[:3]} orig={orig_method.get(n, [])}")


print("\n=== VersionList addVersion ===")
if check_method(
    "pages/apps/components/Lists/VersionList.js",
    "module-4409.js",
    "addVersion",
    "pages/workspaces/containers/Apps/Detail/VersionManage.js",
):
    accepted.append((
        "pages/apps/components/Lists/VersionList.js",
        "module-4409.js",
        "unique_method:addVersion",
    ))


print("\n=== TailItemInput renderTail ===")
if check_method(
    "components/Modals/StorageclassAutoresizer/TailItemInput.js",
    "module-3385.js",
    "renderTail",
    "components/Modals/StorageclassAutoresizer.js",
):
    accepted.append((
        "components/Modals/StorageclassAutoresizer/TailItemInput.js",
        "module-3385.js",
        "unique_method:renderTail",
    ))


print("\n=== GroupTree renderTree ===")
if check_method(
    "pages/workspaces/containers/Groups/GroupTree.js",
    "module-4377.js",
    "renderTree",
    "pages/workspaces/containers/Groups.js",
):
    accepted.append((
        "pages/workspaces/containers/Groups/GroupTree.js",
        "module-4377.js",
        "unique_method:renderTree",
    ))


print("\n=== Topology Detail handleJump ===")
if check_method(
    "pages/projects/containers/Services/Topology/Detail.js",
    "module-4606.js",
    "handleJump",
    "pages/projects/containers/Services/Topology.js",
):
    accepted.append((
        "pages/projects/containers/Services/Topology/Detail.js",
        "module-4606.js",
        "unique_method:handleJump",
    ))


print("\n=== TimeBar xTickFormatter ===")
if check_method(
    "components/Charts/Bar/TimeBar.js",
    "module-1064.js",
    "xTickFormatter",
):
    accepted.append((
        "components/Charts/Bar/TimeBar.js",
        "module-1064.js",
        "unique_method:xTickFormatter",
    ))


print("\n=== Cascader triggerOpen ===")
if check_method(
    "components/Base/Cascader.js",
    "module-1488.js",
    "triggerOpen",
):
    accepted.append((
        "components/Base/Cascader.js",
        "module-1488.js",
        "unique_method:triggerOpen",
    ))


print("\n=== Volumes getVolumeMounts (likely 2-importer) ===")
check_method(
    "components/Cards/Volumes.js",
    "module-1825.js",
    "getVolumeMounts",
)


print("\n=== ClusterWrapper renderItem1 (likely wakaru) ===")
check_method(
    "components/Clusters/ClusterWrapper.js",
    "module-1107.js",
    "renderItem1",
)


print("\n=== REJECT cluster Monitor paths onto whizard copies ===")
for key, mod, needle in [
    ("pages/clusters/containers/Monitor/Cluster/Overview.js", "module-4139.js", "CLUSTER_NODE_STATUS"),
    ("pages/clusters/containers/Monitor/Cluster/Monitor/PhysicalResource.js", "module-4141.js", "PHYSICAL_RESOURCES_MONITORING"),
    ("pages/clusters/containers/Monitor/Cluster/Monitor/Etcd.js", "module-4144.js", "getQuantileData"),
    ("pages/clusters/containers/Monitor/Cluster/Monitor/APIServer.js", "module-4146.js", "API_SERVER_MONITORING"),
    ("pages/clusters/containers/Monitor/Cluster/Monitor/Scheduler.js", "module-4148.js", "SCHEDULER_MONITORING"),
    ("pages/clusters/containers/Monitor/Resource/Usage/Virtual.js", "module-4157.js", "APPLICATION_RESOURCE_USAGE"),
]:
    if needle.isupper():
        check_t(key, mod, needle)
    else:
        check_method(key, mod, needle)


print("\n=== 4365 vs 4377 GroupTree siblings ===")
dump_mod("module-4365.js")
dump_mod("module-4377.js")
print("  Groups kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(unpacked.get("module-4364.js", ""))))])

print("\n=== 3383 vs 3385 Autoresizer siblings ===")
dump_mod("module-3383.js")
dump_mod("module-3385.js")


print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seen))
print("rejected_count", len(rejected))
for item in rejected:
    print("  REJECT", item)
