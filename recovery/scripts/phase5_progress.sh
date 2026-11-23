#!/usr/bin/env bash
ps -ef | grep -E 'npm|playwright|phase5' | grep -v grep | head -n 30
echo '---npm-log---'
tail -n 40 /tmp/phase5-npm.log 2>/dev/null || echo no-npm-log
echo '---cache---'
ls -d /home/bruce/.cache/ms-playwright 2>/dev/null || echo no-pw-cache
ls /home/bruce/code/ks-develop/kse-console-v3/recovery/phase5-node/node_modules/playwright >/dev/null 2>&1 && echo playwright_pkg_ok || echo playwright_pkg_missing
ss -ltn | grep -E ':8108 |:8099 ' || true
