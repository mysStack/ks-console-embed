#!/usr/bin/env python3
"""Verify remaining Detail/routes unique-importer pins + unique t/str leftovers."""
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
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")


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


def dump(mod):
    text = unpacked.get(mod, "")
    print("  named", mod_to_names.get(mod, []))
    print("  t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    print("  importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:6])
    i = text.find("export default")
    print("  head", repr(text[i:i + 160].replace("\n", " ")) if i >= 0 else "no export")


ROUTE_PINS = [
    ("pages/projects/containers/Deployments/Detail/routes.js", "module-3834.js", "pages/projects/deployments/Detail.js"),
    ("pages/projects/containers/StatefulSets/Detail/routes.js", "module-3863.js", "pages/projects/statefulsets/Detail.js"),
    ("pages/projects/containers/DaemonSets/Detail/routes.js", "module-3864.js", "pages/projects/daemonsets/Detail.js"),
    ("pages/projects/containers/Jobs/Detail/routes.js", "module-3867.js", "pages/projects/jobs/Detail.js"),
    ("pages/projects/containers/CronJobs/Detail/routes.js", "module-3871.js", "pages/projects/cronjobs/Detail.js"),
    ("pages/projects/containers/ConfigMaps/Detail/routes.js", "module-3889.js", "pages/projects/configmaps/Detail.js"),
    ("pages/projects/containers/Secrets/Detail/routes.js", "module-3886.js", "pages/projects/secrets/Detail.js"),
    ("pages/projects/containers/ServiceAccounts/Detail/routes.js", "module-3893.js", "pages/projects/serviceaccounts/Detail.js"),
    ("pages/projects/containers/Ingresses/Detail/routes.js", "module-3882.js", "pages/projects/ingresses/Detail.js"),
]

accepted = []
print("\n=== ROUTE unique importer ===")
for key, mod, parent_key in ROUTE_PINS:
    print(f"\n=== {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    parent_mod = pairs.get(parent_key)
    print("  parent_mod", parent_mod, "expected", pairs.get(parent_key) == unpacked and True)
    dump(mod)
    up = sorted(set(importers[mod]))
    unique_named = up == [parent_mod] and parent_mod in known_mods
    text = unpacked.get(mod, "")
    looks_routes = "function(path)" in text.replace(" ", "") or "function(path)" in text or "function (path)" in text or "export default function(path)" in text
    # orig unique importer of this routes file
    orig_imps = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        rel = p.relative_to(SRC).as_posix()
        ptext = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(ptext):
            if raw in {"./routes", "./routes.js"}:
                parent_rel = rel
                # only count if this file is the Detail next to routes
                if Path(rel).parent.as_posix().endswith(Path(key).parent.as_posix().split("src/")[-1] if False else ""):
                    pass
                if Path(p).parent == (orig_path_for(key).parent if op else None) or (
                    op and Path(p).parent == op.parent.parent and Path(p).stem in {"index", "Detail"}
                ):
                    orig_imps.append(rel)
                elif op and Path(p).resolve().parent == op.resolve().parent.parent and raw.startswith("./routes"):
                    orig_imps.append(rel)
    # simpler: Detail/index.jsx importing ./routes
    detail_index = None
    if op:
        cand = op.parent / "index.jsx"
        if not cand.exists():
            cand = op.parent / "index.js"
        if cand.exists():
            detail_index = cand
            dtext = cand.read_text(encoding="utf-8", errors="ignore")
            has_routes = any(raw in {"./routes", "./routes.js"} for raw in imp_orig.findall(dtext))
        else:
            has_routes = False
    else:
        has_routes = False
    print("  unique_named_importer", unique_named, "looks_routes", looks_routes, "detail_index", detail_index, "has_./routes", has_routes, "mod_in_known", mod in known_mods)
    ok = unique_named and looks_routes and has_routes and op is not None and mod not in known_mods
    print("  VERDICT", "NEW" if ok else "REJECT")
    if ok:
        accepted.append((key, mod, "imp routes"))

ALIAS_DETAIL = [
    ("pages/projects/containers/Deployments/Detail.js", "module-1216.js"),
    ("pages/projects/containers/StatefulSets/Detail.js", "module-1402.js"),
    ("pages/projects/containers/DaemonSets/Detail.js", "module-1221.js"),
    ("pages/projects/containers/Jobs/Detail.js", "module-1222.js"),
    ("pages/projects/containers/CronJobs/Detail.js", "module-1224.js"),
    ("pages/projects/containers/ConfigMaps/Detail.js", "module-1405.js"),
    ("pages/projects/containers/Secrets/Detail.js", "module-1404.js"),
    ("pages/projects/containers/Ingresses/Detail.js", "module-1227.js"),
]
print("\n=== Detail.js path aliases ===")
for key, mod in ALIAS_DETAIL:
    op = orig_path_for(key)
    existing = mod_to_names.get(mod, [])
    print(f"\n=== {key} -> {mod} orig={bool(op)} existing={existing} ===")
    ok = bool(op) and mod in known_mods and existing
    print("  VERDICT", "ALIAS" if ok else "REJECT")
    if ok:
        accepted.append((key, mod, "alias containers Detail"))

print("\n=== unique t/str leftovers ===")
for key, mod, needle, kind in [
    ("pages/projects/containers/CronJobs/Detail/JobRecords.js", "module-3872.js", "JOB", "t"),
    ("pages/projects/containers/Pods/Detail/Monitoring.js", "module-1829.js", "OUTBOUND", "str"),
    ("pages/projects/containers/Pods/Detail/Monitoring.js", "module-1829.js", "INBOUND", "str"),
]:
    print(f"\n=== {key} -> {mod} [{kind} {needle!r}] ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op))
    if kind == "t":
        ofiles = orig_t.get(needle, [])
        ufiles = t_index.get(needle, set())
    else:
        ofiles = orig_str.get(needle, [])
        ufiles = str_index.get(needle, set())
    unnamed = [f for f in ufiles if f not in known_mods]
    named = [(f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods]
    orig_set = sorted(set(ofiles))
    print("  orig_hits", orig_set)
    print("  unpacked", sorted(ufiles), "unnamed", unnamed, "named", named)
    dump(mod)
    in_mod = needle in unpacked.get(mod, "")
    ok_orig = orig_set == [key]
    named_other = [f for f in ufiles if f in known_mods and f != mod]
    unique_unp = ufiles == {mod} or (unnamed == [mod] and not named_other)
    new_ok = ok_orig and unique_unp and mod not in known_mods and in_mod and op is not None
    print("  VERDICT", "NEW" if new_ok else "REJECT", "ok_orig", ok_orig, "unique_unp", unique_unp)
    if new_ok:
        accepted.append((key, mod, f"{kind} {needle}"))

print("\n=== extra Jobs unique kid 3866 ===")
dump("module-3866.js")
print("\n=== extra SA unique kid 3892 ===")
dump("module-3892.js")

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, reason in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {reason}')
print("accepted_count", len(seen))
