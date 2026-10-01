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
