---
date: 2026-10-23
tags: [tekrevol, landing-page, design-brief, ui-ux, figma, chatgpt-ads, healthcare, cro]
cover_label: UI/UX CREATIVE BRIEFS · FOR GPT
cover_title: GPT Design Briefs
cover_sub: HEALTHCARE AI OPS PAGE · FIGMA-EDITABLE
docx_name: TekRevol-Healthcare-AI-Ops-LP-GPT-Design-Briefs
---

# TekRevol healthcare AI ops landing page: UI/UX briefs for GPT

**What this is:** copy-paste briefs that get ChatGPT to design the conversion landing page from [[2026-10-16-healthcare-ai-ops-landing-page-copy]] (copy v1), one section at a time, as **editable Figma layers**: live text, named layers, real shapes, no flat images.
**Goal of the page:** click to lead of **5% or more** on healthcare ChatGPT Ads traffic (see [[2026-10-15-chatgpt-ads-healthcare-landing-page-audit]]).
**Copy:** every brief carries the v1 copy word for word. Lines still waiting on TekRevol are listed at the end, so you can fix them in Figma later.

## How to use this

1. Open a **new ChatGPT chat** (GPT-5 or newer, a thinking model if you have one). Paste the **Setup prompt** first. Wait for "Ready".
2. Paste **Brief 0 (Components)** next, so every section reuses the same buttons, fields and cards.
3. Paste one section brief per message. GPT replies with the **desktop** SVG code. Then type `mobile` to get the mobile version.
4. **Into Figma:** copy the whole code block, click on the Figma canvas, press **Ctrl+V**. It arrives as a frame with named layers and live text.
   - If Figma pastes it as plain text instead: paste the code into Notepad, save as `01-hero-desktop.svg`, and drag the file onto the canvas.
5. **Tidy after import (2 minutes per section):**
   - Rename the frame, for example `01 Hero / Desktop`
   - Select all text layers and set **Auto height** (Text panel, resizing), so content fixes reflow
   - Swap the `LOGO` placeholder for `01-brand-system/logos/v6/tekrevol-logo-v6.svg` (use `tekrevol-logo-v6-white.svg` on dark sections)
   - Swap any `icon/...` group if you want a different icon (any outline icon set at 24 px, 1.5 stroke matches)
   - Optional: select a repeated element (button, input) and press **Ctrl+Alt+K** to make it a component
6. **Build the full page:** stack the desktop frames top to bottom at x = 0 with no gap, and the mobile frames at x = 1600. Put the thank-you page and the components sheet to the right.
7. If GPT's code gets cut off, reply: `Resend the full SVG in one code block, nothing else.`

**If you want auto layout instead of loose layers (optional):** add this line to the Setup prompt: *"Output one HTML file with inline CSS using flexbox instead of SVG."* Then import with the **html.to.design** Figma plugin. You get auto-layout frames that resize when copy changes, but the plugin's free plan has a monthly import limit. The SVG route needs no plugin.

**Fonts:** Funnel Display, Wix Madefor Text and JetBrains Mono are already installed on this PC, so the text shows in brand fonts as soon as it's pasted. On another machine, install them from `01-brand-system/fonts/official/` first, or Figma will show a missing-font warning.

## Page map

| # | Section | Background | Desktop frame | Mobile frame | The one focal point |
|---|---|---|---|---|---|
| 0 | Components and states | White | 1440 × 1400 | (none) | n/a |
| 1 | Hero with form (v2) | Mist + brand image | 1440 × 900 | 390 × 1520 + sticky bar 390 × 88 | Form button (+ image top plate) |
| 2 | Trust strip | Mist | 1440 × 144 | 390 × 280 | none |
| 3 | Where your team's hours go | White | 1440 × 840 | 390 × 1540 | none (quiet section) |
| 4 | What AI handles, what your team keeps | Mist | 1440 × 1200 | 390 × 2480 | Button |
| 5 | Free workflow review (the offer) | White | 1440 × 840 | 390 × 1240 | The written plan graphic |
| 6 | The Strata Method | Deep Charcoal | 1440 × 680 | 390 × 1000 | The Ship Line |
| 7 | Built for HIPAA + one-page summary | White | 1440 × 640 | 390 × 1160 | none (calm, for the approver) |
| 8 | Proof | Mist | 1440 × 1200 | 390 × 2440 | Libido Health numbers |
| 9 | FAQ | White | 1440 × 1160 | 390 × 1800 | Button |
| 10 | Final call to action with form | Deep Charcoal | 1440 × 880 | 390 × 1180 | Form button |
| 11 | Footer | Deep Charcoal | 1440 × 120 | 390 × 200 | none |
| 12 | Thank-you page (separate page) | White | 1440 × 1100 | 390 × 1700 | Booking calendar |

- Heights are starting points. GPT may adjust by up to 10% if the content needs it, but never the widths.
- Desktop page totals about 8,600 px; mobile about 15,000 px. The form is reachable at every point: hero, sticky bar on mobile, buttons in sections 3, 4, 5 and 9, and the final form.
- Above the fold at 1440 × 900: H1, subhead and the **form button** must be visible. At 390 × 844: eyebrow, H1, subhead and the start of the form.

## Setup prompt (paste first)

