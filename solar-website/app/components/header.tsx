'use client'

import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { theme } from '@/lib/theme'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`bg-[${theme.colors.primary}] text-white sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            {theme.values.companyName}
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="hover:text-[${theme.colors.accent}] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact Button */}
          <motion.a
            href={`tel:${theme.values.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-[${theme.colors.accent}] text-[${theme.colors.primary}] px-4 py-2 rounded-lg font-medium"
          >
            <Phone className="w-5 h-5" />
            <span>{theme.values.phone}</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                className="block hover:text-[${theme.colors.accent}] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={`tel:${theme.values.phone}`}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[${theme.colors.accent}]"
            >
              <Phone className="w-5 h-5" />
              <span>{theme.values.phone}</span>
            </motion.a>
          </nav>
        </motion.div>
      </div>
    </header>
  )
} 