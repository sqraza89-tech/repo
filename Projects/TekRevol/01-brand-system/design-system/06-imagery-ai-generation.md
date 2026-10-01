# 6. Imagery and AI image generation

For photographers, 3D artists, designers, and anyone prompting an AI image tool (Midjourney, GPT Image, Adobe Firefly, Gemini / Imagen, Stable Diffusion, Ideogram).

## The look: molten glass

Molten orange light trapped inside glass, chrome and layered planes, set against deep carbon or clean pearl studio space. Soft focus, slow light, precise edges. It should feel like a premium product launch, not a tech cliché.

## Five rules for every image

1. **Light comes from inside.** The main light is molten orange glowing within glass, a screen or a layer edge. Everything else falls into carbon, oxblood or soft pearl.
2. **Layers you can see.** Stacked glass planes, reeded glass ribs, overlapping translucent forms. Depth reads as layers, which is the brand idea.
3. **Chrome cools the heat.** Every frame has a cool counterweight: chrome, steel, pearl or alabaster. Heat plus metal is what makes it premium.
4. **Soft focus, sharp subject.** Shallow depth of field and defocused light around one crisp subject or edge.
5. **Orange family only.** Oxblood, core red, molten, flare and haze are the only warm hues. No blue or purple light, except steel-grey reflections on metal.

## Five image families

| Family | Use | Look |
|---|---|---|
| **Molten glass** | Hero, campaign key visuals | Flowing liquid glass and chrome in molten orange and silver, slow rippled surfaces, glossy highlights. Abstract, close-up, filling the frame |
| **Reeded light** | Section backgrounds, social, video | Fine vertical reeded (fluted) glass in front of blurred molten light. The ribs split light into layers. White logo or headline can sit on top |
| **Glass objects** | Service pages, product features | The TekRevol mark's three planes rendered as thick glass or polished ceramic objects with orange light inside, on a pearl-to-carbon studio gradient. Our own shape, so nobody else can have it |
| **Light orbs** | Calm sections, quotes, compliance | Large defocused spheres of molten and pearl on carbon, macro-lens softness, lots of black space |
| **Builders** | About, careers, case studies | Documentary photos of the team at work, warm screen light on faces, cool grey office around them |

## Avoid

Glowing brains, robots, humanoid AI faces, robot handshakes, blue holograms, binary rain, padlocks, circuit-board cities, purple-blue gradients, lens-flare overload, fake UI with gibberish text, and any generated logo or lettering.

## AI prompt kit

### Master style block

Paste at the end of every image prompt:

```
Style: TekRevol brand, molten glass. Deep carbon black background (#0C0807) with oxblood shadows (#4A0E0A). Molten orange light (#FF4F0F) glowing from inside glass and chrome, heating to core red (#E10600) in the shadows and fading to soft amber (#FF8A3D) and pale pearl blush (#F2D4CC) at the edges. Cool chrome, steel and pearl-white reflections as counterweight. Layered translucent forms, reeded glass, crisp precise edges, shallow depth of field, soft defocused light. Premium, futuristic, calm, corporate. Orange family is the only warm color.
```

AI tools read hex codes loosely; the color words matter more.

### Negative prompt

```
blue light, purple light, neon cyan, rainbow, robots, humanoid faces, glowing brain, holograms, binary code, circuit board, padlock, heavy lens flare, text, letters, logo, watermark, cartoon, plastic toy look, clutter, harsh flash
```

### Templates

**Molten glass (hero)**
```
Macro abstract of flowing liquid glass and polished chrome ribbons, molten orange light glowing inside the folds, silver reflections, smooth rippled surfaces, diagonal flow, filling the frame. [Master style block]
```

**Reeded light (background)**
```
Fine vertical reeded fluted glass panel in front of soft blurred orbs of molten orange and core red light, ribs splitting the light into thin vertical layers, dark carbon edges, centered negative space for a logo. [Master style block]
```

**Glass object (TekRevol mark, render in 3D tools from the real logo file, use AI only for lighting and backdrop ideas)**
```
Three thick glass planes forming a stepped peak, lit from inside with molten orange light, glossy edges with chrome reflections, resting on a smooth surface in a pearl-white to carbon studio gradient, soft shadow, product photography. [Master style block]
```

**Light orbs (calm section)**
```
Large out-of-focus spheres of molten orange and pearl white light on a deep black background, macro lens, creamy bokeh, generous empty black space in the center. [Master style block]
```

**Builders (team photography)**
```
Documentary photo of a software engineer reviewing code on a large monitor, warm orange screen light on their face, cool grey office in soft shadow, candid, 35mm, shallow depth of field. [Master style block]
```

### Tool settings

| Tool | Settings |
|---|---|
| Midjourney | `--style raw --stylize 150 --ar 16:9` (hero 21:9, LinkedIn 1:1 or 4:5, story 9:16), `--no blue, purple, text, logo` |
| GPT Image | Write the style block as full sentences; ask for "no text or logos in the image" |
| Adobe Firefly | Style: Photo, Visual intensity medium; upload an approved key visual as the style reference |
| Stable Diffusion | Use the negative prompt as written, CFG 5 to 7 |

### After generating

- Composite the real logo, real UI and real type afterwards. Never ship generated text or logos
- Grade to the palette: blacks to carbon, shadows toward oxblood, highlights to flare and haze; remove blue casts except steel on metal
- Check glass and chrome for melted or impossible geometry, and people for hand and face artifacts
- Save approved outputs as a reference board and reuse them as style references so every asset belongs to the same world
