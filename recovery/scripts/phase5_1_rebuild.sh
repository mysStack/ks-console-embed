#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
cd $ROOT/react-app
echo "---webpack phase4---"
npx webpack --config webpack.phase4.config.js --mode production --no-color
echo "---restart 8108---"
bash $ROOT/scripts/phase5_restart_static.sh
curl -s http://127.0.0.1:8108/__phase5
echo
# Confirm recovered user string is not in the new main bundle as shim default.
python3 - <<'PY'
from pathlib import Path
p=Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
mains=list(p.glob("app.*.js"))
print("mains", [x.name for x in mains])
text=(p/"index.html").read_text()
print("index_has_main", "app." in text)
PY
