# Issue #013 - CTA (Call to Action)

## Objective

Add a strong but approachable call to action after Testimonials, giving visitors a clear next step while keeping the destination honest and maintainable.

## Scope

- Create a visually prominent CTA section using the existing design system.
- Add a primary action anchor at `#contact` and a secondary link to `#portfolio`.
- Keep the section responsive, keyboard accessible, and free of invented contact details.
- Use CSS decoration only; no new dependency or animation system.

## CTA Content

- Eyebrow: Let's build something great
- Heading: Have a project in mind?
- Primary CTA: Let's work together
- Secondary CTA: View our work

## Acceptance Criteria

- The CTA appears after Testimonials and before the future Footer section.
- The primary action has a valid in-page destination through the CTA's `#contact` anchor.
- Both links have clear accessible names and visible focus states.
- Layout stacks comfortably on mobile without horizontal overflow.
- Existing sections remain unchanged apart from the required integration.
