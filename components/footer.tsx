'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { theme } from '@/lib/theme'

export default function Footer() {
  const handleServiceClick = (service: string) => {
    // Handle service click
    console.log(`Service clicked: ${service}`)
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${theme.values.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{theme.values.phone}</span>
              </a>
              <a 
                href={`mailto:${theme.values.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{theme.values.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{theme.values.address}</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <a href="/locations/melbourne" className="hover:text-blue-400 transition-colors">
                  Melbourne
                </a>
              </li>
              <li>
                <a href="/locations/vero-beach" className="hover:text-blue-400 transition-colors">
                  Vero Beach
                </a>
              </li>
              <li>
                <a href="/locations/merritt-island" className="hover:text-blue-400 transition-colors">
                  Merritt Island
                </a>
              </li>
              <li>
                <a href="/locations/titusville" className="hover:text-blue-400 transition-colors">
                  Titusville
                </a>
              </li>
              <li>
                <a href="/locations/palm-bay" className="hover:text-blue-400 transition-colors">
                  Palm Bay
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleServiceClick('pool')}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Pool Solar System
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('water')}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Hot Water System
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('electric')}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  PV Electric System
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>
              <div>
                <p>Mon-Fri: {theme.values.hours.weekday}</p>
                <p>Sat: {theme.values.hours.saturday}</p>
                <p>Sun: {theme.values.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} A A-ron's Solar Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

