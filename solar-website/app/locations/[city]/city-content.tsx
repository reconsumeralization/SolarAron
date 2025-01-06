'use client'

import { motion } from 'framer-motion'
import { MapPin, Sun, Star, Phone, Clock } from 'lucide-react'
import { theme } from '@/lib/theme'
import type { CityData } from '@/types/city'

interface CityContentProps {
  readonly city: CityData
}

export default function CityContent({ city }: CityContentProps) {
  // Generate unique keys for star ratings
  const generateStarKey = (index: number, name: string) => `${name}-star-${index}`

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
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <MapPin className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-blue-600">
              {city.name}
            </h1>
          </motion.div>
          <h2 className="text-2xl text-gray-700 mb-6">
            {city.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {city.description}
          </p>
        </motion.div>

        {/* Service Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Areas We Serve in {city.name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {city.areas.map((area: string) => (
                <motion.div
                  key={area}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <Sun className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Local Landmarks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {city.landmarks.map((landmark: string) => (
                <motion.div
                  key={landmark}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{landmark}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Local Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-600 text-white p-8 rounded-xl mb-16"
        >
          <div className="flex items-start gap-4">
            <Star className="w-12 h-12 text-white flex-shrink-0" />
            <div>
              <p className="text-lg mb-4 italic">"{city.testimonial.text}"</p>
              <p className="font-semibold">- {city.testimonial.name}, {city.name}</p>
              <div className="flex gap-1 mt-2">
                {[...Array(city.testimonial.rating)].map((_, i) => (
                  <Star 
                    key={generateStarKey(i, city.testimonial.name)} 
                    className="w-5 h-5 text-white fill-current" 
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-6">
            Need Solar Service in {city.name}?
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${theme.values.phone}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Clock className="w-5 h-5" />
              <span>Schedule Service</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 