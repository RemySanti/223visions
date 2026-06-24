import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const SITE_URL = 'https://www.223visions.com';
const today = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.9' },
];

const locationSource = readFileSync(join(root, 'src/data/locationPages.js'), 'utf8');
const areaSlugs = [...locationSource.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);

function urlEntry(path, changefreq = 'monthly', priority = '0.8') {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...STATIC_ROUTES.map((r) => urlEntry(r.path, r.changefreq, r.priority)),
  ...areaSlugs.map((slug) => urlEntry(`/areas/${slug}`, 'monthly', '0.8')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const robots = `# 223 Visions — https://www.223visions.com
User-agent: *
Allow: /

Disallow: /internal/
Disallow: /owner
Disallow: /landing
Disallow: /thank-you

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap, 'utf8');
writeFileSync(join(root, 'public/robots.txt'), robots, 'utf8');

console.log(`Wrote sitemap.xml (${STATIC_ROUTES.length + areaSlugs.length} URLs)`);
console.log('Wrote robots.txt');