```
You are a senior UI/UX designer who specializes in conversion landing pages for B2B healthcare buyers. I'll send you one section brief at a time for a paid-traffic landing page. You design each section as SVG code that I paste into Figma and edit there. Follow every rule below in every reply.

OUTPUT
- Reply with SVG code only, inside one code block. Do not generate an image. No PNG, no mockup picture, no explanation before the code.
- Desktop first. When I write "mobile", send the mobile version of the same section.
- After the code block write one line: "Text changed: none", or list any text you had to change and why.

FIGMA-READY SVG RULES
- Root <svg> has xmlns="http://www.w3.org/2000/svg", width and height equal to the frame size I give, and a matching viewBox.
- Wrap every element in <g id="..."> with a readable name. Figma uses the id as the layer name. Name by structure, e.g. id="Hero / Form card / Button". Nest groups by component.
- All text stays live <text>. Never convert text to paths. No <textPath>, no <foreignObject>. One <text> per paragraph, each line as <tspan x="..." dy="...">. Put font-family, font-size, font-weight, fill and letter-spacing as attributes on the <text>.
- Use attributes (fill, stroke, stroke-width, opacity). No <style> block, no CSS classes.
- Shapes: <rect>, <path>, <circle>, <line>, <polygon> only. Solid fills. <linearGradient> only if the brief asks for it.
- No filters, no blur, no drop shadows, no masks, no clipPath, no embedded or base64 images.
- Image areas: a <rect> filled #EEEFEF with a 1px #C9CCCF stroke and a centered label in JetBrains Mono 12px #5E6166 that reads "IMAGE: <what goes here>". Group name "IMAGE / <what>".
- Logo: a 148 x 32 <rect> with no fill, 1px dashed #8A9097 stroke, centered label "LOGO" in JetBrains Mono 12px #8A9097. Group name "Logo". I'll paste the real logo.
- Icons: 24 x 24 outline icons, 1.5px stroke, round caps and joins, no fill, color #1D1E21 unless the brief says otherwise. Keep each icon simple (3 to 6 strokes). Group name "icon/<name>".
- Whole-pixel coordinates. Align to an 8px grid (4px for small gaps).
- Text fitting: you can't measure text, so break lines yourself. Max characters per line = column width / (font size x 0.55). Line step (dy) = font size x line height. Leave 10% free space at the right of every text block. Never let text overlap other elements.

BRAND: TEKREVOL
Colors
- White #FFFFFF, Mist #EEEFEF, Silver #C9CCCF, Border #D9DADB, Steel #8A9097, Muted #5E6166 (secondary text), Graphite #2E3034, Charcoal #1D1E21 (main text), Deep Charcoal #131417 (dark sections), Dark Border #2A2C30, Dark Muted Text #8B8E94.
- Orange #FF4A1C: primary buttons and ONE focal point per section. Never body text.
- Orange Ink #C23A00: small orange text on light backgrounds (eyebrows, links, highlighted numbers).
- Flare #FF8A3D: orange text and accents on dark backgrounds. Also the primary button hover.
- Ice Cyan #3EC5D1: means "AI is doing this". Use for small dots, lines, tags and step markers only. Never text on white, never a button. Rule: cyan explores, orange ships.
- Text on Orange, Flare or Cyan fills is always Charcoal #1D1E21, never white.
Type
- Headlines: "Funnel Display", weight 600. Big numbers: weight 700.
- Body and UI: "Wix Madefor Text", weights 400, 500, 600.
- Eyebrows and labels: "JetBrains Mono", weight 500, UPPERCASE.
- Always write font-family with sans-serif fallbacks, never a serif: font-family="Funnel Display, Arial, sans-serif", font-family="Wix Madefor Text, Arial, sans-serif", font-family="JetBrains Mono, Consolas, monospace". (Your preview doesn't have these fonts, so it shows the fallback. Figma has them.)
- Scale as desktop px / mobile px, line height, letter spacing:
  H1 56 / 34, 1.05, -1.7px / -1px
  H2 40 / 28, 1.1, -0.8px / -0.6px
  H3 28 / 22, 1.2, -0.3px / -0.2px
  H4 20 / 18, 1.35, 0
  Lead 20 / 18, 1.55, 0
  Body 16 / 16, 1.65, 0
  Small 14 / 14, 1.5, 0.1px
  Button 15 / 15, 1.2, 0.15px (weight 600)
  Label 12 / 12, 1.3, 1px (JetBrains Mono, uppercase)
  Big number 48 / 32, 1.1, 0 (Funnel Display 700)
Shape
- Corner radius 2px on buttons, inputs and cards. No pill shapes, no large rounded corners.
- Signature "notch": a 45-degree cut on the TOP-RIGHT corner of key cards and buttons. 8px on buttons and tags, 16px on cards, 32px on large panels. Draw notched shapes as a <path>.
- Borders: 1px #D9DADB on light backgrounds, 1px #2A2C30 on dark.
Background patterns (quiet texture, at most one per section, behind content, never behind body text)
- Layer planes: 3 to 5 thin, evenly offset isometric parallelograms stacked like plates. The top plate may be Orange (it then counts as the section's focal point).
- Iteration lines: many thin parallel lines that start uneven on one side and become straight and aligned on the other.
- Experiment field: a loose grid of small dots and plus signs, a few of them Ice Cyan.
- On light backgrounds draw patterns in Silver #C9CCCF at 50% opacity. On dark, in #2A2C30.
Grid and spacing
- Desktop frame 1440 wide. Content 1200 wide, x = 120 to 1320. 12 columns of 78px with 24px gutters.
- Mobile frame 390 wide. Side margins 20, content 350 wide. 4 columns with 16px gutters.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section padding top and bottom: 96 desktop, 64 mobile.
Shared components (same look everywhere)
- Primary button: Orange fill, Charcoal text, Button style, height 56, 24px side padding, radius 2, 8px notch top-right. Mobile: full content width.
- Secondary button: Charcoal fill, White text, same size and shape.
- Text link: Orange Ink, Wix Madefor Text 600, 16px, followed by " →", 1px underline 4px below the baseline.
- Input: height 52, White fill, 1px #8A9097 border, radius 2. Label above it (Wix Madefor Text 600, 14px, Charcoal), 8px gap. Placeholder Wix Madefor Text 400, 16px, #5E6166, 16px left padding. Optional fields add " (optional)" to the label in Muted 400.
- Dropdown: same as input, plus a chevron-down icon 16px from the right edge.
- Eyebrow: Label style, Orange Ink on light, Flare on dark.
- Card: White fill, 1px Border, radius 2, 16px notch, padding 32 desktop and 24 mobile.

CONVERSION RULES
- The page has one action: the free workflow review. Button labels are exactly what the brief says.
- No top navigation. The logo is not a link. No links leave the page except where the brief says.
- Orange is only for buttons and the section's one focal point. If everything is orange, nothing stands out.
- Use the text exactly as written in the brief: same words, punctuation and capitalization. No em dashes. Don't add copy, statistics, logos, badges, ratings or testimonials that aren't in the brief. Illustration text is allowed only where the brief gives it.
- Accessibility: text contrast at least 4.5:1 (3:1 for 24px and larger), tap targets at least 44px, never use color alone to carry meaning.
- Look: clean, modern, light, premium, engineered. Generous white space, sharp alignment, bold color blocking used sparingly. Not playful, not stock-photo corporate, no blue or purple, no glassmorphism, no 3D blobs.

Reply "Ready" and wait for the first brief.
```

