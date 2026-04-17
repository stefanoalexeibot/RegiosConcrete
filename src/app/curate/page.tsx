import fs from 'fs';
import path from 'path';
import CuratorClient from './CuratorClient';

export const dynamic = 'force-dynamic';

export default function CuratorPage() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  
  let allFiles: string[] = [];
  try {
    allFiles = fs.readdirSync(galleryDir)
      .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  // Read current GalleryGrid.tsx to get the existing configuration
  let currentConfig = [];
  try {
    const galleryPath = path.join(process.cwd(), 'src/components/GalleryGrid.tsx');
    const content = fs.readFileSync(galleryPath, 'utf8');
    const match = content.match(/const allImages: GalleryItem\[\] = (\[[\s\S]*?\]);/);
    if (match) {
      try {
        const cleaned = match[1]
          .replace(/\/\/.*$/gm, '') // Remove comments
          .replace(/\s+/g, ' ') // Collapse whitespace
          .replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":') // Quote keys
          .replace(/'/g, '"') // Replace single quotes
          .replace(/,\s*([\]}])/g, '$1'); // Remove trailing commas
          
        currentConfig = JSON.parse(cleaned);
      } catch (parseErr) {
        console.warn('Failed to parse cleaned config string:', parseErr);
        // Fallback: try to just get the sources with a simple regex if JSON.parse fails
      }
    }
  } catch (err) {
    console.warn('Could not read gallery config file:', err);
  }

  // Final safety filter
  const safeConfig = Array.isArray(currentConfig) ? currentConfig.filter(item => {
    if (item.type === 'single') return !!item.src;
    if (item.type === 'pair') return !!item.before && !!item.after;
    return false;
  }) : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <CuratorClient initialFiles={allFiles} initialConfig={safeConfig} />
    </main>
  );
}
