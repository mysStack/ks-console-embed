#!/usr/bin/env python3
import re
import time
import urllib.request

print("sleep 70 for compile", flush=True)
time.sleep(70)
for i in range(30):
    try:
        req = urllib.request.Request(
            "http://127.0.0.1:8099/login",
            headers={"User-Agent": "Mozilla/5.0"},
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        print("poll", i, type(exc).__name__, flush=True)
        time.sleep(5)
        continue
    scripts = re.findall(r'src="(/[^"]+\.js)"', html)
    print("html", len(html), scripts, flush=True)
    app = [s for s in scripts if "/app." in s and "vendors-" not in s]
    if not app:
        time.sleep(5)
        continue
    with urllib.request.urlopen(
        urllib.request.Request("http://127.0.0.1:8099" + app[0], headers={"User-Agent": "Mozilla/5.0"}),
        timeout=120,
    ) as resp:
        data = resp.read().decode("utf-8", "replace")
    print("BUNDLE", app[0], "bytes", len(data), flush=True)
    print("named", data.count("src/named/"))
    print("pages_login", data.count("src/pages/login"))
    print("luxon", data.count("luxon"))
    print("module-749 factory", data.count("./src/unpacked/module-749.js"))
    print("module-16 factory", data.count("./src/unpacked/module-16.js"))
    print("es.function.name", data.count("es.function.name"))
    print("es.date.to-string", data.count("es.date.to-string"))
    break
else:
    raise SystemExit("no bundle")
