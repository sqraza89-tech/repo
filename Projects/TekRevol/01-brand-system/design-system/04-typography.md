# 4. Typography and kerning

## Typefaces

| Role | Family | Why | Weights |
|---|---|---|---|
| Display and text | **Host Grotesk** | A contemporary grotesk: clean, precise and corporate, with enough character at large sizes to feel premium. One family across headlines and text reads trustworthy and consistent | 400, 500, 600 |
| Utility | **JetBrains Mono** | Built for code. Marks labels, technical detail and proof numbers as engineering | 400, 500 |

Both are free on Google Fonts, so the website, designers and AI tools share the same faces. Poppins and Inter are retired: they are the category defaults.

Fallbacks: Host Grotesk falls back to Helvetica Neue / system-ui; JetBrains Mono to ui-monospace.

## The premium rule

Classy type is restrained type. Headlines are **Medium (500), large, and tightly tracked**, never Bold. Contrast comes from size and space, not weight. Two weights per component at most.

## Scale

| Style | Family | Desktop | Mobile | Line height | Weight | Tracking |
|---|---|---|---|---|---|---|
| `display-xl` | Host Grotesk | 88px | 44px | 1.0 | 500 | -0.04em |
| `display-l` | Host Grotesk | 64px | 36px | 1.04 | 500 | -0.035em |
| `h1` | Host Grotesk | 48px | 32px | 1.08 | 500 | -0.03em |
| `h2` | Host Grotesk | 36px | 28px | 1.15 | 500 | -0.02em |
| `h3` | Host Grotesk | 26px | 22px | 1.25 | 600 | -0.015em |
| `h4` | Host Grotesk | 18px | 18px | 1.4 | 600 | 0 |
| `lead` | Host Grotesk | 20px | 18px | 1.55 | 400 | 0 |
| `body` | Host Grotesk | 16px | 16px | 1.65 | 400 | 0 |
| `small` | Host Grotesk | 14px | 14px | 1.5 | 400 | +0.005em |
| `button` | Host Grotesk | 15px | 15px | 1.2 | 600 | +0.01em |
| `label` | JetBrains Mono | 12px | 12px | 1.3 | 500 | +0.08em, uppercase |
| `code` | JetBrains Mono | 14px | 13px | 1.6 | 400 | 0 |
| `data` | JetBrains Mono | 40px | 32px | 1.05 | 500 | -0.02em |

## Hierarchy

A block reads: `label` (eyebrow) > headline > `lead` > `body` > Button. One display style per section. On key pages, add a **spec row** under the hero: thin `line` rule, then 3 to 4 columns of `small` metadata (label in `ink-muted`, value in `ink`), like a product spec sheet. It signals precision and trust.

## Kerning and tracking

- Kerning on everywhere: `font-kerning: normal; font-feature-settings: "kern" 1;`
- Tracking tightens as size grows: -0.015em at 26px down to -0.04em at 88px. Never track headlines positively
- Body text stays at 0; `small` opens slightly (+0.005em)
- Uppercase only for `label`, always +0.08em. Never set headlines in all caps
- Hand-kern display headlines and check: **Te, Ta, Yo, AI, LT, "V,"** and pairs around apostrophes and periods
- Tabular figures for tables and counters: `font-variant-numeric: tabular-nums`

## Case and punctuation

- Sentence case for headlines and buttons
- The brand name is **TekRevol** in text; all caps only in the logo
- No em dashes in copy (voice rule). Use a period, comma or colon
- `text-wrap: balance` on headlines

## Do not

- Use Bold (700+) for headlines
- Set headlines in JetBrains Mono, or labels in mixed case
- Use italics for emphasis (use `body-strong`)
- Fake bold, stretch or outline type
