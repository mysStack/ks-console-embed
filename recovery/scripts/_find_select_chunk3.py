from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
print("named chunks:", [f.name for f in p.glob("*project*")])
for f in sorted(p.glob("*.js")):
    t = f.read_text(errors="replace")
    if "ks-project-select" in t or "Modals/ProjectSelect" in t or "ProjectSelectModal" in t:
        print("hit", f.name, f.stat().st_size)
    if f.name.startswith("5203."):
        print("5203 has import(", "import(" in t)
        print("5203 has webpack_require.e", "__webpack_require__.e" in t or ".e=" in t[:200])
        print("5203 has VERSION", "VERSION_EXISTS" in t)
        print("5203 has ensure", "ensure" in t)
        # dynamic import leftover
        print("5203 has then(function", "ProjectSelect" in t)
