#!/bin/sh

# Usage:
#   Export all: export-pdf.sh
#   Export single: export-pdf.sh <relative_url>
# Example: 
#   export-pdf.sh primeros-pasos/tp0

set -e

pdfexport() {
  echo "Exporting $1"
  node scripts/pdf-export.js $1 || exit 1
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
    pdfexport $f
  done
else
  pdfexport $1
fi
