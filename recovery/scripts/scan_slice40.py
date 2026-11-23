#!/usr/bin/env python3
"""Slice 40: remaining original-path files vs KNOWN, unique t/api/importer pins."""
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
}
SKIP_NAME_FRAGS = (
    "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton",
)
SKIP_2HIT_T = {
    "YAML_FILE", "ROUTE_SETTINGS", "CREATE_POD_IP_POOL", "TRAFFIC_MANAGEMENT",
    "INTERNAL_ALLOWLIST", "IMAGE_ARTIFACTS", "VALID_URL_DESC", "CODE_CHECK",
    "ISSUE_PL",
}
SKIP_2HIT_NAME_FRAGS = (
    "Initializing", "KubernetesStatus", "Gateway", "Monitor",
)

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
res_pat = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SCAN_ROOTS = [
    SRC / "components",
    SRC / "pages",
    SRC / "stores",
    SRC / "utils",
    SRC / "hocs",
    SRC / "actions",
    SRC / "configs",
]

FAMILY_PREFIXES = (
    "pages/settings/",
    "pages/access/",
    "pages/fedprojects/",
    "pages/devops/",
    "pages/projects/components/Modals/KubeConfig",
    "pages/console/containers/KubeCtl",
    "pages/clusters/containers/KubeConfig",
    "components/HOCs/withDefaultSecrets",
    "components/KubeTools",
    "components/Layout/",
    "actions/toolbox",
)

NEW_PARENTS = [
    "pages/devops/containers/Pipelines/Detail/routes.js",
    "pages/devops/containers/Pipelines/Detail/TaskStatus.js",
    "pages/devops/containers/Pipelines/Detail/Layout/pipeline.js",
    "pages/devops/containers/Pipelines/Detail/Parameters.js",
    "pages/devops/containers/Pipelines/Detail/Activity.js",
    "pages/devops/containers/Pipelines/Detail/Commit.js",
    "pages/devops/containers/Pipelines/Detail/PipelineLogDialog/Timer.js",
    "pages/devops/containers/Pipelines/Detail/PipelineLogDialog.js",
    "pages/devops/containers/Pipelines/Detail/Branch.js",
    "pages/devops/containers/Pipelines/Detail/PipelineLogDialog/FullLogs.js",
    "pages/devops/pipelines/Detail.js",
    "pages/console/containers/Dashboard/Admin.js",
    "pages/console/containers/Dashboard/Admin/History/Card.js",
    "pages/console/containers/Dashboard/Admin/History.js",
    "pages/console/containers/Dashboard/Admin/PlatformStatus.js",
    "pages/access/containers/Roles/Detail/AuthorizationList.js",
    "pages/access/containers/Roles/Detail/AuthorizedUsers.js",
    "pages/workspaces/components/Modals/EditGroup/Detail.js",
    "pages/workspaces/components/Modals/EditGroup/Department.js",
    "pages/workspaces/components/Modals/EditGroup/Detail/Form/DevopsSelect.js",
    "pages/workspaces/components/Modals/EditGroup/Detail/Form.js",
    "pages/projects/components/Modals/CreateApp/BaseInfo.js",
    "components/Graph/Card.js",
    "components/Graph/Edge.js",
    "components/Graph/Detail.js",
    "components/Graph/Detail/PolicyForm.js",
    "pages/apps/components/Forms/AppBaseEdit.js",
    "pages/apps/components/Cards/ScreenshotsEdit.js",
]

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
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


def mid_of(mod_name: str) -> str:
    return re.search(r"\d+", mod_name).group()


def is_css(mod: str) -> bool:
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def skip_mod(name):
    return mid_of(name) in SKIP_MODS


def skip_name(key):
    if any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS):
        return True
    return False


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    parts = []
    for part in joined.split("/"):
        if part == "." or part == "":
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
    for ext in ("/index.js", "/index.jsx"):
        p = SRC / (rel + ext)
        if p.exists():
            return norm_key(p.relative_to(SRC).as_posix())
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


orig_files = []
for root in SCAN_ROOTS:
    if not root.exists():
        continue
    for p in root.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name or p.name.endswith(".spec.js"):
            continue
        rel = p.relative_to(SRC).as_posix()
        orig_files.append((rel, norm_key(rel), p))

missing = [(rel, key, p) for rel, key, p in orig_files if key not in known_keys]
family_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if any(key.startswith(pref) or pref in key for pref in FAMILY_PREFIXES)
]

print("=== orig vs KNOWN ===")
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))
print("family_missing", len(family_missing))

