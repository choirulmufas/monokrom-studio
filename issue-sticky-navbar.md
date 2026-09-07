# Feature - Sticky Navbar

## Objective

Keep the existing CM Studio Navbar visible at the top of the viewport across desktop, tablet, and mobile scrolling.

## Scope

- Preserve the existing logo, navigation, CTA, theme toggle, and mobile menu.
- Keep the CSS `position: sticky` behavior and existing z-index strategy.
- Add a subtle token-based shadow so the sticky surface remains visually distinct.
- Add anchor scroll offset so section headings are not hidden beneath the Navbar.

## Acceptance Criteria

- Navbar remains visible while scrolling up or down.
- Light and dark themes retain readable Navbar contrast.
- Mobile menu and theme toggle remain in the existing structure.
- No scroll listener, new dependency, fixed-position redesign, or horizontal overflow is introduced.
