---
name: New Edge
description: Editorial press logic meets sharp 0-radius edges. Every section a statement.
colors:
  violet-edge: "#5B21B6"
  violet-glow: "#9F7AEA"
  ink-deep: "#1A0A2E"
  ink: "#3A3A3A"
  paper: "#FCFCFC"
  paper-pure: "#FFFFFF"
  hairline: "#E6E6E6"
  hairline-violet: "rgba(91,33,182,0.08)"
typography:
  display:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontStyle: "italic"
  headline:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.2em"
rounded:
  none: "0"
  hairline: "1px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "clamp(3rem, 8vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.violet-edge}"
    textColor: "{colors.paper-pure}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper-pure}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.paper-pure}"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.none}"
    padding: "32px"
  card-dark:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper-pure}"
    rounded: "{rounded.none}"
    padding: "40px"
  input:
    backgroundColor: "{colors.paper-pure}"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    typography: "{typography.body}"
---

# Design System: New Edge

## 1. Overview

**Creative North Star: "Ink & Edge — A Statement Press"**

New Edge looks like a high-end editorial press that also happens to ship software. The typography behaves like a magazine masthead: DM Serif Display italic at oversized scale, set as if a designer hand-placed it. The grid behaves like an engineer's drawing: zero border-radius, 1px hairlines, no decorative chrome. Every section is one printed page with one moment that surprises. Cards do not soften — they cut.

The aesthetic rejects three categories explicitly. First, the "Labber-Agentur" reflex: rounded violet gradients on white, lachende Stockfotos, Lorem-ipsum-sized headings. Second, SaaS rocket-ship templates: big-number-hero, glassmorphic stacks, "Built for teams that move fast." Third, KI-buzzword-cosplay: glowing orbs, neon meshes, "AI-powered" badges. None of these are referenced, even as homage.

The system runs on two registers simultaneously: serif italic carries voice and emotion; monospace carries metadata and procedural confidence. Violet appears as a deliberate cut, never as decoration.

**Key Characteristics:**

- Light parchment surface (`#FCFCFC`), pure white cards, deep ink (`#1A0A2E`) for editorial weight
- DM Serif Display italic as the only display face; Consolas as the only body/label face
- Zero border-radius everywhere — sharp corners are brand law
- Hairline borders (1px, hsl-tinted) replace shadows for separation
- One violet accent that earns its appearance; never a gradient, never glow as default
- Asymmetric editorial grids over identical card decks
- Motion is functional: reveal on enter, sweep on hover, scan-shimmer on the dark hero

## 2. Colors

A restrained palette: paper, ink, and one violet. The rarity of the violet is the point.

### Primary
- **Violet Edge** (`#5B21B6`, OKLCH approx `oklch(35% 0.20 295)`): the brand accent. Used on hover sweeps, CTA buttons, the violet CTA cell, accent rules, and the audit card stripe. Never used as a wash, never as a gradient. Appears on ≤15% of any given screen.
- **Violet Glow** (`#9F7AEA`): paired with deep ink only. Appears as link color inside dark cards, as soft glow blobs behind hero copy, and for the AnimatedTextCycle word swap. Forbidden on light backgrounds.

### Neutral
- **Ink Deep** (`#1A0A2E`): headlines and dark surface (hero card, AlbaNova featured case section). Carries editorial gravity; never replace with `#000`.
- **Ink** (`#3A3A3A`): body copy on light surfaces. WCAG AA against paper (`#FCFCFC`).
- **Paper** (`#FCFCFC`): the global page surface. Off-pure-white so the eye reads it as paper, not as a UI canvas.
- **Paper Pure** (`#FFFFFF`): elevated surfaces (cards, sticky elements, the bento cells).
- **Hairline** (`#E6E6E6`): default 1px separators between sections and grid cells.
- **Hairline Violet** (`rgba(91,33,182,0.08)`): used in place of plain hairline when the separator sits inside a section that already references the brand accent.

### Named Rules

**The Single Cut Rule.** Violet Edge appears on a maximum of 15% of any screen. The rarity is what makes it land. If you find yourself filling more than one element with violet, you have lost the cut.

**The No-Black Rule.** `#000` is prohibited. All deep surfaces use Ink Deep (`#1A0A2E`), which carries the violet hue at ~3% chroma. Pure black breaks the palette's warmth.

**The No-Gradient Rule.** Background gradients are prohibited as decoration. The single permitted gradient is the ThreeStepsCTA section's directional violet wash, which earns its place by being the climactic CTA. Everywhere else, solid color.

