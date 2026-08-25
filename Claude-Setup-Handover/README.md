---
date: 2026-08-25
tags: [claude-code, setup, tokens, delegation, handover]
---

# Claude Code — poora setup handover

Yeh us setup ka mukammal khaka hai jo mahinon mein bana: **Claude Code ko kaise sikhaya
jaye ke kam token mein zyada kaam kare, aur galtiyan dobara na dohraye.**

Sath `starter/` folder hai — usme har wo file mojood hai jo copy kar ke seedha chalti hai.
Kuch likhna nahi parega.

> **Yeh kis ke liye hai:** **Claude Code** (desktop app ya terminal).
> claude.ai wale chat app mein hooks, skills aur CLAUDE.md ka koi wajood nahi — wahan
> sirf Projects instructions aur connectors kaam aate hain.

---

## 0. Sab se pehle — asal masla samajh lein

Token **likhne** mein nahi, **parhne** mein jaate hain.

Ek asli misal: ek transcript file **781 KB** ki thi — yani **~200,000 tokens**. Claude ne
poori parh li. Us ek kaam ne poora budget kha liya. Jabke us file mein se darkaar sirf
**2 KB ka nichod** tha.

Yani **99% token us cheez par gaye jo chahiye hi nahi thi.**

Zyada tar log yahi karte hain aur samajhte hain "Claude mehnga hai". Claude mehnga nahi —
**be-tarteeb reading mehngi hai.**

### Chaar usool (baaki sab inhi ki tafseel hai)

| # | Usool | Amal |
|---|---|---|
| 1 | Bara input Claude ke context mein na aaye | Bari files free models parhein, nichod Claude ko |
| 2 | Jo baat ek baar samjhai, dobara na samjhani pare | CLAUDE.md + memory |
| 3 | Jo abhi darkaar nahi, wo load na ho | Skills (progressive disclosure), library/installed ka farq |
| 4 | Insaan ke bharose kuch na chhore | Hooks — yaad-dihani nahi, **rok** |

Sab se ahem chautha hai. Documentation mein likha usool **tootta hai**; hook wala usool
**nahi tootta**.

---

## 1. Tees minute ka install — checklist

```
[ ]  1. Node 18+ install            (node --version)
[ ]  2. Git install + ek PRIVATE repo (backup ke liye)
[ ]  3. Project folder chunein (jahan kaam hoga)
[ ]  4. starter/CLAUDE.template.md  →  <project>/CLAUDE.md   (naam badal kar)
[ ]  5. starter/dot-claude/         →  <project>/.claude/    (naam badal kar)
[ ]  6. starter/Tools/              →  <project>/Tools/
[ ]  7. starter/gitignore.template  →  <project>/.gitignore
[ ]  8. Free API keys (Groq + Gemini) → keys.txt → sync
[ ]  9. node Tools/llm/llm.mjs --health
[ ] 10. Claude Code restart → hooks test
[ ] 11. Connectors (MCP) — sirf jo waqai chahiyen
```

⚠ **Qadam 5:** folder ka naam `dot-claude` se `.claude` karna zaroori hai. Windows
Explorer dot se shuru hone wale folder ka naam banane nahi deta — terminal se karein:

```bash
mv dot-claude .claude
```

Sab se aasan tareeqa: yeh poora `Claude-Setup-Handover` folder unhein de dein, project
folder mein Claude Code kholein, aur `BOOTSTRAP-PROMPT.md` ka matn paste kar dein — wo
khud sab set kar dega aur jo cheezein chahiye wo poochh lega.

---

## 2. Layer 1 — `CLAUDE.md` (project ki mustaqil hidayaat)

Project ke root mein `CLAUDE.md`. Yeh **har session ke shuru mein khud load hota hai** —
dobara batane ki zaroorat nahi rehti.

**Isme kya jata hai:**
- Project kya hai (ek line)
- File naming, folder structure, formatting ke usool
- Wo cheezein jo aap **har baar** dohratay hain
- "Yeh kabhi mat karna" wali list

