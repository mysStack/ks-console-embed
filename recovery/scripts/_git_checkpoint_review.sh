#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3
echo "=== branch ==="
git status -sb
echo "=== recovery count ==="
git status --short recovery | wc -l
echo "=== other dirty ==="
git status --short | grep -v 'recovery/' | grep -v '.agents/' || true
echo "=== log ==="
git log -5 --oneline
echo "=== ignore node_modules ==="
git check-ignore -v recovery/react-app/node_modules || true
git check-ignore -v recovery/react-app/phase4-build || true
