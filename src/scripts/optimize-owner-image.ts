import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeOwnerImage() {
  const publicDir = path.join(process.cwd(), 'public');
  const originalPath = path.join(publicDir, 'framed_image_1.jpg');
  const newPath = path.join(publicDir, 'aaron-cleaning-solar-panels.jpg');

  try {
    await sharp(originalPath)
      .resize(1200, null, { // Slightly smaller max width for portrait
        withoutEnlargement: true,
        fit: 'inside',
      })
      .jpeg({
        quality: 85, // Slightly higher quality for portrait
        progressive: true,
        mozjpeg: true,
      })
      .withMetadata()
      .toFile(newPath);

    // Delete original file after successful optimization
    await fs.unlink(originalPath);
    console.log('Successfully optimized owner image');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

optimizeOwnerImage().catch(console.error);
