---
date: 2026-09-01
tags: [xloop, marketing-brain, release-1, audit, evidence]
---

# 00 — Environment Audit

**Release 1 · xLoop AI Growth Engine · Marketing Brain**
Audit performed 2026-09-01. Read-only. Nothing was modified, deleted or overwritten.

---

## 1. Scope of the inspection

| Instruction | What was actually done |
|---|---|
| "Inspect `C:\projects`" | **`C:\projects` does not exist.** The working vault is `C:\Claude-Projects`. The real xLoop source corpus is `C:\Users\Sana Qazi\OneDrive - xLoop`. |
| Do not overwrite / delete | Confirmed. All access was read-only; text was extracted to a session scratchpad, not into source folders. |
| Do not modify the production website | Confirmed. The live site was read over HTTP only. |
| Do not modify production repositories | Confirmed. No repository other than this notes vault was touched, and that only by adding a new folder. |

**Where this Marketing Brain lives:** `C:\Claude-Projects\Projects\xloop-marketing-brain\`

The brief specified `/xloop-marketing-brain/`. The vault's own `CLAUDE.md` reserves `Projects/`
for project files, so the brain was placed there to stay consistent with the vault convention.
Moving it to the vault root is a trivial change if preferred.

---

## 2. What exists — inventory by location

### 2.1 `C:\Claude-Projects` (the notes vault) — authoritative for prior xLoop marketing decisions

| Path | What it is | Relevance |
|---|---|---|
| `Notes/2026-08-25-nepra-followup-letters-project.md` | Work log — 87-company NEPRA mailing | **HIGH** — approved claims, audience research |
| `Notes/2026-08-25-nepra-homepage-notice-and-landing-page.md` | Work log — NEPRA web campaign | **HIGH** — locked decisions, approved/prohibited claims, live blocker |
| `Notes/2026-08-25-claude-code-bootstrap-setup.md` | Tooling note | Low |
| `Projects/NEPRA Follow-Up Letters/` | ~87 generated advisory letters (.docx + .pdf) | HIGH — evidence the campaign actually shipped |
| `Projects/NEPRA Website Campaign/` | Copy deck, content spec, SEO/AEO doc | **HIGH** — the most rigorous marketing artefact xLoop has produced |
| `Tools/llm/` | Local free-model delegation tooling | Operational |
| `CLAUDE.md` | Vault operating rules | Operational |

Those two Notes files are the single most valuable existing marketing asset in the environment.
They are the only place where claims have been explicitly split into approved vs. prohibited,
where a competitor claim was checked against a primary regulator-adjacent source, and where an
error in xLoop's own deliverable was found and logged. Release 1 inherits and extends that discipline.

### 2.2 `C:\Users\Sana Qazi\OneDrive - xLoop` — the main corpus (~400 files at root, plus subfolders)

| Category | Representative files | Authority |
|---|---|---|
| **Corporate decks** | `Desktop/Corp decks/Corporate Deck V10.pptx` (May 2026), `Ai Deck.pdf` (Aug 2026), `Solutions focus deck.pptx`, `Engineering Deck 2026.pdf`, `Corporate Deck 6 - Solutions focus.pptx` | L1 — but six generations coexist with conflicting numbers |
| **Board / investor** | `xLoop Performance Matrix 26-29.pptx`, `BOD DECK.docx`, `Corp decks/BOD Deck V1-V3` | L1 internal — **not for public use** |
| **Brand** | `Microsoft Teams Chat Files/xLoop - Brand Guidelines_v1e.pdf`, `Hiba's Data/.../Brand Guidelines - xloop.pdf` | **L1 — official guidelines exist.** Do not manufacture new ones. |
| **Brand strategy (external)** | `Microsoft Copilot Chat Files/xLoopBrandStrategy.docx` | **Agency proposal, not ratified xLoop strategy** — see §5 |
| **Website content** | `Desktop/xLoop Website Documents/` (38 files), `AI Consulting page revamp 2026 final.docx`, `xLoop_Pillar_Digital_Transformation_Brief.docx` | L1 — the newest two carry the emerging positioning |
| **Service page content** | 11 service-page docs (GenAI, AI Agents, Computer Vision, Conversational AI, Predictive Analytics, ML, LLMs, Digital Twin, Digital Engineering x3) | L1 |
| **Product / solution** | `xCrowdIQ - Products.docx`, `xVoltaware Solution Page.docx`, `xVision Deck.pdf`, `KNOWLEDGE BOT BROCHURE.docx`, `Graymatics Brochure Content.docx`, `Adosterr`, `DIGITRACK` | L1 — mixed ownership, see §5 |
| **Case studies** | `Case studies info to feed Claude.docx`, `xLoop Case Studies Content Portfolio Page.docx`, `Case Studies for Inner Cards.docx`, five "Rebranded" case-study docs | L1 |
| **Client / project register** | `Projects xLoop.xlsx` — 31 rows, **named clients** | **L1 internal — CONFIDENTIAL** |
| **Market / commercial** | `Market Considerations Typed.docx` — xCrowdIQ Qatar TAM/SAM/SOM, pricing, GTM, 18-month plan | **L1 internal — CONFIDENTIAL** |
| **ICP research** | `Documents/Who buys AI transformation services - xLoop ICP Explorations.docx` | **L1 — the strongest strategic document in the corpus** |
| **Marketing ops** | `2026 Mktg Plan to feed.docx`, `Marketing Q3 2026.pptx`, `Marketing Budget 2026.xlsx`, `Marketing Brand Issues.docx` | L1 |
| **Search / analytics** | `Search Trends & Ads Research.docx`, `Keyword Strategy for Digital Engineering Landing Page.docx`, `Documents/Top performing pages report SEO.xlsx`, `Downloads/11.11.25 Search Console.xlsx`, `Tech Audit.xlsx` (Screaming Frog export) | L1 |
| **Leads** | `Microsoft Copilot Chat Files/xLoop Website Leads.xlsx` | **L1 — PERSONAL DATA, handle under privacy rules** |
| **NEPRA** | `XLoop_NEPRA_Compliance_Letter.docx`, `Microsoft Copilot Chat Files/NEPRA-ACT-Wind-IT-OT-Audit-Proposal-17-11-2025.docx`, `Documents/NEPRA Letter list.../NEPRA_Companies_CTO_CISO_CEO_Address v2.xlsx` | **L1 — proposal + target list, CONFIDENTIAL** |
| **Content library** | ~250 blog / social / PR / lead-magnet .docx files | L1; low individual value, high aggregate value as a content inventory |

