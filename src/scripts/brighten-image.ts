import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

async function brightenImage() {
  const publicDir = path.join(process.cwd(), 'public');
  const imagePath = path.join(publicDir, 'solar-panel-efficiency-check.jpg');
  const outputPath = path.join(publicDir, 'solar-panel-efficiency-check-bright.jpg');

  try {
    await sharp(imagePath)
      .modulate({
        brightness: 1.3,  // Increase brightness by 30%
        saturation: 1.1   // Slightly increase saturation
      })
      .jpeg({
        quality: 80,
        progressive: true,
        mozjpeg: true,
      })
      .withMetadata()
      .toFile(outputPath);

    // Replace the original with the brightened version
    await fs.unlink(imagePath);
    await fs.rename(outputPath, imagePath);

    console.log('Successfully brightened the image');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

brightenImage().catch(console.error);
