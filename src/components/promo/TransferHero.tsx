import React from 'react';
import { motion } from 'framer-motion';
import { Sun, ArrowRight } from 'lucide-react';

export default function TransferHero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 rounded-2xl"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Sun size={400} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Exclusive 10% Off
          </h1>
          <div className="text-2xl md:text-4xl text-yellow-400 font-semibold mb-8">
            For Florida Solar East Customers
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-xl md:text-2xl mb-8"
        >
          <span>Florida Solar East</span>
          <ArrowRight className="text-yellow-400" />
          <span>A-Aaron's Florida Solar LLC</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300"
        >
          *Only valid for existing Florida Solar East (MyFloridaSolar.com) customers
        </motion.div>
      </div>
    </motion.div>
  );
}