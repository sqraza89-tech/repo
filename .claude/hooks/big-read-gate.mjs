#!/usr/bin/env node
/**
 * PreToolUse gate on Read.
 *
 * Bari files poori parhna context ka sab se bara zaaya hai — 780 KB ki ek transcript
 * ~200k tokens le jati hai jab ke usme se chahiye sirf 2 KB ka nichod. Yeh hook aisi
 * read ko rok kar free-model CLI (Tools/llm/) ki taraf bhejta hai.
 *
 * Node isliye (bash/grep nahi): vault ke path mein space hai aur tool_input JSON-escaped
 * Windows paths bhejta hai — grep/sed wahan tootta hai.
 *
 * Allow (escape hatches):
 *   - offset/limit set ho (partial read waise hi sasta hai)
 *   - path .claude/ ya Tools/ ke andar ho (apni hi config aur code)
 *   - .claude/hooks/state/allow-big-read marker maujood ho (manual bypass)
 */
import { statSync, existsSync } from 'node:fs';
import { join, extname, sep } from 'node:path';

const LIMIT_BYTES = 40 * 1024;
const GATED_EXT = new Set(['.md', '.txt', '.csv', '.json', '.vtt', '.log', '.srt', '.tsv', '.xml', '.html']);

const allow = () => process.exit(0);

const deny = (reason) => {
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: reason,
    },
  }));
  process.exit(0);
};

let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let input;
try { input = JSON.parse(raw); } catch { allow(); }          // parse na ho to raasta na roko
if (input.tool_name !== 'Read') allow();

const ti = input.tool_input || {};
const filePath = ti.file_path;
if (typeof filePath !== 'string' || !filePath) allow();

// partial read pehle se sasta hai
if (ti.offset != null || ti.limit != null) allow();

// apni config/code — inhe parhna hi kaam hai
const norm = filePath.split(sep).join('/');
if (/(^|\/)\.claude\//.test(norm) || /(^|\/)Tools\//.test(norm) || /(^|\/)\.agents\//.test(norm)) allow();

const projectDir = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
if (existsSync(join(projectDir, '.claude', 'hooks', 'state', 'allow-big-read'))) allow();

if (!GATED_EXT.has(extname(filePath).toLowerCase())) allow();

let size;
try { size = statSync(filePath).size; } catch { allow(); }    // file hi nahi to Read khud error dega
if (size <= LIMIT_BYTES) allow();

const kb = Math.round(size / 1024);
const ktok = Math.round(size / 4 / 1000);
deny(
  `Yeh file ${kb} KB hai (~${ktok}k tokens) — poori mat parho. Free model se nichod nikalo:\n` +
  `  node Tools/llm/llm.mjs -p "<jo chahiye>" -f "${filePath}"\n` +
  `Sirf ek hissa chahiye to Read dobara chalao \`offset\`/\`limit\` ke sath. ` +
  `Client/NDA content ho to \`--private\` lagao. ` +
  `Waqai poori chahiye (bahut kam soorat) to: touch .claude/hooks/state/allow-big-read`
);
