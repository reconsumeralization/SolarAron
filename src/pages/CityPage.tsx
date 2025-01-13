import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import {
  AboutAaron,
  AnimatedHero,
  AnimatedStats,
} from '@/components';
import { CityServiceMap } from '@/components/map/CityServiceMap';
import { cityData } from '@/data/cities';

// Helper function to normalize city ID
function normalizeCityId(cityId: string): string {
  // Convert kebab-case to camelCase
  if (cityId.includes('-')) {
    return cityId
      .split('-')
      .map((part, index) =>
        index === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      )
      .join('');
  }
  return cityId;
}

export default function CityPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const normalizedCityId = cityId ? normalizeCityId(cityId) : '';
  const city = cityData[normalizedCityId as keyof typeof cityData];

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">City Not Found</h1>
          <p className="text-muted-foreground">The requested city page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Solar Panel Services in {city.name}, {city.state} | A-Aaron's Florida Solar</title>
        <meta name="description" content={city.longDescription} />
        <meta name="geo.region" content={`US-${city.state}`} />
        <meta name="geo.placename" content={city.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <AnimatedHero
          title={`Solar Services in ${city.name}`}
          subtitle={city.description}
        />

        {/* City Overview Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Welcome to {city.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {city.longDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedStats
          title={`Solar Service Stats in ${city.name}`}
          description={`Our impact in ${city.name} and surrounding areas`}
          stats={[
            {
              value: 98,
              label: `Customer Satisfaction`,
              suffix: "%"
            },
            {
              value: 1000,
              label: "Systems Maintained",
              suffix: "+"
            },
            {
              value: 30,
              label: "Average Efficiency Gain",
              suffix: "%"
            }
          ]}
          variant="light"
        />

        {/* Key Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Why Choose Us in {city.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {city.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg shadow-md border border-border"
                  >
                    <p className="text-muted-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AboutAaron city={city.name} />

        {/* Solar Benefits Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Solar Benefits in {city.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {city.solarBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-muted p-6 rounded-lg border border-border"
                  >
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Landmarks Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Landmarks in {city.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {city.landmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-lg border border-border"
                  >
                    <div className="relative h-48">
                      <img
                        src={landmark.image}
                        alt={landmark.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {landmark.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {landmark.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Service Area in {city.name}
            </h2>
            <div className="max-w-4xl mx-auto">
              <CityServiceMap city={city} serviceRadius={30} />
            </div>
          </div>
        </section>

        {/* City-specific Images with Geo Metadata */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Our Work in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {city.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-lg overflow-hidden shadow-lg border border-border"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    itemProp="image"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  />
                  <meta itemProp="latitude" content={image.geoMetadata.latitude.toString()} />
                  <meta itemProp="longitude" content={image.geoMetadata.longitude.toString()} />
                  <meta itemProp="contentLocation" content={`${image.geoMetadata.city}, ${image.geoMetadata.state}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
