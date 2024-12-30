import React from 'react';
import { motion } from 'framer-motion';

export default function FloridaMap() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Service Area</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7172089.65869193!2d-85.60431136847779!3d27.96425768821772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sus!4v1709669136185!5m2!1sen!2sus"
          className="w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-gray-600"
      >
        Serving all major cities across Florida including:
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
          {['Orlando', 'Tampa', 'Miami', 'Jacksonville', 'Gainesville', 'Pensacola', 'Tallahassee', 'Daytona Beach']
            .map((city) => (
              <div key={city} className="text-blue-600">{city}</div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}