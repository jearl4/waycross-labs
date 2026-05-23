# Accessibility checklist

**Target standard:** WCAG 2.2 AA (covers Section 508, EN 301 549, ADA case law).

Automated scans (`npm run a11y`) catch ~30% of real failures. The rest are caught by going through this list before a release. Run it on both locales: `/` and `/es/`.

## Automated (CI also enforces)

- [ ] `npm run a11y` — 0 errors across both pages
- [ ] Lighthouse → Accessibility = 100 in both locales (Chrome DevTools, mobile + desktop)

> **Note on `[.pa11yci.json](../.pa11yci.json)` config**: axe-core's `color-contrast` rule is on the `ignore` list. axe returns "needs further review" (treated as failure by pa11y) for any text sitting over a CSS gradient, translucent overlay, or absolutely-positioned child — design patterns this site uses for editorial polish. The other runner (`htmlcs`) does deterministic contrast checking and continues to run, catching real failures. The manual contrast spot-check below is the human backstop for the cases axe can't compute.

## Keyboard

- [ ] Reload, press Tab once — the **Skip to content** link is visible and focused
- [ ] Activate it (Enter) — focus lands on `<main>`; next Tab goes to the first link inside the hero
- [ ] Tab through the page top to bottom — every interactive element receives a visible focus outline
- [ ] No focus trap; Shift+Tab walks back through the same elements in reverse
- [ ] At every focused element, the fixed header doesn't visually obscure it (scroll-margin-top covers in-page anchors)
- [ ] On the contact section, Tab moves between the two `<a class="ccard">` cards (each card is a single link, not a focus trap)

## Mobile navigation (≤768px viewport)

- [ ] Hamburger button appears, named "Open navigation menu" by screen readers
- [ ] Tab to it, Enter — panel opens, focus moves to first link, button is now "Close navigation menu" with `aria-expanded="true"`
- [ ] Esc closes the panel and returns focus to the trigger
- [ ] Click any link — panel closes, page scrolls to the section (with `scroll-margin-top` clearing the header)
- [ ] Resize past 768px while open — panel auto-closes

## Screen reader

Test with VoiceOver (macOS: `Cmd-F5`) or NVDA (Windows). On both `/` and `/es/`:

- [ ] **Rotor → Headings**: 1 × h1 (wordmark), 4 × h2 (About / Founder / Products / Contact), then h3s for the product card and each contact card. No skipped levels.
- [ ] **Rotor → Landmarks**: `banner`, `navigation` (primary), `main`, `contentinfo` — all present and labeled
- [ ] Each section is announced with its eyebrow + heading (via `aria-labelledby`) — e.g. "About, region, A workshop, not a factory."
- [ ] Theme toggle announces the *next* action: "Switch to dark theme" in light mode, "Switch to light theme" in dark mode
- [ ] Locale switcher announces current language with `current page` for the active locale
- [ ] All decorative SVGs are silent (`aria-hidden="true"`)

## Color & contrast

- [ ] All text/background pairs ≥ 4.5:1 (normal) or ≥ 3:1 (large text ≥ 18pt / 14pt bold). Verify both themes.
- [ ] All meaningful UI boundaries (card borders, button borders) ≥ 3:1 against their adjacent backgrounds (`--rule-strong`)
- [ ] Focus outline (`--clay` 2px) is ≥ 3:1 against every background it appears on

## Reduced motion

Enable: macOS → System Settings → Accessibility → Display → Reduce Motion.

- [ ] Reload — no slide-in reveal on hero elements; content appears in place
- [ ] Click an in-page anchor link — page jumps instantly (no smooth scroll)
- [ ] Click the theme toggle — instant swap (no fade transitions)

## Zoom & reflow

- [ ] Browser zoom to 200% at 1280px viewport — no horizontal scroll, no text clipping, mobile menu does not appear
- [ ] Browser zoom to 400% at 1280px — content reflows to a single column, all functionality remains reachable

## Forced colors (Windows High Contrast)

- [ ] Chrome DevTools → Rendering → Emulate CSS media feature `forced-colors: active`
- [ ] All interactive elements still have visible boundaries and focus outlines
- [ ] Text remains readable; no icon-only buttons lose their meaning

## Cross-locale

- [ ] All `aria-label`s on `/es/` are in Spanish (no English leaks)
- [ ] `<html lang>` matches the page locale on both pages
- [ ] Locale switcher swaps the page without losing focus context