**Isme kya nahi jata:**
- Jo code se khud zahir hai (file list, function names)
- Lambi tafseelat — yeh **har session ka kharcha** hai. 3–5 KB theek; 30 KB nuqsan.

Template: `starter/CLAUDE.template.md`

> **Sab se bara faida:** ek hafte baad aap dekhen ge ke wo baatein dohrana chhoot gayin jo
> pehle roz dohrani parti thin. Wohi asal "training" hai.

---

## 3. Layer 2 — Memory (jo seekha, wo mustaqil ho jaye)

Claude Code ke paas file-based memory hoti hai. Har memory **ek file, ek fact**:

```markdown
---
name: kis-cheez-ka-slug
description: ek line — taake baad mein pata chale yeh kaam ki hai ya nahi
metadata:
  type: user | feedback | project | reference
---

Asal baat. Related memories ko [[aise]] link karein.
```

| type | kya |
|---|---|
| `user` | aap kaun hain — kaam, taraz, pasand |
| `feedback` | jo tareeqa aap ne sikhaya ya theek karwaya — **wajah ke sath** |
| `project` | chal raha kaam, maqasid, pabandiyan |
| `reference` | bahar ke links — dashboards, tickets, docs |

Ek `MEMORY.md` index hota hai — har memory ki ek line. **Sirf yeh index har session mein
load hota hai**, poori memories nahi. Is liye index chhota rakhein.

**Kya memory mein jaye:** wo jo mehnat se seekha aur dobara seekhna mehnga hoga. Is setup
ki asli memories ki misalein:

- "delete se pehle 'haan' kaafi nahi — target ka naam dohra kar tasdeeq lena"
- "`claude mcp list` Figma ko 'Needs authentication' dikhata hai — yeh **false negative**
  hai, dobara mat poochho"
- "inline screenshots se bacho — ek session mein base64 images naye context ka 85% kha gayin"
- "delivery se pehle apna kaam khud dekh lo — obvious masle user ko nahi milne chahiyen"

**Kya nahi jaye:** jo code/git history mein pehle se hai, ya jo sirf isi guftagu ke liye
ahem hai.

> **Aadat banayein:** jab bhi Claude galti kare aur aap theek karwayen — kahein
> **"yeh yaad rakh lo"**. Chand hafte mein wo galtiyan khatam ho jati hain.

---

## 4. Layer 3 — Hooks (asal jabar yahan hai)

Hook ek chhoti script hoti hai jo harness **khud** chalata hai — Claude ki marzi par nahi.
Isi liye hook wala usool tootta nahi.

Chaar hooks — sab `starter/dot-claude/hooks/` mein mojood hain.

### 4.1 `big-read-gate.mjs` — sab se qeemti

`PreToolUse` par `Read` **rok deta hai** jab file 40 KB se bari ho:

```
Read("bara-file.md")
   ↓
Hook: "Yeh file 780 KB hai (~195k tokens) — poori mat parho.
       node Tools/llm/llm.mjs -p '<jo chahiye>' -f 'bara-file.md'"
   ↓
Read cancel. Claude free model se nichod nikalta hai.
```

Escape hatches (jaan bujh kar rakhe gaye):
- `offset`/`limit` ke sath partial read — wo waise hi sasta hai
- `.claude/`, `Tools/`, `.agents/` ki files — apni hi config
- `touch .claude/hooks/state/allow-big-read` — jab waqai poori chahiye

**Yeh akela hook sab se zyada token bachata hai.** Iske baghair "bari file mat parho" sirf
ek guzarish hai jo bhool jati hai.

Node mein likha hai, bash mein nahi — kyunki path mein space ho to `grep`/`sed` toot jate
hain aur Windows JSON-escaped paths bhejta hai.

### 4.2 `delegate-reminder.mjs` — do darjay wali yaad-dihani

