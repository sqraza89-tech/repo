---
name: delegate
description: Bulk ya mechanical kaam free models (Groq/Gemini/OpenRouter/Ollama) se karwane ka protocol. Use jab bohot saari files padhni/summarize/tag/reformat/classify karni hon, ya koi bada file (>50 KB) padhna ho jiska sirf nichod chahiye. Isme QA lazmi hai — pehle khud 3-5 baar karo, phir instruction do, phir do baar check karo. Un kaamon ke liye NAHI jahan judgment chahiye (Figma design, client deliverable, architecture).
---

# Delegate — sasta kaam free models se, magar QA ke sath

## Yeh kyun hai

Token kharcha **input padhne** mein jata hai, likhne mein nahi. Vault mein ek transcript
file **781 KB (~200K tokens)** ki hai. Wo file context mein daalna ek hi kaam mein poora
budget kha jata hai — jabke usme se chahiye sirf 2 KB ka nichod.

Free model wo 200K tokens khud padhta hai, mujhe 2 KB deta hai. **~99% bachat.**

**Magar:** agar summary mein koi cheez chhoot jaye to mujhe **pata bhi nahi chalega** —
main galat picture pe kaam karta rahunga. Isi liye QA optional nahi hai.

---

## Prime directive

> **Blind task kabhi assign nahi karna.**
> Pehle main khud 3–5+ baar karunga, tab jaa kar unhe instruction milegi.

In models mein intelligence nahi hai — sirf pattern following hai. Agar pattern main ne
khud nahi banaya, to wo pattern hai hi nahi, aur output kachra aayega.

---

## Phase 0 — Yeh kaam delegate ho bhi sakta hai?

| ✅ De do | ❌ Kabhi nahi |
|---|---|
| Transcript / lambi file → summary | Figma design decisions |
| Bulk tagging, frontmatter, wikilinks | Client-facing final wording |
| Lambe text se action items nikalna | Architecture, planning, trade-offs |
| Reformat, clean, dedupe | Jahan ek lafz ka farq padta ho |
| Classification (kaunse folder mein jaye) | Kuch bhi jo main verify na kar sakun |
| Pehla draft translation (Urdu ↔ English) | Koi bhi cheez jiska output seedha user tak jaye |

**Test:** agar main output ko **mechanically check nahi kar sakta**, to delegate nahi hoga.

Confidential/client content ho to `--private` lagao — wo sirf local Ollama pe jayega,
koi cloud call nahi hogi.

---

## Job ka folder

Har delegation ka apna folder: `Tools/llm/jobs/<job-name>/`

```
prompt.md      instruction jo model ko milegi
rubric.json    checkable kasauti
golden/        MERE apne 3-5 reference outputs
out/           model ke natije + _qa-review.md + _batch-log.tsv
```

---

## Phase 1 — Main khud karunga (3–5+ baar)

Job folder banao, phir **khud** 3–5 files par kaam karo aur `golden/` mein rakho.
Jitni baar zaroori lage utni baar — jab tak apna pattern saaf na ho jaye.

Yeh sirf reference nahi hai — yehi wo cheez hai jis se prompt aur rubric nikalte hain.
Bina iske aage nahi barhna.

## Phase 2 — Apne kaam se prompt + rubric nikalo

`prompt.md` — model ke liye instruction. Bilkul mechanical, koi "achha likho" nahi:
- exact structure (headings, kitne bullets, kis tarteeb mein)
- exact lambai
- kya **nahi** karna (koi tareef nahi, koi tamheed nahi, source se bahar kuch nahi)

`rubric.json` — jo cheez script khud check kar sake:
```json
{
  "name": "transcript summary",
  "checks": {
    "minChars": 400,
    "maxChars": 6000,
    "requireFrontmatter": true,
    "mustMatch": ["^## ", "^- "],
    "mustNotMatch": ["As an AI", "I cannot", "Sure,", "Here is"],
    "maxRepeatRatio": 0.3
  },
  "semantic": "Kya har point asal source mein maujood hai? Koi cheez model ne khud se to nahi jodi?",
  "samplePercent": 20
}
```

