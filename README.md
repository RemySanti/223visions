# 223 Visions - Atlanta Photography and Videography

Production-ready marketing site for **223 Visions**.

## Tech stack

React 18, Vite 6, Tailwind CSS 4, Framer Motion, React Router 7, react-helmet-async

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- public/ - logo, hero video, portfolio images
- scripts/ - portfolio generator (node scripts/generate-portfolio.mjs)
- src/ - components, pages, data, styles
- vercel.json - SPA rewrites at repository root

## Deploy on Vercel

1. Import the repo; leave Root Directory empty (app is at repo root).
2. Build Command: npm run build. Output Directory: dist. Install: npm install.
3. If the project was linked to a subfolder before, clear Root Directory in project settings.

## Routes

/, /services, /portfolio, /about, /contact, /service-areas, /landing, /thank-you

## License

Private - 223 Visions. All rights reserved.