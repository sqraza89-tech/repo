# 4. Typography and kerning

## Typefaces

| Role | Family | Why | Weights |
|---|---|---|---|
| Display | **Unbounded** | Wide, engineered letterforms that echo the wide TEKREVOL wordmark. The name fits the idea of growth without a ceiling. | 500, 600, 700 |
| Text | **Archivo** | A sturdy, very legible grotesque that holds up from 14px buttons to long articles | 400, 500, 600, 700 |
| Utility | **JetBrains Mono** | Built for code. Marks labels, technical detail and proof numbers as engineering | 400, 500 |

All three are free on Google Fonts, so the website, designers and AI tools use the same faces. Poppins and Inter are retired: they are the default faces of the category.

Fallbacks: Unbounded falls back to Archivo, Archivo to system-ui, JetBrains Mono to ui-monospace.

## Scale

| Style | Family | Desktop | Mobile | Line height | Weight | Tracking |
|---|---|---|---|---|---|---|
| `display-xl` | Unbounded | 88px | 44px | 1.0 | 700 | -0.03em |
| `display-l` | Unbounded | 64px | 36px | 1.05 | 700 | -0.025em |
| `h1` | Unbounded | 48px | 32px | 1.1 | 600 | -0.02em |
| `h2` | Unbounded | 36px | 28px | 1.15 | 600 | -0.015em |
| `h3` | Unbounded | 26px | 22px | 1.25 | 600 | -0.01em |
| `h4` | Archivo | 18px | 18px | 1.4 | 600 | 0 |
| `lead` | Archivo | 20px | 18px | 1.55 | 400 | 0 |
| `body` | Archivo | 16px | 16px | 1.65 | 400 | 0 |
| `small` | Archivo | 14px | 14px | 1.5 | 400 | +0.005em |
| `button` | Archivo | 15px | 15px | 1.2 | 600 | +0.01em |
| `label` | JetBrains Mono | 12px | 12px | 1.3 | 500 | +0.08em, uppercase |
| `code` | JetBrains Mono | 14px | 13px | 1.6 | 400 | 0 |
| `data` | JetBrains Mono | 40px | 32px | 1.05 | 500 | -0.02em |

## Hierarchy

A typical block reads: `label` (eyebrow) > `h2` > `lead` > `body` > Button. One display style per section. Headline, then supporting line, then action.

## Kerning and tracking

- Keep kerning on everywhere: `font-kerning: normal; font-feature-settings: "kern" 1;`
- Unbounded is wide, so it needs **negative tracking** as it grows: -0.01em at 26px, down to -0.03em at 88px. Never track display type positively
- Archivo body copy stays at 0. Only `small` opens slightly (+0.005em) for legibility
- Uppercase is for `label` only, always with +0.08em tracking. Never set headlines in all caps
- At display sizes, check and hand-kern these pairs in key headlines and logos-in-text: **Te, Ta, Yo, AI, LT, "V,"** and any pair around an apostrophe
- Use tabular figures for numbers in tables and counters: `font-variant-numeric: tabular-nums`

## Case and punctuation

- Sentence case for headlines and buttons: "Talk to an engineer", not "Talk To An Engineer"
- The brand name is written **TekRevol** in text. The logo's all-caps form is only the logo
- No em dashes in any copy (voice rule). Use a period, comma or colon instead
- Headlines with two lines break at a natural phrase. Use `text-wrap: balance`

## Do not

- Set body text in Unbounded or headlines in JetBrains Mono
- Use more than two weights in one component
- Use italics for emphasis (use `body-strong`)
- Fake bold, stretch or outline type