### 2.3 Live web (Level 1 — official xLoop)

- `https://www.xloopdigital.com/` — homepage
- `https://www.xloopdigital.com/sitemap.xml` — **128 URLs**; full site architecture captured
- `https://www.xloopdigital.com/ai-consultancy` and `/digital-engineering` — pillar pages
- `https://www.xloopdigital.com/services/nepra` — **the NEPRA page is live** (see §5)
- `https://www.xloopdigital.com/insights/about-us`
- `https://www.xloopdigital.com/xlab/xVoltIQ`

### 2.4 Not present / not found

| Expected | Status |
|---|---|
| `C:\projects` | **Does not exist** |
| CRM | **None.** Confirmed — matches the brief |
| Existing xloop-marketing-brain project | **None.** Greenfield build; nothing overwritten |
| Website source repository | **Not on this machine.** The React site cannot be inspected at code level |
| Ahrefs / Semrush / any keyword-volume tool | **None.** All "search demand" material in the corpus is Google Trends *relative interest*, not volume |
| Signed contracts / SOWs | **Not found.** Deal values and client permissions cannot be verified here |
| Approved-logo / approved-client-reference list | **Not found.** `2026 Mktg Plan` names this as an open item in its own words |

---

## 3. What is authoritative

Ranked, for use by every future workflow:

1. **The live website** — it is what buyers and AI answer engines actually read. Where the site and a deck disagree, the site is what is publicly claimed.
2. **`xLoop - Brand Guidelines_v1e.pdf`** — the only official brand document. Colours, typefaces, values, voice, name usage and tagline come from here.
3. **`Who buys AI transformation services - xLoop ICP Explorations.docx`** — the only document that segments buyers by *buying motion* rather than job title. It is materially better than the ICP supplied in the Release 1 brief.
4. **The two NEPRA Notes files** — the only place with an explicit approved/prohibited claim register.
5. **`AI Consulting page revamp 2026 final.docx` (Aug 2026)** and **`xLoop_Pillar_Digital_Transformation_Brief.docx` (Sep 2026)** — the newest positioning thinking and the clearest signal of direction.
6. **`Ai Deck.pdf` (Aug 2026)** — the most recent full commercial deck.
7. **Search Console export + GA4 top-pages export** — the only hard behavioural evidence available.

---

## 4. What appears outdated

| Item | Evidence | Action |
|---|---|---|
| Five-plus corporate deck generations still circulating | `Corporate Deck 5`, `6`, `6 - Solutions focus`, `V10`, `Solutions focus deck`, `with Data Governance` — none marked current | Nominate one current deck; archive the rest |
| `Home page Content.docx` (Dec 2024), `Homepage 2.0.docx` (Jun 2025) | Both feature products (`PredictaMax`, `Healthcare AI`) and stats (`97% Diagnostic Accuracy`, `2M+ Charts Generated`, `$25M Downtime Prevented`) that **appear nowhere on the live site** | Superseded — see conflicts doc |
| `Mega menu.docx` | Describes a nav ("Digital Transformation / Development & Security / Solutions") that **no longer matches the live nav** (xTend / xLab / xSecurity / xCelerate) | Superseded |
| `Marketing Brand Issues.docx` | States plainly: "Current tech lingo we use is obsolete" — self-identified, still open | Feed into brand work |
| GA4 top-pages export | Range **2024-08-01 to 2025-05-08**, and its URLs (`/services/ai&ml`, `/bootcamp/artificial-intelligence`, `/xlab/`) belong to a **previous site structure** | Historic only. Do not use for current decisions |
| `Search Trends & Ads Research.docx` | Recommends running ads "Q4 2025" | Timing stale; the analysis remains useful |

