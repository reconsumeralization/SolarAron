'use client'

import { motion } from 'framer-motion'
import { Sun, Droplet, Zap, CheckCircle, Clock, Phone, Shield, Wrench, Star } from 'lucide-react'
import { theme } from '@/lib/theme'

const services = [
  {
    id: 'pool-solar',
    title: 'Pool/Spa Solar System',
    icon: Sun,
    description: 'A-Aaron\'s\'s expert maintenance keeps your pool perfectly heated year-round. We\'ll be there when promised - no excuses!',
    features: [
      'Complete system diagnostics',
      'Leak detection & immediate repair',
      'Professional panel cleaning',
      'Pump & valve optimization',
      'Performance monitoring',
      'Seasonal adjustments'
    ],
    benefits: [
      'Extend system lifespan',
      'Reduce energy costs',
      'Maintain perfect temperature',
      '24/7 emergency support'
    ]
  },
  {
    id: 'hot-water',
    title: 'DHW (Hot Water) System',
    icon: Droplet,
    description: 'Trust A-Aaron\'s for reliable hot water system maintenance. When we say we\'ll fix it, consider it done!',
    features: [
      'Tank inspection & cleaning',
      'Heat exchanger maintenance',
      'Pressure & safety testing',
      'Glycol level optimization',
      'Controller calibration',
      'Sensor verification'
    ],
    benefits: [
      'Consistent hot water',
      'Maximum efficiency',
      'Prevent breakdowns',
      'Expert support'
    ]
  },
  {
    id: 'pv-system',
    title: 'PV (Electric) System',
    icon: Zap,
    description: 'Keep your power flowing with A-Aaron\'s\'s professional PV maintenance. Reliability is our middle name!',
    features: [
      'Comprehensive panel care',
      'Inverter performance checks',
      'Real-time monitoring',
      'Safety inspections',
      'Battery optimization',
      'Efficiency tuning'
    ],
    benefits: [
      'Maximize power output',
      'Prevent system failures',
      'Extend panel life',
      'Save on electricity'
    ]
  }
]

const highlights = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full protection and peace of mind with every service'
  },
  {
    icon: Wrench,
    title: 'Expert Team',
    description: 'A-Aaron\'s leads a skilled team of certified technicians'
  },
  {
    icon: Star,
    title: '100% Reliable',
    description: 'We show up when promised - that\'s the A-Aaron\'s guarantee'
  }
]

export default function ServicesPage() {
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
            Solar Maintenance Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A-Aaron\'s and his expert team provide comprehensive maintenance for all types of solar systems. When we say we\'ll be there, we\'ll be there!
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-600 text-white rounded-xl p-6 text-center"
            >
              <highlight.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-blue-100">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="w-10 h-10 text-amber-500" />
                <h2 className="text-2xl font-bold text-blue-600">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Features:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Benefits:</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <motion.li
                      key={benefit}
                      className="flex items-start gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-blue-600 text-white p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready for Expert Solar Maintenance?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact A-Aaron\'s today for reliable, professional solar system maintenance. We\'ll be there when we say we\'ll be there - that\'s our promise!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${theme.values.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-blue-700 transition-colors"
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