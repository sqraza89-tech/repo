---
name: blog-writer
description: Write new blog posts or refresh existing ones for xLoop, Tekrevol or any brand with a profile in Reference/brands/. Built for ICP pain points, SEO + AEO (answer engines like ChatGPT, Perplexity, Google AI Overviews), funnel stage (TOFU/MOFU/BOFU) and conversion. Use this whenever the user asks for a blog, article, insight piece, pillar/cluster post, or a content brief for one — and also when they share a live blog URL and ask to update, refresh, re-optimize, fix, rewrite or "bring up to date" an existing post, or ask which old blogs need refreshing. Use it even if they only say "next blog from the calendar".
---

# Blog writer

One skill, two modes, because a new post and a refreshed post have to pass the same bar: right
ICP, right funnel stage, answer-engine-ready structure, approved claims only, a CTA that exists.

| Mode | Trigger | Read next |
|---|---|---|
| **New** | "write a blog on…", "next blog from the plan", a topic or brief | this file |
| **Refresh** | a live URL + "update / refresh / re-optimize", or "which blogs need a refresh" | this file, then `references/refresh-mode.md` |

## Step 1 — Load the brand

1. Work out the brand (xLoop, Tekrevol, other). If it isn't clear, ask.
2. Read `Reference/brands/<brand>.md`. It routes you to the ICPs, voice, claims, proof and content plan.
3. Read the files it points to that matter for this piece. For xLoop that is at minimum:
   `approved_claims.md`, `prohibited_claims.md`, `proof_library.md`, `buyer_personas.md`, `brand_voice.md`.
4. If the profile has `TODO` in a field you need (ICP, voice, claims, CTA), stop and ask for it.
   Making up an ICP or a claim for a brand is the most expensive mistake this skill can make,
   because it gets published under the brand's name.

## Step 2 — Brief (confirm before drafting)

If the piece comes from the blog plan, pull the row (title, ICP, stage, keyword, CTA) from the plan
file. Then write a short brief and show it to the user before drafting. Drafting 1,500 words on the
wrong angle wastes the most time, so this checkpoint is worth it.

```
Brand · Working title · ICP (ID + role) · Funnel stage · Primary question the buyer asks
Primary keyword + 3–5 related questions (People Also Ask / AI prompts)
Gap angle — what existing top results and AI answers miss, and what we can say that they can't
Proof we're allowed to use (IDs from proof library)
Conversion path — CTA + the service page it routes to (must be live)
Internal links (3–5 existing pages) · Target length
```

For the gap angle, search the primary question (WebSearch) and skim the top 3–5 results. Note what
they all say (don't repeat it) and what they skip (lead with it). That is how a post stops being
"another voice in the noise".

## Step 3 — Draft

Match the funnel stage. The stage decides the job of the piece, and the job decides the CTA:

| Stage | Buyer is… | The post should… | CTA |
|---|---|---|---|
| TOFU | naming the problem | explain the problem in their words, show it's solvable | related MOFU post, newsletter, follow |
| MOFU | comparing approaches | give a decision framework, trade-offs, criteria, what good looks like | diagnostic/assessment, guide, service page |
| BOFU | choosing a vendor | show how we do it, scope, timeline, proof, what the first 2 weeks look like | contact / scoping call / consultation |

Structure every post for both humans and answer engines — full checklist in
`references/aeo-seo-checklist.md`. The essentials:

- **H1:** primary keyword first, plain words the ICP uses. No wordplay.
- **Answer-first opening:** the first 40–60 words answer the title question directly. This is the
  passage an AI engine quotes.
- **Question-shaped H2s** that mirror real queries, each opened with a 1–2 sentence direct answer,
  then detail.
- **Extractable specifics:** numbers, named standards, steps, tables, comparison lists. "Comprehensive
  solutions" can't be cited; "Regulations 4–11 of the 2022 regulations" can.
- **One entity, one spelling:** brand name, service names and facts identical everywhere.
- **FAQ block** (3–6 Qs) at the end, written as real questions.
- **Mid-post and end CTA**, both pointing to the conversion path from the brief.
- **3–5 internal links** with descriptive anchor text, including the service page.

Voice: follow the brand profile. For xLoop, no fear-selling, no superlatives, no invented statistics,
US spelling.

## Step 4 — Self-check before handing over

Run through `references/qa-checklist.md`. At minimum:
- every claim and number traces to the approved-claims file, the proof library, or a cited external source
- no never-name clients; CTA target is live
- spelling standard grep (xLoop: `modernis|programme|organis|licence|anonymis|behaviour|catalogue|prioritis`)
- the opening paragraph answers the title on its own

List anything you couldn't verify under **Open questions** rather than softening it silently.

## Step 5 — Output

Save to `Notes/YYYY-MM-DD-<brand>-blog-<slug>.md` using `references/output-template.md`
(frontmatter per vault rules, SEO pack, the post, FAQ schema JSON-LD, promotion snippets, open questions).
Produce a `.docx` only if the user asks, or it is going straight to design/dev.

If the post is from the content calendar, also give a 2–3 line LinkedIn teaser the linkedin-posts
skill can pick up, so the blog and the post launch together.

## Things that go wrong

- Writing to a keyword instead of to a buyer's question → reads like SEO filler, and AI engines skip it.
- TOFU post with a "book a call" CTA → nobody at that stage clicks it; use the stage table.
- Pointing a CTA at a page or tool that isn't live yet. Check the live site when unsure.
- Reusing a proof point because it appeared in an old deck. Old decks aren't approved copy.
