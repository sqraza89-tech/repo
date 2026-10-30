---
date: 2026-10-28
tags: [tekrevol, website, review, homepage, custom-software, premium]
---

# Review: homepage v2 + custom software page (team draft)

Files reviewed: `tekrevol-homepage-v2-preview-with-video (18).html`, `tekrevol-custom-software-page-clean (1).html` (Downloads, 28 Oct 2026). Positioning shift: software development first, AI as a capability, premium feel.

## Verdict

- The bones are good: real case numbers, a clear "how it starts" process, commitments, FAQs. The content can work.
- It does not feel premium because it is built like a lead-gen agency template: Poppins Bold, navy + legacy orange, a card grid in every section, an orange half-headline in every section, badges and "free consultation" everywhere. Premium is restraint, and this page is never quiet.
- Swapping in the new colors alone will not fix it. Type, density and tone have to change too.

## Design feedback

### 1. It's using the retired system
- Font is **Poppins** (bold/extra-bold). The brand system retired Poppins and Inter as "category defaults". Use **Host Grotesk 500** with tight tracking (-0.035 to -0.04em) for headlines, Regular for text, **JetBrains Mono** for eyebrows, labels and proof numbers.
- Colors are legacy: navy `#0B2A3F`, orange `#F47B20`, dark text `#1F2D3A`. The system says don't use the legacy orange, and navy was rejected as retro.
- Swap to: Carbon `#0C0807` (dark ground), Graphite `#1A1413` (raised dark), Pearl `#F2F1EF` (light ground), Chrome `#DADAD8` (hairlines), Molten Orange `#FF4F0F` (CTAs and one highlight per view), Flare `#FF8A3D` (hover).

### 2. The two-tone headline on every section
- "Results our clients **can measure**", "Pick the model **that fits your team**", "What happens **after you reach out**"… 10+ sections in a row.
- This is the single biggest "template" tell. Premium sites use one color for headlines and let size and space do the work.
- Fix: headlines in ink (or white on carbon). Orange only on the CTA and maybe one word on the whole page.

### 3. Too many boxes, too little space
- 14 sections on the homepage, almost all rounded cards with icon chips. Services, cases, ways of working, commitments, industries, podcasts all look the same.
- Fix: cut to ~8 sections, more vertical space between them, bigger type, fewer borders. Use hairline rules and grid alignment instead of cards. Let 1 or 2 sections be pure typography.

### 4. Hero looks stock
- Dark blurred photo of a laptop with code, plus three sticker medallions (Inc, Clutch, ISO) bottom right. Sticker badges read as budget.
- Fix: Carbon ground with the Molten gradient field or a molten-glass render, Strata motif building on the right as the one motion moment (per `09-website.md`). Move badges to a quiet proof band in white at ~60% opacity. Add a thin "spec row" under the hero (mono labels: Since 2018 · 4.8 Clutch · US UK UAE Qatar).

### 5. Proof is overloaded and dated
- Inc. 5000 **2022** shows up 5 times (hero pill, 2 stat tiles, recognition card, form). In late 2026, a 2022 ranking repeated this often makes the brand look like it peaked 4 years ago.
- Award wall has 6 medallions, including two with `[year]` placeholders and a 2020 award.
- Fix: one proof band, 3 or 4 strongest signals, once. Drop anything older than 2023 from the homepage.

### 6. Client "logos" are bold text
- The logo bar is company names in Poppins Bold (homepage) and boxed chips (custom page). It reads unfinished.
- Fix: real monochrome logos at even optical size, or remove the bar.

