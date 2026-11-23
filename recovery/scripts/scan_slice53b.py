#!/usr/bin/env python3
"""Slice 53b: among remaining Dashboard unique kids, match orig t()/methods
even when those keys are not globally unique in orig. Do not force 1:1 of
leftover extra dist widgets onto orig ClusterNodes/ResourcesUsage/ServiceComponents.
Reject WHIZARD store 4142. Search leftover orig needles in unpacked.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(pairs.values())
known_keys = set(pairs)
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""kapis/[^'"]{6,}""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
    r"""|(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function)"""
)
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT", "METADATA", "EVENT_PL", "MONITORING",
    "RESOURCE_STATUS", "PODS", "OVERVIEW", "POD_PL", "KEY", "VALUE",
    "LOGGING", "MEMORY", "POD", "ALL", "RUNNING", "PENDING", "COMPLETED",
    "UNKNOWN", "NODES", "span", "div", "p", "rootStore",
}
WEAK = {"if", "store", "fetchData", "data", "render", "className", "onClick",
        "state", "super", "switch", "toggle", "close", "handleClick", "title",
        "description", "name", "size", "n", "e"}

REMAINING_KIDS = [
    "module-3680.js", "module-3687.js", "module-3689.js",
    "module-3693.js", "module-3698.js", "module-3701.js",
]
REMAINING_ORIG = [
    "pages/clusters/containers/Overview/Dashboard/ClusterInfo.js",
    "pages/clusters/containers/Overview/Dashboard/ClusterNodes.js",
    "pages/clusters/containers/Overview/Dashboard/ResourcesUsage.js",
    "pages/clusters/containers/Overview/Dashboard/ServiceComponents.js",
]
NEEDLES = [
    "getRadarOptions", "getResourceOptions", "getSpecificData",
    "SYSTEM_COMPONENT_PL", "COMPONENT_ICON_MAP", "BASIC_INFORMATION",
    "CLUSTER_VISIBILITY_SCAP", "KUBERNETES_VERSION", "KUBESPHERE_VERSION",
    "VISIBILITY_PUBLIC", "VISIBILITY_PARTIAL", "RESOURCE_USAGE",
    "cluster_memory_usage_wo_cache", "cluster_cpu_usage",
    "RadarChart", "PolarGrid", "PolarAngleAxis",
    "NodesTop5", "NodesStatus", "NODE_PL",
    "servicemesh", "kubesphere", "APPLICATION_CLUSTER_QUOTA_STATISTICS",
    "RESOURCE_USAGE_RANKING", "NODE_RESOURCE_USAGE",
    "watchLogs", "getBarLength", "CLUSTER_CREATION_PROGRESS",
    "autoscaling.kubeshpere.io/name",
]


def extract_methods(text):
    names = []
    for a, b, c in method_pat.findall(text):
        name = a or b or c
        if name:
            names.append(name)
    return list(dict.fromkeys(names))


print("=== index unpacked ===", flush=True)
texts = {}
importers = defaultdict(list)
t_index = defaultdict(set)
str_index = defaultdict(set)
method_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for name in extract_methods(text):
        method_index[name].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

print("=== orig remaining Dashboard widgets ===")
orig_fps = {}
for key in REMAINING_ORIG:
    stem = key[:-3]
    op = None
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            op = p
            break
    text = op.read_text(encoding="utf-8", errors="ignore") if op else ""
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    methods = extract_methods(text)
    lits = list(dict.fromkeys(str_pat.findall(text)))
    orig_fps[key] = {"t": tkeys, "methods": methods, "lits": lits, "text": text}
    print(f"ORIG {key}")
    print(f"  t={tkeys}")
    print(f"  methods={methods}")
    print(f"  unique-looking lits={[s for s in lits if len(s) >= 10][:12]}")

print("\n=== remaining Dashboard unique kids t/methods ===")
kid_fps = {}
for mod in REMAINING_KIDS:
    text = texts[mod]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    methods = extract_methods(text)
    lits = list(dict.fromkeys(str_pat.findall(text)))
    kid_fps[mod] = {"t": tkeys, "methods": methods, "lits": lits}
    print(f"KID {mod} importers={sorted(set(importers[mod]))}")
    print(f"  t={tkeys}")
    print(f"  methods={methods}")

print("\n=== sibling t/method match (orig t in exactly one remaining kid) ===")
pins = []
for key, fp in orig_fps.items():
    hits = []
    for needle in fp["t"]:
        if needle in COMMON_T or needle in WEAK:
            continue
        sib = [m for m in REMAINING_KIDS if needle in kid_fps[m]["t"] or needle in kid_fps[m]["lits"]]
        print(f"  t {key} {needle!r} remaining_kids={sib}")
        if len(sib) == 1:
            hits.append((sib[0], "t", needle))
    for needle in fp["methods"]:
        if needle in WEAK:
            continue
        sib = [m for m in REMAINING_KIDS if needle in kid_fps[m]["methods"] or needle in kid_fps[m]["lits"]]
        print(f"  meth {key} {needle!r} remaining_kids={sib}")
        if len(sib) == 1:
            hits.append((sib[0], "meth", needle))
    for needle in fp["lits"]:
        if len(needle) < 12 or needle.startswith("./"):
            continue
        sib = [m for m in REMAINING_KIDS if needle in kid_fps[m]["lits"] or needle in kid_fps[m]["t"]]
        if len(sib) == 1:
            print(f"  lit {key} {needle!r} remaining_kids={sib}")
            hits.append((sib[0], "lit", needle))
    mods = sorted(set(h[0] for h in hits))
    print(f"  RESULT {key} mods={mods} hits={hits[:8]}")
    if len(mods) == 1:
        pins.append((key, mods[0], hits[0]))

print("\n=== candidate sibling pins ===")
for item in pins:
    print("  PIN", item)

print("\n=== global needle hits ===")
for needle in NEEDLES:
    files = []
    for name, text in texts.items():
        if needle in text:
            files.append(name)
    unn = [f for f in files if f not in known_mods]
    print(f"{needle!r}: unnamed={unn[:12]} ({len(unn)}) named={[f for f in files if f in known_mods][:4]}")
    for f in unn[:6]:
        print(f"    {f} importers={[(i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[f]))[:6]]}")

print("\n=== leftover unique orig methods 1-hit excluding skipped stores ===")
SKIP_MODS = {"891", "989", "717", "4142", "4107", "4080", "4103"}


def mid(name):
    m = re.search(r"\d+", name)
    return m.group() if m else ""


orig_method = defaultdict(list)
orig_files = {}
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
    orig_files[key] = text
    for name in extract_methods(text):
        orig_method[name].append(key)

for key, text in sorted(orig_files.items()):
    if key in known_keys:
        continue
    unique_m = [n for n in extract_methods(text) if orig_method[n] == [key] and n not in WEAK]
    if not unique_m:
        continue
    hits = []
    for n in unique_m:
        files = method_index.get(n, set())
        unn = [f for f in files if f not in known_mods and mid(f) not in SKIP_MODS]
        if len(unn) == 1:
            hits.append((n, unn[0], len(files)))
    mods = sorted(set(h[1] for h in hits))
    if hits:
        print(f"1HIT {key} hits={hits[:6]} mods={mods}")