---

## 5. What conflicts with other material

Full treatment in `01_positioning/positioning_conflicts.md`. Headlines:

- **Founding year:** About Us says **2020**; `xLoop Performance Matrix 26-29` says **"Formed in 2022"**.
- **Headcount:** About Us **80+**; Corporate Deck V10 and Solutions deck **120+**; Performance Matrix **"100 AI and Cloud engineers"**.
- **Countries:** decks say **7+ / 10+ served**; the NEPRA page says **8**; `Ai Deck` shows **nine flags**; Performance Matrix says **"formal presence in 4 countries"** and **"40 clients in 8 countries"**; the NEPRA letter says **four offices**.
- **Solutions delivered:** **75+** (Corporate Deck, `/ai-consultancy`) versus **50+** in the *newer* `Ai Deck` (Aug 2026). The newer number is lower.
- **Diversity figures appear transposed** between About Us (20% female / 23% ethnic minority) and the decks (23% female / 20% female in management / 100% ethnic minorities).
- **`xLoopBrandStrategy.docx` is an external agency pitch** — it contains Plan A / Plan B service tiers. Its strategic argument (global AI firm, GCC-first, Pakistan as engineering hub) is strong, but it is **a vendor's recommendation, not ratified xLoop policy**. It must not be cited as xLoop position until confirmed.
- **`xVoltIQ` / `xVoltaware`**: the internal solution page credits **BP Retail, Morgan Sindall and Electronic Arts** under a heading "Impact We've Created". Those are Voltaware's customers. The live page has correctly anonymised them, but still presents "15% reduction in residential energy waste" and "20% reduction in peak load" as xLoop outcomes with no attribution to the underlying technology partner. **Evidence required.**
- **NEPRA URL drift:** prior planning specified `/services/nepra-it-ot-compliance`; the live page is `/services/nepra`. Harmless in itself, but every internal document pointing at the old path is now wrong.
- **NEPRA regulation range:** the live page says **Regulations 4-11**. The Notes file records a correction to **4-12** (Reg. 12 = PowerCERT Coordination), found 2026-08-31. **The live page has not been corrected.** This is a live, publicly visible factual error on a page that 87 letters point at.

---

## 6. What is missing

| Gap | Consequence | Suggested owner |
|---|---|---|
| Approved client-reference / logo list | Marketing cannot safely name clients; every case study is anonymised, which weakens all proof | Sales + Legal |
| Signed-off statistics register | Homepage stats (99.7%, $50M, 92%, 98%) have no traceable source | Marketing + Delivery |
| Real keyword volumes | Every search recommendation in the corpus rests on Google Trends relative interest | Marketing (needs a tool) |
| Current org facts of record | Four documents give four answers on founding, headcount, countries, clients | CEO office |
| A single current corporate deck | Sales is choosing between five | Marketing |
| Website source access | Cannot properly audit schema, rendering, internal links or Core Web Vitals | Engineering |
| NEPRA Category-1 determination | 87 letters and a live page sell a "NEPRA Compliance Audit"; whether that requires a PKCERT-registered Cat-1 firm is **still unresolved** | Security practice |
| CRM | No system of record for lead to meeting to opportunity; the north-star metric is currently unmeasurable | Sales ops |
| Analytics-to-outcome linkage | GA4 and Search Console are not connected to any lead or revenue record | Marketing + Sales ops |

---

## 7. What needs human verification (blocking or high-impact)

1. **NEPRA Category-1 / PKCERT requirement** — supersedes all other NEPRA work.
2. **The live NEPRA page says Regulations 4-11; the correct range is 4-12.** Fix on the live page.
3. **Which corporate facts are true** — founding year, headcount, countries, clients, solutions delivered.
4. **Which client names may be used publicly**, and with what wording.
5. **Provenance of every homepage statistic.**
6. **xVoltIQ / Graymatics / Adosterr / Digitrack** — which are xLoop products, which are partner or resold technology, and what may be claimed for each.
7. **Whether the GCC-first / Pakistan-as-hub brand strategy is ratified** or is one vendor's opinion.
8. **Current commercial status of xCrowdIQ** — `Market Considerations` projects $3-5M ARR by Q2 2026 and $8-12M by Q3 2026. It is now Q3 2026. Actual status unknown from this machine.

---

## 8. Method note

Text was extracted from `.docx`, `.pptx`, `.xlsx` and `.pdf` with a local Node extractor plus
`unzip` and `pdftotext`, into a session scratchpad. No source file was opened for writing.

Roughly 90 documents were read in full; the remaining ~250 content files (blogs, social posts,
PR drafts, lead magnets) were inventoried by name and date rather than read, because they are
downstream content rather than positioning evidence. That decision is recorded here so a later
release can revisit it deliberately.
