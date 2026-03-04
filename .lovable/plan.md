

## Problem

The `h1`-`h6` CSS rule (line 165-167 in `src/index.css`) sets `font-family: 'DM Serif Display'` but does NOT set `font-weight`. Browsers default headings to `font-weight: bold` (700), making them appear too thick.

DM Serif Display only ships in weight 400, so the browser is artificially bolding it (faux bold), which looks bad.

## Fix

Add `font-weight: 400 !important;` to the global `h1, h2, h3, h4, h5, h6` rule in `src/index.css`. This ensures all headings render at the font's natural weight across every page and component.

Single line change in `src/index.css`, line 165-167.

