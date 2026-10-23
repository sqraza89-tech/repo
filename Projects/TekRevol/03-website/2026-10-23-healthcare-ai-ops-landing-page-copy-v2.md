---
date: 2026-10-23
tags: [tekrevol, landing-page, copy, chatgpt-ads, healthcare, home-based-care, cro]
cover_label: LANDING PAGE COPY · V2
cover_title: Healthcare AI Ops Page
cover_sub: PAID TRAFFIC LANDING PAGE · TARGET 5% CLICK TO LEAD
docx_name: TekRevol-Healthcare-AI-Ops-Landing-Page-Copy-v2
---

# TekRevol healthcare AI operations landing page: copy v2

**What this is:** copy v2 for the ChatGPT Ads healthcare landing page. It applies the review feedback of 23 Oct 2026 to [[2026-10-16-healthcare-ai-ops-landing-page-copy]] (v1). Research, competitor notes and the audit link stay in v1.
**Goal:** click to lead of **5% or more** on healthcare ChatGPT Ads traffic.
**Status:** every copy `CONFIRM` from v1 is now answered, softened or removed. Two setup items still block launch (booking tool and the email sender, see the last section).
**Voice:** TekRevol rules. No em dashes, active voice, approved claims only, no rival or AI tool names.

## What changed from v1

| Feedback | What v2 does |
|---|---|
| Resolve every `CONFIRM` | Confirmed items stay. Unconfirmed items are softened or removed (table below) |
| Move proof up | New order: proof is section 3, right after the trust strip |
| Tighten the hero | New eyebrow and subhead. Form says what you get, and when, under the button |
| Reduce form friction | Organization type is prefilled and hidden on `?for=` variants. "Not sure yet" added. `lead_created` fires on form success only |
| Make the offer concrete everywhere | Same deliverables sentence in the hero, the offer section and the final CTA |
| Cut the middle | "Where the hours go" is 4 cards, not 6. "How we build" is shorter, with the Ship Line explained in one sentence |
| Strengthen trust | "800+ products shipped" replaced with "Healthcare software in production for providers". BAA added to the trust strip |
| Risk reversal near CTAs | "No new EHR. No commitment. We sign a BAA. Built for HIPAA from the first sprint." in the offer section and final CTA |
| More objection handling | FAQ goes from 7 to 10 questions (two pairs merged so it stays short) |
| Second conversion | Its own light section after "How we build" |
| Ad typos "Al" and "auhs" | Not in the copy file: the text reads "AI" and "auths". In the brand font a capital I can look like a lowercase l. Type the ads by hand in Ads Manager |
| Also fixed | Kinekt card no longer names an AI model (brand rule: no tool names). The case is called "Nurse Practitioners" on tekrevol.com, not "SafeNurse" |

### How each `CONFIRM` was resolved

| Item | Answer | In the copy |
|---|---|---|
| Who joins the review call | Account manager, technical lead or sales | "our healthcare automation team" (true whoever joins). If TekRevol can put a technical lead on every call, say "a technical lead" instead: it converts better |
| Written plan within 2 business days | Confirmed | Used in the hero, offer and final CTA |
| Rough cost range in the plan | Confirmed | Used |
| BAA | Confirmed | Trust strip, HIPAA section, FAQ, risk reversal |
| HL7 and FHIR | Keep for now | FAQ only |
| De-identified or sample data in Prove | No answer | Removed. Prove now reads "tested with your team before it goes live" |
| Nurse Practitioners: 40% shorter wait times | Confirmed by TekRevol | On the card. **Note:** on tekrevol.com it appears only in the meta description, not the case study body. Ask the web team to add it to the body, because the card links there |
| Kinekt: 45% vs 30% | "Ok", one number | 45% more user engagement (it's the case study's headline; "30% faster response" appears nowhere on the page). Same note: add it to the body |
| Named person for the Libido Health quote | Not available | Quote shown as "Libido Health Inc." |
| Sales reply within 1 business hour | No answer | Removed. Thank-you page now says to reply to our email |
| "200+ healthcare projects" | No answer | Not used |
| Healthcare client logos | Not approved | Not used. Case cards and the testimonial carry the proof |

