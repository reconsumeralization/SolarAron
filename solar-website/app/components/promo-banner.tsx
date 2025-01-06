'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PromoBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1a237e] text-white p-8 rounded-lg mb-12 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e] to-[#283593] opacity-80" />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Exclusive 10% Off
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-bold text-[#ffd700] mb-6"
        >
          For Florida Solar East Customers
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-2 text-lg mb-4"
        >
          <span>Florida Solar East</span>
          <ArrowRight className="w-5 h-5" />
          <span>A Aaron's Florida Solar LLC</span>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm"
        >
          *Only valid for existing Florida Solar East (MyFloridaSolar.com) customers
        </motion.p>
      </div>
    </motion.div>
  )
} 