Local checks pehle rakho — wo muft hain aur pakke hain. Semantic check tab jab local se
kaam na bane.

## Phase 3 — Pilot (yahan gate hai)

```bash
node Tools/llm/batch.mjs --in <src> --prompt jobs/<job>/prompt.md --out jobs/<job>/pilot --limit 3
```

Model ke 3 natije **apne golden se khud compare karo**.

- Match kar gaye → aage barho
- Nahi kiye → `prompt.md` theek karo, `pilot/` khali karo, dobara

**Pilot pass hue bagair bulk kabhi nahi chalega.** Yeh niyam torna nahi hai.

## Phase 4 — Bulk

```bash
node Tools/llm/batch.mjs --in <src> --prompt jobs/<job>/prompt.md --out jobs/<job>/out
```

Resumable hai — beech mein ruk jaye to wahi command dobara chala do, jo ho chuka wo skip
ho jayega.

## Phase 5 — Double QA

**5a — wo khud (sasta):**
```bash
node Tools/llm/qa.mjs --out jobs/<job>/out --rubric jobs/<job>/rubric.json --src <src> --semantic
```

**5c — grounding check (sasta, deterministic, model ke baghair):**
```bash
node Tools/llm/grounding-check.mjs Tools/llm/jobs/<job>
```
Output mein jo terms/values ginwaye gaye hain, kya wo us text mein hain **jo model ne dekha**?
Semantic check se sasta aur zyada pakka. 24 Aug 2026 ko isi ne pakra ke model ne teen API
naam gharh liye the jo kahin maujood nahi the — semantic QA ne wo miss kiya tha.

**5b — main upar se (lazmi):**

`out/_qa-review.md` khud parho. Usme hote hain:
- **saare failures** — har ek dekhna hai
- **pass wale ka 20% random sample** — hath se parhna hai

| Nateeja | Kya karna |
|---|---|
| Fail | Main khud dobara karunga, ya prompt theek kar ke us file pe dobara chalao |
| Sample mein masla mila | Yeh systemic hai — prompt theek karo, **poora batch dobara** |
| Sab theek | Aage barho |

Sample mein ek bhi masla mila to us ka matlab hai baaki mein bhi hai. Ek file theek
karke aage mat barho.

## Phase 6 — Seekha hua likh do

`jobs/<job>/notes.md` mein: kaunsa prompt chala, kya toota, kya theek kiya.
Agli dafa yehi job dobara chalani pade to shuru se nahi sochna parega.

---

## Commands

```bash
node Tools/llm/llm.mjs --health                    # kaun zinda hai
node Tools/llm/llm.mjs -p "<instruction>" -f <file>
node Tools/llm/llm.mjs -p "<instruction>" -f <file> --private   # sirf local
node Tools/llm/sync-keys.mjs                       # keys.txt -> .env
```

Ladder khud chunta hai: **groq → gemini → openrouter → ollama**.
Bada input ho to gemini upar aa jata hai (1M context). Ollama hamesha aakhir mein.

---

## Hard rules

1. **`.env` ko kabhi hath nahi lagana.** Sirf `sync-keys.mjs` usay likhta hai. Key
   badalni ho to `keys.txt` edit karwao aur sync chala do.
2. **Blind assign kabhi nahi** — Phase 1 skip karna mana hai.
3. **Pilot pass kiye bagair bulk nahi.**
4. **Client/NDA content pe `--private`** — cloud pe kabhi nahi.
5. **Cohere kabhi nahi** — uski free key non-commercial only hai, xLoop kaam ke liye
   illegal.
6. Output ko blindly aage mat barhao — jo cheez QA se nahi guzri wo user tak nahi jayegi.
