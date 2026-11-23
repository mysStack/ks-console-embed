#!/usr/bin/env python3
"""Apply uniquely confirmed leftover pins: babel helpers + core-js 3.37.0.

Skip 2-hit helpers, skip-list orig families, lodash copies, Set esnext/v2.
Do not invent orig business paths.
"""
from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
PROMOTE_PY = ROOT / "recovery/scripts/promote_named_into_graph.py"
WEBPACK = APP / "webpack.config.js"
PINS = json.loads((APP / "LEFTOVER_PINS.json").read_text(encoding="utf-8"))

SPEC = re.compile(r"""(['"])(?:\./|unpacked/)module-(\d+)\.js\1""")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


print("=== index unpacked for uniqueness ===", flush=True)
unpacked = {}
for path in UNPACKED.glob("module-*.js"):
    text = read(path)
    if STUB_RE.search(text[:400]):
        continue
    unpacked[path.name] = text
print("real_unpacked", len(unpacked))


def unique_needle(needle: str) -> list[str]:
    return [n for n, t in unpacked.items() if needle in t]


def specifier(rel_js: str) -> str:
    return rel_js[:-3] if rel_js.endswith(".js") else rel_js


# ---- babel helpers (recovered source, readable names) ----
babel = []
for item in PINS["babel_pins"]:
    babel.append((item["helper"], item["module"]))

EXTRA_BABEL = [
    ("arrayWithHoles", "module-498.js", "if (Array.isArray(e)) {\n        return e;\n    }"),
    (
        "iterableToArrayLimit",
        "module-538.js",
        "Symbol.iterator in Object(e)",
    ),
    (
        "unsupportedIterableToArray",
        "module-344.js",
        "/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/",
    ),
    (
        "superPropBase",
        "module-754.js",
        "while(!Object.prototype.hasOwnProperty.call(e, t) && (e = module51(e)) !== null)",
    ),
]

print("\n=== babel uniqueness ===")
babel_ok = []
for helper, mod in babel:
    print(f"  listed {mod} -> {helper}")
    babel_ok.append((helper, mod))

for helper, mod, needle in EXTRA_BABEL:
    hits = unique_needle(needle)
    print(f"  extra {helper} needle_hits={hits}")
    if hits == [mod]:
        babel_ok.append((helper, mod))
    else:
        print(f"    SKIP extra {helper}")

# skip lodash (global copies of isFunction/isEmpty)

# ---- core-js aliases ----
corejs = []
for item in PINS["corejs_pins"]:
    corejs.append((item["module"], item["corejs"]))

EXTRA_COREJS = [
    ("module-5.js", "core-js/modules/es.array.concat.js", "return e.concat()[0] !== e"),
    ("module-4.js", "core-js/modules/es.object.to-string.js", 'Object.prototype, "toString", module539'),
    ("module-7.js", "core-js/modules/web.dom-collections.for-each.js", "e.forEach !== module370"),
    (
        "module-9.js",
        "core-js/modules/es.object.get-own-property-descriptor.js",
        "getOwnPropertyDescriptor: function(e, t)",
    ),
    ("module-10.js", "core-js/modules/es.object.keys.js", "return module175(module77(e))"),
    ("module-160.js", "core-js/modules/es.json.stringify.js", 'target: "JSON"'),
    ("module-548.js", "core-js/modules/es.promise.catch.js", "return this.then(undefined, e)"),
    ("module-586.js", "core-js/modules/es.symbol.for.js", 'module152("symbol-to-string-registry")'),
    ("module-1692.js", "core-js/modules/es.promise.all-settled.js", "allSettled: function(e)"),
]

print("\n=== extra core-js uniqueness ===")
for mod, spec, needle in EXTRA_COREJS:
    hits = unique_needle(needle)
    print(f"  {mod} -> {spec} hits={hits}")
    if hits == [mod]:
        corejs.append((mod, spec))
    else:
        print("    SKIP")

# verify npm files exist
missing_npm = []
for mod, spec in corejs:
    npm = APP / "node_modules" / spec.replace("core-js/", "core-js3/", 1)
    if not npm.is_file():
        missing_npm.append((mod, spec))
if missing_npm:
    raise SystemExit(f"missing npm files: {missing_npm}")

# global unique core-js target+single-key among listed (already 1:1 in pins)
print("corejs_alias_count", len(corejs), "babel_count", len(babel_ok))

# ---- write corejs-aliases.js ----
lines = [
    'const path = require("path");',
    "module.exports = {",
]
for mod, spec in sorted(corejs, key=lambda x: int(re.search(r"\d+", x[0]).group())):
    lines.append(
        f'  [path.resolve(__dirname, "src/unpacked/{mod}")]: require.resolve("{spec}"),'
    )
lines.append("};")
lines.append("")
(APP / "corejs-aliases.js").write_text("\n".join(lines), encoding="utf-8")
print("wrote corejs-aliases.js", len(corejs))

