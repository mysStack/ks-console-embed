#!/usr/bin/env python3
import re
import urllib.request

headers = {"User-Agent": "Mozilla/5.0", "Accept": "text/html"}
req = urllib.request.Request("http://127.0.0.1:8099/login", headers=headers)
with urllib.request.urlopen(req, timeout=30) as resp:
    html = resp.read().decode("utf-8", "replace")
app = re.findall(r'src="(/app\.[^"]+\.js)"', html)[0]
print("app", app)
req = urllib.request.Request("http://127.0.0.1:8099" + app, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=120) as resp:
    data = resp.read().decode("utf-8", "replace")
print("named", data.count("src/named/"))
print("engine-ff-version", data.count("engine-ff-version"))
print("engine-webkit-version", data.count("engine-webkit-version"))
print("module-504 factory", data.count("./src/unpacked/module-504.js"))
print("module-506 factory", data.count("./src/unpacked/module-506.js"))
print("bytes", len(data))
