#!/usr/bin/env python3
import urllib.request

url = "http://127.0.0.1:8099/app.3d86f435.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
data = urllib.request.urlopen(req, timeout=120).read().decode("utf-8", "replace")
print("bytes", len(data))
print("named", data.count("src/named/"))
for n in (
    "module-8.js",
    "module-25.js",
    "module-30.js",
    "module-38.js",
    "module-222.js",
    "module-283.js",
    "corejs-export",
    "corejs-global",
    "corejs-enum-bug-keys",
    "enum-bug-keys",
    "internals/export.js",
):
    print(n, "str", data.count(n), "factory", data.count("./src/unpacked/" + n) if n.endswith(".js") else "-")
