# Issue #006 - About Section

## Objective
Add the CM Studio About section directly after the Hero on `feature/about`.

## Scope
- Explain who CM Studio is and what it builds.
- Communicate the studio's design, technology, usability, and collaboration approach.
- Add an original digital product visual without external assets.
- Present concise principles: user focus, quality, collaboration, and scalable technology.
- Reuse `Container`, `Section`, `Heading`, `Button`, and `Card` where appropriate.
- Keep the section responsive from 320px through desktop.
- Preserve Navbar and Hero behavior.

## Out Of Scope
Services, achievements, portfolio, Why Choose Us, process, testimonials, CTA, footer, and global animation work.

## Acceptance Criteria
- Section uses `id="about"` and semantic heading hierarchy.
- About content is readable and easy to scan.
- Visual is original, lightweight, and accessible as decorative content.
- Values use existing UI components and Lucide icons.
- No horizontal overflow at supported breakpoints.
- `npm run build` and `npm run lint` pass.
