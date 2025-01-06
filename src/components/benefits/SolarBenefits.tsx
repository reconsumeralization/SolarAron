import React, { useState } from 'react';
import { Info, Package, Settings, Sun, Clock, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BenefitCard from './BenefitCard';
import TabButton from './TabButton';
import MonthlyPackages from './MonthlyPackages';
import { benefits } from '../../data/benefits';

const tabs = [
  { id: 'benefits', label: 'Benefits', icon: Sun },
  { id: 'maintenance', label: 'Maintenance', icon: Settings },
  { id: 'monthly', label: 'Monthly Plans', icon: Repeat },
  { id: 'packages', label: 'Packages', icon: Package },
  { id: 'scheduling', label: 'Scheduling', icon: Clock }
];

export default function SolarBenefits() {
  const [activeTab, setActiveTab] = useState('benefits');
  const [activePoint, setActivePoint] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'monthly':
        return <MonthlyPackages />;
      // ... other cases remain the same as your original code
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6">
          <h1 className="text-4xl font-serif text-blue-900 mb-8 text-center">
            Solar Panel Maintenance & Cleaning
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}