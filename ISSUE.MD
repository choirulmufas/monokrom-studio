# CM Studio — Issue Tracker

## Project Rule

All implementation must follow:

* `PRD.md`
* `DESIGN_SYSTEM.md`

Before implementing an issue, the AI must read both documents.

Do not implement features outside the current issue unless explicitly requested.

---

# Phase 0 — Project Planning

## Issue #001 — Project Initialization

**Priority:** Critical

### Tasks

* [ ] Create React + Vite project
* [ ] Configure Tailwind CSS
* [ ] Install Lucide React
* [ ] Install Framer Motion
* [ ] Configure ESLint
* [ ] Configure project structure
* [ ] Verify `npm run dev`

### Acceptance Criteria

* Project starts successfully.
* No build errors.
* Dependencies are correctly installed.
* Basic folder structure follows PRD.

---

## Issue #002 — Design System Setup

**Priority:** Critical

### Tasks

* [ ] Configure CM Studio colors
* [ ] Configure typography
* [ ] Configure spacing
* [ ] Configure border radius
* [ ] Configure shadows
* [ ] Configure responsive breakpoints
* [ ] Configure reusable design tokens

### Acceptance Criteria

* Design tokens follow `DESIGN_SYSTEM.md`.
* Components can use CM Studio colors consistently.
* No random colors are introduced.

---

# Phase 1 — Base Components

## Issue #003 — Create Base Components

**Priority:** High

### Tasks

* [ ] Create Container component
* [ ] Create Button component
* [ ] Create SectionHeading component
* [ ] Create Badge component
* [ ] Create reusable Card component

### Acceptance Criteria

* Components are reusable.
* Components follow the design system.
* No unnecessary duplication exists.

---

# Phase 2 — Navigation

## Issue #004 — Implement Navbar

**Priority:** Critical

### Tasks

* [ ] Create desktop navbar
* [ ] Add CM Studio logo
* [ ] Add navigation links
* [ ] Add Let's Talk CTA
* [ ] Implement sticky behavior
* [ ] Implement mobile menu
* [ ] Add smooth scrolling
* [ ] Add active/hover states

### Acceptance Criteria

* Navbar works on desktop.
* Navbar works on mobile.
* Mobile menu opens and closes correctly.
* Links navigate to sections.
* CTA is clearly visible.

---

# Phase 3 — Hero

## Issue #005 — Implement Hero Section

**Priority:** Critical

### Tasks

* [ ] Implement headline
* [ ] Implement supporting description
* [ ] Add primary CTA
* [ ] Add secondary CTA
* [ ] Create technology visual
* [ ] Add subtle entrance animation
* [ ] Implement responsive layout

### Acceptance Criteria

* Hero is visually dominant.
* Headline follows design system.
* CTAs are clearly visible.
* Technology visual does not overpower content.
* Mobile layout works correctly.

---

# Phase 4 — About

## Issue #006 — Implement About Section

**Priority:** High

### Tasks

* [ ] Create About section
* [ ] Add company introduction
* [ ] Add supporting visual
* [ ] Add company highlights
* [ ] Add animation

### Acceptance Criteria

* Visitor can understand CM Studio within a few seconds.
* Layout works responsively.
* Content is easy to scan.

---

# Phase 5 — Services

## Issue #007 — Implement Services Section

**Priority:** Critical

### Tasks

* [ ] Create services data
* [ ] Create ServiceCard component
* [ ] Add service icons
* [ ] Add service descriptions
* [ ] Add hover interactions
* [ ] Implement responsive grid

### Services

* [ ] Web Development
* [ ] Mobile App Development
* [ ] UI/UX Design
* [ ] Software Quality Assurance
* [ ] Digital Solutions

### Acceptance Criteria

* All services are displayed.
* Cards are consistent.
* Hover states work.
* Responsive grid works.

---

# Phase 6 — Statistics

## Issue #008 — Implement Achievements Section

**Priority:** Medium

### Tasks

* [ ] Create statistics data
* [ ] Create reusable StatCard
* [ ] Add statistics
* [ ] Add optional number animation
* [ ] Implement responsive layout

### Acceptance Criteria

* Statistics are visually clear.
* Numbers can be modified from centralized data.

---

# Phase 7 — Portfolio

## Issue #009 — Implement Portfolio Section

**Priority:** Critical

### Tasks

