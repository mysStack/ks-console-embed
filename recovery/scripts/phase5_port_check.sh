#!/usr/bin/env bash
ss -ltn | grep -E ':8108 |:8099 ' || true
curl -s http://127.0.0.1:8108/__phase5 || echo DOWN
echo