## Brief 0: Components and states

```
BRIEF 0: COMPONENTS SHEET
Frame: Desktop 1440 x 1400, White background. Group name "00 Components". No mobile version needed.
Purpose: one reference sheet of every interactive element and its states, so the sections and the developer use the same parts.

Lay out in labeled rows. Above each row, a label in JetBrains Mono 12px, uppercase, #5E6166, e.g. "PRIMARY BUTTON".

Row 1, PRIMARY BUTTON, label "Get my free workflow review", 5 states side by side:
- Default: Orange fill, Charcoal text
- Hover: Flare #FF8A3D fill, Charcoal text
- Pressed: Orange fill with a 2px Charcoal inside border
- Focus: Default plus a 2px Charcoal ring drawn as a rect stroke 3px outside the button
- Loading: Orange fill, a 16px Charcoal spinner (a 3/4 circle arc) and the text "Sending…"
Row 2, SECONDARY BUTTON, label "Send me the one-page summary": Default (Charcoal fill, White text) and Hover (Graphite #2E3034 fill).
Row 3, TEXT LINK: "Find out which one to fix first →" Default and Hover (Charcoal text, same underline).
Row 4, TEXT INPUT, label "Work email", 4 states:
- Default with placeholder "you@yourorganization.com"
- Focus: 2px Charcoal border, plus a text cursor line after the placeholder
- Filled: value "maria@example.org" in Charcoal 16px
- Error: 2px Orange Ink border, value "maria@", and below it an alert icon (Orange Ink) plus the message "Please add a work email so we can send your plan." in Small, Orange Ink
Row 5, DROPDOWN, label "Organization type": Closed with placeholder "Select one", then Open: a White panel under the field (1px Border, radius 2) listing these options at 44px row height, the second one highlighted with Mist fill:
Home health agency / Home care agency / Behavioral health (IOP or PHP) / Clinic or medical practice / Digital health company / Other
Row 6, OPTIONAL FIELD: label "Phone (optional)", placeholder "Only if you'd like a call instead of email".
Row 7, TAGS: two small tags, height 28, radius 2, 8px notch, JetBrains Mono 12px uppercase Charcoal text:
- "AI DOES": Ice Cyan fill
- "YOUR TEAM KEEPS": White fill, 1px Charcoal border
Row 8, CARD: an empty 384 x 200 Card with the 16px notch, and next to it the same card on Mist background to show the border.
Row 9, ACCORDION ITEM: closed (question "Is it HIPAA compliant?", plus icon right) and open (minus icon, answer below in Body Muted: "We build for HIPAA from the first sprint: encryption, access controls, audit logs and private AI models. We sign a BAA."). 1px Border line under each item.
Row 10, STICKY MOBILE BAR at real size 390 x 88: White fill, 1px Border line on top, primary button "Get my free workflow review" full width (350 x 56) centered.

Keep generous spacing (48px between rows). Align everything to the 12-column grid.
```

## Brief 1: Hero with form (v2)

v1 of this brief gave a flat wireframe: a white page with a bordered box. v2 adds three things that make it feel premium and on-brand. A brand image gives depth, a small product scene shows what AI actually does, and the headline is bigger. **Judge it in Figma, not in ChatGPT's preview.** The preview has no brand fonts, no image and no shadow.

**After pasting into Figma (2 minutes):**
- Drop `01-brand-system/ai-images/2-layers.png` into the `IMAGE / Layer stack` rectangle (Fill > Image > Crop). Move it so the orange top plate shows above and to the right of the form card
- Form card: add Effects > Drop shadow: Y 24, Blur 64, #131417 at 12%. Product scene card: Y 12, Blur 32, 8%
- Swap the LOGO placeholder for `logos/v6/tekrevol-logo-v6.svg`

