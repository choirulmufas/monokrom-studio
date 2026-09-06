# CM Studio Design System

## 1. Design Philosophy

CM Studio uses a **Modern Digital Studio / Bold Corporate Tech** visual direction.

The design should communicate:

> Modern technology + professional service + creative digital experience.

The interface should feel premium without becoming overly complicated.

---

# 2. Visual Principles

### 2.1 Clean

Use generous whitespace and avoid unnecessary visual elements.

### 2.2 Bold

Use strong typography and clear visual hierarchy.

### 2.3 Modern

Use contemporary layouts, subtle gradients, rounded cards, and restrained animations.

### 2.4 Human

The website should feel approachable rather than cold or overly corporate.

### 2.5 Technology-focused

Technology-related visual elements can be used to reinforce CM Studio's identity.

---

# 3. Color System

## Primary

```text
Primary Blue
#155EEF
```

Use for:

* Primary buttons
* Links
* Active states
* Important highlights
* Icons
* Visual accents

---

## Dark

```text
Dark Navy
#0B1F3A
```

Use for:

* Main headings
* Navbar
* Footer
* Dark sections
* Strong text

---

## Accent

```text
Accent Red
#EF4444
```

Use sparingly for:

* CTA accents
* Important highlights
* Small decorative elements
* Status indicators
* Visual emphasis

Red should never dominate the interface.

---

## Background

```text
White
#FFFFFF

Light Blue
#F5F8FF
```

Use Light Blue for alternating sections.

---

## Text

```text
Primary Text
#172033

Secondary Text
#667085

Muted Text
#98A2B3
```

---

# 4. Color Ratio

Recommended visual distribution:

```text
Blue       60%
White      30%
Red        10%
```

This is a visual guideline, not a strict mathematical requirement.

The interface should remain predominantly blue and white.

---

# 5. Typography

Recommended font:

```text
Inter
```

Fallback:

```text
system-ui, sans-serif
```

Alternative modern fonts may be used if they maintain the same visual character.

---

## Heading Scale

### Display

```text
64px
line-height: 1.05
font-weight: 700–800
```

### H1

```text
48px
line-height: 1.1
font-weight: 700
```

### H2

```text
40px
line-height: 1.15
font-weight: 700
```

### H3

```text
28px
line-height: 1.25
font-weight: 600–700
```

### H4

```text
22px
line-height: 1.3
font-weight: 600
```

---

## Body

### Large

```text
20px
line-height: 1.6
```

### Normal

```text
16px
line-height: 1.6
```

### Small

```text
14px
line-height: 1.5
```

---

# 6. Responsive Typography

Desktop:

```text
Hero: 64px
H1: 48px
H2: 40px
```

Tablet:

```text
Hero: 52px
H1: 42px
H2: 36px
```

Mobile:

```text
Hero: 40px
H1: 36px
H2: 30px
```

Typography should remain readable and visually balanced.

---

# 7. Spacing System

Use a consistent spacing scale.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
120px
```

Avoid arbitrary spacing values unless necessary.

---

# 8. Container

Recommended maximum width:

```text
1280px
```

Standard horizontal padding:

Desktop:

```text
32px
```

Tablet:

```text
24px
```

Mobile:

```text
20px
```

---

# 9. Border Radius

Small:

```text
8px
```

Medium:

```text
12px
```

Large:

```text
16px
```

Extra Large:

```text
24px
```

Cards generally use:

```text
16px – 24px
```

Buttons generally use:

```text
10px – 12px
```

---

# 10. Buttons

## Primary Button

Background:

```text
#155EEF
```

Text:

```text
#FFFFFF
```

Behavior:

* Slight upward movement on hover.
* Subtle shadow.
* Smooth transition.

Example:

```text
[ Start a Project → ]
```

---

## Secondary Button

Transparent or white background with a blue border.

Example:

```text
[ View Our Work ]
```

---

## Accent Button

Red should only be used for selected high-priority CTAs.

```text
#EF4444
```

Do not use red for every button.

---

# 11. Cards

Cards should use:

* White background
* 16–24px border radius
* Subtle border
* Very soft shadow
* Generous padding

Example:

```text
┌──────────────────────────────┐
│        ICON                  │
│                              │
│  Web Development             │
│                              │
│  Modern web solutions...     │
│                              │
│  Learn More →                │
└──────────────────────────────┘
```

---

# 12. Shadows

Use subtle shadows.

Avoid heavy shadows.

Recommended conceptual levels:

```text
Shadow Small
Shadow Medium
Shadow Large
```

Shadows should provide depth rather than dominate the design.

---

# 13. Gradients

Gradients may be used selectively.

Preferred direction:

```text
Blue → lighter Blue
```

Blue-to-red gradients should be used very sparingly.

Avoid using gradients on every section.

---

# 14. Hero Visual

The Hero should contain a technology-oriented visual.

Possible visual language:

* 3D abstract object
* Floating UI cards
* Browser window
* Mobile device
* Geometric shapes
* Code snippets
* Connection lines
* Small red accent elements

The visual should have:

* Blue as dominant color
* White highlights
* Small red accents
* Soft glow
* Depth

Avoid generic stock photography.

---

# 15. Section Design

Each section should have clear visual separation.

Possible pattern:

```text
White
↓
Light Blue
↓
White
↓
Dark Navy
↓
White
```

Not every section needs a different background.

---

# 16. Navigation

Desktop:

```text
CM STUDIO

