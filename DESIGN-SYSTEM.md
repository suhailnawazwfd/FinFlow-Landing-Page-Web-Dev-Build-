# FinFlow — Design System

Design tokens and component notes for the FinFlow marketing/landing site, extracted from the build in `css/style.css`.

## Color

| Token | Hex | Usage |
|---|---|---|
| `--green-600` | `#16a34a` | Primary brand, links, positive amounts, active nav state |
| `--green-500` | `#22c55e` | Gradient partner, chart bars |
| `--green-50` | `#eafbf1` | Pill backgrounds, icon tiles |
| `--mint-bg` | `#f2faf6` | Section backgrounds (hero, blog) |
| `--black` | `#0b1210` | Primary buttons, footer background, store badges |
| `--ink-900` | `#0f172a` | Headings, primary text |
| `--ink-700` | `#3f4a5c` | Body text (dark) |
| `--ink-500` | `#64748b` | Secondary/supporting text |
| `--ink-400` | `#94a3b8` | Muted/meta text |
| `--line` | `#e6ebe8` | Borders, dividers |
| `--red` | `#ef4444` | Negative/expense accents |
| `--blue` | `#3b82f6` | Chart category (Food) |
| `--purple` | `#a855f7` | Chart category (Shopping) |
| `--amber` | `#f59e0b` | Chart category (Bills), ratings |
| `--orange` | `#fb923c` | Chart category (Transport) |
| `--grey` | `#cbd5e1` | Chart category (Others) |

## Typography

- **Family:** Inter (400/500/600/700/800), loaded from Google Fonts.
- **Scale:**
  - H1 (hero): 2.9rem / 800 / -0.02em tracking
  - H2 (section): 2rem / 800
  - H3 (card title): ~1rem / 700
  - Body: 0.9–1.02rem / 400, `--ink-500`
  - Meta/small: 0.6–0.75rem, `--ink-400`

## Spacing & radius

- Base radius scale: `18px` (cards), `12px` (panels/inputs), `8px` (buttons/badges).
- Section vertical rhythm: ~90–100px top/bottom padding on desktop, collapsing on mobile breakpoints.

## Components

- **Buttons:** `.btn--primary` is solid black with a white label (not the brand green) — reserved for the single most important action per section. `.btn--ghost` is a bordered white button for secondary actions.
- **Eyebrow pill:** small rounded label (`--green-50` background, `--green-600` text) used above every section heading.
- **Stat cards:** white bordered tiles with a small colored icon tile, a bold value, and a muted label — reused in the hero stat row.
- **Dashboard mockup:** the hero's product preview — dark sidebar rail + light content area, stat tiles, mini bar chart, donut chart (built with `conic-gradient`, no image assets), transaction rows, and goal-progress bars.
- **Phone mockups:** two overlapping "device" frames built from a rounded dark shell + white `.phone__screen`, used in the Mobile App section — no image assets required.
- **Feature/blog cards:** consistent white-bordered card with `--radius-lg`, hover lift + shadow.

## Responsive breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1080px` | Full multi-column layout |
| `≤ 1080px` | Hero, dashboard lower panels, mobile-app section, footer columns collapse |
| `≤ 860px` | Nav collapses into mobile menu; sidebar hidden inside the dashboard mockup |
| `≤ 560px` | Single-column feature/footer grids, tighter hero type scale |

## Notes for a Webflow rebuild

- All tokens above map directly to Webflow **Style Variables** (color + a small radius/spacing scale).
- The **dashboard mockup** and **phone mockup** are the two components worth building as reusable Webflow **Components** — both are pattern-heavy (stat tiles, transaction rows, progress bars) and get reused conceptually across the product.
- The donut chart is CSS-only (`conic-gradient` + a masked circle); in Webflow this is easiest as a background-image conic-gradient set via a custom attribute, or swapped for an embedded SVG if you want per-segment interactivity.
- Grid sections (features, blog, footer columns) map 1:1 to Webflow's native **Grid** element.
