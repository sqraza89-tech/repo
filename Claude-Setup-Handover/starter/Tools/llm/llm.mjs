#!/usr/bin/env node
/**
 * llm.mjs — ek CLI, chaar free providers, cloud pehle aur local sab se aakhir.
 *
 * Ladder:  groq -> gemini -> openrouter -> ollama
 * Bada input ho to gemini upar aa jata hai (1M context, chunking ki zaroorat nahi).
 * --private ho to sirf ollama (koi network call bahar nahi jati).
 *
 * Zero dependencies — Node 18+ ka built-in fetch use hota hai.
 *
 *   node llm.mjs --health
 *   node llm.mjs -p "3 bullets mein summary" -f bada-file.md
 *   node llm.mjs -p "tags nikalo" -f note.md --private
 *   Get-Content file.md | node llm.mjs -p "summarize"
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ENV_FILE = join(HERE, '.env');

// Notepad aur PowerShell UTF-8 files pe BOM chipka dete hain — usay hamesha utaar do
export const read = (p) => readFileSync(p, 'utf8').replace(/^﻿/, '');

// ── env ──────────────────────────────────────────────────────────────────────
// .env sirf sync-keys.mjs banata hai. Yahan sirf padha jata hai.
export function loadEnv() {
  const env = { ...process.env };
  if (!existsSync(ENV_FILE)) return env;
  for (const raw of read(ENV_FILE).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 1) continue;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim();
    if (v && !env[k]) env[k] = v;
  }
  return env;
}

// ── providers ────────────────────────────────────────────────────────────────
// perCall = ek request mein kitne input tokens (TPM limit se thoda kam rakha hai)
// perDay  = poore din ka token budget (TPD). Is se bada kaam ho to provider skip.
export const PROVIDERS = {
  groq: {
    label: 'Groq', kind: 'openai', envKey: 'GROQ_API_KEY', rpm: 30,
    base: 'https://api.groq.com/openai/v1',
    // 20 Aug 2026: Groq ne llama-3.3-70b-versatile aur llama-3.1-8b-instant dono hata diye.
    // Live discovery ne khud sambhal liya tha; defaults ab jo asal mein maujood hai wohi.
    models: { quality: 'openai/gpt-oss-120b', fast: 'openai/gpt-oss-20b' },
    // Groq ki list mein chat ke ilawa speech/classifier models bhi hain — unhe bahar rakho,
    // warna `fast` galti se gpt-oss-safeguard (safety classifier) par chala jata hai.
    skip:   [/whisper/, /orpheus/, /prompt-guard/, /safeguard/],
    pick:   { quality: [/gpt-oss-120b/, /qwen3\.6-27b/, /70b/, /120b/], fast: [/gpt-oss-20b/, /27b/, /20b/, /8b/] },
    // gpt-oss ki hadd 8K TPM hai, aur output bhi usi minute mein ginta hai — is liye
    // perCall 3500 (3500 in + 4000 out ≈ 7.5K, 8K se neeche).
    tpm: 8000,
    perCall: { quality: 3500, fast: 3500 },
    perDay:  { quality: 200000, fast: 200000 },
  },
  gemini: {
    label: 'Google Gemini', kind: 'gemini', envKey: 'GEMINI_API_KEY', rpm: 60,
    base: 'https://generativelanguage.googleapis.com/v1beta',
    models: { quality: 'gemini-flash-latest', fast: 'gemini-flash-lite-latest' },
    pick:   { quality: [/flash-latest$/, /flash$/, /flash/], fast: [/flash-lite/, /flash/] },
    perCall: { quality: 700000, fast: 700000 },
    perDay:  { quality: 4000000, fast: 4000000 },
  },
  openrouter: {
    label: 'OpenRouter', kind: 'openai', envKey: 'OPENROUTER_API_KEY', rpm: 20,
    base: 'https://openrouter.ai/api/v1',
    models: { quality: null, fast: null },   // hamesha live list se chunte hain
    // SAFETY: OpenRouter ki list mein paid aur free dono hote hain aur naam sirf ":free"
    // se alag hote hain. `only` list ko pehle hi chaan deta hai taake paid model galti se
    // kabhi na chune jaye. cohere bahar — uski free terms non-commercial hain.
    only:   [/:free$/],
    skip:   [/^cohere\//],
    pick:   { quality: [/nemotron-3-ultra/, /nemotron-3-super/, /gemma-4-31b/, /gpt-oss-20b/, /./],
              fast:    [/nemotron-3\.5-lightning/, /nemotron-3-nano-30b/, /gpt-oss-20b/, /./] },
    perCall: { quality: 200000, fast: 200000 },   // live context se aur kam ho sakta hai
    perDay:  { quality: 500000, fast: 500000 },   // free tier 50 requests/din
  },
  ollama: {
    label: 'Ollama (local)', kind: 'ollama', envKey: null, rpm: 600, local: true,
    base: 'http://127.0.0.1:11434',
    models: { quality: 'qwen3:8b', fast: 'qwen3:8b' },
    pick:   { quality: [/qwen3/, /llama3/, /mistral/, /./], fast: [/qwen3/, /llama3/, /./] },
    perCall: { quality: 6000, fast: 6000 },
    perDay:  { quality: Infinity, fast: Infinity },
  },
};

const ORDER = ['groq', 'gemini', 'openrouter', 'ollama'];

// ── helpers ──────────────────────────────────────────────────────────────────
export const estTokens = (s) => Math.ceil((s || '').length / 4);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => process.stderr.write(a.join(' ') + '\n');

async function fetchRetry(url, init, { tries = 3, label = '' } = {}) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, init);
      if (res.status === 429 || res.status >= 500) {
        const ra = Number(res.headers.get('retry-after'));
        const wait = Number.isFinite(ra) && ra > 0 ? ra * 1000 : 1500 * 2 ** i;
        // Lamba retry-after = rate limit nahi, budget khatam. Yahan sona bekaar hai —
        // foran throw karo taake upar callOnce agli API key par ja sake.
        const LONG_WAIT = 60_000;
        if (wait >= LONG_WAIT) {
          const b = await res.text().catch(() => "");
          throw new Error(label + " HTTP 429 budget khatam (retry-after " + Math.round(wait / 1000) + "s) " + b.slice(0, 120));
        }
        const body = await res.text().catch(() => '');
        lastErr = new Error(`${label} HTTP ${res.status} ${body.slice(0, 200)}`);
        if (i < tries - 1) { log(`   ↻ ${label} ${res.status}, ${Math.round(wait / 1000)}s baad dobara`); await sleep(wait); continue; }
        throw lastErr;
      }
      if (!res.ok) throw new Error(`${label} HTTP ${res.status} ${(await res.text().catch(() => '')).slice(0, 300)}`);
      return res;
    } catch (e) {
      lastErr = e;
      if (i === tries - 1) throw lastErr;
      await sleep(1000 * 2 ** i);
    }
  }
  throw lastErr;
}

// ── model discovery ──────────────────────────────────────────────────────────
// Free providers apne model names bina bataye badal dete hain, isliye har run
// mein live list se naam chunte hain — hardcoded naam sirf pehli koshish hai.
const modelCache = new Map();
const ctxCache = new Map();                       // "provider:model" -> context window

export const modelCtx = (id, model) => ctxCache.get(`${id}:${model}`) ?? null;

export async function listModels(id, env) {
  if (modelCache.has(id)) return modelCache.get(id);
  const p = PROVIDERS[id];
  const key = p.envKey ? env[p.envKey] : null;
  let out = [];
  const note = (name, ctx) => { if (ctx) ctxCache.set(`${id}:${name}`, ctx); return name; };
  try {
    if (p.kind === 'ollama') {
      const r = await fetchRetry(`${p.base}/api/tags`, {}, { tries: 1, label: id });
      out = (await r.json()).models?.map((m) => m.name) ?? [];
    } else if (p.kind === 'gemini') {
      const r = await fetchRetry(`${p.base}/models?key=${key}&pageSize=200`, {}, { tries: 1, label: id });
      out = ((await r.json()).models ?? [])
        .filter((m) => (m.supportedGenerationMethods ?? []).includes('generateContent'))
        .map((m) => note(m.name.replace(/^models\//, ''), m.inputTokenLimit));
    } else {
      const r = await fetchRetry(`${p.base}/models`, { headers: { Authorization: `Bearer ${key}` } }, { tries: 1, label: id });
      out = ((await r.json()).data ?? []).map((m) => note(m.id, m.context_length ?? m.context_window));
    }
  } catch { out = []; }
  if (p.only) out = out.filter((m) => p.only.some((rx) => rx.test(m)));
  if (p.skip) out = out.filter((m) => !p.skip.some((rx) => rx.test(m)));
  modelCache.set(id, out);
  return out;
}

async function resolveModel(id, tier, env) {
  const p = PROVIDERS[id];
  const live = await listModels(id, env);
  const want = p.models[tier];
  if (want && (live.length === 0 || live.includes(want))) return want;
  for (const rx of p.pick[tier] ?? []) {
    const hit = live.find((m) => rx.test(m));
    if (hit) return hit;
  }
  return want || live[0] || null;
}

// ── multi-key ─────────────────────────────────────────────────
// Har provider ki ek se zyada key ho sakti hai: GROQ_API_KEY, GROQ_API_KEY_2, ...
// Har key ka apna rozana budget hai, is liye ek khatam ho to agli par chale jao.
export function keysFor(p, env) {
  if (!p.envKey) return [null];                        // ollama ko key nahi chahiye
  const out = [];
  for (let i = 1; i <= 20; i++) {
    const name = i === 1 ? p.envKey : p.envKey + "_" + i;
    const v = (env[name] ?? "").trim();
    if (v) out.push(v);
  }
  return out;
}

const keyCursor = {};                                  // provider -> abhi kaunsi key par hain

// 429 jo retries ke baad bhi qaim rahe = rate limit nahi, budget khatam. Key badlo.
const isQuotaError = (e) => /HTTP 429|quota|rate.?limit|insufficient/i.test(String(e?.message ?? ""));

async function callOnce(id, model, system, user, env, maxOut) {
  const p = PROVIDERS[id];
  const keys = keysFor(p, env);
  if (!keys.length) throw new Error(id + ": koi key nahi");
  let start = keyCursor[id] ?? 0;
  if (start >= keys.length) start = keyCursor[id] = 0;  // sab try ho chukin, phir se shuru
  let lastErr;
  for (let i = start; i < keys.length; i++) {
    try {
      const out = await callWithKey(id, model, system, user, env, maxOut, keys[i]);
      keyCursor[id] = i;                                // jo chali usi par tike raho
      return out;
    } catch (e) {
      lastErr = e;
      if (!isQuotaError(e) || i + 1 >= keys.length) throw e;
      keyCursor[id] = i + 1;
      log("   ⇄ " + id + " key " + (i + 1) + "/" + keys.length + " ka budget khatam — key " + (i + 2) + " par ja raha hoon");
    }
  }
  throw lastErr;
}

// ── one call ─────────────────────────────────────────────────────────────────
// Ek call, ek makhsoos key ke sath. Rotation upar callOnce mein hoti hai.
async function callWithKey(id, model, system, user, env, maxOut, key) {
  const p = PROVIDERS[id];

  if (p.kind === 'gemini') {
    const url = `${p.base}/models/${model}:generateContent?key=${key}`;
    const r = await fetchRetry(url, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: user }] }],
        generationConfig: {
          maxOutputTokens: maxOut, temperature: 0.2,
          // Gemini ke "thinking" tokens bhi isi budget se khaate hain — mechanical kaam
          // pe unhe band rakho warna asal jawab beech mein kat jata hai
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    }, { label: id });
    const j = await r.json();
    const cand = j.candidates?.[0];
    const text = cand?.content?.parts?.map((x) => x.text).filter(Boolean).join('') ?? '';
    if (!text) throw new Error(`${id}: khaali jawab (${cand?.finishReason ?? 'reason?'})`);
    if (cand?.finishReason === 'MAX_TOKENS') throw new Error(`${id}: jawab kat gaya (MAX_TOKENS) — --max-out barhayein`);
    return text;
  }

  if (p.kind === 'ollama') {
    const r = await fetchRetry(`${p.base}/api/chat`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model, stream: false,
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
        options: { num_ctx: 8192, temperature: 0.2, num_predict: maxOut },
      }),
    }, { tries: 2, label: id });
    const j = await r.json();
    const text = j.message?.content ?? '';
    if (!text) throw new Error(`${id}: khaali jawab`);
    return text;
  }

  // openai-compatible: groq, openrouter
  const r = await fetchRetry(`${p.base}/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model, temperature: 0.2, max_tokens: maxOut,
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
    }),
  }, { label: id });
  const j = await r.json();
  const ch = j.choices?.[0];
  const text = ch?.message?.content ?? '';
  if (!text) throw new Error(`${id}: khaali jawab ${JSON.stringify(j).slice(0, 200)}`);
  // Chup chaap adhoora jawab sab se khatarnak hai — usay foran fail karo
  if (ch?.finish_reason === 'length') throw new Error(`${id}: jawab kat gaya (length) — --max-out barhayein`);
  return text;
}

// ── chunking (map-reduce) ────────────────────────────────────────────────────
export function chunk(text, budgetTokens) {
  if (!(budgetTokens > 0)) throw new Error(`chunk: budget ${budgetTokens} — 0 se bara hona chahiye`);
  const max = budgetTokens * 4;                       // tokens -> chars
  const paras = text.split(/\n{2,}/);
  const out = [];
  let buf = '';
  for (let para of paras) {
    // ek hi paragraph budget se bada ho to usay line-wise tod do
    while (para.length > max) {
      const cut = para.lastIndexOf('\n', max) > max * 0.5 ? para.lastIndexOf('\n', max) : max;
      if (buf) { out.push(buf); buf = ''; }
      out.push(para.slice(0, cut));
      para = para.slice(cut);
    }
    if (buf.length + para.length + 2 > max) { out.push(buf); buf = para; }
    else buf = buf ? `${buf}\n\n${para}` : para;
  }
  if (buf.trim()) out.push(buf);
  return out.filter((c) => c.trim());
}

// ── ladder ───────────────────────────────────────────────────────────────────
export function chooseLadder(inputTokens, { private: isPrivate, provider, tier = 'quality' } = {}, env = {}) {
  if (isPrivate) return ['ollama'];
  if (provider) return [provider];

  let ladder = ORDER.filter((id) => {
    const p = PROVIDERS[id];
    if (p.local) return true;                              // ollama ko key nahi chahiye
    if (!env[p.envKey]) return false;                      // key hi nahi to skip
    if (inputTokens > p.perDay[tier]) return false;        // poore din ka budget hi kam hai
    return true;
  });

  // Bada input: jo provider ek hi shot mein nigal le, wo upar
  const oneShot = ladder.filter((id) => inputTokens <= PROVIDERS[id].perCall[tier] && !PROVIDERS[id].local);
  if (inputTokens > (PROVIDERS.groq.perCall[tier] ?? 0) && oneShot.length) {
    ladder = [...oneShot, ...ladder.filter((id) => !oneShot.includes(id))];
  }
  if (!ladder.length) ladder = ['ollama'];
  return ladder;
}

// ── main entry ───────────────────────────────────────────────────────────────
export async function complete(promptText, inputText = '', opts = {}) {
  const env = opts.env ?? loadEnv();
  const tier = opts.tier ?? 'quality';
  const maxOut = opts.maxOut ?? 1500;
  const inTok = estTokens(inputText) + estTokens(promptText);
  const ladder = chooseLadder(inTok, { ...opts, tier }, env);

  log(`· input ~${inTok.toLocaleString()} tokens · ladder: ${ladder.join(' → ')}`);

  const errors = [];
  for (const id of ladder) {
    const p = PROVIDERS[id];
    try {
      const model = await resolveModel(id, tier, env);
      if (!model) throw new Error(`${id}: koi model nahi mila`);

      // configured hadd, magar model ka asli context window us se chhota ho to wo chalega
      const live = modelCtx(id, model);
      const cap = live ? Math.min(p.perCall[tier], Math.floor(live * 0.7)) : p.perCall[tier];
      // Output ke liye cap ka 40% se zyada nahi rakhte — warna chhote per-call budget wale
      // providers pe (jaise Groq 3500) input ka budget negative ho jata tha.
      const reserve = Math.max(256, Math.min(maxOut, Math.floor(cap * 0.4)));
      const budget = cap - estTokens(promptText) - reserve;
      if (budget < 200) throw new Error(`${id}: per-call budget bohot kam (cap ${cap}, prompt ${estTokens(promptText)})`);
      const parts = estTokens(inputText) <= budget ? [inputText] : chunk(inputText, budget);
      // Pacing: sirf requests-per-minute kaafi nahi. Groq jaison ki asal hadd tokens-per-minute
      // hai — har call ~5K tokens leti hai, to 2s ke gap se seedha 429 milta hai. Dono hadd
      // ka hisaab kar ke jo bari ho wohi lo.
      const perCallTokens = budget + reserve;
      const rpmGap = Math.ceil(60000 / p.rpm);
      const tpmGap = p.tpm ? Math.ceil((60000 * perCallTokens) / p.tpm) : 0;
      const gap = Math.max(rpmGap, tpmGap);
      const t0 = Date.now();

      if (parts.length === 1) {
        const text = await callOnce(id, model, promptText, inputText, env, reserve);
        log(`✓ ${p.label} · ${model} · ${((Date.now() - t0) / 1000).toFixed(1)}s`);
        return { text, provider: id, model, chunks: 1 };
      }

      // map
      log(`· ${p.label} · ${model} · ${parts.length} chunks (${p.perCall[tier].toLocaleString()} tok/call limit)`);
      const partials = [];
      for (let i = 0; i < parts.length; i++) {
        const sys = `${promptText}\n\nNOTE: yeh ek bade document ka hissa ${i + 1}/${parts.length} hai. Sirf is hisse ka kaam karo.`;
        partials.push(await callOnce(id, model, sys, parts[i], env, reserve));
        process.stderr.write(`\r   chunk ${i + 1}/${parts.length}`);
        if (i < parts.length - 1) await sleep(gap);
      }
      process.stderr.write('\n');

      // reduce (zaroorat pade to baar baar)
      let merged = partials.join('\n\n---\n\n');
      let round = 0;
      while (estTokens(merged) > budget && round++ < 4) {
        const groups = chunk(merged, budget);
        const next = [];
        for (const g of groups) {
          next.push(await callOnce(id, model,
            `${promptText}\n\nNOTE: neeche isi document ke hisson ke natije hain. Inko mila kar ek hi natija banao, dohrav hata do.`,
            g, env, reserve));
          await sleep(gap);
        }
        merged = next.join('\n\n');
      }
      const text = partials.length > 1
        ? await callOnce(id, model,
            `${promptText}\n\nNOTE: neeche isi document ke hisson ke natije hain. Inko mila kar ek hi saaf natija banao, dohrav hata do.`,
            merged, env, reserve)
        : merged;

      log(`✓ ${p.label} · ${model} · ${parts.length} chunks · ${((Date.now() - t0) / 1000).toFixed(1)}s`);
      return { text, provider: id, model, chunks: parts.length };
    } catch (e) {
      errors.push(`${id}: ${e.message}`);
      log(`✗ ${p.label} — ${e.message.slice(0, 160)}`);
    }
  }
  throw new Error(`Sab providers fail hue:\n  ${errors.join('\n  ')}`);
}

// ── health ───────────────────────────────────────────────────────────────────
async function health() {
  const env = loadEnv();
  console.log('Provider health (tez se aakhir tak)\n');
  for (const id of ORDER) {
    const p = PROVIDERS[id];
    const hasKey = p.local || Boolean(env[p.envKey]);
    if (!hasKey) { console.log(`  ✗ ${p.label.padEnd(16)} key nahi — keys.txt mein "${p.envKey}" wali line bharein`); continue; }
    const t0 = Date.now();
    const models = await listModels(id, env);
    const ms = Date.now() - t0;
    if (!models.length) {
      console.log(`  ✗ ${p.label.padEnd(16)} ${p.local ? 'chal nahi raha (Ollama install/start karein)' : 'reachable nahi ya key galat'}`);
      continue;
    }
    const q = await resolveModel(id, 'quality', env);
    const f = await resolveModel(id, 'fast', env);
    console.log(`  ✓ ${p.label.padEnd(16)} ${models.length} models · ${ms}ms`);
    console.log(`      quality: ${q}`);
    console.log(`      fast   : ${f}`);
  }
  console.log('\nOllama sab se aakhir chalta hai — sirf jab baaki fail hon, internet band ho, ya --private diya ho.');
}

// ── CLI ──────────────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const o = { tier: 'quality', maxOut: 4000 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--health') o.health = true;
    else if (a === '-p' || a === '--prompt') o.prompt = argv[++i];
    else if (a === '-f' || a === '--file') o.file = argv[++i];
    else if (a === '-o' || a === '--out') o.out = argv[++i];
    else if (a === '--private') o.private = true;
    else if (a === '--provider') o.provider = argv[++i];
    else if (a === '--tier') o.tier = argv[++i];
    else if (a === '--max-out') o.maxOut = Number(argv[++i]);
    else if (a === '-h' || a === '--help') o.help = true;
  }
  return o;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMain) {
  const o = parseArgs(process.argv.slice(2));

  if (o.help || (!o.health && !o.prompt)) {
    console.log(`llm.mjs — free models, cloud pehle aur local aakhir mein

  node llm.mjs --health
  node llm.mjs -p "<instruction>" [-f file] [-o out.md]
  <stdin> | node llm.mjs -p "<instruction>"

  --private        sirf local Ollama, koi cloud call nahi
  --provider <id>  groq | gemini | openrouter | ollama  (ladder skip)
  --tier <t>       quality (default) | fast
  --max-out <n>    output tokens ki hadd (default 1500)`);
    process.exit(o.help ? 0 : 1);
  }

  if (o.health) { await health(); process.exit(0); }

  let input = '';
  if (o.file) input = read(o.file);
  else if (!process.stdin.isTTY) { for await (const c of process.stdin) input += c; }

  try {
    const r = await complete(o.prompt, input, o);
    if (o.out) { writeFileSync(o.out, r.text, 'utf8'); log(`→ ${o.out}`); }
    else process.stdout.write(r.text + '\n');
  } catch (e) {
    log(String(e.message));
    process.exit(1);
  }
}
