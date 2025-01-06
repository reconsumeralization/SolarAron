'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sun, Droplet, Zap, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { theme } from '@/lib/theme'

export default function SolarExplainer() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const systems = [
    {
      icon: Sun,
      title: "Pool Solar System",
      description: "Solar collectors on your roof heat pool water naturally, maintaining perfect temperature year-round.",
      points: [
        "Pump circulates water through collectors",
        "UV-resistant panels maximize heat absorption",
        "Automated temperature control system",
        "Zero energy costs for heating"
      ]
    },
    {
      icon: Droplet,
      title: "Hot Water System",
      description: "Efficient solar thermal technology provides reliable hot water while reducing energy costs.",
      points: [
        "Thermosiphon or pumped system options",
        "Storage tank integration",
        "Backup electric heating element",
        "Consistent hot water supply"
      ]
    },
    {
      icon: Zap,
      title: "PV Electric System",
      description: "Convert sunlight directly into electricity to power your home and reduce utility bills.",
      points: [
        "High-efficiency solar panels",
        "Inverter technology",
        "Battery storage options",
        "Grid connection integration"
      ]
    }
  ]

  return (
    <div ref={containerRef} className="py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className={`text-4xl font-bold text-[${theme.colors.primary}] mb-4`}>
          Understanding Your Solar Systems
        </h2>
        <p className={`text-xl text-[${theme.colors.text.primary}]`}>
          Expert maintenance for all types of solar installations
        </p>
      </motion.div>

      <div className="space-y-32">
        {systems.map((system, index) => (
          <motion.div
            key={system.title}
            style={{ y, opacity }}
            className="relative"
          >
            <div className={`max-w-6xl mx-auto px-4 ${index % 2 === 0 ? '' : 'flex flex-row-reverse'}`}>
              {/* 3D Icon Section */}
              <motion.div 
                initial={{ scale: 0.8, rotateY: -30 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-full md:w-1/2"
              >
                <div className={`absolute inset-0 bg-[${theme.colors.light}] rounded-3xl transform -rotate-6 scale-95 opacity-20`} />
                <div className={`absolute inset-0 bg-[${theme.colors.light}] rounded-3xl transform rotate-3 scale-105 opacity-20`} />
                <div className={`relative bg-[${theme.colors.light}] p-12 rounded-3xl transform perspective-1000`}>
                  <system.icon className={`w-32 h-32 text-[${theme.colors.primary}] mx-auto`} />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 p-8"
              >
                <h3 className={`text-3xl font-bold text-[${theme.colors.primary}] mb-4`}>
                  {system.title}
                </h3>
                <p className={`text-lg text-[${theme.colors.text.primary}] mb-6`}>
                  {system.description}
                </p>
                <ul className="space-y-4">
                  {system.points.map((point) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <ArrowRight className={`w-5 h-5 text-[${theme.colors.primary}]`} />
                      <span className={`text-[${theme.colors.text.primary}]`}>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 