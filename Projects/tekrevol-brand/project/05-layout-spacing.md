# 5. Layout, spacing and shape

## Spacing

A 4px base unit. Use only the `space-*` steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.

| Context | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero padding (top/bottom) | `space-11` 160 | `space-9` 96 | `space-8` 64 |
| Section padding | `space-10` 128 | `space-9` 96 | `space-8` 64 |
| Between components in a section | `space-7` 48 | `space-7` 48 | `space-6` 32 |
| Heading to body | `space-5` 24 | `space-5` 24 | `space-4` 16 |
| Card padding | `space-6` 32 | `space-6` 32 | `space-4` 16 |

## Grid

| Breakpoint | Columns | Gutter | Side margin |
|---|---|---|---|
| 1024px and up | 12 | 24px | auto, content max 1280px |
| 640 to 1023px | 8 | 24px | 32px |
| Below 640px | 4 | 16px | 16px |

Running text never exceeds `measure` (68 characters). Headlines usually span 8 of 12 columns, left aligned. Center alignment is for short statements and end cards only.

## Shape

- **Square by default.** Sections, images and large cards use `radius-0`
- **Buttons, inputs and tags** use `radius-sm` (2px)
- **The notch** is the signature corner: a 45 degree cut on the top-right, sized `notch-sm` (buttons, tags), `notch-md` (cards, image frames) or `notch-lg` (hero panels). Use it on the most important element in a view, not on everything

```css
clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
```

- Pills are only for status dots and avatars

## Borders and depth

- `line` hairlines (1px) separate content. `line-strong` outlines controls
- On carbon, depth is light: `glow-accent` on the featured card, or a soft Glow light from below in imagery
- `lift` is only for menus, popovers and modals

## Iconography

- Recommended set: **Lucide** (open source), 1.5px stroke at 24px, square line caps where the set allows
- Icons are line icons in `ink` or `ink-muted`. Only an active or featured icon goes `accent`
- Pair icons with a label. Never use emoji as icons or section markers
- Sizes: 16, 20, 24, 32px, aligned to the 4px grid

## The Strata motif

Stacked horizontal bars, widest at the bottom, getting brighter as they rise (Ember > Signal > Flare > Glow). It stands for the brand idea: every layer builds on the last. Use it:

- as a hero graphic or section divider
- to show progress or a process (each layer one stage)
- as a frame for a key number

Limit it to one instance per page or frame. Bars are square, separated by a `space-2` gap, with heights from the spacing scale.
