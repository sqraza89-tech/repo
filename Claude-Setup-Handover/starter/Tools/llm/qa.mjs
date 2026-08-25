#!/usr/bin/env node
/**
 * qa.mjs — Phase 5 ka pehla hissa: model ke apne output ki janch.
 *
 * Do tarah ke check:
 *   1. LOCAL (muft, foran)  — format, lambai, must/must-not, dohrav. Yeh pehle chalte
 *      hain kyunki inhe model ki zaroorat hi nahi.
 *   2. SEMANTIC (--semantic) — free model source ke against output ko parakhta hai.
 *
 * Aakhir mein `_qa-review.md` banti hai: SAARE failures + pass wale ka random
 * sample. Wo file Claude khud parhta hai — yehi "main upar se QA karunga" hai.
 *
 *   node qa.mjs --out <dir> --rubric <rubric.json> [--src <dir>] [--semantic]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, basename, extname } from 'node:path';
import { complete } from './llm.mjs';

const argv = process.argv.slice(2);
const arg = (n, d = null) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const has = (n) => argv.includes(n);

const outDir = arg('--out'), rubricFile = arg('--rubric'), srcDir = arg('--src');
if (!outDir || !rubricFile) { console.error('chahiye: --out <dir> --rubric <rubric.json>'); process.exit(1); }

// Notepad/PowerShell UTF-8 files pe BOM laga deta hai — JSON.parse usse phatt jata hai
const read = (p) => readFileSync(p, 'utf8').replace(/^﻿/, '');

const R = JSON.parse(read(rubricFile));
const C = R.checks ?? {};
const samplePct = R.samplePercent ?? 20;

const files = readdirSync(resolve(outDir))
  .filter((f) => extname(f) === '.md' && !f.startsWith('_'))
  .map((f) => join(resolve(outDir), f));

/** Ek line se zyada baar dohrayi gayi lines ka hissa — model loop mein phans jaye to pakadta hai. */
function repeatRatio(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l.length > 25);
  if (lines.length < 4) return 0;
  const seen = new Map();
  for (const l of lines) seen.set(l, (seen.get(l) ?? 0) + 1);
  const dupes = [...seen.values()].filter((n) => n > 1).reduce((a, n) => a + n - 1, 0);
  return dupes / lines.length;
}

function localChecks(text) {
  const bad = [];
  if (C.minChars && text.length < C.minChars) bad.push(`bohot chhota (${text.length} < ${C.minChars})`);
  if (C.maxChars && text.length > C.maxChars) bad.push(`bohot bada (${text.length} > ${C.maxChars})`);
  if (C.requireFrontmatter && !/^---\r?\n[\s\S]*?\r?\n---/.test(text)) bad.push('frontmatter nadarad');
  for (const rx of C.mustMatch ?? []) if (!new RegExp(rx, 'm').test(text)) bad.push(`nahi mila: /${rx}/`);
  for (const rx of C.mustNotMatch ?? []) if (new RegExp(rx, 'im').test(text)) bad.push(`mana hua mila: /${rx}/`);
  const rr = repeatRatio(text);
  if (C.maxRepeatRatio != null && rr > C.maxRepeatRatio) bad.push(`dohrav ${(rr * 100).toFixed(0)}% (hadd ${(C.maxRepeatRatio * 100).toFixed(0)}%)`);
  return bad;
}

const results = [];
for (const f of files) {
  const text = read(f);
  results.push({ file: basename(f), path: f, chars: text.length, local: localChecks(text), semantic: null });
}

// ── semantic pass (optional) ─────────────────────────────────────────────────
if (has('--semantic') && R.semantic) {
  const passing = results.filter((r) => !r.local.length);
  console.error(`semantic check: ${passing.length} files…`);
  for (const r of passing) {
    const out = read(r.path);
    let src = '';
    if (srcDir) {
      const cand = readdirSync(resolve(srcDir)).find((f) => basename(f, extname(f)) === basename(r.file, '.md'));
      if (cand) src = read(join(resolve(srcDir), cand));
    }
    const prompt = `Tum ek QA checker ho. Neeche ek OUTPUT hai${src ? ' aur uska SOURCE' : ''}.\n` +
      `Kasauti: ${R.semantic}\n\n` +
      `Sirf itna jawab do: pehli line "PASS" ya "FAIL". Agar FAIL to agli lines mein 1-3 bullet ` +
      `mein wajah likho. Koi aur baat nahi.`;
    const body = src ? `=== SOURCE ===\n${src}\n\n=== OUTPUT ===\n${out}` : `=== OUTPUT ===\n${out}`;
    try {
      // maxOut 300 par gpt-oss ke reasoning tokens hi poora budget kha jate the aur jawab
      // khaali aata tha. 1200 rakha hai; tier quality taake bara model chune.
      const res = await complete(prompt, body, { tier: 'quality', maxOut: 1200, private: has('--private') });
      const verdict = res.text.trim();
      r.semantic = /^\s*PASS/i.test(verdict) ? 'PASS' : verdict.slice(0, 400);
    } catch (e) {
      r.semantic = `CHECK-FAILED: ${e.message.slice(0, 120)}`;
    }
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const failed = results.filter((r) => r.local.length || (r.semantic && r.semantic !== 'PASS'));
const passed = results.filter((r) => !failed.includes(r));

// Claude ke haath se dekhne ke liye: saare fail + pass ka random sample
const n = Math.max(1, Math.ceil((passed.length * samplePct) / 100));
const shuffled = [...passed].sort(() => Math.random() - 0.5);
const sample = shuffled.slice(0, Math.min(n, passed.length));

writeFileSync(join(resolve(outDir), '_qa-report.json'),
  JSON.stringify({ when: new Date().toISOString(), rubric: R.name ?? basename(rubricFile), total: results.length, passed: passed.length, failed: failed.length, results }, null, 2));

const md = [
  `# QA review — ${R.name ?? basename(rubricFile)}`,
  ``,
  `${results.length} files · **${passed.length} pass** · **${failed.length} fail** · sample ${samplePct}%`,
  ``,
  `> Yeh file Claude khud parhe. Fail wale sab, aur pass wale ka sample.`,
  ``,
  `## Fail (${failed.length}) — sab dekhne hain`,
  ...(failed.length ? failed.map((r) => `- [ ] **${r.file}** — ${[...r.local, r.semantic && r.semantic !== 'PASS' ? r.semantic.replace(/\n+/g, ' ') : null].filter(Boolean).join(' · ')}`) : ['_koi nahi_']),
  ``,
  `## Pass ka random sample (${sample.length}/${passed.length}) — hath se parhne hain`,
  ...(sample.length ? sample.map((r) => `- [ ] **${r.file}** (${r.chars} chars)`) : ['_koi nahi_']),
  ``,
].join('\n');
writeFileSync(join(resolve(outDir), '_qa-review.md'), md, 'utf8');

console.error(`\n${results.length} files · ${passed.length} pass · ${failed.length} fail`);
for (const r of failed.slice(0, 15)) console.error(`  ✗ ${r.file} — ${[...r.local, r.semantic !== 'PASS' ? r.semantic : ''].filter(Boolean).join(' · ').slice(0, 150)}`);
console.error(`\n→ ${join(outDir, '_qa-review.md')}  (Claude yeh parhega)`);
process.exit(failed.length ? 1 : 0);