## 3. Typography

**Display Font:** DM Serif Display (Georgia fallback)
**Body & Label Font:** Consolas (ui-monospace fallback)

**Character:** A pairing of confidence and procedure. DM Serif Display italic is voice — it speaks for the agency in statements no other type could carry. Consolas is the supporting cast: metadata, ALL-CAPS eyebrows, code-adjacent confidence. The combination signals "we write the language and we build the system."

### Hierarchy
- **Display** (400 italic, `clamp(2.75rem, 6vw, 4.5rem)`, line-height 0.92): the one oversized statement per section. Used for "Was unsere Kunden sagen", "Deine Prozesse. Als System gedacht.", section openers. Always italic.
- **Headline** (400, `clamp(1.75rem, 4vw, 3rem)`, line-height 1.1): secondary statements inside sections (case study titles, founder quotes).
- **Title** (400, `clamp(1.2rem, 2.2vw, 1.6rem)`, line-height 1.2): card and list-item titles (service names, testimonial author roles).
- **Body** (400, 14px Consolas, line-height 1.7, max 65ch): all running text. Monospace makes the prose feel typed, not designed.
- **Label** (400, 11px Consolas, ALL-CAPS, letter-spacing 0.2em): eyebrows, category tags, metadata. Always preceded by a 32px violet hairline rule when used as a section eyebrow.

### Named Rules

**The One-Italic Rule.** Display is always italic; nothing else is. Italic earns gravity because it is rare. If two sections both italicize their bodies, the device dies.

**The Eyebrow Rule.** Every section announces itself with a Label-cased eyebrow preceded by a 32px violet hairline. Format: `─── NEW EDGE — SYSTEM`. Never used inside body content.

**The Monospace-for-Voice Rule.** Body copy is Consolas, not a sans-serif. This is a brand commitment, not an oversight. If the project ever switches body to Inter / sans, the editorial register collapses.

## 4. Elevation

The system is **flat by default with hairline separation**. Shadows are forbidden as ambient decoration. Depth is conveyed through three devices in this order: (1) typographic scale contrast, (2) violet bleeds and glow blobs behind dark hero cards, (3) 1px hairlines between adjacent surfaces.

### Shadow Vocabulary
The legacy `--shadow-soft` / `--shadow-strong` tokens in `src/index.css` exist but should not be applied to brand surfaces. They survive only inside utility classes (`.card-modern`, `.hover-lift`) that pre-date the Ink & Edge direction. New components must not consume them.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat. No drop shadow on cards, no inner shadow on inputs, no glow on hover. If a surface needs to feel "elevated", change the background to Paper Pure, not the shadow.

**The Glow Exemption.** One exception: the hero card and the dark AlbaNova featured case may carry a single blurred violet blob (rgba(91,33,182,0.15-0.20), blur 80-120px) behind their content. This reads as light leak, not as elevation. Maximum one blob per surface.

## 5. Components

### Buttons
- **Shape:** Zero radius. Sharp rectangle.
- **Primary:** Background Violet Edge (`#5B21B6`), text Paper Pure, padding `16px 32px`, Label typography (Consolas ALL-CAPS, 11px, letter-spacing 0.2em).
- **Hover / Focus:** Background fills to Ink Deep (`#1A0A2E`) over 300ms `ease-out`. No translate-Y lift. No glow. Focus ring is a 2px Violet Edge outline at 2px offset.
- **Ghost:** Transparent background, Ink Deep text, no border. Hover swaps text to Violet Edge.

### Cards
- **Corner Style:** Zero radius. Sharp.
- **Background:** Paper Pure (`#FFFFFF`). Dark variant uses Ink Deep (`#1A0A2E`) with Paper Pure text.
- **Shadow Strategy:** None. See the Flat-By-Default Rule.
- **Border:** 1px Hairline (`#E6E6E6`) where the card sits adjacent to Paper background. Inside a bento grid, the 1px gap with grid-background-color creates the borders implicitly.
- **Internal Padding:** 32px standard, 40px for dark hero variants.

### Bento Grid Cells (signature pattern)
- **Layout:** 4-column grid on desktop, 2 on tablet, 1 on mobile. Hero cell spans `lg:col-span-2 lg:row-span-2`. Feature service cells span `lg:col-span-2`. CTA cell sits at row-end col-4.
- **Gaps:** `gap: 1px` with grid `background-color: hairline-violet`. This produces seamless 1px borders between cells without dual-border math.
- **Hover sweep:** A violet fill div (`scale-y-0 → scale-y-100`, origin-bottom, 500ms `cubic-bezier(0.16,1,0.3,1)`) sweeps up. Text color crossfades to Paper Pure simultaneously. Ghost index number fades to opacity 0.
- **Ghost Index Numbers:** Each service cell carries a large DM Serif numeral (`clamp(2.2rem, 3.5vw, 3rem)`) with `WebkitTextStroke: 1px rgba(26,10,46,0.12)` and `color: transparent`. Decorative, not interactive.

