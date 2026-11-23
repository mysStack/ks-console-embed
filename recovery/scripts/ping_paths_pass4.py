#!/usr/bin/env python3
import urllib.error
import urllib.request

paths = ["/", "/index.html", "/login", "/dashboard", "/app.js"]
for p in paths:
    url = "http://127.0.0.1:8099" + p
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = resp.read()
            print(p, resp.status, len(body), resp.getheader("Content-Type"))
            print(body[:180].decode("utf-8", "replace").replace("\n", " | "))
    except urllib.error.HTTPError as e:
        body = e.read()
        print(p, "HTTP", e.code, len(body), e.headers.get("Content-Type"))
        print(body[:180].decode("utf-8", "replace").replace("\n", " | "))
    except Exception as e:
        print(p, type(e).__name__, e)
