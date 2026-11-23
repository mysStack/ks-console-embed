#!/usr/bin/env bash
set -eu
echo ---8099---
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
echo ---8108---
ss -ltn | grep -E ':8108 ' || echo 8108_not_listening
echo ---identity---
curl -sS http://127.0.0.1:8108/__phase5 || echo identity_failed
echo
