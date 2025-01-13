export function BeforeAfterGallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            The Difference Professional Cleaning Makes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] group">
              <img
                src="/dirty--solar-panels.jpeg"
                alt="Dirty solar panels before cleaning"
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4 transform transition-all duration-300 translate-y-0 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold text-white dark:text-white/90">Before Cleaning</h3>
                <p className="text-gray-100 dark:text-gray-200">
                  Reduced efficiency due to dirt and debris buildup
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] group">
              <img
                src="/clean-solar-panels.jpeg"
                alt="Clean solar panels after professional cleaning"
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4 transform transition-all duration-300 translate-y-0 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold text-white dark:text-white/90">After Cleaning</h3>
                <p className="text-gray-100 dark:text-gray-200">
                  Maximum efficiency restored with professional cleaning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
