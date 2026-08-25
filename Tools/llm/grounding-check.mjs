#!/usr/bin/env node
/**
 * Grounding check — kya output mein ginwaye gaye terms us text mein hain jo model ne DEKHA?
 *
 * Semantic QA se sasta (koi model nahi) aur zyada qabil-e-bharosa. 24 Aug 2026 ko isi ne
 * pakra ke triage ne `loadManifest`/`maxSize`/`usePixiApp` gharh liye the — wo kahin maujood
 * nahi the. Semantic QA ne yeh nahi pakra tha (usne ulti ghaltiyan nikalin).
 *
 * usage: node Tools/llm/grounding-check.mjs Tools/llm/jobs/<job>
 *   <job>/out/  = model ke natije   <job>/all-digest/ = jo usne dekha
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const J = process.argv[2];
if (!J) { console.error("usage: node Tools/llm/grounding-check.mjs <job-dir>"); process.exit(1); }
// CONCRETE line se technical terms nikalo: CamelCase, snake_case, ticked, dotted API names
const TERM = /`[^`]+`|\b[A-Z][a-z]+[A-Z][A-Za-z]+\b|\b[a-z]+[A-Z][A-Za-z]+\b|\b[a-z]+[-_][a-z]+(?:[-_][a-z]+)*\b|\b[A-Za-z]+\.[a-z]{2,}\b/g;
const STOP = new Set(['state-machine','design-system','reduced-motion','use-when','non-obvious','well-known','ready-to-use','step-by-step','real-world','built-in','light-dark','out-of','look-up','cross-platform','open-source','high-level','two-way','drop-in','so-called','e.g','i.e']);
const rows = [];
for (const f of readdirSync(join(J, 'out')).filter(x => x.endsWith('.md') && !x.startsWith('_'))) {
  const t = readFileSync(join(J, 'out', f), 'utf8');
    const c = (t.match(/^CONCRETE:\s*(.+)$/m) || [])[1] || '';
  const dig = join(J, 'all-digest', f);
  if (!existsSync(dig)) continue;
  const src = readFileSync(dig, 'utf8').toLowerCase();
  const terms = [...new Set((c.match(TERM) || []).map(x => x.replace(/`/g, '').trim()).filter(x => x.length > 3 && !STOP.has(x.toLowerCase())))];
  const missing = terms.filter(x => !src.includes(x.toLowerCase()));
  if (terms.length) rows.push({ f: f.replace('.md',''), n: terms.length, miss: missing });
}
rows.sort((a, b) => (b.miss.length / b.n) - (a.miss.length / a.n));
let clean = 0;
for (const r of rows) {
  if (!r.miss.length) { clean++; continue; }
  console.log(`  ${r.f.padEnd(34)} ${r.miss.length}/${r.n} ghayab: ${r.miss.slice(0,4).join(', ')}`);
}
console.log(`\n${rows.length} core skills checked | ${clean} bilkul grounded | ${rows.length - clean} mein kuch term digest mein nahi mila`);
