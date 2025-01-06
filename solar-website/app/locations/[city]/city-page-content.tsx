'use client'

import { motion } from 'framer-motion'
import { 
  MapPin,
  Star,
  Phone,
  Mail,
  Clock
} from 'lucide-react'
import AnimatedStats from '@/components/animated-stats'
import { type CityData } from './city-data'
import React from 'react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
} as const

// Utility functions
const generateUniqueId = () => {
  try {
    return crypto.randomUUID()
  } catch {
    return Math.random().toString(36).slice(2) + Date.now().toString(36)
  }
}

const generateStarKeys = (rating: number): ReadonlyArray<{ readonly id: string }> => {
  try {
    // Validate input
    const validRating = Math.max(0, Math.min(5, Math.floor(rating)))
    return Array.from({ length: validRating }, () => ({
      id: generateUniqueId(),
    }))
  } catch (error) {
    console.error('Error generating star keys:', error)
    return []
  }
}

export function CityPageContent({ cityData }: { readonly cityData: CityData }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {cityData.title}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {cityData.subtitle}
          </p>
          <p className="text-lg text-blue-200 max-w-3xl">
            {cityData.description}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedStats stats={cityData.stats} />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">Expert Solar Maintenance</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {cityData.services.map((service) => (
              <motion.div
                key={service.title} // Assuming title is unique for each service
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {React.createElement(service.icon, { className: "w-12 h-12 text-blue-600 mb-4" })}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-gray-600">Comprehensive Coverage</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
          >
            {cityData.areasServed.map((area) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                className="flex items-center space-x-2 text-gray-700"
              >
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{area.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-gray-600">What Our Clients Say</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {generateStarKeys(cityData.testimonial.rating).map((star) => (
                  <Star
                    key={star.id}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "{cityData.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between text-gray-600">
                <div>
                  <p className="font-semibold">{cityData.testimonial.name}</p>
                  <p>{cityData.testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p>{cityData.testimonial.service}</p>
                  <p>{cityData.testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">{cityData.emergencyInfo.title}</h2>
            <p className="text-blue-100">We're Here When You Need Us</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-blue-100">{cityData.emergencyInfo.phone}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-blue-100">{cityData.emergencyInfo.hours}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-blue-100">{cityData.emergencyInfo.response}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 