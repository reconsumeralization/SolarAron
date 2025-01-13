import { IMAGES } from '@/constants/images';

const galleryImages = [
  { src: IMAGES.gallery.aerial, alt: "Aerial view of solar panel installation" },
  { src: IMAGES.gallery.cleaning, alt: "Professional solar panel cleaning service" },
  { src: IMAGES.gallery.maintenance, alt: "Solar maintenance team at work" },
  { src: IMAGES.gallery.residential, alt: "Full residential solar installation" },
  { src: IMAGES.gallery.rooftop, alt: "Complete rooftop solar array" },
  { src: IMAGES.gallery.efficiency, alt: "Solar panel efficiency check" },
  { src: IMAGES.gallery.cleaningProcess, alt: "Professional cleaning of solar panels" },
  { src: IMAGES.gallery.dirty, alt: "Dirty solar panels showing need for cleaning" }
];

export function ImageGallery() {
  return (
    <section className="py-20 bg-background w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we maintain and optimize solar systems across Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square bg-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Service
          </a>
        </div>
      </div>
    </section>
  );
}
