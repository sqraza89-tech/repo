# llm — free models ka CLI (cloud pehle, local aakhir mein)

Lambi files aur bulk kaam free models se karwane ke liye. Chaar providers ek hi ladder
mein — jo tez hai wo pehle, laptop wala Ollama sab se aakhir.

## How it works / why it works

Token kharcha **input padhne** mein jata hai. Is vault ki sab se bari file
`07-10-Hour-Masterclass.md` **781 KB ≈ 200,000 tokens** ki hai. Wo Claude ke context
mein daalna ek hi kaam mein poora budget kha jata hai — jabke usme se chahiye sirf 2 KB
ka nichod.

Yeh CLI wo file **free model** ko deta hai. Model 200K tokens khud parhta hai, wapas
2 KB deta hai. Claude ke context mein sirf wo 2 KB aata hai.

Ladder ki tarteeb **speed** pe hai, sasti-mehngi pe nahi — sab free hain:

```
groq  →  gemini  →  openrouter  →  ollama
```

- **Groq** default hai — sab se tez
- Input itna bada ho ke Groq ke ek-call budget mein na aaye → **Gemini** upar aa jata
  hai (1M context, chunking ki zaroorat hi nahi)
- Input Groq ke poore din ke budget (100K TPD) se bhi bada ho → Groq bilkul skip
- Sab fail / internet band / `--private` → **Ollama** (laptop pe, kuch bahar nahi jata)

Jahan chunking lazmi ho jaye wahan map-reduce hota hai: file tukron mein tooti hai, har
tukre ka kaam alag hota hai, phir sab jod kar ek natija banta hai.

Model ke naam free providers bina bataye badalte rehte hain, isliye har run mein **live
model list** se naam chuna jata hai — hardcoded naam sirf pehli koshish hai.

## Requirements

- **Node 18+** (yahan v24) — koi npm package nahi chahiye, sab built-in `fetch` pe hai
- Kam se kam **ek** cloud key `keys.txt` mein, **ya** Ollama installed
- Ollama (optional, aakhri seerhi): https://ollama.com/download/windows → phir
  `ollama pull qwen3:8b`

## Setup

1. `keys.txt` Notepad mein kholein — usme har provider ka link aur rasta likha hai
2. `=` ke aage key paste karein (jo nahi chahiye khaali chhod dein)
3. `node sync-keys.mjs`
4. `node llm.mjs --health`

**`.env` ko hath mat lagayein.** Sirf `sync-keys.mjs` usay likhta hai. Khaali value
purani key ko kabhi nahi mitati, aur har sync se pehle `.env.bak` bhi ban jati hai.

## Usage

**Ek file:**
```bash
node llm.mjs -p "5 bullets mein main points" -f bada-file.md
node llm.mjs -p "tags nikalo" -f note.md --private     # sirf laptop pe
node llm.mjs -p "summarize" -f x.md -o out.md          # file mein likho
```

**Bohot saari files (resumable):**
```bash
node batch.mjs --in <src-dir> --prompt prompt.md --out <out-dir>
```
Beech mein ruk jaye to wahi command dobara chala dein — jo ho chuka wo skip ho jayega.

**QA:**
```bash
node qa.mjs --out <out-dir> --rubric rubric.json --src <src-dir> --semantic
```
`_qa-review.md` banti hai: saare failures + pass wale ka 20% random sample. Wo file
Claude khud parhta hai.

**Options:** `--private` (sirf local) · `--provider groq|gemini|openrouter|ollama`
(ladder skip) · `--tier quality|fast` · `--max-out <n>`

## Ek se zyada key per provider

Har API key ka apna rozana budget hota hai (Groq 200K tokens/din). Ziyada keys = ziyada kaam.

`keys.txt` mein bas **wohi line dobara likh dein**:

```
Groq api key =gsk_pehli
Groq api key =gsk_dusri
```

