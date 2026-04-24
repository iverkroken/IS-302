# IS-302 Style Guide

Design rules for the IS-302 internship documentation site.
Follow these guidelines when making any UI changes.

---

## Color Palette

| Token       | Value     | Usage                              |
|-------------|-----------|-------------------------------------|
| `--ink`     | `#0a0a0a` | Page background                    |
| `--stone`   | `#111111` | Secondary background (mobile nav)  |
| `--ash`     | `#1c1c1e` | Card backgrounds                   |
| `--fog`     | `#2a2a2c` | Input backgrounds, subtle fills    |
| `--mist`    | `#3a3a3c` | Borders, disabled states           |
| `--silver`  | `#8e8e93` | Secondary text, metadata           |
| `--light`   | `#ebebf0` | Body text                          |
| `--snow`    | `#f5f5f7` | Headings, primary text             |
| `--accent`  | `#e8ff47` | Lime accent — CTAs, active states, tags |
| `--glow`    | `#b8ff00` | Accent hover state                 |
| `--warm`    | `#ff6b35` | Reserved for warnings/highlights   |

**Rules:**
- Never use pure white (`#ffffff`) — use `--snow` or `--light`
- The lime accent (`--accent`) is used sparingly: active nav links, tags, primary buttons, and highlight text
- Backgrounds layer from darkest (`--ink`) outward to `--ash` for cards

---

## Typography

| Token            | Family           | Usage                    |
|------------------|------------------|--------------------------|
| `--font-heading` | Syne             | All headings (h1–h4)     |
| `--font-display` | Space Grotesk    | Hero titles only         |
| `--font-body`    | DM Sans          | Body text, UI elements   |
| `--font-mono`    | JetBrains Mono   | Tags, labels, code, meta |

**Rules:**
- Page titles use `clamp(2.5rem, 5vw, 5rem)` — large and bold, never small
- Headings have `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.05`
- Body text uses `line-height: 1.7` for readability
- Mono labels are always uppercase with `letter-spacing: 0.08–0.14em`
- Use the `.mono` utility class for all tags and metadata labels

---

## Spacing

- Section padding (page top): `calc(var(--nav-h) + 80px)` — accounts for fixed navbar
- Page bottom padding: `120px`
- Between page header and content: `48px`
- Card padding: `18–20px`
- Grid gap: `20px`
- Container padding: `32px` (narrow), `40px` (wide)

---

## Layout

```css
/* Standard container — max 1200px */
.container { max-width: 1200px; padding: 0 32px; }

/* Wide container — full width for grids */
.container--wide { max-width: 100%; padding: 0 40px; }
```

- Use `.container` for text-heavy pages (Om oss, Dagbok, Status, Refleksjon)
- Use `.container--wide` for visual grids (Team page)
- All layouts are responsive — test at 420px, 700px, 1100px, 1440px

---

## Components

### Cards
```css
background: var(--ash);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 16px;
```
- Hover: `translateY(-4px)` + accent border glow
- Always use `overflow: hidden` on cards with images
- LinkedIn buttons and CTAs pin to card bottom with `margin-top: auto`

### Buttons
- Primary: `background: var(--accent); color: var(--ink)` — lime, dark text
- Secondary/cancel: transparent with subtle border
- Destructive: red-tinted border, no fill by default
- All buttons: `border-radius: 6px`, `font-size: 0.82–0.88rem`, `font-weight: 500`

### Forms
- Inputs: `background: var(--fog)`, `border-radius: 8px`, accent focus ring
- Focus: `border-color: rgba(232, 255, 71, 0.4)` — subtle lime glow

### Navbar
- Always-visible glass: `background: rgba(5, 5, 5, 0.75); backdrop-filter: blur(16px)`
- Becomes more opaque on scroll
- Active link: lime color + `font-weight: 600` + lime underline with glow

---

## Animations

- Entrance animations: GSAP `from` with `y: 60, opacity: 0, ease: 'expo.out', duration: 0.9`
- Always use `clearProps: 'all'` to clean up after animation
- Always use `gsap.context()` + `ctx.revert()` for cleanup — never `ScrollTrigger.getAll()`
- Stagger: `0.05–0.1s` between list items
- Hover transitions: `0.2–0.3s ease` for color/transform

---

## Responsive Breakpoints

| Breakpoint | Applies to                          |
|------------|-------------------------------------|
| `1100px`   | Team grid: 5 → 3 columns            |
| `900px`    | Navbar: desktop links → burger menu |
| `768px`    | Container: 32px → 20px padding      |
| `700px`    | Team grid: 3 → 2 columns            |
| `420px`    | Team grid: 2 → 1 column             |

---

## Contrast & Accessibility

- Body text on dark background: `--light` (`#ebebf0`) on `--ink` — high contrast
- Secondary text: `--silver` (`#8e8e93`) — use only for metadata, never for primary content
- Accent on dark: `--accent` (`#e8ff47`) on `--ink` — excellent contrast
- All interactive elements must have visible focus states
- Images need descriptive `alt` text; decorative elements get `aria-hidden="true"`

---

## Do Not

- Do not use pure black or pure white
- Do not add drop shadows heavier than `0 4px 24px rgba(0,0,0,0.4)`
- Do not use more than two font families on a single page
- Do not use the accent color for large background fills
- Do not hardcode content directly in JSX — use data files or localStorage
- Do not add inline styles except for dynamic values (GSAP, calculated positions)
