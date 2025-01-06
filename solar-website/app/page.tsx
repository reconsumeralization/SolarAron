'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import PromoBanner from './components/promo-banner'
import Features from './components/features'
import { theme } from '@/lib/theme'

export default function HomePage() {
  const stats = [
    {
      value: theme.values.reliabilityStats.experienceYears,
      label: 'Years Experience',
      suffix: '+'
    },
    {
      value: theme.values.reliabilityStats.satisfiedCustomers,
      label: 'Satisfied Customers',
      suffix: ''
    },
    {
      value: theme.values.reliabilityStats.responseTimeHours,
      label: 'Hour Response Time',
      suffix: ''
    },
    {
      value: theme.values.reliabilityStats.warrantyYears,
      label: 'Year Warranty',
      suffix: ''
    }
  ]

  const services = [
    'Emergency Repairs',
    'Preventive Maintenance',
    'System Diagnostics',
    'Performance Optimization',
    'Leak Detection & Repair',
    'Component Replacement'
  ]

  return (
    <div className={`py-20 bg-[${theme.colors.background}]`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-5xl font-bold text-[${theme.colors.primary}] mb-4`}
          >
            Your Trusted Solar Repair & Maintenance Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-xl text-[${theme.colors.text.primary}]`}
          >
            Expert maintenance and reliable repairs to keep your solar investment performing at its peak
          </motion.p>
        </motion.div>

        {/* Promo Banner */}
        <PromoBanner />

        {/* Features */}
        <Features />

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className={`bg-[${theme.colors.primary}] text-[${theme.colors.text.light}] p-6 rounded-lg text-center`}
            >
              <div className="text-4xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold text-[${theme.colors.primary}] mb-8 text-center`}>
            Comprehensive Solar Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <motion.div 
                key={service}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className={`w-5 h-5 text-[${theme.colors.primary}]`} />
                <span className={`text-[${theme.colors.text.primary}]`}>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className={`text-3xl font-bold text-[${theme.colors.primary}] mb-4`}
          >
            Need Solar System Repairs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`text-[${theme.colors.text.primary}] mb-8`}
          >
            Contact us for 24/7 emergency service and expert maintenance
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${theme.values.phone}`}
              className={`bg-[${theme.colors.primary}] text-[${theme.colors.text.light}] px-6 py-3 rounded-md hover:bg-[${theme.colors.secondary}] transition-colors font-medium flex items-center gap-2`}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className={`bg-[${theme.colors.text.light}] text-[${theme.colors.primary}] px-6 py-3 rounded-md border border-[${theme.colors.primary}] hover:bg-[${theme.colors.light}] transition-colors font-medium`}
            >
              Schedule Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

