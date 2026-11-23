#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_name = {v: k for k, v in pairs.items()}
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


importers = defaultdict(list)
texts = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)


def dump_mod(n):
    name = f"module-{n}.js"
    text = texts[name]
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        mid = re.search(r"\d+", m).group()
        if int(mid) < 70:
            continue
        tag = "css" if is_css(m) else ("named:" + mod_to_name[m] if mid in known_mods else "UNNAMED")
        kids.append((m, tag))
    imps = [(i, mod_to_name.get(i, "?")) for i in sorted(set(importers[name]))]
    print(f"\n{name} {mod_to_name.get(name,'?')}")
    print("  importers", imps)
    print("  kids>=70", kids)
    print("  t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    print("  head", " | ".join(text.splitlines()[:3])[:180])


for n in [3629, 3630, 3486, 3496, 4060, 4070, 4073, 4071, 2703, 3349, 1613, 1597, 1914, 1131, 4409, 5109, 5097, 1849]:
    dump_mod(n)

print("\n==== orig unique importers of Admin ====")
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    for raw in imp_orig.findall(text):
        if "Admin" in raw and "Dashboard" in str(p):
            print(p.relative_to(SRC).as_posix(), raw)
        if raw.endswith("/Admin") or raw == "./Admin":
            print("ADMIN_IMP", p.relative_to(SRC).as_posix(), raw)

print("\n==== orig GlobalNav / Nav / Unbind / ServiceSetting / ServiceMonitor ====")
for key in [
    "components/Layout/GlobalNav/index.jsx",
    "components/Layout/Nav/index.jsx",
    "pages/clusters/components/Modals/UnbindCluster/index.jsx",
    "pages/projects/components/Modals/ServiceSetting/index.jsx",
    "pages/projects/components/Modals/ServiceMonitor/index.jsx",
    "pages/console/containers/Dashboard/Admin/index.jsx",
]:
    p = SRC / key
    print(key, "exists" if p.exists() else "MISS", end=" ")
    if p.exists():
        print([r for r in imp_orig.findall(p.read_text(encoding="utf-8", errors="ignore")) if r.startswith(".")])
    else:
        print()
