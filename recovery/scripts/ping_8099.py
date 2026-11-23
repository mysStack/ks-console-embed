#!/usr/bin/env python3
import re
import urllib.request

try:
    req = urllib.request.Request(
        "http://127.0.0.1:8099/login",
        headers={"User-Agent": "Mozilla/5.0"},
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        html = resp.read().decode("utf-8", "replace")
    print("html_bytes", len(html))
    print("scripts", re.findall(r'src="(/[^"]+\.js)"', html))
except Exception as exc:
    print("ERR", type(exc).__name__, exc)
