

# Sticky Draggable KI-Audit Bubble CTA

## What
A draggable floating bubble in the bottom-right corner that says "Kostenloser Audit sichern" and navigates to `/ki-audit` on click. The user can drag it around the screen freely.

## Where
- New component: `src/components/StickyAuditBubble.tsx`
- Rendered globally in `src/App.tsx` (outside Routes, hidden on `/ki-audit` itself)

## Design
- Fixed-position circular bubble (bottom-right, ~56px) with a pulsing glow effect
- Small label floating above: "Kostenloser Audit sichern" in a pill/tag
- Hard-edge design (rounded-none on label, round on bubble icon)
- Uses Framer Motion `drag` for free movement across screen with `dragConstraints` bound to viewport
- Click navigates to `/ki-audit` via `useNavigate`
- Subtle entrance animation (scale + fade in after 2s delay)
- Hidden on `/ki-audit` route to avoid redundancy

## Technical Details

**`StickyAuditBubble.tsx`**:
- `motion.div` with `drag` prop, `dragMomentum={false}`, `dragConstraints` referencing a viewport ref
- Inner: icon (Zap or Sparkles from lucide) + floating label text
- `useLocation` to hide on `/ki-audit`
- `onClick` with `navigate('/ki-audit')` (distinguish drag vs click via pointer distance)
- Z-index high enough to float above content but below modals

**`App.tsx`**: Add `<StickyAuditBubble />` inside `BrowserRouter`, after `Routes`.

