# 3. Color

## Core palette

| Name | Token | HEX | RGB | Role |
|---|---|---|---|---|
| Signal Orange | `brand-signal` | #FF5A1F | 255 90 31 | The brand color. CTAs, highlights, logo |
| Flare | `brand-flare` | #FF8A3D | 255 138 61 | Light end: hover, top of gradients, focus on dark |
| Ember | `brand-ember` | #E63A0E | 230 58 14 | Deep end: base of gradients, pressed states |
| Glow | `brand-glow` | #FFC08A | 255 192 138 | Light emitted in imagery, soft fills |
| Carbon | `brand-carbon` | #0F0D0C | 15 13 12 | Primary ground. Warm near-black |
| Graphite | `brand-graphite` | #1B1816 | 27 24 22 | Raised surfaces on carbon |
| Paper | `brand-paper` | #FAF8F6 | 250 248 246 | Light ground. Warm off-white |

The new Signal Orange is brighter and slightly redder than the legacy #F37A20, which makes it read as a screen color (emitted light) rather than a print color. The neutrals lean warm so the orange looks like it belongs to them.

## Proportion

| On carbon (default) | On paper |
|---|---|
| Carbon and graphite 70% | Paper and white 70% |
| Ink and muted text 20% | Ink and muted text 20% |
| Orange family 10% | Orange family 10% |

One orange focal point per screen or frame. If everything is orange, nothing is.

## The Ascent gradient

The only brand gradient. It runs **bottom to top**, from `brand-ember` through `brand-signal` to `brand-flare`, like light rising through layers.

```css
background: linear-gradient(0deg, #E63A0E 0%, #FF5A1F 55%, #FF8A3D 100%);
```

Use it for the Strata motif, hero light, video end cards and large display fills. Never on text smaller than `display-l`, never across the logo, never mixed with any other hue.

## Text and contrast

| Text | On | Ratio |
|---|---|---|
| `ink` | `surface` (both themes) | 16.8:1 / 17.6:1 |
| `ink-muted` | `surface` (both themes) | 7.0:1 / 6.4:1 |
| `on-accent` (carbon) | `accent` | 6.2:1 |
| `accent-ink` | `surface` (both themes) | 7.5:1 / 5.7:1 |
| White | `accent` | 3.1:1, only for text 24px and up |

## Status and data colors

`success`, `warning`, `danger` and `info` are for system states only, and always come with a word or an icon. `danger` sits close to the brand orange, so never rely on its color alone.

For charts, `data-1` (Signal) is TekRevol or the highlighted result, `data-2` (cyan) is the comparison, `data-3` (sand) and `data-4` (slate) follow. Cyan is the one cool color in the system, and it appears only in data.

## Do not

- Use blue or purple as a brand color, or blue-to-purple gradients. That is the category look TekRevol is stepping away from
- Use the legacy #F37A20 next to the new orange
- Set orange body text on paper (use `accent-ink`)
- Use pure black #000000 or pure grey neutrals
- Put neon cyan or green glows in brand imagery
