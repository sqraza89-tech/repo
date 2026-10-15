---
date: 2026-10-15
tags: [tekrevol, marketing-analysis, chatgpt-ads, landing-page, healthcare, cro]
brand: tekrevol
period: 2026-06-16 to 2026-10-15 (campaign lifetime; no spend recorded after 2026-09-17)
---

# TekRevol ChatGPT Ads: healthcare campaign and landing page audit

**Goal:** lift click-to-conversion from roughly 1% to **5% or more**.
**Sources:** OpenAI Ads Manager (TekRevol LLC account, read-only, 1 Jun to 15 Oct 2026, Pacific time), the live landing page and `/contact` page (checked 15 Oct 2026, desktop).
**Labels:** `VERIFIED` = seen in data or on the page · `INFERRED` = reasoned from evidence · `NEEDS DATA` = can't be confirmed yet.

## Summary
- **The ads are working better than the page.** Healthcare got the most clicks (84) at a normal CPC ($4.51). Those clicks then land on an old, generic "healthcare app" page that doesn't match what the ad promised.
- **Conversions were never measured.** A `lead_created` event exists in Ads Manager, but it was never installed on the site or linked to the campaign. Ads Manager shows **0 events ever**, and no OpenAI pixel loads on the page. The current rate (about 1 lead from 84 clicks, ~1.2%) comes from the CRM, not the ad platform. The platform has also been bidding with no conversion signal.
- **The biggest leak is message match plus friction.** The ad says *"AI for Clinics & Home Health: automate admin work, patient workflows."* The page talks about blockchain, VR/AR/MR and "Let's Build Your App!" Every CTA leaves the page for a generic contact form with a required phone number and a visible reCAPTCHA.
- **5% is reachable, but not on this page.** It needs a dedicated healthcare operations landing page with the form above the fold, a concrete low-commitment offer, healthcare-only proof and working tracking. A copy edit to the current page won't get there.
- **Do first:** install and link conversion tracking. Then build the dedicated page before turning the campaign back on.

## Scorecard (campaign lifetime)
| Ad group | Spend | Impr. | Clicks | CTR | CPC | Conv. (platform) |
|---|---|---|---|---|---|---|
| **Healthcare AI & Operations** | **$378.83** | 10,910 | **84** | 0.77% | $4.51 | 0 (not tracked) |
| Enterprise Software Modernization | $256.75 | 9,328 | 57 | 0.61% | $4.50 | 0 (not tracked) |
| AI Agents & Business Automation | $72.88 | 1,639 | 17 | 1.04% | $4.29 | 0 (not tracked) |
| Startup MVP / SaaS | $3.31 | 137 | 1 | 0.73% | $3.31 | 0 (not tracked) |
| **Campaign total** ("US Demand Capture") | **$711.76** | 22,014 | **159** | 0.72% | $4.48 | 0 (not tracked) |

Source: OpenAI Ads Manager, 1 Jun to 15 Oct 2026. Campaign started 16 Jun 2026, budget $200/day, manual bidding, billed per click. Campaign and ad groups are now disabled ("Not serving"). The "Testing" campaign had no delivery, and its homepage ad is "Not approved".

**Healthcare ads**
| Ad | Impr. | Clicks | CTR | Spend |
|---|---|---|---|---|
| "AI for Clinics & Home Health": Automate admin work, patient workflows and healthcare operations. | 10,342 | 82 | 0.79% | $368.31 |
| "Reduce Healthcare Admin Work": Build HIPAA-aware tools for clinics, RCM and home-health teams. | 568 | 2 | 0.35% | $10.52 |

Both point to `/healthcare-software-development` with UTMs.

**Conversion math**
| | Current (healthcare) | Target |
|---|---|---|
| Click → lead | ~1.2% (1 lead / 84 clicks; CRM, per Sana) `NEEDS DATA` to confirm | **≥5%** |
| Cost per lead at $4.51 CPC | ~$379 | **≤$90** |
| Leads per 100 clicks | ~1 | **5+** |

## Findings

