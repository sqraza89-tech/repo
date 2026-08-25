#!/usr/bin/env node
/**
 * sync-keys.mjs — keys.txt (insaan ke liye)  ->  .env (machine ke liye)
 *
 * HARD RULE: is repo mein sirf YEHI script `.env` likhti hai. Claude ya koi aur
 * tool `.env` ko hath nahi lagata. Key badalni ho to keys.txt edit karein aur
 * yeh script chala dein.
 *
 * Safety: keys.txt mein value khaali ho to `.env` ki purani value bilkul waise
 * hi rehti hai — galti se koi key mit nahi sakti.
 *
 *   node sync-keys.mjs          # sync karo
 *   node sync-keys.mjs --check  # sirf batao kya hoga, likho mat
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const KEYS_TXT = join(HERE, 'keys.txt');
const ENV_FILE = join(HERE, '.env');

// keys.txt ka label  ->  .env ka variable. Match lowercase substring pe hota hai
// taake user label thoda idhar-udhar likh de to bhi chale.
// prefix ek list hai — Google do format deta hai (purana "AIza", naya "AQ.")
const MAP = [
  { match: 'groq',       env: 'GROQ_API_KEY',       prefix: ['gsk_'],           label: 'Groq' },
  { match: 'gemini',     env: 'GEMINI_API_KEY',     prefix: ['AIza', 'AQ.'],    label: 'Google Gemini' },
  { match: 'openrouter', env: 'OPENROUTER_API_KEY', prefix: ['sk-or-'],         label: 'OpenRouter' },
];

// Notepad UTF-8 pe BOM chipka deta hai — usay utaar do warna pehla label match nahi hota
const read = (p) => readFileSync(p, 'utf8').replace(/^﻿/, '');
const mask = (v) => (!v ? '' : v.length <= 10 ? '*'.repeat(v.length) : `${v.slice(0, 6)}…${v.slice(-4)} (${v.length} chars)`);

/** keys.txt se sirf asli "Label = value" lines nikalo, headings/notes chhod do. */
function parseKeysTxt(text) {
  const found = {};
  // Notepad word-wrap se label aur "=value" alag lines par aa jate hain. Pehle unhe jorho,
  // warna key chup chaap chhoot jati hai (24 Aug: do keys isi wajah se miss hui thin).
  const src = text.split(String.fromCharCode(10)).map((x) => x.replace(String.fromCharCode(13), ""));
  const raws = [];
  for (let k = 0; k < src.length; k++) {
    const cur = src[k], next = src[k + 1];
    if (cur && !cur.includes("=") && /[a-z]/i.test(cur) && next && next.trim().startsWith("=")) {
      raws.push(cur.trim() + " " + next.trim());   // agli line par tha, jor diya
      k++;
    } else raws.push(cur);
  }
  for (const raw of raws) {
    const line = raw.trim();
    if (!line || /^[#*=\-]/.test(line)) continue;   // comment / separator / bullet
    const eq = line.indexOf('=');
    if (eq < 1) continue;
    const label = line.slice(0, eq).trim().toLowerCase();
    if (!/[a-z]/.test(label)) continue;             // "====" jaisi line nahi
    const value = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    const hit = MAP.find((m) => label.includes(m.match));
    // Ek provider ki kai keys ho sakti hain: wohi label dobara likh dein, ya "... 2".
    // Har key ka apna rozana budget hai, is liye ziyada keys = ziyada kaam.
    // 20 chars se chhoti value asli API key nahi hoti — misal/placeholder hogi
    if (hit && value.length >= 20) (found[hit.env] ??= []).push(value);
  }
  return found;
}

function parseEnv(text) {
  const out = {};
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 1) continue;
    out[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
  }
  return out;
}

// Ek provider ki saari keys: NAME, NAME_2, NAME_3 ...
function envKeysFor(base, env) {
  const out = [];
  for (let i = 1; i <= 20; i++) {
    const v = (env[i === 1 ? base : base + "_" + i] ?? "").trim();
    if (v) out.push(v);
  }
  return out;
}

function writeKeys(base, keys, target) {
  for (let i = 1; i <= 20; i++) delete target[i === 1 ? base : base + "_" + i];
  keys.forEach((v, i) => { target[i === 0 ? base : base + "_" + (i + 1)] = v; });
}

const checkOnly = process.argv.includes('--check');

if (!existsSync(KEYS_TXT)) {
  console.error(`keys.txt nahi mili: ${KEYS_TXT}`);
  process.exit(1);
}

const fromTxt = parseKeysTxt(read(KEYS_TXT));
const existing = existsSync(ENV_FILE) ? parseEnv(read(ENV_FILE)) : {};

const merged = { ...existing };
const report = [];

for (const m of MAP) {
  const incoming = (fromTxt[m.env] ?? []).map((v) => v.trim()).filter(Boolean);
  const current = envKeysFor(m.env, existing);

  if (!incoming.length && !current.length) {
    report.push({ label: m.label, action: "khaali", detail: "keys.txt mein daalna baaqi hai" });
  } else if (!incoming.length) {
    // SAFETY: khaali keys.txt purani keys ko kabhi nahi mitati
    writeKeys(m.env, current, merged);
    report.push({ label: m.label, action: "rakhi gayi", detail: current.map(mask).join(", ") });
  } else {
    const same = incoming.length === current.length && incoming.every((v, i) => v === current[i]);
    writeKeys(m.env, incoming, merged);
    const bad = incoming.filter((v) => !m.prefix?.some((x) => v.startsWith(x)));
    const warn = bad.length ? ("  ⚠ " + bad.length + " key ghalat prefix") : "";
    report.push({
      label: m.label,
      action: same ? "pehle jaisi" : (current.length ? "update" : "nayi"),
      detail: incoming.length + (incoming.length > 1 ? " keys: " : " key: ") + incoming.map(mask).join(", ") + warn,
    });
  }
}

const body =
  `# Yeh file sync-keys.mjs ne banayi hai — hath se edit na karein.\n` +
  `# Keys badalni hon to keys.txt edit karein, phir: node sync-keys.mjs\n` +
  `# Aakhri sync: ${new Date().toISOString()}\n\n` +
  MAP.flatMap((m) => envKeysFor(m.env, merged).map((v, k) => (k === 0 ? m.env : m.env + '_' + (k + 1)) + '=' + v)).join('\n') + '\n';

if (!checkOnly) {
  if (existsSync(ENV_FILE)) copyFileSync(ENV_FILE, `${ENV_FILE}.bak`);  // ek purani copy hamesha bachi rahe
  writeFileSync(ENV_FILE, body, 'utf8');
}

console.log(checkOnly ? '— check (kuch likha nahi gaya) —' : '— keys sync —');
for (const r of report) console.log(`  ${r.label.padEnd(16)} ${r.action.padEnd(12)} ${r.detail}`);

const ready = MAP.filter((m) => envKeysFor(m.env, merged).length).length;
console.log(`\n${ready}/${MAP.length} cloud providers ready. Ollama ko key ki zaroorat nahi.`);
if (!ready) console.log('Kam se kam Groq ki key daal dein — https://console.groq.com');
