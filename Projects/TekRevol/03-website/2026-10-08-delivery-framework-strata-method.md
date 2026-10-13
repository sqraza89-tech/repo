---
date: 2026-10-08
tags: [tekrevol, framework, delivery, methodology, ai-native, positioning, homepage]
---

# TekRevol delivery framework: The Strata Method (proposal)

Sana's ask (2026-10-08): a framework for how TekRevol delivers with AI, uniquely ours, that sets us apart. Concise and specific like BluTech. Built for SEO, AEO, GEO and AI agents. Related: [[2026-10-08-homepage-structure-and-copy]], [[2026-10-08-site-architecture-proposal]] (site structure, separate topic), brand guidelines v7.

**Status:** proposal. Everything about how delivery works today is **[CONFIRM]** with TekRevol delivery before it goes public.

## What competitors have named (VERIFIED, 2026-10-08)

| Competitor | Framework | Shape | What it says |
|---|---|---|---|
| HatchWorks | **GenDD** (Generative-Driven Development), with a manifesto, ebook and a 2026 award | Linear: Decide > Build > Adopt | AI plus deterministic engineering; governance |
| Cheesecake Labs | **AI-Accelerated Delivery** ("an agentic SDLC") | Pairs across the lifecycle: "Agents propose, human prioritizes" … "Agents ship, human gives the go" | AI across the whole lifecycle; capability stays with the client |
| BluTech | No delivery method. Agent architecture for its product: Understand > Orchestrate > Execute | Per-service flows (Ingest > AI Core > Activate) | Concise stage labels |
| Azumo | No named method. "AI augmented developers" | n/a | Speed |
| LeewayHertz | A platform (ZBrain), not a method | n/a | Governance of agents |

**Table stakes now:** "humans and AI agents across the lifecycle". Cheesecake already owns that line. Don't lead with it.

**The gap nobody fills:**
1. **Every framework is a straight line.** None separates *exploring* from *shipping*, and that's exactly where AI products break: AI makes exploring nearly free, but what works in a demo isn't production-ready
2. **No explicit gate.** Nobody names the moment a prototype becomes production work, or what it has to pass
3. **No compounding.** Nobody shows how one build makes the next better
4. **No roots.** The others were invented for the AI wave. TekRevol's way of working is in its 2019 TekRevolution handbooks (structured chaos, Learn > Ideate > Iterate > Incubate > Scale). AI made it more relevant, not new

## The framework

**Name:** The Strata Method
**One-line definition (the quotable sentence for AI engines):**
> The Strata Method is TekRevol's AI-native delivery framework: explore fast with AI, cross the Ship Line only when the work meets production standard, and build in layers that make every next build better.

**Brand line:** Structured chaos, shipped in layers.

### Two modes, one line between them
- **Explore (cyan).** AI does the heavy lifting: research, options, prototypes. Cheap to try, cheap to throw away
- **The Ship Line (orange).** The gate. Nothing becomes production work until it passes the Build Standard checks
- **Ship (orange).** Engineers own every decision. Built layer by layer, each one production-grade before the next goes on top

This uses the existing brand rule word for word: **"cyan explores, orange ships."**

### Five stages (from the 2019 handbook)

| Mode | Stage | AI does | Engineers own | You get (the gate) |
|---|---|---|---|---|
| Explore | **1. Learn** | Reads existing code, data and documents; sums up user and market signals | The problem, constraints and compliance needs | A problem brief and risk map |
| Explore | **2. Ideate** | Generates solution options and clickable prototypes | Choosing the direction and the architecture | An architecture decision and a chosen prototype |
| Explore | **3. Iterate** | Builds variations quickly for testing | Judging what works with real users | A validated prototype |
| | **THE SHIP LINE** | Runs automated checks against the Build Standard | Sign-off | Go / no-go, in writing |
| Ship | **4. Incubate** | Writes and tests code in parallel | Reviewing every change; security and compliance | A production release, layer by layer |
| Ship | **5. Scale** | Monitors performance, cost and model quality | Deciding what improves next | A performance review that feeds the next Learn |

