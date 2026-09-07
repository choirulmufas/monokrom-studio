# Dark Mode

## Objective

Add a maintainable Light Mode / Dark Mode toggle that feels native to the CM Studio design system.

## Scope

- Add an accessible theme toggle to the desktop and mobile Navbar.
- Store manual theme choices in `localStorage`.
- Respect the system color preference when no manual choice exists.
- Drive both themes through shared CSS variables and `data-theme` on `<html>`.
- Keep content, layout, responsive behavior, and reduced-motion support unchanged.

## Acceptance Criteria

- Theme toggle works with mouse and keyboard and exposes an action-based accessible label.
- Reloading preserves a manually selected theme.
- Dark mode provides readable surfaces, text, borders, accents, cards, CTA, and Footer.
- No duplicate light/dark components or new dependency is introduced.
- Existing page sections and animations continue to work in both themes.