`sync-keys.mjs` inhe `GROQ_API_KEY`, `GROQ_API_KEY_2`, … banata hai. `llm.mjs` pehli key par
chalta rehta hai aur budget khatam hote hi khud agli par chala jata hai:

```
⇄ groq key 1/2 ka budget khatam — key 2 par ja raha hoon
```

**Alag account par key banayein** — ek hi account ki kai keys wohi quota share karti hain,
faida nahi hota.

Gemini par doosri key sab se ziyada kaam ki hai: bari files (>14 KB) wohi sambhalta hai
(1M context, bina chunking), aur uska quota sab se pehle khatam hota hai. Groq bari files par
waise bhi khaali jawab deta hai, is liye wahan aur keys is masle ka hal nahi.

## Naapi hui haddein (24 Aug 2026, 198-call batch se)

| Provider | Asal hadd | Us din kya hua |
|---|---|---|
| Groq | ~200K tokens/din **per key** | 145 calls kar liye; 2 keys se aaram se chala |
| OpenRouter | **~50 requests/din per key** | 44 par hi limit: *"Add 10 credits to unlock 1000 free model requests per day"* |
| Gemini | rozana quota (tokens nahi, requests) | 5 calls ke baad khatam |
| Ollama | koi hadd nahi | slow, 8K context |

**Sab se kamzor kari OpenRouter hai** — 50 requests/din bohot kam hai. Ziyada keys se
faida hota hai, magar ek baar $10 credit daalne se 1000 req/din hamesha ke liye khul jate
hain — woh keys jama karne se saaf hal hai.

Groq ki hadd **tokens** mein hai aur OpenRouter ki **requests** mein — is liye chhoti files
bohot saari ho to OpenRouter pehle marta hai, aur bari files ho to Groq.

## Files

- `llm.mjs` — ladder, failover, chunking, retry. Baaki scripts isi ko import karti hain.
- `batch.mjs` — ek prompt, bohot si files, resumable, `_batch-log.tsv` likhta hai
- `qa.mjs` — local checks (muft) + optional semantic check, `_qa-review.md` banata hai
- `sync-keys.mjs` — `keys.txt` → `.env`. **Sirf yeh `.env` likhta hai.**
- `keys.txt` — aap yahan keys paste karte hain
- `jobs/` — har delegation ka apna folder (prompt, rubric, golden, out)

Poora QA protocol: `.claude/skills/delegate/SKILL.md`

## Notes / limitations

- **Summary pe andha bharosa nahi.** Agar kuch chhoot jaye to pata nahi chalta — isi liye
  QA lazmi hai aur `delegate` skill ka pilot gate hai.
- **Adhoora jawab ab chup chaap nahi guzarta.** Gemini ka `MAX_TOKENS` aur
  OpenAI-compatible ka `finish_reason: length` — dono foran error bante hain, taake kata
  hua summary sahi na samjha jaye. Aisa ho to `--max-out` barha dein.
- **Gemini ke "thinking" tokens bhi output budget se khaate hain.** Is liye
  `thinkingBudget: 0` set hai — warna asal jawab beech mein kat jata hai (yeh asal mein
  hua tha: 1500 ka budget soch mein chala gaya aur bullet 7 pe jawab ruk gaya).
- **OpenRouter ki list mein paid aur free dono models hain**, naam sirf `:free` se alag
  hota hai. Is liye `only: [/:free$/]` filter lagaya hai — paid model galti se bhi nahi
  chun sakta.
- **Free tiers badalte rehte hain.** Limits `llm.mjs` ke `PROVIDERS` mein ek jagah likhi
  hain — kam ho jayen to wahan theek kar dein.
- **Pacing tokens se hoti hai, requests se nahi.** Groq ki asal hadd 8K TPM hai; har chunk
  call ~5K tokens leti hai, to requests-per-minute se hisaab lagane par seedha 429 milta
  tha (ek test mein 9 baar). Ab `tpm` field se gap nikalta hai — 429 sifar ho gaye.
