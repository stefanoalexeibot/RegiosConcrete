const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/gallery',
  'public/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.50 AM',
  'public/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.54 AM',
  'public/images/gallery/WhatsApp Unknown 2026-03-24 at 10.10.58 AM'
];

const results = { horizontal: [], vertical: [], square: [] };

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (!file.endsWith('.jpeg') && !file.endsWith('.jpg')) return;
    const fullPath = path.join(dir, file);
    try {
      const dimensions = sizeOf(fullPath);
      const publicPath = fullPath.substring(fullPath.indexOf('public') + 6).replace(/\\/g, '/');
      if (dimensions.width > dimensions.height * 1.1) {
        results.horizontal.push(publicPath);
      } else if (dimensions.height > dimensions.width * 1.1) {
        results.vertical.push(publicPath);
      } else {
        results.square.push(publicPath);
      }
    } catch (e) {
      console.log(e);
    }
  });
});

console.log(JSON.stringify(results, null, 2));
fs.writeFileSync('image_aspects.json', JSON.stringify(results, null, 2));
