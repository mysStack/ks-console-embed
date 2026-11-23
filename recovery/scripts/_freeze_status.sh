#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3
echo "=== tracked recovery ==="
git ls-files recovery | wc -l
echo "=== du ==="
du -sh recovery recovery/unpacked recovery/react-app recovery/react-app/phase4-build recovery/react-app/src recovery/freeze 2>/dev/null || true
echo "=== phase4-build files ==="
ls /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build | wc -l
echo "=== check-ignore ==="
git check-ignore -v recovery recovery/unpacked recovery/react-app/phase4-build || true
echo "=== status recovery ==="
git status --short recovery | wc -l
git status --short --untracked-files=normal recovery | head -40
echo "=== other dirty not recovery ==="
git status --short | grep -v '^?? recovery/' | grep -v '^?? .agents/' | head -40
