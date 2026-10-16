---
date: 2026-10-16
tags: [tekrevol, landing-page, copy, chatgpt-ads, healthcare, home-based-care, cro]
cover_label: LANDING PAGE COPY · V1 DRAFT
cover_title: Healthcare AI Ops Page
cover_sub: PAID TRAFFIC LANDING PAGE · TARGET 5% CLICK TO LEAD
docx_name: TekRevol-Healthcare-AI-Ops-Landing-Page-Copy-v1
---

# TekRevol healthcare AI operations landing page: copy v1

**What this is:** full copy for the dedicated ChatGPT Ads landing page recommended in [[2026-10-15-chatgpt-ads-healthcare-landing-page-audit]] (action 2). It covers the page, its hero variants per ad group, the form, the thank-you page, the first follow-up email, the matching ad copy and the tracking it needs.
**Goal:** click to lead of **5% or more** on healthcare ChatGPT Ads traffic.
**Status:** draft for Sana's review. Items marked `CONFIRM` need a yes from TekRevol before launch. Nothing goes live with a `CONFIRM` left in it: either confirm it or delete the line.
**Voice:** TekRevol rules apply. No em dashes, active voice, approved claims only, no rival or tool names, no home-based care product names, no speed or cost claims about TekRevol's delivery.

## Why the page is built this way

| Audit finding | What this page does about it |
|---|---|
| The ad promised AI for clinic and home health operations; the old page sold "build your app" | H1 repeats the ad's words. Every section talks about operations work, not apps |
| Only form was 88% down the page; every CTA left the page | Form in the hero, repeated at the end. No top nav. No exits except the privacy policy |
| Contact form asked for phone, budget and a project description, behind a visible CAPTCHA | 4 fields, 2 of them dropdowns. Phone optional. Invisible spam check |
| No low-commitment offer | A free 30-minute workflow review that ends with a written plan the visitor keeps |
| Proof came from non-healthcare clients | Healthcare cases first, then one automation result with a real number |
| HIPAA was a footnote | Compliance gets its own section, written for the person who approves the budget |
| One lead, didn't close | The form asks which workflow hurts, so the first call starts on the problem. A second, lighter conversion (a one-page summary to forward) catches the champion who can't book a call alone |

## Research behind the copy

