#!/bin/sh
# Sucht in allen getrackten Dateien (oder den übergebenen Pfaden) nach Schlüsseln, Tokens und DB-URLs mit Passwort.
# Aufruf: sh scripts/secret-scan.sh [pfad …]   → Exit 1 bei Treffer, Zeilen mit Datei:Zeile
set -eu
cd "$(git rev-parse --show-toplevel)"
pattern='(sk-ant-[A-Za-z0-9_-]{20,}|sk-[A-Za-z0-9]{32,}|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(postgres|postgresql|mysql|mongodb(\+srv)?)://[^:/@[:space:]]+:[^@[:space:]]+@)'
# diese Datei selbst enthält das Muster
hits=$(git ls-files -z -- "$@" | xargs -0 grep -nIE "$pattern" -- 2>/dev/null | grep -v '^scripts/secret-scan.sh:' || true)
if [ -n "$hits" ]; then
  echo "$hits"
  echo "secret-scan: $(echo "$hits" | wc -l | tr -d ' ') Treffer" >&2
  exit 1
fi
echo "secret-scan: keine Treffer"
