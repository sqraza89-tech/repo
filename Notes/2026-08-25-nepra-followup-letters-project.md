---
date: 2026-08-25
tags: [nepra, xloop, outreach, letters]
---

# NEPRA follow-up letters — 87 companies

## Context
- Source letter (follow-up draft): `C:\Users\Sana Qazi\Downloads\Finergy Follow Up.docx`
- Recipient list: `NEPRA_Companies_CTO_CISO_CEO_Address.xlsx` (OneDrive - xLoop, "NEPRA Letter list- Care of H. Valika"), sheet `Companies`, 87 rows. A `v2` copy also exists in the same folder with identical columns.
- **All 87 first-round letters already exist** in that same folder, named `NN_Company_Name.docx`. These are the ground truth for each recipient's name / title / address block — more current than the spreadsheet, which still shows "NOT FOUND" for several companies that the letters do have addresses for.
- First-letter convention: address block is `Name (if known)` / `Chief Executive Officer` / `Company Name` / `Address`; salutation is `Dear <Full Name>,` when a name is known, else `The Chief Executive Officer` + `Dear Sir/Madam,`
- First letter's body is long-form (regulation clause table + services table). The follow-up is deliberately short.

## Decisions
- New subject line: `Follow-Up: NEPRA IT/OT Security Compliance Support for [Company Name]`
- "WHY xLOOP DIGITAL" bullets paraphrased — all five points kept, reworded concise/value-driven for C-suite so the follow-up doesn't read as a copy-paste of letter one
- Huzaifa Valika's phone number added beneath his email: 0322-2009713
- Reuse each company's exact address block + salutation from its own first letter (not from the spreadsheet)
- Output location: `Projects/NEPRA Follow-Up Letters/` in this vault
- Final draft text staged at scratchpad `draft_letter_preview.md`; awaiting user go-ahead before generating all 87

## Data issues found in the existing first-round letters
- **#65 `65_Quaid_e_Azam_Solar_Power_Pvt_Ltd.docx` has the wrong address block** — shows PEDO's details (Engineer Anwarul Haq, PEDO House, Peshawar) while the salutation correctly reads "Dear Muhammad Amjad,". Follow-up will use the correct block: Muhammad Amjad / CEO / Quaid-e-Azam Solar Power Pvt Ltd / 3rd Floor, 83A-E1, Gulberg III, Main Boulevard, Lahore. **Worth checking whether the first letter was physically mailed with PEDO's address.**
- `62_Patrind_O_M_K_Water_Global.docx` and `72_Star_Hydro_Power_Company.docx` are corrupted / unreadable by Word. Use `62 Patrind O&M redone.docx` and `72Star Hydro redone.docx` instead.
- #11 CACHO Wind Energy address has a duplicated fragment: "Jhimpir, Thatta District, Thatta District, Sindh" — to be corrected.
- #21 and #22 are both GEPCO (duplicate entry in the source list, same address/CEO).

## Environment notes (this machine)
- No python, node, pandoc, zip, or LibreOffice on PATH — Word/Excel COM automation via PowerShell is the working approach for .docx/.xlsx here
- Word COM over the 87 OneDrive letters takes several minutes; run it as a background task

## Generation method (works on this machine)
- Master placeholder template built from the follow-up draft with tokens `{{ADDR1..4}}`, `{{COMPANY}}`, `{{SALUT}}`; per-recipient copies made and tokens find/replaced via Word COM
- Address block has two shapes: 4-line when a name is known (Name / CEO / Company / Address), 3-line otherwise (The Chief Executive Officer / Company / Address) — the `{{ADDR4}}` paragraph is deleted for the 3-line case
- Salutation drops a trailing parenthetical, so "Danish Iqbal (Alimohamed)" reads "Dear Danish Iqbal," while mid-name ones like "Lt Gen (R) Muhammad Saeed" stay intact
- Scripts kept in session scratchpad: `build_template.ps1`, `generate_letters.ps1` (takes an optional count arg for a pilot run)
- Pilot of 3 passed clean before the full run

## Next steps
- [ ] QA the generated 87 (check log, spot-check the fixed records #11, #25, #26, #62, #65, #72)
- [ ] Confirm with Huzaifa whether #65's first letter went out with the wrong (PEDO) address
- [ ] Decide whether #21/#22 duplicate GEPCO entry should really get two letters
