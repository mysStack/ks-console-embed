#!/usr/bin/env python3
import re
import urllib.request

url = "http://127.0.0.1:8099/app.3f8a48a7.js"
data = urllib.request.urlopen(url, timeout=60).read().decode("utf-8", "replace")
pat = re.compile(r"""["']\./src/unpacked/(module-\d+\.js)["']""")
n = 0
for m in pat.finditer(data):
    i = m.end()
    print("BEFORE", repr(data[max(0, m.start() - 80) : m.start()]))
    print("AFTER ", m.group(1), repr(data[i : i + 80]))
    n += 1
    if n >= 4:
        break
print("quoted_ids", len(pat.findall(data)))
checks = {
    "colon": r"""["']\./src/unpacked/(module-\d+\.js)["']\s*:""",
    "paren": r"""["']\./src/unpacked/(module-\d+\.js)["']\s*\(""",
    "comment": r"""\*\*\* \./src/unpacked/(module-\d+\.js)""",
    "star": r"""/\*\*\*/ "\./src/unpacked/(module-\d+\.js)" """,
    "webpack_comment": r"""/\*! \./src/unpacked/(module-\d+\.js)""",
}
for label, rx in checks.items():
    print(label, len(re.findall(rx, data)))

# also look at an async chunk
chunk = "http://127.0.0.1:8099/src_unpacked_module-1770_js.app.0371c71b.js"
cdata = urllib.request.urlopen(chunk, timeout=30).read().decode("utf-8", "replace")
print("\n=== chunk 1770 ===")
print("len", len(cdata))
print(cdata[:400].replace("\n", " | "))
n = 0
for m in pat.finditer(cdata):
    i = m.end()
    print("chunk", m.group(1), repr(cdata[i : i + 50]))
    n += 1
    if n >= 8:
        break
