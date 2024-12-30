import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Seamless Transfer",
    description: "Quick and easy transition with no service interruption"
  },
  {
    icon: Clock,
    title: "Priority Service",
    description: "Get immediate attention from our expert technicians"
  },
  {
    icon: Wrench,
    title: "Expert Maintenance",
    description: "Professional care from certified solar specialists"
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Optimize your system's efficiency and output"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function TransferBenefits() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
    >
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">
              {benefit.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}