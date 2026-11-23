#!/usr/bin/env python3
"""Strict-verify slice56 pins: unique-importer kids of last-10 named parents
TinyArea/UsageCard/PodsCard; alias unique-importer AuditRecord of named
VersionList/Item and VolumeSetting of named actions/volume (named config 3564).
Reject ConfigTemplate vs 2943 ADD_CLUSTER mismatch, modal.js 1475, LimitRange,
ScheduleCluster/ReplicasInput, PhysicalResourceItem, dist widgets, WHIZARD.
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
    "989", "891", "717", "4142", "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
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


def resolve_alias_import(importer_rel, raw):
    local = resolve_import(importer_rel, raw)
    if local:
        return local
    aliases = {
        "core/": "core/",
        "components/": "components/",
        "utils/": "utils/",
        "stores/": "stores/",
        "hocs/": "hocs/",
        "actions/": "actions/",
        "configs/": "configs/",
        "pages/": "pages/",
        "apps/": "pages/apps/",
        "projects/": "pages/projects/",
        "clusters/": "pages/clusters/",
        "workspaces/": "pages/workspaces/",
        "access/": "pages/access/",
        "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/",
        "settings/": "pages/settings/",
        "console/": "pages/console/",
        "edgewize/": "pages/edgewize/",
        "node-groups/": "pages/node-groups/",
        "whizard-telemetry/": "pages/whizard-telemetry/",
    }
    for prefix, mapped in aliases.items():
        if raw == prefix[:-1] or raw.startswith(prefix):
            rest = raw[len(prefix):] if raw.startswith(prefix) else ""
            rel = mapped + rest
            for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
                cand = rel + ext
                p = SRC / cand
                if p.exists() and p.is_file():
                    return norm_key(p.relative_to(SRC).as_posix())
            return None
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
        resolved_all = resolve_alias_import(rel, raw)
        if resolved_all and resolved_all != resolved:
            orig_imp_targets[resolved_all].append(key)


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


print("\n=== last10 parents remaining unnamed JS kids ===")
for parent_key, parent_mod in [
    ("components/Base/List/List.js", "module-2300.js"),
    ("components/Base/List/Item.js", "module-2301.js"),
    ("components/Base/List/Add.js", "module-2302.js"),
    ("components/Base/Modal/form.js", "module-2044.js"),
    ("pages/fedprojects/components/ClusterWorkloadStatus/Cluster.js", "module-4996.js"),
    ("pages/fedprojects/containers/Overview/BaseInfo.js", "module-4936.js"),
    ("pages/fedprojects/containers/Overview/UsageRanking.js", "module-4948.js"),
    ("pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem.js", "module-4941.js"),
    ("pages/fedprojects/containers/Volumes/Detail/ResourceStatus.js", "module-5025.js"),
    ("pages/fedprojects/containers/Volumes/Detail/VolumeMounts.js", "module-5029.js"),
]:
    dump_mod(parent_mod)
    kids = [
        m
        for m in list(dict.fromkeys(imp_unpacked.findall(unpacked[parent_mod])))
        if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
    ]
    unique_kids = [m for m in kids if sorted(set(importers[m])) == [parent_mod]]
    print("  orig_local", orig_local_imps.get(parent_key))
    print("  orig_imp_of_unnamed", [
        (c, sorted(set(orig_imp_targets.get(c, []))))
        for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys
    ])
    print("  unnamed_js", kids, "unique", unique_kids)
    for kid in unique_kids:
        dump_mod(kid)

print("\n=== TinyArea unique importer of named AppResourceItem 4941 ===")
check_unique_importer(
    "pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js",
    "module-4942.js",
    "pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem.js",
)
files, unnamed, named = unique_unpacked("getVeticalPoints", method_index)
print("getVeticalPoints unnamed", unnamed, "named", named[:4])

print("\n=== UsageCard unique importer of named ResourceStatus 5025 ===")
check_unique_importer(
    "pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js",
    "module-5026.js",
    "pages/fedprojects/containers/Volumes/Detail/ResourceStatus.js",
)
files, unnamed, named = unique_unpacked("pvc_inodes_used", str_index)
print("pvc_inodes_used unnamed", unnamed, "named", named[:4])
files, unnamed, named = unique_unpacked("AVAILABLE_CAPACITY", t_index)
print("AVAILABLE_CAPACITY unnamed", unnamed, "named", named[:4])

print("\n=== PodsCard unique importer of named VolumeMounts 5029 ===")
check_unique_importer(
    "pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js",
    "module-5030.js",
    "pages/fedprojects/containers/Volumes/Detail/VolumeMounts.js",
)

print("\n=== AuditRecord unique importer of named VersionList/Item 4410 (alias) ===")
check_unique_importer(
    "pages/apps/components/Lists/AuditRecord.js",
    "module-4413.js",
    "pages/apps/components/Lists/VersionList/Item.js",
)
print("orig_imp AuditRecord", orig_imp_targets.get("pages/apps/components/Lists/AuditRecord.js"))
print("importers 4413", sorted(set(importers.get("module-4413.js", []))))

print("\n=== VolumeSetting unique importer of named actions/volume 3553 (alias) ===")
check_unique_importer(
    "pages/fedprojects/components/VolumeSetting.js",
    "module-3563.js",
    "actions/volume.js",
)
print("orig_imp VolumeSetting", orig_imp_targets.get("pages/fedprojects/components/VolumeSetting.js"))
print("importers 3563", sorted(set(importers.get("module-3563.js", []))))
print("3563 kids", [
    (k, mod_to_names.get(k, ["?"]))
    for k in list(dict.fromkeys(imp_unpacked.findall(unpacked["module-3563.js"])))
])
print("named config", pairs.get("pages/fedprojects/components/VolumeSetting/config.js"))

print("\n=== reject ConfigTemplate vs unique kid 2943 of federated actions ===")
dump_mod("module-2943.js")
print("orig_imp ConfigTemplate", orig_imp_targets.get("pages/fedprojects/components/ConfigTemplate.js"))
print("orig_local ConfigTemplate", orig_local_imps.get("pages/fedprojects/components/ConfigTemplate.js"))
print("orig_local federated", orig_local_imps.get("actions/federated.js"))
files, unnamed, named = unique_unpacked("FEDPROJECT_CANNOT_ADD_CLUSTER", t_index)
print("FEDPROJECT_CANNOT_ADD_CLUSTER unnamed", unnamed, "named", named[:4])
print("2943 methods", extract_methods(unpacked["module-2943.js"])[:16])
print("ConfigTemplate orig methods", extract_methods(
    orig_path_for("pages/fedprojects/components/ConfigTemplate.js").read_text(encoding="utf-8", errors="ignore")
)[:16] if orig_path_for("pages/fedprojects/components/ConfigTemplate.js") else None)
reject(
    "pages/fedprojects/components/ConfigTemplate.js",
    "module-2943.js",
    "fingerprint mismatch: 2943 is ADD_CLUSTER/clustersList, orig ConfigTemplate is EditModal wrapper",
)

print("\n=== fed Overview 4935 remaining unique kids after BaseInfo/UsageRanking ===")
dump_mod("module-4935.js")
ov_kids = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked["module-4935.js"])))
    if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
]
ov_unique = [m for m in ov_kids if sorted(set(importers[m])) == [ "module-4935.js"]]
print("  unnamed_js", ov_kids, "unique", ov_unique)
print("  orig_local", orig_local_imps.get("pages/fedprojects/containers/Overview.js"))
for kid in ov_unique:
    dump_mod(kid)
files, unnamed, named = unique_unpacked("HOW_TO_INVITE_USERS", t_index)
print("HOW_TO_INVITE_USERS unnamed", unnamed, "named", named[:4])

print("\n=== ResourceUsage 4940 remaining unique kids after AppResourceItem ===")
dump_mod("module-4940.js")
ru_kids = [
    m
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked["module-4940.js"])))
    if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
]
ru_unique = [m for m in ru_kids if sorted(set(importers[m])) == ["module-4940.js"]]
print("  unnamed_js", ru_kids, "unique", ru_unique)
print("  orig_local", orig_local_imps.get("pages/fedprojects/containers/Overview/ResourceUsage.js"))
for kid in ru_unique:
    dump_mod(kid)

print("\n=== Modal form remaining modal.js / 1475 ===")
print("orig_imp modal.js", orig_imp_targets.get("components/Base/Modal/modal.js"))
print("importers 1475", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-1475.js", [])))])
print("importers 1479", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-1479.js", [])))])

print("\n=== Cluster 4996 remaining StatusReason 805 ===")
print("orig_imp StatusReason", orig_imp_targets.get("pages/projects/components/StatusReason.js")[:8],
      "count", len(orig_imp_targets.get("pages/projects/components/StatusReason.js", [])))
print("importers 805 count", len(set(importers.get("module-805.js", []))))

print("\n=== UsageCard/TinyArea/PodsCard unique kids (prospective) ===")
for parent_mod in ("module-4942.js", "module-5026.js", "module-5030.js", "module-3563.js", "module-4413.js"):
    kids = [
        m
        for m in list(dict.fromkeys(imp_unpacked.findall(unpacked[parent_mod])))
        if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
    ]
    unique_kids = [m for m in kids if sorted(set(importers[m])) == [parent_mod]]
    print(f"  {parent_mod} unnamed={kids} unique={unique_kids}")
    for kid in unique_kids:
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
