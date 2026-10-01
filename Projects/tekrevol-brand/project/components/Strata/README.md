# Strata

The brand's graphic signature: stacked bars, widest at the base, heating up as they rise, for "better with every layer".

- `tr-strata` with four empty `span` children: Oxblood (base, 100%), Core Red (75%), Molten (50%), Flare (25%), right aligned
- Bars are square, `space-6` tall, `space-2` apart. Scale the whole stack, never single bars
- Uses: hero graphic, section divider, process steps (one layer per stage), frame for a proof number
- Motion: bars build from the bottom up with `duration-build`, `ease-build` and `stagger`
- Decorative: mark it `aria-hidden="true"`

Do not: use more than one per page or frame, reorder the colors (light always rises), add other hues, or round the bars.
