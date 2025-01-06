'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { theme } from '@/lib/theme'

const serviceAreas = [
  {
    region: 'Space Coast',
    cities: [
      {
        name: 'Melbourne',
        description: 'Full solar maintenance services',
        link: '/locations/melbourne'
      },
      {
        name: 'Merritt Island',
        description: 'Complete solar system care',
        link: '/locations/merritt-island'
      },
      {
        name: 'Titusville',
        description: 'Expert solar maintenance',
        link: '/locations/titusville'
      },
      {
        name: 'Palm Bay',
        description: 'Professional solar services',
        link: '/locations/palm-bay'
      }
    ]
  },
  {
    region: 'Treasure Coast',
    cities: [
      {
        name: 'Vero Beach',
        description: 'Comprehensive solar care',
        link: '/locations/vero-beach'
      }
    ]
  }
]

export default function ContactPage() {
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
            Contact A A-ron's Solar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When we say we'll be there, we'll be there! Reach out for reliable solar maintenance across Florida's Space Coast and Treasure Coast.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-blue-600 mb-2">Call Us</h2>
            <a href={`tel:${theme.values.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
              {theme.values.phone}
            </a>
            <p className="text-gray-500 mt-2">24/7 Emergency Service</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-blue-600 mb-2">Email Us</h2>
            <a href={`mailto:${theme.values.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
              {theme.values.email}
            </a>
            <p className="text-gray-500 mt-2">Quick Response Guaranteed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-blue-600 mb-2">Hours</h2>
            <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
            <p className="text-gray-600">Sat: 9am - 4pm</p>
            <p className="text-amber-500 font-semibold mt-2">24/7 Emergency Service</p>
          </motion.div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{area.region}</h3>
                <div className="grid gap-4">
                  {area.cities.map((city) => (
                    <motion.a
                      key={city.name}
                      href={city.link}
                      className="group flex items-center justify-between p-4 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-amber-500" />
                        <div>
                          <h4 className="font-semibold text-blue-600">{city.name}</h4>
                          <p className="text-sm text-gray-600">{city.description}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 