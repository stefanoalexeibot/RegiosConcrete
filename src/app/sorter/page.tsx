import fs from 'fs';
import path from 'path';
import SorterClient from './SorterClient';

export const dynamic = 'force-dynamic';

export default function GallerySorter() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  
  let files: string[] = [];
  try {
    files = fs.readdirSync(galleryDir)
      .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  return <SorterClient files={files} />;
}
