import React, { useState } from 'react';
import PackageCard from '../components/PackageCard';
import type { MaintenancePackage } from '../types';

const packages: MaintenancePackage[] = [
  {
    id: 'basic',
    name: 'Basic Care',
    price: 299,
    features: [
      'Annual inspection',
      'Panel cleaning',
      'Performance check',
      'Basic monitoring',
      '10% off repairs'
    ],
    savings: 450
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: 499,
    features: [
      'Bi-annual inspection',
      'Priority panel cleaning',
      'Advanced diagnostics',
      '24/7 monitoring',
      '20% off repairs',
      'Emergency support'
    ],
    recommended: true,
    savings: 800
  },
  {
    id: 'ultimate',
    name: 'Ultimate Care',
    price: 799,
    features: [
      'Quarterly inspection',
      'Premium panel cleaning',
      'Comprehensive diagnostics',
      'Real-time monitoring',
      '30% off repairs',
      'Priority emergency support',
      'Extended warranty coverage'
    ],
    savings: 1200
  }
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    setSelectedPackage(id);
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Maintenance Packages
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose the perfect care package for your solar system
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={handlePackageSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}