`UserPromptSubmit` par:
- **Hamesha:** ek line (~25 tokens) — "bulk kaam free model par"
- **Sirf jab prompt bulk jaisa lage** (bulk, batch, summarize, classify, "saari files"…):
  poora protocol (~80 tokens)

Do darjay isi liye ke "har turn ka reminder" khud mehnga na ho jaye.

### 4.3 `auto-note-check.sh` — kaam ki baat zaya na ho

`Stop` par (jab Claude jawab khatam kare) ek dafa rokta hai aur poochta hai: *"is turn mein
koi decision, fact, reference ya action item bana jo baad mein dhoondhna pare?"* — haan to
note ban jata hai, nahi to chup chaap ruk jata hai.

Isme do loop-guards hain (`stop_hook_active` + 20 second ka marker) — warna hook apne aap
ko baar baar chalata rehta hai. **Yeh hissa mat hatana.**

### 4.4 `auto-commit.sh` — backup jo bhoolta nahi

`Stop` par: kuch badla ho to `git add -A` + commit + push (background mein).

**Yeh kyun bana:** ek folder galti se delete hua aur backup na hone ki wajah se wapas nahi
aaya. Ab har change khud history mein chala jata hai, aur delete hone par
`git checkout HEAD -- <path>` se wapas aa jata hai.

Usool: yeh hook **kabhi fail nahi karta aur kabhi rokta nahi** — internet na ho to commit
local reh jata hai, agli dafa push ho jata hai.

### Wiring

`starter/dot-claude/settings.local.json` mein chaaron juray hue hain. Copy karne ke baad
**Claude Code restart karein** — hooks start par parhe jate hain.

---

## 5. Layer 4 — Skills (jo abhi darkaar nahi, wo load na ho)

Skill ek folder hota hai jis mein `SKILL.md` hoti hai — kisi ek kaam ka tareeqa.

**Jo baat log nahi jante:** har installed skill ka **naam + description har session mein
load hota hai**, poori skill nahi. Poora matn **sirf tab** load hota hai jab wo chalayi
jaye (progressive disclosure).

Phir bhi 200 skills ki descriptions bhi bojh ban jati hain. Is liye **do darjay**:

```
Reference/Skill-Library/    ← sab pari rehti hain. Context cost: SIFAR
.claude/skills/             ← sirf wo jo is waqt kaam ki hain
```

`starter/Tools/skills/skills.mjs` isi ke liye:

```bash
node Tools/skills/skills.mjs list          # library mein kya hai
node Tools/skills/skills.mjs add <naam>    # library → installed
node Tools/skills/skills.mjs remove <naam> # installed → wapas library
node Tools/skills/skills.mjs cost          # abhi kitna context ja raha hai
```

**Skills kahan se milti hain:**
- GitHub ke public repos (misal `emilkowalski/skills`) — clone kar ke library mein daal dein
- Khud likhna — `skill-builder` skill isi kaam ki hai
- Plugin marketplaces — interactive terminal mein `/plugin`

**Ek skill lazmi hai:** `delegate` (`starter/dot-claude/skills/delegate/SKILL.md`).

---

## 6. Layer 5 — Delegation (sab se bari bachat)

**Bari files aur bulk kaam free models parhein; Claude sirf judgment aur QA kare.**

### Ladder

```
groq  →  gemini  →  openrouter  →  ollama
```

- **Groq** default — sab se tez (chhoti call 0.8s)
- Input itna bara ho ke Groq ke budget mein na aaye → **Gemini** upar aa jata hai
  (1M context, chunking ki zaroorat hi nahi)
- Sab fail / internet band / `--private` → **Ollama** (laptop par, kuch bahar nahi jata)

**Sab free hain.** Tarteeb qeemat par nahi, **speed** par hai.

### Setup

1. `Tools/llm/keys.txt` kholein — usme har provider ka link aur poora rasta likha hai
2. `=` ke aage key paste karein (jo nahi chahiye khaali chhor dein)
3. `node Tools/llm/sync-keys.mjs`
4. `node Tools/llm/llm.mjs --health`