## Page setup

- **URL:** `/lp/healthcare-ai-operations` · `noindex, nofollow` · paid traffic only
- **Title tag:** AI Automation for Home Health and Clinic Operations | TekRevol
- **Meta description:** AI workflows for intake, scheduling, documentation and claims, built around the systems you already use. Built for HIPAA from the first sprint.
- **No top navigation.** Logo is not a link. Footer: privacy policy, terms, phone number only
- **Hero variants by URL parameter** `?for=`: swap the H1 and subhead, prefill and hide Organization type
- **Sticky bar on mobile** after the hero scrolls away: "Get my free workflow review", jumps to the hero form
- **One CTA after every major section**

## Page order

1. Hero and form
2. Trust strip
3. Proof
4. Where the hours go
5. What we automate
6. Free workflow review
7. Built for HIPAA
8. How we build
9. One-page summary (second conversion)
10. FAQ
11. Final CTA
12. Footer

## Section 1: Hero

| Element | Copy |
|---|---|
| Eyebrow | FOR HOME HEALTH, HOME CARE, CLINIC AND RCM TEAMS |
| **H1** | **AI automation for home health and clinic operations** |
| Subhead | Give your coordinators back the hours lost to intake, scheduling, paperwork and claims. We build AI workflows around your EHR, scheduling and billing systems. Built for HIPAA from the first sprint. |
| Form heading | Get your free workflow review |
| Button | **Get my free workflow review** |
| Under the button | 30 minutes with our healthcare automation team. No commitment. |
| Lead-in for the bullets | Within 2 business days, you get: |
| Bullets | A written plan for the first 3 workflows to automate · The HIPAA points to plan for · A rough cost range |
| Privacy line | We use your details only to set up your review. No newsletters, no sales sequence. |

"No sales sequence" is a promise: sales sends the one follow-up email below and a booking reminder, nothing automated after that.

### Hero variants (`?for=`)
The eyebrow stays the same on every variant. Organization type is prefilled and hidden.

| Parameter | Ad group | H1 | Subhead | Hidden org type |
|---|---|---|---|---|
| (none) | Healthcare AI & Operations | AI automation for home health and clinic operations | As above | Shown, required |
| `home-health` | Home health | AI automation for home health agencies | Spend less time chasing referrals, authorizations and denials. We build AI workflows around your EHR. Built for HIPAA from the first sprint. | Home health agency |
| `home-care` | Home care | AI automation for home care agencies | Fill call-outs without a morning on the phone, and cut the back-office work that keeps coordinators late. Built for HIPAA from the first sprint. | Home care agency |
| `behavioral-health` | Behavioral health (later) | AI automation for IOP and PHP admissions | Reply to every inquiry while the person is still deciding, day or night. Verify benefits sooner and book the assessment before they call someone else. | Behavioral health (IOP or PHP) |
| `clinic` | Clinics and revenue cycle | AI automation for clinic and revenue cycle teams | Prior authorizations, claim follow-up and patient messages, prepared by AI and checked by your team. Built for HIPAA from the first sprint. | Clinic or medical practice |

## The form (hero and final CTA)

| Field | Type | Required | Options / placeholder |
|---|---|---|---|
| Full name | Text | Yes | Your name |
| Work email | Email | Yes | you@yourorganization.com |
| Organization type | Dropdown | Yes on the default page. **Prefilled and hidden on `?for=` variants** | Home health agency · Home care agency · Behavioral health (IOP or PHP) · Clinic or medical practice · Digital health company · Other |
| Which work costs your team the most time? | Dropdown | No | Intake and referrals · Eligibility and authorizations · Scheduling and call-outs · Visit notes and documentation · Claims and denials · Admissions inquiries · Something else · **Not sure yet** |
| Phone | Phone | No | Only if you'd like a call instead of email |

