---
date: 2026-11-13
tags: [xloop, data-ai-readiness, user-flow, scoring, email, lead-nurture, review-draft]
---

# Data & AI Readiness Tool: full user flow, scoring and follow-up emails

For verification by Irfan and the engineers. Source of truth is the v4 workbook
(`Notes/2026-10-28-xloop-data-ai-readiness-assessment-v4.xlsx`); nothing in the questions or
scoring has changed. What is new here: the walkthrough in the order a user sees it, and one
follow-up email per diagnosis. Items marked **[CONFIRM]** need an answer from the reviewers.
Shareable Word copy (no related links or Next steps): `Notes/2026-11-13-xloop-readiness-tool-user-flow-and-emails.docx`.

Related: [[2026-10-28-xloop-data-ai-readiness-assessment-v4]] ·
[[2026-10-27-xloop-ai-questionnaires-review]] · [[2026-10-19-xloop-blog-is-your-data-ready-for-ai-checklist]]

## 1. The journey at a glance

| Stage | What the user sees | What we ask for |
|---|---|---|
| 0. Landing | "Is your data ready for AI?", the four result types, "about 6 minutes, results before any form" | Nothing |
| 1. Tailor | 3 context questions (X1–X3) | Nothing personal |
| 2. Assessment | 18 scored questions in three sections: Data, AI, Safe to Scale. Then timeline (T1) and data pain (P1) | Nothing personal |
| 3. Instant results | Result type + headline, the 2×2, three scores, six domain bars, blocker names (not the fixes), primary CTA, "Get the full report" | Nothing |
| 4. Full report | PDF: each domain explained, the fix for every blocker, a 90-day first move, relevant proof | First name, work email, company, company size, country (pre-filled), consent |
| 5. Follow-up email | Sent the moment the report is requested. One email per diagnosis (section 6) | — |
| 6. Review | 30-minute Data & AI Readiness Review with an xLoop engineer | Calendar booking (phone optional) |

- Every scored question also offers **"Not sure"**
- **Exception (NEPRA):** Energy & utilities + Pakistan shows the NEPRA page with phone +92 21 3586 9200
  and xsecurity@xloopdigital.com only, no form and no booking link

## 2. Stage 1: context questions (not scored)

Intro line: *"Three quick questions so we can tailor your result."*

### X1. What are you trying to get to first?
- One trusted set of numbers we can report on
- Forecasting and decision support from our data
- Getting off legacy systems that hold us back
- Answers and summaries from our own documents
- An assistant that handles customer questions
- Agents that complete multi-step work across systems
- Visual inspection or video analytics
- Not decided yet

*Used for:* report order, the initiative named in later questions and emails, the service page linked.
"Not decided yet" caps the lead at priority B.

### X2. Which best describes your role?
- CEO, MD or founder
- CIO, CTO, CDO or head of digital
- Head of data, analytics or BI
- CISO, head of security, risk or compliance
- Business unit or operations leader
- Engineering, product or platform lead
- Individual learner, or exploring an AI career
- Other

*Used for:* which score the report shows first (head of data sees Data first, CISO sees Safe first).
Individual learners still get results but are excluded from the pipeline and offered xCelerate.

### X3. Which industry are you in?
- Banking & financial services
- Energy & utilities
- Retail & eCommerce
- Healthcare
- Transport & logistics
- Mining & resources (no industry link until the Release 2 page ships)
- Government & public sector
- Other

## 3. Stage 2: the 18 scored questions

Each answer scores 0–3. **B** = blocker question. **Core** = in the 12-question short version.

### Section A: Data Foundation

**Data Access & Integration**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| D1.1 | Where does the data your initiative needs live today? | Mostly in people's heads, email, spreadsheets or paper | Spread across systems and shared drives, with no clear owner | In known systems, but getting it out takes manual work | In known systems we can reach through APIs, exports or a data platform | B · Core |
| D1.2 | How does data get from those systems to where it is actually used? | It doesn't; people pull it together by hand each time | Manual exports and spreadsheets, repeated every cycle | Some automated pipelines, the rest manual | Automated pipelines into a central platform, with alerts when they fail | Core |
| D1.3 | Can the systems where work happens (CRM, ERP, core banking, ticketing) exchange data with new tools? | No; data moves by copy and paste | Our core platforms are old and have no APIs | Some have APIs, but every connection is a one-off project | Core systems have APIs, and there is a standard way to connect something new | — |

