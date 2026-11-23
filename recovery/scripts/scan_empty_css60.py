#!/usr/bin/env python3
"""Empty CSS placeholders in unpacked vs public/v3css copies of sealed v3dist.

Do not overwrite dist/v3dist. Copy direction is v3dist -> public/v3css only.
"""
from pathlib import Path
from collections import defaultdict
import re
import hashlib

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
PUBLIC_CSS = ROOT / "recovery/react-app/public/v3css"
V3DIST = Path("/home/bruce/code/ks-develop/console/dist/v3dist")
INDEX = ROOT / "recovery/react-app/public/index.html"
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
ENTRY = UNPACKED / "entry.js"

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")


def mid_of(name: str) -> str:
    m = re.search(r"\d+", name)
    return m.group() if m else ""


def sha(p: Path) -> str:
    h = hashlib.sha256()
    h.update(p.read_bytes())
    return h.hexdigest()[:16]


print("=== empty CSS placeholders ===", flush=True)
empty = []
near_empty = []
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    stripped = text.strip()
    if stripped in {"export default {};", "export default {}"}:
        empty.append(path.name)
        continue
    if "export default {}" in stripped and len(stripped) < 120 and "import " not in stripped:
        near_empty.append((path.name, stripped[:80]))

print("empty_export_default_object", len(empty))
print("near_empty", len(near_empty))
print("empty_ids", sorted(empty, key=lambda n: int(mid_of(n) or 0)))
for item in near_empty[:20]:
    print(" near", item)

print("\n=== live empty placeholders ===")
texts = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
if ENTRY.exists():
    texts["entry.js"] = ENTRY.read_text(encoding="utf-8", errors="ignore")
importers = defaultdict(list)
for name, text in texts.items():
    for m in imp_unpacked.findall(text):
        importers[m].append(name)

live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    for m in imp_unpacked.findall(texts.get(cur, "")):
        stack.append(m)

live_empty = [n for n in empty if n in live]
print("live_empty", len(live_empty), live_empty)
print("aliased_empty", [n for n in empty if mid_of(n) in aliased])
for n in live_empty[:30]:
    print(f"  {n} aliased={mid_of(n) in aliased} importers={sorted(set(importers[n]))[:8]}")

print("\n=== public/v3css vs sealed v3dist CSS ===")
pub = sorted(PUBLIC_CSS.glob("*.css")) if PUBLIC_CSS.exists() else []
print("public_css_count", len(pub))
print("public_names", [p.name for p in pub])

dist_css = []
if V3DIST.exists():
    dist_css = sorted(V3DIST.rglob("*.css"))
print("v3dist_exists", V3DIST.exists(), "v3dist_css_count", len(dist_css))
print("v3dist_names", [p.name for p in dist_css[:40]])

pub_by_name = {p.name: p for p in pub}
dist_by_name = {p.name: p for p in dist_css}

missing_in_public = [n for n in dist_by_name if n not in pub_by_name]
extra_in_public = [n for n in pub_by_name if n not in dist_by_name]
print("missing_in_public", missing_in_public)
print("extra_in_public", extra_in_public)

mismatch = []
for n, dp in dist_by_name.items():
    pp = pub_by_name.get(n)
    if not pp:
        continue
    if sha(dp) != sha(pp):
        mismatch.append((n, dp.stat().st_size, pp.stat().st_size))
print("hash_mismatch", mismatch)

print("\n=== index.html linked CSS ===")
if INDEX.exists():
    html = INDEX.read_text(encoding="utf-8", errors="ignore")
    hrefs = re.findall(r"""href=["'](/v3css/[^"']+)["']""", html)
    print("linked", hrefs)
    missing_link = []
    for h in hrefs:
        p = ROOT / "recovery/react-app/public" / h.lstrip("/")
        if not p.exists():
            missing_link.append(h)
    print("linked_missing_file", missing_link)
    unlinked_pub = [p.name for p in pub if f"/v3css/{p.name}" not in hrefs]
    print("public_unlinked", unlinked_pub)
