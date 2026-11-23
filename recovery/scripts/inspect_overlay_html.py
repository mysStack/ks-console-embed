#!/usr/bin/env python3
"""Parse chrome dump-dom for scripts, overlay, named refs. Fetch app bundle counts."""
from __future__ import annotations

from pathlib import Path
import json
import re
import urllib.request

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
HTML = {
    "login": Path("/tmp/kse-overlay-check/login.html"),
    "dashboard": Path("/tmp/kse-overlay-check/dashboard.html"),
}
BASE = "http://127.0.0.1:8099"
SCRIPT_RE = re.compile(r'src="(/[^"]+\.js)"')
OVERLAY = "webpack-dev-server-client-overlay"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", "replace")


out = {}
all_scripts = []
for name, path in HTML.items():
    html = path.read_text(encoding="utf-8", errors="replace")
    scripts = SCRIPT_RE.findall(html)
    all_scripts.extend(scripts)
    out[name] = {
        "bytes": len(html),
        "overlay": OVERLAY in html,
        "scripts": scripts,
        "named_src": html.count("src/named/"),
        "pages_login": html.count("src/pages/login"),
        "hello": html.count("Hello recovered"),
        "welcome": "Welcome" in html,
        "title_snip": re.search(r"<title>[^<]*</title>", html, re.I),
    }
    if out[name]["title_snip"]:
        out[name]["title_snip"] = out[name]["title_snip"].group(0)

all_scripts = list(dict.fromkeys(all_scripts))
(APP / "LIVE_RESOURCES.json").write_text(
    json.dumps({"scripts": [BASE + s if s.startswith("/") else s for s in all_scripts]}, indent=2) + "\n",
    encoding="utf-8",
)
print("scripts", all_scripts)

app_scripts = [s for s in all_scripts if "/app." in s and "vendors-" not in s]
print("app", app_scripts)
if app_scripts:
    app = fetch(BASE + app_scripts[0])
    counts = {
        "bundle": app_scripts[0],
        "bytes": len(app),
        "named_pages_login": app.count("named/pages/login"),
        "src_named": app.count("src/named/"),
        "src_pages_login": app.count("src/pages/login"),
        "src_core_App": app.count("src/core/App"),
        "babel_helpers": app.count("src/utils/babel-helpers/"),
        "corejs3_modules": app.count("core-js3/modules/"),
        "corejs3_internals": app.count("core-js3/internals/"),
        "unpacked_module": len(re.findall(r"src/unpacked/module-\d+\.js", app)),
    }
    out["bundle"] = counts
    print(json.dumps(counts, indent=2))

(APP / "OVERLAY_INSPECT.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print(json.dumps({k: {kk: vv for kk, vv in v.items() if kk != "scripts"} for k, v in out.items() if k != "bundle"}, indent=2))