**Data Trust & Meaning**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| D2.1 | If two teams report the same number this month, do they match? *(Helper: Revenue, customer count, claims, units shipped: whichever matters most to you.)* | No, and we have stopped expecting them to | Often not, and reconciling them takes days | Mostly, with known exceptions | Yes; there is one agreed source for the numbers that matter | B · Core |
| D2.2 | Who is responsible for that data being correct and current? | No one | IT keeps the systems running, but nobody owns whether the data is right | Owners exist for major systems, informally | Named owners, with quality standards that are actually checked | Core |
| D2.3 | What shape are the documents and records it relies on? *(Helper: Analytics and AI both work best on content they can search and read.)* | Mostly scanned PDFs, images or paper | A mix of formats, only some searchable | Mostly digital and searchable, but inconsistently labeled | Digital, searchable, and consistently labeled (dates, owners, document types) | — |

### Section B: AI Delivery

**Use Case & Value**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| A1.1 | How clearly is your priority initiative defined? *(Helper: The one you picked at the start.)* | We know we need to do something, but haven't picked it | We have a shortlist, with no single priority | One priority is chosen, but its success measure isn't agreed | One priority is chosen, with an agreed success measure (hours saved, response time, cost per case) | Core |
| A1.2 | If the pilot works, who pays for the rollout? | No one has been asked yet | It would need a new budget request, with no named owner | A named executive owns it, but no budget is set aside | A named executive owns it, and budget is set aside for rollout, not just the pilot | B · Core |
| A1.3 | What will you compare the result against to decide it worked? | Nothing defined; we would judge it informally | A rough sense of today's performance, not written down | Today's baseline is measured for part of the process | Today's baseline is measured, and we know the number that would justify scaling | — |

**Delivery Capability**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| A2.1 | Who would build and look after it? | No one identified, in-house or through a partner | A few enthusiasts, alongside their day jobs | A dedicated team, but missing key skills (data engineering, LLM engineering) | A dedicated team with the skills needed, in-house or through a partner | B · Core |
| A2.2 | What happened to your most recent data or AI project? *(Helper: Count a project as live only if it passed agreed checks for value, accuracy and who supports it.)* | We haven't run one yet | It stayed a demo, or a report nobody uses | It went live for one team but hasn't expanded | It went live and has been expanded or repeated elsewhere | Core |
| A2.3 | How long does it take to get a new dashboard, model or feature to the people who need it? | We can't say; requests sit in a queue | Months, with manual releases | Weeks, with some automation | Days to weeks, with automated testing and release | — |

### Section C: Safe to Scale

**Shadow AI & Data Protection**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| S1.1 | If an employee pasted a client contract into a free public AI chatbot tomorrow, what would happen? | Nothing would stop it, and we wouldn't know | It's against policy, but nothing technical stops it | It's blocked on company devices, but we can't see what happens elsewhere | It's blocked or logged, and staff have an approved AI tool to use instead | B · Core |
| S1.2 | Do you know which AI tools your teams are using today? *(Helper: Include browser extensions and AI features inside tools you already pay for.)* | No | Only the ones IT has bought | We have reviewed or surveyed usage at least once | We track usage continuously and keep an approved-tools list | Core |
| S1.3 | If an assistant sat on top of your documents, could it respect who is allowed to see what? | No; permissions aren't consistent in the source systems | Only if we copied documents into a separate, restricted store | Permissions exist in the source systems, but we haven't tested carrying them through | Yes; access rights carry through, and we have tested it | — |

**Governance & Oversight**

