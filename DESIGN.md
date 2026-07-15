---
name: Chronos Performance
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#f4ffc9'
  on-secondary: '#293500'
  secondary-container: '#c1ed00'
  on-secondary-container: '#546900'
  tertiary: '#00dce5'
  on-tertiary: '#003739'
  tertiary-container: '#001d1f'
  on-tertiary-container: '#009096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#c6f311'
  secondary-fixed-dim: '#add500'
  on-secondary-fixed: '#171e00'
  on-secondary-fixed-variant: '#3d4d00'
  tertiary-fixed: '#63f7ff'
  tertiary-fixed-dim: '#00dce5'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f53'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 48px
  stack-sm: 24px
---

## Brand & Style

The design system is engineered for a premium smartwatch market, targeting high-performance individuals who value both technical precision and aesthetic sophistication. The visual identity sits at the intersection of **High-End Minimalist** and **Corporate Modern**, evoking an emotional response of confidence, vitality, and technological superiority.

The style prioritizes clarity and focus, utilizing generous negative space to let product photography lead the narrative. It avoids unnecessary decorative elements, instead using light and depth to create a "tactile digital" feel. The interface feels like a natural extension of the hardware: sleek, responsive, and durable.

## Colors

The palette is anchored in a **Deep Navy (#0A192F)** and **Onyx Black (#121212)** to establish an immediate sense of premium quality and "pro-grade" gear. 

- **Primary:** Deep Navy serves as the core background for secondary sections and card surfaces, providing more depth than pure black.
- **Accents:** A vibrant **Lime (#D1FF26)** is the primary action color, used for health-related metrics and primary CTAs to spark motivation. A secondary **Electric Cyan (#00F5FF)** is reserved for technological features and connectivity indicators.
- **Neutrals:** Gradients of slate and charcoal are used to define boundaries without harsh lines, maintaining the dark-mode elegance.

## Typography

This design system utilizes a trio of contemporary sans-serifs to establish a high-tech hierarchy. **Hanken Grotesk** is used for impactful headlines, featuring tight tracking and heavy weights to convey strength. **Inter** provides maximum legibility for body copy, ensuring features are easy to digest. **Geist** is introduced for labels and technical data points, lending a developer-centric, precise feel to the specifications sections.

On mobile devices, display sizes are aggressively scaled down to ensure the "Performance" messaging remains punchy and fits within the viewport without excessive breaking.

## Layout & Spacing

The layout follows a **Fluid 12-Column Grid** on desktop and a **4-Column Grid** on mobile. The "Stack" rhythm is the primary driver of the landing page, using large vertical gaps (80px+) between major narrative shifts to prevent visual clutter.

Content should be centered in the container for hero sections and feature highlights, while technical specifications can utilize a split-grid layout (6 columns for image, 6 columns for data). Internal padding within cards should be generous (min 32px) to maintain the premium, airy feel.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional drop shadows. Surfaces are defined by subtle shifts in background luminosity.
- **Level 0 (Base):** Deep Navy/Black background.
- **Level 1 (Cards):** A slightly lighter shade of navy with a 1px low-opacity border (White at 5% opacity).
- **Level 2 (Active Elements):** Soft, diffused glow effects using the accent colors (Lime/Cyan) behind elements to simulate the light of a screen.

Shadows, where used, are "Ambient Shadows": extremely large blur radius (40px+), very low opacity (15%), and tinted with the Primary color to avoid a "dirty" look on dark backgrounds.

## Shapes

The shape language reflects the industrial design of the smartwatch hardware. We use **Rounded (0.5rem base)** corners to balance professional rigidity with ergonomic comfort. 

Large containers and feature cards use `rounded-xl` (1.5rem) to create a friendly, modern frame for high-resolution imagery. Buttons follow a "Squircle" aesthetic—highly rounded but not quite a full pill—to maintain a sophisticated profile.

## Components

### Buttons
- **Primary:** Solid Lime background with Navy text. Bold weight. Slight "glow" on hover using a drop-shadow with the Lime color.
- **Secondary:** Outlined with Cyan, or Ghost style with Cyan text.

### Feature Chips
Small, `rounded-xl` badges with a dark glass background and thin Cyan borders. Used to highlight technical specs like "50M Water Resistant" or "7-Day Battery."

### Cards
Feature cards should utilize a backdrop-blur (12px) if placed over secondary background images. Content inside cards should be left-aligned with `label-caps` used for category headers.

### Input Fields
Minimalist dark fields with only a bottom border that glows Cyan when focused. 

### Data Visualization
Charts and progress rings must use the Lime color for "Positive/Health" data and Cyan for "Tech/System" data. Line weights for icons and data strokes must be consistent (1.5px or 2px) to match the "thin line" aesthetic.