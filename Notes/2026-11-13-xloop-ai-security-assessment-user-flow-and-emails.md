---
date: 2026-11-13
tags: [xloop, ai-security, assessment-tool, user-flow, scoring, email, lead-nurture, review-draft]
---

# AI Security Readiness Assessment: user flow, results and follow-up emails

For review by the security lead and the developers. Source of truth is the approved workbook, `AI_Security_Readiness_Assessment_UpdatedV2.xlsx` (Sana's OneDrive, checked 13 Nov): 45 questions, 9 domains, 4 tiers. Nothing in the questions or scoring changes here. What is new: the journey in the order a user sees it, and one follow-up email per tier, ending in a call with the security team. It mirrors the Data & AI Readiness tool, so both tools behave the same way. Items marked **[CONFIRM]** need an answer.

Related: [[2026-11-13-xloop-readiness-tool-user-flow-and-emails]] · [[2026-11-13-xloop-ai-security-assessment-seo-pack]] · [[2026-10-27-xloop-ai-security-page-content-v1]]

## 1. The journey at a glance

| Stage | What the user sees | What we ask for |
|---|---|---|
| 0. Landing | Title, intro (SEO pack), "45 questions across nine areas, results before any form, no account needed", the four tiers | Nothing |
| 1. Assessment | 45 questions in 9 sections, 5 per section. 43 are scored on a 1 to 4 scale; 2 are short written answers (Compliance, Agentic AI) | Nothing personal |
| 2. Instant results | Overall score and tier, a bar for each of the 9 domains, strongest domain, priority focus area, primary CTA, "Get the full report" | Nothing |
| 3. Full report | PDF: each domain explained, what good looks like for every low scoring question, the recommended next step for the tier | First name, work email, company, company size, country (pre-filled), consent |
| 4. Follow-up email | Sent the moment the report is requested. One email per tier (section 4) | — |
| 5. Call | 30 minute AI Security Review with xLoop's security team | Calendar booking (phone optional) |

- **Data handling (UX addendum):** "No account required. Your answers are not stored unless you choose to get your report." Show this on the landing page
- **Written answers** (Compliance Q5, Agentic AI Q5) go to the security team with the lead, for the call. They are not scored and not quoted back in the email
- **NEPRA exception, same as the readiness tool:** Energy & utilities + Pakistan visitors get the NEPRA contact (phone +92 21 3586 9200, xsecurity@xloopdigital.com) on the results page, alongside the booking link. **[CONFIRM]** whether the readiness tool's "no booking link" rule applies here too

## 2. Scoring (as built in the workbook)

1. **Answer points:** 1 (weakest practice) to 4 (strongest) per scored question
2. **Domain %** = points earned ÷ maximum points for that domain. Seven domains have 5 scored questions (20 points max); Compliance & Regulatory Readiness and Agentic AI & Adversarial Robustness have 4 scored (16 points max)
3. **Overall %** = points earned ÷ 172 (domain weights equal by default, editable)
4. **Tier** from the overall %:

| Tier | Score | What it means (workbook) |
|---|---|---|
| Exposed | 0 to 25% | AI security is largely unmanaged: real, near term risk of data leakage, model misuse or compliance failure |
| Foundational | 26 to 50% | Basic controls exist but are inconsistent and mostly reactive, not designed for AI specific threats |
| Managed | 51 to 75% | Core AI security practices are in place and mostly consistent, with some gaps in monitoring or vendor risk |
| Advanced | 76 to 100% | AI security is proactively managed with strong governance, monitoring and response |

5. **Strongest domain** = highest domain %. **Priority focus area** = lowest domain % (ties: first in the workbook's domain order)
6. **Dashboard target line:** 75% per domain

**Note on the scale:** the lowest answer still scores 1 point, so the minimum possible overall score is 25%, which is "Exposed". The tier logic works, but the scores read higher than a 0 to 3 scale would. **[CONFIRM]** keep as built, or rescale to (points − 43) ÷ 129 so a weakest answer reads as 0%.

## 3. Results page copy

**Tier headlines (results page and report cover):**

| Tier | Headline | One line under it |
|---|---|---|
| Exposed | Your AI is running ahead of your security. | Most of what protects your AI today is luck. The good news: the first fixes are quick, and they close the biggest risks. |
| Foundational | You have the basics. They weren't built for AI. | Your controls exist, but they were designed for ordinary IT. AI brings new ways in: prompts, models, agents and vendors. |
| Managed | Your AI security is in good shape, with a few gaps. | The core practices are there. What's left is usually monitoring, vendors or the newest AI systems. |
| Advanced | Your AI security is ahead of most. Keep it there. | You manage AI risk on purpose. The work now is keeping pace as models, vendors and agents change. |

**Under the domain bars:** "Your strongest area: {strongest_domain}. Your priority: {priority_domain}."

**Primary CTA (all tiers):** Book a 30 Minute AI Security Review →
**Line under it:** Our security team will go through your results with you and tell you what to fix first.

**Secondary:** Get the full report → (opens the form)

## 4. Follow-up emails

### 4.1 How the emails are put together

- **Trigger:** the moment someone requests the full report. The PDF goes with it
- **One email per tier** (4 emails). Each has a slot for:
  - a **priority domain block** (9 blocks, 4.3): what to fix first, how we would take it, and what the call gives them
  - **overlay lines** (4.4) when they apply
- **Sender:** a named person from the security team, not "the xLoop team". **[CONFIRM]** who signs
- **Button:** the booking keeps one name everywhere: "30 minute AI Security Review". The line above it names what they get
- **Not sent to:** NEPRA cases if the "phone and email only" rule applies (see 1). Individual learners are not asked in this tool, so no exclusion
- Merge fields: `{first_name}` `{company}` `{overall}` `{tier}` `{strongest_domain}` `{priority_domain}` `{priority_score}` `{low_domains}` (domains under 25%) `{low_count}`
- **Proof rule:** no client names or AI security results (the red team findings still need client permission). The credential line is the proof: certified ISO 27001 and ISO/IEC 42001 Lead Auditors (individual)

### 4.2 The four emails

#### Email 1: Exposed

**Subject:** Your AI security result: the first fixes are the quick ones
**Preview:** Where your AI is most exposed, and what to close first.

> Hi {first_name},
>
> Your full report is attached. Your overall score is {overall}%, which puts {company} in the Exposed tier.
>
> That means AI is in use faster than it is being secured: data can leave through AI tools, and nobody would necessarily see it. It is also the tier where a few changes make the biggest difference, because the first fixes are usually ownership, a short policy and a handful of technical controls.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, our security team will go through your answers with you and you leave with the three controls to put in place first, in order.
>
> **[Book my 30 minute AI Security Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one AI risk that worries you most, and our security team will answer it by email.

#### Email 2: Foundational

**Subject:** Your security basics weren't built for AI
**Preview:** Where AI gets past controls designed for ordinary IT.

> Hi {first_name},
>
> Your full report is attached. Your overall score is {overall}%, in the Foundational tier.
>
> You have controls in place, but most were designed for ordinary IT. AI adds new ways in that those controls don't see: what people paste into prompts, what a model can be talked into, and what vendors do with your data. The step from here is a structured review of those gaps, checked against ISO/IEC 42001.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, our security team will map your answers to the AI specific gaps that matter most, and you leave knowing what an audit should cover first.
>
> **[Book my 30 minute AI Security Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one AI risk that worries you most, and our security team will answer it by email.

#### Email 3: Managed

**Subject:** Your AI security is in good shape. Here are the gaps.
**Preview:** Your two weakest areas, and what closing them takes.

> Hi {first_name},
>
> Your full report is attached. Your overall score is {overall}%, in the Managed tier, and your strongest area is {strongest_domain}.
>
> The core practices are in place. What usually remains at this stage is narrower: monitoring that catches AI specific misuse, vendors that change models without telling you, or new systems such as agents that the existing controls don't yet cover.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, our security team will look at your weakest areas with you, and you leave with a short plan to close them.
>
> **[Book my 30 minute AI Security Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one AI risk that worries you most, and our security team will answer it by email.

#### Email 4: Advanced

**Subject:** Your AI security is ahead. Here's how to keep it there.
**Preview:** Models, vendors and agents change. Your controls need to keep up.

> Hi {first_name},
>
> Your full report is attached. Your overall score is {overall}%, in the Advanced tier.
>
> You manage AI risk on purpose: ownership, monitoring and response are in place. The risk now is drift. Models get retrained, vendors change terms, and new agents arrive with more access than the last system had. Testing against real attacks, and reassessing as things change, keeps you where you are.
>
> {PRIORITY DOMAIN BLOCK}
>
> {OVERLAY LINES}
>
> In 30 minutes, our security team will look at where your next exposure is likely to come from, and you leave with what to test next.
>
> **[Book my 30 minute AI Security Review]**
>
> {sender_name}
> {sender_title}, xLoop Digital
>
> P.S. Not ready for a call? Reply with the one AI risk that worries you most, and our security team will answer it by email.

### 4.3 Priority domain blocks (one drops into the slot)

Each block names the lowest scoring domain. The steps follow the workbook's questions for that domain.

#### Governance & Accountability
> **Your priority: who owns AI security.** You scored {priority_score}% here.
> When AI security belongs to everyone, it belongs to no one. Without an owner, a policy and a plan, every new AI tool is approved by whoever buys it.
>
> How we would take it:
> 1. Name one owner for AI security, separate from general IT security.
> 2. Write a short AI security policy and an incident plan for AI failures and attacks.
> 3. Report AI security risks to leadership on a set schedule, with its own budget line.

#### Data Security for AI
> **Your priority: what data reaches your AI.** You scored {priority_score}% here.
> Sensitive data can reach a model through training, through prompts, or through an API call to a third party provider. Once it's there, it is hard to get back.
>
> How we would take it:
> 1. Identify sensitive and regulated data before it is used to train, fine tune or prompt any model.
> 2. Block or log sensitive data sent to outside AI providers.
> 3. Trace which data each production model was trained on, and apply retention rules to prompts and outputs.

#### Model & Infrastructure Security
> **Your priority: what your models can be made to do.** You scored {priority_score}% here.
> A model that has never been tested against prompt injection or jailbreaks will eventually meet someone who tries.
>
> How we would take it:
> 1. Red team your AI systems for prompt injection and jailbreaks before deployment.
> 2. Validate or filter model outputs before other systems or people act on them.
> 3. Vet third party and open source models, and keep version control with a way to roll back.

#### Access Control & Identity
> **Your priority: who can reach your AI systems.** You scored {priority_score}% here.
> AI systems often run on shared keys and broad access, which makes them easy to misuse and hard to trace.
>
> How we would take it:
> 1. Enforce role based access for who can query, change or retrain each AI system.
> 2. Move API keys and credentials into a secrets manager, and require MFA for AI environments.
> 3. Cut vendor access to the minimum, and review AI access logs for unusual activity.

#### Monitoring & Incident Response
> **Your priority: seeing an AI incident when it happens.** You scored {priority_score}% here.
> Most security monitoring watches servers and networks, not prompts, outputs or what an agent does.
>
> How we would take it:
> 1. Monitor AI systems for misuse, abnormal behavior and attack signs.
> 2. Define escalation steps for AI incidents such as data leaking through a model or a prompt injection attack.
> 3. Log every AI incident, review it, and track detection and response time.

#### Compliance & Regulatory Readiness
> **Your priority: knowing which rules apply to your AI.** You scored {priority_score}% here.
> Data protection laws and sector regulators already cover AI use, even where AI isn't named. The risk is finding out during an audit.
>
> How we would take it:
> 1. List the regulations that apply to each AI system, such as data protection law and your sector regulator.
> 2. Check every AI system against them before it goes live.
> 3. Add AI risks to your formal risk register, and set a process for regulator and data subject requests.
>
> *We'll also look at the compliance concern you described in the assessment.*

#### Third-Party & Supply Chain Risk
> **Your priority: the AI you buy, not just the AI you build.** You scored {priority_score}% here.
> Much of your AI risk sits with vendors: how they handle your data, when they change their models, and what happens if they stop.
>
> How we would take it:
> 1. Keep one list of every AI vendor, model and API in use.
> 2. Assess AI vendors before purchase, and review contracts for data use, retention and security.
> 3. Ask to be told when vendor models change, and plan for a key vendor leaving.

#### Culture & Training
> **Your priority: what your people know about AI risk.** You scored {priority_score}% here.
> Most AI data leaks start with someone pasting the wrong thing into the wrong tool, without knowing it was wrong.
>
> How we would take it:
> 1. Tell every employee what data is safe, and unsafe, to put into AI tools.
> 2. Train engineering, data and product teams on AI specific risks such as prompt injection.
> 3. Brief leadership on AI security, and give staff an easy way to report concerns.

#### Agentic AI & Adversarial Robustness
> **Your priority: what your AI agents are allowed to do.** You scored {priority_score}% here.
> Agents that can send messages, move money or run code turn a bad prompt into a real action.
>
> How we would take it:
> 1. Require human approval or set guardrails before agents take high impact actions.
> 2. Secure retrieval pipelines and vector databases against data leakage and poisoned content.
> 3. Red team your models against adversarial inputs, and cap usage to stop runaway costs.
>
> *We'll also look at the approach to agents you described in the assessment.*

**Every block ends with the credential line:** Our assessments are led by certified ISO 27001 and ISO/IEC 42001 Lead Auditors.

### 4.4 Overlay lines (added after the block, in this order)

- **Several low areas** (2+ domains under 25%): "{low_count} areas scored under 25%: {low_domains}. Your report covers each one; we'd start with {priority_domain}."
- **Strong overall, one weak area** (overall ≥ 51% and priority domain under 40%): "Your overall score is solid, but {priority_domain} is well behind the rest. Weak spots like this are where incidents usually start."
- **Agentic AI low** (Agentic AI under 40%, when it isn't already the priority block): "One more thing: your score on AI agents is low. If agents are live, or about to be, that's worth covering on the same call."

## 5. Questions for the security lead and developers

- [ ] **Scale:** keep the 1 to 4 scale as built (minimum overall score 25%), or rescale so the weakest answers read as 0%?
- [ ] **"How we would take it" steps:** are these the steps you would actually run? Change anything you wouldn't do
- [ ] **What the 30 minute call covers:** each email promises an output ("you leave with…"). Can the team deliver that in 30 minutes from the report alone?
- [ ] **Sender:** who signs the emails?
- [ ] **P.S. reply promise:** who answers replies, and how fast?
- [ ] **NEPRA visitors:** NEPRA contact only, or NEPRA contact plus the booking link?
- [ ] **Data handling:** confirm answers aren't stored unless the report is requested, as the landing page will say
- [ ] **Framework badges:** the workbook maps each question to OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF and ISO/IEC 42001. Saying the questions "reference" these is fine; a "NIST aligned" badge needs approval first (brain C11)

## Internal notes (not for design)

- Booking name matches the AI Security page CTA ("30 Minute AI Security Review")
- The workbook's internal "recommended next step" per tier (Rapid Assessment, Audit, targeted engagement, advisory retainer) shapes each email's middle paragraph; the offer names stay out of the emails until the security team confirms they're sold as named products
- Proof is credential only: no AI security case is publishable yet (B1 needs client permission)

## Next steps

- [ ] Sana: review the emails for tone, then send to the security lead and dev
- [ ] Security lead: answer section 5
- [ ] Dev: build the results page, report form and email logic (4 templates, 9 blocks, 3 overlays) with the tool
- [ ] Decide whether a day 4 nudge follows for people who haven't booked (same open question as the readiness tool)
