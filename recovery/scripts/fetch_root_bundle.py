#!/usr/bin/env python3
import re
import urllib.request

req = urllib.request.Request("http://127.0.0.1:8099/", headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=30) as resp:
    html = resp.read().decode("utf-8", "replace")
print("html_bytes", len(html))
print(html[:800])
scripts = re.findall(r'src="(/[^"]+\.js)"', html)
print("scripts", scripts)
app = [s for s in scripts if "/app." in s and "vendors-" not in s]
if app:
    with urllib.request.urlopen(
        urllib.request.Request("http://127.0.0.1:8099" + app[0], headers={"User-Agent": "Mozilla/5.0"}),
        timeout=120,
    ) as resp:
        data = resp.read().decode("utf-8", "replace")
    print("BUNDLE", app[0], "bytes", len(data))
    print("named", data.count("src/named/"))
    print("pages_login", data.count("src/pages/login"))
    print("luxon", data.count("luxon"))
    print("module-749 factory", data.count("./src/unpacked/module-749.js"))
    print("module-16 factory", data.count("./src/unpacked/module-16.js"))
    print("es.function.name", data.count("es.function.name"))
    print("es.date.to-string", data.count("es.date.to-string"))
    print("es.regexp.to-string", data.count("es.regexp.to-string"))
    print("corejs-export", data.count("corejs-export"))
