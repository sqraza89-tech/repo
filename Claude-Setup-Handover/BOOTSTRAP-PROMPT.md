---
date: 2026-08-25
tags: [claude-code, setup, bootstrap, prompt]
---

# Bootstrap — yeh matn Claude ko paste karein

**Kaise:** yeh poora `Claude-Setup-Handover` folder apne project folder ke andar rakhein,
usi project folder mein **Claude Code** kholein, aur neeche `---` ke darmiyan wala poora
matn paste kar dein.

Claude khud sab set karega aur jo cheezein us ko chahiyen wo **aap se poochh lega** —
aap ko kuch yaad rakhne ki zaroorat nahi.

---

```
Tum Claude Code ho. Mujhe apna setup is machine par theek se lagwana hai.

Is folder mein `Claude-Setup-Handover/` maujood hai. Usme:
  - README.md   → poora setup guide (falsafa + har layer ki tafseel)
  - starter/    → saari asal files, copy karne ke liye tayyar

## Pehla kaam — README.md parho

`Claude-Setup-Handover/README.md` parho. Yeh 20 KB se chhoti hai, poori parh sakte ho.
`starter/` ki files abhi mat parho — un ki zaroorat sirf copy karte waqt hai.

## Doosra kaam — mujh se poochho (ek saath, list bana kar)

Kuch bhi copy karne se pehle mujh se yeh sawal poochho. Andaza mat lagana:

1. **Project folder** — setup kis folder mein lagana hai? (jahan main rozana kaam karta
   hoon). Kya wo pehle se git repo hai?
2. **Yeh project hai kya** — notes vault, code project, client kaam? Ek do line mein.
   (isi se CLAUDE.md banegi)
3. **Zaban** — CLAUDE.md aur notes Roman Urdu mein likhoon ya English mein?
4. **Backup** — git repo aur PRIVATE GitHub remote chahiye? (main strongly recommend
   karta hoon; setup mein har session ke aakhir mein auto-commit hota hai)
5. **Auto-note hook** — har turn ke baad "kuch save karne laayak tha?" wala check chahiye?
   (notes/vault wale kaam ke liye behtareen; pure code projects mein shayad na chahiye)
6. **Free API keys** — delegation ke liye. Groq lazmi, Gemini strongly recommended:
     - Groq       → https://console.groq.com → API Keys → Create API Key   (gsk_…)
     - Gemini     → https://aistudio.google.com/apikey                     (AIza… ya AQ.…)
     - OpenRouter → https://openrouter.ai/keys                             (sk-or-v1-…)  [optional]
     - Ollama     → https://ollama.com/download/windows  → phir: ollama pull qwen3:8b  [optional, offline/private kaam ke liye]
   Teenon card nahi maangte. Mujhe abhi keys chat mein mat bhejna — main keys.txt bana
   dunga, aap usme paste kar dena, phir main sync chala dunga.
7. **Connectors (MCP)** — abhi kaun se chahiyen? (Figma / Google Drive / Gmail / Calendar /
   image-video generation / koi aur). Yeh aakhir mein set honge.

Jawab milne tak koi file mat banao.

## Teesra kaam — install (jawab milne ke baad)

Tarteeb se, har qadam ke baad ek line mein batao ke kya hua:

1. `node --version` check karo — 18+ na ho to bata do (nodejs.org se install hoga)
2. Agar git repo nahi hai aur user ne haan kaha: `git init` karo
3. `starter/CLAUDE.template.md` → project root mein `CLAUDE.md`
   ⚠ Template ko **jyun ka tyun mat chhoro** — user ke jawab (#2, #3) ke hisaab se
   project ka naam, folder structure aur rules likho. `< >` wala koi placeholder baaki
   na rahe.
4. `starter/dot-claude/` → project root mein `.claude/`  (folder ka naam badalna hai)
5. `starter/Tools/` → project root mein `Tools/`
6. `starter/gitignore.template` → project root mein `.gitignore`
   (pehle se `.gitignore` ho to merge karo, replace nahi — mujh se poochh lo)
7. Agar user ne #5 mein na kaha ho, to `.claude/settings.local.json` se
   `auto-note-check.sh` wala hook nikaal do
8. `Tools/llm/keys.txt` khol kar user ko batao ke kahan paste karna hai. Keys paste hone
   ke baad: `node Tools/llm/sync-keys.mjs`
   ⚠ `Tools/llm/.env` ko khud kabhi mat likhna — sirf sync-keys.mjs usay likhta hai.
9. `node Tools/llm/llm.mjs --health` chala kar dikhao ke kaun kaun zinda hai
10. Pehla commit karo. User ne GitHub remote diya ho to push bhi.

## Chautha kaam — verify

- Hooks tab chalenge jab Claude Code **restart** hoga. User ko batao ke restart karein.
- Restart ke baad ek 100 KB+ text file par `Read` karne ki koshish karo — hook ko rokna
  chahiye aur `llm.mjs` wala command dena chahiye. Agar na roke to hook wiring galat hai.
- Ek turn ke baad `git log --oneline -1` — "Auto-save: N file(s)" wala commit dikhna chahiye.

## Paancha kaam — mujhe chalana sikha do

Aakhir mein mujhe chhota sa (10 line se kam) khulasa do:
- Ab kaun kaun se hooks chal rahe hain aur har ek kya rokta hai
- Bara file parhne ka sahi tareeqa (command ke sath)
- Bulk kaam delegate karne ka tareeqa aur QA ka gate
- "yeh yaad rakh lo" wali aadat — ke main galti theek karwane ke baad tumhein kahoon
  aur tum memory bana lo

## Hamesha ke liye niyam (yeh apni memory mein daal lo)

- Token **parhne** mein jate hain. Bari file poori kabhi mat parho — `Tools/llm/llm.mjs`
  se nichod nikalo, ya `offset`/`limit` se sirf zaroori hissa.
- Bulk/mechanical kaam free models par: pehle khud 3–5 misalein banao, phir pilot 3 files,
  pass ho to bulk, phir do baar QA (`qa.mjs` + khud saare failures aur pass ka 20% sample).
  **Pilot pass hue baghair bulk nahi.**
- Judgment wala kaam kabhi delegate nahi: design faisle, client-facing wording,
  architecture, ya koi cheez jo mechanically verify na ho sake.
- Client/NDA content par hamesha `--private` (sirf local Ollama).
- `Tools/llm/.env` ko kabhi hath nahi lagana.
- Delete/overwrite se pehle target ka naam dohra kar tasdeeq lena — sirf "haan" kaafi nahi.
- Jab main koi galti theek karwaun, poochho ke isay memory mein daal doon ya nahi.

Shuru karo: pehle README.md parho, phir upar wale saat sawal ek saath poochho.
```

---

## Baad mein kaam aane wale jumle

Setup lag jane ke baad rozana ke istemal mein yeh chand jumle sab se zyada kaam ke hain:

| Kehna | Kya hoga |
|---|---|
| "yeh yaad rakh lo" | memory ban jayegi — dobara batana nahi parega |
| "isko delegate kar do" | free model + QA protocol chalega, Claude ke tokens bachenge |
| "pehle plan do, amal baad mein" | galat raste par 20 file edit hone se bach jayengi |
| "sirf yeh file dekho: `<path>`" | poora project scan nahi hoga |
| `/clear` | naya kaam, naya session — purana context saath nahi ghaseeta jayega |
| `/compact` | lambi guftagu chhoti ho jayegi, kaam wahin se chalta rahega |
