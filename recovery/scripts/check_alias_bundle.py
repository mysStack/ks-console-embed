#!/usr/bin/env python3
import urllib.request

url = "http://127.0.0.1:8099/app.20fb3dd9.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
data = urllib.request.urlopen(req, timeout=120).read().decode("utf-8", "replace")
print("bytes", len(data))
for n in (
    "module-27.js",
    "module-140.js",
    "module-190.js",
    "module-135.js",
    "module-137.js",
    "module-761.js",
    "module-283.js",
    "module-8.js",
):
    print(
        n,
        "str",
        data.count(n),
        "factory",
        data.count('./src/unpacked/' + n),
    )
print("named", data.count("src/named/"))
print("es.number.constructor", data.count("es.number.constructor"))
print("es.symbol.description", data.count("es.symbol.description"))
print("es.string.split", data.count("es.string.split"))
print("es.regexp.constructor", data.count("es.regexp.constructor"))
print("es.number.to-fixed", data.count("es.number.to-fixed"))
print("react-is", data.count("react-is"))
