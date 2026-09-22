# FinFlow — Landing Page (Web Dev Build)

A pixel-close front-end build of the **FinFlow** personal finance landing page, recreated from a UI design reference in semantic HTML, hand-written CSS, and vanilla JS — no framework or build step required. Built as a portfolio piece to accompany the FinFlow product design work.

**🔗 Live demo:** _add your hosted link here (GitHub Pages / Netlify / Vercel)_
**🎨 Design reference:** _add your Figma/Behance link here_
**📐 Design tokens:** see [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md)

---

## Sections

| Section | Description |
|---|---|
| Hero | Headline, CTAs, trust stats, and a full interactive-style dashboard mockup (sidebar, stat tiles, bar chart, donut chart, transactions, goals) — all built with CSS, no image assets |
| Features | 4-card feature grid |
| Mobile App | Two overlapping phone mockups (balance screen + analytics screen) with app store badges |
| Blog | 3-card "latest posts" grid |
| Footer | 3 link columns, newsletter signup, social links |

## Tech stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (design tokens), CSS Grid & Flexbox, `conic-gradient` donut chart, no framework
- **Vanilla JavaScript** — mobile nav toggle + newsletter form handling
- **Google Fonts** — Inter

No build tools, no dependencies, no image assets — every visual (charts, phone frames, avatars) is built in CSS/SVG. Open `index.html` directly, or serve it with any static server.

## Project structure

```
finflow-landing/
├── index.html          # All page markup/sections
├── css/
│   └── style.css        # Design tokens + all component/section styles
├── js/
│   └── script.js        # Mobile menu toggle + newsletter form
├── DESIGN-SYSTEM.md     # Color, type, spacing, and component reference
└── README.md
```

## Running locally

```bash
# Option 1 — just open it
open index.html

# Option 2 — serve it (recommended, avoids any relative-path issues)
npx serve .
# or
python3 -m http.server 5500
```

## Deploying

Static site — deploys anywhere for free:

- **GitHub Pages:** Settings → Pages → deploy from `main` branch, root folder.
- **Netlify / Vercel:** drag-and-drop the folder or connect the repo — zero config needed.

## Responsive breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1080px` | Full multi-column layout |
| `≤ 1080px` | Hero, dashboard panels, and mobile-app section stack to single column |
| `≤ 860px` | Nav collapses to a mobile menu; dashboard sidebar hides |
| `≤ 560px` | Single-column feature/footer grids, tighter hero type scale |

## License

Free to use for portfolio/personal purposes.
