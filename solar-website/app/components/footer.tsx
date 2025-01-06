'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { theme } from '@/lib/theme'

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className={`bg-[${theme.colors.primary}] text-[${theme.colors.text.light}] py-16`}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-bold">{theme.values.companyName}</h3>
            <p className="opacity-80">
              Your trusted partner in solar system maintenance and repairs. Serving Florida's Space Coast with excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[${theme.colors.accent}] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${theme.values.phone}`}
                  className="flex items-center gap-3 hover:text-[${theme.colors.accent}] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{theme.values.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${theme.values.email}`}
                  className="flex items-center gap-3 hover:text-[${theme.colors.accent}] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{theme.values.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Serving All of Florida's Space Coast</span>
              </li>
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-semibold">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {theme.values.serviceAreas.map((area) => (
                <motion.li
                  key={area}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[${theme.colors.accent}]" />
                  <span>{area}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-xl font-semibold">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </li>
              <li>
                <p className="font-semibold">Regular Hours:</p>
                <p>Monday - Friday: 8AM - 6PM</p>
                <p>Saturday: 9AM - 2PM</p>
                <p>Sunday: Closed</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} {theme.values.companyName}. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="/privacy" className="hover:text-[${theme.colors.accent}] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[${theme.colors.accent}] transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-[${theme.colors.accent}] transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 