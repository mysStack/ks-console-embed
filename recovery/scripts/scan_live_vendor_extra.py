#!/usr/bin/env python3
"""Confirm 717's children stay inside the semver tree, and hunt leftover
vendor fingerprints in the live graph that are not already aliased and
not inside the 717 import tree. Do not alias business copies.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
ENTRY = UNPACKED / "entry.js"

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")


def mid_of(name: str) -> str:
    m = re.search(r"\d+", name)
    return m.group() if m else ""


texts = {}
importers = defaultdict(list)
children = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    kids = imp_unpacked.findall(text)
    children[path.name] = kids
    for m in kids:
        importers[m].append(path.name)

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
        children[cur] = imp_unpacked.findall(text)
    for m in children.get(cur, []):
        stack.append(m)

# webpack-effective live: do not walk into aliased modules
effective = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    effective.add(cur)
    if mid_of(cur) in aliased:
        continue
    for m in children.get(cur, []):
        stack.append(m)

print("unpacked_live", len(live), "effective_live", len(effective), "aliased", len(aliased))
print("717_in_effective", "module-717.js" in effective)
print("362_in_effective", "module-362.js" in effective)
print("81_in_effective", "module-81.js" in effective)

semver_tree = set()
stack = ["module-717.js"]
while stack:
    cur = stack.pop()
    if cur in semver_tree:
        continue
    semver_tree.add(cur)
    for m in children.get(cur, []):
        stack.append(m)
print("semver_tree_size", len(semver_tree))

print("\n=== 717 children with importers outside the 717 tree ===")
outside = []
for name in sorted(semver_tree, key=lambda n: int(mid_of(n) or 0)):
    imps = sorted(set(importers[name]))
    ext = [i for i in imps if i not in semver_tree]
    live_ext = [i for i in ext if i in effective]
    if ext:
        outside.append((name, ext, live_ext))
        print(f"  {name} ext={ext} effective_ext={live_ext}")
print("outside_count", len(outside))

print("\n=== effective live unnamed not in 717 tree: vendor-looking ===")
banner_re = re.compile(r"(?:@license|Copyright \(c\)|Licensed under|SPDX-License-Identifier)", re.I)
vendorish = re.compile(
    r"(?:node_modules|MIT License|BSD[ -]3|ISC License|Apache License|"
    r"semver|js-cookie|filesize|uuid|tinycolor|JSEncrypt|sockjs|"
    r"EventSource|htmlparser| internmap|parse-entities|tiny-invariant|"
    r"hoist-non-react-statics|react-lifecycles|object-assign|"
    r"debug\(|createDebug|ms\.js|inherits\(|safe-buffer)",
    re.I,
)
shown = 0
for name in sorted(effective, key=lambda n: int(mid_of(n) or 0) if mid_of(n) else 0):
    mid = mid_of(name)
    if not mid or mid in aliased:
        continue
    if name in semver_tree:
        continue
    text = texts.get(name, "")
    if not text:
        continue
    if banner_re.search(text[:2500]) or vendorish.search(text[:2500]):
        imps = sorted(set(importers[name]))[:8]
        hit = None
        for pat in (
            "@license", "Copyright (c)", "Licensed under", "SEMVER",
            "tiny-invariant", "filesize", "js-cookie", "xxxxxxxx-xxxx-4xxx",
            "tinycolor", "JSEncrypt", "sockjs", "htmlparser", "internmap",
            "parse-entities", "hoist-non-react-statics", "object-assign",
            "createDebug", "safe-buffer", "inherits(",
        ):
            if pat.lower() in text[:4000].lower() or pat in text:
                hit = pat
                break
        print(f"  {name} hit={hit} bytes={len(text)} importers={imps}")
        shown += 1
        if shown >= 40:
            break
print("shown", shown)

print("\n=== 362 consumers usage of 717 ===")
for name in sorted(set(importers["module-362.js"])):
    print(f"  {name} aliased={mid_of(name) in aliased} effective={name in effective}")
    t = texts[name]
    refs = re.findall(r"module362\.[A-Za-z]+|getApiVersion|isK8sVersionAbove", t)
    print(f"    refs={list(dict.fromkeys(refs))[:12]}")
