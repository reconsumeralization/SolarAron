import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Award,
  DollarSign,
  Shield,
  Sun,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';

// Florida-specific constants based on real data
const FL_CONSTANTS = {
  AVERAGE_SUNLIGHT_HOURS: 5.5, // Average daily peak sun hours in Florida
  ELECTRICITY_RATE: 0.1372, // Average Florida electricity rate ($/kWh) as of 2024
  ANNUAL_RATE_INCREASE: 0.024, // Historical average electricity rate increase in Florida
  PANEL_DEGRADATION: 0.005, // Annual panel degradation rate (0.5% per year - industry standard)
  MAINTENANCE_COST_PER_PANEL: 10, // Base cost per panel for cleaning
  REPAIR_COST_AVOIDED: 250, // Average repair cost avoided per year with regular maintenance
  PANELS_PER_KW: 3.5, // Average number of panels per kW of system size
  KWH_PER_KW_YEAR: 1460, // Florida-specific annual kWh production per kW installed (based on NREL data)
  WEATHER_EFFICIENCY: 0.95, // Weather impact factor for Florida climate
  DIRT_LOSS_RATE: 0.15, // 15% annual efficiency loss from dirt without cleaning
  DEGRADATION_MULTIPLIER: 1.5, // Increased degradation multiplier without maintenance
};

