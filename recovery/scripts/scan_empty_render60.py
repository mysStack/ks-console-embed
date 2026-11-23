#!/usr/bin/env python3
"""Empty-render scan of unpacked business modules vs orig.

Find export-default class / babel-helper components whose render is empty
(<div/>, null, undefined, blank) while orig still has content, or while
sibling renderX methods exist in the same unpacked file (Dashboard pattern).

Fix is a separate step: restore composition from existing unpacked methods.
Do not invent orig paths. Do not copy orig JSX wholesale.
"""
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

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764",
    "1415",
    "989", "891", "717",
    "4142",
    "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
    "2300", "2301", "2302", "805", "837", "959", "2943",
    "1832", "1831", "851", "1122", "3326", "4448",
    "3680", "3689", "3693", "3698", "3701",
    "4153", "4154", "4219", "4227", "4103", "4080", "4107", "4105", "1847",
    "3839",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)
known_mods = set(pairs.values())
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
key_render_pat = re.compile(
    r"""key:\s*["']render["']\s*,\s*value:\s*function(?:\s+\w+)?\s*\([^)]*\)\s*\{"""
)
es6_render_pat = re.compile(
    r"""(?:^|\n)\s*(?:async\s+)?render\s*\([^)]*\)\s*\{"""
)
es6_class_pat = re.compile(
    r"""export\s+default\s+class\s+(\w+)?"""
)
sibling_pat = re.compile(
    r"""key:\s*["'](render[A-Z][A-Za-z0-9]*)["']"""
)
es6_sibling_pat = re.compile(
    r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9]*)\s*\("""
)
empty_body_pats = [
    re.compile(r"^\s*$"),
    re.compile(r"^\s*return\s*;?\s*$"),
    re.compile(r"^\s*return\s+null\s*;?\s*$", re.I),
    re.compile(r"^\s*return\s+undefined\s*;?\s*$", re.I),
    re.compile(r"^\s*return\s+<\s*div\s*/\s*>\s*;?\s*$", re.I),
    re.compile(r"^\s*return\s+\(\s*<\s*div\s*/\s*>\s*\)\s*;?\s*$", re.I),
    re.compile(r"^\s*return\s+<\s*div\s*>\s*<\s*/\s*div\s*>\s*;?\s*$", re.I),
    re.compile(r"^\s*return\s+<\s*>\s*<\s*/\s*>\s*;?\s*$"),
    re.compile(r"^\s*return\s+React\.createElement\(\s*['\"]div['\"]\s*,\s*null\s*\)\s*;?\s*$"),
]


def mid_of(name: str) -> str:
    m = re.search(r"\d+", name)
    return m.group() if m else ""


def extract_brace_body(text: str, open_idx: int) -> str:
    """open_idx points at '{'. Return inner body."""
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


def strip_comments(body: str) -> str:
    body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)
    body = re.sub(r"//.*?$", "", body, flags=re.M)
    return body.strip()


def is_empty_render(body: str) -> bool:
    stripped = strip_comments(body)
    for pat in empty_body_pats:
        if pat.match(stripped):
            return True
    compact = re.sub(r"\s+", " ", stripped)
    if len(compact) <= 48:
        if "this.render" not in compact and "createElement" not in compact:
            if "<" not in compact or re.search(r"<\s*div\s*/\s*>", compact):
                if re.search(r"return\s+(null|undefined|<\s*div\s*/\s*>)", compact):
                    return True
                if compact in {"", "{}", "return"}:
                    return True
    return False


def orig_path_for(key: str):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def orig_render_bodies(orig_text: str):
    bodies = []
    for pat in (es6_render_pat, key_render_pat):
        for m in pat.finditer(orig_text):
            open_idx = orig_text.find("{", m.start())
            if open_idx < 0:
                continue
            bodies.append(extract_brace_body(orig_text, open_idx))
    return bodies


def orig_render_nonempty(orig_text: str) -> bool:
    bodies = orig_render_bodies(orig_text)
    if not bodies:
        return False
    return any(not is_empty_render(b) for b in bodies)


print("=== index unpacked ===", flush=True)
texts = {}
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
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
    if not text and cur == "entry.js" and ENTRY.exists():
        text = ENTRY.read_text(encoding="utf-8", errors="ignore")
        texts[cur] = text
    for m in imp_unpacked.findall(text):
        stack.append(m)
print("live", len(live), "known_mods", len(known_mods), "aliased", len(aliased))

hits = []
for name, text in texts.items():
    mid = mid_of(name)
    if mid in aliased:
        continue
    bodies = []
    for m in key_render_pat.finditer(text):
        open_idx = text.find("{", m.end() - 1)
        bodies.append(("babel", extract_brace_body(text, open_idx)))
    for m in es6_render_pat.finditer(text):
        open_idx = text.find("{", m.end() - 1)
        bodies.append(("es6", extract_brace_body(text, open_idx)))
    if not bodies:
        continue
    empty_ones = [(kind, b) for kind, b in bodies if is_empty_render(b)]
    if not empty_ones:
        continue
    siblings = sorted(set(sibling_pat.findall(text) + es6_sibling_pat.findall(text)))
    has_class = bool(es6_class_pat.search(text) or "key: \"render\"" in text or "key: 'render'" in text)
    names = mod_to_names.get(name, [])
    orig_info = []
    orig_has = False
    for key in names:
        op = orig_path_for(key)
        if not op:
            orig_info.append((key, "MISSING_ORIG"))
            continue
        ot = op.read_text(encoding="utf-8", errors="ignore")
        nonempty = orig_render_nonempty(ot)
        orig_has = orig_has or nonempty
        orig_info.append((key, f"nonempty={nonempty} bytes={len(ot)} path={op.name}"))
    kind = empty_ones[0][0]
    body_preview = re.sub(r"\s+", " ", strip_comments(empty_ones[0][1]))[:120]
    hits.append({
        "name": name,
        "mid": mid,
        "live": name in live,
        "skip": mid in SKIP_MODS,
        "kind": kind,
        "n_empty": len(empty_ones),
        "n_render": len(bodies),
        "siblings": siblings,
        "names": names,
        "orig_has_content": orig_has,
        "orig_info": orig_info,
        "has_class": has_class,
        "preview": body_preview,
        "importers": sorted(set(importers.get(name, [])))[:8],
    })

print("empty_render_hits", len(hits))
print("live_empty", sum(1 for h in hits if h["live"]))
print("named_empty", sum(1 for h in hits if h["names"]))
print("orig_has_content", sum(1 for h in hits if h["orig_has_content"]))
print("sibling_empty", sum(1 for h in hits if h["siblings"]))
print("fix_candidates", sum(
    1 for h in hits
    if (h["orig_has_content"] or h["siblings"]) and h["live"]
))

print("\n=== FIX CANDIDATES (live + orig content or siblings) ===")
shown = 0
for h in sorted(hits, key=lambda x: int(x["mid"] or 0)):
    if not h["live"]:
        continue
    if not (h["orig_has_content"] or h["siblings"]):
        continue
    print(
        f"  {h['name']} skip={h['skip']} kind={h['kind']} "
        f"siblings={h['siblings']} names={h['names'][:3]} "
        f"orig={h['orig_info'][:2]} preview={h['preview']!r} "
        f"importers={h['importers']}"
    )
    shown += 1
print("fix_shown", shown)

print("\n=== LIVE EMPTY without orig mapping (sample) ===")
shown = 0
for h in sorted(hits, key=lambda x: int(x["mid"] or 0)):
    if not h["live"] or h["names"] or h["orig_has_content"]:
        continue
    print(
        f"  {h['name']} skip={h['skip']} siblings={h['siblings']} "
        f"preview={h['preview']!r} importers={h['importers']}"
    )
    shown += 1
    if shown >= 40:
        break
print("unnamed_live_shown", shown)

print("\n=== NAMED empty vs orig (all) ===")
for h in sorted(hits, key=lambda x: int(x["mid"] or 0)):
    if not h["names"]:
        continue
    print(
        f"  {h['name']} live={h['live']} orig_has={h['orig_has_content']} "
        f"siblings={h['siblings']} names={h['names']} orig={h['orig_info']} "
        f"preview={h['preview']!r}"
    )

# Unique t() 1-hit orig for unnamed live empty-render (pin only if not skip-list)
print("\n=== unnamed live empty: unique t() orig lookup (no skip pin) ===")
orig_t = defaultdict(list)
if SRC.exists():
    for p in SRC.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        if "node_modules" in p.parts:
            continue
        try:
            ot = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        rel = p.relative_to(SRC).as_posix()
        for key in set(t_pat.findall(ot)):
            orig_t[key].append(rel)

new_pins = []
for h in hits:
    if not h["live"] or h["names"] or h["skip"]:
        continue
    text = texts[h["name"]]
    keys = [k for k in set(t_pat.findall(text)) if orig_t.get(k)]
    unique = []
    for k in keys:
        files = orig_t[k]
        if len(files) == 1:
            unique.append((k, files[0]))
    if not unique:
        continue
    file_hits = defaultdict(list)
    for k, f in unique:
        file_hits[f].append(k)
    if len(file_hits) != 1:
        print(f"  {h['name']} AMBIG unique_t={list(file_hits)[:4]}")
        continue
    orig_rel = next(iter(file_hits))
    already = orig_rel in pairs or orig_rel.replace(".jsx", ".js") in pairs
    print(
        f"  {h['name']} unique_orig={orig_rel} t={file_hits[orig_rel][:4]} "
        f"already={already} siblings={h['siblings']}"
    )
    if not already:
        new_pins.append((h["name"], orig_rel, file_hits[orig_rel][:4]))
print("new_unique_orig_for_empty_render", len(new_pins))
for name, orig_rel, ts in new_pins:
    print(f"  PIN_CANDIDATE {name} -> {orig_rel} t={ts}")
