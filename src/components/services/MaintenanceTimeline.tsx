import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Cloud, Thermometer, Wind } from 'lucide-react';

const seasons = [
  {
    name: 'Spring',
    icon: Sun,
    tasks: ['Pollen removal', 'System inspection', 'Performance testing'],
    importance: 'Critical for maintaining efficiency during pollen season'
  },
  {
    name: 'Summer',
    icon: Thermometer,
    tasks: ['Heat stress check', 'Deep cleaning', 'Efficiency optimization'],
    importance: 'Essential for peak performance during highest production months'
  },
  {
    name: 'Fall',
    icon: Wind,
    tasks: ['Storm damage inspection', 'Leaf removal', 'Weather preparation'],
    importance: 'Prepare system for winter weather conditions'
  },
  {
    name: 'Winter',
    icon: Cloud,
    tasks: ['Rain residue cleaning', 'Connection check', 'Performance monitoring'],
    importance: 'Maintain efficiency during lower light conditions'
  }
];

export default function MaintenanceTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Year-Round Maintenance Schedule
      </h2>

      <div className="space-y-8">
        {seasons.map((season, index) => {
          const Icon = season.icon;
          return (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {season.name}
                </h3>
                <ul className="space-y-2 mb-2">
                  {season.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">{season.importance}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}