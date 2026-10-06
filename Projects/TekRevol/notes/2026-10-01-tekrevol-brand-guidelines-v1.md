---
date: 2026-10-01
tags: [tekrevol, brand, rebrand, design-system]
---

# TekRevol brand guidelines v1 (AI-first rebrand)

**Live:** https://claude.ai/artifact/HpisETnNbr4fyuqKkUWz5z (private until shared)
**Source files:** `Projects/TekRevol/01-brand-system/design-system/` · logo SVGs in `Projects/TekRevol/01-brand-system/logos/`
**Profile:** [[tekrevol]]

## Decisions taken in v1 (proposed, need sign-off)
- Brand idea: **"Better with every layer"**: early adoption, fast scaling, continuous evolution
- Orange brightened: legacy #F37A20 / #EF5123 → Signal #FF5A1F, Flare #FF8A3D, Ember #E63A0E, Glow #FFC08A
- Grounds: Carbon #0F0D0C (primary, dark-first), Paper #FAF8F6
- Text on orange is carbon, not white (accessibility + signature)
- Type: Unbounded (display), Archivo (text), JetBrains Mono (labels/code/data). Poppins retired
- Motif: Strata (layers brightening upward) + notch (45° corner from the logo mark)
- Logo geometry unchanged; fills recolored only
- Includes AI image + AI video prompt kits (master style block, negatives, tool settings)

## Research findings
- 4 of 5 competitors are blue (LeewayHertz, Azumo, Cheesecake Labs, ScienceSoft); HatchWorks teal → orange is the differentiator
- Current site H1 "Human Vision. Intelligent Technology. Exceptional Products." flagged in TekRevol's own messaging doc as off-voice

## Next steps
- [ ] Sana review of colors, fonts, logo refresh
- [ ] Share the artifact with TekRevol stakeholders (Share menu)
- [ ] Collect proof for the brand idea: year AI work started, AI projects shipped, RevAI milestones
- [ ] Get TekRevol LinkedIn page, content calendar, KPIs, analytics access → fill profile TODOs
- [ ] Next: homepage design / page templates from this system

## v2 update (same day, from Sana's Pinterest moodboard)
- Direction: futuristic, corporate, trustworthy, premium, classy → **"molten glass"**
- Palette: Molten #FF4F0F, Core Red #E10600, Oxblood #4A0E0A, Flare #FF8A3D, Haze #F2D4CC + Carbon #0C0807, Graphite, Steel #6E7680, Chrome #DADAD8, Pearl #F2F1EF (light theme renamed paper → pearl)
- Type: Unbounded + Archivo replaced by **Host Grotesk** (Medium 500 headlines, tight tracking) + JetBrains Mono
- Imagery: molten glass, reeded light, glass objects (the TekRevol mark rendered in glass), light orbs, builders; prompts rewritten
- New Molten component (gradient field + reeded overlay + white logo); white logo now allowed on molten backgrounds
- Moodboard images used as inspiration only, not reproduced

## Folder decision (2026-10-01)
- All TekRevol work now lives in `Projects/TekRevol/` (index: README.md); CLAUDE.md, the brand profile and the skills point there

## v3 direction (2026-10-01, Sana feedback)
- Drop the glass/molten-glass imagery: overused
- Light-first: clean, futuristic, modern white and grey backgrounds, charcoal text, bright orange accent, metallic silver/grey touch. No grey or metallic-gradient headline text
- Headline font needs personality (bold but elegant, memorable, not tacky); body stays simple
- Rejected headline fonts: Archivo Expanded, Syne, Bricolage Grotesque, Unbounded (wide ones "feel like battery companies / Toshiba"); Host Grotesk too plain
- Round 2 candidates: Funnel Display, Cabinet Grotesk, Clash Display, Geologica (sharp), Wix Madefor Display, Instrument Serif. Specimen: https://claude.ai/artifact/Fjt5fezUGewSwkuUTLc44D (source `01-brand-system/type-options.html`)
- Deliverable format: guidelines to become a **Word .docx** in `01-brand-system/` (after font pick)

## v3 decided (2026-10-01)
- Headlines **Funnel Display**, text **Wix Madefor Text** (Sana liked A and E; combined), labels JetBrains Mono
- Palette v3: White, Mist #EEEFEF, Silver #C9CCCF, Steel #8A9097, Muted #5E6166, Graphite #2E3034, Charcoal #1D1E21, Orange #FF5A00, Flare #FF8A3D, Ember #E2400B, Orange Ink #C23A00
- Logo v3 fills: #FF5A00 / #FF8A3D / #E2400B, ink #1D1E21 (`01-brand-system/logos/*-v3.svg`)
- Imagery: bright precision (machined layers, kinetic orange, builders, product in context); glass removed
- Delivered as Word: `01-brand-system/TekRevol-Brand-Guidelines-v3.docx` (26 pages, fonts embedded). Build script was in the session scratchpad
- The v2 design-system web page is now superseded

