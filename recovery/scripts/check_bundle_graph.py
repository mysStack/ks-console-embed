#!/usr/bin/env python3
import json
import urllib.request

url = "http://127.0.0.1:8099/app.b7634955.js"
data = urllib.request.urlopen(url, timeout=30).read().decode("utf-8", "replace")
needles = [
    "pages/login",
    "core/App",
    "core/GlobalValue",
    "core/i18n",
    "utils/index",
    "unpacked/module-63",
    "named/pages/login",
    "src/pages/login",
    "src/core/App",
]
print(
    json.dumps(
        {
            "bytes": len(data),
            "hits": {n: data.count(n) for n in needles},
        },
        indent=2,
    )
)
