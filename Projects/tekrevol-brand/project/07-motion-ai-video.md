# 7. Motion and AI video generation

## Motion principle: build up

Things arrive the way the brand grows: **from the bottom up, layer by layer**, each settling a little brighter than the last. Motion is quick, confident and precise. It never bounces or wobbles.

| Token | Value | Use |
|---|---|---|
| `duration-fast` | 120ms | Hover, focus, color |
| `duration-base` | 240ms | Menus, tabs, small reveals |
| `duration-build` | 640ms | Layers and sections stacking into place |
| `stagger` | 80ms | Delay between stacked items |
| `ease-build` | cubic-bezier(0.2, 0.8, 0.2, 1) | Arrivals |
| `ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Exits |

- Elements rise 16 to 24px and fade in, staggered from the bottom of a stack upward
- Hover: buttons brighten to `accent-hover`; cards gain `glow-accent`. No scaling past 1.02
- One orchestrated moment per page (usually the hero Strata building). The rest stays calm
- Respect `prefers-reduced-motion`: show the end state with no movement

## Logo animation

The three planes slide in on their 45 degree angles (left plane, right plane, then the base bar), lock together, and the inner triangle lights up Flare for a beat before settling to carbon. 1.2 seconds in total. Use it at the start or end of videos only.

## Video language

| Element | Rule |
|---|---|
| Camera | Slow push-ins, low angles, smooth lateral tracks past layered glass or screens. No shaky handheld, no fast whip pans |
| Light | Carbon environments lit by warm orange from below or from screens |
| Pace | 25 to 30 seconds for social. One idea per scene, 3 to 5 seconds a scene |
| Type on screen | Unbounded for headlines, Archivo for captions, JetBrains Mono for labels and numbers. Max 8 words on screen at once |
| Captions | Always burned in for social. Archivo 600, white on a carbon band |
| End card | Carbon background, Ascent gradient Strata, refreshed logo, one line CTA |
| Sound | Clean electronic pulse, warm low end, builds with the layers. No generic "epic" stock music |

## AI video prompt kit

For Runway, Sora, Google Veo, Kling, Luma or Pika.

### Master style block

```
TekRevol brand film look. Dark warm carbon environment, a single warm signal-orange light (#FF5A1F) rising from below, soft amber highlights, layered translucent planes and crisp geometric edges, slow smooth camera movement, shallow depth of field, cinematic, precise, calm, premium. Orange is the only saturated color. No blue or purple light, no text, no logos.
```

### Templates

**Brand opener (5 to 8 seconds)**
```
Slow push-in on a stack of thin glass layers assembling one by one from the bottom up into a stepped peak, each new layer glowing slightly brighter orange than the last, dark carbon void, light rising through the stack. [Master style block]
```

**Builder scene (4 seconds)**
```
Low-angle slow dolly past an engineer reviewing code on a large monitor at night, orange screen light on their face, office in soft shadow, calm focus. [Master style block]
```

**Product reveal (4 seconds)**
```
Camera glides down onto a laptop on a graphite desk, its blank screen brightening with warm orange light as translucent interface layers rise out of it and stack above the keyboard. [Master style block]
```

### After generating

- Generate clips without text or logos, then add type, the real logo and real UI in the edit
- Color-grade every clip to the same look: carbon blacks, Flare highlights, no blue
- Check for AI artifacts: warped hands, melting objects, flickering screens
- Keep a library of approved clips to use as image or video references so the series stays consistent
