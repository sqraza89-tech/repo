---
date: 2026-08-25
tags: [nepra, xloop, outreach, letters]
---

# NEPRA follow-up letters — 86 letters (87 companies, GEPCO deduped)

## Context
- Source letter (follow-up draft): `C:\Users\Sana Qazi\Downloads\Finergy Follow Up.docx`
- Recipient list v2: `NEPRA_Companies_CTO_CISO_CEO_Address v2.xlsx` — **all 87 addresses now filled, no "NOT FOUND" left**; checked against the generated letters and every address matches except #11 (v2 still has the duplicated "Thatta District") and #51 (v2 appends the research note "(inferred, shares HUBCO office)", which must not print on an envelope). The letters hold the cleaner version in both cases.
- Recipient list v1: `NEPRA_Companies_CTO_CISO_CEO_Address.xlsx` (OneDrive - xLoop, "NEPRA Letter list- Care of H. Valika"), sheet `Companies`, 87 rows. A `v2` copy also exists in the same folder with identical columns.
- **All 87 first-round letters already exist** in that same folder, named `NN_Company_Name.docx`. These are the ground truth for each recipient's name / title / address block — more current than **v1** of the spreadsheet, which still showed "NOT FOUND" for several companies whose letters did have addresses. (v2 has since closed those gaps.)
- First-letter convention: address block is `Name (if known)` / `Chief Executive Officer` / `Company Name` / `Address`; salutation is `Dear <Full Name>,` when a name is known, else `The Chief Executive Officer` + `Dear Sir/Madam,`
- First letter's body is long-form (regulation clause table + services table). The follow-up is deliberately short.

## Decisions
- **Final subject line (round 2):** `Subject: Follow up: NEPRA (Security of Information Technology and Operational Technology) Regulations, 2022 — Compliance Advisory & Support Services` — mirrors the first letter's subject with a "Follow up:" prefix, no company name. (Round 1 used `Follow-Up: NEPRA IT/OT Security Compliance Support for [Company]` — rejected.)
- "WHY xLOOP DIGITAL" bullets paraphrased — all five points kept, reworded concise/value-driven for C-suite so the follow-up doesn't read as a copy-paste of letter one
- Huzaifa Valika's phone number added beneath his email: 0322-2009713
- Body text is LEFT-ALIGNED, not justified — justification created awkward word gaps in the narrow measure (5 paragraphs per letter carried `w:jc val="both"`; all cleared to `Alignment = 0`)
- Closing URL is a real Word hyperlink (`Hyperlinks.Add`, blue + underlined), and the full stop that followed it was removed so the link ends the paragraph cleanly — user's own convention, since in Word the autoformat only fires when the trailing period is deleted and space is pressed
- Signature block colours standardised: name `Huzaifa Valika` stays navy `0B2545`; the three lines below it (`VP Enterprise Sales, xLoop`, `Email:`, `Phone:`) are all `3A3A3A`, the body-text grey used for the bullets. They were previously three different shades — `3A3A3A`, `6E6E6E`, and the Phone line had no `w:color` at all so it rendered default black.
- Round-2 copy edits: closing link written in full as `https://www.xloopdigital.com/services/cyber-security-service` (plain text, not a hyperlink field, matching the printed-letter convention); first paragraph says "our earlier **letter**", not "note"
- Reuse each company's exact address block + salutation from its own first letter (not from the spreadsheet)
- Output location: `Projects/NEPRA Follow-Up Letters/` in this vault
- **Status: DONE — 86 letters final in `Projects/NEPRA Follow-Up Letters/`.** Round 1 generated 87; round 2 applied the three copy edits and deleted the GEPCO duplicate. QA passed on all 86: new subject 86/86, https link 86/86, "earlier letter" 86/86, phone line 86/86; zero occurrences of the old subject, the word "note", the bare `www.` URL, or leftover `{{placeholders}}`. Poppins / gold rule / navy heading / anchored signature graphic all byte-identical to the source template. Round 3 standardised the signature-block colours — verified on 100% of files (uniform `3A3A3A` 86/86, navy name 86/86, italic title 86/86, zero `6E6E6E` left).

