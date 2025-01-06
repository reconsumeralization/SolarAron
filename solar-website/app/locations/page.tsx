'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { theme } from '@/lib/theme'

const cities = [
  {
    slug: 'melbourne',
    name: 'Melbourne',
    description: 'Expert solar maintenance hub serving Melbourne and surrounding areas. Pool solar, hot water, and PV systems.',
    image: '/images/melbourne.jpg',
    areas: ['Melbourne Beach', 'West Melbourne', 'Satellite Beach']
  },
  {
    slug: 'vero-beach',
    name: 'Vero Beach',
    description: 'Reliable solar care on the Treasure Coast. 24/7 emergency service and expert maintenance.',
    image: '/images/vero-beach.jpg',
    areas: ['South Beach', 'Indian River Shores', 'Oslo']
  },
  {
    slug: 'merritt-island',
    name: 'Merritt Island',
    description: 'Professional solar maintenance near Kennedy Space Center. Pool, water, and electric systems.',
    image: '/images/merritt-island.jpg',
    areas: ['Cocoa Beach', 'Cape Canaveral', 'Rockledge']
  },
  {
    slug: 'titusville',
    name: 'Titusville',
    description: 'Space City\'s trusted solar expert. Comprehensive maintenance and repair services.',
    image: '/images/titusville.jpg',
    areas: ['Mims', 'Port St. John', 'Scottsmoor']
  },
  {
    slug: 'palm-bay',
    name: 'Palm Bay',
    description: 'South Brevard\'s premier solar service. Fast response times and quality maintenance.',
    image: '/images/palm-bay.jpg',
    areas: ['West Melbourne', 'Malabar', 'Grant-Valkaria']
  }
]

export default function LocationsPage() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Service Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A A-ron's and his expert team provide reliable solar maintenance across Florida's Space Coast and Treasure Coast. When we say we'll be there, we'll be there!
          </p>
        </motion.div>

        {/* City Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.a
              key={city.slug}
              href={`/locations/${city.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-white"
            >
              {/* City Image */}
              <div className="aspect-video w-full bg-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-10 group-hover:opacity-20 transition-opacity" />
                {/* Add image here when available */}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <h2 className="text-2xl font-bold text-blue-600">
                    {city.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {city.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Areas served:</p>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area) => (
                      <span key={area} className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-blue-600 text-white p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Not Sure About Your Area?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us to check if we service your location. A A-ron's and his team cover a wide area across Florida's Space Coast and are always expanding our service territory!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${theme.values.phone}`}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call to Check Coverage</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
} 