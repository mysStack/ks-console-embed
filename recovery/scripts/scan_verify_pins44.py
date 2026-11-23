#!/usr/bin/env python3
"""Strict-verify slice 44 unique-importer / unique-lit candidates."""
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
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112", "4656", "4657",
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
orig_imp_targets = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = rel
    if key.endswith("/index.jsx"):
        key = key[: -len("/index.jsx")] + ".js"
    elif key.endswith("/index.js"):
        key = key[: -len("/index.js")] + ".js"
    elif key.endswith(".jsx"):
        key = key[:-4] + ".js"
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for raw in imp_orig.findall(text):
        last = raw.rstrip("/").split("/")[-1].replace(".js", "").replace(".jsx", "")
        orig_imp_targets[(last, key if False else last)].append((key, raw))


def dump_mod(mod, n=16):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    mid = re.search(r"\d+", mod).group()
    print("    css", is_css(mod), "skip", mid in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))[:12]
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in kids])
    for needle in ("class ", "export default", "STORAGE_DEVICES", "versionStore",
                   "APP_SETTINGS", "CREDENTIAL_SI", "Ingresses", "enableScaleReplica",
                   "showSecret", "secretWrapper", "DATA", "SN_NO"):
        i = text.find(needle)
        if i >= 0:
            print("   ", needle, repr(text[i:i + 120].replace("\n", " ")))


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
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    pkey = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            resolved_imp_targets[resolved].append((pkey, raw))


def orig_importers_of(key):
    return resolved_imp_targets.get(key, [])


def check_imp(key, mod, parent_key):
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    if not op:
        print("  REJECT orig missing")
        return False
    parent_mod = pairs.get(parent_key)
    print("  parent_mod", parent_mod, "parent_known", parent_key in known_keys)
    dump_mod(mod)
    if not mod or mod not in unpacked or is_css(mod):
        print("  REJECT css/missing")
        return False
    mid = re.search(r"\d+", mod).group()
    if mid in SKIP_MODS:
        print("  REJECT skip_mod")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod] and parent_mod in known_mods
    print("  unique_named_parent", unique_named_parent, "up", up)
    oimps = orig_importers_of(key)
    named_oimps = [(k, raw) for k, raw in oimps if k in known_keys]
    print("  orig_importers", oimps)
    print("  named_orig_importers", named_oimps)
    unique_orig = len(set(k for k, _r in oimps)) == 1 and named_oimps and named_oimps[0][0] == parent_key
    # parent local unnamed JS children
    ppath = orig_path_for(parent_key)
    locals_ = []
    if ppath:
        for raw in imp_orig.findall(ppath.read_text(encoding="utf-8", errors="ignore")):
            if raw.startswith("./") or raw.startswith("../") or parent_key.split("/")[-2] in raw:
                last = raw.rstrip("/").split("/")[-1]
                if last.endswith(".scss") or last.endswith(".css"):
                    continue
                locals_.append(raw)
    unnamed_local = []
    child_base = key.rsplit("/", 1)[-1].replace(".js", "")
    matching = []
    for raw in locals_:
        last = raw.rstrip("/").split("/")[-1].replace(".js", "").replace(".jsx", "")
        # resolve to key if possible
        unnamed_local.append(raw)
        if last == child_base:
            matching.append(raw)
    print("  parent_js_locals", locals_, "matching", matching)
    parent_unpacked_unique_kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m):
            continue
        mid2 = re.search(r"\d+", m).group()
        if mid2 in SKIP_MODS or int(mid2) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            parent_unpacked_unique_kids.append(m)
    print("  parent_unique_kids", parent_unpacked_unique_kids)
    only_unique_kid = parent_unpacked_unique_kids == [mod]
    orig_only_match = bool(matching) and unique_orig
    ok = (
        unique_named_parent
        and mod not in known_mods
        and unique_orig
        and only_unique_kid
        and orig_only_match
    )
    # allowed 1:1 even if parent also imports already-named siblings
    print(
        "  VERDICT",
        "NEW" if ok else "REJECT",
        "unique_orig", unique_orig,
        "only_unique_kid", only_unique_kid,
        "orig_only_match", orig_only_match,
        "already_named", mod in known_mods,
    )
    return ok


