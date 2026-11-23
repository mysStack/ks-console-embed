#!/usr/bin/env python3
"""Slice 57d: verify RouteRulesEdit 3331, identify 3326 CREATE_DOMAIN orig path,
3332 child, Banner kids, more unique alias-import 1:1 families, unique t 1-hit
in components/pages."""
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
t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{8,})['"]""")


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
        "core/": "core/", "components/": "components/", "utils/": "utils/",
        "stores/": "stores/", "hocs/": "hocs/", "actions/": "actions/",
        "configs/": "configs/", "pages/": "pages/",
        "apps/": "pages/apps/", "projects/": "pages/projects/",
        "clusters/": "pages/clusters/", "workspaces/": "pages/workspaces/",
        "access/": "pages/access/", "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/", "settings/": "pages/settings/",
        "console/": "pages/console/", "edgewize/": "pages/edgewize/",
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


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


unpacked = {}
importers = defaultdict(list)
t_index = defaultdict(set)
str_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)

orig_imp_targets = defaultdict(list)
orig_t = defaultdict(list)
orig_str = defaultdict(list)
orig_texts = {}
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            orig_imp_targets[resolved].append(key)


def dump_needles(label, needles, index, orig_index):
    print(f"\n== {label} ==")
    for n in needles:
        files = index.get(n, set())
        unnamed = [f for f in files if f not in known_mods]
        named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
        print(f"  UNPACK {n!r} unnamed={unnamed} named={named[:6]} orig={orig_index.get(n, [])[:8]} orig_count={len(orig_index.get(n, []))}")


print("=== RouteRulesEdit uniqueness ===")
print("orig_imp RouteRulesEdit", sorted(set(orig_imp_targets.get("pages/fedprojects/components/RouteRulesEdit.js", []))))
print("importers 3331", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers["module-3331.js"]))])
print("importers 3326", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers["module-3326.js"]))])
dump_needles("t", [
    "EDIT_ROUTING_RULES", "PREVIOUS", "INVALID_CREATE_DOMAIN_NAME",
    "CREATE_DOMAIN_NAME_DES", "CREATE_DOMAIN_NAME",
], t_index, orig_t)
dump_needles("lit", [
    "INVALID_CREATE_DOMAIN_NAME", "CREATE_DOMAIN_NAME_DES",
], str_index, orig_str)

print("\n=== orig files containing CREATE_DOMAIN / DOMAIN_NAME ===")
for key, text in orig_texts.items():
    if any(s in text for s in ("INVALID_CREATE_DOMAIN_NAME", "CREATE_DOMAIN_NAME_DES", "CREATE_DOMAIN_NAME")):
        print(" ", key, "named", pairs.get(key), "oimps", sorted(set(orig_imp_targets.get(key, [])))[:6])
        print("    t", list(dict.fromkeys(t_pat.findall(text)))[:12])

print("\n=== 3331 unique kids ===")
text = unpacked["module-3331.js"]
kids = list(dict.fromkeys(imp_unpacked.findall(text)))
print("kids", [(k, mod_to_names.get(k, ["?"]), sorted(set(importers[k]))) for k in kids if k not in known_mods and not is_css(k)])
if "module-3332.js" in unpacked:
    t = unpacked["module-3332.js"]
    print("3332 css", is_css("module-3332.js"))
    print("3332 importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers["module-3332.js"]))])
    print("3332 t", list(dict.fromkeys(t_pat.findall(t)))[:16])
    print("3332 kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(t)))[:12]])
    print("3332 head", t[:350].replace("\n", " | "))
    # orig ClusterDiffSettings?
    for key in sorted(orig_texts):
        if "RouteRules" in key or "ClusterDiff" in key and "fed" in key:
            oimps = sorted(set(orig_imp_targets.get(key, [])))
            print("  FEDLIKE", key, "named", pairs.get(key), "oimps", oimps[:6])

print("\n=== Banner named key ===")
for k, v in pairs.items():
    if "Banner" in k:
        print(" ", k, v)

banner_mod = pairs.get("components/Cards/Banner.js")
print("banner_mod", banner_mod)
if banner_mod:
    kids = list(dict.fromkeys(imp_unpacked.findall(unpacked[banner_mod])))
    print("banner kids", [(k, mod_to_names.get(k, ["?"]), sorted(set(importers[k]))[:6]) for k in kids])
    for child in ("components/Cards/Banner/Tip.js", "components/Cards/Banner/Navs.js", "components/Cards/Banner/Tabs.js"):
        print(" orig", child, "oimps", sorted(set(orig_imp_targets.get(child, []))), "named", pairs.get(child))
        op = orig_path_for(child)
        if op:
            ot = op.read_text(encoding="utf-8", errors="ignore")
            print("  t", list(dict.fromkeys(t_pat.findall(ot)))[:10])
            print("  unique_t orig", [x for x in dict.fromkeys(t_pat.findall(ot)) if orig_t[x] == [child]])

print("\n=== unique t 1-hit orig components/pages unnamed vs unpacked unnamed 1 ===")
shown = 0
for key in sorted(orig_texts):
    if key in known_keys or not orig_path_for(key):
        continue
    if not (key.startswith("components/") or key.startswith("pages/")):
        continue
    tkeys = [k for k in dict.fromkeys(t_pat.findall(orig_texts[key])) if orig_t[k] == [key]]
    if not tkeys:
        continue
    hits = []
    for k in tkeys:
        files = t_index.get(k, set())
        unnamed = [f for f in files if f not in known_mods]
        if len(unnamed) == 1:
            hits.append((k, unnamed[0], [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[unnamed[0]]))]))
        elif len(unnamed) == 0 and files:
            pass
        elif len(unnamed) > 1:
            hits.append((k, f"MULTI:{unnamed}", None))
    uniq_mods = sorted(set(h[1] for h in hits if isinstance(h[1], str) and h[1].startswith("module-")))
    if uniq_mods:
        oimps = sorted(set(orig_imp_targets.get(key, [])))
        named_parents = [p for p in oimps if p in known_keys]
        print(f"  T1 {key} named_parents={named_parents[:3]} oimps={oimps[:4]} mods={uniq_mods} needles={[h[0] for h in hits[:4]]}")
        shown += 1
        if shown >= 40:
            break
print("t1 shown", shown)

print("\n=== orig unique import 1:1 with unique unpacked kid (alias, components/pages) ===")
for key in sorted(orig_texts):
    if key in known_keys or not orig_path_for(key):
        continue
    if not (key.startswith("components/") or key.startswith("pages/") or key.startswith("actions/")):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) != 1:
        continue
    parent = oimps[0]
    if parent not in known_keys:
        continue
    parent_mod = pairs[parent]
    unique_kids = []
    for m in dict.fromkeys(imp_unpacked.findall(unpacked[parent_mod])):
        if m in known_mods or is_css(m):
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    if len(unique_kids) == 1:
        print(f"  1_1 {key} parent={parent}->{parent_mod} kid={unique_kids[0]}")
        dump_needles(f"child t {key}", list(dict.fromkeys(t_pat.findall(orig_texts[key])))[:8], t_index, orig_t)
    elif unique_kids:
        print(f"  FAM {key} parent={parent}->{parent_mod} kids={unique_kids}")
