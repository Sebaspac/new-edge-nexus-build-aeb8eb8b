

## Problem Analysis

The hero headline font sizes are too large at the current viewport (1311px = xl breakpoint), causing the content to overflow beyond one screen. The text also needs to be visually aligned with the navigation bar's left edge.

Current headline sizes: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl` -- at xl, that's 72px, which is too large.

The nav has `left-4 right-4` (16px margin) with internal `px-8` padding, so the logo/content starts at roughly 48px from screen edge.

## Plan

**File: `src/components/HeroSection.tsx`**

1. **Reduce headline font sizes** to fit in one viewport:
   - Change from `lg:text-6xl xl:text-7xl 2xl:text-8xl` to `lg:text-4xl xl:text-5xl 2xl:text-6xl`

2. **Align left padding with nav**: Set consistent left padding on the content container to match nav alignment (~48px on desktop), removing the `max-w-xl/2xl` constraint that centers the text block awkwardly.

3. **Reduce vertical spacing**: Tighten `space-y` values and reduce `pt` on the container so everything fits above the fold.

4. **Compact subheadline and trust indicators**: Slightly smaller text sizes to ensure the full hero (badge + headline + subheadline + trust badges + CTAs + scroll indicator) fits in 100dvh.

5. **CTA buttons**: Keep them clear and prominent, ensure proper sizing.

These are purely CSS class changes within HeroSection.tsx -- no structural changes needed.

