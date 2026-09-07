# Issue #014 - Footer

## Objective

Add a clear, responsive Footer that closes the CM Studio website with brand context, navigation, services, and a useful next action.

## Scope

- Create a semantic `Footer` component and render it after CTA.
- Reuse existing navigation anchors and service data.
- Provide a contact/action column without inventing email, phone, address, or social URLs.
- Add a dynamic copyright year and responsive multi-column layout.

## Acceptance Criteria

- Footer is the final element in `App.jsx`.
- Internal links point only to existing sections.
- Services are rendered from `src/data/services.js`.
- No fake contact details or placeholder external social links are displayed.
- Footer remains readable and usable from mobile through desktop widths.
