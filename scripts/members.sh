#!/bin/bash

# Get logins, then fetch name for each using gh and xargs in parallel
gh api orgs/sisoputnfrba/teams/ayudantes/members \
  | jq -r '.[].login' \
  | xargs -P 10 -I {} gh api users/{} \
  | jq -r '{"name": "\(if .name == null then (.login | gsub("[0-9]"; "") | gsub("(?<=[a-z])(?=[A-Z])"; " "; "g")) else .name end)", "github": "\(.login)"}' \
  | jq -s '.' > ./docs/members.json