def check_pair_unique_lit(key, mod, needle, parent_key):
    print(f"\n=== LIT {key} -> {mod} needle={needle!r} parent={parent_key} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    dump_mod(mod)
    ofiles = orig_str.get(needle, [])
    ufiles = str_index.get(needle, set())
    unnamed = [f for f in ufiles if f not in known_mods]
    named = [(f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods]
    print("  orig_str_hits", sorted(set(ofiles)))
    print("  unpacked", sorted(ufiles)[:8], "unnamed", unnamed, "named", named[:4])
    up = sorted(set(importers[mod]))
    parent_mod = pairs.get(parent_key)
    unique_named_parent = up == [parent_mod] and parent_mod in known_mods
    oimps = orig_importers_of(key)
    unique_orig = [k for k, _r in oimps]
    print("  unique_named_parent", unique_named_parent, "orig_importers", oimps)
    ok_orig = sorted(set(ofiles)) == [key]
    unique_unp = ufiles == {mod} or (unnamed == [mod] and not [f for f in ufiles if f in known_mods and f != mod])
    in_mod = needle in unpacked.get(mod, "")
    in_orig = op and needle in op.read_text(encoding="utf-8", errors="ignore")
    ok = (
        unique_named_parent
        and unique_orig == [parent_key]
        and in_mod
        and in_orig
        and unique_unp
        and ok_orig
        and mod not in known_mods
    )
    # weaker: unique unnamed lit + unique orig importer of uniquely named parent,
    # even if orig_str not unique, if needle uniquely aliases the pair among the parent's unique kids
    parent_unique_kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m):
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            parent_unique_kids.append(m)
    kids_with_needle = [k for k in parent_unique_kids if needle in unpacked.get(k, "")]
    orig_children_with_needle = []
    ppath = orig_path_for(parent_key)
    print("  parent_unique_kids", parent_unique_kids, "kids_with_needle", kids_with_needle)
    print("  in_mod", in_mod, "in_orig", in_orig, "ok_orig", ok_orig, "unique_unp", unique_unp)
    pair_ok = (
        unique_named_parent
        and unique_orig == [parent_key]
        and in_mod
        and in_orig
        and kids_with_needle == [mod]
        and mod not in known_mods
        and unnamed == [mod]
    )
    print("  VERDICT", "NEW" if ok else ("PAIR" if pair_ok else "REJECT"), "pair_ok", pair_ok)
    return ok or pair_ok


accepted = []

# 1:1 unique importer of uniquely named parent matching original unique import
IMP_CANDIDATES = [
    ("pages/projects/containers/DaemonSets/Detail/ResourceStatus.js", "module-3865.js",
     "pages/projects/containers/DaemonSets/Detail/routes.js"),
    ("pages/projects/containers/ConfigMaps/Detail/ConfigDetail.js", "module-3890.js",
     "pages/projects/containers/ConfigMaps/Detail/routes.js"),
    ("pages/projects/containers/Secrets/Detail/SecretDetail.js", "module-3887.js",
     "pages/projects/containers/Secrets/Detail/routes.js"),
    ("pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail.js", "module-3894.js",
     "pages/projects/containers/ServiceAccounts/Detail/routes.js"),
    ("pages/projects/containers/Jobs/Detail/ResourceStatus.js", "module-3868.js",
     "pages/projects/containers/Jobs/Detail/routes.js"),
]

# expected reject: scss-sibling false unique importer / skip list
REJECT_IMP = [
    ("components/Modals/About.js", "module-4063.js", "components/Layout/LoginInfo.js"),
    ("pages/projects/components/ServiceAccess.js", "module-4746.js",
     "pages/projects/components/Cards/Services/Item.js"),
    ("pages/apps/components/ToggleView.js", "module-3133.js",
     "pages/apps/components/Modals/AppCreate.js"),
    ("pages/apps/components/TextPreview.js", "module-3158.js",
     "pages/apps/components/Modals/AppReview.js"),
    ("pages/apps/components/Lists/AuditRecord.js", "module-4413.js",
     "pages/apps/components/Lists/VersionList/Item.js"),
    ("pages/workspaces/components/Modals/EditBasicInfo.js", "module-4356.js",
     "pages/workspaces/containers/BaseInfo.js"),
]

# remaining unique-gap: uniquely imported by uniquely named parent, distinguish by unique lit
LIT_CANDIDATES = [
    ("pages/workspaces/containers/Apps/Detail/VersionManage.js", "module-4408.js",
     "versionStore", "pages/workspaces/containers/Apps/Detail/routes.js"),
    ("pages/workspaces/containers/Apps/Detail/AppInstances.js", "module-4423.js",
     "InstanceList", "pages/workspaces/containers/Apps/Detail/routes.js"),
    ("pages/projects/containers/Applications/OPAppDetail/AppConfig.js", "module-4792.js",
     "APP_SETTINGS", "pages/projects/containers/Applications/OPAppDetail/routes.js"),
    ("pages/projects/containers/Applications/OPAppDetail/ResourceStatus.js", "module-4789.js",
     "detailStore", "pages/projects/containers/Applications/OPAppDetail/routes.js"),
    ("pages/projects/containers/Applications/CRDAppDetail/Components.js", "module-4744.js",
     "projects/components/Cards/Ingresses", "pages/projects/containers/Applications/CRDAppDetail/routes.js"),
    ("pages/projects/containers/Applications/CRDAppDetail/TrafficManangement.js", "module-4751.js",
     "TRAFFIC_MONITORING_UNAVAILABLE_DESC", "pages/projects/containers/Applications/CRDAppDetail/routes.js"),
    ("pages/projects/containers/Applications/CRDAppDetail/Tracing.js", "module-4776.js",
     "SERVICE_VALUE", "pages/projects/containers/Applications/CRDAppDetail/routes.js"),
]

print("\n=== IMP CANDIDATES ===")
for key, mod, parent in IMP_CANDIDATES:
    if check_imp(key, mod, parent):
        accepted.append((key, mod, "imp", parent))

print("\n=== EXPECTED REJECT IMP ===")
for key, mod, parent in REJECT_IMP:
    ok = check_imp(key, mod, parent)
    print("  expected_reject", "UNEXPECTED_ACCEPT" if ok else "ok_reject")

print("\n=== LIT / PAIR CANDIDATES ===")
for key, mod, needle, parent in LIT_CANDIDATES:
    if check_pair_unique_lit(key, mod, needle, parent):
        accepted.append((key, mod, "lit:"+needle, parent))

print("\n=== dump Jobs 3866 vs 3868 / SA 3892 vs 3894 ===")
for mod in ["module-3866.js", "module-3868.js", "module-3892.js", "module-3894.js",
            "module-1134.js", "module-1072.js", "module-1071.js", "module-3869.js",
            "module-3865.js", "module-3890.js", "module-3887.js",
            "module-4744.js", "module-4751.js", "module-4776.js",
            "module-4789.js", "module-4792.js", "module-4408.js", "module-4423.js"]:
    print(f"\n----- {mod} -----")
    dump_mod(mod)

print("\n=== orig unique t/str for remaining children ===")
for key, needles in [
    ("pages/projects/containers/DaemonSets/Detail/ResourceStatus.js", ["enableScaleReplica"]),
    ("pages/projects/containers/Jobs/Detail/ResourceStatus.js", ["JobsResourceStatus"]),
    ("pages/projects/containers/ConfigMaps/Detail/ConfigDetail.js", ["DATA"]),
    ("pages/projects/containers/Secrets/Detail/SecretDetail.js", ["CREDENTIAL_SI", "PRIVATE_KEY_TCAP", "showSecret"]),
    ("pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail.js", ["secretWrapper", "serviceAccountName"]),
    ("pages/workspaces/containers/Apps/Detail/VersionManage.js", ["versionStore", "VersionList"]),
    ("pages/workspaces/containers/Apps/Detail/AppInstances.js", ["InstanceList", "workspaceStore"]),
    ("pages/projects/containers/Applications/CRDAppDetail/Components.js", ["styles.main"]),
    ("pages/projects/containers/Deployments/Detail/ResourceStatus.js", ["STORAGE_DEVICES", "renderCustomScalingConfig", "isEdgeWize"]),
    ("pages/projects/containers/Deployments/Detail/Monitoring.js", ["VIEW_ALL_REPLICAS", "pod_cpu_usage"]),
    ("pages/projects/containers/StatefulSets/Detail/ResourceStatus.js", ["spec.serviceName", "checkService"]),
]:
    print(f"\n-- {key} --")
    op = orig_path_for(key)
    print("  orig", op)
    if op:
        text = op.read_text(encoding="utf-8", errors="ignore")
        print("  orig_t", list(dict.fromkeys(t_pat.findall(text))))
        print("  orig_str", [s for s in dict.fromkeys(str_pat.findall(text)) if len(s) >= 8][:18])
    for n in needles:
        print(f"    needle {n!r} orig={sorted(set(orig_str.get(n, []) + orig_t.get(n, [])))[:8]} unpacked={sorted(str_index.get(n, set()) | t_index.get(n, set()))[:8]}")

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind, extra in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind} {extra}')
print("accepted_count", len(seen))
