#!/usr/bin/env node
/**
 * Skill library ka CLI — do darjay ke darmiyan skills ko idhar udhar karna.
 *
 *   Reference/Skill-Library/   0 context cost, sirf pari rehti hain
 *   .claude/skills/            har session name+description load hota hai
 *
 * Usage:
 *   node Tools/skills/skills.mjs list [filter]
 *   node Tools/skills/skills.mjs add <name> [<name>...]
 *   node Tools/skills/skills.mjs remove <name> [<name>...]
 *   node Tools/skills/skills.mjs cost
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const LIB = 'Reference/Skill-Library';
const DST = '.claude/skills';
const LOCK = 'skills-lock.json';
const [cmd, ...args] = process.argv.slice(2);

const desc = (p) => {
  if (!existsSync(p)) return '';
  const lines = readFileSync(p, 'utf8').split(/\r?\n/);
  if (lines[0] !== '---') return '';
  const end = lines.indexOf('---', 1);
  const i = lines.findIndex((l, k) => k > 0 && k < end && /^description:/.test(l));
  if (i < 0) return '';
  let out = lines[i].replace(/^description:\s*\|?\s*/, ''), j = i;
  while (j + 1 < end && /^(\s+\S|\s*$)/.test(lines[j + 1])) { out += ' ' + lines[++j].trim(); }
  return out.replace(/^["']|["']$/g, '').replace(/\s+/g, ' ');
};

const libEntries = () => {
  const out = [];
  if (!existsSync(LIB)) return out;
  for (const repo of readdirSync(LIB)) {
    const rp = join(LIB, repo);
    if (!statSync(rp).isDirectory()) continue;
    for (const skill of readdirSync(rp)) {
      const sp = join(rp, skill, 'SKILL.md');
      if (existsSync(sp)) out.push({ repo, skill, path: join(rp, skill), desc: desc(sp) });
    }
  }
  return out.sort((a, b) => a.skill.localeCompare(b.skill));
};

const installed = () => existsSync(DST) ? readdirSync(DST).filter(n => existsSync(join(DST, n, 'SKILL.md')) || existsSync(join(DST, n))) : [];

function copyTree(src, dst) {
  mkdirSync(dst, { recursive: true });
  for (const e of readdirSync(src, { withFileTypes: true })) {
    if (e.isDirectory()) { if (/^(\.git|node_modules|assets)$/.test(e.name)) continue; copyTree(join(src, e.name), join(dst, e.name)); }
    else copyFileSync(join(src, e.name), join(dst, e.name));
  }
}

if (cmd === 'list') {
  const f = (args[0] || '').toLowerCase();
  const inst = new Set(installed());
  const rows = libEntries().filter(e => !f || (e.skill + e.repo + e.desc).toLowerCase().includes(f));
  for (const e of rows) console.log(`${inst.has(e.skill) ? '●' : '○'} ${e.skill.padEnd(32)} ${e.repo.padEnd(10)} ${e.desc.slice(0, 70)}`);
  console.log(`\n${rows.length} in library · ● = already installed · add karne ke liye: node Tools/skills/skills.mjs add <name>`);
} else if (cmd === 'add' || cmd === 'remove') {
  const lock = existsSync(LOCK) ? JSON.parse(readFileSync(LOCK, 'utf8')) : { version: 1, skills: {} };
  for (const name of args) {
    if (cmd === 'add') {
      const e = libEntries().find(x => x.skill === name);
      if (!e) { console.log(`✗ ${name} — library mein nahi mili`); continue; }
      rmSync(join(DST, name), { recursive: true, force: true });
      copyTree(e.path, join(DST, name));
      const h = execSync(`sha256sum "${join(DST, name, 'SKILL.md')}"`).toString().split(' ')[0];
      lock.skills[name] = { source: e.repo, sourceType: 'library', skillPath: `${e.repo}/${name}/SKILL.md`, computedHash: h };
      console.log(`✓ added ${name} (+${e.desc.length} B per session)`);
    } else {
      if (!existsSync(join(DST, name))) { console.log(`✗ ${name} — installed nahi hai`); continue; }
      rmSync(join(DST, name), { recursive: true, force: true });
      delete lock.skills[name];
      console.log(`✓ removed ${name}`);
    }
  }
  writeFileSync(LOCK, JSON.stringify(lock, null, 2) + '\n');
  console.log('\nNaya session shuru karein taake tabdeeli lage.');
} else if (cmd === 'cost') {
  let tot = 0, n = 0;
  const rows = [];
  for (const name of installed()) {
    const p = join(DST, name, 'SKILL.md');
    if (!existsSync(p)) continue;
    const d = desc(p).length; tot += d; n++;
    rows.push([d, name]);
  }
  rows.sort((a, b) => b[0] - a[0]);
  for (const [d, name] of rows) console.log(String(d).padStart(6), name);
  console.log(`\n${n} skills · ${tot} bytes (~${Math.round(tot / 4)} tokens) har session`);
  console.log(`library mein aur: ${libEntries().length}`);
} else {
  console.log('usage: skills.mjs list [filter] | add <name>... | remove <name>... | cost');
}
