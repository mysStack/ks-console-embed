#!/usr/bin/env python3
"""Extra parent-alias checks for already-named short paths."""
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

imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")


def mid_of(mod):
    return re.search(r"\d+", mod).group()


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


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


print("indexing", flush=True)
unpacked = {}
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_local = defaultdict(list)
orig_imp_targets = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"} or ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    pkey = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local[pkey].append(resolved)
            orig_imp_targets[resolved].append((pkey, raw))


def unique_kids(parent_mod):
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked.get(parent_mod, "")))):
        if m in known_mods or is_css(m):
            continue
        mid = mid_of(m)
        if mid in {"3225", "3567", "3511", "3513", "3251"} or int(mid) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


CANDS = [
    ("pages/clusters/containers/Monitor/Resource.js", "pages/clusters/monitor-resource.js",
     "pages/clusters/containers/Monitor/Resource/routes.js", "module-3784.js"),
    ("pages/clusters/containers/Monitor/Cluster.js", "pages/clusters/monitor-cluster.js",
     "pages/clusters/containers/Monitor/Cluster/routes.js", "module-3752.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots.js", "pages/clusters/volume-snapshots.js",
     "pages/clusters/containers/Storage/VolumeSnapshots/routes.js", "module-3713.js"),
    ("pages/clusters/containers/Storage/Volumes.js", "pages/clusters/volumes.js",
     "pages/clusters/containers/Storage/Volumes/routes.js", "module-3720.js"),
    ("pages/fedprojects/containers/Volumes/Detail.js", "pages/fedprojects/volumes/Detail.js",
     "pages/fedprojects/containers/Volumes/Detail/routes.js", "module-5024.js"),
    ("pages/projects/containers/Routes/Detail.js", "pages/projects/ingresses/Detail.js",
     "pages/projects/containers/Routes/Detail/routes.js", None),
    ("pages/fedprojects/containers/Applications/Detail.js", "pages/fedprojects/applications/Detail.js",
     "pages/fedprojects/containers/Applications/Detail/routes.js", "module-4977.js"),
]

accepted = []
for orig_key, named_key, child_key, child_mod in CANDS:
    parent_mod = pairs.get(named_key)
    print(f"\n=== {orig_key} named={named_key}->{parent_mod} orig_known={orig_key in known_keys} ===")
    op = orig_path_for(orig_key)
    print("  orig", op)
    if not parent_mod or not op:
        print("  REJECT missing")
        continue
    locals_ = [c for c in orig_local.get(orig_key, []) if not str(c).endswith((".scss", ".css"))]
    unnamed_local = [c for c in locals_ if c not in known_keys]
    kids = unique_kids(parent_mod)
    oimps = orig_imp_targets.get(child_key, [])
    unique_orig = sorted(set(k for k, _r in oimps)) == [orig_key]
    print("  locals", locals_)
    print("  unnamed_local", unnamed_local)
    print("  unique_kids", kids, [(k, sorted(set(importers[k]))) for k in kids])
    print("  child_oimps", oimps, "unique_orig", unique_orig)
    print("  parent_kids_named", [(k, mod_to_names.get(k, [])) for k in list(dict.fromkeys(imp_unpacked.findall(unpacked.get(parent_mod, ""))))[:12]])
    if orig_key in known_keys:
        print("  SKIP already")
        continue
    if child_mod:
        ok = unique_orig and unnamed_local == [child_key] and (
            kids == [child_mod] or (child_mod in known_mods and unnamed_local == [child_key] and unique_orig)
        )
        # parent alias: orig uniquely imports already-named or uniquely-unpacked child, parent uniquely named
        if child_mod in known_mods:
            up = sorted(set(importers[child_mod]))
            ok = unique_orig and unnamed_local == [child_key] and up == [parent_mod]
        else:
            ok = unique_orig and unnamed_local == [child_key] and kids == [child_mod]
        print("  VERDICT", "ALIAS" if ok else "REJECT", "child_known", child_mod in known_mods)
        if ok:
            accepted.append((orig_key, parent_mod, "alias_parent:"+named_key))
            if child_mod not in known_mods:
                accepted.append((child_key, child_mod, "imp:"+named_key))
    else:
        # discover unique kid matching unique orig child
        if unique_orig and unnamed_local == [child_key] and len(kids) == 1:
            print("  VERDICT ALIAS+CHILD", kids[0])
            accepted.append((orig_key, parent_mod, "alias_parent:"+named_key))
            accepted.append((child_key, kids[0], "imp:"+named_key))
        else:
            print("  VERDICT REJECT discover", "kids", kids)

print("\n=== extra accepted ===")
for k, m, r in accepted:
    print(f'    "{k}": "{m}",  # {r}')
