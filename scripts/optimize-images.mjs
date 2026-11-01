// Builds web-sized portfolio images from the full-resolution originals.
// Source: portfolio-originals/<folder>/*  (not deployed)
// Output: public/portfolio/<folder>/<name>.jpg         — full size for the lightbox
//         public/portfolio/_thumbs/<folder>/<name>.webp — grid thumbnails
// Run: npm run optimize:images  (then node scripts/generate-portfolio.mjs)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcRoot = path.join(__dirname, '../portfolio-originals');
const outRoot = path.join(__dirname, '../public/portfolio');
const thumbRoot = path.join(outRoot, '_thumbs');

const FULL_MAX = 2400;
const THUMB_WIDTH = 800;
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const force = process.argv.includes('--force');

let written = 0;
let skipped = 0;
let srcBytes = 0;
let outBytes = 0;

function isFresh(out, src) {
  return !force && fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;
}

for (const folder of fs.readdirSync(srcRoot).sort()) {
  const dir = path.join(srcRoot, folder);
  if (!fs.statSync(dir).isDirectory()) continue;
  fs.mkdirSync(path.join(outRoot, folder), { recursive: true });
  fs.mkdirSync(path.join(thumbRoot, folder), { recursive: true });

  for (const file of fs.readdirSync(dir).sort()) {
    if (!exts.has(path.extname(file).toLowerCase())) continue;
    const src = path.join(dir, file);
    const base = path.parse(file).name;
    const full = path.join(outRoot, folder, `${base}.jpg`);
    const thumb = path.join(thumbRoot, folder, `${base}.webp`);
    srcBytes += fs.statSync(src).size;

    if (isFresh(full, src) && isFresh(thumb, src)) {
      skipped++;
    } else {
      // .rotate() applies EXIF orientation before metadata is stripped
      await sharp(src)
        .rotate()
        .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(full);
      await sharp(src)
        .rotate()
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: 74 })
        .toFile(thumb);
      written++;
    }
    outBytes += fs.statSync(full).size + fs.statSync(thumb).size;
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(
  `Optimized ${written} images (${skipped} up to date): ${mb(srcBytes)} MB originals → ${mb(outBytes)} MB served`
);