- **Groq chunked kaam ke liye theek nahi.** 9K token ki file par 5 chunks = ~1m53s, jabke
  Gemini wohi kaam ek shot mein 10-15s mein karta hai. Isi liye bade input par ladder khud
  Gemini ko upar le aata hai — Groq sirf chhoti single calls ke liye tez hai (0.8s).
- **Groq ka asal bandhan TPM/TPD hai, RPM nahi.** `gpt-oss` pe 8K tokens/min, 200K/din.
  Isi liye bade file pe Gemini pe chala jata hai.
- **Free providers models bina bataye hata dete hain.** 20 Aug 2026 ko Groq ne
  `llama-3.3-70b-versatile` aur `llama-3.1-8b-instant` dono hata diye — dono is tool ke
  hardcoded defaults the. Kuch toota nahi kyunki har run mein live list se naam chunta
  hai; wo khud `gpt-oss-120b` par chala gaya. Yehi wajah hai ke naam hardcode karna
  kaafi nahi.
- **Ollama ka `num_ctx` 8192 set hai.** Zyada chahiye to `llm.mjs` mein badlein, magar
  8 GB VRAM pe usse zyada slow ho jata hai.
- **Cohere use nahi hota** — uski free key non-commercial only hai, xLoop kaam ke liye
  illegal.
- **Lamba `retry-after` = budget khatam, rate limit nahi.** Groq 429 ke sath `retry-after`
  **713 second** tak bhejta hai. Pehle `fetchRetry` usay maan kar 12 minute so jata tha —
  batch "running" dikhta rehta tha magar ghanton mein ek file na hoti. Ab 60s se lamba
  `retry-after` foran throw hota hai taake key rotation chal sake. **Pehchan (agar phir kabhi
  ho):** `_batch-log.tsv` mein per-file waqt 500s+ chala jaye.
- **`--provider` forcing se ladder ka bima khatam ho jata hai.** 23 Aug 2026: Gemini ka
  rozana quota khatam tha; `--provider gemini` ke sath 170-file batch ki **har** file FAIL
  hui, jabke default ladder par wohi kaam chal gaya. Provider force sirf test ke liye — bulk
  hamesha ladder par.
- **Gemini ka 429 do alag cheezein hain.** `"You exceeded your current quota"` = **rozana
  cap** (aaj ke liye khatam), jabke RPM wala 429 chand second baad theek ho jata hai. Pehli
  soorat mein intezar bekaar hai.
- **Groq chunked input par khaali jawab deta hai.** `gpt-oss-120b` bari file (chunking ki
  nobat aaye) par khali `choices` bhejta hai. Chhoti single call par bilkul theek (2-4s).
  `--max-out 4000` madad karta hai. Isi liye ladder bari file par Gemini ko upar lata hai.
- **Batch se pehle input ka size distribution dekh lein.** Sab ek sath chalane par bari files
  ka block poori queue ko rok deta hai (17-39s + failures). Chhoti aur bari alag chalayein.
- **`_batch-log.tsv` yeh nahi batati ke kaunsi key chali.** Log mein sirf provider ka naam
  hai (`groq`), key ka number nahi. Rotation ka pata sirf live output se chalta hai
  (`⇄ groq key 1/2 ...`), aur wo `| tail` ke peeche buffer ho jata hai. Yani baad mein
  yeh sabit karna mushkil hai ke kisi key ne kaam kiya ya nahi. Agar zaroorat pare to
  `llm.mjs` ke `keyCursor` ko result mein wapas bhej kar log mein ek column add kar dein.
- **`qa.mjs` ka semantic check `maxOut: 300` par khaali jawab deta tha.** gpt-oss ke reasoning
  tokens hi poora budget kha jate the. Ab `tier: quality` + `maxOut: 1200`. Wahi bug jo Gemini
  ke `thinkingBudget` mein tha — chhota output budget + reasoning model = khaali jawab.
- Token count `chars / 4` se andaza lagaya jata hai — bilkul theek nahi, magar budget ke
  liye kaafi hai (thora conservative rakha gaya hai).