- **Visible fields:** 4 on variants, 5 on the default page (2 of them optional)
- **Hidden fields:** utm_source, utm_medium, utm_campaign, utm_content, landing_page, `for` variant, organization type (on variants)
- **Spam check:** invisible. Keep the honeypot field
- **Error message:** "Please add a work email so we can send your plan."
- **On submit:** fire `lead_created` on the **form success event**, then go to the thank-you page. Never fire it on thank-you page load (refreshes and ad blockers distort it)

## Section 2: Trust strip

4.8/5 on Clutch · Healthcare software in production for providers · Experience with HIPAA, SOC 2 and PCI DSS · We sign a BAA

Badges: Clutch Top 1000 · Inc. 5000. Nothing else.

## Section 3: Proof

| Element | Copy |
|---|---|
| H2 | **Healthcare software we've shipped** |
| Intro | Scheduling, home visits, patient communication and AI, running in production for care providers. |

Feature card first, then three cards. Each links to its case study in a new tab.

| Case | Card copy | Outcome line |
|---|---|---|
| **Libido Health** (feature card) | A HIPAA-compliant platform for therapy and coaching sessions: scheduling, real-time video visits and an AI coaching assistant that checks in with members daily. | **80% fewer session no-shows. 20,000+ active users in the first three months.** |
| **Nurse Practitioners** | In-home care on demand. Patients book nurse visits by the hour, consult by video, and track every request. Nurse pay is calculated in the same platform. | **40% shorter patient wait times** |
| **Kinekt** | AI patient feedback for UK care providers. AI reads feedback from every channel, scores sentiment, sorts it automatically and drafts replies. | **45% more user engagement** |
| **Rehkempers** (tag: Automation outside healthcare) | Replaced a 50-year manual pricing process across 4 manufacturing plants. The same approach applies to intake and claims work. | (in the card copy) |

**Testimonial (inside the Libido Health feature card):**
"TekRevol transformed our platform into a comprehensive and secure space where our members feel empowered."
Libido Health Inc.

- Never use the four reviewer quotes on the Kinekt page; they read like placeholders
- CTA under the cards: **Get my free workflow review**

## Section 4: Where the hours go

| Element | Copy |
|---|---|
| H2 | **Where your team's hours go** |
| Intro | You don't need another system. You need fewer tasks that depend on someone remembering to do them. |

Four cards:
- A referral waits in the fax queue while the referral source calls another agency.
- A coordinator spends the morning on the phone to cover one call-out.
- An authorization runs out, and nobody notices until the claim comes back.
- An inquiry arrives after 5 pm and goes cold by morning.

Line under the cards: **Each of these is a workflow. Each one can be automated, with your team still making the call.**
Link: Find out which one to fix first

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
Mobile: one card per workflow (or an accordion), not a table.

## Section 6: The free workflow review (the offer)

| Element | Copy |
|---|---|
| H2 | **What you get from the free workflow review** |
| Intro | One conversation, one written plan. You get the 3 workflows to automate first, what each one would take, the HIPAA points to plan for, and a rough cost range. No commitment. |

| Step | Copy |
|---|---|
| **Before the call** | Tell us which work costs your team the most time. It takes two minutes in the form above. |
| **On the call (30 minutes)** | Walk us through how that work runs today: who touches it, which systems it lives in, where it stalls. |
| **Within 2 business days** | Your written plan: the 3 workflows to automate first, what each one would take, the HIPAA points to plan for, and a rough cost range. |

CTA: **Get my free workflow review**
Risk reversal line under the button: No new EHR. No commitment. We sign a BAA. Built for HIPAA from the first sprint.

## Section 7: Built for HIPAA from the first sprint

Written for the person who approves the budget and won't be on the call.

| Element | Copy |
|---|---|
| H2 | **Built for HIPAA from the first sprint** |
| Intro | Compliance isn't a review at the end. It's how the work starts. |

