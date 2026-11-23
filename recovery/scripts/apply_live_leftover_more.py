#!/usr/bin/env python3
"""Apply globally unique leftover -> core-js3 internals aliases.

Only pins verified by verify_live_leftover_more.py (1-hit needle, npm exists).
Do not invent orig paths. Do not add npm packages.
"""
from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
ALIASES = APP / "corejs-aliases.js"
VERIFY = json.loads((APP / "LIVE_LEFTOVER_MORE_VERIFY.json").read_text(encoding="utf-8"))

pins = []
for rec in VERIFY["ok"]:
    if not rec.get("ok"):
        continue
    if rec.get("hit_count") != 1:
        continue
    if rec["global_hits"] != [rec["module"]]:
        continue
    if not rec.get("npm_exists"):
        continue
    pins.append((rec["module"], rec["corejs"], rec["via"]))

text = ALIASES.read_text(encoding="utf-8")
existing = set(re.findall(r"module-(\d+)\.js", text))
new = []
for mod, spec, via in pins:
    mid = re.search(r"\d+", mod).group()
    if mid in existing:
        print("already", mod)
        continue
    new.append((mod, spec, via))

print("new_pins", len(new))
if not new:
    raise SystemExit("no new unique pins")

body = text.rstrip()
if not body.endswith("};"):
    raise SystemExit("unexpected ending")
body = body[: -len("};")].rstrip()
if not body.endswith(","):
    body += ","
lines = []
for mod, spec, _via in sorted(new, key=lambda x: int(re.search(r"\d+", x[0]).group())):
    lines.append(
        f'  [path.resolve(__dirname, "src/unpacked/{mod}")]: require.resolve("{spec}"),'
    )
ALIASES.write_text(body + "\n" + "\n".join(lines) + "\n};\n", encoding="utf-8")
print("wrote", ALIASES, "added", len(new), "total_module_aliases", ALIASES.read_text(encoding="utf-8").count("module-"))

report = {
    "applied": [{"module": m, "corejs": s, "via": v} for m, s, v in new],
    "rejected": [
        {"module": r["module"], "corejs": r["corejs"], "hits": r.get("hit_count")}
        for r in VERIFY["reject"]
    ],
    "skipped_orig": "0 unique orig 1-hit with unmapped path",
    "skipped_vendor": "cron-parser unique in leftover but not in node_modules",
}
(APP / "LIVE_LEFTOVER_MORE_APPLY.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps(report, indent=2))
