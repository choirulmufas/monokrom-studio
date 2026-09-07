# Issue #010 - Why Choose Us

## Objective
Add a professional "Why Choose Us" section to the CM Studio single-page website on `feature/why-choose-us`.

## Scope
- Add a semantic `WhyChooseUs` section after Portfolio.
- Keep the feature content data-driven in `src/data/whyChooseUs.js`.
- Prepare five concise value-driven reasons that explain why clients may choose CM Studio.
- Use the existing `Container`, `Section`, `Heading`, `Card`, and `Badge` components where appropriate.
- Include Lucide icons for each value and keep the copy credible, modern, and human.
- Add a supporting visual that fits the current CM Studio design language.

## Out Of Scope
Backend services, database, authentication, CMS, fabricated claims, unrelated refactors, and changes to earlier sections unless needed for integration.

## Layout And Accessibility
- Use `<section id="why-choose-us">` with semantic heading structure.
- Render a strong desktop layout with a supporting visual and a feature-card grid.
- Collapse to a comfortable single-column layout on mobile.
- Preserve visible keyboard focus states.
- Avoid horizontal overflow at 320px, 375px, 768px, 1024px, and 1440px.
- Keep decorative icons and visuals appropriately hidden from assistive technology.

## Acceptance Criteria
- Why Choose Us appears directly after Portfolio in `App.jsx`.
- Feature data is separated from the component structure.
- Five clear value propositions are displayed.
- The section follows the CM Studio design system with restrained blue, navy, red, and light-blue accents.
- Existing Navbar, Hero, About, Services, Achievements, and Portfolio behavior is preserved.
- `npm run build` passes.
- `npm run lint` passes.
- Development server and responsive visual checks are completed before the issue is marked complete.
