#!/usr/bin/env python3
import re
import urllib.error
import urllib.request

url = "http://127.0.0.1:8099/login"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        html = resp.read().decode("utf-8", "replace")
        print("status", resp.status, "bytes", len(html))
except urllib.error.HTTPError as e:
    body = e.read().decode("utf-8", "replace")
    print("HTTPError", e.code, "bytes", len(body))
    print(body[:500])
    raise
scripts = re.findall(r'src="(/[^"]+\.js)"', html)
print("scripts", len(scripts))
for s in scripts[:8]:
    print(" ", s)
app = [s for s in scripts if "/app." in s and "vendors-" not in s]
print("app", app)
if app:
    with urllib.request.urlopen(
        urllib.request.Request("http://127.0.0.1:8099" + app[0], headers={"User-Agent": "Mozilla/5.0"}),
        timeout=120,
    ) as resp:
        data = resp.read().decode("utf-8", "replace")
    print("BUNDLE", app[0], "bytes", len(data))
    print("named", data.count("src/named/"))
    print("pages_login", data.count("src/pages/login"))
    print("es.string.replace", data.count("es.string.replace"))
    print("es.symbol.constructor", data.count("es.symbol.constructor"))
    print("isPlainObject", data.count("isPlainObject"))
    print("module-264 factory", data.count("./src/unpacked/module-264.js"))
    print("module-64 factory", data.count("./src/unpacked/module-64.js"))
    print("module-367 factory", data.count("./src/unpacked/module-367.js"))
    print("lodash-isPlainObject", data.count("lodash-isPlainObject"))
