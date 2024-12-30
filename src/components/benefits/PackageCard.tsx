import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

interface PackageFeature {
  feature: string;
  included: boolean;
}

interface PackageProps {
  title: string;
  price: string;
  features: PackageFeature[];
  isPopular?: boolean;
}

export default function PackageCard({ title, price, features, isPopular }: PackageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white p-6 rounded-lg shadow-lg"
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-serif text-blue-900 mb-4">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-6">{price}</p>
      <ul className="space-y-3">
        {features.map((item, idx) => (
          <li 
            key={idx} 
            className={`flex items-center gap-2 ${
              item.included ? 'text-blue-700' : 'text-gray-400 line-through'
            }`}
          >
            <DollarSign size={16} className={item.included ? 'text-blue-500' : 'text-gray-400'} />
            {item.feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}