# jobs/

Har delegation ka apna folder. Yahan **pehle se koi prompt nahi rakha gaya** — jaan
boojh kar.

Wajah: protocol ke mutabiq prompt **mere apne golden outputs se nikalta hai**, pehle se
likha hua prompt us qaide ko tor deta hai. (`.claude/skills/delegate/SKILL.md`)

## Ek job ka dhancha

```
jobs/<job-name>/
  prompt.md      model ke liye instruction  (Phase 2 mein banta hai)
  rubric.json    checkable kasauti          (Phase 2 mein banta hai)
  golden/        MERE 3-5 reference outputs (Phase 1 — sab se pehle)
  pilot/         pilot ke 3 natije          (Phase 3 — gate)
  out/           asal natije + _qa-review.md + _batch-log.tsv
  notes.md       kya toota, kya theek kiya  (Phase 6)
```

## Tarteeb

1. `golden/` — main khud 3–5+ files karta hoon
2. `prompt.md` + `rubric.json` — apne hi kaam se nikaalta hoon
3. `pilot/` — 3 files, golden se compare. **Pass na ho to bulk nahi.**
4. `out/` — poora batch
5. QA do baar — wo khud, phir main
6. `notes.md`
