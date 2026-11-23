#!/usr/bin/env python3
"""Follow-up: named orig-has-render vs unpacked missing/empty; CSS importers; missing-default targets."""
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
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
es6_render_pat = re.compile(r"""(?:^|\n)\s*(?:async\s+)?render\s*\([^)]*\)\s*\{""")
key_render_pat = re.compile(r"""key:\s*["']render["']""")


def orig_path_for(key: str):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def extract_brace_body(text: str, open_idx: int) -> str:
    if open_idx < 0 or open_idx >= len(text) or text[open_idx] != "{":
        return ""
    depth = 0
    i = open_idx
    in_str = None
    escape = False
    while i < len(text):
        ch = text[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_str:
                in_str = None
            i += 1
            continue
        if ch in ("'", '"', "`"):
            in_str = ch
            i += 1
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[open_idx + 1 : i]
        i += 1
    return text[open_idx + 1 :]


def has_nonempty_orig_render(text: str) -> bool:
    for pat in (es6_render_pat,):
        for m in pat.finditer(text):
            open_idx = text.find("{", m.end() - 1)
            body = extract_brace_body(text, open_idx)
            compact = re.sub(r"\s+", " ", body).strip()
            if len(compact) > 40 and not re.match(r"return (null|undefined|<\s*div\s*/\s*>|<\s*>\s*<\s*/\s*>)", compact):
                return True
            if "this.render" in compact or "<" in compact and "return" in compact and "null" not in compact[:20]:
                if not re.search(r"return\s+(null|<\s*>\s*<\s*/\s*>|<\s*div\s*/\s*>)", compact):
                    return True
    return False


print("=== named orig nonempty render vs unpacked ===", flush=True)
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

missing_render = []
emptyish = []
for key, mod in pairs.items():
    op = orig_path_for(key)
    if not op:
        continue
    ot = op.read_text(encoding="utf-8", errors="ignore")
    if not has_nonempty_orig_render(ot):
        continue
    ut = texts.get(mod, "")
    if not ut:
        missing_render.append((key, mod, "UNPACKED_MISSING", False))
        continue
    has_key = bool(key_render_pat.search(ut) or es6_render_pat.search(ut))
    if not has_key:
        missing_render.append((key, mod, "NO_RENDER_KEY", mod in live))
        continue
    # already caught empty by previous scan; still record very short render bodies
    for m in key_render_pat.finditer(ut):
        # find nearby value function
        window = ut[m.start(): m.start() + 400]
        if re.search(r"return\s+(null|<\s*>\s*<\s*/\s*>|<\s*div\s*/\s*>)", window):
            emptyish.append((key, mod, window[:120].replace("\n", " | "), mod in live))

print("named_orig_nonempty_unpacked_no_render", len(missing_render))
live_miss = [x for x in missing_render if x[3]]
print("live_missing_render", len(live_miss))
for item in missing_render[:40]:
    print(" ", item)
print("emptyish_named", len(emptyish))
for item in emptyish[:20]:
    print(" ", item)

print("\n=== CSS placeholder importers / heads ===")
for mid in ["770", "752", "177", "173", "418", "2107", "765", "766", "576"]:
    name = f"module-{mid}.js"
    t = texts.get(name, "")
    print(f"  {name} live={name in live} aliased={mid in aliased} bytes={len(t)} importers={sorted(set(importers.get(name, [])))[:8]}")
    print(f"    text={t.strip()[:80]!r}")

print("\n=== missing-default targets ===")
for mid in ["313", "115", "70", "150", "221", "95"]:
    name = f"module-{mid}.js"
    t = texts.get(name, "")
    print(f"  {name} live={name in live} aliased={mid in aliased} bytes={len(t)}")
    print(f"    head={t[:200].replace(chr(10), ' | ')}")
    print(f"    has_export_default={bool(re.search(r'export default', t))}")
    print(f"    importers_live={[i for i in sorted(set(importers.get(name, []))) if i in live][:8]}")

print("\n=== babel helper dual export files ===")
for mid in ["246", "332", "51", "690"]:
    name = f"module-{mid}.js"
    t = texts.get(name, "")
    print(f"  {name} live={name in live} aliased={mid in aliased} bytes={len(t)}")
    print(f"    full={t[:500].replace(chr(10), ' | ')}")
