from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build/5203.app.09143fa1.js")
t = p.read_text(errors="replace")
print("len", len(t))
print(t[:1200])
print("---markers---")
for s in [
    "getProjectNavs",
    "ks-page-nav",
    "ks-page-side",
    "titleWrapper",
    "NavItem",
    "PROJECT",
    "module-5045",
    "Selector",
]:
    print(s, s in t)
