from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
c = next(root.glob("5203.app.*.js"))
t = c.read_text(encoding="utf-8", errors="ignore")
print("len", len(t))
for k in ("loadSelector", "ks-project-selector", "selector-missing", "showSelect", "titleWrapper"):
    print(k, t.find(k))
idx = t.find("loadSelector")
print("---around loadSelector---")
print(t[max(0, idx - 300) : idx + 400] if idx >= 0 else "missing")
print("---head 500---")
print(t[:500])
print("---.t( count", t.count(".t("))
# all .t( contexts
pos = 0
n = 0
while n < 8:
    i = t.find(".t(", pos)
    if i < 0:
        break
    print("t@", i, t[max(0, i - 80) : i + 80])
    pos = i + 3
    n += 1