- We sign a Business Associate Agreement
- Encryption for data at rest and in transit
- Least-privilege access and audit logs on every workflow
- Private AI models, with personal data redacted before it reaches the model
- A secure software development lifecycle with code and dependency scans
- Experience with HIPAA, SOC 2 and PCI DSS requirements

## Section 8: How we build

| Element | Copy |
|---|---|
| Eyebrow | THE STRATA METHOD |
| H2 | **Explore with AI. Ship with engineering.** |
| Body | We try ideas quickly with AI. Before anything touches patient data, it must pass the Ship Line: a written pass-or-fail check of security, data handling and AI accuracy. |

| Step | Copy |
|---|---|
| **1. Map** | We pick one workflow and measure how it runs today. |
| **2. Prove** | A working version, tested with your team before it goes live. |
| **3. Ship** | It passes the Ship Line, goes live with monitoring, and we track the hours it saves. |

CTA: **Get my free workflow review**
If testing shows visitors don't understand "Ship Line", rename it "Launch gate".

## Section 9: One-page summary (second conversion)

Visually light. For the champion who can't book a call alone.

| Element | Copy |
|---|---|
| Heading | Need to bring this to your leadership? |
| Body | Get a one-page summary of how we work, what we automate and how we handle patient data. Built to forward. |
| Field | Work email |
| Button | **Send me the one-page summary** (secondary style, not orange) |
| Tracking | Fires `summary_requested`, not `lead_created`. Needs the one-pager written |

## Section 10: FAQ (answer first, short)

| Question | Answer |
|---|---|
| **What does it cost?** | It depends on the workflow and the systems involved. Your written plan includes a rough cost range, so you can budget before you commit to anything. |
| **What happens after the review?** | You get your written plan within 2 business days. If you want to go ahead, we scope the first workflow together. If not, the plan is yours to keep. |
| **Do you replace our EHR?** | No. We build around the EHR, scheduling and billing systems you already use, through their APIs or standard formats like HL7 and FHIR where they're available. If your system has no way in, the review will tell you what's possible. |
| **How do you handle patient data?** | We sign a BAA and build for HIPAA from the first sprint: encryption at rest and in transit, least-privilege access, audit logs, and private AI models with personal data redacted before it reaches the model. |
| **Will AI make decisions about patients?** | No. AI prepares, sorts and flags. Clinicians and coordinators approve anything that affects care or billing. |
| **Will this replace our staff?** | It replaces tasks, not people. The aim is fewer late nights for coordinators and clinicians, and more of their time on patients. |
| **What if our data isn't clean?** | That's normal. The review looks at where your data lives and how it's kept, and your plan says what, if anything, needs fixing first. |
| **Is this only for large agencies?** | No. We start with one workflow, so the first project fits the size of your team. |
| **How soon can something go live?** | We agree on the first workflow and its scope before any build starts. Your written plan includes a timeline for it. |
| **Do we need an IT team?** | No. We work with your operations lead and handle the technical side. If you have IT, we work with them too. |

Build as an accordion with the first item open. CTA beside or under the FAQ: **Get my free workflow review**

## Section 11: Final call to action

| Element | Copy |
|---|---|
| H2 | **Find the 3 workflows costing your team the most time** |
| Body | One conversation, one written plan. You get the 3 workflows to automate first, what each one would take, the HIPAA points to plan for, and a rough cost range. No commitment. |
| Form | Same form as the hero, with the same lines under the button |
| Button | **Get my free workflow review** |
| Risk reversal | No new EHR · No commitment · We sign a BAA · Built for HIPAA from the first sprint |

## Thank-you page

| Element | Copy |
|---|---|
| H1 | **Thanks. Pick a time for your review.** |
| Body | Choose a 30-minute slot below. You'll get a calendar invite and a short reminder the day before. |
| Embed | Booking calendar, above the fold (tool still to be chosen) |
| What to have ready | The workflow you picked, and a rough idea of how many people work on it each week · The names of the systems it touches (EHR, scheduling, billing) · Any numbers you already track, like referrals per week or denial rate |
| If they don't book | Prefer a call? Reply to our email with a good time and your number, and we'll call you. |
| Tracking | `booking_made` fires when a slot is booked. `lead_created` already fired on the form |