### 1. Measurement: nothing is feeding back to the ad platform
- `VERIFIED` Ads Manager → Conversions: data source "My first pixel" is set up, and one event, **"Form Submission" (`lead_created`)**, is defined. Setup checklist steps 3 ("Implement and log the event") and 4 ("Link event to a campaign") are **not done**. Total events: **0**.
- `VERIFIED` Diagnostics shows 2 warnings: *no active campaigns use conversion events* and *no recent server-to-server events*.
- `VERIFIED` No OpenAI pixel or request loads on the landing page. GTM (`GTM-NZ5WRFG`) and Google Ads tags are present.
- `VERIFIED` Forms capture `utm_source/medium/campaign` and `landing_page` in hidden fields, and the values carry over to `/contact`. That's how the one lead was attributed. **`utm_content` isn't captured**, so you can't tell which ad produced a lead.
- `INFERRED` With manual bidding and no conversion signal, delivery has been tuned for clicks, not leads. A 0.77% CTR on 10.9k impressions suggests the targeting is broad.
- `NEEDS DATA` Whether Tawk chats and phone calls from ad traffic are logged as leads.

### 2. Message match: the ad promises AI operations, the page sells an app
| The ad says | The page says |
|---|---|
| AI for clinics and home health | H1: "Healthcare Software Development Services" |
| Automate admin work, patient workflows, operations | Hero copy: "data science, blockchain, IoT, and VR/AR/MR… up to 99% value" |
| Built for operators (clinic owners, home health, RCM leaders, per the targeting hints) | Hero image: consumer patient app login screen. CTA: "Let's Build Your App!" |
| HIPAA-aware tools for RCM and home health | Nothing on RCM, claims, intake, scheduling, home health or AI agents anywhere on the page |

- `VERIFIED` The word "AI" doesn't appear in any section heading. The 6-step workflow is about launching a **mobile app** in app stores.
- `INFERRED` A home health operator who clicked "automate admin work" sees "build your app" and leaves. On a ChatGPT click this matters even more: the user was mid-conversation about a specific problem and expects the page to continue that answer.

### 3. Friction: the only path to convert is far away and heavy
- `VERIFIED` The page is ~11,600 px tall. The only on-page form starts at ~10,240 px (**88% of the way down**).
- `VERIFIED` 9 CTAs use 6 different labels ("Let's Build Your App!", "Let's Build Your Project Now!", "Let's Build", "Book A Free Consultation Now!", "Let's Connect!", "Get A Quote"). All of them leave the page for the generic `/contact`.
- `VERIFIED` `/contact` says "Let's start a project together", which drops the healthcare context. It requires name, email, **phone** and project description, and shows a **visible reCAPTCHA checkbox**. The pop-up version adds project type, service and a budget dropdown starting at "Under $5000".
- `VERIFIED` Full top navigation, a blog block (Flutter "top 10" lists), an industries grid (music, entertainment, real estate) and a tech stack (.NET, Angular) all compete with the CTA.
- `INFERRED` There's no low-commitment offer. Every CTA asks for a sales conversation or a quote, which is a big ask from someone who was just researching in ChatGPT.

### 4. Proof: off-topic, off-brand and in conflict with approved claims
- `VERIFIED` All 3 testimonials are from non-healthcare clients (education nonprofit, community nonprofit, a startup), and each is shown twice.
- `VERIFIED` The stats say "**100+** Mobile Apps Developed", but the approved claim is **800+** apps/products. "Top Entertainment App Developers" sits in the awards list on a healthcare page.
- `VERIFIED` There are 3 healthcare case studies (MiloCare, Nurse Practitioners, Stop Vaping). They show only a one-line teaser, with no problem, no outcome and no numbers.
- `VERIFIED` Copy quality: "Web Excelllence" typo. The "Expertise & Experience" and "Communication" bullets use the same text. "We cautiously build solutions" is a word-choice slip.
- `VERIFIED` HIPAA appears only twice in body copy and once in the FAQ. There's no compliance block for the approver (BAA, PHI handling, private LLMs with PII redaction), even though these are approved claims.

### 5. Lead quality and close
- `NEEDS DATA` We don't know who the one lead was, what they asked for, how fast sales replied, or why it didn't close. This decides whether to qualify harder or softer.
- `INFERRED` The current form doesn't ask what kind of organization the lead is or what workflow hurts, so sales starts the first call cold and has to rediscover the problem.

