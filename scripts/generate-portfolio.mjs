import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '../public/portfolio');

const meta = {
  weddings: { filter: 'Hybrid', category: 'Hybrid', titlePrefix: 'Wedding' },
  church: { filter: 'Photography', category: 'Photo', titlePrefix: 'Church' },
  events: { filter: 'Photography', category: 'Photo', titlePrefix: 'Event' },
  portrait: { filter: 'Photography', category: 'Photo', titlePrefix: 'Portrait' },
  'video-productions': {
    filter: 'Videography',
    category: 'Video',
    titlePrefix: 'Video Production',
  },
};

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']);
let id = 1;
const items = [];

for (const folder of Object.keys(meta).sort()) {
  const dir = path.join(root, folder);
  const files = fs.readdirSync(dir).filter((f) => exts.has(path.extname(f))).sort();
  const m = meta[folder];

  files.forEach((file, index) => {
    const enc = encodeURIComponent(file);
    items.push({
      id: id++,
      title: `${m.titlePrefix}${files.length > 1 ? ` ${index + 1}` : ''}`,
      category: m.category,
      filter: m.filter,
      folder,
      image: `/portfolio/${folder}/${enc}`,
      thumb: `/portfolio/${folder}/${enc}`,
    });
  });
}

function pickHomeFeatured(all) {
  const picks = [
    ['weddings', 3],
    ['portrait', 3],
    ['church', 2],
    ['events', 2],
    ['video-productions', 2],
  ];
  const featured = [];
  for (const [folder, count] of picks) {
    featured.push(...all.filter((i) => i.folder === folder).slice(0, count));
  }
  return featured.length >= 12 ? featured.slice(0, 12) : all.slice(0, 12);
}

const homeItems = pickHomeFeatured(items);

const header = `// Auto-generated — run: node scripts/generate-portfolio.mjs\n// Source: public/portfolio (${items.length} images)\n\n`;
const body = `export const portfolioItems = ${JSON.stringify(items, null, 2)};\n\nexport const homePortfolioItems = ${JSON.stringify(homeItems, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/portfolioItems.js'), header + body);
console.log(`Generated ${items.length} portfolio items`);
