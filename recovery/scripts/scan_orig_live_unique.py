#!/usr/bin/env python3
"""Globally unique orig t() pins among leftover live modules. Skip skip-list families."""
from collections import defaultdict
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "recovery/react-app/src"
ORIG = ROOT / "src"
UNPACKED = SRC / "unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
COREJS = ROOT / "recovery/react-app/corejs-aliases.js"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
T_PAT = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
IMP_RE = re.compile(
    r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\(|(?:^|\n)\s*import)\s*['"]([^'"]+)['"]""",
    re.M,
)
PREFIXES = (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "unpacked",
)
SKIP_FRAGS = (
    "WHIZARD",
    "ColumeInput",
    "CustomToolTip",
    "PromQLInput",
    "ProjectSelect",
    "FormGroupCard",
    "ItemContianer",
    "FullscreenModal",
    "ErrorContainer",
    "EditMonitorFormLayout",
    "MetircQueryInput",
    "BillIcon",
    "ContainerLog",
    "Compose",
    "GrafanaTargetInput",
    "SquareButton",
    "StatusReason",
)
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
}

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
if COREJS.exists():
    aliased.update(re.findall(r"module-(\d+)\.js", COREJS.read_text(encoding="utf-8")))
known_keys = set(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))


def mid_of(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def try_file(base: Path):
    if base.is_file():
        return base
    for ext in (".js", ".jsx", ".json"):
        p = Path(str(base) + ext)
        if p.is_file():
            return p
    if base.is_dir():
        for name in ("index.js", "index.jsx"):
            p = base / name
            if p.is_file():
                return p
    return None


def resolve_spec(spec, from_path):
    spec = spec.split("?")[0].split("#")[0]
    if not spec or spec.startswith("named/"):
        return None
    if spec.startswith("./") or spec.startswith("../"):
        base = (from_path.parent / spec).resolve()
        try:
            base.relative_to(SRC.resolve())
        except ValueError:
            return None
        return try_file(base)
    for prefix in PREFIXES:
        if spec == prefix or spec.startswith(prefix + "/"):
            return try_file(SRC / spec)
    return None


def walk():
    seen = set()
    stack = [SRC / "bootstrap.js"]
    texts = {}
    while stack:
        cur = stack.pop().resolve()
        if cur in seen or not cur.is_file():
            continue
        seen.add(cur)
        text = cur.read_text(encoding="utf-8", errors="replace")
        texts[cur] = text
        mid = mid_of(cur.name)
        if cur.parent == UNPACKED.resolve() and mid in aliased:
            continue
        for spec in IMP_RE.findall(text):
            if spec.startswith("pages/") and "/App" in spec and not spec.startswith(
                "pages/console/"
            ):
                if f'import("{spec}")' in text or f"import('{spec}')" in text:
                    continue
            resolved = resolve_spec(spec, cur)
            if resolved is not None:
                stack.append(resolved)
    return seen, texts


print("=== walk ===", flush=True)
live, texts = walk()
leftovers = []
for path in live:
    if path.parent != UNPACKED.resolve() or not path.name.startswith("module-"):
        continue
    if mid_of(path.name) in aliased:
        continue
    text = texts[path]
    if STUB_RE.search(text[:400]):
        continue
    leftovers.append(path.name)
print("live_files", len(live), "leftover_live", len(leftovers))

print("=== index t() ===", flush=True)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(text[:400]):
        continue
    for k in T_PAT.findall(text):
        t_index[k].add(path.name)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if not d.exists():
        continue
    for p in d.rglob("*.js"):
        text = p.read_text(encoding="utf-8", errors="replace")
        if text.startswith("export { default } from "):
            continue
        for k in T_PAT.findall(text):
            t_index[k].add("PROMOTED:" + p.relative_to(SRC).as_posix())

def norm_key(rel):
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel

orig_t = defaultdict(list)
missing = []
for folder in ("components", "pages", "stores", "utils", "hocs", "actions", "configs"):
    d = ORIG / folder
    if not d.exists():
        continue
    for p in d.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"} or ".test." in p.name:
            continue
        key = norm_key(p.relative_to(ORIG).as_posix())
        text = p.read_text(encoding="utf-8", errors="replace")
        for k in T_PAT.findall(text):
            orig_t[k].append(key)
        if key not in known_keys:
            missing.append((key, text))

leftover_set = set(leftovers)
pins = []
print("missing_orig", len(missing))
for key, text in missing:
    if any(frag.lower() in key.lower() for frag in SKIP_FRAGS):
        continue
    tkeys = list(dict.fromkeys(T_PAT.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    for k in unique_t:
        files = t_index.get(k, set())
        live_hits = [f for f in files if f in leftover_set]
        other = [f for f in files if f not in leftover_set]
        if other:
            continue
        if len(live_hits) == 1:
            pins.append((key, live_hits[0], k))
            print(f"  PIN {key} -> {live_hits[0]} unique_t {k}")
            break
print("pin_count", len(pins))