Sirf **Groq** se bhi shuru ho sakta hai. Doosre number par **Gemini** sab se zaroori hai
(bari files wohi sambhalta hai).

> **`.env` ko kabhi hath nahi lagana.** Sirf `sync-keys.mjs` usay likhta hai. Khaali value
> purani key ko nahi mitati, aur har sync se pehle `.env.bak` ban jata hai.

### Istemal

```bash
node Tools/llm/llm.mjs -p "5 bullets mein main points" -f bada-file.md
node Tools/llm/llm.mjs -p "tags nikalo" -f note.md --private
node Tools/llm/batch.mjs --in <src-dir> --prompt prompt.md --out <out-dir>
node Tools/llm/qa.mjs --out <out-dir> --rubric rubric.json --src <src-dir> --semantic
node Tools/llm/grounding-check.mjs Tools/llm/jobs/<job>
```

`batch.mjs` resumable hai — beech mein ruk jaye to wahi command dobara chala dein.

### QA protocol — yeh hissa mat chhorna

Free models mein **intelligence nahi, sirf pattern following hai**. Aur agar summary mein
kuch chhoot jaye to **pata bhi nahi chalta** — Claude galat picture par kaam karta rehta
hai.

> **Prime directive: blind task kabhi assign nahi karna.**
> Pehle Claude khud 3–5+ baar karega, tab unhein instruction milegi.

| Phase | Kya |
|---|---|
| 0 | Faisla: yeh kaam mechanically verify ho sakta hai? Nahi → delegate nahi |
| 1 | Claude khud 3–5 files par kaam kare → `golden/` |
| 2 | Apne kaam se `prompt.md` + `rubric.json` (bilkul mechanical, koi "achha likho" nahi) |
| 3 | **Pilot 3 files** — golden se compare. Pass na ho to prompt theek karo, dobara |
| 4 | Bulk (resumable) |
| 5 | **Double QA:** `qa.mjs` + `grounding-check.mjs`, phir **Claude khud** saare failures + pass ka 20% sample parhe |
| 6 | `notes.md`: kya chala, kya toota |

**Pilot pass hue baghair bulk nahi.** Sample mein ek bhi masla mile to matlab baaki mein
bhi hai — **poora batch dobara**, ek file theek kar ke aage mat barho.

### Kya delegate hota hai, kya nahi

| ✅ De do | ❌ Kabhi nahi |
|---|---|
| Lambi file → summary | Design decisions |
| Bulk tagging, frontmatter | Client-facing final wording |
| Action items nikalna | Architecture, planning, trade-offs |
| Reformat, clean, dedupe | Jahan ek lafz ka farq parta ho |
| Classification | Kuch bhi jo mechanically verify na ho sake |
| Pehla draft translation | Koi cheez jiska output seedha user tak jaye |

Confidential/client content par **`--private`** — sirf local Ollama, koi cloud call nahi.

### Naapi hui haddein (24 Aug 2026, 198-call batch se)

| Provider | Asal hadd | Us din kya hua |
|---|---|---|
| Groq | ~200K tokens/din **per key** | 145 calls; 2 keys se aaram se chala |
| OpenRouter | **~50 requests/din per key** | 44 par hi limit lag gayi |
| Gemini | rozana quota (requests) | 5 calls ke baad khatam |
| Ollama | koi hadd nahi | slow, 8K context |

Groq ki hadd **tokens** mein hai, OpenRouter ki **requests** mein — is liye bohot si chhoti
files par OpenRouter pehle marta hai, bari files par Groq.

---

## 7. Layer 6 — MCP connectors (bahar ki duniya)

MCP se Claude bahar ke tools chala sakta hai — Figma, Google Drive, Gmail, Canva,
image/video generation waghera.

**Do qism ke connectors hote hain — yeh farq zaroori hai:**