### What operators are dealing with (2026)
- **Staffing is the top problem for the third year running** in home-based care ([Home Health Care News](https://homehealthcarenews.com/survey-ebook/home-based-care-outlook-2026/)). Recruiting caregivers (54%) and scheduling gaps and call-outs (31.9%) lead the list ([HHAeXchange 2026 survey, 465 agencies](https://www.hhaexchange.com/2026-homecare-insights-provider-survey))
- **What operators want AI to do:** fill shifts and build schedules (37.8%), track compliance and send alerts (34.5%), process claims and catch billing exceptions (27.1%). Today they mostly use it for notes (22.4%) and back-office admin (17.9%) ([HHAeXchange](https://www.hhaexchange.com/2026-homecare-insights-provider-survey))
- **Compliance is the top business priority** for 2025 and 2026 in the same survey
- **Prior authorization is real friction for home health.** Medicare Advantage plans deny roughly 12% to 18% of standard prior auth requests, and most appealed denials are overturned ([KFF via HHCN](https://homehealthcarenews.com/2026/08/medicare-advantage-plans-denied-12-of-prior-authorization-requests-in-2025/)). Patients often need services within 24 to 48 hours of discharge while authorizations lag ([LeadingAge](https://leadingage.org/?p=1167982))
- **Payment pressure:** a looming CMS home health payment cut and shifting value-based purchasing targets ([DecisionHealth](https://homehealthline.decisionhealth.com/Articles/DetailPrint.aspx?id=549952)); rising costs and Medicaid changes for home care ([AxisCare 2026 survey](https://axiscare.com/white-papers/access-home-care-industry-survey-and-trends-report-2026))
- **Behavioral health admissions are won on response speed.** Common targets: first response within 30 minutes in business hours, same-day callback after hours ([Ritten](https://www.ritten.io/post/post-behavioral-health-admissions-kpis-intake-metrics)). Most loss figures are vendor claims, so the page doesn't quote numbers
- **Operators are skeptical of "AI-powered" claims** (even vendors say much of it is theater). The page answers that by saying exactly what AI does and what people still decide

These market figures describe the market, not TekRevol. The page uses them only to pick words and pains. It doesn't publish them.

### What competitors do on their healthcare pages
| Competitor | Hero / offer | What we take from it | Where we beat it |
|---|---|---|---|
| Cheesecake Labs | "Healthcare software that modernizes without the 24-month program." Free 30-minute *Healthcare Opportunity Review* (feasibility, risk flags, rough cost and timeline) | A named, free review with a stated output is table stakes | Their form has 10+ fields and a required budget. Ours has 4. Their page talks to CTOs. Ours talks to operators |
| HatchWorks AI | AI for clinical workflows, claims and patient engagement that plugs into the existing EHR and claims systems, no system replacement | "Works with what you already run" has to be said early | We name the operator's actual tasks, not capability categories |
| ScienceSoft | AI voice scheduling agent; ISO certifications; long healthcare history | Concrete agent examples beat abstract services | We show where people stay in charge, which answers the AI-trust worry |
| TekRevol `/healthcare-ai-automation` (existing) | Already offers a free workflow audit; 9 service blocks; stats like "200+ healthcare projects" | The offer is right. Keep it | That page is generic, its stats aren't on the approved list, and it shows product names still under review |

**Our edge in one line:** the only page in the set that speaks to one operator's real day, asks for almost nothing, and gives a written plan back.

## Page setup

- **URL:** `/lp/healthcare-ai-operations` · `noindex, nofollow` · paid traffic only
- **Title tag:** AI Automation for Home Health and Clinic Operations | TekRevol
- **Meta description:** AI workflows for intake, scheduling, documentation and claims, built around the systems you already use. Built for HIPAA from the first sprint.
- **No top navigation.** Logo is not a link. Footer: privacy policy, terms, phone number only
- **Hero variants by URL parameter** `?for=` (one page, swap the H1, subhead and preselected organization type). Each ad group links to its own variant
- **Sticky bar on mobile** after the hero scrolls away: "Get my free workflow review" button that jumps to the hero form
- **Length:** about six screens on desktop. Every section ends with a reason to go back to the form

## Section 1: Hero

| Element | Copy |
|---|---|
| Eyebrow | FOR HOME-BASED CARE AND CLINIC TEAMS |
| **H1** | **AI automation for home health and clinic operations** |
| Subhead | Give your coordinators back the hours lost to intake, scheduling, paperwork and claims. We build AI workflows around the systems you already run, built for HIPAA from the first sprint. |
| Form heading | Get a free workflow review |
| Button | **Get my free workflow review** |
| Under the button | 30 minutes with a senior engineer who has built healthcare software `CONFIRM`. You leave with a written plan for the first 3 workflows to automate. No commitment. |
| Privacy line | We use your details only to set up your review. No newsletters unless you ask. |

### Hero variants (`?for=`)
| Parameter | Used by ad group | H1 | Subhead | Preselected org type |
|---|---|---|---|---|
| (none) | Healthcare AI & Operations (current) | AI automation for home health and clinic operations | As above | none |
| `home-health` | Home health (new) | AI automation for home health agencies | Spend less time chasing referrals, authorizations and denials. We build AI workflows around your EHR, built for HIPAA from the first sprint. | Home health agency |
| `home-care` | Home care (new) | AI automation for home care agencies | Fill call-outs without a morning on the phone, and cut the back-office work that keeps coordinators late. Built for HIPAA from the first sprint. | Home care agency |
| `behavioral-health` | Behavioral health (later) | AI automation for IOP and PHP admissions | Reply to every inquiry while the person is still deciding, day or night. Verify benefits sooner and book the assessment before they call someone else. | Behavioral health (IOP or PHP) |
| `clinic` | Clinics and revenue cycle (new) | AI automation for clinic and revenue cycle teams | Prior authorizations, claim follow-up and patient messages, prepared by AI and checked by your team. Built for HIPAA from the first sprint. | Clinic or medical practice |

## Section 2: The form (hero and end of page)

| Field | Type | Required | Options / placeholder |
|---|---|---|---|
| Full name | Text | Yes | Your name |
| Work email | Email | Yes | you@yourorganization.com |
| Organization type | Dropdown | Yes | Home health agency · Home care agency · Behavioral health (IOP or PHP) · Clinic or medical practice · Digital health company · Other |
| Which work costs your team the most time? | Dropdown | No | Intake and referrals · Eligibility and authorizations · Scheduling and call-outs · Visit notes and documentation · Claims and denials · Admissions inquiries · Something else |
| Phone | Phone | No | Only if you'd like a call instead of email |

- **Hidden fields:** utm_source, utm_medium, utm_campaign, **utm_content**, landing_page, `for` variant
- **Spam check:** invisible (no checkbox). Keep the honeypot field
- **Error message:** "Please add a work email so we can send your plan."
- **On submit:** go to the thank-you page (see Thank-you page below). Fire `lead_created`

## Section 3: Trust strip (directly under the hero)

4.8/5 on Clutch · 800+ products shipped · 10 years building software · Experience with HIPAA, SOC 2 and PCI DSS

Logos: Clutch Top 1000 · Inc. 5000. Nothing else. Entertainment and mobile-app awards stay off this page.

## Section 4: Where the hours go

| Element | Copy |
|---|---|
| H2 | **Where your team's hours go** |
| Intro | You don't need another system. You need fewer tasks that depend on someone remembering to do them. |

Six short cards in the operator's own words:
- A referral waits in the fax queue while the referral source calls another agency.
- A coordinator spends the morning on the phone to cover one call-out.
- Clinicians finish notes at night, and billing waits on them.
- An authorization runs out, and nobody notices until the claim comes back.
- Denials get worked one at a time, when someone has a free hour.
- An inquiry arrives after 5 pm and goes cold by morning.

Line under the cards: **Each of these is a workflow. Each one can be automated, with your team still making the call.**
Button (text link style): Find out which one to fix first

## Section 5: What we automate

| Element | Copy |
|---|---|
| H2 | **What AI handles. What your team keeps.** |
| Intro | We build each workflow around the EHR, scheduling and billing systems you already use. No system switch. |

| Workflow | What AI does | What your team keeps |
|---|---|---|
| **Intake and referrals** | Reads referrals from fax, email and portals, enters patient, payer and order details into your EHR, and flags what's missing | Accepting or declining the patient |
| **Eligibility and authorizations** | Checks coverage, prepares authorization requests, and tracks expiry dates and visit counts | Submitting, and handling anything unusual |
| **Scheduling and call-outs** | Finds caregivers who match the visit by skills, distance and hours, and texts them the open shift | Approving the match |
| **Visit notes and documentation** | Drafts notes from what the clinician records and checks them for missing items before billing | Reviewing and signing |
| **Claims and denials** | Checks claims before they go out, sorts denials by reason and drafts appeal letters | Deciding what to appeal |
| **Admissions and patient messages** | Replies to inquiries day and night, collects insurance details, books assessments and sends reminders | Clinical screening |

Line under the table: **AI does the repetitive work. People make every decision that affects care or billing.**
CTA: **Get my free workflow review**

## Section 6: The free workflow review (the offer)

| Element | Copy |
|---|---|
| H2 | **What you get from the free workflow review** |
| Intro | One conversation, one written plan. It's yours to keep, with no commitment. |

| Step | Copy |
|---|---|
| **Before the call** | Tell us which work costs your team the most time. It takes two minutes in the form above. |
| **On the call (30 minutes)** | Walk a senior engineer through how that work runs today: who touches it, which systems it lives in, where it stalls. `CONFIRM` who joins |
| **After the call** | Within 2 business days `CONFIRM`, a written plan: the 3 workflows to automate first, what each one would take, the HIPAA points to plan for, and a rough cost range `CONFIRM` |

CTA: **Book my free workflow review**

## Section 7: How we build

| Element | Copy |
|---|---|
| Eyebrow | THE STRATA METHOD |
| H2 | **Explore with AI. Ship with engineering.** |
| Body | Healthcare can't run on a demo. We try ideas quickly with AI, then every workflow crosses the Ship Line before it touches patient data. The Ship Line is a written, pass-or-fail check of security, data handling, AI accuracy and the experience for your staff, signed by our CTO. You see the report. |

| Step | Copy |
|---|---|
| **1. Map** | We pick one workflow and measure how it runs today, so we know what "better" means before we build. |
| **2. Prove** | A working version, tested on sample or de-identified data `CONFIRM`, with your team using it. |
| **3. Ship** | It crosses the Ship Line, goes live with monitoring, and we track the hours it saves. |

## Section 8: Built for HIPAA from the first sprint

Written for the person who approves the budget and won't be on the call.

| Element | Copy |
|---|---|
| H2 | **Built for HIPAA from the first sprint** |
| Intro | Compliance isn't a review at the end. It's how the work starts. |

- Encryption for data at rest and in transit
- Least-privilege access and audit logs on every workflow
- A secure software development lifecycle with code and dependency scans
- Private AI models, with personal data redacted before it reaches the model
- We sign a Business Associate Agreement `CONFIRM`
- Experience with HIPAA, SOC 2 and PCI DSS requirements

**Second conversion, for the champion:**

| Element | Copy |
|---|---|
| Heading | Need to bring this to your leadership? |
| Body | Get a one-page summary of how we work, what we automate and how we handle patient data. Built to forward. |
| Field | Work email |
| Button | **Send me the one-page summary** |
| Note | Fires `summary_requested`, not `lead_created`. Needs the one-pager (backlog item in the audit) |

## Section 9: Proof

| Element | Copy |
|---|---|
| H2 | **Healthcare software we've shipped** |
| Intro | Scheduling, home visits, patient communication and AI, running in production for care providers. |

Four cards, in this order. Each links to its case study page in a new tab, so the visitor doesn't lose the form.

| Case | Card copy | Outcome line | Source check |
|---|---|---|---|
| **Libido Health** | A HIPAA-compliant platform for therapy and coaching sessions: scheduling, real-time video visits and an AI coaching assistant that checks in with members daily. | **80% fewer session no-shows. 20,000+ active users in the first three months.** | Both numbers are in the case study body. Safe |
| **Nurse Practitioners** | In-home care on demand. Patients book nurse visits by the hour, consult by video, and track every request. Nurse pay is calculated in the same platform. | Cut patient wait times by 40% `CONFIRM` | Only in the page's meta description, not the body. Use only if TekRevol confirms it; otherwise show the card without a number |
| **Kinekt** | AI patient feedback for UK care providers. GPT-4 reads feedback from every channel, scores sentiment, sorts it automatically and drafts replies. | 45% more user engagement `CONFIRM` | Headline number on the page, but the projects list says "30% faster response times" for the same case. TekRevol must pick one |
| **Rehkempers** (automation outside healthcare) | Replaced a 50-year manual pricing process across 4 manufacturing plants. The same approach applies to intake and claims work. | (in the card copy) | Approved claim. Safe |

**Testimonial slot (use this):**
"TekRevol transformed our platform into a comprehensive and secure space where our members feel empowered."
Libido Health Inc., from the published case study (5.0 rating). Ask TekRevol if a named person and title can be added `CONFIRM`; it works without them.

**Cases reviewed and left off this page:**
| Case | Why not here |
|---|---|
| MiloCare+ | Consumer health records and vaccination cards. HIPAA guidelines, encryption and access control are in the body, but the "68%" figure is only on the projects list. Good backup card if one of the four drops out |
| Synapptic | UK mental wellness app, 60% retention in 30 days (in the body). Consumer wellness, not provider operations. Possible proof for the behavioral health variant later |
| Stop Vaping | Health initiative app. The "65% success rate" is only in the meta description |
| Tamreeni, Pure Plank, AMJ Workplace Wellness | Fitness and workplace wellness. Wrong audience for an operations page |

- **Do not use** the four reviewer quotes on the Kinekt page (Laura Bennett, Michael Lee, Emily Garcia, James Carter). They have no organization names and read like placeholders. Ask TekRevol whether they are real before they appear anywhere `CONFIRM`
- **Rule:** no number unless it appears in the case study body or TekRevol confirms it. A card with no number still works: it shows the kind of work we've done

## Section 10: FAQ (answer first, short)

| Question | Answer |
|---|---|
| **What does it cost?** | It depends on the workflow and the systems involved. Your review ends with a rough cost range in writing `CONFIRM`, so you can budget before you commit to anything. |
| **Does it work with our EHR?** | Usually, yes. We connect through your EHR's APIs or standard formats like HL7 and FHIR where they're available `CONFIRM`. If your system has no way in, the review will tell you what's possible. |
| **Is it HIPAA compliant?** | We build for HIPAA from the first sprint: encryption, access controls, audit logs and private AI models. We sign a BAA `CONFIRM`. |
| **Will AI make decisions about patients?** | No. AI prepares, sorts and flags. Clinicians and coordinators approve anything that affects care or billing. |
| **Will this replace our staff?** | It replaces tasks, not people. The aim is fewer late nights for coordinators and clinicians, and more of their time on patients. |
| **How soon can something go live?** | We agree on the first workflow and its scope before any build starts. Your written plan includes a timeline for it. |
| **Do we need an IT team?** | No. We work with your operations lead and handle the technical side. If you have IT, we work with them too. |

## Section 11: Final call to action

| Element | Copy |
|---|---|
| H2 | **Find the 3 workflows costing your team the most time** |
| Body | 30 minutes with a senior engineer. A written plan you keep. No commitment. |
| Form | Same 4-field form as the hero |
| Button | **Get my free workflow review** |

## Thank-you page

| Element | Copy |
|---|---|
| H1 | **Thanks. Pick a time for your review.** |
| Body | Choose a 30-minute slot below. You'll get a calendar invite and a short reminder the day before. |
| Embed | Booking calendar (Calendly or HubSpot meetings) `CONFIRM` which tool |
| What to have ready | The workflow you picked, and a rough idea of how many people work on it each week · The names of the systems it touches (EHR, scheduling, billing) · Any numbers you already track, like referrals per week or denial rate |
| If they don't book | Prefer a call? We'll reach out within 1 business hour `CONFIRM` sales can meet this |
| Tracking | `lead_created` fires on this page load (or on the form success event, not both) |

## First follow-up email (sent within 5 minutes, from a named person)

| Element | Copy |
|---|---|
| From | [Name], [title] at TekRevol `CONFIRM` a real sender, not "info@" |
| Subject | Your workflow review: [workflow they picked] |
| Body | Hi [first name], thanks for asking for a workflow review. You picked **[workflow]** as the work that costs your team the most time, so that's where we'll start. If you haven't booked a time yet, here's the link: [booking link]. On the call we'll walk through how that work runs today, and within 2 business days you'll have a written plan for the first 3 workflows to automate. If it's easier, reply with a good time and your number, and I'll call you. [Name] |
| If no workflow picked | Replace the second sentence with: "Before the call, reply with the one task your team would most like to stop doing by hand." |

## Matching ad copy (ChatGPT Ads)

Each ad's headline repeats its variant's H1, and each ad links to its `?for=` variant with `utm_content` set.

| Ad group | Headline | Description | Link |
|---|---|---|---|
| Healthcare AI & Operations | AI for Clinics & Home Health | Automate intake, scheduling and claims. Built for HIPAA. Free workflow review. | `?utm_content=hc_ops` |
| Home health | AI Automation for Home Health | Less time on referrals, authorizations and denials. Free workflow review. | `?for=home-health&utm_content=hh_auth` |
| Home care | AI Automation for Home Care | Fill call-outs without a morning on the phone. Free workflow review. | `?for=home-care&utm_content=hc_sched` |
| Clinics and revenue cycle | AI for Clinic & RCM Teams | Prior auths and claim follow-up, checked by your team. Free review. | `?for=clinic&utm_content=rcm` |
| Behavioral health (later) | AI for IOP & PHP Admissions | Reply to every inquiry, day or night. Built for HIPAA. Free review. | `?for=behavioral-health&utm_content=bh_adm` |

Check character limits in Ads Manager before publishing and trim descriptions if needed.

## Tracking and what counts as a conversion

| Event | Fires when | Counts toward the 5%? |
|---|---|---|
| `lead_created` | Workflow review form submitted successfully | **Yes (primary)** |
| `summary_requested` | One-page summary email submitted | No. Reported separately as a secondary lead |
| `booking_made` | Calendar slot booked on the thank-you page | No. Shows lead quality |
| `form_start` | First field touched in any form | No. Diagnoses form friction |
| `cta_click` | Any "Get my free workflow review" button | No. Diagnoses section performance |

Report the 5% on `lead_created` only, so the number isn't inflated by email-only sign-ups.

## Tests after launch (one at a time, 100+ clicks each)
1. **Offer framing:** "Get my free workflow review" vs "Get my automation plan"
2. **Hero H1:** generic healthcare ops vs operator-specific variant for the same ad group
3. **Form:** 4 fields vs 3 (drop the workflow dropdown, ask it on the thank-you page instead)
4. **Fallback offer** if the review lands under 3% at 100 clicks: "Get a cost and timeline estimate for one workflow"

## Interim option while the page is built
TekRevol's existing `/healthcare-ai-automation` page matches the ad far better than `/healthcare-software-development`, and it already offers a free workflow audit. If the campaign has to restart before this page is live, point the healthcare ads there, but first remove the unapproved stats ("200+ healthcare projects", "50+ AI specialists", "Deloitte Fast 50") and the product names still under naming review, unless TekRevol confirms them.

## Open items for TekRevol (`CONFIRM` list)
| # | Item | Why it matters |
|---|---|---|
| 1 | Who joins the review call (senior engineer or solutions architect with healthcare experience) | It's the promise in the hero |
| 2 | Written plan delivered within 2 business days, with a rough cost range | It's the offer. Only promise what delivery will do every time |
| 3 | BAA: do we sign one? | Approvers screen for it first |
| 4 | HL7 / FHIR integration experience we can stand behind | FAQ answer |
| 5 | De-identified or sample data in the Prove step | How-we-build section |
| 6 | Nurse Practitioners "40% shorter wait times" (meta description only) and Kinekt "45% engagement" vs "30% faster response" (pick one) | Proof section numbers |
| 7 | A named person and title for the Libido Health quote; whether the Kinekt reviewer quotes are real | Testimonial slot |
| 8 | Booking tool and the named sender for the follow-up email | Thank-you page and email |
| 9 | Sales can reply within 1 business hour | Thank-you page promise |
| 10 | Whether "200+ healthcare projects" is real and sourced | Could strengthen the trust strip if it is |

## Next steps
- [ ] Sana reviews this copy and marks changes
- [ ] Send the `CONFIRM` list to TekRevol (delivery + sales)
- [ ] Design: one desktop and one mobile mockup of the hero and form first, then the full page
- [ ] Dev: build the page with `?for=` variants, the 4-field form, thank-you page and the five tracking events
- [ ] Write the one-page summary PDF for the champion conversion
- [ ] Update the ads in Ads Manager to the matching copy once the page is live
