import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { customerPersonas } from '../data/personas';

export default function CustomerStories() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Customer Success Stories
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Real experiences from former Florida Solar East customers
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerPersonas.map((persona) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-blue-800">{persona.name}</h2>
                <p className="text-gray-600">{persona.occupation}</p>
                <p className="text-blue-600">{persona.location}</p>
              </div>
              
              <p className="text-gray-700 mb-4">{persona.story}</p>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-start gap-2">
                  <Quote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 italic">{persona.testimonial}</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 mt-4">
                Selected Package: <span className="font-semibold text-blue-600">{persona.package}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}