| Qism | Kahan set hota hai | Config file mein dikhta hai? |
|---|---|---|
| **claude.ai connectors** | claude.ai → Settings → Connectors | ❌ Nahi |
| **Local MCP servers** | `claude mcp add …` ya `.claude.json` | ✅ Haan |

Zyada tar connectors pehli qism ke hote hain — is liye local config khaali dikhne par
ghabrana nahi.

**Shuru mein kaunse jorein (kaam ke hisaab se):**

| Kaam | Connector |
|---|---|
| Design | Figma |
| Daftar ka kaam | Google Drive, Gmail, Calendar |
| Assets (image/video) | koi ek generation connector — sab credits par chalte hain |
| Web/app build | Lovable ya isi qism ka koi |

**Ehtiyaat:**
- Har generation asli **credits** kharch karti hai. Jis tool mein `simulate_cost` jaisa
  read-only tool ho, usay pehle chalayen aur user ko number dikha kar poochein.
- Shared account ho to har baar balance dobara check karein — doosre log bhi kharch karte hain.
- `publish`/`deploy` qism ke tools bahar ki taraf jate hain aur wapas nahi hote — har baar
  alag permission.

**Do gotchas jo mehngi parhi:**
1. `claude mcp list` **jhoot bol sakta hai** — connected connector ko "Needs
   authentication" dikhata hai. Wo local CLI registration parhta hai, jabke sessions app
   connectors use karte hain. Sahi tareeqa: koi read-only tool (misal `whoami`) chala kar
   dekhein.
2. **Server IDs har session mein badal jate hain** — tools ko ID se nahi, **naam** se
   dhoondhein.

---

## 8. Layer 7 — Aadatein (jo aap khud karein ge)

Tooling aadhi baat hai. Baaqi aadhi yeh hai:

**Session hygiene**
- **Ek session = ek kaam.** Naya kaam shuru karte waqt `/clear`. Purana context sath
  ghaseetna sab se aam zaya hai.
- Session lamba ho jaye to `/compact` — context summarize ho kar chhota ho jata hai.
- Lambi guftagu jis mein 3 alag kaam hue: uska matlab hai teen sessions hone chahiye the.

**Poochne ka tareeqa**
- Mubham sawal = Claude pehle poora repo parhega. Saaf sawal = seedha kaam.
  - ❌ "yeh project theek karo"
  - ✅ "`Notes/2026-08-01-x.md` ka frontmatter CLAUDE.md ke format par le aao"
- Agar file ka naam pata hai to **naam batayein** — dhoondhna mehnga hai.

**Bara kaam**
- Pehle **plan** maangein, phir amal. Galat raste par 20 file edit ho jayen — wo dohra kharcha.
- Bohot saari files par mechanical kaam = delegation ka case, khud mat karwayen.

**Screenshots aur images**
- Inline screenshots bohot mehngi hain — ek session mein base64 images naye context ka
  **85%** kha gayi thin. Screenshot tab lein jab waqai kisi visual faisle par mabni ho.

**Model ka intekhab**
- Har kaam ke liye sab se bara model zaroori nahi. Aasan/mechanical kaam chhote model par
  dein (`/model`), sochne wala kaam bare par.

**Sub-agents**
- Sub-agent apna fresh context leta hai — searching/fan-out ke liye achha, magar har baar
  wo context **dobara** banta hai. Chhoti cheez ke liye khud karna sasta hai.

---

## 9. Token discipline — cheat sheet

| ❌ Yeh na karein | ✅ Yeh karein |
|---|---|
| Poori bari file parhwana | `llm.mjs` se nichod, ya `offset`/`limit` se hissa |
| "Poora project dekh lo" | Exact file/folder batayein |
| Ek hi session mein 5 alag kaam | Har kaam par `/clear` |
| Har cheez ka screenshot | Sirf jab visual faisla ho |
| Baar baar wohi cheez samjhana | CLAUDE.md / memory mein daal dein |
| 200 skills installed | Library mein rakhein, zaroorat par `add` |
| Bulk kaam Claude se | Free model + QA protocol |
| Bina plan ke bara change | Pehle plan, phir amal |

