'use client'

import { Shield, Clock, Wrench, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'

interface Feature {
  icon: React.ComponentType<any>
  title: string
  description: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "Reliable Service",
      description: "24/7 emergency support with guaranteed response times"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Same-day service for urgent repairs and maintenance"
    },
    {
      icon: Wrench,
      title: "Expert Repairs",
      description: "Licensed technicians with extensive solar repair experience"
    },
    {
      icon: Zap,
      title: "System Recovery",
      description: "Restore your system's performance and efficiency"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-4 gap-8 mb-16"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={feature.title}
          variants={item}
          className={`bg-[${theme.colors.text.light}] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className={`bg-[${theme.colors.light}] p-3 rounded-full w-fit mb-4`}
          >
            <feature.icon className={`w-6 h-6 text-[${theme.colors.primary}]`} />
          </motion.div>
          <motion.h3 
            className={`text-lg font-semibold text-[${theme.colors.primary}] mb-2`}
          >
            {feature.title}
          </motion.h3>
          <motion.p 
            className={`text-[${theme.colors.text.primary}]`}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  )
} 