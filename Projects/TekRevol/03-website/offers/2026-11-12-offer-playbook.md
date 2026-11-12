---
date: 2026-11-12
tags: [tekrevol, offers, playbook, sales, lead-routing, email, internal]
docx_name: TekRevol-Offer-Playbook
cover_label: SALES AND DELIVERY
cover_title: Offer playbook
cover_sub: Estimates, systems reviews, business case kit · Internal
---

# Offer playbook: how we deliver what the website promises

Internal. For TekRevol sales and delivery.

## Why this matters

The new website replaces "Start a project" with three offers that promise something specific by a specific date. The offers bring better leads only if every lead gets the deliverable on time and at the same quality. A late or thin estimate loses the lead and the trust.

| Offer | Promise on the site | Template |
|---|---|---|
| Project estimate | Written estimate in 3 business days | [[2026-11-12-project-estimate-template]] |
| Systems review | 45-minute session, written report in 5 business days | [[2026-11-12-systems-review-report-template]] |
| Business case kit | Instant download | [[2026-11-12-business-case-kit]] |

Spec for the website side: [[2026-11-12-homepage-copy-v3]], section "Offers and calls to action".

## Owners and turnaround

`CONFIRM` every name and time with TekRevol leadership before launch.

| Step | Owner | Time limit |
|---|---|---|
| First reply to a new lead (confirmation email) | Automated + sales rep | Within 1 business hour |
| Triage: route or nurture | Sales rep | Same business day |
| Write the estimate | Solution architect or tech lead | Draft by day 2 |
| Review the estimate (numbers and tone) | Head of delivery or CTO delegate | Day 3, before noon |
| Send the estimate | Sales rep, from the estimator's name | Day 3 |
| Book the systems review session | Sales rep | Within 3 business days of the request |
| Write the review report | Senior architect who ran the session | Within 5 business days of the session |
| Walkthrough calls | Estimator or architect + sales rep | Offered in every delivery email |

**Capacity check:** at [N] estimates a week `CONFIRM`, who covers overflow? Agree a backup writer before launch.

## Triage: who gets what

| Lead looks like | Route |
|---|---|
| 20+ employees, clear project, budget $35K+ or not stated | Full estimate, senior writer |
| 20+ employees, problem but no project yet | Offer a systems review instead (reply template below) |
| Under 20 employees, or budget under $35K | Nurture: pricing guide + kit, no sales time. Upgrade if they reply with a fit project |
| Personal email, no company | Ask for company details once; nurture if no answer |
| Outside services (AI-first project) | Refer to the AI sister brand `CONFIRM` name |
| Job seekers, vendors, spam | Close in CRM, no reply |

## Writing rules for estimates and reports

- **Answer first.** Recommendation and range in the first half page
- **Use their words.** Quote the form; name their systems, teams and numbers
- **Ranges, not single numbers,** until discovery is done
- **Say what not to build.** It is what makes the estimate credible
- **Be fair about buying.** If an off-the-shelf tool fits, say so. It earns the next project
- **No filler:** no company history, no generic capability pages, no "world-class"
- **Tone:** senior, plain, calm. No rescue language about past vendors, no "offshore" or "outsourcing"
- **Length:** estimate 3 to 5 pages, review report 4 to 6 pages
- **Format:** PDF from the Word template, sent from the writer's own email, sales rep copied

## Quality check before sending

- [ ] Recommendation and range are on page one
- [ ] Every [bracket] is replaced; no template text left
- [ ] Ranges match the published planning ranges, or the difference is explained
- [ ] Phases add up to the total range
- [ ] At least one "what we wouldn't build" item
- [ ] Assumptions and what moves the price are listed
- [ ] No client names in "similar work" without permission
- [ ] Walkthrough booking link works
- [ ] Reviewer has signed off

## Email templates

### 1. Confirmation (automatic, within minutes)

**Subject:** Your project estimate is on its way

Hi [First name],

Thanks for the details on [project summary]. [Estimator name], one of our [solution architects], is reviewing it now. You'll have your written estimate by **[day, date]**: cost range, timeline, team and what we'd build first.

If anything's missing, we'll ask before then. Want to walk through it together when it lands? Book a time now: [link]

[Sales rep name]
TekRevol

### 2. Estimate delivery

**Subject:** Your estimate for [project name]

Hi [First name],

Attached is your estimate. The short version: we recommend [one-line recommendation], with a planning range of [$X to $Y] and a first working release in about [N] weeks.

The estimate also covers what we'd leave out for now, and why.

[Estimator name] can walk you through it in 30 minutes: [link]. If you're building the case internally, the business case kit has a one-page template and an ROI worksheet this estimate fits into: [link]

[Estimator name], [Title]
TekRevol

### 3. Follow-ups after delivery

- **Day 2:** "Did the estimate answer what you needed? Happy to adjust the scope options if something's off." + walkthrough link
- **Day 7:** one relevant case study, one line on why it's relevant + walkthrough link
- **Day 21:** "Is this still a priority this quarter? If timing has moved, tell us and we'll check in later." Then move to nurture

### 4. Problem, not a project (route to systems review)

**Subject:** A better first step for [system]

Hi [First name],

From what you've described, it's too early for a full estimate. A systems review would help more: 45 minutes with [Architect name] on [system], then a written report within 5 business days with what to keep, fix, connect or rebuild, and the cost of each.

Pick a time: [link]

### 5. Systems review: before the session

Send with the calendar invite. Ask for, where possible: a 5-minute screen recording of the workflow, rough numbers (hours a week, error rate), and which tools it connects to. Nothing confidential before an NDA.

### 6. Nurture (small or early leads)

**Subject:** Software pricing, before you talk to anyone

Hi [First name],

Thanks for reaching out. Here's what we share with every company planning a software project: our planning ranges and what moves them, plus a business case kit with an ROI worksheet. [links]

When the project is ready to scope, reply to this email and we'll send a written estimate.

## Business case kit follow-up (download, no form beyond email)

- **Immediately:** email with the PDF link and one line: "When you have a project in mind, we'll turn it into a written estimate that fits section 1."
- **Day 3:** the ROI worksheet as a spreadsheet `CONFIRM` (Excel version to be built)
- **Day 10:** offer the project estimate or a systems review, whichever fits their company size

## What to track in the CRM

| Stage | Measure |
|---|---|
| Lead by offer | Estimate / systems review / kit, and company size band |
| Delivered on time | Share of estimates sent within 3 days and reports within 5 |
| Walkthrough booked | Share of delivered estimates and reports |
| Discovery signed | Share of walkthroughs |
| Won | Deal value by offer and size band |

Review monthly with marketing. If one offer brings many leads but few walkthroughs, change the offer, not the follow-up volume.

## Next steps
- [ ] Leadership: name the owners and confirm the turnarounds (3 and 5 business days)
- [ ] Sales: confirm the triage thresholds (20 employees, $35K)
- [ ] Sales: confirm the planning ranges used in the kit and estimates
- [ ] Delivery: confirm the security answers in the kit (section 6)
- [ ] Marketing: build the ROI worksheet as an Excel file
- [ ] Marketing: load email templates into the CRM, with offer type as a lead field
- [ ] Pilot: run 3 internal practice estimates on past projects before launch
