#!/usr/bin/env python3
"""Strict-verify slice 46 unique-importer / unique-lit / sequential sibling pins."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
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

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112", "4656", "4657",
    "1134", "1072", "3866", "3892", "186", "1979",
}


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def mid_of(mod):
    return re.search(r"\d+", mod).group()


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def resolve_alias_import(importer_rel, raw):
    if raw.startswith("."):
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
        return norm_key(rel + ".js") if not rel.endswith(".js") else rel
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
            return norm_key(rel + ".js") if not rel.endswith(".js") else rel
    return None


resolved_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    pkey = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(pkey)
    for s in str_pat.findall(text):
        orig_str[s].append(pkey)
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            resolved_imp_targets[resolved].append((pkey, raw))
            if raw.startswith("."):
                orig_local_imps[pkey].append(resolved)


def dump_mod(mod, n=14):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    mid = mid_of(mod)
    print("    css", is_css(mod), "skip", mid in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))[:14]
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in kids])


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


def parent_unique_kids(parent_mod, extra_known=None):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m):
            continue
        mid2 = mid_of(m)
        if mid2 in SKIP_MODS or int(mid2) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def unnamed_locals(parent_key, extra_known=None):
    extra_known = extra_known or set()
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css"))]
    return [c for c in locals_ if c not in known_keys and c not in extra_known]


def check_unique_lit(key, mod, needle, kind="str"):
    print(f"\n=== LIT {key} -> {mod} needle={needle!r} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    dump_mod(mod)
    if not op or not mod or mod not in unpacked or is_css(mod):
        print("  VERDICT REJECT missing/css")
        return False
    if mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT skip_mod")
        return False
    index = t_index if kind == "t" else str_index
    orig_index = orig_t if kind == "t" else orig_str
    ofiles = orig_index.get(needle, [])
    files, unnamed, named = unique_unpacked(needle, index)
    unnamed_orig = [k for k in sorted(set(ofiles)) if k not in known_keys]
    print("  orig_hits", sorted(set(ofiles)))
    print("  unnamed_orig", unnamed_orig)
    print("  unpacked", sorted(files)[:8], "unnamed", unnamed, "named", named[:4])
    in_mod = needle in unpacked[mod]
    in_orig = needle in op.read_text(encoding="utf-8", errors="ignore")
    ok_orig_unique = sorted(set(ofiles)) == [key]
    ok_orig_unnamed = unnamed_orig == [key]
    unique_unp = files == {mod} or unnamed == [mod]
    already = mod in known_mods
    ok = in_mod and in_orig and (ok_orig_unique or ok_orig_unnamed) and unique_unp and not already
    print(
        "  in_mod", in_mod, "in_orig", in_orig, "ok_orig_unique", ok_orig_unique,
        "ok_orig_unnamed", ok_orig_unnamed, "unique_unp", unique_unp, "already", already,
    )
    print("  VERDICT", "NEW" if ok else "REJECT")
    return ok


def check_imp(key, mod, parent_key, extra_known=None):
    extra_known = extra_known or set()
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} extra={sorted(extra_known)} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    parent_mod = pairs.get(parent_key)
    print("  parent_mod", parent_mod, "parent_known", parent_key in known_keys, "parent_names", mod_to_names.get(parent_mod or "", []))
    dump_mod(mod)
    if not op or not mod or mod not in unpacked or is_css(mod):
        print("  VERDICT REJECT missing/css")
        return False
    if mid_of(mod) in SKIP_MODS or mod in known_mods:
        print("  VERDICT REJECT skip/already")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = parent_mod is not None and up == [parent_mod] and parent_mod in known_mods
    oimps = resolved_imp_targets.get(key, [])
    unique_orig_keys = sorted(set(k for k, _r in oimps))
    print("  unique_named_parent", unique_named_parent, "up", [(i, mod_to_names.get(i, ["?"])) for i in up])
    print("  orig_importers", oimps)
    unique_kids = parent_unique_kids(parent_mod, extra_known)
    unnamed_local = unnamed_locals(parent_key, extra_known)
    print("  parent_unique_kids", unique_kids)
    print("  unnamed_local", unnamed_local)
    only_unique_kid = unique_kids == [mod]
    unique_orig = unique_orig_keys == [parent_key]
    ok = unique_named_parent and unique_orig and only_unique_kid and unnamed_local == [key]
    print(
        "  VERDICT",
        "NEW" if ok else "REJECT",
        "unique_orig", unique_orig,
        "only_unique_kid", only_unique_kid,
        "unnamed_local", unnamed_local,
    )
    return ok


accepted = []

print("\n=== UNIQUE LIT (uniquely aliased remaining unnamed allowed) ===")
LIT = [
    ("pages/clusters/containers/Storage/PV.js", "module-3723.js", "pv.batch.delete", "str"),
    ("components/Graph/Detail/Pods.js", "module-4769.js", "labels.version", "str"),
    ("pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item.js",
     "module-5019.js", "EXTERNAL_IP_ADDRESS", "t"),
]
for key, mod, needle, kind in LIT:
    if check_unique_lit(key, mod, needle, kind):
        accepted.append((key, mod, "lit:"+needle))

print("\n=== UNIQUE IMPORTER of uniquely named parent ===")
IMP = [
    ("pages/projects/containers/Routes/Detail/ResourceStatus.js", "module-3883.js",
     "pages/projects/containers/Routes/Detail/routes.js"),
    ("pages/projects/containers/GrayRelease/Jobs/Chart.js", "module-4714.js",
     "pages/projects/containers/GrayRelease/Jobs/Item.js"),
    ("pages/fedprojects/containers/StatefulSets/Detail/ServiceCard.js", "module-5004.js",
     "pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js"),
    ("pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item.js", "module-5019.js",
     "pages/fedprojects/containers/Routes/Detail/ResourceStatus.js"),
    ("components/Modals/EditAuthorization/constants.js", "module-3322.js",
     "components/Modals/EditAuthorization.js"),
    ("components/Modals/AppRepoCreate/time.input.js", "module-3108.js",
     "components/Modals/AppRepoCreate.js"),
    ("components/Modals/Create/Code.js", "module-2051.js",
     "components/Modals/Create.js"),
    ("components/Forms/CustomScaling/BaseInfo/WorkloadAddCard/Card.js", "module-2905.js",
     "components/Forms/CustomScaling/BaseInfo/WorkloadAddCard.js"),
]
for key, mod, parent in IMP:
    if parent not in pairs:
        print(f"\n=== IMP {key} parent {parent} NOT IN PAIRS ===")
        dump_mod(mod)
        continue
    if check_imp(key, mod, parent):
        accepted.append((key, mod, "imp:"+parent))

print("\n=== SEQUENTIAL unique importer after sibling pin ===")
SEQ = [
    ("pages/clusters/containers/Storage/Volumes/Volume.js", "module-3721.js",
     "pages/clusters/containers/Storage/Volumes/routes.js",
     {"pages/clusters/containers/Storage/PV.js", "module-3723.js"}),
    ("components/Graph/Detail/Monitors.js", "module-4760.js",
     "components/Graph/Detail.js",
     {"components/Graph/Detail/Pods.js", "module-4769.js"}),
]
for key, mod, parent, extra in SEQ:
    extra_keys = {x for x in extra if not x.startswith("module-")}
    extra_mods = {x for x in extra if x.startswith("module-")}
    if check_imp(key, mod, parent, extra_known=extra_keys | extra_mods):
        accepted.append((key, mod, "imp_after_sibling:"+parent))

print("\n=== EXPECTED AMBIG remaining unique-importer of uniquely named parents ===")
AMBIG_PARENTS = [
    "pages/fedprojects/containers/Applications/Detail/routes.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "pages/clusters/containers/EdgeNodes/Detail/routes.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    "pages/clusters/containers/Monitor/Resource/routes.js",
    "pages/clusters/containers/Monitor/Cluster/routes.js",
]
for parent_key in AMBIG_PARENTS:
    parent_mod = pairs.get(parent_key)
    kids = parent_unique_kids(parent_mod)
    unnamed = unnamed_locals(parent_key)
    print(f"  {parent_key} -> {parent_mod} unique_kids={kids} unnamed_local={unnamed}")

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seen))
