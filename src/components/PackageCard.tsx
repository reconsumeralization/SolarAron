import React from 'react';
import { Check } from 'lucide-react';
import type { MaintenancePackage } from '../types';

interface PackageCardProps {
  pkg: MaintenancePackage;
  onSelect: (id: string) => void;
}

export default function PackageCard({ pkg, onSelect }: PackageCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl p-8 ${pkg.recommended ? 'border-2 border-yellow-500' : ''}`}>
      {pkg.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
            Recommended
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-900">${pkg.price}</span>
        <span className="text-gray-600">/year</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-lg font-semibold text-green-600 mb-6">
        Save ${pkg.savings} per year!
      </div>
      
      <button
        onClick={() => onSelect(pkg.id)}
        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300"
      >
        Select Package
      </button>
    </div>
  );
}