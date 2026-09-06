# Issue #007 - Services Section

## Objective
Add the CM Studio Services section directly after About on `feature/services`.

## Scope
- Present five core services: Web Development, Mobile App Development, UI/UX Design, Software Quality Assurance, and Digital Product Development.
- Keep service copy in `src/data/services.js`.
- Use Lucide icons and the reusable Card, Container, Section, and Heading components.
- Provide a restrained featured treatment for Web Development.
- Add responsive one, two, and three-column layouts with subtle hover states.
- Preserve Navbar, Hero, and About behavior.

## Out Of Scope
Achievements, portfolio, Why Choose Us, process, testimonials, CTA, footer, and global animation work.

## Acceptance Criteria
- Section uses `id="services"` and a semantic `h2`.
- All services are easy to scan and use consistent cards.
- Icons are decorative and do not add confusing screen-reader output.
- No horizontal overflow at 320px, 375px, 768px, 1024px, or 1440px.
- `npm run build` and `npm run lint` pass.
