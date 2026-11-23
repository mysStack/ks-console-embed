from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
chunk = next(p.glob("5203.app.*.js"))
t = chunk.read_text(errors="replace")
print("file", chunk.name)
print("VERSION_EXISTS", "VERSION_EXISTS" in t)
print("templatePrefix", "templatePrefix" in t)
print("getProjectNavs", "getProjectNavs" in t)
print("ProjectSelect", "SEARCH_BY_NAME" in t)
idx = t.find("724500")
if idx < 0:
    idx = t.find("(e,r,n){")
print(t[idx:idx + 900] if idx >= 0 else t[:900])
