---
date: 2026-11-25
tags: [xloop, dev-handoff, homepage, data-ai-readiness, ai-security-tool, zeeshan]
---

# Homepage + both tools: Zeeshan's questions and answers (Wed 25 Nov 2026)

Zeeshan's Teams message (25 Nov, 1:50 am) asked for decisions before the homepage and both tools go live. Related: [[2026-11-25-xloop-linkedin-restart-plan-and-site-status]] · [[2026-11-24-xloop-readiness-tool-dev-answers]] · [[2026-11-13-xloop-ai-security-tool-workflows-with-emails]] · [[2026-09-18-xloop-homepage-revamp-review]]

## Status per Zeeshan

| Item | Built | Waiting on |
|---|---|---|
| Homepage revamp | WebGL hero beams, logo strip, unified case study cards, navigation, footer | Final review call with Sana (morning) |
| Data & AI Readiness tool | Full flow, results screen, email workflows, company size bands, 6-page A4 personalized PDF report | (1) v4 workbook + latest wording doc from Sana; (2) dev checks the `data-ai-readiness` row on the live Apps Script sheet. Booking link = `/contact-us` until the calendar link is ready |
| AI Security tool | UI, 45 questions, API pipeline | Decision: rescale scoring now, or build the full v2 flow first |

## Answers

### 1. Homepage: checklist for the review call
- **No never-name clients on the case cards.** The Sep v2 doc featured Majid Al Futtaim and Pick n Pay by name; both are now off-limits (MAF never named, Pick n Pay never as a modernization client). All cards anonymous but specific
- Pick n Pay / retailer card uses Irfan's wording (MySQL → Snowflake, 5–6 h → 10–15 min), not "SAP ERP/BW" or "6x"
- **Logo strip:** logos only, no details beside them. No MAF or Kayali logos
- **No CTA points at a 404.** If the AI Security tool and the Readiness tool aren't live on launch day, those cards link to the 30 minute reviews until they are
- No uncited stats or animated counters that render "0+"
- CTAs name a deliverable (no "Let's Talk AI" / "Talk to us")
- Menu: the revamp menu (Data & AI Consulting, no Chat Genie, Digital Twin, xCrowdIQ, xVoltIQ, Design Studio, Smart Cities, Manufacturing, EdTech, Telco)
- Title tag: no doubled "| xLoop Digital | xLoop Digital"; US spelling throughout

### 2. Data & AI Readiness tool: files to send
- **v4 workbook:** `Notes/2026-10-28-xloop-data-ai-readiness-assessment-v4.xlsx`
- **Latest wording doc** (blocker short names, initiative wording, page routing, proof lines, lead rating Exclude → C → A → B, learner email): `Notes/2026-11-24-xloop-readiness-tool-dev-answers.docx`
- **Learner routing removed (Sana, 25 Nov):** no "Individual learner" role, no xCelerate email or link. Updated in the dev answers md/docx, the 13 Nov flow md/docx and the v4 workbook (lead rules + role option). The 13 Nov flow PDF is now stale; don't send it
- Open item still in that doc: Irfan as signer of the Data/AI emails is "[Sana to confirm]"
- `/contact-us` as the booking link until the calendar link exists: fine

### 3. AI Security tool: DECIDED 25 Nov 2026, full v2 flow first (Sana)

Sana chose to build the full v2 flow before launch (scoring rescale + results before form + report form + 9-domain PDF + 4 tier emails, Farrukh signs). The two-step option below was not taken.

#### Original recommendation (not taken)
**Launch in two steps (Sana to decide):**
- **Now:** v3 rescaled scoring (0–100%: weakest answer = 0, formula in the 13 Nov workflows doc and the `v3-rescaled.xlsx`), results on screen before any form (overall score, tier, 9 domain bars, strongest and priority domain), primary CTA "Book a 30 Minute AI Security Review", Farrukh Feroze as signer. Hide "Get the full report" until the PDF exists
- **Next sprint:** report form → 9-domain PDF → 4 tier emails (copy already written in the 13 Nov workflows doc)
- **Why:** the tool was due 16 Nov; the old 25–100% scale is wrong (nobody can score Exposed), so it must change anyway; the PDF is the slowest part and shouldn't hold up launch. Never launch on the old scale

## Reply to Zeeshan (draft)

> Thanks Zeeshan, great progress.
>
> 1. Homepage: happy to review this morning. I'll check the case cards and logo strip for client names, and that no CTA points to a page that isn't live yet.
> 2. Readiness tool: attaching the v4 workbook (2026-10-28-xloop-data-ai-readiness-assessment-v4.xlsx) and the latest wording doc (2026-11-24-xloop-readiness-tool-dev-answers.docx). It has the blocker short names, initiative wording, page links, proof lines and the lead rating rules (Exclude → C → A → B). /contact-us is fine as the booking link for now. One change: please remove the "Individual learner" role option and the xCelerate learner email from the tool. The diagnostic is only for senior professionals, and xCelerate is a separate audience. Students who take it anyway land in C nurture through the personal email rule.
> 3. AI Security tool: please build the full v2 flow before it goes live, so it works the same way as the Data & AI tool: v3 rescaled scoring (0–100%), results on screen before any form, the report form, the 9-domain PDF and the 4 tier emails, signed by Farrukh Feroze. Please don't go live on the old 25–100% scale in the meantime. The scoring formula, results copy and email copy are in the attached workflows doc and the v3-rescaled workbook, and the title/meta/intro are in the SEO pack. Can you share a target date?

## Next steps
- [ ] Sana: confirm the AI Security launch path, then send the reply + 4 files (v4 xlsx, dev answers docx, workflows docx, v3-rescaled xlsx)
- [ ] Sana: homepage review call with Zeeshan (checklist above)
- [ ] Sana: confirm Irfan as signer of the Data/AI readiness emails
- [ ] Once tools are live: AI Security tool post + Humza MH13 go back on the LinkedIn schedule

## Handoff status (Wed 25 Nov 2026, 10:20)

Sana sent Zeeshan the v4 workbook + dev answers docx. Both were updated at ~10:15 (learner removal) and the workbook again at 10:20 (section E / A9 case now the South African retailer MySQL → Snowflake line, SAP wording gone). If the send was before that, resend both.

Still to send / answer:
- [ ] Readiness: `2026-11-18-xloop-data-ai-readiness-assessment-seo-pack.md` (title, meta, intro; the dev answers doc references it)
- [ ] Readiness: confirm Irfan Shaikh as signer of the Data/AI emails
- [ ] Readiness: calendar booking link (later; `/contact-us` until then)
- [ ] AI Security: launch decision + `2026-11-13-xloop-ai-security-tool-workflows-with-emails.docx` + `2026-11-13-xloop-ai-security-readiness-assessment-v3-rescaled.xlsx` + `2026-11-13-xloop-ai-security-assessment-seo-pack.md`
- [ ] Homepage: review call (checklist above)
