# Issue #008 - Achievements / Statistics Section

## Objective
Add a credible Achievements / Statistics section directly after Services on `feature/achievements`.

## Scope
- Present four replaceable portfolio-oriented markers rather than unsupported company claims.
- Use a dark navy statistics band with white values, blue highlights, and restrained red accents.
- Keep statistic data in `src/data/achievements.js`.
- Reuse `Container`, `Section`, `Heading`, and `Card` components where appropriate.
- Render static values only; no animated counters or global animation work.
- Preserve Navbar, Hero, About, and Services behavior.

## Out Of Scope
Portfolio, Why Choose Us, process, testimonials, CTA, footer, and global animation work.

## Acceptance Criteria
- Section uses `id="achievements"` and a semantic `h2`.
- Copy clearly frames values as current portfolio scope markers, not historical company claims.
- Four statistics remain readable and accessible across supported breakpoints.
- No horizontal overflow at 320px, 375px, 768px, 1024px, or 1440px.
- `npm run build` and `npm run lint` pass.
