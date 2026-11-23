#!/usr/bin/env python3
"""Verify uniquely-aliased 2-hit leftovers + unique-importer children."""
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
orig_texts = {}
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    key = norm_key(p.relative_to(SRC).as_posix())
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)


def show(mod, n=400):
    text = unpacked.get(mod, "")
    print(f"  MODULE {mod} named={mod_to_names.get(mod)} importers={sorted(set(importers[mod]))[:8]}")
    print("  t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    print("  head", text[:n].replace("\n", " | "))


def unique_alias(key, needle, kind="t"):
    print(f"\n=== UNIQUE-ALIAS {key} needle={needle!r} kind={kind} ===")
    op = orig_path_for(key)
    if not op:
        print("  ORIG_MISSING")
        return
    otext = op.read_text(encoding="utf-8", errors="ignore")
    ot = list(dict.fromkeys(t_pat.findall(otext)))
    print("  orig_t", ot[:14])
    ofiles = orig_t.get(needle, []) if kind == "t" else orig_str.get(needle, [])
    ufiles = t_index.get(needle, set()) if kind == "t" else str_index.get(needle, set())
    orig_set = sorted(set(ofiles))
    unnamed_orig = [k for k in orig_set if k not in pairs]
    named_orig = [k for k in orig_set if k in pairs]
    unnamed_mod = sorted(f for f in ufiles if f not in known_mods)
    named_mod = [(f, mod_to_names[f]) for f in ufiles if f in known_mods]
    print("  orig_set", orig_set, "unnamed_orig", unnamed_orig, "named_orig", named_orig)
    print("  unnamed_mod", unnamed_mod, "named_mod", named_mod)
    if unnamed_orig == [key] and len(unnamed_mod) == 1:
        mod = unnamed_mod[0]
        mt = list(dict.fromkeys(t_pat.findall(unpacked[mod])))
        print("  CANDIDATE", mod, "mod_t", mt[:14])
        print("  t_set_equal", set(ot) <= set(mt) or set(ot) == set(mt) - {"div", "span", "p"})
        show(mod, 280)
        return mod
    return None


PROBES = [
    ("pages/settings/components/Modals/OAuth.js", "OAUTH_DESC", "t"),
    ("pages/settings/components/Modals/OAuth.js", "PLEASE_INPUT_CLIENT_ID", "t"),
    ("pages/devops/components/Modals/DevOpsEdit.js", "DEVOPS_ADMIN_DESC", "t"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Card.js", "CREATE_DEPARTMENT", "t"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Card.js", "treeNode", "str"),
    ("pages/devops/containers/Pipelines/Detail/Layout/branch.js", "PIPELINE_RUN_START_SI", "t"),
    ("pages/devops/containers/Pipelines/Detail/PipeLine.js", "JENKINS_UNAVAILABLE", "t"),
    ("pages/devops/containers/Pipelines/Detail/PipeLineOld.js", "NO_PIPELINE_CONFIG_FILE_TIP", "t"),
    ("pages/settings/containers/Notification/Mail.js", "ADDED_SUCCESS_DESC", "t"),
    ("pages/settings/containers/Notification/Mail.js", "default-email-config", "str"),
    ("pages/settings/components/Cards/Banner.js", "NOTIFICATION_CHANNELS", "t"),
    ("pages/settings/components/Cards/Banner.js", "NOTIFICATION_CHANNELS_DESC", "t"),
    ("pages/settings/components/Cards/Banner.js", "DINGTALK", "t"),
    ("pages/fedprojects/containers/Overview/LimitRange.js", "DEFAULT_CONTAINER_QUOTAS_NOT_SET", "t"),
    ("pages/fedprojects/containers/LogCollection/LogCollection.js", "DISABLE_LOG_COLLECTION_TIP", "t"),
    ("pages/access/containers/layout.js", "getAccessNavs", "str"),
    ("pages/settings/containers/layout.js", "getPlatformSettingsNavs", "str"),
    ("pages/access/containers/Workspaces.js", "CREATE_KS_WORKSPACE", "t"),
    ("pages/access/containers/Accounts.js", "presetUsers", "str"),
    ("pages/console/containers/KubeCtl.js", "kubectl", "str"),
    ("pages/clusters/containers/KubeConfig.js", "kubeconfig", "str"),
    ("pages/projects/components/Modals/KubeConfig.js", "COPIED_SUCCESSFUL", "t"),
    ("components/HOCs/withDefaultSecrets.js", "refecthDefaultSecret", "str"),
    ("pages/devops/components/Cards/EmptyCard.js", "EMPTY", "t"),
    ("pages/devops/containers/CD/Components/StatusText.js", "StatusText", "str"),
    ("pages/devops/containers/CD/Components/Destination.js", "Destination", "str"),
    ("pages/devops/containers/Pipelines/Detail/Events.js", "Events", "str"),
    ("pages/fedprojects/containers/Overview/Help.js", "HOW_TO_SET_PROJECT_GATEWAY", "t"),
    ("pages/fedprojects/components/ServiceSetting.js", "UNKNOWN_SERVICE_TYPE", "t"),
    ("pages/fedprojects/containers/Gateway.js", "PROJECT_GATEWAY_DESC", "t"),
]

accepted = []
for key, needle, kind in PROBES:
    mod = unique_alias(key, needle, kind)
    if mod:
        accepted.append((key, mod, needle))

print("\n=== dump unique-importer children ===")
for key, mod in [
    ("pages/devops/containers/Pipelines/Detail/Parameters/Item.js", "module-5113.js"),
    ("pages/console/containers/Dashboard/Admin/PlatformStatus/Resource.js", "module-3633.js"),
    ("pages/devops/containers/Pipelines/Detail/PipelineLogDialog/logItem.js", "module-5099.js"),
    ("pages/access/routes/detail.js", "module-4346.js"),
    ("pages/devops/containers/Pipelines/Detail.js", "module-5082.js"),
    ("pages/settings/mail.js", "module-5136.js"),
    ("pages/settings/containers/Notification/Mail.js", "module-5156.js"),
    ("pages/clusters/kubeConfig.js", "module-3803.js"),
    ("components/Modals/KubeCtl.js", "module-1067.js"),
]:
    print(f"\n--- orig {key} vs {mod} ---")
    op = orig_path_for(key)
    if op:
        ot = op.read_text(encoding="utf-8", errors="ignore")
        print("ORIG t", list(dict.fromkeys(t_pat.findall(ot)))[:12])
        print("ORIG head", ot[ot.find("export"):ot.find("export") + 220].replace("\n", " | ") if "export" in ot else ot[:220].replace("\n", " | "))
    show(mod, 500)

print("\n=== kubeCtl wrapper needles in unpacked ===")
for needle in [
    'title="kubectl"',
    "title: \"kubectl\"",
    "title: 'kubectl'",
    'title={"kubectl"}',
    'title: "kubectl"',
    "window.opener = null",
    "window.opener=null",
    'window.open("", "_self"',
    "pageClose",
    "KubeCtlWindow",
]:
    hits = [fn for fn, text in unpacked.items() if needle in text]
    unnamed = [h for h in hits if h not in known_mods]
    print(f"  {needle!r} n={len(hits)} unnamed={unnamed[:6]} named={[mod_to_names.get(h) for h in hits if h in known_mods][:4]}")

print("\n=== ACCEPTED unique-alias ===")
seen = set()
for key, mod, needle in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # uniquely-aliased {needle}')
print("count", len(seen))
