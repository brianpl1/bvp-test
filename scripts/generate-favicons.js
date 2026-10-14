import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateFavicons() {
  const svgPath = path.resolve('public/favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 2. Generate favicon-32x32.png
  const png32Buffer = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  // 3. Generate favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  // 4. Generate favicon.ico (We can create a valid ICO file containing 16x16, 32x32, 48x48 PNGs)
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(size => sharp(svgBuffer).resize(size, size).png().toBuffer())
  );

  // Simple, compliant ICO generator containing PNG sub-images
  // Header: 2 bytes reserved (0), 2 bytes type (1 for ico), 2 bytes image count
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  let offset = 6 + pngBuffers.length * 16;
  const directoryEntries = [];

  for (let i = 0; i < pngBuffers.length; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset
    directoryEntries.push(entry);
    offset += buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...directoryEntries, ...pngBuffers]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // Also copy to root directory for dev server and direct root requests
  fs.copyFileSync('public/favicon.ico', 'favicon.ico');
  fs.copyFileSync('public/favicon.svg', 'favicon.svg');
  fs.copyFileSync('public/apple-touch-icon.png', 'apple-touch-icon.png');

  console.log('Successfully generated all favicons: SVG, ICO, 32x32, 16x16, apple-touch-icon!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
