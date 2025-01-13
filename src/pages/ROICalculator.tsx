import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  DollarSign,
  Shield,
  Sun,
  Zap,
} from 'lucide-react';

import { AnimatedHero } from '@/components';
import { MaintenancePackage } from '@/types';

import { packages } from '../data/packages';

export default function ROICalculator() {
  const [systemSize, setSystemSize] = useState(5); // kW
  const [systemAge, setSystemAge] = useState(2); // years
  const [currentEfficiency, setCurrentEfficiency] = useState(85); // percentage

  const calculateSavings = () => {
    const potentialEfficiency = 95;
    const efficiencyGain = potentialEfficiency - currentEfficiency;
    const annualProduction = systemSize * 1400; // avg kWh per kW in Florida
    const electricityRate = 0.14; // Florida average rate

    return {
      annual: (annualProduction * (efficiencyGain/100) * electricityRate).toFixed(2),
      fiveYear: (annualProduction * (efficiencyGain/100) * electricityRate * 5).toFixed(2),
      efficiency: efficiencyGain.toFixed(1),
      monthlyBill: ((annualProduction * (efficiencyGain/100) * electricityRate) / 12).toFixed(2)
    };
  };

  const savings = calculateSavings();

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHero
        title="Calculate Your Solar Savings"
        subtitle="See how much you could save with professional solar maintenance"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calculate Your Solar Savings
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            See how much you could save with professional solar maintenance
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            Based on real Florida solar performance data
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-xl shadow-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <Calculator className="w-6 h-6 text-primary" />
              System Details
            </h2>

            <div className="space-y-8">
              <div>
                <label className="block text-base font-medium text-foreground mb-2">
                  System Size (kW)
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 kW</span>
                  <span className="text-primary font-semibold">{systemSize} kW</span>
                  <span>20 kW</span>
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-foreground mb-2">
                  System Age (years)
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={systemAge}
                  onChange={(e) => setSystemAge(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>New</span>
                  <span className="text-primary font-semibold">{systemAge} years</span>
                  <span>20+ years</span>
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-foreground mb-2">
                  Current Efficiency (%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>50%</span>
                  <span className="text-primary font-semibold">{currentEfficiency}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-xl shadow-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              Your Potential Savings
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <Zap className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Efficiency Improvement</p>
                  <p className="text-3xl font-bold text-primary">+{savings.efficiency}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Potential performance gain</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <DollarSign className="w-10 h-10 text-emerald-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Savings</p>
                  <p className="text-3xl font-bold text-emerald-500">${savings.monthlyBill}</p>
                  <p className="text-sm text-muted-foreground mt-1">${savings.annual} annually</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <Calculator className="w-10 h-10 text-yellow-500" />
                <div>
                  <p className="text-sm text-muted-foreground">5-Year Savings</p>
                  <p className="text-3xl font-bold text-yellow-500">${savings.fiveYear}</p>
                  <p className="text-sm text-muted-foreground mt-1">Total projected savings</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Get Started with Maintenance
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Recommended Packages */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Recommended Maintenance Packages</h2>
            <p className="text-muted-foreground">Choose the perfect maintenance package to maximize your solar investment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg: MaintenancePackage) => (
              <motion.div
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-xl shadow-lg p-8 border border-border relative flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary mb-1">${pkg.price}</p>
                <p className="text-sm text-muted-foreground mb-6">per service</p>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