Home
About
Services
Portfolio
Process
Contact

[ Let's Talk ]
```

Navbar should be:

* Minimal
* Clean
* Sticky
* Responsive

Mobile navigation should use a hamburger menu.

---

# 17. Icons

Use:

```text
Lucide React
```

Icons should generally use:

* 20px
* 24px
* 32px
* 40px

Avoid mixing multiple icon libraries.

---

# 18. Animation

Animation library:

```text
Framer Motion
```

Preferred animation:

```text
opacity: 0 → 1
y: 20 → 0
```

Duration:

```text
0.3s – 0.7s
```

Use staggered animations for groups of cards where appropriate.

Avoid excessive animations.

---

# 19. Hover States

Interactive elements should clearly respond to hover.

Examples:

```text
Button
→ slight translateY(-2px)

Card
→ slight translateY(-4px)

Portfolio
→ image scale(1.03)

Link
→ color transition
```

Transitions should feel smooth and subtle.

---

# 20. Portfolio Design

Portfolio cards should be visually prominent.

Structure:

```text
┌──────────────────────────────┐
│                              │
│       PROJECT IMAGE          │
│                              │
├──────────────────────────────┤
│ Web Development              │
│                              │
│ Project Name                 │
│ Short description...         │
│                              │
│ Laravel · React · MySQL      │
│                              │
│ View Project →               │
└──────────────────────────────┘
```

---

# 21. Process Design

The process section should visually communicate progression.

```text
01 Discover
      ↓
02 Plan
      ↓
03 Design
      ↓
04 Develop
      ↓
05 Test
      ↓
06 Launch
```

Desktop may use a horizontal timeline.

Mobile should use a vertical timeline.

---

# 22. Dark Sections

Dark Navy may be used for:

* Selected CTA
* Footer
* Hero alternative
* Highlight sections

Example:

```text
Background: #0B1F3A
Text: #FFFFFF
Accent: #155EEF / #EF4444
```

---

# 23. Imagery

Preferred imagery:

* Original project screenshots
* Product mockups
* UI previews
* Abstract technology illustrations
* 3D technology visuals

Avoid:

* Generic corporate stock photos
* Overused handshake images
* Low-quality illustrations
* Unrelated photography

---

# 24. Responsive Rules

Mobile design is not simply a smaller desktop layout.

On mobile:

* Stack columns vertically.
* Reduce typography.
* Reduce section spacing.
* Simplify decorative elements.
* Keep CTA accessible.
* Make cards full-width where appropriate.
* Ensure touch targets are comfortable.

---

# 25. Accessibility

Maintain readable contrast.

Do not communicate important information using color alone.

Interactive components must have clear states:

```text
Default
Hover
Focus
Active
Disabled
```

---

# 26. Design Anti-Patterns

Do not use:

* Excessive glassmorphism
* Excessive gradients
* Excessive animations
* Excessive red
* Tiny typography
* Crowded layouts
* Too many font families
* Random colors
* Unnecessary decorative elements
* Generic template-looking sections

---

# 27. Overall Visual Goal

The final website should feel like:

> A premium modern digital studio that understands technology, design, and business.

It should look custom-designed rather than generated from a generic template.
