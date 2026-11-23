#!/usr/bin/env python3
"""Slice 53c: kids of candidate new parents; EditForms 1680/1682; constants 3707;
ClusterInfo CSS 3688; vendor fingerprints leftover in live graph."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
ENTRY = UNPACKED / "entry.js"

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)
# pending pins for child scan
pending = {
    "module-3691.js": "KubernetesStatus",
    "module-3687.js": "ClusterInfo",
    "module-3708.js": "Logs",
    "module-3706.js": "Progress",
}
known_mods |= set(pending)

imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")

print("=== index ===", flush=True)
texts = {}
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)


def is_css(mod):
    text = texts.get(mod, "")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


print("\n=== kids of pending pins ===")
for mod, name in pending.items():
    kids = list(dict.fromkeys(imp_unpacked.findall(texts[mod])))
    print(f"{name} {mod}")
    for k in kids:
        mid = re.search(r"\d+", k).group()
        if int(mid) < 70 or k in known_mods:
            continue
        if is_css(k):
            print(f"  CSS {k}")
            continue
        imps = sorted(set(importers[k]))
        tkeys = list(dict.fromkeys(t_pat.findall(texts[k])))[:8]
        unique = imps == [mod]
        print(f"  kid {k} unique={unique} css={is_css(k)} importers={[(i, mod_to_names.get(i, pending.get(i, ['?']))) for i in imps[:8]]} t={tkeys} head={texts[k][:120].replace(chr(10),' | ')}")

print("\n=== constants orig importers ===")
const_key = "pages/clusters/containers/Overview/Initializing/KubeKeyCluster/constants.js"
# find orig files importing constants
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
for p in (SRC / "pages/clusters/containers/Overview/Initializing/KubeKeyCluster").rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    raws = imp_orig.findall(text)
    print(f"  {p.relative_to(SRC)} imports={raws}")

print("\n=== EditForms 1680/1682 ===")
for mid in ("1680", "1682", "1679", "1681", "1683"):
    mod = f"module-{mid}.js"
    if mod not in texts:
        print("MISS", mod)
        continue
    imps = sorted(set(importers[mod]))
    print(f"{mod} named={mod_to_names.get(mod)} importers={[(i, mod_to_names.get(i, ['?'])) for i in imps[:10]]}")
    print(f"  t={list(dict.fromkeys(t_pat.findall(texts[mod])))[:10]}")
    print(f"  head={texts[mod][:200].replace(chr(10),' | ')}")

for rel in (
    "components/EditForms/Workload/PodTemplate.jsx",
    "components/EditForms/Workload/PodTemplate.js",
    "components/EditForms/Workload/VolumeSettings.jsx",
    "components/EditForms/Workload/VolumeSettings.js",
):
    p = SRC / rel
    print(f"orig {rel} exists={p.exists()}")
    if p.exists():
        text = p.read_text(encoding="utf-8", errors="ignore")
        print(f"  methods sample={text[text.find('handle'):text.find('handle')+80] if 'handle' in text else 'nohandle'}")
        print(f"  t={list(dict.fromkeys(t_pat.findall(text)))[:8]}")

print("\n=== live vendor needles ===")
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    text = texts.get(cur, "")
    if not text and cur == "entry.js" and ENTRY.exists():
        text = ENTRY.read_text(encoding="utf-8", errors="ignore")
        texts[cur] = text
    for m in imp_unpacked.findall(text):
        stack.append(m)
print("live", len(live), "aliased", len(aliased))
NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("semver validRange", "validRange"),
    ("filesize", "filesize"),
    ("js-cookie", "js-cookie"),
]
for n, needle in NEEDLES:
    files = [f for f, t in texts.items() if needle in t]
    live_unnamed = []
    for f in files:
        mid = re.search(r"\d+", f)
        mid = mid.group() if mid else ""
        if f in live and mid not in aliased:
            live_unnamed.append(f)
    print(f"{n}: live_unnamed={live_unnamed[:8]} ({len(live_unnamed)})")