export default function ROICalculator() {
  const [systemSize, setSystemSize] = useState(5); // in kW
  const [currentEfficiency, setCurrentEfficiency] = useState(80);
  const [maintenanceFrequency, setMaintenanceFrequency] = useState(2);
  const [panelAge, setPanelAge] = useState(0); // Age of existing system in years

  const calculateSavings = () => {
    // Calculate number of panels
    const numberOfPanels = Math.round(systemSize * FL_CONSTANTS.PANELS_PER_KW);

    // Calculate degradation effects
    const normalDegradation = Math.pow(1 - FL_CONSTANTS.PANEL_DEGRADATION, panelAge);
    const acceleratedDegradation = Math.pow(1 - (FL_CONSTANTS.PANEL_DEGRADATION * FL_CONSTANTS.DEGRADATION_MULTIPLIER), panelAge);

    // Calculate dirt accumulation impact
    const dirtLoss = 1 - (FL_CONSTANTS.DIRT_LOSS_RATE / maintenanceFrequency);

    // Calculate production with and without maintenance
    const baseProduction = systemSize * FL_CONSTANTS.KWH_PER_KW_YEAR;
    const currentProduction = baseProduction * (currentEfficiency / 100) * normalDegradation * dirtLoss * FL_CONSTANTS.WEATHER_EFFICIENCY;
    const unmaintainedProduction = baseProduction * (currentEfficiency / 100) * acceleratedDegradation * (1 - FL_CONSTANTS.DIRT_LOSS_RATE) * FL_CONSTANTS.WEATHER_EFFICIENCY;

    // Calculate financial impacts
    const annualMaintenanceCost = numberOfPanels * FL_CONSTANTS.MAINTENANCE_COST_PER_PANEL * maintenanceFrequency;
    const repairSavings = FL_CONSTANTS.REPAIR_COST_AVOIDED * (maintenanceFrequency / 2); // More maintenance = more issues caught early

    // Production difference in kWh
    const productionDifference = currentProduction - unmaintainedProduction;

    // Financial benefits
    const energySavings = productionDifference * FL_CONSTANTS.ELECTRICITY_RATE;
    const totalAnnualBenefit = energySavings + repairSavings;

    // ROI Calculation
    const roi = ((totalAnnualBenefit - annualMaintenanceCost) / annualMaintenanceCost) * 100;

    // Calculate lifetime benefits
    let lifetimeSavings = 0;
    let currentRate = FL_CONSTANTS.ELECTRICITY_RATE;

    for (let year = 1; year <= 25; year++) {
      currentRate *= (1 + FL_CONSTANTS.ANNUAL_RATE_INCREASE);
      const yearDegradation = Math.pow(1 - FL_CONSTANTS.PANEL_DEGRADATION, year + panelAge);
      const maintainedProduction = baseProduction * 0.98 * yearDegradation * dirtLoss * FL_CONSTANTS.WEATHER_EFFICIENCY;
      const unmaintainedYearProduction = baseProduction * (currentEfficiency / 100) *
        Math.pow(1 - (FL_CONSTANTS.PANEL_DEGRADATION * FL_CONSTANTS.DEGRADATION_MULTIPLIER), year + panelAge) *
        (1 - FL_CONSTANTS.DIRT_LOSS_RATE) * FL_CONSTANTS.WEATHER_EFFICIENCY;

      lifetimeSavings += (maintainedProduction - unmaintainedYearProduction) * currentRate;
      lifetimeSavings += repairSavings;
    }

    return {
      numberOfPanels,
      currentProduction: Math.round(currentProduction),
      unmaintainedProduction: Math.round(unmaintainedProduction),
      productionDifference: Math.round(productionDifference),
      maintenanceCost: annualMaintenanceCost.toFixed(2),
      repairSavings: repairSavings.toFixed(2),
      energySavings: energySavings.toFixed(2),
      totalBenefit: totalAnnualBenefit.toFixed(2),
      roi: roi.toFixed(1),
      lifetime: lifetimeSavings.toFixed(2),
      efficiencyLoss: ((1 - dirtLoss) * 100).toFixed(1),
      degradationDifference: ((acceleratedDegradation - normalDegradation) * 100).toFixed(1)
    };
  };

  const results = calculateSavings();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-blue-900">
          Maintenance ROI Calculator
        </h2>
        <div className="flex items-center gap-2 text-green-600">
          <Award className="w-6 h-6" />
          <span className="text-sm font-semibold">Based on Real Florida Data</span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              System Size (kW)
            </label>
            <div className="relative">
              <input
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={systemSize}
                onChange={(e) => setSystemSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-lg font-semibold text-blue-600 mt-2">
                {systemSize} kW ({results.numberOfPanels} panels)
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current System Efficiency (%)
            </label>
            <div className="relative">
              <input
                type="range"
                min="50"
                max="90"
                value={currentEfficiency}
                onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-lg font-semibold text-blue-600 mt-2">
                {currentEfficiency}%
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              System Age (years)
            </label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={panelAge}
                onChange={(e) => setPanelAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-lg font-semibold text-blue-600 mt-2">
                {panelAge} years
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maintenance Frequency (per year)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={maintenanceFrequency}
                onChange={(e) => setMaintenanceFrequency(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-lg font-semibold text-blue-600 mt-2">
                {maintenanceFrequency}x per year
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-blue-900">Maintenance Benefits Analysis</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-yellow-500" />
              <div>
                <div className="text-sm text-gray-600">Production Loss Without Maintenance</div>
                <div className="font-bold text-yellow-600">{results.productionDifference} kWh/year</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-red-500" />
              <div>
                <div className="text-sm text-gray-600">Efficiency Loss from Dirt</div>
                <div className="font-bold text-red-600">{results.efficiencyLoss}%</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-500" />
              <div>
                <div className="text-sm text-gray-600">Energy Savings</div>
                <div className="font-bold text-green-600">${results.energySavings}/year</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-blue-500" />
              <div>
                <div className="text-sm text-gray-600">Maintenance Cost</div>
                <div className="font-bold text-blue-600">${results.maintenanceCost}/year</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-500" />
              <div>
                <div className="text-sm text-gray-600">Repair Costs Avoided</div>
                <div className="font-bold text-purple-600">${results.repairSavings}/year</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-orange-500" />
              <div>
                <div className="text-sm text-gray-600">ROI</div>
                <div className="font-bold text-orange-600">{results.roi}%</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">25-Year Maintenance Savings</div>
                <div className="text-xs text-gray-500">Including avoided repairs & degradation</div>
              </div>
              <div className="text-xl font-bold text-green-600">${results.lifetime}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
