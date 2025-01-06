'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Star, Award } from 'lucide-react'
import { theme } from '@/lib/theme'

interface StatsProps {
  readonly stats: {
    readonly customers: number
    readonly responseTime: string
    readonly satisfaction: number
    readonly experience: number
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

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
}

// Validate stats data
const validateStats = (stats: unknown): stats is StatsProps['stats'] => {
  if (!stats || typeof stats !== 'object') return false
  
  const statsData = stats as Partial<StatsProps['stats']>
  return !!(
    typeof statsData.customers === 'number' &&
    typeof statsData.responseTime === 'string' &&
    typeof statsData.satisfaction === 'number' &&
    typeof statsData.experience === 'number'
  )
}

const Counter = ({ end, duration = 2 }: { readonly end: number, readonly duration?: number }) => {
  try {
    // Validate input
    const validEnd = Math.max(0, Math.floor(end))
    const validDuration = Math.max(0.1, duration)

    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: validDuration }}
      >
        {validEnd}
      </motion.span>
    )
  } catch (error) {
    console.error('Error in Counter:', error)
    return <span>0</span>
  }
}

export default function AnimatedStats({ stats }: StatsProps) {
  try {
    // Validate stats
    if (!validateStats(stats)) {
      throw new Error('Invalid stats data')
    }

    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                <Counter end={stats.customers} />+
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                {stats.responseTime}
              </div>
              <p className="text-gray-600">Average Response Time</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                <Counter end={stats.satisfaction} />%
              </div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                <Counter end={stats.experience} />+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error in AnimatedStats:', error)
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Stats temporarily unavailable
        </div>
      </div>
    )
  }
} 