wp = read(WEBPACK)
if 'require("./corejs-aliases.js")' not in wp:
    wp = wp.replace(
        '...require("./recharts-aliases.js"),',
        '...require("./corejs-aliases.js"),\n      ...require("./recharts-aliases.js"),',
    )
    WEBPACK.write_text(wp, encoding="utf-8")
    print("patched webpack.config.js")
else:
    print("webpack already has corejs-aliases")

# promote vendor_ids to see corejs-aliases
pp = read(PROMOTE_PY)
if "corejs-aliases.js" not in pp:
    pp = pp.replace(
        "RECHARTS = APP / \"recharts-aliases.js\"",
        'RECHARTS = APP / "recharts-aliases.js"\nCOREJS = APP / "corejs-aliases.js"',
    )
    pp = pp.replace(
        "for path in (WEBPACK, RECHARTS):",
        'for path in (WEBPACK, RECHARTS, COREJS):',
    )
    # COREJS may not exist in older trees: guard
    if "if path.exists()" not in pp:
        pp = pp.replace(
            "for path in (WEBPACK, RECHARTS, COREJS):\n        ids.update(re.findall(r\"module-(\\d+)\\.js\", path.read_text(encoding=\"utf-8\")))",
            "for path in (WEBPACK, RECHARTS, COREJS):\n        if path.exists():\n            ids.update(re.findall(r\"module-(\\d+)\\.js\", path.read_text(encoding=\"utf-8\")))",
        )
    PROMOTE_PY.write_text(pp, encoding="utf-8")
    print("patched promote_named_into_graph vendor_ids")
else:
    print("promote vendor_ids already includes corejs")

# pin core-js version
pkg_path = APP / "package.json"
pkg = json.loads(read(pkg_path))
if pkg.get("dependencies", {}).get("core-js") != "3.37.0":
    pkg.setdefault("dependencies", {})["core-js"] = "3.37.0"
    pkg_path.write_text(json.dumps(pkg, indent=2) + "\n", encoding="utf-8")
    print("pinned core-js 3.37.0")

# ---- promote babel helpers ----
canon = {}
for helper, mod in babel_ok:
    dest_rel = f"utils/babel-helpers/{helper}.js"
    canon[mod] = dest_rel

def rewrite(text: str) -> str:
    def repl(m):
        q, num = m.group(1), m.group(2)
        filename = f"module-{num}.js"
        if filename in canon:
            return f"{q}{specifier(canon[filename])}{q}"
        return m.group(0)

    return SPEC.sub(repl, text)


promoted = 0
for mod, rel in canon.items():
    src = UNPACKED / mod
    dest = SRC / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    text = read(src)
    if text.startswith("export { default } from ") and "utils/babel-helpers/" in text[:120]:
        dest.write_text(rewrite(read(dest) if dest.exists() else text), encoding="utf-8")
    else:
        dest.write_text(rewrite(text), encoding="utf-8")
    src.write_text(
        f'export {{ default }} from "{specifier(rel)}";\nexport * from "{specifier(rel)}";\n',
        encoding="utf-8",
    )
    promoted += 1
    print(f"  promoted {mod} -> {rel}")

rewritten_files = 0
for folder in (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "unpacked",
):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if path.name in canon:
            continue
        text = read(path)
        new = rewrite(text)
        if new != text:
            path.write_text(new, encoding="utf-8")
            rewritten_files += 1

entry = UNPACKED / "entry.js"
if entry.exists():
    text = read(entry)
    new = rewrite(text)
    if new != text:
        entry.write_text(new, encoding="utf-8")
        rewritten_files += 1

print("promoted_helpers", promoted, "rewritten_files", rewritten_files)

# add to KNOWN
known_text = read(KNOWN_PY)
if "utils/babel-helpers/asyncToGenerator.js" not in known_text:
    block = ["    # leftover live graph: uniquely identified babel helpers"]
    for helper, mod in babel_ok:
        block.append(f'    "utils/babel-helpers/{helper}.js": "{mod}",')
    insert = "\n".join(block) + "\n"
    known_text = known_text.replace(
        '    "components/Modals/CustomMonitoring/store.js": "module-2853.js",\n}',
        '    "components/Modals/CustomMonitoring/store.js": "module-2853.js",\n'
        + insert
        + "}",
    )
    KNOWN_PY.write_text(known_text, encoding="utf-8")
    print("patched add_known_named.py")
else:
    print("KNOWN already has babel helpers")

report = {
    "babel_promoted": [{"helper": h, "module": m} for h, m in babel_ok],
    "corejs_aliased": [{"module": m, "corejs": s} for m, s in corejs],
    "rewritten_files": rewritten_files,
    "skipped_lodash": PINS.get("lodash_pins"),
    "skipped_orig_skip_list": PINS.get("orig_pins"),
}
(APP / "LEFTOVER_SLICE_APPLY.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({k: (len(v) if isinstance(v, list) else v) for k, v in report.items()}, indent=2))
