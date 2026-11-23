#!/usr/bin/env python3
import re
import urllib.error
import urllib.request

headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

def get(path):
    url = "http://127.0.0.1:8099" + path
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read()
            print(path, resp.status, len(body), resp.getheader("Content-Type"))
            return body
    except urllib.error.HTTPError as e:
        body = e.read()
        print(path, "HTTP", e.code, len(body))
        print(body[:200].decode("utf-8", "replace"))
        return None

html = get("/login")
if not html:
    raise SystemExit(1)
text = html.decode("utf-8", "replace")
scripts = re.findall(r'src="(/[^"]+\.js)"', text)
print("scripts", scripts)
app = [s for s in scripts if "/app." in s and "vendors-" not in s]
print("app", app)
if not app:
    raise SystemExit("no app bundle")
req = urllib.request.Request("http://127.0.0.1:8099" + app[0], headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=120) as resp:
    data = resp.read().decode("utf-8", "replace")
print("BUNDLE", app[0], "bytes", len(data))
print("named", data.count("src/named/"))
print("pages_login", data.count("src/pages/login"))
print("es.string.replace", data.count("es.string.replace"))
print("es.symbol.constructor", data.count("es.symbol.constructor"))
print("es.map.constructor", data.count("es.map.constructor"))
print("es.set.constructor", data.count("es.set.constructor"))
print("make-built-in", data.count("make-built-in"))
print("collection-strong", data.count("collection-strong"))
print("isPlainObject", data.count("isPlainObject"))
print("_baseIsNative", data.count("_baseIsNative"))
print("_getNative", data.count("_getNative"))
print("_getTag", data.count("_getTag"))
print("module-264 factory", data.count("./src/unpacked/module-264.js"))
print("module-64 factory", data.count("./src/unpacked/module-64.js"))
print("module-367 factory", data.count("./src/unpacked/module-367.js"))
print("module-584 factory", data.count("./src/unpacked/module-584.js"))
print("module-606 factory", data.count("./src/unpacked/module-606.js"))
print("core-js3", data.count("core-js3"))
