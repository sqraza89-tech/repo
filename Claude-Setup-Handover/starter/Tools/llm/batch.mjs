#!/usr/bin/env node
/**
 * batch.mjs — ek prompt, bohot saari files. Resumable.
 *
 * Jo output pehle se maujood hai wo skip ho jata hai, isliye beech mein ruk kar
 * dobara chalana bilkul mehfooz hai (yt-transcript/batch-transcripts.sh jaisa).
 *
 *   node batch.mjs --in <dir> --prompt <prompt.md> --out <dir>
 *   node batch.mjs --list files.txt --prompt p.md --out out/ --tier fast
 *
 *   --in <dir>       folder (recursive)          | --list <file>  ek path per line
 *   --ext .md        kaunsi files (default .md)  | --limit <n>    sirf pehli n files
 *   --out <dir>      natije yahan                | --force        maujood output dobara banao
 *   --prompt <file>  instruction file            | --dry          sirf batao, chalao mat
 *   --tier fast|quality   --private   --provider <id>   --max-out <n>
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, appendFileSync } from 'node:fs';
import { join, resolve, basename, extname, relative } from 'node:path';
import { complete, estTokens, read } from './llm.mjs';

const argv = process.argv.slice(2);
const arg = (n, d = null) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const has = (n) => argv.includes(n);

const opts = {
  in: arg('--in'), list: arg('--list'), out: arg('--out'),
  promptFile: arg('--prompt'), ext: arg('--ext', '.md'),
  limit: Number(arg('--limit', '0')), force: has('--force'), dry: has('--dry'),
  tier: arg('--tier', 'quality'), private: has('--private'),
  provider: arg('--provider'), maxOut: Number(arg('--max-out', '1500')),
};

if ((!opts.in && !opts.list) || !opts.out || !opts.promptFile) {
  console.error('chahiye: (--in <dir> ya --list <file>) --prompt <file> --out <dir>');
  process.exit(1);
}

function walk(dir, ext, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, ext, acc);
    else if (extname(name).toLowerCase() === ext) acc.push(p);
  }
  return acc;
}

const files = (opts.list
  ? read(opts.list).split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  : walk(resolve(opts.in), opts.ext)
).sort();

const todo = opts.limit ? files.slice(0, opts.limit) : files;
mkdirSync(resolve(opts.out), { recursive: true });

const prompt = read(opts.promptFile);
const logFile = join(resolve(opts.out), '_batch-log.tsv');
if (!existsSync(logFile)) appendFileSync(logFile, 'when\tfile\tprovider\tmodel\tchunks\tin_tok\tout_chars\tsecs\n');

const outPathFor = (f) => join(resolve(opts.out), `${basename(f, extname(f))}.md`);

const pending = todo.filter((f) => opts.force || !existsSync(outPathFor(f)));
console.error(`${todo.length} files · ${todo.length - pending.length} pehle se ho chuki · ${pending.length} baaqi`);
if (opts.dry) { pending.slice(0, 20).forEach((f) => console.error('  ' + relative(process.cwd(), f))); process.exit(0); }

let done = 0, failed = 0;
for (const f of pending) {
  const input = read(f);
  const t0 = Date.now();
  console.error(`\n[${done + failed + 1}/${pending.length}] ${basename(f)} (${(input.length / 1024).toFixed(0)} KB)`);
  try {
    const r = await complete(prompt, input, opts);
    writeFileSync(outPathFor(f), r.text, 'utf8');
    const secs = ((Date.now() - t0) / 1000).toFixed(1);
    appendFileSync(logFile, `${new Date().toISOString()}\t${basename(f)}\t${r.provider}\t${r.model}\t${r.chunks}\t${estTokens(input)}\t${r.text.length}\t${secs}\n`);
    done++;
  } catch (e) {
    console.error(`  ✗ ${e.message.slice(0, 200)}`);
    appendFileSync(logFile, `${new Date().toISOString()}\t${basename(f)}\tFAIL\t\t\t${estTokens(input)}\t0\t\n`);
    failed++;
  }
}

console.error(`\n${done} done, ${failed} fail. Log: ${logFile}`);
console.error(failed ? 'Fail wali files dobara chalane ke liye bas yehi command phir se chala dein.' : 'Ab QA chalayein: node qa.mjs --out <dir> --rubric <rubric.json>');
process.exit(failed && !done ? 1 : 0);
