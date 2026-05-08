#!/usr/bin/env node
/**
 * Generate raster assets that crawlers/iOS need (OG PNGs, apple-touch-icon).
 * SVG sources live in public/. PNGs are written next to them.
 *
 * Run: npm run images
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const jobs = [
  {
    name: 'og en',
    src: 'og-source-en.svg',
    out: 'og-image.png',
    width: 1200,
    height: 630,
  },
  {
    name: 'og es',
    src: 'og-source-es.svg',
    out: 'og-image-es.png',
    width: 1200,
    height: 630,
  },
  {
    name: 'apple-touch-icon',
    src: 'favicon.svg',
    out: 'apple-touch-icon.png',
    width: 180,
    height: 180,
  },
];

for (const job of jobs) {
  const srcPath = join(PUBLIC_DIR, job.src);
  const outPath = join(PUBLIC_DIR, job.out);
  const svg = await readFile(srcPath);
  const png = await sharp(svg, { density: 144 }).resize(job.width, job.height).png().toBuffer();
  await writeFile(outPath, png);
  console.log(`✓ generated ${job.out} from ${job.src}`);
}