* [ ] Create project data
* [ ] Create PortfolioCard
* [ ] Add project image
* [ ] Add project category
* [ ] Add technology tags
* [ ] Add project description
* [ ] Add View Project CTA
* [ ] Implement category filters
* [ ] Add filtering animation

### Categories

* [ ] All
* [ ] Web
* [ ] Mobile
* [ ] UI/UX
* [ ] Digital Solution

### Acceptance Criteria

* Portfolio displays correctly.
* Category filtering works without reload.
* Project cards are responsive.
* Project data is separated from UI.

---

# Phase 8 — Why Choose Us

## Issue #010 — Implement Why Choose Us

**Priority:** High

### Tasks

* [ ] Create feature data
* [ ] Create feature cards
* [ ] Add icons
* [ ] Add descriptions
* [ ] Add visual
* [ ] Add animations

### Features

* [ ] User-Centered
* [ ] Modern Technology
* [ ] Quality Focused
* [ ] Collaborative
* [ ] Scalable

### Acceptance Criteria

* Section clearly communicates CM Studio's advantages.
* Visual hierarchy is strong.

---

# Phase 9 — Process

## Issue #011 — Implement Working Process

**Priority:** High

### Tasks

* [ ] Create process data
* [ ] Create ProcessStep component
* [ ] Implement desktop timeline
* [ ] Implement mobile vertical timeline
* [ ] Add step indicators
* [ ] Add animations

### Process

```text
01 Discover
02 Plan
03 Design
04 Develop
05 Test
06 Launch
```

### Acceptance Criteria

* Six steps are displayed.
* Sequence is visually clear.
* Desktop and mobile layouts work.

---

# Phase 10 — Testimonials

## Issue #012 — Implement Testimonials

**Priority:** Medium

### Tasks

* [ ] Create testimonial data
* [ ] Create TestimonialCard
* [ ] Add client name
* [ ] Add role/company
* [ ] Add testimonial
* [ ] Add rating
* [ ] Add avatar placeholder
* [ ] Add responsive layout

### Acceptance Criteria

* Testimonials are easy to read.
* Content can be replaced without modifying component logic.

---

# Phase 11 — CTA

## Issue #013 — Implement CTA Section

**Priority:** Critical

### Tasks

* [ ] Create CTA section
* [ ] Add headline
* [ ] Add supporting text
* [ ] Add Let's Talk button
* [ ] Implement visual emphasis
* [ ] Add animation

### Acceptance Criteria

* CTA is visually prominent.
* CTA works on mobile.
* CTA follows CM Studio color system.

---

# Phase 12 — Footer

## Issue #014 — Implement Footer

**Priority:** High

### Tasks

* [ ] Add CM Studio logo
* [ ] Add company description
* [ ] Add navigation
* [ ] Add services
* [ ] Add contact information
* [ ] Add social media links
* [ ] Add copyright
* [ ] Implement responsive layout

### Acceptance Criteria

* Footer contains required information.
* Links are accessible.
* Layout works on mobile.

---

# Phase 13 — Global UX

## Issue #015 — Implement Global Animations

**Priority:** Medium

### Tasks

* [ ] Add scroll reveal
* [ ] Add button hover
* [ ] Add card hover
* [ ] Add portfolio transition
* [ ] Add navbar transition
* [ ] Respect reduced-motion preferences where appropriate

### Acceptance Criteria

* Animations are smooth.
* Animations do not interfere with usability.
* No excessive animations.

---

# Phase 14 — Responsive QA

## Issue #016 — Responsive Testing

**Priority:** Critical

### Devices

* [ ] 1440px Desktop
* [ ] 1280px Desktop
* [ ] 1024px Tablet
* [ ] 768px Tablet
* [ ] 390px Mobile
* [ ] 375px Mobile
* [ ] 320px Mobile

### Tasks

* [ ] Check navbar
* [ ] Check hero
* [ ] Check services
* [ ] Check portfolio
* [ ] Check process
* [ ] Check testimonials
* [ ] Check CTA
* [ ] Check footer
* [ ] Fix overflow
* [ ] Fix spacing
* [ ] Fix typography

### Acceptance Criteria

No:

* Horizontal scrolling
* Overlapping content
* Broken images
* Unreadable text
* Unusable buttons

---

# Phase 15 — Accessibility QA

## Issue #017 — Accessibility Audit

**Priority:** High

### Tasks

* [ ] Check heading hierarchy
* [ ] Check image alt text
* [ ] Check button labels
* [ ] Check keyboard navigation
* [ ] Check focus states
* [ ] Check color contrast
* [ ] Check semantic HTML