```
BRIEF 1 (v2): HERO WITH FORM
Frames: Desktop 1440 x 900. Mobile 390 x 1520. Group name "01 Hero".
Job: the visitor clicked a ChatGPT ad about AI for home health and clinic operations. In 5 seconds they must see the same promise, SEE what the AI does in their world, and find a short form with a free, no-risk offer. It must look premium and engineered, like a top product company's launch page, not a wireframe.

DESKTOP LAYOUT
- Background: Mist #EEEFEF, full frame.
- Brand image: a placeholder rect "IMAGE / Layer stack" at x 700, y 0, 740 x 900, label "IMAGE: TekRevol layer stack, orange top plate (2-layers.png)". Over its left edge, a <linearGradient> rect x 700 to 900 going from Mist at 100% opacity to Mist at 0%, so the image fades into the background. This is the only gradient.
- Top bar, y 0 to 88: Logo placeholder at x 120. At the right edge of the content (ending x 1320), a shield-check icon (18px, Charcoal) and Small text Graphite "Built for HIPAA from the first sprint". Not a link. No navigation.
- Left column (x 120 to 740), top at y 168:
  Eyebrow (Orange Ink): "FOR HOME-BASED CARE AND CLINIC TEAMS"
  H1, 64px desktop, Funnel Display 600, line height 1.02, letter-spacing -2px, Charcoal, max 3 lines, width 620: "AI automation for home health and clinic operations"
  24px below, Lead 20px, Graphite, width 560: "Give your coordinators back the hours lost to intake, scheduling, paperwork and claims. We build AI workflows around the systems you already run, built for HIPAA from the first sprint."
- PRODUCT SCENE (replaces the old 3-box strip), 40px under the subhead, x 120, 600 x 220. A White card, radius 2, 16px notch, 1px Border, padding 20. It is an illustration of AI reading a referral, drawn as a simple app UI. All of its text is illustration text:
  Header row: icon/file (Charcoal) + JetBrains Mono 12px Muted "NEW REFERRAL · FAX · 8:42 AM". Right side: an Ice Cyan tag (height 24, Charcoal text, JetBrains Mono 11px) "READ BY AI" with a small sparkle icon.
  1px Border divider.
  Three field pairs in a row (each 176 wide): small Muted label above, Wix Madefor Text 600 15px Charcoal value, and a 14px Ice Cyan check circle before the value:
    "Patient" / "Patient A."
    "Payer" / "Medicare Advantage"
    "Order" / "Skilled nursing, 2x a week"
  Below, a flag row: a 2px Orange Ink left bar, alert icon in Orange Ink, Small text Charcoal "Missing: signed physician order".
  Footer row: Small Muted "Coordinator decides" on the left. On the right two SMALL illustration buttons (height 32, radius 2, Wix 600 13px): "Request order" (White, 1px Charcoal border) and "Accept patient" (Charcoal fill, White text). Keep them small and dark so nobody mistakes them for the page's real button.
- FORM CARD (x 860 to 1320, 460 wide), top at y 168, White, 16px notch, padding 32. Behind it, NO offset plates (the image does that job now).
  Form heading (Funnel Display 600, 24px): "Get a free workflow review"
  Fields, 16px apart:
    Row 1, two half-width fields: "Full name" (placeholder "Your name") and "Phone (optional)" (placeholder "Only if you'd like a call")
    Row 2: "Work email" (placeholder "you@yourorganization.com")
    Row 3: Dropdown "Organization type" (placeholder "Select one")
    Row 4: Dropdown "Which work costs your team the most time? (optional)" (placeholder "Select one"). Keep "(optional)" on the same line, in Muted 400.
  Primary button, full card width, height 56: "Get my free workflow review" with a small arrow icon after the text.
  12px below, Small Graphite: "30 minutes with a senior engineer who has built healthcare software. You leave with a written plan for the first 3 workflows to automate. No commitment."
  16px below, 1px Border divider, then a row: lock icon + 12px Muted "We use your details only to set up your review. No newsletters unless you ask."
  The button must sit above y 720 so it shows on a 1440 x 900 screen.

MOBILE (390 wide, content 350)
- Background Mist. No brand image on mobile.
- Top bar 64 tall: Logo at x 20.
- Eyebrow, H1 (36px, line height 1.05, max 4 lines), Lead 17px.
- 24px gap, the form card full content width (padding 24). Mobile field order, all full width: Full name, Work email, Organization type, Which work costs your team the most time? (optional), Phone (optional).
- 32px below the form: the product scene, full width. On mobile, stack the three field pairs vertically and put the two small illustration buttons on their own row.
- Separately, to the right of the mobile frame, the sticky bar group "Sticky bar (mobile)" 390 x 88: White, 1px Border top line, primary button "Get my free workflow review" 350 x 56, with the Label "SHOWS AFTER THE HERO SCROLLS AWAY" above it.

QUALITY BAR
- Big, confident headline with lots of air around it. Strong left edge: eyebrow, H1, subhead and product scene all start at x 120.
- Only two orange things on screen: the image's top plate and the form button.
- No stock photos of doctors, no dashboard screenshots, no second page-level button, no "Learn more".
```

**Hero variants (do these in Figma, not in GPT):** duplicate the finished hero frame four times and change only the H1, subhead and the preselected Organization type. One frame per `?for=` value.

| Frame name | H1 | Subhead | Dropdown shows |
|---|---|---|---|
| `01 Hero / home-health` | AI automation for home health agencies | Spend less time chasing referrals, authorizations and denials. We build AI workflows around your EHR, built for HIPAA from the first sprint. | Home health agency |
| `01 Hero / home-care` | AI automation for home care agencies | Fill call-outs without a morning on the phone, and cut the back-office work that keeps coordinators late. Built for HIPAA from the first sprint. | Home care agency |
| `01 Hero / behavioral-health` | AI automation for IOP and PHP admissions | Reply to every inquiry while the person is still deciding, day or night. Verify benefits sooner and book the assessment before they call someone else. | Behavioral health (IOP or PHP) |
| `01 Hero / clinic` | AI automation for clinic and revenue cycle teams | Prior authorizations, claim follow-up and patient messages, prepared by AI and checked by your team. Built for HIPAA from the first sprint. | Clinic or medical practice |

## Brief 2: Trust strip

