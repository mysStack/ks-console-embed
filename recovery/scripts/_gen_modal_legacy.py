from pathlib import Path

src = Path(
    "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked/module-1475.js"
)
dst = Path(
    "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/components/Base/Modal/Legacy.js"
)
text = src.read_text(encoding="utf-8")
text = text.replace('from "./module-', 'from "unpacked/module-')
text = text.replace('import "./module-', 'import "unpacked/module-')
old = 'import { Component } from "unpacked/module-553.js";\n'
new = (
    'import * as module553 from "unpacked/module-553.js";\n'
    "const Component = module553.Component || (module553.default && module553.default.Component) || function RecoveredComponent() {};\n"
)
if old not in text:
    raise SystemExit("component import not found")
text = text.replace(old, new, 1)
dst.write_text(text, encoding="utf-8")
print("wrote", dst, "lines", text.count("\n") + 1)
