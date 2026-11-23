#!/usr/bin/env python3
import urllib.error
import urllib.request

for path in ("/login", "/"):
    url = "http://127.0.0.1:8099" + path
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0", "Accept": "text/html,application/xhtml+xml"},
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            body = resp.read(500)
            print(path, "OK", resp.status, "len", resp.length, "head", body[:120])
    except urllib.error.HTTPError as exc:
        body = exc.read()[:800]
        print(path, "HTTP", exc.code, body.decode("utf-8", "replace")[:500])
    except Exception as exc:
        print(path, type(exc).__name__, exc)
