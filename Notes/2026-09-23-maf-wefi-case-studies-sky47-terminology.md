---
date: 2026-09-23
tags: [xloop, sky47, case-studies, decks, migration]
---

# MAF + Wefi case studies reworded to Sky 47 terminology

## Feedback that triggered this

- Irfan Shaikh (Teams): content is fine, but tweak the terminology and mention the
  migration framework — pick up wording from the Sky 47 deck

## Sky 47 migration framework (source of terminology)

- Phase model: **Assess → Design → Migrate → Validate → Operate → Optimize**
- Other terms in use: estate, dependencies & criticality, target structure,
  controlled migration waves (Wave 0 pilot, Wave 1…), cutover, governance & control
- Sky 47 slide 3 labels both accounts as: MAF = "AWS to Azure Migration Advisory",
  Wefi = "Data Platform Advisory"

## What was changed in the case study deck

- Output: `MAF_Wefi_Case_Studies_v2.pptx` in
  `OneDrive - xLoop/Microsoft Teams Chat Files/` — original left untouched
- Both solution boxes open with: *"Covered the Assess and Design phases of xLoop's
  migration framework:"* — deliberately Assess + Design only, since both engagements
  were advisory, not full delivery
- MAF bullet labels: Estate & data discovery · Dependencies & criticality ·
  Business case · Controlled migration waves · Target structure
- Wefi bullet labels: Multi-source data discovery · Target platform · Target
  structure · Advisory delivery · Handover
- Wefi footer tag changed: "Data Platform Modernization" → "Data Platform Migration"
- No new facts introduced — same engagements and scope, vocabulary only

## Known issues

- `Downloads/Sky 47 Final 1.pptx` is **truncated** (269 KB, ZIP central directory
  missing). Slides 1–4 readable by streaming with `tar.exe -xf`; slide 5 cuts off
  mid-XML; anything after slide 5 unknown
- Slide fit was calculated, not rendered — no LibreOffice on this machine, see
  [[docx-build-toolchain]]

## Next steps

- [ ] Open v2 in PowerPoint and eyeball both slides for text overflow
- [ ] Re-download the Sky 47 deck intact and check slides 5+ for terminology missed
- [ ] Confirm with Irfan whether "Assess and Design phases" framing reads right
