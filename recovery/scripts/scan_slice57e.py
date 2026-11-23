#!/usr/bin/env python3
"""Verify remaining 1:1 leftover: CustomMonitoring store 2853, RouteRulesEdit
3331 methods vs orig, Banner Tip/Navs/Tabs vs Base/Banner 2331, unique method
1-hit without skip (print only components/pages with orig unique import)."""
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
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
    r"""|(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function)"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")


def extract_methods(text):
    names = []
    for a, b, c in method_pat.findall(text):
        name = a or b or c
        if name and not name.startswith("_"):
            names.append(name)
    names.extend(render_pat.findall(text))
    return list(dict.fromkeys(names))


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


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


unpacked = {}
importers = defaultdict(list)
method_index = defaultdict(set)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for n in extract_methods(text):
        method_index[n].add(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)

orig_imp_targets = defaultdict(list)
orig_method = defaultdict(list)
orig_t = defaultdict(list)
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
    for n in extract_methods(text):
        orig_method[n].append(key)
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            orig_imp_targets[resolved].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"\n--- {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} size={len(text)} ---")
    print("importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:12],
          "count", len(set(importers.get(mod, []))))
    print("methods", extract_methods(text)[:24])
    print("t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    print("kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:16]])
    print("head", text[:500].replace("\n", " | "))


print("=== 3331 vs orig RouteRulesEdit methods ===")
dump_mod("module-3331.js")
ot = orig_texts["pages/fedprojects/components/RouteRulesEdit.js"]
print("orig methods", extract_methods(ot))
print("orig t", list(dict.fromkeys(t_pat.findall(ot))))
print("orig unique methods", [n for n in extract_methods(ot) if orig_method[n] == ["pages/fedprojects/components/RouteRulesEdit.js"]])
for n in extract_methods(ot):
    files = method_index.get(n, set())
    unnamed = [f for f in files if f not in known_mods]
    if unnamed:
        print(f"  method {n} unnamed={unnamed[:6]} named={[mod_to_names.get(f) for f in files if f in known_mods][:4]}")
print("getFormTemplate unpacked", [f for f in method_index.get("getFormTemplate", set()) if f not in known_mods][:8])
print("registerSubRoute unpacked", [f for f in method_index.get("registerSubRoute", set()) if f not in known_mods][:8])
print("resetSubRoute unpacked", [f for f in method_index.get("resetSubRoute", set()) if f not in known_mods][:8])
# string presence
for needle in ("getFormTemplate", "registerSubRoute", "resetSubRoute", "formRef", "subRoute"):
    files = [f for f, t in unpacked.items() if needle in t]
    unnamed = [f for f in files if f not in known_mods]
    print(f"  lit {needle} unnamed={unnamed[:8]} named={[mod_to_names.get(f) for f in files if f in known_mods][:4]}")

print("\n=== 2853 CustomMonitoring store ===")
dump_mod("module-2853.js")
dump_mod("module-1632.js")
ot = orig_texts.get("components/Modals/CustomMonitoring/store.js", "")
print("orig store methods", extract_methods(ot)[:20])
print("orig store t", list(dict.fromkeys(t_pat.findall(ot)))[:12])
print("orig store head", ot[:400].replace("\n", " | "))
print("orig_imp store", sorted(set(orig_imp_targets.get("components/Modals/CustomMonitoring/store.js", []))))

print("\n=== Base/Banner 2331 kids vs Cards/Banner Tip/Navs/Tabs ===")
dump_mod("module-2331.js")
print("orig_imp Cards/Banner", sorted(set(orig_imp_targets.get("components/Cards/Banner.js", [])))[:8],
      "count", len(orig_imp_targets.get("components/Cards/Banner.js", [])))
print("orig_imp Base/Banner", sorted(set(orig_imp_targets.get("components/Base/Banner.js", [])))[:8],
      "count", len(orig_imp_targets.get("components/Base/Banner.js", [])))
for child in ("components/Cards/Banner/Tip.js", "components/Cards/Banner/Navs.js", "components/Cards/Banner/Tabs.js",
              "components/Cards/Banner.js"):
    print(f"  {child} named={pairs.get(child)} oimps={sorted(set(orig_imp_targets.get(child, [])))} exists={bool(orig_path_for(child))}")
    if orig_path_for(child):
        text = orig_texts[child]
        print("    methods", extract_methods(text)[:12], "t", list(dict.fromkeys(t_pat.findall(text)))[:10])

print("\n=== unique method 1-hit orig unique-import parent named, not already known ===")
count = 0
for key in sorted(orig_texts):
    if key in known_keys or not orig_path_for(key):
        continue
    if not (key.startswith("components/") or key.startswith("pages/")):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) != 1 or oimps[0] not in known_keys:
        continue
    unique_m = [n for n in extract_methods(orig_texts[key]) if orig_method[n] == [key] and n not in {"if", "render", "constructor"}]
    hits = []
    for n in unique_m:
        files = method_index.get(n, set())
        unnamed = [f for f in files if f not in known_mods]
        if len(unnamed) == 1:
            hits.append((n, unnamed[0]))
    mods = sorted(set(h[1] for h in hits))
    if len(mods) == 1:
        print(f"  M1 {key} parent={oimps[0]}->{pairs[oimps[0]]} mod={mods[0]} methods={[h[0] for h in hits[:6]]} imps={[(i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[mods[0]]))][:6]}")
        count += 1
print("m1 count", count)