```
BRIEF 2: TRUST STRIP
Frames: Desktop 1440 x 144. Mobile 390 x 280. Group name "02 Trust strip".
Job: quick credibility right under the hero, without pulling attention from the form. Calm, small, factual.

DESKTOP
- Background Mist #EEEFEF. Content row vertically centered.
- Four facts in a row across columns 1 to 9, separated by 1px Silver vertical dividers 40px tall. Each fact: a bold part (Funnel Display 600, 24px, Charcoal) above a regular part (Small, Muted):
  1. "4.8/5" above "on Clutch"
  2. "800+" above "products shipped"
  3. "10 years" above "building software"
  4. "HIPAA, SOC 2 and PCI DSS" above "Experience with" (put "Experience with" ABOVE the bold line for this one, as a Label in Muted)
- Columns 10 to 12: two award logo placeholders side by side, each 120 x 48: "IMAGE: Clutch Top 1000 badge" and "IMAGE: Inc. 5000 badge". Grayscale look (the placeholder style is fine).

MOBILE
- Background Mist. Facts in a 2 x 2 grid (each cell 167 wide), then the two badge placeholders centered below, each 120 x 48, 16px apart.

DON'T: no other logos, no client logos, no star graphics, no extra awards.
```

## Brief 3: Where your team's hours go

```
BRIEF 3: WHERE YOUR TEAM'S HOURS GO
Frames: Desktop 1440 x 840. Mobile 390 x 1540. Group name "03 Pain".
Job: the operator recognizes their own day. Short, concrete, empathetic. This is a quiet section with no orange block.

DESKTOP
- Background White.
- H2 (columns 1 to 8): "Where your team's hours go"
- Intro (Lead, Graphite, max width 720), 16px under: "You don't need another system. You need fewer tasks that depend on someone remembering to do them."
- 48px below: six cards in a 3 x 2 grid, each 384 x 176, 24px gaps. Card style: Mist #EEEFEF fill, no border, radius 2, 16px notch, padding 32. Each card: a 24px icon (Charcoal) at top, 16px gap, then the sentence in Body (16px, Charcoal, Wix Madefor Text 500):
  1. icon/inbox: "A referral waits in the fax queue while the referral source calls another agency."
  2. icon/phone: "A coordinator spends the morning on the phone to cover one call-out."
  3. icon/moon: "Clinicians finish notes at night, and billing waits on them."
  4. icon/calendar-x: "An authorization runs out, and nobody notices until the claim comes back."
  5. icon/layers: "Denials get worked one at a time, when someone has a free hour."
  6. icon/clock: "An inquiry arrives after 5 pm and goes cold by morning."
- 40px below the grid: a line in H4 (Funnel Display 600, 20px, Charcoal), with a small 8px Ice Cyan square before it: "Each of these is a workflow. Each one can be automated, with your team still making the call."
- 16px below: Text link "Find out which one to fix first →" (it scrolls to the hero form).
- Optional texture: the "Iteration lines" pattern, very faint, only in the empty space at the top right.

MOBILE
- H2, intro, then the six cards stacked full width (350 wide, padding 24, height to fit, 12px gaps). Then the closing line and the link.

DON'T: no statistics, no sad stock photos, no red warning colors. The tone is "we understand", not "you're failing".
```

## Brief 4: What AI handles, what your team keeps

```
BRIEF 4: WHAT AI HANDLES. WHAT YOUR TEAM KEEPS.
Frames: Desktop 1440 x 1200. Mobile 390 x 2480. Group name "04 Workflows".
Job: show exactly what gets automated and prove that people stay in charge. Buyers are skeptical of "AI-powered" claims. The split between AI and people is the whole message, so make it visible at a glance with the cyan (AI) versus charcoal (your team) contrast.

DESKTOP
- Background Mist #EEEFEF.
- H2: "What AI handles. What your team keeps."
- Intro (Lead, Graphite), 16px under: "We build each workflow around the EHR, scheduling and billing systems you already use. No system switch."
- 48px below: a table built from rows (not a grid of lines). Column header row (Label style, Muted), aligned to: "WORKFLOW" (x 120, width 282), "WHAT AI DOES" (x 426, width 534) with a small Ice Cyan dot before it, "WHAT YOUR TEAM KEEPS" (x 984, width 336) with a small Charcoal dot before it.
- Six rows. Each row is a White card 1200 wide, radius 2, 1px Border, 8px gap between rows, padding 24 top and bottom. Inside: workflow name in H4 (Funnel Display 600, 20px). AI column in Body Charcoal with a 2px Ice Cyan vertical bar on its left edge. Team column in Body Charcoal, Wix Madefor Text 600, with a 2px Charcoal vertical bar on its left edge.
  1. Intake and referrals | Reads referrals from fax, email and portals, enters patient, payer and order details into your EHR, and flags what's missing | Accepting or declining the patient
  2. Eligibility and authorizations | Checks coverage, prepares authorization requests, and tracks expiry dates and visit counts | Submitting, and handling anything unusual
  3. Scheduling and call-outs | Finds caregivers who match the visit by skills, distance and hours, and texts them the open shift | Approving the match
  4. Visit notes and documentation | Drafts notes from what the clinician records and checks them for missing items before billing | Reviewing and signing
  5. Claims and denials | Checks claims before they go out, sorts denials by reason and drafts appeal letters | Deciding what to appeal
  6. Admissions and patient messages | Replies to inquiries day and night, collects insurance details, books assessments and sends reminders | Clinical screening
- 40px below: line in H4, Charcoal: "AI does the repetitive work. People make every decision that affects care or billing."
- 32px below: Primary button "Get my free workflow review" (the section's focal point).

MOBILE
- Each workflow becomes one stacked card (350 wide, padding 24, 12px gaps):
  workflow name (H4) / tag "AI DOES" (Ice Cyan tag) / AI text / 1px Border divider / tag "YOUR TEAM KEEPS" (white tag, Charcoal border) / team text in 600 weight.
- Closing line, then the primary button full width.

DON'T: no robot icons, no brain icons, no "AI magic" sparkle overload (one small sparkle mark is fine).
```

## Brief 5: The free workflow review

