import React from 'react';
import { motion } from 'framer-motion';
import PackageCard from './PackageCard';
import { monthlyPackages } from '../../data/packages';

export default function MonthlyPackages() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {monthlyPackages.map((pkg, index) => (
        <PackageCard
          key={index}
          title={pkg.title}
          price={pkg.price}
          features={pkg.features}
          isPopular={pkg.isPopular}
        />
      ))}
    </motion.div>
  );
}