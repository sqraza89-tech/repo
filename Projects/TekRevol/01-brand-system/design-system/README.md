TekRevol is an AI-first software development company. It builds AI-native products from scratch, takes AI-built prototypes the rest of the way to production, and backs both with ten years of mobile, web, cloud and custom software engineering.

**Brand idea: Better with every layer.** TekRevol moved into AI early, scaled with it fast, and kept building on what it learned. Every project, model and architecture becomes the base for the next one.

**The look: molten glass.** Futuristic, corporate and premium. Deep carbon and oxblood grounds, molten orange light glowing from inside glass and chrome, cool pearl and alabaster neutrals, and quiet, precise typography. The energy lives in the light and the imagery; the layout stays calm and trustworthy.

> Status: proposed v2 (October 2026) for the AI-first rebrand. Colors, type and the logo refresh need sign-off before the website build starts. The four service-pillar names are not final (Decision D01), so they appear here as examples only.

## Using this system

- **Carbon first.** The primary theme is `carbon` (dark). Use `pearl` (light) for long reading, documents and alternating sections. Build every component through the semantic tokens (`surface`, `ink`, `accent`...) so it works in both.
- **Heat is rationed.** In the interface, `accent` (Molten Orange) covers about 10% of a screen: the primary CTA, one highlighted word or number, the logo. Imagery and the Molten gradient can carry more heat, but always against carbon, oxblood or pearl.
- **Carbon on orange.** Text on `accent` is always `on-accent` (carbon). Never white text on Molten Orange below 24px. White text is fine on `brand-core` and `brand-oxblood`.
- **Orange as text** uses `accent-ink`, never `accent`.
- **One family, quietly confident.** `display` and `sans` are both Host Grotesk: headlines at Medium (500) with tight tracking, text at Regular. `mono` (JetBrains Mono) is for labels, code and proof numbers. Premium comes from restraint: large sizes, few weights, lots of space.
- **Square, with one signature corner.** Use `radius-0` and `radius-sm`. The notch (`notch-sm`, `notch-md`, `notch-lg`) is a 45 degree cut on the top-right corner, taken from the logo.
- **Depth from light.** Use `glow-accent` on carbon instead of drop shadows. Use `lift` only for menus and modals.
- **Spacing in 4px steps.** Every gap is a `space-*` token. Sections breathe: `space-10` on desktop.
- **Layers are the motif.** Strata (stacked bars of molten light) and reeded glass (fine vertical ribs that split light into layers) both say "better with every layer". Use one per page or frame.
- **Focus** is a 2px solid `focus-ring` with a 2px gap in the surface color.

## Quick reference

| Need | Use |
|---|---|
| Page background | `surface` |
| Card | `surface-raised`, `radius-0` or `notch-md`, padding `space-6` |
| Headline | `display-l` / `h1` / `h2` in `ink` |
| Eyebrow above a headline | `label` in `accent-ink`, uppercase |
| Body | `body` in `ink`, secondary in `ink-muted` |
| Primary CTA | Button primary: `accent` fill, `on-accent` text, `notch-sm` |
| Secondary CTA | Button secondary: `line-strong` border, `ink` text |
| Proof number | `data` in `ink`, its label in `small` `ink-muted` |
| Hero or campaign background | Molten gradient or a molten-glass render on carbon |
| Chart series | `data-1` (TekRevol) to `data-4` |

## Sections in this book

1. Brand idea and positioning
2. Logo
3. Color
4. Typography and kerning
5. Layout, spacing and shape
6. Imagery and AI image generation
7. Motion and AI video generation
8. Voice
9. Applying it to the website

Fonts load from Google Fonts:
`https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap`
