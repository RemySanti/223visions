# 223 Visions
Marketing site for 223 Visions, Atlanta photography + videography (owner Christian). Market Motion client.

- **Repo:** RemySanti/223visions (`main`) · **Deploy:** Vercel, root dir = repo root, build `npm run build`, output `dist`
- **Stack:** React 18, Vite 6, Tailwind 4, Framer Motion, React Router 7, react-helmet-async, Resend (serverless `api/`)
- `vercel.json` rewrites `/api/*` to functions, everything else to `index.html` (SPA).
- Routes: /, /services, /portfolio, /about, /contact, /service-areas, /landing (ads LP), /thank-you
- `node scripts/generate-portfolio.mjs` builds portfolio data; `npm run generate:sitemap`.
- Figma source in `223-Visions-Figma/`. Contact email goes through Resend.

## Working here
- Owner: Remy Santi (Market Motion Agency). Commits as Santi Consulting.
- Never commit `.env.local`; add new env vars to `.env.example` and to Vercel.
- Run `npm run build` before saying a change is done.