```
BRIEF 5: WHAT YOU GET FROM THE FREE WORKFLOW REVIEW
Frames: Desktop 1440 x 840. Mobile 390 x 1240. Group name "05 Offer".
Job: make the free offer feel concrete and worth the 30 minutes. The visitor must picture the written plan they walk away with. Remove risk.

DESKTOP
- Background White.
- Left (columns 1 to 7):
  H2: "What you get from the free workflow review"
  Intro (Lead, Graphite): "One conversation, one written plan. It's yours to keep, with no commitment."
  48px below, a vertical 3-step timeline. A 2px Silver line joins three 32px step markers (squares, radius 2): markers 1 and 2 White with a Charcoal border, marker 3 Orange. Next to each marker: step title in H4, body in Body Graphite, 32px between steps.
  1. "Before the call" / "Tell us which work costs your team the most time. It takes two minutes in the form above."
  2. "On the call (30 minutes)" / "Walk a senior engineer through how that work runs today: who touches it, which systems it lives in, where it stalls."
  3. "After the call" / "Within 2 business days, a written plan: the 3 workflows to automate first, what each one would take, the HIPAA points to plan for, and a rough cost range."
  48px below the steps: Primary button "Book my free workflow review".
- Right (columns 8 to 12): the focal point, a vector illustration of the written plan. A White document card about 440 x 540, 1px Border, 32px notch top-right, rotated 0 degrees (keep it straight). Behind it, one Mist plate offset 16px down and right. Inside the document, illustration text only:
  Label "YOUR WORKFLOW PLAN" in Orange Ink, then a title placeholder bar (Charcoal, 60% width, 16px tall), then three numbered rows "01", "02", "03" in JetBrains Mono, each followed by two gray text bars (Silver, 8px tall), the 01 row having a small Orange marker. Then a small row with a shield icon and a gray bar (the HIPAA points), and a row with a "$" icon and a gray bar (the cost range). No real sentences inside the document.

MOBILE
- H2, intro, then the document illustration scaled to 300 x 360 centered, then the timeline, then the button full width.

DON'T: no calendar stock photo, no headshots, no "limited spots" urgency, no countdowns.
```

## Brief 6: The Strata Method

```
BRIEF 6: THE STRATA METHOD (HOW WE BUILD)
Frames: Desktop 1440 x 680. Mobile 390 x 1000. Group name "06 Strata".
Job: show a disciplined way of working, so a cautious healthcare buyer trusts that AI experiments never touch patient data before a hard check. The visual idea: cyan exploration on the left, a firm orange "Ship Line", orange shipping on the right.

DESKTOP
- Background Deep Charcoal #131417. All text White unless stated. Texture: the "Iteration lines" pattern in #2A2C30 across the full width behind the step track, tangled on the left and straight on the right.
- Top: left (columns 1 to 6): Eyebrow in Flare "THE STRATA METHOD", then H2 White: "Explore with AI. Ship with engineering."
  Right (columns 7 to 12), aligned to the H2 top: Body text in #C9CCCF: "Healthcare can't run on a demo. We try ideas quickly with AI, then every workflow crosses the Ship Line before it touches patient data. The Ship Line is a written, pass-or-fail check of security, data handling, AI accuracy and the experience for your staff, signed by our CTO. You see the report."
- 64px below: a horizontal track across the full content width. Steps 1 and 2 sit on an Ice Cyan 2px line. Between step 2 and step 3, a vertical Orange bar 4px wide and 72px tall with the Label "SHIP LINE" in Flare above it. After it, the line continues in Orange 2px to step 3. This Ship Line is the section's focal point.
- Under each step marker: number in JetBrains Mono ("01", "02", "03"; Ice Cyan for 01 and 02, Flare for 03), title in H3 White, body in Body #C9CCCF (max width 340):
  01 "Map" / "We pick one workflow and measure how it runs today, so we know what "better" means before we build."
  02 "Prove" / "A working version, tested on sample or de-identified data, with your team using it."
  03 "Ship" / "It crosses the Ship Line, goes live with monitoring, and we track the hours it saves."

MOBILE
- Eyebrow, H2, body. Then the track turns vertical: a line down the left edge (x 28), cyan through 01 and 02, then a horizontal Orange Ship Line bar across the content with the "SHIP LINE" label, then orange down to 03. Step text to the right of the line.

DON'T: no gears, no rocket, no circuit-board clip art.
```

## Brief 7: Built for HIPAA, plus the one-page summary

```
BRIEF 7: BUILT FOR HIPAA FROM THE FIRST SPRINT
Frames: Desktop 1440 x 640. Mobile 390 x 1160. Group name "07 Compliance".
Job: reassure the person who approves the budget and will never be on the call. Calm, document-like, plain. Also offer a lighter second action for the champion who can't book a call alone: a one-page summary they can forward to their leadership.

DESKTOP
- Background White.
- Left (columns 1 to 7):
  H2: "Built for HIPAA from the first sprint"
  Intro (Lead, Graphite): "Compliance isn't a review at the end. It's how the work starts."
  40px below: six items in two columns of three (each column 333 wide, 24px row gap). Each item: a 24px shield-check icon in Charcoal, then Body text:
  "Encryption for data at rest and in transit"
  "Least-privilege access and audit logs on every workflow"
  "A secure software development lifecycle with code and dependency scans"
  "Private AI models, with personal data redacted before it reaches the model"
  "We sign a Business Associate Agreement"
  "Experience with HIPAA, SOC 2 and PCI DSS requirements"
- Right (columns 8 to 12): a panel with Mist #EEEFEF fill, 32px notch, padding 40. Inside:
  small icon/file-text at top
  Heading in H3: "Need to bring this to your leadership?"
  Body Graphite: "Get a one-page summary of how we work, what we automate and how we handle patient data. Built to forward."
  Input "Work email" (placeholder "you@yourorganization.com")
  SECONDARY button (Charcoal fill, White text), full panel width: "Send me the one-page summary"
  This button must NOT be orange: the orange button is reserved for the main offer.

MOBILE
- H2, intro, the six items in one column, then the panel full width (padding 24).

DON'T: no padlock hero graphics, no fake compliance badges or seals, no "HIPAA certified" wording (there's no such certification).
```

