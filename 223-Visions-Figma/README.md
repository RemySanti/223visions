# 223 Visions — Atlanta Photography & Videography

Production-ready marketing site for **223 Visions**, Atlanta's hybrid photography and videography agency. Built for SEO, PPC conversion, and cinematic presentation.

## Tech stack

- React 18 (functional components + hooks)
- Vite 6
- Tailwind CSS 4
- Framer Motion
- React Router DOM 7
- react-helmet-async (SEO meta + JSON-LD)

## Project structure

```
├── public/           # Static assets (logo, portfolio images)
├── scripts/          # Build helpers (portfolio generator)
├── src/
│   ├── components/   # UI components
│   ├── data/         # Content & config
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Route pages
│   ├── styles/       # Global CSS & Tailwind theme
│   ├── App.jsx       # Router & layout
│   └── main.jsx      # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview
```

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — PPC landing zone |
| `/services` | Service detail blocks |
| `/portfolio` | Full masonry gallery + lightbox |
| `/about` | Brand story + team |
| `/contact` | Lead form + contact info |
| `/service-areas` | Local SEO page |
| `/landing` | PPC-only landing (minimal chrome, `noindex`) |
| `/thank-you` | GTM conversion thank-you page |

## PPC / GTM hooks

- `#conversion-anchor` — place above forms on `/contact` and `/landing`
- `/thank-you` — fire Google Ads conversion events here
- Home hero includes ad-copy-friendly subline pattern

## Customization

1. **Hero video** — Replace the empty `<source>` in `src/components/HeroSection.jsx` with your reel URL.
2. **Portfolio** — Images live in `public/portfolio/` (weddings, church, events, portrait, video-productions). After adding photos, run `node scripts/generate-portfolio.mjs` to refresh `src/data/portfolioItems.js`.
3. **OG image** — Set `DEFAULT_OG_IMAGE` in `src/data/constants.js`.
4. **Logo** — Replace `public/logo.png`.
5. **Form backend** — Wire `ContactForm` submit to your API, Formspree, or CRM.

## Brand colors (from logo)

- Black: `#000000`
- Off-white: `#f5f5f5`
- Vibrant red: `#e60000` (primary CTAs, accents)
- Magenta: `#e6007e` (secondary accents, gradients)

Defined in `src/styles/globals.css` via Tailwind `@theme`.

## License

Private — © 223 Visions. All rights reserved.
