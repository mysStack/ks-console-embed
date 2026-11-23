#!/usr/bin/env python3
"""Alias uniquely confirmed live leftover core-js@3.37 internals/entries.

Do not invent orig paths. Do not swap top-level core-js@2 (recharts).
Skip 2-hit babel helpers, lodash copies, skip-list orig, cron-parser (no npm).
"""
from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
ALIASES = APP / "corejs-aliases.js"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)

# Confirmed by reading leftover vs core-js3 file. Unique needle among ALL
# non-stub unpacked. 254 maps to an-instance (structure), not array-buffer-view-core.
PINS = [
    ("module-46.js", "core-js3/internals/to-string.js", "Cannot convert a Symbol value to a string"),
    ("module-254.js", "core-js3/internals/an-instance.js", "Incorrect invocation"),
    ("module-390.js", "core-js3/internals/regexp-unsupported-ncg.js", "(?<a>b)"),
    ("module-117.js", "core-js3/internals/engine-user-agent.js", "String(navigator.userAgent)"),
    ("module-70.js", "core-js3/internals/object-define-property.js", "Accessors not supported"),
    ("module-168.js", "core-js3/internals/new-promise-capability.js", "Bad Promise constructor"),
    ("module-353.js", "core-js3/internals/array-set-length.js", "Cannot set read only .length"),
    ("module-132.js", "core-js3/internals/get-set-record.js", "Invalid size"),
    ("module-328.js", "core-js3/internals/validate-arguments-length.js", "Not enough arguments"),
    ("module-552.js", "core-js3/modules/web.self.js", "Illegal invocation"),
    ("module-280.js", "core-js3/internals/shared-store.js", 'version: "3.37.0"'),
    ("module-540.js", "core-js3/modules/es.promise.constructor.js", "Promise can't be resolved itself"),
]


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


print("=== index unpacked ===", flush=True)
unpacked = {}
for path in UNPACKED.glob("module-*.js"):
    text = read(path)
    if STUB_RE.search(text[:400]):
        continue
    unpacked[path.name] = text
print("real_unpacked", len(unpacked))

existing = set(re.findall(r"module-(\d+)\.js", read(ALIASES))) if ALIASES.exists() else set()
ok = []
skipped = []
for mod, spec, needle in PINS:
    hits = [n for n, t in unpacked.items() if needle in t]
    npm = NM / spec
    print(f"  {mod} -> {spec} needle_hits={hits} npm={npm.is_file()}")
    if hits != [mod]:
        skipped.append({"module": mod, "spec": spec, "reason": "not_1hit", "hits": hits})
        print("    SKIP not unique")
        continue
    if not npm.is_file():
        skipped.append({"module": mod, "spec": spec, "reason": "missing_npm"})
        print("    SKIP missing npm")
        continue
    mid = re.search(r"\d+", mod).group()
    if mid in existing:
        print("    already aliased")
        continue
    if mod == "module-254.js" and len(unpacked[mod]) > 800:
        skipped.append({"module": mod, "spec": spec, "reason": "too_large_for_an_instance"})
        print("    SKIP size")
        continue
    ok.append((mod, spec, needle))

print("new_pins", len(ok), "skipped", len(skipped))
if not ok:
    raise SystemExit("no unique pins to apply")

text = read(ALIASES)
if not text.rstrip().endswith("};"):
    raise SystemExit("unexpected corejs-aliases.js ending")
# insert before closing };
lines = []
for mod, spec, _needle in sorted(ok, key=lambda x: int(re.search(r"\d+", x[0]).group())):
    lines.append(
        f'  [path.resolve(__dirname, "src/unpacked/{mod}")]: require.resolve("{spec}"),'
    )
insert = "\n".join(lines) + "\n"
# keep trailing comma on previous last entry; file already uses trailing commas
text = text.rstrip()
if not text.endswith("};"):
    raise SystemExit("bad ending")
body = text[: -len("};")].rstrip()
if not body.endswith(","):
    body += ","
new = body + "\n" + insert + "};\n"
ALIASES.write_text(new, encoding="utf-8")
print("wrote", ALIASES, "added", len(ok), "total_aliases", new.count("module-"))

report = {
    "corejs3_internal_pins": [
        {"module": m, "corejs": s, "via": n} for m, s, n in ok
    ],
    "skipped_orig": "0 unique orig 1-hit with unmapped path",
    "skipped_babel": "2-hit helpers remain module-N.js",
    "skipped_lodash": "2-hit copies remain module-N.js",
    "skipped_cron_parser": "module-747 unique cron errors; cron-parser not in node_modules",
    "skipped_pins": skipped,
}
(APP / "LIVE_LEFTOVER_NEXT_APPLY.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps(report, indent=2))
