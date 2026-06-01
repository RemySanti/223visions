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

1. **Hero video** — Replace `public/hero.mp4` to change the homepage background reel.
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

## Deploy on Vercel

This is a **Vite + React Router** SPA. `vercel.json` rewrites all routes to `index.html` so `/portfolio`, `/contact`, etc. work on refresh and direct links.

### Prerequisites

1. Code pushed to **GitHub** (repo: `223visions` or your fork).
2. A [Vercel account](https://vercel.com) connected to GitHub.
3. Portfolio images committed under `public/portfolio/` (large — first deploy may take a few minutes).

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new) → **Import** your GitHub repo.
2. **Root Directory** — click **Edit** and set:
   - `223-Visions-Figma`  
   (or `web` if you renamed the folder)
3. **Framework Preset** — should auto-detect **Vite**. If not, choose Vite manually.
4. **Build Command** — `npm run build` (default)
5. **Output Directory** — `dist` (default)
6. **Install Command** — `npm install` (default)
7. Click **Deploy**.

Every push to `main` redeploys production; other branches get **preview URLs**.

### Option B — Vercel CLI

```bash
cd 223-Visions-Figma   # or cd web
npm i -g vercel
vercel login
vercel link              # link to a new or existing project
vercel                   # preview deployment
vercel --prod            # production
```

### Custom domain (223visions.com)

1. Vercel project → **Settings** → **Domains**.
2. Add `223visions.com` and `www.223visions.com`.
3. At your DNS host, add the records Vercel shows (usually `A` + `CNAME` for `www`).
4. Wait for SSL (automatic, usually minutes).

### After deploy — checklist

| Task | Where |
|------|--------|
| Confirm all routes load (refresh `/portfolio`, `/services`) | Preview URL |
| Set production domain | Vercel → Domains |
| Google Tag Manager / Ads conversion on `/thank-you` | GTM container |
| Form submissions | Wire `ContactForm` to Formspree, Resend, or API route |
| Update `SITE_URL` in `src/data/constants.js` if domain differs | Code + redeploy |

### Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on `/portfolio` or refresh | Ensure `vercel.json` is in the **root directory** Vercel builds (same folder as `package.json`). |
| Build fails | Run `npm run build` locally; fix errors before pushing. |
| Images missing | Paths must be `/portfolio/...` under `public/`, not `src/`. |
| Repo too large / slow clone | Consider Git LFS for `public/portfolio` or host images on Vercel Blob / CDN later. |

## License

Private — © 223 Visions. All rights reserved.
