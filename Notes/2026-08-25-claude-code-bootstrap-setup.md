---
date: 2026-08-25
tags: [claude-code, setup, bootstrap, hooks, git, delegation]
---

# Claude Code bootstrap setup — C:\Claude-Projects

## Context
- Ran the bootstrap from `Claude-Setup-Handover/BOOTSTRAP-PROMPT.md` to set up this vault as a Claude Code project.
- Answers given: project = notes/knowledge vault, English, git + private GitHub remote, auto-note hook = yes, all 4 API key providers, connectors = Figma + MS Outlook.

## Decisions
- Kept `Projects/NEPRA Follow-Up Letters/` (87 xLoop client letters) and its `Notes/2026-08-25-nepra-followup-letters-project.md` in the repo and pushed to GitHub — user confirmed this is fine even though it's client content, since the GitHub remote is private.
- Node.js path issue: even after restarting Claude Code, `node` was not resolvable on PATH inside Claude Code's own hook-execution shell (Windows PATH propagation lag). Fixed by hardcoding the full path (`C:\Program Files\nodejs\node.exe`) into the `node`-based hook commands in `.claude/settings.local.json` (`big-read-gate.mjs`, `delegate-reminder.mjs`) instead of relying on bare `node`. The bash-based hooks (`auto-note-check.sh`, `auto-commit.sh`) worked fine without this fix.

## What's done
- `CLAUDE.md`, `.claude/` (hooks + delegate skill), `Tools/` (llm delegation scripts) copied in from `Claude-Setup-Handover/starter/`
- `.gitignore` created (keys.txt/.env excluded, plus Office lock files `~$*`)
- git repo initialized, remote `origin` = `https://github.com/sqraza89-tech/repo.git`, pushed to `main`
- API keys synced: Groq (2 keys), Gemini (2 keys), OpenRouter (1 key) — all healthy per `llm.mjs --health`
- Ollama not installed (optional, user can add later: `ollama pull qwen3:8b`)
- Figma MCP connector confirmed working (tools loaded mid-session)

## Next steps
- [ ] User to restart Claude Code once more so the hardcoded node-path fix in `.claude/settings.local.json` takes effect
- [ ] Re-verify `big-read-gate.mjs` actually blocks a >40KB Read after that restart
- [ ] Confirm MS Outlook connector (mentioned as wanted, not yet verified working)
- [ ] Optional: install Ollama if offline/private delegation is needed later