## First follow-up email (within 5 minutes, plain text, from a named person)

| Element | Copy |
|---|---|
| From | [Name], [title] at TekRevol (a real person, not "info@") |
| Subject | Your workflow review: [workflow they picked] |
| Body | Hi [first name], thanks for asking for a workflow review. You picked **[workflow]** as the work that costs your team the most time, so that's where we'll start. If you haven't booked a time yet, here's the link: [booking link]. On the call we'll walk through how that work runs today, and within 2 business days you'll have a written plan for the first 3 workflows to automate. If it's easier, reply with a good time and your number, and I'll call you. [Name] |
| If no workflow picked, or "Not sure yet" | Replace the second sentence with: "Before the call, reply with the one task your team would most like to stop doing by hand." |

## Matching ad copy (ChatGPT Ads)

Each headline matches its variant's H1 as closely as the limit allows. Type these into Ads Manager by hand (don't paste from the PDF) and check character limits before publishing.

| Ad group | Headline | Description | Link |
|---|---|---|---|
| Healthcare AI & Operations | AI Automation for Home Health & Clinics | Automate intake, scheduling and claims. Built for HIPAA. Free workflow review. | `?utm_content=hc_ops` |
| Home health | AI Automation for Home Health Agencies | Less time on referrals, authorizations and denials. Free workflow review. | `?for=home-health&utm_content=hh_auth` |
| Home care | AI Automation for Home Care Agencies | Fill call-outs without a morning on the phone. Free workflow review. | `?for=home-care&utm_content=hc_sched` |
| Clinics and revenue cycle | AI Automation for Clinic & RCM Teams | Prior auths and claim follow-up, checked by your team. Free review. | `?for=clinic&utm_content=rcm` |
| Behavioral health (later) | AI Automation for IOP & PHP Admissions | Reply to every inquiry, day or night. Built for HIPAA. Free review. | `?for=behavioral-health&utm_content=bh_adm` |

If a headline is over the limit, shorten in this order: drop "Agencies", then "&" phrases, keeping "AI Automation for".

## Tracking

| Event | Fires when | Counts toward the 5%? |
|---|---|---|
| `lead_created` | Workflow review form **success event** | **Yes (primary)** |
| `summary_requested` | One-page summary form submitted | No. Reported separately |
| `booking_made` | Slot booked on the thank-you page | No. Shows lead quality |
| `form_start` | First field touched in any form | No. Diagnoses form friction |
| `cta_click` | Any "Get my free workflow review" button | No. Shows which sections pull |

## Tests after launch (one at a time, 100+ clicks each)
1. **Offer framing:** "Get my free workflow review" vs "Get my automation plan"
2. **Hero H1:** default vs operator-specific variant for the same ad group
3. **"Ship Line" vs "Launch gate"** if scroll and FAQ data suggest confusion
4. **Fallback offer** if the review lands under 3% at 100 clicks: "Get a cost and timeline estimate for one workflow"

## Still open before launch

| # | Item | Blocks |
|---|---|---|
| 1 | Booking tool (Calendly, HubSpot meetings or other) | Thank-you page |
| 2 | Named sender (name and title) for the follow-up email | Follow-up email |
| 3 | Add the 40% (Nurse Practitioners) and 45% (Kinekt) figures to the case study bodies on tekrevol.com | Nothing, but visitors who click through won't see the numbers otherwise |
| 4 | Write the one-page summary PDF | Section 9 |
| 5 | Optional: confirm a technical lead joins every review call | Would let the hero say "a technical lead" |

## Next steps
- [ ] Sana reviews copy v2
- [ ] Get the booking tool and the named sender from TekRevol sales
- [ ] Ask the web team to add the two numbers to the case study bodies
- [ ] Update the GPT design briefs to v2 and finish the Figma page
- [ ] Dev: hidden org type on variants, `lead_created` on form success, thank-you page with booking embed
