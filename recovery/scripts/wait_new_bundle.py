#!/usr/bin/env python3
import re
import time
import urllib.request

OLD = "app.3d86f435.js"


def fetch(url: str, timeout: int = 60) -> str:
    req = urllib.request.Request(url, headers={"Accept": "*/*", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", "replace")


for i in range(40):
    try:
        html = fetch("http://127.0.0.1:8099/login")
    except Exception as exc:  # noqa: BLE001
        print("poll", i, "html_err", type(exc).__name__)
        time.sleep(8)
        continue
    scripts = re.findall(r'src="(/[^"]+\.js)"', html)
    print("poll", i, "html", len(html), "scripts", scripts, flush=True)
    app = [s for s in scripts if "/app." in s and "vendors-" not in s]
    if app and OLD not in app[0]:
        url = "http://127.0.0.1:8099" + app[0]
        data = fetch(url, timeout=120)
        print("NEW_BUNDLE", app[0], "bytes", len(data))
        print("named", data.count("src/named/"))
        print("pages_login", data.count("src/pages/login"))
        print("react-is", data.count("react-is"))
        print("module-761", data.count("module-761.js"))
        break
    time.sleep(8)
else:
    raise SystemExit("no new bundle")
