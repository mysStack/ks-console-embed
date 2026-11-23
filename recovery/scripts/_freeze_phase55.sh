#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3
SRC=$ROOT/recovery/react-app/phase4-build
FREEZE=$ROOT/recovery/freeze/phase5.5-90597b7c
mkdir -p "$FREEZE/phase4-build"
test -f "$SRC/app.90597b7c.js"
cp -a "$SRC/app.90597b7c.js" "$FREEZE/phase4-build/"
cp -a "$SRC/index.html" "$FREEZE/phase4-build/"
# Keep webpack configs that produced this artifact.
cp -a "$ROOT/recovery/react-app/webpack.config.js" "$FREEZE/"
cp -a "$ROOT/recovery/react-app/webpack.phase4.config.js" "$FREEZE/"
cp -a "$ROOT/recovery/PHASE5.5-REPORT.md" "$FREEZE/"
cp -a "$ROOT/recovery/PHASE5.5-VERIFY.json" "$FREEZE/"
# Module aliases / maps that the live graph depends on.
if [ -f "$ROOT/recovery/react-app/corejs-aliases.js" ]; then
  cp -a "$ROOT/recovery/react-app/corejs-aliases.js" "$FREEZE/"
fi
if [ -f "$ROOT/recovery/react-app/corejs-shim-aliases.js" ]; then
  cp -a "$ROOT/recovery/react-app/corejs-shim-aliases.js" "$FREEZE/"
fi
if [ -f "$ROOT/recovery/react-app/recharts-aliases.js" ]; then
  cp -a "$ROOT/recovery/react-app/recharts-aliases.js" "$FREEZE/"
fi
(
  cd "$FREEZE"
  sha256sum phase4-build/app.90597b7c.js phase4-build/index.html \
    webpack.config.js webpack.phase4.config.js \
    PHASE5.5-REPORT.md PHASE5.5-VERIFY.json \
    corejs-aliases.js corejs-shim-aliases.js recharts-aliases.js \
    > SHA256SUMS
)
python3 - <<'PY'
from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/freeze/phase5.5-90597b7c")
src = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build/app.90597b7c.js")
sums = (root / "SHA256SUMS").read_text()
main = [ln for ln in sums.splitlines() if ln.endswith("phase4-build/app.90597b7c.js")][0]
print("freeze_dir", str(root))
print("app_bytes", src.stat().st_size)
print("sha256", main.split()[0])
print("files")
print(sums)
PY
echo freeze_ok