## Brief 8: Proof

```
BRIEF 8: HEALTHCARE SOFTWARE WE'VE SHIPPED
Frames: Desktop 1440 x 1200. Mobile 390 x 2440. Group name "08 Proof".
Job: prove TekRevol has shipped real healthcare software. Lead with the strongest case and its numbers. Every card opens the case study in a new tab, so the visitor doesn't lose the form.

DESKTOP
- Background Mist #EEEFEF.
- H2: "Healthcare software we've shipped"
- Intro (Lead, Graphite): "Scheduling, home visits, patient communication and AI, running in production for care providers."
- 48px below: FEATURE CARD, full 1200 wide, about 440 tall, White, 1px Border, 32px notch.
  Left half: "IMAGE: Libido Health app screens (from the case study)" placeholder filling the left 576 x 440.
  Right half, padding 48:
  Label "LIBIDO HEALTH" in Orange Ink
  Body Graphite: "A HIPAA-compliant platform for therapy and coaching sessions: scheduling, real-time video visits and an AI coaching assistant that checks in with members daily."
  Two big numbers side by side (the focal point), Big number style, Orange Ink:
    "80%" with Small Muted text below "fewer session no-shows"
    "20,000+" with Small Muted text below "active users in the first three months"
  The quote in Funnel Display 500, 20px, Charcoal (not italic), with a 2px Orange bar on its left: "TekRevol transformed our platform into a comprehensive and secure space where our members feel empowered."
  Below it, Small Muted: "Libido Health Inc."
  Text link: "Read the case study ↗"
- 24px below: THREE CARDS in a row, each 384 wide, White, 1px Border, 16px notch. Each: image placeholder 384 x 180 at the top, then padding 24: name in H4, body in Body Graphite, then Text link "Read the case study ↗".
  1. "IMAGE: Nurse Practitioners app screens" / "Nurse Practitioners" / "In-home care on demand. Patients book nurse visits by the hour, consult by video, and track every request. Nurse pay is calculated in the same platform."
  2. "IMAGE: Kinekt dashboard" / "Kinekt" / "AI patient feedback for UK care providers. GPT-4 reads feedback from every channel, scores sentiment, sorts it automatically and drafts replies."
  3. "IMAGE: Rehkempers pricing tool" / "Rehkempers" with a small tag above the name, White fill with Charcoal border, text "AUTOMATION OUTSIDE HEALTHCARE" / "Replaced a 50-year manual pricing process across 4 manufacturing plants. The same approach applies to intake and claims work."

MOBILE
- H2, intro, feature card stacked (image 350 x 220 on top, then text, numbers side by side at 32px, quote, link), then the three cards stacked full width with 16px gaps.

DON'T: no numbers on the three smaller cards. No star ratings, no extra testimonials, no client logos beyond the image placeholders.
```

## Brief 9: FAQ

```
BRIEF 9: FAQ
Frames: Desktop 1440 x 1160. Mobile 390 x 1800. Group name "09 FAQ".
Job: answer the objections that stop a form submit: cost, EHR fit, HIPAA, AI making decisions, jobs, timing, IT. Answer first, short.
Note for the developer (don't draw this note): build it as an accordion with the first item open. In this design, show ALL answers expanded so the copy lives in Figma.

DESKTOP
- Background White.
- Left (columns 1 to 4), stays at the top: H2 "Common questions", then 24px below a Body Graphite line "Still deciding? The review is free and there's no commitment.", then 24px below the Primary button "Get my free workflow review".
- Right (columns 6 to 12): seven open accordion items. Each: question in H4 Charcoal with a minus icon at the right edge, 8px gap, answer in Body Graphite, 24px padding top and bottom, 1px Border line below.
  1. "What does it cost?" / "It depends on the workflow and the systems involved. Your review ends with a rough cost range in writing, so you can budget before you commit to anything."
  2. "Does it work with our EHR?" / "Usually, yes. We connect through your EHR's APIs or standard formats like HL7 and FHIR where they're available. If your system has no way in, the review will tell you what's possible."
  3. "Is it HIPAA compliant?" / "We build for HIPAA from the first sprint: encryption, access controls, audit logs and private AI models. We sign a BAA."
  4. "Will AI make decisions about patients?" / "No. AI prepares, sorts and flags. Clinicians and coordinators approve anything that affects care or billing."
  5. "Will this replace our staff?" / "It replaces tasks, not people. The aim is fewer late nights for coordinators and clinicians, and more of their time on patients."
  6. "How soon can something go live?" / "We agree on the first workflow and its scope before any build starts. Your written plan includes a timeline for it."
  7. "Do we need an IT team?" / "No. We work with your operations lead and handle the technical side. If you have IT, we work with them too."

MOBILE
- H2, the line, then the seven items full width, then the primary button full width at the end (not at the top).
```

## Brief 10: Final call to action

```
BRIEF 10: FINAL CALL TO ACTION WITH FORM
Frames: Desktop 1440 x 880. Mobile 390 x 1180. Group name "10 Final CTA".
Job: the last, strongest push. Same form as the hero, on a dark background so it feels like a clear ending.

DESKTOP
- Background Deep Charcoal #131417.
- Left (columns 1 to 6), vertically centered with the card:
  H2 at H1 size (56px, Funnel Display 600, White, max 3 lines): "Find the 3 workflows costing your team the most time"
  Lead in #C9CCCF, 24px below: "30 minutes with a senior engineer. A written plan you keep. No commitment."
  Texture under the text: the "Layer planes" pattern, 5 plates in #2A2C30 with the TOP plate in Orange, placed in the lower-left corner, about 360 x 220. Keep it clear of the text.
- Right (columns 8 to 12): the same form card as the hero (White card, 16px notch, padding 32), with the same heading "Get a free workflow review", the same fields and order, the button "Get my free workflow review", the same line under the button and the same privacy line. No plates behind it on this dark version.

MOBILE
- H2 at 34px, lead, then the form card full width, fields stacked in the mobile order: Full name, Work email, Organization type, Which work costs your team the most time? (optional), Phone (optional). Pattern hidden on mobile.
```

