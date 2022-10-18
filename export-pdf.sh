#!/bin/sh

# Usage:
#   Export all: export-pdf.sh
#   Export single: export-pdf.sh <relative_url>
# Example: 
#   export-pdf.sh primeros-pasos/tp0

set -e

teardown() {
  sed -i 's|'$1'|{{}}|g' ./docs/.vuepress/vuepress-pdf.config.ts
  exit 1
}

pdf() {
  echo "Exporting $1"
  sed -i 's|{{}}|'$1'|g' ./docs/.vuepress/vuepress-pdf.config.ts
  npm run export-pdf || teardown $1
  sed -i 's|'$1'|{{}}|g' ./docs/.vuepress/vuepress-pdf.config.ts
  echo "Exported $1"
}

if [ -z "$1" ]
then
  find docs -iname "*.md" | cut -d. -f1 | cut -d/ -f2- \
    | grep -v "guias/programacion/shared-libraries" \
    | grep -v "guias/linux/threads" \
    | grep -v "primeros-pasos/donde-me-anoto" \
    | grep -v "primeros-pasos/README" \
    | grep -v "primeros-pasos/entorno-" \
    | grep -v "recursos/" \
    | grep -v "index" \
    | grep -v "consultas" \
    | grep -v "legacy" \
    | while read f ; do
    pdf $f
  done
else
  pdf $1
fi

