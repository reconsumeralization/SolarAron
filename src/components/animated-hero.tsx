'use client'

import { motion } from 'framer-motion';
import {
  Droplets,
  Sun,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { theme } from '@/lib/theme';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
}

const floatingIcons = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const heroText = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}


// Generate unique particle IDs
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: `particle-${i}`,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10
}))

export function AnimatedHero({ title, subtitle }: AnimatedHeroProps) {
  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              scale: particle.scale
            }}
            animate={{
              y: ["-10%", "110%"],
              transition: {
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: -particle.delay
              }
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Floating icons */}
          <div className="relative h-40 mb-8">
            <motion.div
              variants={floatingIcons}
              initial="hidden"
              animate="visible"
              className="absolute left-1/4 top-0"
              style={{ color: theme.colors.accent }}
            >
              <Sun className="w-16 h-16" />
            </motion.div>
            <motion.div
              variants={floatingIcons}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ color: theme.colors.accent }}
            >
              <Zap className="w-20 h-20" />
            </motion.div>
            <motion.div
              variants={floatingIcons}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="absolute right-1/4 top-0"
              style={{ color: theme.colors.accent }}
            >
              <Droplets className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Hero text */}
          <motion.h1
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-blue-100"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-full text-xl font-bold bg-white text-blue-900 hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="inline-block px-8 py-4 rounded-full text-xl font-bold border-2 border-white hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated wave bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 17.75C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            className="fill-background dark:fill-background"
          />
        </svg>
      </motion.div>
    </div>
  )
}
