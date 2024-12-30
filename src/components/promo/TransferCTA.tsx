import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

export default function TransferCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mt-12 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Ready to Switch?</h2>
      <p className="text-xl mb-8">Contact us to start your transfer today</p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold"
        >
          <Phone size={20} />
          {CONTACT_INFO.phone}
        </motion.a>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${CONTACT_INFO.email}`}
          className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold"
        >
          <Mail size={20} />
          Email Us
        </motion.a>
      </div>
    </motion.div>
  );
}