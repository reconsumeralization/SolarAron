'use client'

import { motion } from 'framer-motion'
import { Sun, Droplet, Zap } from 'lucide-react'

const systems = [
  {
    title: 'Pool Solar System',
    icon: Sun,
    description: 'Efficient pool heating using solar energy',
    points: [
      'Extends swimming season',
      'Zero operating costs',
      'Environmentally friendly',
      'Low maintenance required'
    ]
  },
  {
    title: 'Hot Water System',
    icon: Droplet,
    description: 'Solar-powered water heating for your home',
    points: [
      'Reduces energy bills',
      'Reliable hot water supply',
      'Long system lifespan',
      'Weather resistant'
    ]
  },
  {
    title: 'PV Electric System',
    icon: Zap,
    description: 'Convert sunlight into electricity',
    points: [
      'Lower electricity costs',
      'Energy independence',
      'Modern technology',
      'Battery storage options'
    ]
  }
]

export default function SolarExplainer() {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Our Solar Systems
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {system.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {system.description}
                </p>
                
                <ul className="space-y-2">
                  {system.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 