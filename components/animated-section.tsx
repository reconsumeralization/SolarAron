'use client'

// External dependencies
import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'

// Internal dependencies
import { theme } from '@/lib/theme'

// Types
interface Feature {
  readonly icon: typeof Sun
  readonly title: string
  readonly description: string
}

interface AnimatedSectionProps {
  readonly title: string
  readonly subtitle: string
  readonly features: ReadonlyArray<Feature>
  readonly variant?: 'light' | 'dark' | 'gradient'
  readonly layout?: 'grid' | 'cards'
  readonly callToAction?: {
    readonly text: string
    readonly href: string
  }
}

// Animation variants
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

// Theme variants
const variants = {
  light: {
    bg: "bg-white",
    text: "text-gray-600",
    heading: theme.colors.primary
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-gray-300",
    heading: "text-white"
  },
  gradient: {
    bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
    text: "text-blue-100",
    heading: "text-white"
  }
} as const

export default function AnimatedSection({
  title,
  subtitle,
  features,
  variant = 'light',
  layout = 'grid',
  callToAction
}: AnimatedSectionProps) {
  const colors = variants[variant]
  
  return (
    <section className={`py-16 ${colors.bg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-bold mb-4`}
            style={{ color: colors.heading }}
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-xl ${colors.text}`}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid ${layout === 'grid' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`${layout === 'cards' ? 'bg-white/10 rounded-xl p-6' : ''}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", bounce: 0.6 }}
                className={`w-16 h-16 mx-auto mb-4 ${layout === 'cards' ? 'bg-white/10' : 'bg-blue-100'} rounded-full flex items-center justify-center`}
              >
                <feature.icon className="w-8 h-8" style={{ color: theme.colors.accent }} />
              </motion.div>
              
              <h3 
                className={`text-xl font-bold mb-3`}
                style={{ color: colors.heading }}
              >
                {feature.title}
              </h3>
              
              <p className={colors.text}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {callToAction && (
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href={callToAction.href}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full ${variant === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-blue-50'}`}
              whileHover={{ scale: 1.05 }}
            >
              {callToAction.text}
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
} 