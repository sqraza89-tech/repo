# 7. Motion and AI video generation

## Motion principle: build up, heat up

Things arrive the way the brand grows: **bottom up, layer by layer**, each one settling a little brighter, as if heating. Motion is slow, smooth and precise. It never bounces.

| Token | Value | Use |
|---|---|---|
| `duration-fast` | 120ms | Hover, focus, color |
| `duration-base` | 240ms | Menus, tabs, small reveals |
| `duration-build` | 640ms | Layers and sections stacking into place |
| `stagger` | 80ms | Delay between stacked items |
| `ease-build` | cubic-bezier(0.2, 0.8, 0.2, 1) | Arrivals |
| `ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Exits |

- Elements rise 16 to 24px and fade in, staggered from the bottom up
- Hover: buttons warm to `accent-hover`; cards gain `glow-accent`. No scaling past 1.02
- Backgrounds can drift: the Molten gradient field moves very slowly (20 to 40 second loop)
- One orchestrated moment per page. Respect `prefers-reduced-motion`

## Logo animation

The three planes slide in along their 45 degree angles, lock together, and molten light runs up through them from the base bar to the flare plane, before settling. 1.2 seconds. Use at the start or end of videos only.

## Video language

| Element | Rule |
|---|---|
| Look | Molten glass: liquid glass and chrome, reeded light, orbs, glass objects. Carbon and oxblood environments |
| Camera | Slow push-ins, slow macro slides across glass, gentle orbit around objects. No handheld shake, no whip pans |
| Light | Molten orange from within, cool chrome reflections, soft defocus |
| Pace | 25 to 30 seconds for social, 3 to 5 seconds a scene, one idea per scene |
| Type on screen | Host Grotesk Medium headlines, JetBrains Mono labels and numbers, max 8 words at once |
| Captions | Burned in for social: Host Grotesk 600, white on a carbon band |
| End card | Molten gradient field, white refreshed logo, one line CTA |
| Sound | Clean electronic pulse, warm low end, rising with the layers |

## AI video prompt kit

For Runway, Sora, Google Veo, Kling, Luma or Pika.

### Master style block

```
TekRevol brand film, molten glass look. Deep carbon black and oxblood environment, molten orange light glowing from inside glass and polished chrome, cool silver reflections, layered translucent forms and reeded glass, shallow depth of field, soft defocused light, slow smooth camera, premium, futuristic, calm. Orange family is the only warm color. No blue or purple light, no text, no logos.
```

### Templates

**Brand opener (5 to 8 s)**
```
Slow macro push across rippling liquid glass and chrome as molten orange light rises through it from below, layers of light stacking brighter one after another. [Master style block]
```

**Reeded reveal (4 s)**
```
Camera slides slowly left to right behind a vertical reeded glass panel; blurred orbs of molten orange and red light drift behind the ribs, splitting into thin layers, centered dark space for a logo. [Master style block]
```

**Glass object orbit (4 s)**
```
Slow orbit around three thick glass planes forming a stepped peak, molten light pulsing up through them, chrome reflections sliding across the edges, pearl to carbon studio gradient. [Master style block]
```

**Builder scene (4 s)**
```
Low-angle slow dolly past an engineer reviewing code at night, orange screen light on their face, cool grey office in soft shadow. [Master style block]
```

### After generating

- Generate clean plates, then add type, the real logo and real UI in the edit
- Grade every clip to one look: carbon blacks, oxblood shadows, flare highlights
- Check for warped glass, flicker and AI artifacts
- Keep approved clips as references so the series stays consistent
