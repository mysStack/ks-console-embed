#!/usr/bin/env python3
"""Dump route-table importer candidates + remaining strict 1-hit unique t/str."""
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
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
}
SKIP_NAME_FRAGS = (
    "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton", "KubeTools",
    "withDefaultSecrets", "KubeCtl", "KubeConfig", "EditGroup",
    "ReplicasInput", "ScheduleCluster",
)
SKIP_KEY_SUBSTR = (
    "stores/monitoring/", "stores/rank/", "federated.list", "limitrange",
    "NameWithAction", "utils/request", "utils/localStorage",
    "pages/settings/containers/layout", "components/Layout/",
    "ImageBuilder", "FluxApp", "ChartCard", "CD/list",
    "Pipelines/Detail/layout",
)
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT", "span", "div", "p", "a", "return", "rootStore",
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


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def skip_name(key):
    if any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS):
        return True
    if any(s.lower() in key.lower() for s in SKIP_KEY_SUBSTR):
        return True
    if key.endswith(".scss"):
        return True
    return False


print("=== dump importer modules ===")
DUMP_MODS = [
    "module-4417.js",
    "module-4893.js",
    "module-3923.js",
    "module-4743.js",
    "module-3896.js",
    "module-3900.js",
    "module-3910.js",
    "module-3917.js",
    "module-3874.js",
    "module-4395.js",
    "module-4426.js",
    "module-3996.js",
    "module-3992.js",
    "module-3907.js",
    "module-3879.js",
    "module-5012.js",
    "module-2910.js",
    "module-2610.js",
    "module-2614.js",
    "module-2621.js",
    "module-2623.js",
    "module-4656.js",
    "module-4657.js",
    "module-3854.js",
]
importers = defaultdict(list)
unpacked = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

for mod in DUMP_MODS:
    text = unpacked.get(mod, "")
    print(f"\n===== {mod} css={is_css(mod)} named={mod_to_names.get(mod, [])} =====")
    print("  importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    print("  t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    head = text[:500].replace("\n", " | ")
    print("  head", head[:420])
    for needle in ("path:", "component:", "getIndexRoute", "Switch", "Route", "Redirect"):
        if needle in text:
            i = text.find(needle)
            print(" ", needle, repr(text[i:i + 80].replace("\n", " ")))

print("\n=== orig unique import of candidate routes ===")
orig_imp_targets = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for raw in imp_orig.findall(text):
        orig_imp_targets[raw].append(key)
        last = raw.split("/")[-1]
        orig_imp_targets[last].append(key)

for key in [
    "pages/projects/containers/Roles/Detail/routes.js",
    "pages/projects/containers/VolumeSnapshots/Detail/routes.js",
    "pages/projects/containers/Applications/CRDAppDetail/routes.js",
    "pages/projects/containers/Pods/Detail/routes.js",
    "pages/projects/containers/Pods/Containers/routes.js",
    "pages/projects/containers/Network/Policies/Detail/routes.js",
    "pages/projects/containers/Volumes/Detail/routes.js",
    "pages/projects/containers/Services/Detail/routes.js",
    "pages/workspaces/containers/Members/Detail/routes.js",
    "pages/workspaces/containers/Repos/Detail/routes.js",
    "pages/clusters/containers/ServiceComponents/Detail/routes.js",
    "pages/clusters/containers/Storage/StorageClasses/Detail/routes.js",
    "pages/projects/containers/Pods/Detail/Monitoring.js",
    "pages/apps/components/Modals/VersionSubmit/steps.js",
]:
    hits = orig_imp_targets.get("./routes", []) + orig_imp_targets.get("./routes.js", [])
    # importers of this key by relative suffix
    suffix = "/" + "/".join(key.split("/")[-2:])
    imps = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if raw.endswith("routes") or raw.endswith("routes.js") or raw.endswith("/Monitoring") or raw.endswith("steps"):
                resolved_last = raw.split("/")[-1]
                parent = norm_key(p.relative_to(SRC).as_posix())
                if key.endswith(resolved_last + ".js") or key.endswith("/" + resolved_last + ".js"):
                    # loose; filter by nearby path
                    if resolved_last in key and (raw.startswith(".") or raw in key):
                        imps.append((parent, raw))
    print(key, "loose_imps", imps[:8])


print("\n=== indexing for strict unique remaining ===", flush=True)
t_index = defaultdict(set)
str_index = defaultdict(set)
for name, text in unpacked.items():
    for k in t_pat.findall(text):
        t_index[k].add(name)
    for s in str_pat.findall(text):
        str_index[s].add(name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)
orig_files = []
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    key = norm_key(p.relative_to(SRC).as_posix())
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_files.append(key)
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)

print("\n=== STRICT unique remaining (orig 1-hit AND unpacked 1-hit unnamed, 0 named) ===")
seen = set()
for key in orig_files:
    if key in known_keys or skip_name(key):
        continue
    if not any(
        key.startswith(pref)
        for pref in (
            "pages/apps/",
            "pages/projects/",
            "pages/clusters/",
            "pages/workspaces/",
            "pages/console/",
            "components/Modals/",
            "components/Forms/",
            "components/HOCs/",
            "stores/",
            "utils/",
        )
    ):
        continue
    # find orig unique t
    # need orig file text - reread cheap enough? skip, use orig_t reverse
    # We'll iterate orig_t keys owned uniquely by this file
    owned_t = [k for k, files in orig_t.items() if files == [key] and k not in COMMON_T]
    owned_s = [
        s for s, files in orig_str.items()
        if files == [key] and s not in COMMON_T and len(s) >= 12
    ]
    pinned = False
    for k in owned_t:
        ufiles = t_index.get(k, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        named = [f for f in ufiles if f in known_mods]
        mids = [re.search(r"\d+", f).group() for f in unnamed]
        if len(ufiles) == 1 and not named:
            mod = next(iter(ufiles))
            if is_css(mod) or re.search(r"\d+", mod).group() in SKIP_MODS:
                continue
            if (key, mod) in seen:
                continue
            seen.add((key, mod))
            print(f'  STRICT_T "{key}": "{mod}",  # {k!r} unpacked={sorted(ufiles)}')
            pinned = True
            break
        elif len(unnamed) == 1 and not named:
            mod = unnamed[0]
            if is_css(mod) or re.search(r"\d+", mod).group() in SKIP_MODS:
                continue
            if (key, mod) in seen:
                continue
            seen.add((key, mod))
            print(f'  STRICT_T_UNNAMED "{key}": "{mod}",  # {k!r} unnamed={unnamed} all={sorted(ufiles)[:6]}')
            pinned = True
            break
    if pinned:
        continue
    for s in owned_s:
        ufiles = str_index.get(s, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        named = [f for f in ufiles if f in known_mods]
        if len(ufiles) == 1 and not named:
            mod = next(iter(ufiles))
            if is_css(mod) or re.search(r"\d+", mod).group() in SKIP_MODS:
                continue
            if (key, mod) in seen:
                continue
            seen.add((key, mod))
            print(f'  STRICT_S "{key}": "{mod}",  # {s!r}')
            break
        elif len(unnamed) == 1 and not named:
            mod = unnamed[0]
            if is_css(mod) or re.search(r"\d+", mod).group() in SKIP_MODS:
                continue
            if (key, mod) in seen:
                continue
            seen.add((key, mod))
            print(f'  STRICT_S_UNNAMED "{key}": "{mod}",  # {s!r} unnamed={unnamed}')
            break

print("strict_count", len(seen))
