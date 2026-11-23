#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
needles = [
    "theme, className, ...rest",
    "title, description, onCancel, children, operations, className",
    "textPanels, isEditing, onAdd, onDelete, onEdit, onSort, monitors",
    "title, isEditing, onChange, theme",
    "preview, sidebar, main",
    "left, right",
    "errorMessage, children",
    "wrapperOnBack",
    "shouldMenuShow",
    "changeComplete",
    "Last 5 Minutes",
    "{ sidebar, content }",
    "theme === \"light\"",
    "theme==='light'",
    "styles.light",
    "module2848",
    "module-2848",
]
index = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in needles:
        if needle in text:
            index[needle].append(path.name)
for needle in needles:
    print(needle, index[needle][:8], "count", len(index[needle]))

# peek 2847 theme light/dark
text = (UNPACKED / "module-2847.js").read_text(encoding="utf-8", errors="ignore")
print("\n--- 2847 snippet ---")
for i, line in enumerate(text.splitlines()):
    if "theme" in line or "export" in line or "light" in line or "dark" in line:
        print(f"{i}: {line[:160]}")
        if i > 80:
            break

text = (UNPACKED / "module-2846.js").read_text(encoding="utf-8", errors="ignore")
print("\n--- 2846 TIME/timer snippet ---")
for i, line in enumerate(text.splitlines()):
    if "TIME" in line or "timer" in line or "setTimeout" in line or "Date.now" in line or "export" in line:
        print(f"{i}: {line[:180]}")

text = (UNPACKED / "module-2763.js").read_text(encoding="utf-8", errors="ignore")
print("\n--- 2763 ---")
print(text[:500])

text = (UNPACKED / "module-2772.js").read_text(encoding="utf-8", errors="ignore")
print("\n--- 2772 head ---")
print("\n".join(text.splitlines()[:25])[:800])