print("\n=== family missing keys ===")
for fam in (
    "pages/settings/",
    "pages/access/",
    "pages/fedprojects/",
    "pages/devops/",
    "KubeConfig",
    "KubeCtl",
    "withDefaultSecrets",
    "KubeTools",
    "toolbox",
):
    hits = [key for _rel, key, _p in missing if fam.lower() in key.lower()]
    print(f"\n-- {fam} ({len(hits)}) --")
    for k in hits:
        print(" ", k)

print("\n=== indexing unpacked ===", flush=True)
unpacked_texts = {}
t_index = defaultdict(set)
res_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked_texts[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for k in res_pat.findall(text):
        res_index[k].add(path.name)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        api_index[a].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = {}
orig_texts = {}
for rel, key, p in orig_files:
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        orig_api[a].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    locals_ = []
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            locals_.append(resolved)
            orig_imp_targets[resolved].append(key)
    orig_local_imps[key] = locals_


def unnamed_only(files):
    return [f for f in files if mid_of(f) not in known_mods]


pins = []
alias_pins = []


def consider(key, files, reason, extra="", allow_alias=True):
    files = sorted(set(files), key=lambda s: int(mid_of(s)))
    un = [f for f in files if not skip_mod(f)]
    un_unnamed = unnamed_only(un)
    if skip_name(key):
        print(f"  SKIP_NAME {key} [{reason}] {extra}")
        return
    if len(un_unnamed) == 1:
        mod = un_unnamed[0]
        pins.append((key, mod, f"{reason} {extra}".strip()))
        print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    elif len(un) == 1 and not un_unnamed and allow_alias:
        mod = un[0]
        existing = mod_to_names.get(mod, [])
        if key not in existing:
            alias_pins.append((key, mod, f"alias_of {existing} [{reason}] {extra}".strip()))
            print(f"  ALIAS {key} -> {mod} already={existing} [{reason}] {extra}")
    elif 2 <= len(un_unnamed) <= 6:
        print(f"  MULTI {len(un_unnamed)} {key} -> {un_unnamed} [{reason}] {extra}")
    elif len(un_unnamed) == 0 and len(un) == 0:
        print(f"  MISS {key} [{reason}] {extra}")


print("\n=== FAMILY PIN CANDIDATES ===")
for rel, key, p in family_missing:
    text = orig_texts[key]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    unique_t = [
        k for k in tkeys
        if orig_t[k] == [key] and k not in COMMON_T and k not in SKIP_2HIT_T
    ]
    pinned = False
    for k in unique_t:
        consider(key, t_index.get(k, []), "unique_t", repr(k))
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(res_pat.findall(text)):
        consider(key, res_index.get(k, []), "resource/module", repr(k))
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    unique_apis = [
        a for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        consider(key, api_index.get(a, []), "unique_api", a[:80])
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    for s in dict.fromkeys(str_pat.findall(text)):
        if s in COMMON_T or len(s) < 10:
            continue
        files = str_index.get(s, set())
        if orig_str[s] == [key]:
            consider(key, files, "unique_str", s)
            if any(x[0] == key for x in pins + alias_pins):
                break

print("\n=== SPECIAL NEEDLES ===")
specials = [
    ("pages/projects/components/Modals/KubeConfig.js", "kubeconfig.yaml"),
    ("pages/projects/components/Modals/KubeConfig.js", "COPIED_SUCCESSFUL"),
    ("pages/console/containers/KubeCtl.js", "kubectl"),
    ("pages/clusters/containers/KubeConfig.js", "pageClose"),
    ("components/HOCs/withDefaultSecrets.js", "refecthDefaultSecret"),
    ("components/HOCs/withDefaultSecrets.js", "secret.kubesphere.io/is-default-class=true"),
    ("components/KubeTools.js", "enableKubeConfig"),
    ("components/KubeTools.js", "KubeTools"),
    ("pages/settings/components/Modals/OAuth.js", "OAUTH_DESC"),
    ("pages/settings/components/Cards/Banner.js", "NOTIFICATION_CHANNELS_DESC"),
    ("pages/settings/containers/BaseInfo.js", "PLATFORM_INFORMATION"),
    ("pages/settings/containers/layout.js", "PLATFORM_SETTINGS"),
    ("pages/access/containers/layout.js", "ACCESS_CONTROL"),
    ("pages/access/containers/Workspaces.js", "WORKSPACE"),
]
for key, needle in specials:
    hits = [fn for fn, text in unpacked_texts.items() if needle in text]
    unnamed = unnamed_only([h for h in hits if not skip_mod(h)])
    named_hits = [h for h in hits if mid_of(h) in known_mods]
    orig_hits = orig_str.get(needle, []) or orig_t.get(needle, [])
    print(
        f"  needle {needle!r} unpacked={len(hits)} unnamed={unnamed[:6]} "
        f"named={[(h, list(mod_to_names.get(h, []))) for h in named_hits[:4]]} "
        f"orig={orig_hits[:6]}"
    )
    if key in known_keys:
        print(f"    already named {key} -> {pairs[key]}")
    elif len(unnamed) == 1:
        consider(key, unnamed, "special_needle", repr(needle))
    elif len(hits) == 1:
        consider(key, hits, "special_needle_all", repr(needle))

print("\n=== UNIQUE IMPORTER of uniquely named parent (family + new parents) ===")
focus_missing = family_missing[:]
# also children of NEW_PARENTS even if not in family
parent_child_keys = set()
for parent_key in NEW_PARENTS:
    if parent_key in orig_local_imps:
        for child in orig_local_imps[parent_key]:
            if child not in known_keys:
                parent_child_keys.add(child)

extra = [(rel, key, p) for rel, key, p in missing if key in parent_child_keys]
scan_missing = family_missing + extra
seen_keys = set()
ordered = []
for item in scan_missing:
    if item[1] not in seen_keys:
        seen_keys.add(item[1])
        ordered.append(item)

for rel, key, p in ordered:
    if skip_name(key):
        continue
    imps = orig_imp_targets.get(key, [])
    named_imps = [i for i in imps if i in known_keys]
    if len(set(imps)) != 1 or len(named_imps) != 1:
        if key in parent_child_keys:
            print(f"  GAP_CHILD {key} orig_imps={imps} named={named_imps}")
        continue
    parent_key = named_imps[0]
    parent_mod = pairs[parent_key]
    parent_text = unpacked_texts.get(parent_mod, "")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        kids.append(m)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys]
    unique_kids = []
    for kid in kids:
        up = sorted(set(importers[kid]))
        if up == [parent_mod]:
            unique_kids.append(kid)
    if len(unique_kids) == 1 and (len(unnamed_local) == 1 or unnamed_local == [key]):
        kid = unique_kids[0]
        reason = f"unique_importer parent={parent_key} orig_unnamed_local={unnamed_local}"
        if not any(x[0] == key for x in pins):
            pins.append((key, kid, reason))
            print(f"  PIN {key} -> {kid} [{reason}]")
        else:
            print(f"  ALSO_IMPORTER {key} -> {kid} [{reason}]")
    elif unique_kids:
        print(
            f"  AMBIG {key} parent={parent_key} unique_kids={unique_kids} "
            f"orig_unnamed_local={unnamed_local}"
        )
    elif key in parent_child_keys or key.startswith(FAMILY_PREFIXES[:4]):
        print(
            f"  NO_UNIQUE_KID {key} parent={parent_key} kids={kids} "
            f"orig_unnamed_local={unnamed_local}"
        )

print("\n=== NEW PARENT unnamed children dump ===")
for parent_key in NEW_PARENTS:
    parent_mod = pairs.get(parent_key)
    if not parent_mod:
        print(f"  MISSING_PARENT_NAME {parent_key}")
        continue
    parent_text = unpacked_texts.get(parent_mod, "")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        kids.append(m)
    orig_unnamed = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys]
    print(f"\n  PARENT {parent_key} -> {parent_mod}")
    print(f"    orig_unnamed_local={orig_unnamed}")
    print(f"    unpacked_unnamed_kids={kids}")
    for kid in kids:
        ktext = unpacked_texts[kid]
        tkeys = list(dict.fromkeys(t_pat.findall(ktext)))
        unique_t = []
        for k in tkeys:
            files = t_index[k]
            unn = unnamed_only([f for f in files if not skip_mod(f)])
            if files == {kid} or unn == [kid]:
                unique_t.append(k)
        up = sorted(set(importers[kid]))
        named_up = [(i, mod_to_names.get(i, ["?"])) for i in up]
        print(f"    KID {kid} unique_importer={up == [parent_mod]} importers={named_up[:6]}")
        print(f"      t={tkeys[:10]} unique_t={unique_t[:8]}")

print("\n=== DEDUPED NEW PINS (unnamed modules only) ===")
seen = set()
new_count = 0
for key, mod, reason in pins:
    pair = (key, mod)
    if pair in seen:
        continue
    seen.add(pair)
    new_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("new_pin_count", new_count)

print("\n=== DEDUPED ALIAS PINS (original path for already-named module) ===")
seen_a = set()
alias_count = 0
for key, mod, reason in alias_pins:
    pair = (key, mod)
    if pair in seen_a:
        continue
    seen_a.add(pair)
    alias_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("alias_pin_count", alias_count)

print("\n=== family remaining unpinned ===")
pinned_keys = {k for k, _m, _r in pins + alias_pins}
for rel, key, p in family_missing:
    if key in pinned_keys:
        continue
    tkeys = list(dict.fromkeys(t_pat.findall(orig_texts[key])))
    print(f"  GAP {key} t={tkeys[:8]}")
