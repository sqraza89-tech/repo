# Claude-Projects

This is a notes/knowledge vault — markdown notes, references, and project folders. Not a code project.

## How to work here

- Every new document goes in `Notes/`
- File naming: `YYYY-MM-DD-topic-name.md`
- Every file starts with frontmatter:

```
---
date: YYYY-MM-DD
tags: []
---
```

- Use headings (`##`) and bullets, avoid long paragraphs
- Action items go under `## Next steps` as a checkbox list

## Automatic saving

A Stop hook (`.claude/hooks/auto-note-check.sh`) checks after every response whether
something in that turn was worth saving.

- Only save when something is **clearly important**: a decision, a project fact, a
  reference, or an action item that will need to be found again later
- Skip casual chat, one-off questions, trivial exchanges
- If nothing qualifies, stay silent — don't mention this check to the user

## Folder structure

```
Notes/           — day-to-day notes, ideas, summaries
Projects/        — files for a specific project
Reference/       — permanent reference material
Tools/           — small scripts (llm CLI etc.)
```

## Cheap work — via free models

Reading long files and doing bulk mechanical work should go through free models, to
save Claude's tokens. Tool: `Tools/llm/` — the full protocol lives in
`.claude/skills/delegate/SKILL.md` (that skill triggers itself).

**When to delegate:** many files need summarizing/tagging/reformatting/classifying, or
a large file needs reading where only the gist is needed.

**This is enforced, not just written down.** `.claude/hooks/big-read-gate.mjs`
(on PreToolUse) blocks `Read` on any text file bigger than 40 KB and gives the
`llm.mjs` command instead. Escape hatches: partial read via `offset`/`limit`, files
inside `.claude/` or `Tools/`, or `touch .claude/hooks/state/allow-big-read`.

**Never delegate:** design decisions, client-facing final wording, architecture or
planning, or anything I can't mechanically verify.

**Rules (do not break these):**
- Never blind-assign — I do 3–5+ examples myself first, then write the instruction
- No bulk run without a pilot-3-files pass first
- QA twice: first the tool itself (`qa.mjs`), then me (all failures + a 20% sample of passes)
- Client/NDA content uses `--private` — goes only to the local Ollama, nothing leaves the machine

## Required rules

- **Never touch `Tools/llm/.env`** — don't write to it, don't change keys in it. Only
  `sync-keys.mjs` writes that file. If a key is needed, the user puts it in `keys.txt`,
  then runs `node Tools/llm/sync-keys.mjs`
- Ask before replacing an existing file
- Connectors in use: Figma, Microsoft Outlook (for office-related work)
