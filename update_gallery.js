const fs = require('fs');
const aspects = JSON.parse(fs.readFileSync('image_aspects.json', 'utf8'));
const allImages = [...aspects.horizontal, ...aspects.vertical, ...aspects.square];

let galleryCode = fs.readFileSync('src/components/GalleryGrid.tsx', 'utf8');
const stringified = JSON.stringify(allImages, null, 2);
galleryCode = galleryCode.replace(/const images = \[[\s\S]*?\];/, `const images = ${stringified};`);

fs.writeFileSync('src/components/GalleryGrid.tsx', galleryCode);
console.log('Updated GalleryGrid.tsx with ' + allImages.length + ' images.');