| ID | Question | 0 | 1 | 2 | 3 | Flags |
|---|---|---|---|---|---|---|
| S2.1 | Who can approve a new AI use case going live? | Anyone who can buy or build it | IT or security, informally, if they hear about it | There is a defined approval step, but it isn't always used | A defined approval step with business, security and legal input, used every time | B · Core |
| S2.2 | Which rules apply to how you use data and AI, and are they mapped? *(Helper: For example data protection law (UAE or Saudi PDPL, GDPR), your sector regulator, the EU AI Act, or ISO/IEC 42001.)* | We haven't looked into it | We know data protection law applies, but haven't mapped it to AI | We have mapped the main obligations for our data and AI use | Mapped, owned, and aligned to a recognized framework such as ISO/IEC 42001 or NIST AI RMF | Core |
| S2.3 | Before an AI answer reaches a customer or a decision, what checks it, and what happens if it is wrong? | Nothing checks it; we would find out when someone complained | People check answers when they have time, and fixes are ad hoc | Important answers are reviewed or tested and have an owner, but switching off has never been tested | Answers are checked against agreed thresholds before release, with an owner and a tested way to switch off or roll back | B |

### Closing questions (not scored)

**T1. When would you like this working in production?**
Within 3 months · In 3–6 months · In 6–12 months · No date yet

**P1. In the last 12 months, has missing, wrong or inconsistent data caused delays, errors or lost deals?**
Yes, often · Yes, sometimes · Rarely · No · Not sure

- "Yes, often" opens the report (and the email, see 6.4) with what bad data is costing them
- "No" with a low Data Foundation score: the report notes the cost may not be visible yet

## 4. Scoring mechanism

1. **Answer points:** 0–3 per question
2. **"Not sure":** left out of the domain's possible points (not scored 0). On a blocker question it
   still flags the blocker, because an unknown risk counts
3. **Domain %** = points earned ÷ (3 × questions answered in that domain)
4. **The three scores** = average of their two domains
   - Data Foundation = Data Access & Integration + Data Trust & Meaning
   - AI Delivery = Use Case & Value + Delivery Capability
   - Safe to Scale = Shadow AI & Data Protection + Governance & Oversight
5. **Overall readiness** = average of the three scores (weights 1.0 each, editable)
6. **Blockers:** 7 blocker questions (D1.1, D2.1, A1.2, A2.1, S1.1, S2.1, S2.3). Answered 0–1 or "Not
   sure" = blocker
7. **Priority domain** = lowest priority index, where index = domain % minus 1 if the domain has any
   blocker. Ties go in this order: Data Trust & Meaning, Data Access & Integration, Use Case & Value,
   Delivery Capability, Shadow AI & Data Protection, Governance & Oversight (data wins ties on purpose)
8. **Short version:** only the 12 Core questions count

### Worked example (from the workbook)
- Answers give Data 39%, AI 72%, Safe 39%, overall 50%
- Result: **AI Ahead of the Data**, guardrails behind, 4 blockers, 1 "Not sure"
- Data Trust & Meaning and Shadow AI tie on the index (−0.67); the tie goes to data
- CTA: Book a 30-minute Data & AI Readiness Review, on the data analytics page

## 5. Results diagnosis

### The four result types (Data vs AI, threshold 50% on each)

| Result type | Rule | Headline on results page | What it means | First move in the report | Default page |
|---|---|---|---|---|---|
| Starting Out | Data < 50%, AI < 50% | Start with one question worth answering, and the data it needs. | Early on both sides. The first choices (which initiative, which data, who owns it) decide how the rest goes. | Pick one initiative with a named owner and a success measure, and scope only the data it needs. | /services/ai-consulting-and-development |
| Data Ready, AI Not Started | Data ≥ 50%, AI < 50% | Your data is in better shape than your use of it. | The foundation is there. Missing: a chosen initiative with an owner and a measure. | Pick the first use case your data can already support, and set the number that would justify scaling it. | /services/ai-consulting-and-development |
| AI Ahead of the Data | Data < 50%, AI ≥ 50% | You are ready to build on data that is not ready yet. | Intent, sponsor and often the team are there. The gap is underneath. This is where AI projects quietly stall. | Fix the specific data the initiative depends on, in parallel with a narrow pilot. | /services/data-analytics |
| Ready to Scale | Data ≥ 50%, AI ≥ 50% | The foundations are there. The question is what to scale first. | Ready on both sides. Anything flagged is what could slow the next rollout. | Choose the next initiative to scale, and test it against production controls first. | Initiative page from X1 |

