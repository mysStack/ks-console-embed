#!/usr/bin/env python3
"""Compare original src vs KNOWN keys; report unique 1-hit pin candidates."""
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

HIGH_FAMILIES = (
    "LogSearch", "EventSearch", "AuditingSearch", "Toolbox", "kubeConfig",
    "KubeConfig", "KubeCtl", "kubectl", "access", "Access", "workspaces",
    "settings", "devops", "FedProject", "federated", "edge", "object.mapper",
    "object.mapper.js",
)

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_name = {v: k for k, v in pairs.items()}

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
res_pat = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
ident_pat = re.compile(r"\b([A-Z][A-Za-z0-9]{10,}|[a-z][A-Za-z0-9]{14,})\b")

SCAN_ROOTS = [
    SRC / "components",
    SRC / "pages",
    SRC / "stores",
    SRC / "utils",
    SRC / "hocs",
    SRC / "actions",
    SRC / "configs",
]


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

print("=== orig vs KNOWN ===")
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))

by_prefix = defaultdict(int)
for _rel, key, _p in missing:
    by_prefix[key.split("/")[0]] += 1
print("missing_by_top", dict(sorted(by_prefix.items())))

print("\n=== missing by family (substring) ===")
for fam in (
    "LogSearch", "EventSearch", "AuditingSearch", "Toolbox", "KubeConfig",
    "KubeCtl", "kubeConfig", "access/", "workspaces", "settings", "devops",
    "FedProject", "federated", "edgewize", "edge-", "object.mapper",
    "ColumeInput", "CustomToolTip", "PromQLInput", "utils/", "stores/",
    "HOCs", "hocs",
):
    hits = [key for _rel, key, _p in missing if fam.lower() in key.lower()]
    if hits:
        print(f"  {fam}: {len(hits)}")
        for k in hits[:40]:
            print("   ", k)

# Load unpacked once
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
    for k in api_pat.findall(text) + kapis_pat.findall(text):
        api_index[k].add(path.name)
    for k in str_pat.findall(text):
        str_index[k].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

# orig uniqueness of t()
orig_t = defaultdict(list)
orig_imp_targets = defaultdict(list)  # resolved child key -> importer orig keys
orig_local_imps = {}  # orig key -> list of resolved child keys

def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    # normalize ..
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
    # directory index
    for ext in ("/index.js", "/index.jsx"):
        p = SRC / (rel + ext)
        if p.exists():
            return norm_key(p.relative_to(SRC).as_posix())
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


orig_texts = {}
orig_api = defaultdict(list)
orig_str = defaultdict(list)
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

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
}


def unnamed_only(files):
    return [f for f in files if mid_of(f) not in known_mods]


def skip_mod(name):
    return mid_of(name) in SKIP_MODS


def skip_name(key):
    return any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS)


print("\n=== PIN CANDIDATES (unique t / resource / api / 1-hit str) ===")
pins = []  # (key, module, reason)


def consider(key, files, reason, extra=""):
    files = sorted(set(files), key=lambda s: int(mid_of(s)))
    un = [f for f in files if not skip_mod(f)]
    un_unnamed = unnamed_only(un)
    if len(un_unnamed) == 1:
        mod = un_unnamed[0]
        if skip_name(key):
            print(f"  SKIP_NAME {key} -> {mod} [{reason}] {extra}")
            return
        pins.append((key, mod, f"{reason} {extra}".strip()))
        print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    elif len(un) == 1 and unnamed_only(un) == []:
        pass  # already named unique hit
    elif 2 <= len(un_unnamed) <= 4:
        print(f"  MULTI {len(un_unnamed)} {key} -> {un_unnamed} [{reason}] {extra}")


for rel, key, p in missing:
    text = orig_texts[key]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    for k in unique_t:
        consider(key, t_index.get(k, []), "unique_t", repr(k))
        if any(x[0] == key for x in pins):
            break
    if any(x[0] == key for x in pins):
        continue
    for k in dict.fromkeys(res_pat.findall(text)):
        consider(key, res_index.get(k, []), "resource/module", repr(k))
        if any(x[0] == key for x in pins):
            break
    if any(x[0] == key for x in pins):
        continue
    unique_apis = [
        a for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        consider(key, api_index.get(a, []), "unique_api", a[:80])
        if any(x[0] == key for x in pins):
            break
    if any(x[0] == key for x in pins):
        continue
    for s in dict.fromkeys(str_pat.findall(text)):
        if s in COMMON_T or len(s) < 10:
            continue
        files = str_index.get(s, set())
        if len(files) == 1 and orig_str[s] == [key]:
            consider(key, files, "unique_str", s)
            if any(x[0] == key for x in pins):
                break

print("\n=== UNIQUE IMPORTER of uniquely named parent ===")
# unnamed orig child imported by exactly one orig parent that is already named
for rel, key, p in missing:
    if skip_name(key):
        continue
    imps = orig_imp_targets.get(key, [])
    named_imps = [i for i in imps if i in known_keys]
    if len(named_imps) != 1 or len(set(imps)) != 1:
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
    # unique importer in unpacked: child imported only by this parent
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

print("\n=== HIGH-VALUE remaining unnamed (no pin) ===")
pinned_keys = {k for k, _m, _r in pins}
for rel, key, p in missing:
    if key in pinned_keys:
        continue
    if any(fam.lower() in key.lower() for fam in HIGH_FAMILIES) or key.startswith(
        ("utils/", "stores/", "components/HOCs/", "hocs/")
    ):
        tkeys = t_pat.findall(p.read_text(encoding="utf-8", errors="ignore"))
        print(f"  GAP {key} t={list(dict.fromkeys(tkeys))[:8]}")

print("\n=== DEDUPED PIN LIST ===")
seen = set()
for key, mod, reason in pins:
    pair = (key, mod)
    if pair in seen:
        continue
    seen.add(pair)
    print(f'    "{key}": "{mod}",  # {reason}')

print("pin_count", len(seen))

print("\n=== missing utils ===")
for rel, key, p in missing:
    if key.startswith("utils/"):
        print(" ", key)

print("\n=== missing stores ===")
for rel, key, p in missing:
    if key.startswith("stores/"):
        print(" ", key)