**The loop:** Scale feeds back into Learn. What each build teaches goes into the next one. That's "Better with every layer", made operational.

### Four principles
- **AI moves fast. Engineers own the decisions.**
- **Explore freely. Ship deliberately.**
- **Every layer is production-grade before the next goes on top.**
- **Every build makes the next one better.**

### The Ship Line checks = the Build Standard
The five Strata layers become the checklist at the Ship Line (security and compliance run through all of them):

| Layer | Checked at the Ship Line [CONFIRM] |
|---|---|
| 5. Experience | Accessibility, usability tested |
| 4. Product logic | Code reviewed, automated tests passing, architecture documented |
| 3. AI | Model evaluated, human review where it matters, data kept private |
| 2. Data | Data model, privacy by design, backups |
| 1. Infrastructure | Monitoring, uptime targets, cost controls |

## Why it sets TekRevol apart
- **It names the real problem with AI-built software** (great demos, fragile products) without blaming anyone. It also reframes the prototype story elegantly: *"You've explored. We help you cross the Ship Line."*
- **It's visual and ownable.** Cyan field, orange line, stacked layers. It's already the brand system, so the framework and the identity are the same thing
- **It has accountability built in.** Every gate has a named owner and a written sign-off the client can see. (The 2019 handbook origin stays internal: buyers don't care)
- **It speaks to every buyer:** founders get speed in Explore, approvers get the Ship Line, champions get a named method to take upstairs

## How it shows up
**Homepage:** section 7 ("How we work") becomes:
- Eyebrow: THE STRATA METHOD
- H2: Explore fast. Ship deliberately.
- Lead: AI makes exploring nearly free. Production still takes engineering. Our method keeps the two apart, with one line between them.
- Visual: cyan Explore field (Learn, Ideate, Iterate) > orange Ship Line > Strata layers (Incubate, Scale) > loop arrow back to Learn
- Link: How the Strata Method works

**Site:** one page `/strata-method` (definition first, the stage table, the Ship Line checks, FAQs). Later: a short manifesto PDF for champions, and one blog post per stage.

**For SEO, AEO and GEO:**
- Use the exact same name and definition sentence everywhere: homepage, the method page, llms.txt, About, proposals, LinkedIn
- Schema: `DefinedTerm` for the method name, `HowTo` steps on the method page, `FAQPage`
- Answer pages that link to it: "how to take an AI prototype to production", "what does production-ready mean for AI software", "how to use AI in software delivery safely"
- Third-party mentions drive GEO citations: a Clutch profile update, a LinkedIn series, a podcast episode on the method

## Decisions (Sana, 2026-10-12)
- **Direction approved.** The name **The Strata Method** works
- **2019 handbooks:** fine to build on, but buyers don't care where it came from. Keep the origin out of public copy. Lead with efficiency, uniqueness and value
- **No speed or cost claims** until a measured engagement exists
- **Accountability is needed.** Project managers or the CTO run delivery and need to be answerable to someone, or gates will slip. Every gate gets a named owner and a written sign-off (below)
- **AI tools per stage:** unknown, likely varies by project. Questions for delivery below

## Accountability: who signs each gate [CONFIRM roles with TekRevol]
| Gate | Owner (answerable) | Signs off | Client sees |
|---|---|---|---|
| Learn, Ideate, Iterate | Project manager | Tech lead | The gate document (brief, decision, prototype) |
| **The Ship Line** | Tech lead | **CTO or a named delegate** | A written go / no-go against the Build Standard |
| Incubate (each release) | Project manager | Tech lead and QA | Release notes |
| Scale (review) | Project manager | CTO or delegate | Performance review |

- Public line this enables: **"Every gate has a named owner and a written sign-off you can see."** It reassures buyers who were let down before, and it keeps the team honest because the client is watching
- Internally: one gate log per project, so leadership can see which gates were skipped

## Questions for TekRevol delivery (PMs / CTO)
**How projects run today**
1. Walk me through the last two projects from kickoff to launch. What were the real phases, and what document or sign-off ended each one?
2. Who decides a build is ready for production today? Is it written down?
3. Is there one point of contact from kickoff to launch? Who?
4. Where do projects most often slip or get reworked?

**AI in delivery**
5. Which AI tools does the team use today, and for what: research, prototyping, writing code, code review, testing, documentation, monitoring?
6. Is that standard across projects or each developer's choice? Is there an approved-tools list or policy?
7. Does client code or data go into third-party AI tools? Under what rules (private models, client consent, regulated projects)?
8. Is every AI-written change reviewed by a person before it merges? By whom?
9. For AI features built for clients: how is model quality tested before launch and monitored after?

**Standards and proof**
10. What is checked before go-live today (security, tests, accessibility, backups, monitoring)? Is there a checklist?
11. What gets reused across projects (components, templates, internal agents, checklists)? Where does it live?
12. Is there one recent project where time or cost can be measured with and without AI? That would be the first proof point
13. Which stages and the Ship Line could the team commit to from a set date, and who would own the gate log?

## Name alternatives
| Name | Note |
|---|---|
| **The Strata Method** (recommended) | Ties to the visual motif. Calm, premium. Needs a trademark check: "Strata" is a common word |
| The Ship Line Method | Most concrete. Names the gate |
| Structured Chaos | The brand idea. Bold and memorable; may unsettle a compliance-minded approver |
| The TekRevolution Loop | Strong history; the company name inside it limits reuse in sentences |

## Next steps
- [x] Sana: direction and name approved (2026-10-12)
- [ ] Sana: put the 13 questions to TekRevol PMs / CTO
- [ ] Quick trademark search on "Strata Method" before launch
- [ ] Then: homepage copy v2 (Word) with the Strata Method section, and a draft `/strata-method` page

## Update 2026-10-13: review feedback and v2
External review of v1 (Sana shared it). Accepted points, now in `TekRevol-Strata-Method-v2-Cover-A.docx` / `-Cover-B.docx` (internal master, build script `_build/strata2.js`):
- **Lead with the Ship Line**; Strata = the layered model. Positioning: "The Strata Method by TekRevol. Explore with AI. Ship with engineering. Cross the Ship Line only when it meets production standard."
- **Terms fixed:** stages = the five delivery phases; layers (the Strata) = five quality dimensions checked at the Ship Line
- **"Structured chaos" is internal only** (enterprise buyers may hear "uncontrolled"). Public brand line: "Explore with AI. Ship with engineering."
- **Build Standard is pass/fail** per layer with evidence, owner, Ship Line report, waivers; thresholds set per project tier (Light / Standard / Regulated: my addition so small projects are not buried)
- **AI-native practices** listed (agent registry, evals, prompt/model versioning, model selection, AI observability, human in the loop, private data, compounding assets), all "To confirm"; public copy names only what is in place
- **Competitor claim softened:** "Most AI delivery models are linear…", never "nobody"
- **Proof plan:** 2 to 3 pilots, seven metrics, anonymized case studies; compliance stays "experience with" and tied to projects
- **Trademark:** quick web search 2026-10-13 found no mark for "Strata Method" or "Ship Line" as a method; "Strata" alone is crowded in software. Needs counsel's register search
- Where I pushed back: the reviewer's "document quality" notes (duplicates, numbering, tables) came from the hand-edited v1, not the framework; and six separate layer owners is too heavy for small projects, hence tiers and combined roles

## Next steps
- [ ] Sana: review v2; choose cover A or B
- [ ] CTO: mark each Build Standard criterion and AI-native practice as in place / partial / planned
- [ ] Assign named owners, templates, gate log audit
- [ ] Counsel: trademark search for "Strata Method" and "Ship Line"