### 6. Not checked
- `NEEDS DATA` Mobile layout and Core Web Vitals: the PageSpeed API hit its daily quota. Desktop load in Sana's browser was ~2.1 s. Rerun tomorrow, since most ChatGPT clicks are likely on mobile.
- `NEEDS DATA` GA4 for this traffic (bounce/engagement for `utm_source=chatgpt`, scroll depth). I had no access in this pass.

## Top 5 actions
| # | Action | Why | Funnel stage | Impact | Effort | Owner | Success metric |
|---|---|---|---|---|---|---|---|
| 1 | **Install conversion tracking:** OpenAI pixel via GTM, fire `lead_created` on successful submit of every form (on-page, `/contact`, pop-up), link the event to the campaign, add a `utm_content` hidden field | 0 events ever; platform optimizing blind; can't tell which ad works | Measurement | H | L | TekRevol web dev | Event stream shows test events; Diagnostics warnings cleared |
| 2 | **Build a dedicated landing page** for healthcare operations AI (spec below), no nav, noindex, used only for paid traffic | Message mismatch + 88%-down form | Engagement → lead | H | M | Sana (copy) · TekRevol design + dev | Click → lead ≥5% after 100+ clicks |
| 3 | **Replace "build your app" with a concrete offer:** free 30-minute workflow review that ends with a written list of 3 workflows to automate, with rough effort and HIPAA notes | No low-commitment step; operators aren't "building an app" | Intent → lead | H | L | Sana · TekRevol sales | Form submits per 100 clicks; show rate on booked calls |
| 4 | **Cut the form to 4 fields, put it in the hero:** name, work email, organization type (dropdown), biggest manual task (optional). Phone optional. Invisible reCAPTCHA. Thank-you page with a calendar to book the call | Required phone + visible CAPTCHA + off-page form | Lead | H | L | TekRevol dev | Form start → submit rate ≥40% |
| 5 | **Get the lost lead's story and set a follow-up rule:** CRM record, reply time, what they wanted, why it stalled; respond within 15 minutes in business hours; a one-page healthcare summary the champion can forward | Only lead didn't close; can't judge quality from 1 data point | Qualified lead | M | L | TekRevol sales · Sana | Lead → meeting rate; meeting → proposal |

## Landing page spec (action 2)
Working URL: `/lp/healthcare-ai-operations` (noindex). Later this can become the planned `/home-based-care` hub.
Copy follows TekRevol voice: plain, ICP words, no em dashes, no rivals or AI tool names, approved claims only.

1. **Hero** (form visible without scrolling on desktop; sticky "Get the review" button on mobile)
   - H1 draft: **AI automation for home health and clinic operations**
   - Sub: Cut the admin work in intake, scheduling, documentation and claims. Built for HIPAA from the first sprint.
   - Form (4 fields above) + button: **Get my workflow review**
   - Under the button: Free 30-minute review. You leave with 3 workflows to automate first.
2. **Proof strip:** 4.8/5 on Clutch · 800+ products shipped · 10 years · HIPAA, SOC 2 and PCI DSS experience. Clutch Top 1000 and Inc. 5000 badges only. Drop the entertainment awards.
3. **"What we automate"** in the operator's words: patient intake and referrals · scheduling and visit verification · documentation and coding support · claims, denials and follow-up · care coordination messages. Each gets one line on what changes for the team.
4. **How it works** (3 steps, Strata Method language): Explore your workflows → agree the Ship Line (what goes live first) → ship and measure.
5. **Healthcare proof:** MiloCare and Nurse Practitioners as short cases (problem, what we built, outcome). `NEEDS DATA` TekRevol has to supply real outcome numbers. If they can't, show scope and timeline, never invented results.
6. **Compliance block for the approver:** HIPAA-aligned SDLC, BAA available `NEEDS DATA` (confirm), PHI handling, private LLMs with PII redaction, access controls and audit logs.
7. **FAQ** (answer-first, ChatGPT users expect this): What does it cost? How long until something is live? Does it work with our EHR? Is it HIPAA compliant? Do we need an in-house tech team?
8. **Repeat form** at the bottom. No blog block, no industries grid, no tech stack, no top nav.

