# Issue #015 - Global Animations & Micro-interactions

## Objective

Add one subtle, consistent motion system across CM Studio without turning the website into an animation-heavy experience.

## Scope

- Add shared duration and easing tokens.
- Reveal sections once when they enter the viewport using one native `IntersectionObserver`.
- Harmonize button, card, link, and icon feedback with short CSS transitions.
- Replace the Hero visual's continuous float with a one-time entrance animation.
- Respect `prefers-reduced-motion` while keeping all content visible.

## Acceptance Criteria

- No new animation dependency or new page section is introduced.
- Motion uses primarily opacity and transform, with short consistent timing.
- Interactive elements retain visible hover and keyboard focus states.
- Reduced-motion users see the same content without unnecessary motion.
- Existing layout and section order remain unchanged.