**Ek jumla jo sab kuch bata deta hai:** *Claude ka context ek mehnga desk hai — us par
sirf wo cheez rakhein jis par abhi kaam ho raha hai.*

---

## 10. Verify — sab chal raha hai?

```bash
node --version                        # 18+
node Tools/llm/llm.mjs --health       # providers zinda hain?
ls -la .claude/hooks/                 # chaar files mojood?
git log --oneline -3                  # auto-commit chal raha hai?
```

Hooks ka amli test: koi 100 KB se bari `.md` file par Claude se `Read` karwayen — usay
mana hona chahiye aur `llm.mjs` wala command dikhna chahiye.

Aur ek turn ke baad `git log` dekhein — "Auto-save: N file(s)" wala commit hona chahiye.

---

## 11. Safety (yeh hissa skip na karein)

- **Private repo** — public par kabhi nahi. `.gitignore` mein `keys.txt` aur `.env`
  pehle se hain, magar ek baar khud check kar lein.
- **`.env` sirf `sync-keys.mjs` likhta hai** — Claude ko is file se door rakhein.
- **Delete se pehle target ka naam dohra kar tasdeeq** — sirf "haan" kaafi nahi.
- **Client/NDA content par hamesha `--private`** — free cloud models par kabhi nahi.
- Free API keys **alag account** par banayein agar ek se zyada chahiyen — ek hi account ki
  kai keys wohi quota share karti hain.

---

## 12. Kya cheez pehle din nahi karni

Sab ek sath karne ki koshish mein log chhor dete hain. Tarteeb yeh hai:

| Kab | Kya |
|---|---|
| **Din 1** | CLAUDE.md + chaar hooks + git repo. Bas. |
| **Hafta 1** | `Tools/llm` + Groq/Gemini keys. Pehla bara file delegate kar ke dekhein. |
| **Hafta 2** | Memory ki aadat — "yeh yaad rakh lo". Skills library banana shuru. |
| **Hafta 3+** | Connectors, apni skills likhna, apne hooks banana. |

Din 1 wala hissa hi **~60–70% bachat** de deta hai. Baaqi sab uske upar hai.

---

## 13. Files ki fehrist (`starter/` mein kya hai)

```
starter/
  CLAUDE.template.md               → <project>/CLAUDE.md
  gitignore.template               → <project>/.gitignore
  dot-claude/                      → <project>/.claude/
    settings.local.json            hooks ki wiring
    hooks/
      big-read-gate.mjs            40 KB+ Read rok deta hai       [sab se qeemti]
      delegate-reminder.mjs        do darjay ki yaad-dihani
      auto-note-check.sh           Stop par note check
      auto-commit.sh               Stop par git commit + push
    skills/delegate/SKILL.md       delegation ka poora protocol
  Tools/
    llm/
      llm.mjs                      ladder, failover, chunking, retry
      batch.mjs                    ek prompt, bohot si files, resumable
      qa.mjs                       local checks + semantic check
      grounding-check.mjs          model ne kuch gharha to nahi? (deterministic)
      sync-keys.mjs                keys.txt → .env  (sirf yehi .env likhta hai)
      keys.txt                     aap yahan keys paste karte hain
      README.md                    tafseeli docs + naapi hui haddein
    skills/skills.mjs              skill library ↔ installed
```

---

## 14. Aage kya — yeh setup zinda rehta hai

Yeh koi "install kar ke bhool jao" cheez nahi. Har hafte ek cheez barhti hai:

- Koi galti hui → memory bani → dobara nahi hui
- Koi kaam teesri baar dohraya → skill ban gayi
- Koi usool toota → hook ban gaya

**Sab se ahem sawal jo har hafte khud se poochein:** *"is hafte main ne Claude ko kaunsi
baat do baar batayi?"* — uska jawab hi agli memory, agli skill, ya agla hook hai.
