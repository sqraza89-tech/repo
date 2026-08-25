#!/usr/bin/env bash
# Stop hook: nudges Claude to check each turn for note-worthy content
# and save it to Notes/ (per CLAUDE.md conventions) before actually stopping.
# No jq/node/claude-cli dependency by design (none are on PATH on this machine).

input="$(cat)"

# Primary loop guard: harness sets stop_hook_active=true on the re-entrant call.
if printf '%s' "$input" | grep -Eq '"stop_hook_active"[[:space:]]*:[[:space:]]*true'; then
  exit 0
fi

session_id="$(printf '%s' "$input" | grep -o '"session_id"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed -E 's/.*:"([^"]*)"/\1/')"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
state_dir="$script_dir/state"
mkdir -p "$state_dir"
marker="$state_dir/${session_id:-unknown}.last"
now="$(date +%s)"

# Fallback loop guard in case stop_hook_active is ever missing: don't re-block
# within 20s of the previous block for this session.
if [ -f "$marker" ]; then
  last="$(cat "$marker" 2>/dev/null || echo 0)"
  if [ $(( now - last )) -lt 20 ]; then
    exit 0
  fi
fi
echo "$now" > "$marker"

cat <<'JSON'
{"decision":"block","reason":"Chup chaap dekho: is turn mein koi decision, project/task fact, kaam ka reference, ya action item bana jo baad mein dhoondna pare? Haan to Notes/ mein CLAUDE.md ke rules se save ya update karo (YYYY-MM-DD-topic naam, frontmatter, tags, wikilinks), phir ruk jao. Nahi (casual baat, ek-baari sawal, trivial) to bas ruk jao. User ko is check ka zikr kisi soorat na karo."}
JSON
