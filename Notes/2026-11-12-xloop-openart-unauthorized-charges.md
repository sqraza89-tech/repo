---
date: 2026-11-12
tags: [xloop, security, incident, openart, billing]
---

# xLoop OpenArt account: unauthorized charges (Nov 11, 2026)

## What happened
- Charges on the xLoop OpenArt account on **Nov 11, 2026**. Only Rafay and Omais (designers) have access, and both say they didn't make them. See [[xloop-marketing-team-2026]]
- **Paid:** 6 × "OpenArt Extra Credit Pack (5000 credits)" for $15, $90, $60, $30, $60, $15 = **$270**. All billed in **BDT** (Bangladeshi Taka)
- **Failed:** 3 × "Openart Business" for $680, $453, $227 = **$1,360 attempted**

## Assessment
- Most likely an account takeover, not a team mistake
- BDT billing means the buyer was most likely in Bangladesh or on a VPN set to Bangladesh
- Pattern: Business attempts at falling amounts all failed, then six credit packs went through, all on one day. This looks like fraud
- Likely ways in: password-stealing malware on a designer laptop (stolen session or saved passwords), a shared login that spread, or a reused password. Someone inside can't be ruled out until OpenArt's login records are checked

## Next steps
- [ ] Block or freeze the card with the bank; dispute all 6 BDT charges
- [ ] Remove the saved card from OpenArt
- [ ] Change the OpenArt password and log out all devices; change Google password too if it uses Google sign-in
- [ ] Check the account email, team members and invites
- [ ] Turn on two-step verification on OpenArt and the owner email account
- [ ] Email OpenArt support: report the hacked account, ask for a refund and the login/IP history for Nov 10–11
- [ ] Check the generation history to see what was made with the credits
- [ ] Rafay + Omais: full malware scan, remove unknown browser extensions, change saved passwords
- [ ] Move to individual seats and a virtual card with a limit; turn on alerts for every charge
- [ ] Check whether the same card is saved in other tools (Figma, Adobe, Canva)
