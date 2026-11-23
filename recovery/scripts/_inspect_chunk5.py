from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
chunk = next(p.glob("5203.app.*.js"))
t = chunk.read_text(errors="replace")
print("file", chunk.name, "len", len(t))
for s in [
    "VERSION_EXISTS",
    "getProjectNavs",
    "titleWrapper",
    "strategy-group",
    "SEARCH_BY_NAME",
    "GrayRelease",
    "ContainerSettings",
]:
    print(s, s in t)
idx = t.find("724500")
print("idx", idx)
print(t[max(idx, 0): max(idx, 0) + 500])