## v4 (2026-10-02)
- Sana sent her own v4 edits (`02-source-docs` copy not kept; original in Downloads). Evaluated and merged with v3 into `01-brand-system/TekRevol-Brand-Guidelines-v4.docx` + `.pdf` (36 pages, full-bleed cover, no orange page numbers or section numbers)
- Fixes applied to her v4: em dashes removed; UK→US spelling; invented voice examples replaced (40% NLP stat, blockchain provenance, "ship in 12 weeks"); Strata math fixed (min 8 px height, centered peak, 5-layer standard); button padding 10→12 px (4 px grid); Dark Border fails 3:1 for inputs → added Dark Control #6E727A; Data label orange → Orange Ink; one font-loading method; Midjourney typo; files list split into ready vs to-produce; Ember rule clarified (logo exempt); video opener as motion graphic
- New assets: `samples/` (homepage, mobile, LinkedIn, dark slide, business cards), `strata/` 3/5/7 SVG+PNG, `logos/png/` + favicons, `tokens/tekrevol-tokens.json`
- Image generation: no ChatGPT connector; Figma Weave needs Figma account linked at app.weavy.ai. Photography to come via ChatGPT using the prompt kit

## v5 direction (2026-10-05, Sana feedback on v4)
- Rejected v4 visuals: brushed-metal staircase + imagery look "old and retro"
- Glass is back (restrained, for depth/panels), not "no glass at all"
- New direction: echo AI architecture: flows, layers, nodes, graphs; simple, clean, modern, concise
- Reference: "BTC" (an xLoop competitor) architecture visuals on their site; URL requested from Sana
- Next: 2-3 hero/diagram samples before touching the doc

- BTC = BluTech Consulting (blutechconsulting.com). Their style: blue + near-black, blueprint grid, mono-caps icon nodes, orthogonal dotted connectors, stage headers (Understand/Orchestrate/Execute), per-service mini flows
- TekRevol v5 direction samples (2026-10-05) in `01-brand-system/samples-v5/`: light hero with frosted-glass architecture stack (Data > Models > Agents > Product) + one orange active path; service cards with mini flows; dark prototype-to-production slide (Audit > Stabilize > Rebuild > Scale). Awaiting Sana feedback before rebuilding the doc. Render script was in the session scratchpad (render3.js)

## FINAL for submission (2026-10-05): brand guidelines deck
- `01-brand-system/deck/TekRevol-Brand-Guidelines.pdf` + `.pptx` (29 slides, 16:9). Combines v4 system (palette, Funnel Display + Wix Madefor Text, voice, dark mode) with v5 architecture graphic language (glass layer stack, flow diagrams, one orange path, blueprint grid, notch)
- Slides are full-bleed images rendered with the real fonts (fidelity on any machine; text not editable in PowerPoint). Sources: `deck/slides/*.png`; build script deck.js was in the session scratchpad
- Sana chose this over Gamma; deadline was same day. Website is a later phase

## v6 editable decks (2026-10-05, after Sana feedback on the image deck)
- Feedback: same architecture repeated; orange brighter/redder; competitor slide needed a complementary color; content must be editable; grid background forgettable; not different enough from the existing brand; old brand books (2 handbooks, ~2019) were better executed
- Old handbooks (OCR): "TekRevolution", structured chaos, individualistic collectivism, Learn > Ideate > Iterate > Incubate > Scale, courage/"audacity to try", constant flux. Design: bold red color blocking, condensed headlines, checkerboard values, particle imagery
- Decisions: Orange **#FF4A1C** (Sana chose Option A); two variants **Cyan** (complement #3EC5D1, rule "cyan explores, orange ships") and **Mono**; navy rejected (retro). Backgrounds: Sana liked isometric layers, circuit grid, data streams but "Tek is not about data" -> patterns reframed: Experiment field, Iteration lines, Layer planes
- New positioning line: "Young in approach. Enterprise in output." Brand idea "Structured chaos" + tagline "Better with every layer". Sixth trait "Curious" added from the handbook values
- Files: `01-brand-system/deck-v6/TekRevol-Brand-Guidelines-Cyan.pptx/.pdf` and `-Mono.pptx/.pdf`, 28 slides, native editable text/shapes, fonts embedded. Official fonts in `fonts/official/` (installed for Sana user on this PC with her approval). Build script deck2.js in session scratchpad

- 2026-10-05: image prompts for designer/ChatGPT saved in `01-brand-system/2026-10-05-image-prompts-for-designer.md` (5 prompts + bonus, mapped to v6 slides). Sana will show both Cyan and Mono decks

- 2026-10-06: Sana generated the ChatGPT images; drop folder `01-brand-system/ai-images/` (named by prompt number, e.g. 1-cover.png). Next: place them into both v6 decks (editable), verify renders

## v7 decks with AI images (2026-10-06)
- Sana provided 5 ChatGPT images in `01-brand-system/ai-images/` (1-cover, 2-layers, 3-Chaos, 4-orbs, 5-team)
- Placed: cover=1, Structured chaos=3, Logo-and-color divider=2, imagery slide=5 (marked AI mood image), closing=4; new Image library slide (29 slides total)
- Files: `01-brand-system/deck-v7/TekRevol-Brand-Guidelines-Cyan.pptx/.pdf` and `-Mono`, editable, fonts embedded. Build script deck3.js in session scratchpad
