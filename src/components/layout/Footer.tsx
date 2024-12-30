import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-yellow-400" />
              <span className="font-bold text-lg">A-Aaron's Florida Solar</span>
            </div>
            <p className="text-blue-200">
              Professional solar maintenance and repair services across Florida
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Phone size={16} />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Mail size={16} />
                Email Us
              </a>
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin size={16} />
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-blue-200 hover:text-white">Home</Link>
              <Link to="/packages" className="block text-blue-200 hover:text-white">Packages</Link>
              <Link to="/contact" className="block text-blue-200 hover:text-white">Contact</Link>
              <Link to="/privacy" className="block text-blue-200 hover:text-white">Privacy Policy</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Service Areas</h3>
            <p className="text-blue-200">
              Serving all major cities across Florida including Orlando, Tampa, Miami, Jacksonville, and more.
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} A-Aaron's Florida Solar LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}