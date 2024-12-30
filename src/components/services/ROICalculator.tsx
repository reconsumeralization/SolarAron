import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [systemSize, setSystemSize] = useState(5);
  const [currentEfficiency, setCurrentEfficiency] = useState(80);

  const calculateSavings = () => {
    const potentialImprovement = 95 - currentEfficiency;
    const annualProduction = systemSize * 1400; // Average annual kWh per kW
    const currentProduction = (annualProduction * currentEfficiency) / 100;
    const potentialProduction = (annualProduction * 95) / 100;
    const additionalProduction = potentialProduction - currentProduction;
    const annualSavings = additionalProduction * 0.13; // Average electricity rate

    return {
      improvement: potentialImprovement,
      savings: annualSavings.toFixed(2)
    };
  };

  const { improvement, savings } = calculateSavings();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Maintenance Savings Calculator
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            System Size (kW)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={systemSize}
            onChange={(e) => setSystemSize(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold text-blue-600">
            {systemSize} kW
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current System Efficiency (%)
          </label>
          <input
            type="range"
            min="50"
            max="90"
            value={currentEfficiency}
            onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold text-blue-600">
            {currentEfficiency}%
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 p-4 rounded-lg"
        >
          <h3 className="font-semibold text-blue-900 mb-4">Potential Benefits</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-gray-600">Efficiency Improvement</div>
                <div className="font-bold text-green-600">{improvement}%</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-gray-600">Annual Savings</div>
                <div className="font-bold text-green-600">${savings}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}