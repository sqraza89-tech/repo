<!-- Isay copy kar ke apne project ke ROOT mein `CLAUDE.md` naam se rakhein.
     < > wale hissay apne hisaab se badal lein. -->

# <Project ka naam>

<Ek line: yeh project kya hai — misal "Yeh ek Obsidian vault hai, sirf markdown notes,
code nahi." ya "Yeh ek Next.js app hai."> 

## Kaam kaise karna hai

<Yahan wo cheezein likhein jo aap har baar Claude ko dohratay hain. Misal:>

- Har naya document `Notes/` folder mein banao
- File ka naam: `YYYY-MM-DD-topic-name.md`
- Har file ke shuru mein frontmatter:

```
---
date: YYYY-MM-DD
tags: []
---
```

- Headings (`##`) aur bullets use karo, lambe paragraph se bacho
- Action items `## Next steps` ke neeche checkbox list mein

## Automatic saving

Ek Stop hook (`.claude/hooks/auto-note-check.sh`) har response ke baad Claude ko yaad
dilata hai ke is turn mein kuch save karne laayak tha ya nahi.

- Sirf tab save karo jab cheez **clearly important** ho: koi decision, project fact,
  kaam ka reference, ya action item jo baad mein dhoondna pare
- Casual baat, ek-baari sawal, trivial — skip
- Kuch na mile to chup chaap ruk jao — user ko is check ka zikr na karo

## Folder structure

```
<Notes/          — rozana ke notes, ideas, summaries>
<Projects/       — kisi ek project ki tamam files>
<Reference/      — permanent reference material>
Tools/           — chhoti scripts (llm CLI waghera)
```

## Sasta kaam — free models se

Lambi files parhna aur bulk mechanical kaam free models se karwana hai, taake Claude ke
tokens bachein. Tool: `Tools/llm/` — poora protocol `.claude/skills/delegate/SKILL.md`
mein hai (wo skill khud trigger hoti hai).

**Kab delegate karna:** bohot saari files summarize/tag/reformat/classify karni hon, ya
koi bada file parhna ho jis ka sirf nichod chahiye.

**Yeh enforce hota hai, sirf likha hua nahi.** `.claude/hooks/big-read-gate.mjs`
(PreToolUse par) 40 KB se bari text file ka `Read` **rok deta hai** aur `llm.mjs` wala
command deta hai. Escape hatches: `offset`/`limit` ke sath partial read, `.claude/` ya
`Tools/` ke andar ki files, ya `touch .claude/hooks/state/allow-big-read`.

**Kab bilkul nahi:** design decisions, client-facing final wording, architecture ya
planning, ya koi bhi cheez jo main mechanically verify na kar sakun.

**Niyam (yeh torna nahi hai):**
- Blind assign kabhi nahi — pehle main khud 3–5+ baar karunga, tab instruction dunga
- Pilot 3 files pe pass hue baghair bulk nahi chalega
- QA do baar: pehle wo khud (`qa.mjs`), phir main (saare failures + pass ka 20% sample)
- Client/NDA content pe `--private` — wo sirf laptop wale Ollama pe jayega

## Zaroori rules

- **`Tools/llm/.env` ko kabhi hath mat lagana** — na likhna, na keys badalna. Sirf
  `sync-keys.mjs` usay likhta hai. Key chahiye to user `keys.txt` mein daalega, phir
  `node Tools/llm/sync-keys.mjs` chalana hai
- Existing file replace karne se pehle poocho
- <Apne project ki no-go cheezein yahan: misal "`.obsidian/` folder ko touch mat karna">
