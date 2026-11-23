#!/usr/bin/env python3
import re
import time
import urllib.request


def fetch(url: str, timeout: int = 30) -> str:
    req = urllib.request.Request(url, headers={"Accept": "*/*", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", "replace")


for i in range(50):
    try:
        html = fetch("http://127.0.0.1:8099/login", timeout=20)
    except Exception as exc:  # noqa: BLE001
        print("poll", i, "html_err", type(exc).__name__, flush=True)
        time.sleep(6)
        continue
    scripts = re.findall(r'src="(/[^"]+\.js)"', html)
    print("poll", i, "html", len(html), "scripts", scripts, flush=True)
    app = [s for s in scripts if "/app." in s and "vendors-" not in s]
    if not app:
        time.sleep(6)
        continue
    try:
        data = fetch("http://127.0.0.1:8099" + app[0], timeout=120)
    except Exception as exc:  # noqa: BLE001
        print("bundle_err", type(exc).__name__, flush=True)
        time.sleep(6)
        continue
    print("BUNDLE", app[0], "bytes", len(data), flush=True)
    if len(data) < 500000:
        time.sleep(6)
        continue
    print("named", data.count("src/named/"))
    print("pages_login", data.count("src/pages/login"))
    print("luxon", data.count("luxon"))
    print("module-749", data.count("module-749.js"))
    print("module-16 factory", data.count("./src/unpacked/module-16.js"))
    print("es.function.name", data.count("es.function.name"))
    break
else:
    raise SystemExit("no bundle")