### Inputs / Fields
- **Style:** 1px Hairline border, Paper Pure background, zero radius, Consolas body typography.
- **Focus:** Border shifts to Violet Edge, no glow.
- **Error:** Border shifts to a desaturated red (`oklch(58% 0.20 25)`). Helper text in 11px Label.

### Navigation
- **Style:** Sticky top, transparent until scroll, then Paper Pure background with 1px Hairline bottom border.
- **Typography:** Consolas, 13px, ALL-CAPS, letter-spacing 0.16em.
- **Hover / Active:** Underline appears via a 1px Violet Edge bottom rule animated from left.
- **Mobile:** Full-screen overlay panel in Paper, items stacked at Headline scale (clamp 1.75-3rem), italic.

### Section Eyebrow (signature pattern)
- **Composition:** 32px × 1px violet rule, 12px gap, Label-cased copy in Violet Edge.
- **Placement:** Always above the section's Display headline, left-aligned with the headline.
- **Purpose:** Visual signature; every section uses one, never two.

### Testimonial Column
- **Layout:** Vertical scrolling column, gentle infinite loop, fade-mask at top and bottom that blends to Paper.
- **Card style:** Paper Pure background, 1px Hairline border, 32px padding, Body copy in Consolas, name/role footer separated by 16px gap.

## 6. Do's and Don'ts

### Do:
- **Do** treat each section as a magazine spread: one Display moment, one supporting passage, one CTA or visual anchor. No more.
- **Do** lead every section with the Section Eyebrow signature (32px violet rule + Label-cased text in Violet Edge).
- **Do** keep DM Serif Display italic large. Display sits at `clamp(2.75rem, 6vw, 4.5rem)` minimum. Smaller and it stops being a statement.
- **Do** use 1px Hairline borders for separation. Both inside bento grids (via the gap trick) and between sections.
- **Do** flatten everything. If a surface needs hierarchy, change its background to Paper Pure or Ink Deep, not its shadow.
- **Do** let Violet Edge appear once per fold. The single cut.
- **Do** respect `prefers-reduced-motion`: kill scan shimmers, scroll parallax, and the bento hover sweep. State changes only.
- **Do** write Body copy in Consolas. Always. Yes, even though it's monospace.

### Don't:
- **Don't** round corners. Zero radius is brand law (Single Cut + 0-Radius doctrine). No `rounded-2xl`, no `rounded-lg`, no `rounded-md`. The bento grid, cards, buttons, and inputs all cut.
- **Don't** use `border-left` greater than 1px as a colored accent stripe. Sidebar stripes are a "Labber-Agentur" reflex. The audit CTA card inside the hero is the *only* permitted exception, and it's earning its keep.
- **Don't** use background gradients as decoration. The ThreeStepsCTA wash is the only permitted gradient.
- **Don't** apply `box-shadow` for ambient elevation. Flat-By-Default. The only permitted shadow-adjacent device is the violet glow blob inside dark hero surfaces.
- **Don't** use glassmorphism. The legacy `.glass` / `.glass-strong` utilities in `index.css` exist but must not be applied to brand surfaces.
- **Don't** use pure `#000` or pure `#fff` for text or major surfaces. Ink Deep (`#1A0A2E`) and Paper (`#FCFCFC`) carry the hue tint.
- **Don't** stack identical cards in a deck-of-six grid. Use the asymmetric bento layout or an editorial numbered list instead.
- **Don't** use em dashes ("—" as parenthetical glue) in UI copy. Commas, colons, periods, or parentheses. Em dashes are an AI-prose tell.
- **Don't** write headings in non-italic display type. The One-Italic Rule.
- **Don't** introduce a new font. DM Serif Display + Consolas is the entire family. Inter Variable and Epilogue Variable are loaded as legacy and must not be referenced in new components.
- **Don't** decorate KI/AI references with neon, glow orbs, or "Powered by AI" badges. The buzzword-cosplay anti-pattern.
- **Don't** use stock photos of laughing teams in front of laptops. Founder portraits, case-study screenshots, real artifacts only.
