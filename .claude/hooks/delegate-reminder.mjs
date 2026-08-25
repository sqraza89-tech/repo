#!/usr/bin/env node
/**
 * UserPromptSubmit: free-model delegation ka reminder.
 *
 * Do darjay — taake "har turn" wala reminder saste mein pade:
 *   1. hamesha: ek line (~25 tokens)
 *   2. sirf jab prompt bulk kaam jaisa lage: delegate protocol ka khaka (~80 tokens)
 *
 * Yeh sirf yaad-dihani hai. Asal jabar `big-read-gate.mjs` karta hai.
 */

const ALWAYS =
  'Delegation: bulk/lambe kaam par pehle `node Tools/llm/llm.mjs` (free: groq/gemini/openrouter/ollama), khud sirf judgment aur QA par.';

const BULK_EXTRA = [
  'Yeh bulk kaam lagta hai — `delegate` skill ka gate lagao, shortcut nahi:',
  '1) golden 3-5 khud likho  2) pilot 3 pass  3) bulk (resumable)  4) `qa.mjs --semantic`  5) failures + pass ka 20% sample KHUD parho.',
  'Client/NDA content par `--private` (sirf local Ollama). Pilot pass hue baghair bulk nahi.',
].join('\n');

const BULK_RE =
  /\b(bulk|batch|summar\w*|classif\w*|reformat\w*|dedup\w*|extract\w*|transcript\w*|tarjum\w*|translate\w*|tag\s*karo|nichod)/i;
const MANY_RE =
  /\b(saari|saaray|saare|sari|all\s+(the\s+)?files|every\s+file|files|notes|summaries|har\s+file)\b/i;

let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let prompt = '';
try { prompt = JSON.parse(raw).prompt || ''; } catch { /* chalne do */ }

const context = BULK_RE.test(prompt) || MANY_RE.test(prompt)
  ? `${ALWAYS}\n${BULK_EXTRA}`
  : ALWAYS;

process.stdout.write(JSON.stringify({
  hookSpecificOutput: { hookEventName: 'UserPromptSubmit', additionalContext: context },
}));
