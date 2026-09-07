# Issue #009 - Portfolio / Recent Projects

## Objective
Add a professional Portfolio / Recent Projects section to the CM Studio single-page website on `feature/portfolio`.

## Scope
- Add a semantic `Portfolio` section after Achievements.
- Keep portfolio content data-driven in `src/data/projects.js`.
- Prepare approximately six replaceable portfolio/demo projects.
- Show each project's visual, category, title, short description, technology tags, and an optional project CTA.
- Use existing `Container`, `Section`, `Heading`, `Card`, and `Badge` components where appropriate.
- Use CSS-based or local visuals when a real project image is unavailable; do not use random or copyrighted assets.
- Support the categories Web Development, Mobile App, UI/UX Design, Digital Product, and Software Quality Assurance.
- Add only simple category filtering if it is required by the existing product requirements; prioritize a clean maintainable grid.

## Out Of Scope
Backend services, database, authentication, CMS, client claims without evidence, fabricated project URLs, and unrelated refactors.

## Layout And Accessibility
- Use `<section id="portfolio">` with a semantic heading.
- Render three cards per row on desktop where space allows, two on tablet, and one on mobile.
- Preserve visible keyboard focus states and usable CTA targets on mobile.
- Avoid horizontal overflow at 320px, 375px, 768px, 1024px, and 1440px.
- Provide meaningful `alt` text for informative images and hide decorative visuals from assistive technology.

## Acceptance Criteria
- Portfolio appears directly after Achievements in `App.jsx`.
- Project data is separated from the component structure.
- At least six clearly labeled demo or portfolio projects are displayed.
- Cards follow the CM Studio design system with restrained blue, navy, red, and light-blue accents.
- Existing Navbar, Hero, About, Services, and Achievements behavior is preserved.
- `npm run build` passes.
- `npm run lint` passes.
- Development server and responsive visual checks are completed before the issue is marked complete.