'use client'

import { Link } from 'react-router-dom';
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { theme } from '@/lib/theme';

export default function Footer() {
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
                <span>Based in Rockledge, Florida</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/rockledge" className="hover:text-blue-400 transition-colors">
                  Rockledge (Headquarters)
                </Link>
              </li>
              <li>
                <Link to="/locations/melbourne" className="hover:text-blue-400 transition-colors">
                  Melbourne
                </Link>
              </li>
              <li>
                <Link to="/locations/vero-beach" className="hover:text-blue-400 transition-colors">
                  Vero Beach
                </Link>
              </li>
              <li>
                <Link to="/locations/merritt-island" className="hover:text-blue-400 transition-colors">
                  Merritt Island
                </Link>
              </li>
              <li>
                <Link to="/locations/titusville" className="hover:text-blue-400 transition-colors">
                  Titusville
                </Link>
              </li>
              <li>
                <Link to="/locations/palm-bay" className="hover:text-blue-400 transition-colors">
                  Palm Bay
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/system-inspection" className="hover:text-blue-400 transition-colors">
                  Advanced System Inspection
                </Link>
              </li>
              <li>
                <Link to="/services/bird-prevention" className="hover:text-blue-400 transition-colors">
                  Bird/Debris Prevention
                </Link>
              </li>
              <li>
                <Link to="/services/pool-solar" className="hover:text-blue-400 transition-colors">
                  Pool Solar Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/hot-water" className="hover:text-blue-400 transition-colors">
                  Hot Water System Service
                </Link>
              </li>
              <li>
                <Link to="/services/panel-installation" className="hover:text-blue-400 transition-colors">
                  Panel Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors font-medium">
                  View All Services
                </Link>
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
  );
}
