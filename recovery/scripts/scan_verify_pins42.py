#!/usr/bin/env python3
"""Strict-verify slice 42 PIN/ALIAS/importer candidates."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
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
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    key = norm_key(p.relative_to(SRC).as_posix())
    text = p.read_text(encoding="utf-8", errors="ignore")
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
        print("  VERDICT", "NEW" if unique_named_parent and mod not in known_mods else "REJECT")
        return unique_named_parent and mod not in known_mods
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


CANDIDATES = [
    # unique t/str from remaining pages
    ("components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/Card.js", "module-2911.js", "autoscaling.kubeshpere.io/name", "str"),
    ("pages/projects/containers/Alerting/Policies.js", "module-4878.js", "RULE_STATUS", "t"),
    ("pages/clusters/containers/Members.js", "module-4094.js", "CLUSTER_MEMBER", "str"),
    ("pages/clusters/containers/Storage/PV/detail.js", "module-2062.js", "VOLUME_HANDLE", "t"),
    ("pages/clusters/containers/Network/IPPools.js", "module-2409.js", "TOTAL_VALUE", "t"),
    ("pages/clusters/containers/Network/IPPools/Detail.js", "module-3004.js", "POD_IP_POOL_PL", "t"),
    ("pages/workspaces/components/Modals/EditBasicInfo.js", "module-4356.js", "spec.clusters", "str"),
    # unique t children of uniquely named parents
    ("pages/projects/components/Modals/CreateApp/Routes/RuleList.js", "module-2621.js", "ADD_ROUTING_RULE_DESC", "t"),
    ("pages/projects/components/Modals/CreateApp/Routes/RuleForm.js", "module-2623.js", "INVALID_PATH_DESC", "t"),
    ("pages/projects/components/Modals/CreateApp/Routes/RuleForm.js", "module-2623.js", "PATH_EXIST", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainerImages.js", "module-2614.js", "IMAGE_VALUE", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ClustersMapper.js", "module-2610.js", None, "dump"),
    ("pages/apps/components/Modals/VersionSubmit/steps.js", "module-4417.js", "TEST_STEPS", "str"),
    ("pages/apps/components/Modals/VersionSubmit/steps.js", "module-4417.js", "UPDATE_LOG", "str"),
    ("pages/fedprojects/containers/Services/Detail/Ports.js", "module-5012.js", "ACCESS_SERVICE", "t"),
    ("pages/projects/containers/Services/Detail/Ports.js", "module-3879.js", "CONTAINER_PORT_SCAP", "t"),
    ("components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/WorkloadTable.js", "module-2910.js", "NO_MATCHING_RESULT_FOUND", "t"),
    ("pages/projects/containers/Network/Policies/RuleInfo.js", None, "INTERNAL_ALLOWLIST_TIP", "t"),
    ("pages/projects/containers/Network/Policies/RuleInfo.js", "module-4656.js", "INTERNAL_ALLOWLIST_TIP", "t"),
    ("pages/projects/containers/Network/Policies/RuleInfo.js", "module-4657.js", "EXTERNAL_ALLOWLIST_TIP", "t"),
    # unique importer routes of uniquely named Detail parents
    ("pages/projects/containers/Roles/Detail/routes.js", "module-4893.js", "unique_importer", "imp"),
    ("pages/projects/containers/VolumeSnapshots/Detail/routes.js", "module-3923.js", "unique_importer", "imp"),
    ("pages/projects/containers/Applications/CRDAppDetail/routes.js", "module-4743.js", "unique_importer", "imp"),
    ("pages/projects/containers/Pods/Detail/routes.js", "module-3896.js", "unique_importer", "imp"),
    ("pages/projects/containers/Pods/Containers/routes.js", "module-3900.js", "unique_importer", "imp"),
    ("pages/projects/containers/Network/Policies/Detail/routes.js", "module-3910.js", "unique_importer", "imp"),
    ("pages/projects/containers/Volumes/Detail/routes.js", "module-3917.js", "unique_importer", "imp"),
    ("pages/projects/containers/Services/Detail/routes.js", "module-3874.js", "unique_importer", "imp"),
    ("pages/workspaces/containers/Members/Detail/routes.js", "module-4395.js", "unique_importer", "imp"),
    ("pages/workspaces/containers/Repos/Detail/routes.js", "module-4426.js", "unique_importer", "imp"),
    ("pages/clusters/containers/ServiceComponents/Detail/routes.js", "module-3996.js", "unique_importer", "imp"),
    ("pages/clusters/containers/Storage/StorageClasses/Detail/routes.js", "module-3992.js", "unique_importer", "imp"),
    # unique importer kids that may be JS not css
    ("pages/projects/containers/Pods/Detail/Monitoring.js", "module-3907.js", "unique_importer", "imp"),
    ("pages/projects/containers/Services/Detail/Ports.js", "module-3879.js", "unique_importer", "imp"),
    ("pages/fedprojects/containers/Services/Detail/Ports.js", "module-5012.js", "unique_importer", "imp"),
    ("pages/apps/components/Modals/VersionSubmit/steps.js", "module-4417.js", "unique_importer", "imp"),
    ("pages/projects/containers/Deployments/Detail/RevisionControl.js", "module-3854.js", "getDiffHtml", "str"),
    # aliases that should reject
    ("components/Forms/Notification/SlackForm/Item.js", "module-1705.js", "CHANNEL_EXISTS", "t"),
    ("pages/clusters/containers/LogCollections/Detail.js", "module-4255.js", "detail.enabled", "str"),
    ("pages/clusters/containers/Monitor/Resource.js", "module-4152.js", "MONITORING_APPLICATION_DESC", "t"),
    ("pages/clusters/containers/Monitor/Cluster.js", "module-4137.js", "MONITORING_CLUSTER_DESC", "t"),
    # extra unique remaining from orig scan
    ("pages/workspaces/containers/Groups/GroupUser/User.js", None, "DEPARTMENT", "t"),
    ("pages/workspaces/containers/Overview/ResourceUsage.js", None, None, "dump"),
    ("pages/clusters/containers/Overview/Dashboard/ResourcesUsage/ResourceItem.js", None, "TOTAL", "t"),
    ("pages/projects/containers/CronJobs/Detail/JobRecords.js", None, "JOB", "t"),
    ("pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail/Secret.js", "module-3895.js", "DATA_SETTINGS", "t"),
]


def check_with_resolve(key, mod, needle, kind):
    if kind == "dump":
        print(f"\n=== DUMP {key} ===")
        op = orig_path_for(key)
        if not op:
            print("  ORIG_MISSING")
            return False
        otext = op.read_text(encoding="utf-8", errors="ignore")
        ot = list(dict.fromkeys(t_pat.findall(otext)))
        os_ = list(dict.fromkeys(str_pat.findall(otext)))
        print("  orig_t", ot)
        print("  orig_str", os_[:20])
        for k in ot:
            ofiles = orig_t.get(k, [])
            ufiles = t_index.get(k, set())
            unnamed = [f for f in ufiles if f not in known_mods]
            print(f"    t({k!r}) orig={ofiles[:5]} unpacked={sorted(ufiles)[:6]} unnamed={unnamed[:4]}")
        for s in os_[:12]:
            ofiles = orig_str.get(s, [])
            ufiles = str_index.get(s, set())
            unnamed = [f for f in ufiles if f not in known_mods]
            if len(set(ofiles)) == 1 or len(ufiles) <= 3:
                print(f"    str({s!r}) orig={ofiles[:5]} unpacked={sorted(ufiles)[:6]} unnamed={unnamed[:4]}")
        if mod:
            dump_mod(mod)
        return False
    if mod is None and needle:
        if kind == "t":
            ufiles = t_index.get(needle, set())
        else:
            ufiles = str_index.get(needle, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        if len(ufiles) == 1:
            mod = next(iter(ufiles))
        elif len(unnamed) == 1:
            mod = unnamed[0]
        print(f"\n# resolved {key} {needle} -> {mod} unnamed={unnamed[:4]} all={sorted(ufiles)[:6]}")
    return check(key, mod, needle, kind)


accepted = []
for item in CANDIDATES:
    key, mod, needle, kind = item
    ok = check_with_resolve(key, mod, needle, kind)
    if ok:
        accepted.append((key, mod if mod else "RESOLVED", needle, kind))

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, needle, kind in accepted:
    if mod == "RESOLVED":
        continue
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    existing = mod_to_names.get(mod, [])
    tag = "ALIAS" if existing else "NEW"
    print(f'    "{key}": "{mod}",  # {tag} {kind} {needle}')
print("accepted_count", len(seen))
