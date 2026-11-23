#!/usr/bin/env python3
"""Remaining CJS/ESM interop leftovers in unpacked.

- ES module assigning module.exports
- missing default (default import of a module with no default / module.exports)
- illegal super(this) leftover
- numeric require leftover (expect 0)
- require.context leftover
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
default_imp = re.compile(
    r"""import\s+(\w+)\s+from\s+['"]\./(module-\d+\.js)['"]"""
)
num_req = re.compile(r"""require\(\s*(\d+)\s*\)""")
dyn_req = re.compile(r"""require\(\s*([^)'"]+)\)""")
ctx_req = re.compile(r"""require\.context\s*\(""")
super_this = re.compile(
    r"""(?:super\s*\(\s*this\b|_possibleConstructorReturn\s*\(\s*this\s*,\s*super\b|[A-Za-z_]\w*\(\s*this\s*,\s*super\s*\()"""
)
mod_exports = re.compile(r"""module\.exports\s*=""")
export_default = re.compile(r"""export\s+default\b""")
export_named = re.compile(r"""export\s+(?:\{|const|function|class|let|var)\b""")
es_module_flag = re.compile(r"""Object\.defineProperty\([^;]*__esModule""")


def mid_of(name: str) -> str:
    m = re.search(r"\d+", name)
    return m.group() if m else ""


print("=== index unpacked ===", flush=True)
texts = {}
importers = defaultdict(list)
for path in list(UNPACKED.glob("module-*.js")) + ([ENTRY] if ENTRY.exists() else []):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for m in imp_unpacked.findall(text):
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
    for m in imp_unpacked.findall(text):
        stack.append(m)
print("live", len(live), "aliased", len(aliased), "files", len(texts))

print("\n=== numeric require leftover ===")
num_files = []
for name, text in texts.items():
    found = num_req.findall(text)
    if found:
        num_files.append((name, found[:12], len(found), name in live))
print("files_with_numeric_require", len(num_files))
for item in num_files[:30]:
    print(" ", item)

print("\n=== require.context leftover ===")
ctx_files = []
for name, text in texts.items():
    if ctx_req.search(text) or "require.context" in text:
        ctx_files.append((name, name in live, mid_of(name) in aliased))
print("files_with_require_context", len(ctx_files))
for item in ctx_files[:40]:
    print(" ", item)
    snip = []
    t = texts[item[0]]
    for m in re.finditer(r".{0,40}require\.context.{0,80}", t):
        snip.append(m.group(0).replace("\n", " | "))
        if len(snip) >= 2:
            break
    print("    snip", snip)

print("\n=== illegal super(this) leftover ===")
super_files = []
for name, text in texts.items():
    if super_this.search(text):
        super_files.append((name, name in live, mid_of(name) in aliased))
print("files_with_super_this", len(super_files))
for item in super_files[:40]:
    print(" ", item)
    t = texts[item[0]]
    for m in super_this.finditer(t):
        start = max(0, m.start() - 50)
        end = min(len(t), m.end() + 80)
        print("    ", t[start:end].replace("\n", " | "))
        break

print("\n=== ES module assigning module.exports ===")
esm_cjs = []
for name, text in texts.items():
    if not mod_exports.search(text):
        continue
    has_export = bool(export_default.search(text) or export_named.search(text) or "export {" in text)
    has_import = text.lstrip().startswith("import ") or "\nimport " in text[:800]
    if has_export or has_import or "export " in text[:400]:
        esm_cjs.append((name, name in live, mid_of(name) in aliased, has_export, has_import))
print("esm_assigning_module_exports", len(esm_cjs))
live_esm = [x for x in esm_cjs if x[1] and not x[2]]
print("live_unnamed", len(live_esm))
for item in live_esm[:40]:
    name = item[0]
    t = texts[name]
    head = t[:220].replace("\n", " | ")
    print(f"  {name} export={item[3]} import={item[4]} importers={sorted(set(importers[name]))[:6]}")
    print(f"    head={head[:200]}")
    # show module.exports assignment snippet
    m = mod_exports.search(t)
    if m:
        print("    exports=", t[m.start(): m.start() + 120].replace("\n", " | "))

print("\n=== missing default: default-import of module without default ===")
missing = []
for name, text in texts.items():
    if name not in live:
        continue
    for local, target in default_imp.findall(text):
        mid = mid_of(target)
        if mid in aliased:
            continue
        tgt = texts.get(target, "")
        if not tgt:
            missing.append((name, target, local, "TARGET_MISSING"))
            continue
        has_def = bool(export_default.search(tgt) or re.search(r"exports\.default\s*=", tgt) or re.search(r"module\.exports\s*=", tgt))
        # babel interop often does export default X at end
        if has_def:
            continue
        # named-only export
        has_named = bool(re.search(r"export\s+\{", tgt) or re.search(r"exports\.\w+\s*=", tgt))
        missing.append((name, target, local, "no_default named=" + str(has_named)))
print("missing_default_edges", len(missing))
for item in missing[:50]:
    print(" ", item)
    tgt = texts.get(item[1], "")
    print("    target_head", tgt[:160].replace("\n", " | "))

print("\n=== dynamic require leftover (non-string, non-numeric already counted) ===")
dyn_files = []
for name, text in texts.items():
    found = []
    for m in dyn_req.finditer(text):
        arg = m.group(1).strip()
        if arg.startswith(("'", '"', "`")):
            continue
        if re.fullmatch(r"\d+", arg):
            continue
        found.append(arg[:80])
    if found:
        dyn_files.append((name, name in live, found[:6]))
print("dyn_require_files", len(dyn_files))
live_dyn = [x for x in dyn_files if x[1]]
print("live_dyn_require_files", len(live_dyn))
for item in live_dyn[:30]:
    print(" ", item)
