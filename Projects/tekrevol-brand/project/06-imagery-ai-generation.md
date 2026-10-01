# 6. Imagery and AI image generation

This section is for photographers, illustrators, 3D artists, and anyone prompting an AI image tool (Midjourney, GPT Image / DALL-E, Adobe Firefly, Gemini / Imagen, Stable Diffusion, Ideogram).

## Four rules for every image

1. **Layers you can see.** Compositions are built in planes: foreground, glass, screens, architecture, light. Depth reads as stacked layers, not fog.
2. **Light comes from inside.** The main light source is warm orange, glowing from below or from within the subject (a screen, a seam, a layer edge). Everything else falls into carbon.
3. **Real builders, real work.** People are engineers, designers and founders at work: whiteboards, code, devices, product reviews. Natural expressions, not posed handshakes.
4. **Orange is the only saturated color.** The rest of the frame is warm neutral: carbon, graphite, concrete, paper, skin tones. No blue or purple light.

## Image types

| Type | Use | Look |
|---|---|---|
| **Layered abstract** | Hero, section backgrounds, social | Stacked translucent planes or bars, orange light rising from the bottom, carbon background, crisp edges, lots of negative space |
| **Builders** | About, careers, case studies | Documentary photos of the team, warm practical light, shallow depth of field, a screen or device as an orange light source |
| **Product in context** | Service pages, case studies | Real interfaces on real devices, framed square or with the notch, a soft Glow light behind |
| **Industry scenes** | Vertical pages (for example home-based care) | Real settings shot calmly and respectfully, with the product visible in the work. Warm, never clinical blue |

## Avoid

Glowing brains, robots, humanoid AI faces, robot-human handshakes, blue holograms, binary rain, floating padlocks, circuit-board cityscapes, purple-blue gradients, lens flares, fake UI full of gibberish text, and generated logos or text. These clichés make every AI company look the same.

## AI prompt kit

### Master style block

Paste this at the end of every image prompt:

```
Style: TekRevol brand. Warm carbon black background (#0F0D0C), a single bright signal-orange light source (#FF5A1F) glowing from below, fading to soft amber (#FF8A3D) and pale peach (#FFC08A) highlights. Layered composition built from stacked planes, crisp geometric edges, 45-degree angled cuts, generous negative space. Cinematic, precise, premium, engineered. Warm neutral palette only, orange is the only saturated color.
```

AI tools read hex codes loosely. Always describe the color in words as well, as above.

### Negative prompt (or "Avoid:" line)

```
blue light, purple light, neon cyan, robots, humanoid faces, glowing brain, holograms, binary code, circuit board, padlock, lens flare, text, letters, logo, watermark, rounded bubbly shapes, cartoon, clutter, oversaturated rainbow colors
```

### Templates

**Layered abstract (hero, social background)**
```
Abstract 3D render of [six] horizontal translucent glass layers stacked into a stepped peak, each layer slightly brighter than the one below, orange light rising through them from the base, dark carbon void around them, [front view, slight low angle]. [Master style block]
```

**Builders (team photography)**
```
Documentary photo of a [software engineer / product team of three] working at [a large monitor showing code / a whiteboard of system architecture], warm orange light from the screen on their faces, rest of the office in soft shadow, natural candid expressions, 35mm lens, shallow depth of field. [Master style block]
```

**Product in context**
```
A [smartphone / laptop] on a dark graphite desk displaying a clean app dashboard, the screen is the main light source casting orange glow, layered glass and paper elements in soft focus behind, top-down three-quarter angle. Leave the screen blank for compositing. [Master style block]
```

**Industry scene (example: home-based care)**
```
A home care coordinator reviewing a schedule on a tablet at a kitchen table, warm afternoon light, calm and respectful, the tablet glows softly orange, real home details, no clinical blue. [Master style block]
```

### Tool settings

| Tool | Settings |
|---|---|
| Midjourney | `--style raw --stylize 100 --ar 16:9` (web hero 21:9, LinkedIn 1:1 or 4:5, story 9:16). Add `--no blue, purple, text, logo` |
| GPT Image / DALL-E | Write the master style block as full sentences. Ask for "no text in the image" |
| Adobe Firefly | Use Style: Photo or Art, Visual intensity low to medium, and upload an approved hero as a style reference |
| Stable Diffusion | Use the negative prompt as written. CFG 5 to 7 |

### After generating

- Replace every screen with a real TekRevol interface and add the real logo. Never ship generated text, UI or logos
- Grade toward the palette: blacks to carbon, highlights to Flare, remove any blue cast
- Check hands, faces, devices and reflections for AI artifacts
- Keep a reference board of approved outputs and reuse them as style references so the look stays consistent