## Data issues found in the existing first-round letters
- **#65 `65_Quaid_e_Azam_Solar_Power_Pvt_Ltd.docx` has the wrong address block** — shows PEDO's details (Engineer Anwarul Haq, PEDO House, Peshawar) while the salutation correctly reads "Dear Muhammad Amjad,". Follow-up will use the correct block: Muhammad Amjad / CEO / Quaid-e-Azam Solar Power Pvt Ltd / 3rd Floor, 83A-E1, Gulberg III, Main Boulevard, Lahore. **Worth checking whether the first letter was physically mailed with PEDO's address.**
- `62_Patrind_O_M_K_Water_Global.docx` and `72_Star_Hydro_Power_Company.docx` are corrupted / unreadable by Word. Use `62 Patrind O&M redone.docx` and `72Star Hydro redone.docx` instead.
- #11 CACHO Wind Energy address had a duplicated fragment: "Jhimpir, Thatta District, Thatta District, Sindh" — corrected.
- #25 Gul Ahmed Wind Power: "Danish Iqbal (Ali mohamed)" — corrected to "(Alimohamed)".
- #26 Harappa Solar: "Rana Uzair Nasipm" — corrected to "Nasim".
- #21 and #22 are both GEPCO (duplicate entry in the source list, identical address/CEO). **Resolved: only one letter sent — `22_GEPCO.docx` deleted, `21_GEPCO.docx` kept.** Hence 86 letters, not 87.

All of the above were fixed in the follow-up batch; the *first-round* letters still carry the errors.

## Environment notes (this machine)
- No python, node, pandoc, zip, or LibreOffice on PATH — Word/Excel COM automation via PowerShell is the working approach for .docx/.xlsx here
- Word COM over the 87 OneDrive letters takes several minutes; run it as a background task

## Generation method (works on this machine)
- Master placeholder template built from the follow-up draft with tokens `{{ADDR1..4}}`, `{{COMPANY}}`, `{{SALUT}}`; per-recipient copies made and tokens find/replaced via Word COM
- Address block has two shapes: 4-line when a name is known (Name / CEO / Company / Address), 3-line otherwise (The Chief Executive Officer / Company / Address) — the `{{ADDR4}}` paragraph is deleted for the 3-line case
- Salutation drops a trailing parenthetical, so "Danish Iqbal (Alimohamed)" reads "Dear Danish Iqbal," while mid-name ones like "Lt Gen (R) Muhammad Saeed" stay intact
- Scripts kept in session scratchpad: `build_template.ps1`, `generate_letters.ps1` (takes an optional count arg for a pilot run)
- Pilot of 3 passed clean before the full run
- Scripts are per-round and idempotent: `apply_edits.ps1` (copy edits), `fix_sig_color.ps1` (signature colours, sets `Font.Color` so it also ADDS a colour to runs that had none). Pattern that works: match a paragraph by its exact trimmed text, then `$r.MoveEnd(1,-1)` before touching formatting so the paragraph mark is left alone
- Round-2 edits used a separate `apply_edits.ps1` (idempotent — skips files already carrying the new wording, so it is safe to re-run)
- `zip` is NOT on PATH, so docx cannot be repacked from bash; `unzip -p file.docx word/document.xml` is however the fast way to READ/grep a docx for QA without opening Word

## Next steps
- [x] Generate and QA all 87 letters
- [x] Round-2 edits (subject, https link, "letter" wording) + GEPCO dedup — 86 final
- [x] Round-3: signature-block colours made uniform across all 86
- [ ] Confirm with Huzaifa whether #65's first letter went out with the wrong (PEDO) address
- [x] GEPCO duplicate resolved — one letter only
- [ ] Back-port the corrections into `v2` of the spreadsheet: #11 duplicated "Thatta District", #51 stray "(inferred, shares HUBCO office)" note in the address field, and the #65 Quaid-e-Azam / PEDO mix-up
