# 3. Color

## The palette: molten and chrome

Two families. **Molten** is the heat: deep oxblood rising through core red into molten orange and pale haze, like metal glowing as it heats. **Chrome** is the cool, premium counterweight: carbon, graphite, steel, alabaster and pearl.

### Molten

| Name | Token | HEX | RGB | Role |
|---|---|---|---|---|
| Oxblood | `brand-oxblood` | #4A0E0A | 74 14 10 | Shadow side of gradients and glass, dark premium panels |
| Core Red | `brand-core` | #E10600 | 225 6 0 | Deep heat: logo base plane, lower gradient stops, pressed states |
| **Molten Orange** | `brand-molten` | **#FF4F0F** | 255 79 15 | **The brand color.** CTAs, highlights, logo left plane |
| Flare | `brand-flare` | #FF8A3D | 255 138 61 | Light end: logo right plane, hover, focus on carbon |
| Haze | `brand-haze` | #F2D4CC | 242 212 204 | Soft pearl blush where light falls off. Decorative only |

### Chrome

| Name | Token | HEX | RGB | Role |
|---|---|---|---|---|
| Carbon | `brand-carbon` | #0C0807 | 12 8 7 | Primary ground. Near-black with a red undertone |
| Graphite | `brand-graphite` | #1A1413 | 26 20 19 | Raised surfaces on carbon |
| Steel | `brand-steel` | #6E7680 | 110 118 128 | Metallic reflections in imagery, neutral chart series |
| Chrome | `brand-chrome` | #DADAD8 | 218 218 216 | Alabaster grey: hairlines on pearl, studio backdrops |
| Pearl | `brand-pearl` | #F2F1EF | 242 241 239 | Light ground. Cool, clean near-white |

Molten Orange is brighter and more saturated than the legacy #F37A20, and leans red so it reads as emitted light on screen. The neutrals are cool and metallic so the heat stands out and the brand feels corporate and precise, not cosy.

## The Molten gradient

The signature gradient, used as a **soft, blurred field of light**, never as hard stripes.

```css
/* linear version: bars, lines, small fills */
background: linear-gradient(90deg, #4A0E0A 0%, #E10600 30%, #FF4F0F 55%, #FF8A3D 80%, #F2D4CC 100%);

/* field version: hero and campaign backgrounds */
background:
  radial-gradient(60% 80% at 30% 70%, #FF4F0F 0%, rgba(255,79,15,0) 60%),
  radial-gradient(50% 60% at 70% 40%, #E10600 0%, rgba(225,6,0,0) 65%),
  radial-gradient(40% 50% at 85% 80%, #F2D4CC 0%, rgba(242,212,204,0) 70%),
  #0C0807;
```

Rules: heat flows from oxblood (shadow) to haze (light), always in that order. Keep it on carbon or oxblood. Never put body text on the gradient; headlines and the white logo only, with a carbon scrim if contrast drops.

## Proportion

| In the interface | In imagery and campaigns |
|---|---|
| Carbon / pearl 70% | Carbon and oxblood 50% |
| Ink and neutrals 20% | Molten light 35% |
| Molten Orange 10% | Chrome, steel, pearl highlights 15% |

## Text and contrast

| Text | On | Ratio |
|---|---|---|
| `ink` | `surface` (carbon / pearl) | 17.6:1 / 16.8:1 |
| `ink-muted` | `surface` (carbon / pearl) | 6.8:1 / 6.3:1 |
| `on-accent` (carbon) | `accent` | 6.0:1 |
| `accent-ink` | `surface` (carbon / pearl) | 7.7:1 / 6.1:1 |
| White | `brand-core` | 5.0:1 |
| White | `brand-oxblood` | 15.5:1 |
| White | `accent` | 3.3:1, only for text 24px and up |

## Status and data colors

`success`, `warning`, `danger` and `info` are for system states only, always with a word or icon. `danger` sits near the brand reds, so never rely on its color alone. Charts: `data-1` (Molten) is TekRevol or the highlighted result, `data-2` (cyan) the comparison, `data-3` (sand) and `data-4` (steel) follow.

## Do not

- Use blue or purple as a brand color, or blue-purple gradients
- Use the legacy #F37A20 next to Molten Orange
- Run the gradient backwards (haze into oxblood) or add other hues to it
- Set orange body text on pearl (use `accent-ink`)
- Use pure #000000 or pure grey; carbon and chrome are tuned