## Ad-side changes (after tracking + page are live)
- **Split healthcare into 2 ad groups** with their own context hints and page variants: (a) home health and home care agencies, (b) clinics and revenue cycle. The current hint mixes digital health founders with RCM leaders.
- **Each ad headline should match the page H1 word for word** (for example "AI Automation for Home Health Ops").
- **Point Enterprise and AI Agents traffic at their own focused pages later.** AI Agents had the best CTR (1.64% on the "Build AI Agents" ad), so it's the next candidate.
- **Switch to conversion-based bidding** once the pixel has recorded enough leads (check the Ads Manager minimum). Until then keep manual CPC around $4.50.
- **Don't relaunch on the old page.** Every click there costs ~$4.50 at ~1% conversion.

## Plan to reach 5%
| Week | Work | Gate to move on |
|---|---|---|
| 1 (from 19 Oct) | Tracking (action 1) · pull the lost lead from CRM (action 5) · Sana drafts page copy · TekRevol confirms case outcomes + BAA | Test conversion shows in Ads Manager event stream |
| 2–3 | Design + build the landing page and thank-you page with a calendar; QA on mobile; rerun PageSpeed (target mobile LCP < 2.5 s) | Page approved by TekRevol; all forms fire `lead_created` |
| 4–5 | Relaunch the healthcare ad groups only at ~$100/day; ~200 clicks ≈ $900 | **Checkpoint at 100 clicks:** ≥3% → keep going; <3% → swap the offer (e.g. "Get a cost and timeline estimate") |
| 6–7 | A/B test one thing at a time: offer, then hero H1, then form length | **≥5% over 200+ clicks** → scale budget and roll the same pattern to AI Agents |

**Why this can reach 5%** (`INFERRED`): the healthcare ad group already brings relevant, intent-rich clicks at a stable CPC. The losses happen after the click: the message breaks, there's nothing low-commitment to say yes to, and the form is buried and heavy. Each of these is a known conversion killer, and each is fixed above. Dedicated, message-matched B2B service pages with a light offer typically convert in the 3–8% range. Hitting 5% depends on the offer landing, so the week 4–5 checkpoint has a fallback offer ready.

**Note on sample size:** at 5%, 100 clicks gives about 5 leads. Don't call a winner or loser before ~100 clicks per variant (~$450). Below that, a single lead swings the rate by a full percentage point.

## Backlog
| Action | Impact | Effort | Owner |
|---|---|---|---|
| Fix the old healthcare page anyway (organic traffic): "100+" → "800+", typo, duplicate bullets, remove VR/blockchain copy, healthcare testimonials | M | L | TekRevol dev · Sana |
| Track Tawk chat starts and `tel:` clicks as micro-conversions in GTM | M | L | TekRevol dev |
| Make `/contact` keep context (show "Healthcare project" when `landing_page` is a healthcare URL) | L | L | TekRevol dev |
| Remove the disapproved homepage ad and the empty "Testing" campaign | L | L | TekRevol / Sana |
| Retarget healthcare page visitors once the pixel has an audience (if the platform supports it) | M | M | Sana |
| Healthcare one-pager PDF for the champion (ICP3) to forward to the approver (ICP4) | M | M | Sana · design |

## Data gaps
- The CRM record for the one healthcare lead (source, request, reply time, reason lost)
- GA4 engagement and scroll depth for `utm_source=chatgpt` sessions
- Mobile PageSpeed / Core Web Vitals (API quota hit; rerun)
- Real outcome numbers for the MiloCare and Nurse Practitioners cases; whether TekRevol signs BAAs
- Whether any of the 159 clicks led to calls or chats that weren't logged

## Next steps
- [ ] Share this audit with TekRevol; get sign-off to keep the campaign paused until tracking + new page are live
- [ ] TekRevol dev: install OpenAI pixel via GTM, fire `lead_created` on all form successes, link to campaign, add `utm_content` field
- [ ] TekRevol sales: send the lost healthcare lead's CRM details
- [ ] TekRevol: confirm healthcare case outcomes and BAA availability
- [ ] Sana: write landing page copy from the spec above
- [ ] Rerun mobile PageSpeed on the current page and on the new page before launch
- [ ] Relaunch healthcare ad groups at ~$100/day; review at 100 clicks