### Overlays (apply to any result type)

| Overlay | Rule | Added line |
|---|---|---|
| Guardrails behind | Safe to Scale < 50% | "Your guardrails are behind your plans." Report puts the Safe fixes before rollout steps |
| Blockers found | 1+ blockers | "[N] things are likely to stall this before it reaches production." CTA switches to the priority domain's CTA |
| Low visibility | 3+ "Not sure" | "You weren't sure about [N] answers, which is worth knowing in itself." |
| Provisional | 6+ "Not sure" | "You weren't sure about [N] answers, so treat these scores as a starting point." |
| Role order | From X2 | Domain order in the report follows the role |

### Where each priority domain routes

| Priority domain | Next step | Page |
|---|---|---|
| Data Trust & Meaning | 30-minute Data & AI Readiness Review | /services/data-analytics |
| Data Access & Integration | 30-minute Data & AI Readiness Review | /services/data-analytics |
| Use Case & Value | 30-minute Data & AI Readiness Review | /services/ai-consulting-and-development |
| Delivery Capability | 30-minute Data & AI Readiness Review | /services/cloud-and-hyperscaling |
| Shadow AI & Data Protection | AI Security Assessment | /services/ai-security-service |
| Governance & Oversight | AI Security Assessment | /services/ai-security-service |

## 6. Follow-up emails

### 6.1 How the emails are put together
- **Trigger:** the moment someone requests the full report. The PDF goes with it
- **One email per result type** (4 emails). Each has a slot for:
  - a **priority domain block** (6 blocks, 6.3): what to fix first, how we would take it, proof, and
    what they leave the call with. With no blockers, the block uses the lowest scoring domain
  - **overlay lines** (6.4) when they apply
- **Sender:** a named person, not "the xLoop team". **[CONFIRM]** who signs: suggest the data lead
  for Data and AI blocks, the security lead for Safe blocks
- **Button:** keeps the booking's one name across the site ("30 minute Data & AI Readiness
  Review"); the line above it names what they get
- **Not sent to:** excluded leads (learners get an xCelerate email instead), NEPRA cases (phone and
  email only)
- Priority A leads still get this email; sales follows up personally within 1 business day
- Merge fields: `{first_name}` `{initiative}` (X1 answer in plain words) `{data}` `{ai}` `{safe}`
  `{blocker_count}` `{blocker_names}` `{notsure_count}`

### 6.2 The four emails

#### Email 1: Starting Out

**Subject:** Your readiness result: start with one question worth answering
**Preview:** The first three choices matter more than any tool.