## Brief 11: Footer

```
BRIEF 11: FOOTER
Frames: Desktop 1440 x 120. Mobile 390 x 200. Group name "11 Footer".
Job: legal minimum only. No links that lead visitors away from the page.

DESKTOP
- Background Deep Charcoal #131417, a 1px #2A2C30 line at the top.
- Left: Logo placeholder (white dashed version: stroke #8B8E94).
- Center: Small text in #8B8E94: "© 2026 TekRevol"
- Right: three Small text items in #C9CCCF, 24px apart: "Privacy policy", "Terms", "PHONE NUMBER" (I'll fill in the number).

MOBILE
- Stacked and left aligned: Logo, the three items on one line, then the © line.
```

## Brief 12: Thank-you page

```
BRIEF 12: THANK-YOU PAGE (separate page after the form)
Frames: Desktop 1440 x 1100. Mobile 390 x 1700. Group name "12 Thank you".
Job: turn the form submit into a booked call while interest is highest. The calendar is the focal point. Nothing else competes with it.

DESKTOP
- Background White. Top bar 80 tall with the Logo placeholder only.
- Centered column (columns 2 to 11):
  A 48px Charcoal square (radius 2) with a White check icon.
  H1: "Thanks. Pick a time for your review."
  Lead Graphite: "Choose a 30-minute slot below. You'll get a calendar invite and a short reminder the day before."
- 48px below, two columns:
  Left (columns 1 to 8): "IMAGE: Booking calendar embed" placeholder 792 x 600, 1px Border, 16px notch.
  Right (columns 9 to 12): a Mist panel, padding 32, 16px notch:
    Label "WHAT TO HAVE READY"
    three items with small check icons, Body Graphite:
    "The workflow you picked, and a rough idea of how many people work on it each week"
    "The names of the systems it touches (EHR, scheduling, billing)"
    "Any numbers you already track, like referrals per week or denial rate"
    then a 1px Border line, then Small Graphite: "Prefer a call? We'll reach out within 1 business hour."

MOBILE
- Logo, check square, H1, lead, calendar placeholder 350 x 640, then the "What to have ready" panel full width.

DON'T: no navigation, no blog links, no social links. The visitor's only next step is booking.
```

## Text in the designs that still needs TekRevol's yes

These lines come from copy v1's `CONFIRM` list. They're in the designs so the layout is right; fix or delete them in Figma once TekRevol answers. Nothing goes live with an unconfirmed line.

| Where | Line in the design | Waiting on |
|---|---|---|
| Hero and final form, under the button | "30 minutes with a senior engineer who has built healthcare software" | Who joins the call `CONFIRM` |
| Offer, step 2 | "Walk a senior engineer through…" | Same as above `CONFIRM` |
| Offer, step 3 and FAQ "What does it cost?" | "Within 2 business days", "a rough cost range" | Delivery can do this every time `CONFIRM` |
| Compliance list and FAQ "Is it HIPAA compliant?" | "We sign a Business Associate Agreement" / "We sign a BAA." | Does TekRevol sign BAAs `CONFIRM` |
| FAQ "Does it work with our EHR?" | "HL7 and FHIR" | Integration experience we can stand behind `CONFIRM` |
| Strata step 02 | "tested on sample or de-identified data" | Delivery practice `CONFIRM` |
| Proof, Nurse Practitioners and Kinekt cards | No numbers shown | Add "40% shorter wait times" / one Kinekt number only if confirmed `CONFIRM` |
| Proof, quote | "Libido Health Inc." | A named person and title, if allowed `CONFIRM` |
| Thank-you page | Calendar embed, "within 1 business hour" | Booking tool, sales response time `CONFIRM` |
| Footer | "PHONE NUMBER" | The number to show |

**New text written for the design (not in copy v1, approve or change):**
- Hero product scene: "NEW REFERRAL · FAX · 8:42 AM", "READ BY AI", "Patient A.", "Medicare Advantage", "Skilled nursing, 2x a week", "Missing: signed physician order", "Coordinator decides", "Request order", "Accept patient"
- Hero top bar: "Built for HIPAA from the first sprint" (from copy v1, placed in the bar)
- FAQ heading "Common questions" and the line "Still deciding? The review is free and there's no commitment."
- Tags "AI DOES" / "YOUR TEAM KEEPS", the Rehkempers tag "AUTOMATION OUTSIDE HEALTHCARE", the plan graphic label "YOUR WORKFLOW PLAN"
- Hero form: phone placeholder shortened to "Only if you'd like a call" to fit the half-width field (full text kept on mobile and in the components sheet)

## Quick check for each section before you accept it

- Text is selectable and editable in Figma (not outlines), in Funnel Display / Wix Madefor Text
- Layers have names, not "Group 47"
- Frame is exactly 1440 or 390 wide
- Only one orange focal point, plus buttons
- Button labels match exactly: "Get my free workflow review", "Book my free workflow review", "Send me the one-page summary"
- No added stats, badges, logos or testimonials
- Mobile: nothing smaller than 14px except labels, buttons at least 44px tall

## Next steps

- [ ] Run the Setup prompt and Brief 0 in a new ChatGPT chat; check the components sheet imports cleanly into Figma before doing the sections
- [ ] Generate sections 1 to 12, desktop then mobile, and assemble the page in Figma
- [ ] Make the four hero variants in Figma
- [ ] Send the `CONFIRM` list to TekRevol (still open from copy v1)
- [ ] Share the Figma file with the dev team with the tracking spec from copy v1
