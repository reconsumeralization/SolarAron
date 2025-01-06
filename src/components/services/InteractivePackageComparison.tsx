import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertTriangle, Zap, Calendar, DollarSign, Clock } from 'lucide-react';
import { monthlyPackages } from '../../data/packages';

export default function InteractivePackageComparison() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const commonFeatures = [
    {
      id: 'inspection',
      icon: Clock,
      title: 'Inspection Frequency',
      description: 'Regular system checks to ensure optimal performance'
    },
    {
      id: 'cleaning',
      icon: Zap,
      title: 'Cleaning Service',
      description: 'Professional cleaning to maintain peak efficiency'
    },
    {
      id: 'monitoring',
      icon: AlertTriangle,
      title: 'System Monitoring',
      description: 'Track performance and detect issues early'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Compare Package Features</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {monthlyPackages.map((pkg) => (
          <motion.div
            key={pkg.title}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">{pkg.title}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</p>
            
            <div className="space-y-3">
              {commonFeatures.map((feature) => {
                const Icon = feature.icon;
                const included = pkg.features.find(f => 
                  f.feature.toLowerCase().includes(feature.id)
                )?.included;

                return (
                  <motion.div
                    key={feature.id}
                    className="flex items-start gap-2 cursor-pointer"
                    onMouseEnter={() => setSelectedFeature(feature.id)}
                    onMouseLeave={() => setSelectedFeature(null)}
                  >
                    <Icon className={`w-5 h-5 ${included ? 'text-green-500' : 'text-gray-400'}`} />
                    <span className={included ? 'text-gray-800' : 'text-gray-400'}>
                      {feature.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg"
          >
            <p className="text-blue-800">
              {commonFeatures.find(f => f.id === selectedFeature)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}