import React from 'react';
import { motion } from 'framer-motion';
import InteractivePackageComparison from '../components/services/InteractivePackageComparison';
import MaintenanceTimeline from '../components/services/MaintenanceTimeline';
import ROICalculator from '../components/services/ROICalculator';
import { serviceDetails } from '../data/serviceDetails';
import MetaTags from '../components/seo/MetaTags';
import { SEO_CONTENT } from '../constants/seo';

export default function ServiceDetails() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <MetaTags {...SEO_CONTENT.services} path="/services" />
      
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Solar Maintenance Services
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Maximize your solar investment with our professional maintenance solutions
        </p>

        <div className="space-y-12">
          <InteractivePackageComparison />
          <MaintenanceTimeline />
          <ROICalculator />
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                {/* Existing service detail content */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}