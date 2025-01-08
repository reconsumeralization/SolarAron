'use client'

import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">
            Expert Solar Maintenance & Repair
          </h1>
          <p className="text-xl mb-8">
            Keep your solar investment performing at its peak with A A-ron's's professional maintenance services
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${theme.values.phone}`}
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 