import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TabButtonProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ id, label, icon: Icon, isActive, onClick }: TabButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
      }`}
    >
      <Icon size={20} />
      {label}
    </motion.button>
  );
}