> Hi {first_name},
>
> Your full report is attached. Your scores: Data Foundation {data}%, AI Delivery {ai}%, Safe to
> Scale {safe}%.
>
> You are early on both sides. That is common, and it is a good place to be honest about. It means
> your first three choices decide how the rest goes: which initiative, which data, and who owns it.
> Skip them and a pilot can end up with nobody to fund the rollout.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, one of our engineers will turn your answers into a first initiative with an owner,
> a success measure and the data it needs. Nothing more to prepare. Bring your report.
>
> **[Book my 30 minute Readiness Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one question you most want answered, and an engineer
> will answer it by email.

#### Email 2: Data Ready, AI Not Started

**Subject:** Your data is ahead of your AI plans
**Preview:** The foundation most companies are still building is already there.

> Hi {first_name},
>
> Your full report is attached. Your scores: Data Foundation {data}%, AI Delivery {ai}%, Safe to
> Scale {safe}%.
>
> You have the foundation most companies are still building. What is missing sits on the AI side: a
> chosen initiative, someone who will fund the rollout, and a number that proves it worked.
>
> So the next step is not more data work. It is choosing the first use case your data can already
> support, and agreeing the number that would justify scaling it.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, one of our engineers will match your data to the use cases it can support today,
> and you leave with the first one to build and the measure to judge it by.
>
> **[Book my 30 minute Readiness Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one question you most want answered, and an engineer
> will answer it by email.

#### Email 3: AI Ahead of the Data

**Subject:** You are ready to build. Your data is not, yet.
**Preview:** This is where AI projects quietly stall.

> Hi {first_name},
>
> Your full report is attached. Your scores: Data Foundation {data}%, AI Delivery {ai}%, Safe to
> Scale {safe}%.
>
> You have the intent, the sponsor and often the team. The gap is underneath: data that is hard to
> reach, or numbers people do not agree on. This is where AI projects quietly stall. The pilot
> works, then nobody trusts what it produces.
>
> The answer is not to pause {initiative}. Fix the specific data it depends on, in parallel with a
> narrow pilot, not after it.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, one of our data engineers will trace {initiative} back to the data it needs, and you
> leave knowing what to fix first and what can run in parallel.
>
> **[Book my 30 minute Readiness Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one question you most want answered, and an engineer
> will answer it by email.

#### Email 4: Ready to Scale

**Subject:** Your foundations are there. What do you scale first?
**Preview:** The risk now is the next rollout, not the first one.

> Hi {first_name},
>
> Your full report is attached. Your scores: Data Foundation {data}%, AI Delivery {ai}%, Safe to
> Scale {safe}%.
>
> You scored ready on both data and AI. That puts you ahead of most teams we assess. The question
> now is which initiative to scale next, and whether it holds up against your production controls
> before it reaches more people.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, one of our engineers will pressure test your next rollout against your answers, and
> you leave with what to scale first and what could slow it down.
>
> **[Book my 30 minute Readiness Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one question you most want answered, and an engineer
> will answer it by email.

*Note:* "ahead of most teams we assess" has no data behind it until we have completions.
**[CONFIRM]** keep it or cut it. Default: cut it at launch.

### 6.3 Priority domain blocks (one drops into the slot)

#### Data Trust & Meaning
> **What to fix first: numbers your teams agree on.**
> When two teams report the same number and get different answers, any AI built on top inherits the
> argument.
>
> How we would take it:
> 1. Pick the three numbers that matter most to {initiative}.
> 2. Trace each one to its sources, then agree one definition and one owner.
> 3. Automate the reconciliation, so the agreed number refreshes without anyone rebuilding it by hand.
>
> We did this for one of the largest asset management companies in Pakistan, replacing manual
> spreadsheet reconciliation with automated matching and exception reporting.

#### Data Access & Integration
> **What to fix first: getting to the data without manual work.**
> The data {initiative} needs takes manual work to reach today. That cost rarely appears in a budget,
> but it appears in every reporting cycle.
>
> How we would take it:
> 1. List every source {initiative} needs, who owns it, and how to reach it.
> 2. Automate the two or three manual pulls that repeat every cycle.
> 3. Agree one standard way for your core systems to connect to new tools.
>
> We moved a {descriptor} off legacy RPG applications onto private cloud with minimal disruption.

#### Use Case & Value
> **What to fix first: one initiative with a funded owner.**
> A pilot without an agreed success measure, or without someone to pay for the rollout, tends to
> end as a demo.
>
> How we would take it:
> 1. Score your shortlist on value, data readiness and risk.
> 2. Choose one, with a named owner and a success measure such as hours saved or cost per case.
> 3. Write the one page rollout case, and agree who funds it before the pilot starts.
>
> {PROOF: A12 or A18 depending on the initiative}

#### Delivery Capability
> **What to fix first: who builds it, and how it reaches users.**
> Your answers point to a gap in {team capacity / how new work gets released}. They need different
> fixes, and your report separates the two.
>
> How we would take it:
> 1. Decide what stays in house and what to bring in.
> 2. Fill the missing skills first, usually data engineering or LLM engineering.
> 3. Set go or no go criteria for every pilot, and a release path that gets new work to users in
>    weeks.
>
> We scaled a platform for a {descriptor} past 10,000 users at 99.9% uptime.

#### Shadow AI & Data Protection
> **What to fix first: what data leaves through AI tools.**
> If your teams already use public AI tools, the real question is what data goes with them. Your
> answers say you cannot fully see that yet.
>
> How we would take it:
> 1. Find the AI tools in use today, including browser extensions and AI features inside tools you
>    already pay for.
> 2. Give staff an approved tool, and block or log sensitive data pasted into public ones.
> 3. Test that access rights hold before any assistant sits on your documents.
>
> Our assessments are led by certified ISO 27001 and ISO/IEC 42001 Lead Auditors.
>
> *Closing line and button for this block replace the profile's:* In 30 minutes, our security lead
> will scope an AI Security Assessment around your answers, and you leave with the first three
> controls to put in place. **[Book my AI Security Assessment call]**

#### Governance & Oversight
> **What to fix first: who approves AI going live, and what checks its answers.**
> Done well, governance makes approvals faster. Right now, AI can go live without a clear sign off,
> or its answers can reach people without a check.
>
> How we would take it:
> 1. Add one go live approval step with business, security and legal sign off.
> 2. Map the rules that apply to you (data protection law, your sector regulator) and give each an
>    owner.
> 3. Set checks for AI answers before release, with an owner and a tested way to switch off or roll
>    back.
>
> Our assessments are led by certified ISO 27001 and ISO/IEC 42001 Lead Auditors.
>
> *Closing line and button for this block replace the profile's:* In 30 minutes, our security lead
> will walk your first use case through a go live approval step, and you leave with the checks its
> answers need before release. **[Book my AI Security Assessment call]**

### 6.4 Overlay lines (added in this order, after the block)

- **P1 = Yes, often** (goes at the very top, after "Hi"): "You told us missing or wrong data has
  caused delays, errors or lost deals more than once this year. Your report starts there."
- **Blockers found:** "We found {blocker_count} things likely to stall this before it reaches
  production: {blocker_names}. The fix for each one is in your report."
- **Guardrails behind** (only when the block is not a Safe block): "One more thing. Your Safe to
  Scale score is {safe}%, so your guardrails are behind your plans. That is cheaper to fix before
  anything reaches customers, and we can cover it on the same call."
- **Low visibility** (3–5 "Not sure"): "You were not sure about {notsure_count} answers. That is
  worth knowing in itself, and your report suggests who inside your organization could answer each
  one."
- **Provisional** (6+ "Not sure", replaces the line above): "You were not sure about
  {notsure_count} answers, so treat these scores as a starting point. A 30 minute review is the
  quickest way to fill the gaps."

## 7. Questions for Irfan and the engineers

- [ ] **Questions and answer scales:** any wording that a CIO or head of data would read differently
  than we intend?
- [ ] **Scoring:** agree that "Not sure" is left out of the score (still flags blockers), and that
  6+ "Not sure" makes the result provisional
- [ ] **Thresholds:** 50% on each axis, blocker at 0–1. Fine for launch, review after 50 completions?
- [ ] **"How we would take it" steps:** are these the steps you would actually run? Change anything
  you would not do
- [ ] **What the 30-minute review covers:** each email promises a specific output ("you leave
  with…"). Can an engineer deliver that in 30 minutes from the report alone?
- [ ] **AI Security Assessment:** the routing tab says it is built; the 27 Oct security page note
  says `/ai-security-assessment` returned 404. Which link does the Safe button go to?
- [ ] **Proof:** confirm the anonymous descriptors for A14 (legacy RPG) and A11 (10,000 users), and
  pick A12 or A18 for Use Case & Value
- [ ] **P.S. reply promise:** who answers the email replies, and how fast?
- [ ] **Sender:** who signs the Data/AI emails and who signs the Safe emails

## Next steps

- [ ] Sana: review the emails for tone, then send this doc to Irfan and the engineers
- [ ] Irfan + engineers: answer section 7
- [ ] Sales: sign off on lead rules (still open from v4)
- [ ] Developers: build the email logic (4 templates, 6 blocks, overlay rules) with the tool
- [ ] Decide whether a day-4 nudge email follows for people who have not booked