### 7. CTA noise
- "Get a free consultation" appears ~8 times on the homepage, plus "Book a call", "Get a fixed quote", "Plan a team", "Talk about a takeover", "Ask for a client reference".
- Fix: one primary CTA, repeated at hero, mid-page and close. Secondary actions as text links. Drop "free" from the button (it's a discount signal); something like "Start a project" or "Plan your build".

### 8. Visual system breaks in places
- Podcast/webinar thumbnails are external graphics (red, blue, different fonts). Industry cards use generic stock photos with dark gradients.
- Fix: re-crop podcast tiles into a brand frame (carbon, speaker cutout, mono label), or move them off the homepage. Industry images in the brand's imagery style or none.

### 9. Unfinished bits visible
- `[Client name]`, `[Company]`, `[Title]`, `[year]`, `[Pull a one-line quote from this video]`, `[One phone number]`, and a dev note in the footer ("Keep current footer links. Replace the 14-city line…").
- Fine for a draft, but it hurts the review. Fill them before showing the CEO.

## Content feedback

### 1. Keyword stuffing makes it sound like an SEO page
- Homepage: "As a full cycle software development company", "Treat us as your software product development company", "What you can expect from us as your software development partner", "Software development company FAQs".
- Custom page: "custom software development" is in the H1 and 3 more H2s, plus "As a custom software development company" in the intro.
- Keep the keyword in the H1/eyebrow, title tag and FAQs. Everywhere else, write like a person. Premium brands don't keep telling you what category they are in.

### 2. Hero headline
- "The software development company that builds for the business you're becoming" — the idea ("the business you're becoming") is good, the line is long and the keyword phrase blunts it.
- Options (eyebrow in mono: `CUSTOM SOFTWARE DEVELOPMENT`):
  - "Software for the company you're becoming."
  - "Built for the company you're becoming."
  - "Software that grows as fast as you do."
- Subhead can carry the rest: what you build, for whom, AI where it pays off. "With AI where it pays off" is a strong line for the new positioning; keep it.
- Use the approved line "Young in approach. Enterprise in output." somewhere (proof band or closing CTA).

### 3. "Small and mid-sized businesses" positions down
- Custom page H1: "…for small and mid-sized businesses", and H2 "Why SMBs choose TekRevol". "Small" undercuts premium.
- Suggest "growing companies" or "mid-market companies". **Decision needed:** is the ICP SMB or mid-market? If it's SMB for SEO, keep it in the meta title and one body line, not the H1.

### 4. The rescue pitch is back
- "Project takeover — Best for a build another team left unfinished", "We take over projects other teams left unfinished", "A rebuild or rescue".
- This was rejected before as not premium (defines us by someone else's failure). Reframe as the next stage: "Taking a working product further", "Already have a build? We take it to production." Keep the Equitrip proof, drop the blame.

### 5. Too much reassurance
- "We reply within 6 hours" appears ~5 times. Plus "free consultation", "Honest advice", "An NDA before you share details".
- Repeated reassurance reads like a vendor trying to overcome distrust. Say the 6-hour reply once near the form. Keep the commitments block (it's good), cut the rest.

### 6. Testimonials signal offshore risk
- "I was initially hesitant due to past experiences with remote developers…" (used on both pages). It plants the exact doubt we don't want.
- Pick quotes about outcomes, judgment or partnership. The Keith Cascarelli quote on the custom page (milestones, process) is closer.

### 7. Facts to verify
- **500+ projects** here vs **800+** in the brand system's proof band. Pick one and use it everywhere.
- **OpenAI and Anthropic shown as "Partners"** next to AWS and Microsoft. Confirm a formal partnership exists; if not, remove or relabel as "We build on".
- Libido Health "80% fewer no-shows", Schology "150% retention" etc. say they come from published case studies; keep the source links handy.

### 8. What's working (keep)
- Results cards with one hard number each — strongest section on the page.
- "What happens after you reach out" timeline — clear and confident (rename the "Honest advice" step).
- Commitments block (IP, NDA, compliance from sprint one, one PMO).
- Custom page "When custom software makes sense" checklist + Rehkemper story — great buyer language.
- FAQ block with "Ask an AI assistant" — good for AEO.

## Suggested homepage structure (8 sections)

1. Hero — carbon, Molten field + Strata, short H1, one CTA, spec row
2. Proof band — 3–4 signals, logos in white, once
3. What we build — 4 pillars, not 8 cards (Custom software · Mobile and web · Enterprise and integration · AI where it pays off); rest as links
4. Results — the 5 case numbers, larger and more editorial
5. How we work — timeline + ways of working merged
6. Client voices — 1 video + 1 quote, real names
7. FAQ
8. Closing CTA — carbon, one line, one button

Cut or move: industries grid (to its own page or a single row of links), podcasts (to Insights), recognition wall (fold into proof band), separate commitments section (merge into How we work).

## Also from the brand guide

- Buttons should be **square with a 45° notch** on the top-right corner, not rounded pills. Notch only on the most important element in a view.
- Strata motif: stacked horizontal bars, widest at the bottom, brightening upward (Oxblood > Core Red > Molten > Flare). One per page.

## GPT mockup prompt (hero + results)

See chat 2026-10-29; prompt kept here so the team can reuse it.

```
Create a high-fidelity desktop website mockup (1440px wide, homepage top section) for TekRevol, a premium custom software development company. Style: quiet, expensive, editorial, like Linear, Vercel or Stripe, not a lead-gen agency template.

Brand system (follow exactly):
- Font: Host Grotesk, headlines Medium weight with tight letter spacing; small labels in JetBrains Mono uppercase.
- Colors: Carbon #0C0807 near-black background, Graphite #1A1413 raised panels, Pearl #F2F1EF light background, Chrome #DADAD8 hairlines, Molten Orange #FF4F0F used sparingly for the primary button and small accents only.
- Buttons are square-cornered with a single 45-degree notch cut on the top-right corner. No rounded pills.
- Headlines are one color only (white on dark, near-black on light). Never highlight part of a headline in orange.
- Lots of negative space, thin hairline rules instead of boxed cards, strict 12-column grid alignment.

Section 1, hero (Carbon background, full viewport):
- Top nav: white "TEKREVOL" wordmark left; links Services, Work, Industries, Insights, About; one notched orange button "Start a project".
- Left side: small mono label "CUSTOM SOFTWARE DEVELOPMENT". Large headline in white, two lines: "Software for the company you're becoming." Below, one short line in muted grey: "Custom software and mobile apps that keep up as you grow, with AI where it pays off." One notched orange button "Start a project" and a plain white text link "See our work →".
- Right side: abstract 3D molten glass render — flowing liquid glass and polished chrome glowing molten orange from within, layered translucent planes, soft reflections, dark carbon environment. Integrated with the "Strata" motif: stacked horizontal bars, widest at the bottom, brightening upward from oxblood to red to molten orange to light flare orange.
- Bottom of hero: a thin hairline rule, then a spec row of four small columns in mono labels and white values: "SINCE / 2018", "PROJECTS / 500+", "CLUTCH / 4.8 rating", "OFFICES / US · UK · UAE · Qatar".

Section 2, proof band (Graphite): a single row of six client logos in white at 60% opacity, evenly spaced, no boxes.

Section 3, results (Pearl background):
- Mono label "CLIENT RESULTS", headline in near-black: "Results our clients can measure."
- Five results laid out editorially in columns separated by thin vertical hairlines (no cards, no icons): each has a small mono industry label, the client name, one large number, and one short line. Energy / Kinder Morgan / 46% / fewer reporting errors. Healthcare / Libido Health / 80% / fewer session no-shows. Education / Schology / 150% / better student retention. Roadside / Hard Shoulder / 40% / faster response times. Real estate / Houze Hookup / 5M+ / property reels played.
- Large numbers in near-black, not orange.

Avoid: navy or blue, Poppins, rounded pill buttons, icon chips, stock photos of laptops or code, award badges or sticker seals, gradients on text, drop shadows, clutter. Render text crisp and spelled exactly as given.
```

## GPT mockup result (2026-10-30)

- Direction approved as the premium reference: carbon hero, molten-glass Strata, one-color headlines, mono spec row, hairline results grid.
- Fix before sharing: remove the IBM logo (not a client, GPT invented it); real logos only. Use the real TekRevol logo mark, not a typed wordmark. Buttons in Host Grotesk, not mono. More space above the results section. Hero H1 for SEO: the visible headline is the brand line, so "custom software development" must sit in the H1 tag or the title/meta (dev decision).

## GPT mockup part 2: What we build + How we work (2026-10-30)

- What we build (carbon): "One team, from first sprint to scale." 4 pillars (Custom software featured with notch + glow; Mobile and web apps; Enterprise and integration; AI where it pays off), then text links MVP · Cloud and DevOps · Staff augmentation · Dedicated teams.
- How we work (pearl): "Working software every two weeks." 5-step hairline timeline (We reply · Straight advice · A fixed quote · Your MVP · Working software), then 4 ways to work (Fixed-scope · Dedicated team · Staff augmentation · Taking a product further), commitments as one mono line, one "Start a project" button.
- Next prompt still to write: client voices, FAQ, closing CTA.
- Result felt cramped (Sana agreed). Decision: one section per GPT frame on a tall canvas (1440 x 1000–1100), 160px top/bottom, 120px side margins, one left edge. "Ways to work" split into its own carbon section (with commitments line + button); "How we work" = timeline only, one-line step text. Buttons in Host Grotesk, never mono.
- "How we work" redo (2026-10-30) approved as the spacing reference. Build tweaks: section padding 160–200px (mockup has ~330/400), darken step description grey for contrast, match right margin to left, "8–16" with en dash, optional orange line segment from step 1 to 2.
- "Ways to work" (carbon) approved. Build tweaks: equal text inset after each divider (col 1 is flush), last title clears the right edge, padding 160–200px.
- Final prompts given for: Client voices (pearl, video still + Keith Cascarelli/WTT quote, verify exact wording on Clutch), FAQ (pearl, "Software development, answered.", 6 questions, AI-assistant links), Closing CTA (carbon reeded light, "Let's build what comes next.", no second Strata, office cities + info@tekrevol.com).
- Client voices mockup: layout approved. GPT labeled its AI face "Keith Cascarelli, CEO, WTT"; remove/placeholder before sharing (fake face + unverified title). In build, video = a different real client; Keith's quote stays right. Add a column of gap before the quote, keep 160px below, keep hanging quote mark.
- FAQ mockup approved. Tweaks: darker answer grey, align top hairline with question text, headline 15–20% smaller. Build: sticky left column, FAQPage schema, write the 5 missing answers (2–3 sentences each, from team draft).
- Closing CTA mockup approved ("Let's build what comes next."). Fixes: button in Host Grotesk (all buttons, firm rule), drop "and the first call is free" → "Share a few details. We reply within 6 hours.", final background rendered from the brand guide's reeded-light prompt.
- Full homepage mockup set complete (hero+results, what we build, how we work, ways to work, client voices, FAQ, closing CTA). Before sharing: remove IBM logo and the Keith caption on the AI face; share images in page order with this file as notes.
- Figma reference board: main frame W 1440, vertical auto layout gap 0, 12-col grid (margin 120, gutter 24). One clipped section frame per image (W 1440): Hero 960 · What we build 560 · How we work 660 · Ways to work 840 · Client voices 1040 · FAQ 980 · Closing CTA 900 (5,860 total; manual Y: 0 / 960 / 1520 / 2180 / 3020 / 4060 / 4960, no auto layout).
- Figma board assembled (2026-10-30, Sana's Drafts "Untitled"). Before export: cover IBM logo + Keith caption, extend Ways-to-work frame ~200px so commitments + button show, add hairline or trim gap between Client voices and FAQ, add board note "reference for direction only; final build = 120px margin, 12-col grid". Export main frame PNG 1x. 160px from frame top to label; fill sampled from image; hairline #DADAD8 between voices and FAQ; fix notes beside each section.

## Next steps

- [ ] Team re-skins both pages on the current design system (`01-brand-system/design-system/`): Host Grotesk, Carbon/Pearl/Molten
- [ ] Remove the two-tone headlines and cut the homepage to ~8 sections
- [ ] Rewrite hero H1 and de-stuff keyword headings
- [ ] Reframe "Project takeover" / "rebuild or rescue" as next-stage work
- [ ] Decide ICP wording: SMB vs mid-market
- [ ] Verify 500+ vs 800+ projects and the OpenAI/Anthropic partner logos
- [ ] Fill all placeholders and remove the footer dev note before CEO review
