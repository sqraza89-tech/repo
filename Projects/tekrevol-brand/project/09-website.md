# 9. Applying it to the website

The website rebrand is the first and largest use of this system. The goal of the site: show that TekRevol is an AI company with deep engineering underneath, at first glance.

## Homepage structure

| Section | Theme | Pattern |
|---|---|---|
| Hero | carbon + Molten gradient field or a molten-glass render | `label` eyebrow ("AI-FIRST SOFTWARE DEVELOPMENT") > `display-xl` headline naming what TekRevol is and who it is for > `lead` > primary + secondary Button. The Strata motif builds on the right as the page's one big motion moment |
| Proof band | carbon, `surface-sunken` | Award logos in white at 60% opacity, plus 2 to 3 `data` numbers (800+, 4.8/5 Clutch, 10 years) |
| Pillars | carbon | 4 Cards on a 12-column grid (3 columns each), each with a `label`, `h3`, one line and a link. The featured pillar takes `notch-md` and `glow-accent` |
| "Finish what was started" | pearl | The rescue story for stalled builds and AI prototypes. `h2` + `lead`, an image of real work |
| Case studies | pearl | Cards with the client's result first (challenge, solution, impact), filterable by industry |
| Compliance | carbon | HIPAA, SOC 2, GDPR and PCI DSS named plainly, for the mid-market champion to forward |
| Closing CTA | carbon | Reeded-light background, Strata, `display-l` line, one Button |

## Components

- **Buttons:** one primary per view (`accent`, `notch-sm`). Secondary is outlined with `line-strong`. Text links use `accent-ink`
- **Cards:** `surface-raised`, `radius-0`, padding `space-6`. Hover: `glow-accent` on carbon, `lift` on pearl
- **Labels:** mono uppercase eyebrows above every section heading. They give the site its engineered rhythm
- **Navigation:** carbon bar, white logo, Host Grotesk `button` style links, one primary "Talk to an engineer" Button

## Page templates to design

Homepage · service pillar page · individual service page · case study · blog article · industry hub (home-based care) · about / careers · contact.

## Build notes for developers

- Load fonts from Google Fonts with `display=swap` and preload Host Grotesk 400 and 500
- Expose all tokens as CSS custom properties (the system generates `tokens.css`) and theme with `data-theme="carbon"` / `data-theme="pearl"` per section
- Respect `prefers-reduced-motion` for the Strata build and section reveals
- Real HTML text everywhere, never text in images, so search engines and AI assistants can read and cite it
- Check every text and background pair against the contrast table in Color before shipping
