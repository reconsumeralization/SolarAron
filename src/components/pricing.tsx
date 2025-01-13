import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { AnimatedHero } from '@/components';

interface PricingItem {
  title: string;
  price: string;
  includes: string[];
}

const PricingSection: React.FC = () => {
  const pricingItems: PricingItem[] = [
    {
      title: "PV Panel Cleaning",
      price: "$10/panel",
      includes: [
        "Deionized water cleaning",
        "Manual squeegee application",
        "Microfiber finish"
      ]
    },
    {
      title: "Solar System Tune-Up",
      price: "$180",
      includes: [
        "10 free panel cleanings",
        "General inspection included",
        "One free advanced inspection panel",
        "$340-$350 value!"
      ]
    },
    {
      title: "Advanced System Inspection",
      price: "$42.50/panel",
      includes: [
        "Full diagnostic testing",
        "Thermal imaging",
        "Problem-solving consultation"
      ]
    },
    {
      title: "Bird/Debris Prevention",
      price: "$5/linear foot",
      includes: [
        "6\" height wire mesh",
        "Full perimeter protection",
        "Professional installation"
      ]
    },
    {
      title: "Pool Solar Maintenance",
      price: "$150",
      includes: [
        "Complete system flush",
        "3 free leak fixes",
        "10% off replacement parts"
      ]
    },
    {
      title: "Hot Water System Service",
      price: "$150",
      includes: [
        "Tank and panel flush",
        "Full system diagnostics",
        "10% off parts during service"
      ]
    }
  ];

  return (
    <>
      <AnimatedHero
        title="Service Packages & Pricing"
        subtitle="Professional solar maintenance solutions for every need"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-900 text-white p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-3xl font-bold text-yellow-400">{item.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.includes.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-6 block text-center bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">Panel Installation Pricing</h2>
            <div className="text-center space-y-2">
              <p className="text-lg">10ft Panels: <span className="font-bold">$650</span></p>
              <p className="text-lg">12ft Panels: <span className="font-bold">$800</span></p>
              <p className="text-gray-600 mt-2">(Additional hanging labor: $50/panel)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              The Difference Professional Cleaning Makes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/dirty--solar-panels.jpeg"
                  alt="Dirty solar panels before cleaning"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold">Before Cleaning</h3>
                  <p>Reduced efficiency due to dirt and debris buildup</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/clean-solar-panels.jpeg"
                  alt="Clean solar panels after professional cleaning"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold">After Cleaning</h3>
                  <p>Maximum efficiency restored with professional cleaning</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
