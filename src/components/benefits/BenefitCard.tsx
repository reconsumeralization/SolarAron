import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BenefitProps {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

export default function BenefitCard({ id, title, description, isActive, onHover }: BenefitProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-lg transition-all duration-300 cursor-pointer bg-white bg-opacity-90"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {id}
        </div>
        <div>
          <h2 className="text-xl font-serif mb-2 text-blue-900">{title}</h2>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-blue-700"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}