import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const imageOptimizations = [
  {
    original: "DALL·E 2025-01-12 15.09.41 - A detailed and realistic side-by-side comparison image of black tube-style solar pool panels installed on a roof. The left side shows dirty panels cov.webp",
    newName: "pool-solar-cleaning-comparison-1.webp",
    description: "Before and after comparison of solar pool panel cleaning"
  },
  {
    original: "DALL·E 2025-01-12 15.09.11 - A realistic, high-quality side-by-side comparison image of black tube-style solar pool panels installed on a slanted roof. The left side shows the pan.webp",
    newName: "pool-solar-cleaning-comparison-2.webp",
    description: "Side by side comparison of cleaned vs dirty solar pool panels"
  },
  {
    original: "DALL·E 2025-01-12 15.08.54 - A high-quality side-by-side comparison image of solar pool panels before and after cleaning. The left side shows dirty solar pool panels with visible .webp",
    newName: "pool-solar-cleaning-comparison-3.webp",
    description: "Before and after solar pool panel maintenance results"
  },
  {
    original: "1000004760.jpg",
    newName: "solar-panel-cleaning-service.jpg",
    description: "Professional solar panel cleaning in progress"
  },
  {
    original: "1000004763.jpg",
    newName: "solar-maintenance-inspection.jpg",
    description: "Technician performing solar system inspection"
  },
  {
    original: "1000004764.jpg",
    newName: "solar-panel-installation.jpg",
    description: "Solar panel installation on residential roof"
  },
  {
    original: "1000004765.jpg",
    newName: "rooftop-solar-array.jpg",
    description: "Complete residential solar panel array"
  },
  {
    original: "1000004766.jpg",
    newName: "dirty-solar-panels.jpg",
    description: "Dirty solar panels showing need for professional cleaning"
  },
  {
    original: "1000004767.jpg",
    newName: "solar-panel-efficiency-check.jpg",
    description: "Technician checking solar panel efficiency",
    adjustments: {
      brightness: 1.3, // Increase brightness by 30%
      saturation: 1.1  // Slightly increase saturation for better visibility
    }
  },
  {
    original: "1000004769.jpg",
    newName: "residential-solar-installation.jpg",
    description: "Full residential solar installation view"
  },
  {
    original: "1000004783.jpg",
    newName: "solar-panel-cleaning-process.jpg",
    description: "Professional cleaning of solar panels"
  },
  {
    original: "1000004784.jpg",
    newName: "solar-system-inspection.jpg",
    description: "Detailed solar system inspection"
  },
  {
    original: "1000004802.jpg",
    newName: "solar-panel-array-aerial.jpg",
    description: "Aerial view of solar panel installation"
  },
  {
    original: "1000004803.jpg",
    newName: "solar-maintenance-team.jpg",
    description: "Solar maintenance team at work"
  },
  {
    original: "1000004805.jpg",
    newName: "solar-panel-cleaning-equipment.jpg",
    description: "Professional solar panel cleaning equipment"
  }
];

async function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public');

  for (const image of imageOptimizations) {
    const originalPath = path.join(publicDir, image.original);
    const newPath = path.join(publicDir, image.newName);

    try {
      if (image.original.endsWith('.webp')) {
        // For WebP files, just rename them
        await fs.rename(originalPath, newPath);
        console.log(`Renamed: ${image.original} -> ${image.newName}`);
      } else {
        // For JPG files, optimize and convert
        let pipeline = sharp(originalPath)
          .resize(1920, null, { // 1920px max width, maintain aspect ratio
            withoutEnlargement: true,
            fit: 'inside',
          });

        // Apply special adjustments if specified
        if (image.adjustments) {
          pipeline = pipeline.modulate({
            brightness: image.adjustments.brightness,
            saturation: image.adjustments.saturation
          });
        }

        await pipeline
          .jpeg({
            quality: 80,
            progressive: true,
            mozjpeg: true,
          })
          .withMetadata()
          .toFile(newPath);

        // Delete original file after successful optimization
        await fs.unlink(originalPath);
        console.log(`Optimized: ${image.original} -> ${image.newName}`);
      }
    } catch (error) {
      console.error(`Error processing ${image.original}:`, error);
    }
  }
}

optimizeImages().catch(console.error);
