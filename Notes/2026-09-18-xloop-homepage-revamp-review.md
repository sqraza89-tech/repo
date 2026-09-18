---
date: 2026-09-18
tags: [xloop, homepage, site-revamp, case-studies, lead-gen, claims]
---

# xLoop Homepage Revamp — Sales and CTO Review Applied

Source: `OneDrive - xLoop/Microsoft Teams Chat Files/2026 homepage revamp v1 1.docx`
Output: `Notes/2026-09-18-xloop-homepage-revamp-v2.docx`

Related: [[2026-09-16-digital-transformation-pillar-seo-aeo-review]] ·
[[2026-09-17-legacy-system-modernization-page-content]] · [[2026-09-16-genai-readiness-assessment-v2]]

## Feedback received (sales + CTO, via Sana)

1. Featured lead-gen card (Section III) was AI Security. Must be a Data & AI diagnostic, since the
   page opens on data and AI. AI Security tool moves to xSecurity pages.
2. Industry section must feature real case studies per industry. No manufacturing clients:
   replace Manufacturing with **Mining (Harmony Gold)**.
3. Closing CTA ("Serious enterprises don't run on generic AI") must relate to data and AI, and
   reads as condescending toward other firms.
4. Case studies: only the biggest and best, top 5. CTO named Majid Al Futtaim and Pick n Pay.

## What v2 does

- **Section III:** "Is Your Data Ready for AI?" Version A (now): books a 30-minute Data & AI
  Readiness Review. Version B (when the tool ships): two scores, ready to build and safe to
  scale, matching the v2 assessment design.
- **Case studies:** heading changed to "Selected Client Work". Top 5: Majid Al Futtaim (AWS→Azure
  migration plan, jointly with Microsoft), Pick n Pay (single Snowflake source of truth), SS&C
  (COBOL→Java with AI), national immunization platform (billion records), Alfalah Investments
  (LLM investment assistant). Alternates: Canadian health RAG search; ABHI.
- **Industries:** six tiles with proof lines. Recommend removing Smart Cities, Telco/ICT and EdTech
  (no delivered work found).
- **CTA band:** "Talk to Our Data and AI Leads". Same 30-minute review as Section III, one booking link.
- **Corrections:** remove Digital Twin (blocked claim C12); add Digital Engineering to the DT
  roll-up and nav; hide the readiness assessment footer link until live; SA and Hungary pages
  are allowed as "serving clients in…" pages but not as office locations.

## Findings

- **The live homepage's four case boxes all carry prohibited or unsourced stats:** xVision
  99.7%/$50M, Meta Human 40%/60%, Canadian health 80%, xServe 45%/78%. v1 of the homepage doc said
  "same content as we currently have". v2 replaces them.
- **Pick n Pay and "SSC" are on the public logo wall**, and the brain's rule (A17) lets logo-wall
  clients be named. Earlier notes saying "never name SS&C / Pick n Pay" were too strict. Legacy
  and DT specs still anonymize them; naming them there is Sana's call.
- **MAF case exists** (`MAF_Wefi_Case_Studies.pptx`): a 3–3.5 month AWS→Azure **discovery and
  plan** covering Vertica, TCO model and migration waves, delivered jointly with Microsoft. This
  was a plan, not an executed migration, so it still isn't Azure delivery evidence. Same deck
  has **Wefi Tech**: advisory design of a Snowflake modernization (SQL cache plus ERP data).
- **Harmony Gold** appears in no file, deck or logo.
- **Testimonial quotes:** the DT spec (v2.2) and Legacy spec (v1.4) had paraphrased Cloud Titans and
  Serefin inside quotation marks. Fixed to verbatim in DT **v2.3** and Legacy **v1.5**. Source:
  `OneDrive - xLoop/Desktop/Client Testimonials/Client testimonials xLoop.docx`.
- The Serefin testimonial also describes an AI proof of concept and a transcription tool for
  "tens of thousands of hours of call and audio recordings". That's named AI proof, currently unused.

## Decisions needed

1. Has MAF approved being named? On 2026-09-15 MAF was internal-only. Until approved, use "A
   leading Middle East retail and real estate group".
2. Harmony Gold: what was delivered, and can they be named?
3. Is "SSC" on the logo wall SS&C Technologies?
4. Remove Smart Cities, Telco/ICT and EdTech?

## Next steps

- [ ] Get the four decisions above
- [ ] Trace the "97% of organizations using GenAI reported a security incident" stat before it moves to xSecurity pages
- [ ] Decide whether to name SS&C and Pick n Pay on the Legacy and DT pages too (logo-wall rule allows it)
- [ ] Consider a Serefin AI case (transcription tool / AI PoC), which is named and approved via testimonial
