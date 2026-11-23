#!/usr/bin/env python3
import json
import re
import urllib.request
from pathlib import Path

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"Accept": "*/*", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read()


html = fetch("http://127.0.0.1:8099/login").decode("utf-8", "replace")
scripts = re.findall(r'src="(/[^"]+\.js)"', html)
print("html_bytes", len(html), "scripts", scripts)
app = [s for s in scripts if "/app." in s and "vendors-" not in s]
if not app:
    # maybe html is just template before inject
    print(html[:500])
    raise SystemExit("no app script")
url = "http://127.0.0.1:8099" + app[0]
print("fetching", url)
data = fetch(url).decode("utf-8", "replace")
print("app_bytes", len(data))
print("named", data.count("src/named/"))
print("pages_login", data.count("src/pages/login"))
print("react-is", data.count("react-is"))
print("unpacked_761", data.count("module-761.js"))
print("unpacked_8", data.count("unpacked/module-8.js"))
print("NODE_ENV warning count via DefinePlugin not in bundle")
print("overlay string", "webpack-dev-server-client-overlay" in html)
(APP / "PASS2_APP_STATUS.json").write_text(
    json.dumps(
        {
            "bundle": app[0],
            "bytes": len(data),
            "named": data.count("src/named/"),
            "pages_login": data.count("src/pages/login"),
            "react_is": data.count("react-is"),
            "module_761": data.count("module-761.js"),
            "module_8": data.count("unpacked/module-8.js"),
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("wrote PASS2_APP_STATUS.json")
