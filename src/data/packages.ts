import type { MaintenancePackage } from '../types';

export const packages: MaintenancePackage[] = [
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