### Acceptance Criteria

No major accessibility issues.

---

# Phase 16 — Performance

## Issue #018 — Performance Optimization

**Priority:** High

### Tasks

* [ ] Optimize images
* [ ] Lazy-load non-critical images
* [ ] Remove unused dependencies
* [ ] Optimize animations
* [ ] Check bundle size
* [ ] Run Lighthouse

### Target

```text
Performance:     90+
Accessibility:   90+
Best Practices: 90+
SEO:             90+
```

---

# Phase 17 — SEO

## Issue #019 — SEO Implementation

**Priority:** High

### Tasks

* [ ] Add page title
* [ ] Add meta description
* [ ] Add Open Graph metadata
* [ ] Check heading hierarchy
* [ ] Add image alt text
* [ ] Add semantic HTML

### Acceptance Criteria

* Metadata is present.
* Page title is descriptive.
* SEO structure follows PRD.

---

# Phase 18 — Final QA

## Issue #020 — Final Quality Assurance

**Priority:** Critical

### Functional Testing

* [ ] Navbar links
* [ ] Mobile menu
* [ ] CTA buttons
* [ ] Portfolio filters
* [ ] Portfolio interactions
* [ ] Footer links

### Visual Testing

* [ ] Colors
* [ ] Typography
* [ ] Spacing
* [ ] Responsive layout
* [ ] Animations
* [ ] Images

### Technical Testing

* [ ] npm run build
* [ ] No console errors
* [ ] No broken imports
* [ ] No unused critical assets

---

# Phase 19 — Deployment

## Issue #021 — Production Deployment

**Priority:** Critical

### Tasks

* [ ] Create production build
* [ ] Fix build errors
* [ ] Configure deployment
* [ ] Deploy to Vercel
* [ ] Test production website
* [ ] Verify responsive layout
* [ ] Verify SEO metadata

### Acceptance Criteria

* Production website is accessible.
* Production build succeeds.
* No critical runtime errors.

---

# Vibe Coding Rules

## Rule 1 — Read Context First

Before modifying code, read:

```text
PRD.md
DESIGN_SYSTEM.md
issue.md
```

---

## Rule 2 — One Issue at a Time

Do not implement multiple unrelated issues simultaneously.

Example:

```text
GOOD

Issue #007
↓
Implement Services
↓
Test Services
↓
Review
↓
Commit
```

Avoid:

```text
BAD

"Build the entire website."
```

---

## Rule 3 — Inspect Before Modifying

Before changing existing code:

1. Inspect project structure.
2. Identify relevant files.
3. Understand existing components.
4. Explain planned changes.
5. Implement.

Do not overwrite existing code unnecessarily.

---

## Rule 4 — Reuse Components

Prefer:

```text
ServiceCard
PortfolioCard
Button
Container
SectionHeading
```

over duplicated markup.

---

## Rule 5 — Keep Data Separate

Repeated content should be stored in:

```text
src/data/
```

rather than hardcoded throughout components.

---

## Rule 6 — No Unrequested Features

Do not add:

* Authentication
* Backend
* Database
* CMS
* Extra pages
* Unrequested libraries

unless explicitly requested.

---

## Rule 7 — Preserve Existing Work

When modifying a completed section:

* Do not unnecessarily rewrite unrelated components.
* Do not remove existing functionality.
* Do not change the design system without approval.

---

## Rule 8 — Test After Implementation

After each issue:

```text
Implement
↓
Run
↓
Test
↓
Inspect
↓
Fix
↓
Mark issue complete
```

---

## Rule 9 — Explain Before Large Changes

For significant architectural changes, explain:

* What will change.
* Why it is necessary.
* Which files will change.
* Potential side effects.

Then implement.

---

## Rule 10 — Quality Over Speed

The objective is not to generate the largest amount of code.

The objective is to create:

* Clean code
* Maintainable components
* Consistent UI
* Good UX
* Responsive design
* High performance
* Production-ready implementation

---

# Definition of Done

An issue can only be marked complete when:

* [ ] Implementation is finished.
* [ ] Acceptance criteria are satisfied.
* [ ] No obvious UI problems exist.
* [ ] No console errors exist.
* [ ] Responsive behavior is checked.
* [ ] Existing functionality is not broken.
* [ ] Code follows the project architecture.
* [ ] Code follows `DESIGN_SYSTEM.md`.
* [ ] Code follows `PRD.md`.
