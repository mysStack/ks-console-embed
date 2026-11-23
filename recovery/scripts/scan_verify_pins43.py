#!/usr/bin/env python3
"""Strict-verify slice 43 PIN/ALIAS/importer candidates."""
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

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT",
}


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
orig_files = {}
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    key = norm_key(p.relative_to(SRC).as_posix())
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_files[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)


def dump_mod(mod, n=14):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    mid = re.search(r"\d+", mod).group()
    print("    css", is_css(mod), "skip", mid in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", sorted(set(importers[mod]))[:10])
    snippet = text
    for needle in ("class ", "export default", "t(", "title"):
        i = snippet.find(needle)
        if i >= 0:
            print("   ", needle, repr(snippet[i:i + 90].replace("\n", " ")))
            break


def same_family_alias(key, existing):
    def family(k):
        parts = k.split("/")
        if len(parts) >= 2 and parts[0] == "pages":
            return parts[1]
        return parts[0]

    key_fam = family(key)
    for e in existing:
        if family(e) != key_fam:
            return False
        if "whizard-telemetry" in e or "whizard-telemetry" in key:
            if ("whizard-telemetry" in e) != ("whizard-telemetry" in key):
                return False
    return True


def check(key, mod, needle, kind):
    print(f"\n=== {key} -> {mod} [{kind} {needle!r}] ===")
    if key.endswith(".scss"):
        print("  REJECT scss")
        return False
    op = orig_path_for(key)
    if not op:
        print("  ORIG_MISSING")
        return False
    otext = op.read_text(encoding="utf-8", errors="ignore")
    ot = list(dict.fromkeys(t_pat.findall(otext)))
    print("  orig_t", ot[:14])
    if kind == "t":
        ofiles = orig_t.get(needle, [])
        ufiles = t_index.get(needle, set())
        if needle in COMMON_T:
            print("  SKIP_COMMON_T")
            return False
    elif kind == "str":
        ofiles = orig_str.get(needle, [])
        ufiles = str_index.get(needle, set())
    elif kind == "imp":
        dump_mod(mod)
        if not mod or is_css(mod):
            print("  REJECT css/missing")
            return False
        mid = re.search(r"\d+", mod).group()
        if mid in SKIP_MODS:
            print("  REJECT skip_mod")
            return False
        up = sorted(set(importers[mod]))
        named_up = [(i, mod_to_names.get(i, ["?"])) for i in up]
        print("  importers", named_up)
        unique_named_parent = (
            len(up) == 1 and up[0] in known_mods and not is_css(mod)
        )
        parent_names = mod_to_names.get(up[0], []) if up else []
        print("  parent_names", parent_names)
        orig_parent_ok = False
        for pname in parent_names:
            ppath = orig_path_for(pname)
            if not ppath:
                continue
            ptext = ppath.read_text(encoding="utf-8", errors="ignore")
            locals_ = []
            for raw in imp_orig.findall(ptext):
                if raw.startswith("./") or raw.startswith("../"):
                    locals_.append(raw)
            print("  orig_parent_local", pname, locals_)
            # unique local import of this child (basename match)
            child_base = key.rsplit("/", 1)[-1].replace(".js", "")
            matching = [
                raw for raw in locals_
                if raw.rstrip("/").split("/")[-1].replace(".js", "").replace(".jsx", "")
                == child_base
            ]
            unnamed_js_locals = []
            for raw in locals_:
                last = raw.rstrip("/").split("/")[-1]
                if last.endswith(".scss") or last.endswith(".css"):
                    continue
                unnamed_js_locals.append(raw)
            print("  matching_local", matching, "js_locals", unnamed_js_locals)
            if matching and (
                len(unnamed_js_locals) == 1
                or (
                    len(matching) == 1
                    and any(m.endswith(child_base) or m.endswith(child_base + ".js") for m in matching)
                    and len([r for r in unnamed_js_locals if r in matching or r.endswith("/" + child_base) or r.endswith("./" + child_base)])
                    <= 1
                )
            ):
                orig_parent_ok = True
        print(
            "  VERDICT",
            "NEW" if unique_named_parent and mod not in known_mods and orig_parent_ok else "REJECT",
            "unique_named_parent", unique_named_parent,
            "orig_parent_ok", orig_parent_ok,
        )
        return unique_named_parent and mod not in known_mods and orig_parent_ok
    else:
        ofiles, ufiles = [], set()

    unnamed = [f for f in ufiles if f not in known_mods]
    named_hits = [(f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods]
    orig_set = sorted(set(ofiles))
    print(f"  orig_hits={len(orig_set)} {orig_set[:8]}")
    print(f"  unpacked_hits={len(ufiles)} unnamed={unnamed[:6]} named={named_hits[:5]}")
    if mod:
        dump_mod(mod)
        if is_css(mod):
            print("  REJECT css")
            return False
        mid = re.search(r"\d+", mod).group()
        if mid in SKIP_MODS:
            print("  REJECT skip_mod")
            return False
        in_mod = needle in unpacked[mod] if needle else False
        print("  needle_in_mod", in_mod)
        if not in_mod and kind != "imp":
            print("  REJECT needle missing")
            return False
    ok_orig = orig_set == [key]
    named_other = [f for f in ufiles if f in known_mods and f != mod]
    unique_unp = ufiles == {mod} or (unnamed == [mod] and not named_other)
    alias_ok = (
        mod in known_mods
        and ok_orig
        and unique_unp
        and same_family_alias(key, mod_to_names.get(mod, []))
    )
    new_ok = ok_orig and unique_unp and mod not in known_mods
    print(
        "  VERDICT",
        "NEW" if new_ok else ("ALIAS" if alias_ok else "REJECT"),
        "ok_orig", ok_orig, "unique_unp", unique_unp, "named_other", named_other[:4],
    )
    return new_ok or alias_ok


def dump_key(key, extra_needles=None):
    print(f"\n=== DUMP {key} ===")
    op = orig_path_for(key)
    if not op:
        print("  ORIG_MISSING")
        return
    otext = op.read_text(encoding="utf-8", errors="ignore")
    ot = list(dict.fromkeys(t_pat.findall(otext)))
    os_ = list(dict.fromkeys(str_pat.findall(otext)))
    print("  orig_t", ot)
    print("  orig_str", os_[:24])
    needles = list(ot)
    if extra_needles:
        needles.extend(extra_needles)
    for k in needles:
        ofiles = orig_t.get(k, [])
        ufiles = t_index.get(k, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        named = [(f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods]
        print(f"    t({k!r}) orig={sorted(set(ofiles))[:6]} unpacked={sorted(ufiles)[:6]} unnamed={unnamed[:4]} named={named[:3]}")
    for s in os_[:16]:
        ofiles = orig_str.get(s, [])
        ufiles = str_index.get(s, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        named = [f for f in ufiles if f in known_mods]
        if len(set(ofiles)) == 1 or len(ufiles) <= 4:
            print(f"    str({s!r}) orig={sorted(set(ofiles))[:5]} unpacked={sorted(ufiles)[:6]} unnamed={unnamed[:4]} named={named[:3]}")


CANDIDATES = [
    # unique importer of uniquely named parent, orig unique local JS child
    ("pages/projects/containers/Pods/Containers/ResourceStatus.js", "module-3901.js", "unique_importer", "imp"),
    ("pages/projects/containers/VolumeSnapshots/Detail/Source.js", "module-3924.js", "unique_importer", "imp"),
    ("pages/workspaces/containers/Members/Detail/Projects.js", "module-4396.js", "unique_importer", "imp"),
    ("pages/workspaces/containers/Repos/Detail/Events.js", "module-4427.js", "unique_importer", "imp"),
    ("pages/clusters/containers/ServiceComponents/Detail/ServiceDetails.js", "module-3997.js", "unique_importer", "imp"),
    ("pages/clusters/containers/Storage/StorageClasses/Detail/Volumes.js", "module-3993.js", "unique_importer", "imp"),
    # 2-hit copies expected reject
    ("pages/projects/containers/Applications/CRDAppDetail/TrafficManangement.js", "module-4751.js", "TRAFFIC_MONITORING_UNAVAILABLE_DESC", "t"),
    ("pages/projects/containers/Applications/CRDAppDetail/Tracing.js", "module-4776.js", "SERVICE_VALUE", "t"),
    ("pages/projects/containers/Applications/CRDAppDetail/Tracing.js", "module-4776.js", "LAST_NUM_RECORDS", "t"),
    # named_other expected reject
    ("pages/workspaces/components/Modals/EditBasicInfo.js", "module-4356.js", "spec.clusters", "str"),
    # false unique_importer via scss sibling expected reject
    ("components/Modals/About.js", "module-4063.js", "unique_importer", "imp"),
    ("pages/projects/components/ServiceAccess.js", "module-4746.js", "unique_importer", "imp"),
    ("pages/apps/components/ToggleView.js", "module-3133.js", "unique_importer", "imp"),
    ("pages/apps/components/TextPreview.js", "module-3158.js", "unique_importer", "imp"),
    ("pages/apps/components/Lists/AuditRecord.js", "module-4413.js", "unique_importer", "imp"),
    # aliases expected reject (family mismatch / Item vs Form)
    ("components/Forms/Notification/SlackForm/Item.js", "module-1705.js", "CHANNEL_EXISTS", "t"),
    ("pages/clusters/containers/LogCollections/Detail.js", "module-4255.js", "detail.enabled", "str"),
    ("pages/clusters/containers/Monitor/Resource.js", "module-4152.js", "MONITORING_APPLICATION_DESC", "t"),
    ("pages/clusters/containers/Monitor/Cluster.js", "module-4137.js", "MONITORING_CLUSTER_DESC", "t"),
]


accepted = []
for key, mod, needle, kind in CANDIDATES:
    ok = check(key, mod, needle, kind)
    if ok:
        accepted.append((key, mod, needle, kind))

print("\n=== DUMP ambiguous / remaining unique candidates ===")
for key in [
    "pages/projects/containers/Applications/OPAppDetail/ResourceStatus.js",
    "pages/projects/containers/Applications/OPAppDetail/AppConfig.js",
    "pages/projects/containers/Applications/CRDAppDetail/Components.js",
    "pages/workspaces/containers/Apps/Detail/VersionManage.js",
    "pages/workspaces/containers/Apps/Detail/AppInstances.js",
    "pages/projects/containers/Volumes/Detail/Snapshots.js",
    "pages/projects/containers/Pods/Detail/ResourceStatus.js",
    "pages/projects/containers/Pods/Detail/Monitoring.js",
    "pages/projects/containers/ConfigMaps/Detail/ConfigDetail.js",
    "pages/projects/containers/Secrets/Detail/SecretDetail.js",
    "pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail.js",
    "pages/projects/containers/CronJobs/Detail/JobRecords.js",
    "pages/projects/containers/Jobs/Detail/ResourceStatus.js",
    "pages/projects/containers/Deployments/Detail/ResourceStatus.js",
    "pages/projects/containers/Deployments/Detail/Monitoring.js",
    "pages/projects/containers/Deployments/Detail/routes.js",
    "pages/projects/containers/Deployments/Detail.js",
    "pages/projects/containers/StatefulSets/Detail/routes.js",
    "pages/projects/containers/DaemonSets/Detail/routes.js",
    "pages/projects/containers/Jobs/Detail/routes.js",
    "pages/projects/containers/CronJobs/Detail/routes.js",
    "pages/projects/containers/ConfigMaps/Detail/routes.js",
    "pages/projects/containers/Secrets/Detail/routes.js",
    "pages/projects/containers/ServiceAccounts/Detail/routes.js",
]:
    dump_key(key)

print("\n=== dump ambiguous unpacked kids ===")
for mod in [
    "module-4744.js", "module-4751.js", "module-4776.js",
    "module-4789.js", "module-4792.js",
    "module-4408.js", "module-4423.js",
    "module-1824.js", "module-1829.js",
    "module-3892.js", "module-3893.js",
    "module-1216.js", "module-1402.js", "module-1221.js", "module-1222.js",
    "module-1224.js", "module-1404.js", "module-1405.js", "module-1406.js",
    "module-1227.js",
]:
    print(f"\n----- {mod} -----")
    dump_mod(mod)

print("\n=== remaining containers Detail.js vs already-named short Detail ===")
ALIAS_PAIRS = [
    ("pages/projects/containers/Deployments/Detail.js", "pages/projects/deployments/Detail.js"),
    ("pages/projects/containers/StatefulSets/Detail.js", "pages/projects/statefulsets/Detail.js"),
    ("pages/projects/containers/DaemonSets/Detail.js", "pages/projects/daemonsets/Detail.js"),
    ("pages/projects/containers/Jobs/Detail.js", "pages/projects/jobs/Detail.js"),
    ("pages/projects/containers/CronJobs/Detail.js", "pages/projects/cronjobs/Detail.js"),
    ("pages/projects/containers/ConfigMaps/Detail.js", "pages/projects/configmaps/Detail.js"),
    ("pages/projects/containers/Secrets/Detail.js", "pages/projects/secrets/Detail.js"),
    ("pages/projects/containers/ServiceAccounts/Detail.js", "pages/projects/serviceaccounts/Detail.js"),
    ("pages/projects/containers/Ingresses/Detail.js", "pages/projects/ingresses/Detail.js"),
]
for long_key, short_key in ALIAS_PAIRS:
    short_mod = pairs.get(short_key)
    print(f"\n-- {long_key} vs {short_key} -> {short_mod} long_known={long_key in known_keys}")
    op = orig_path_for(long_key)
    print("  orig_exists", bool(op), op)
    if not short_mod:
        continue
    dump_mod(short_mod)
    ot_long = list(dict.fromkeys(t_pat.findall(orig_files.get(long_key, "")))) if long_key in orig_files else []
    ot_short = list(dict.fromkeys(t_pat.findall(unpacked.get(short_mod, ""))))
    print("  orig_t_long", ot_long[:10])
    print("  unpacked_t", ot_short[:10])
    # unique importer of routes from this Detail
    routes_key = long_key.replace("/Detail.js", "/Detail/routes.js")
    if long_key.endswith("Ingresses/Detail.js"):
        routes_key = "pages/projects/containers/Ingresses/Detail/routes.js"
    print("  routes_key", routes_key, "known", routes_key in known_keys)
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked.get(short_mod, "")))):
        if m in known_mods or is_css(m):
            continue
        mid = re.search(r"\d+", m).group()
        if mid in SKIP_MODS or int(mid) < 70:
            continue
        kids.append(m)
    print("  unnamed_kids", kids)
    for kid in kids:
        up = sorted(set(importers[kid]))
        print("   kid", kid, "unique_imp", up == [short_mod], "importers", [(i, mod_to_names.get(i, ["?"])) for i in up][:4])
        dump_mod(kid)

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, needle, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    existing = mod_to_names.get(mod, [])
    tag = "ALIAS" if existing else "NEW"
    print(f'    "{key}": "{mod}",  # {tag} {kind} {needle}')
print("accepted_count", len(seen))
