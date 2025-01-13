import { IMAGES } from '../constants/images';
import type { ServiceDetails } from '../types';

export const services: ServiceDetails[] = [
  {
    id: 'system-inspection',
    name: 'Advanced System Inspection',
    price: 42.50,
    priceUnit: 'per panel',
    description: 'Comprehensive solar system inspection using advanced diagnostic tools',
    features: [
      'Full diagnostic testing',
      'Thermal imaging analysis',
      'Problem-solving consultation',
      'Detailed performance report',
      'Maintenance recommendations'
    ],
    benefits: [
      'Identify potential issues early',
      'Optimize system performance',
      'Extend system lifespan',
      'Maintain warranty compliance'
    ],
    image: IMAGES.services.inspection
  },
  {
    id: 'bird-prevention',
    name: 'Bird/Debris Prevention',
    price: 5,
    priceUnit: 'per linear foot',
    description: 'Professional bird and debris prevention system installation',
    features: [
      '6" height wire mesh',
      'Full perimeter protection',
      'Professional installation',
      'Weather-resistant materials',
      'Warranty protection'
    ],
    benefits: [
      'Prevent bird nesting',
      'Reduce maintenance needs',
      'Protect system components',
      'Maintain system efficiency'
    ],
    image: IMAGES.services.birdPrevention
  },
  {
    id: 'pool-solar',
    name: 'Pool Solar Maintenance',
    price: 150,
    priceUnit: 'flat rate',
    description: 'Complete pool solar system maintenance service',
    features: [
      'Complete system flush',
      '3 free leak fixes',
      '10% off replacement parts',
      'Performance testing',
      'System optimization'
    ],
    benefits: [
      'Extend pool season',
      'Reduce heating costs',
      'Prevent system damage',
      'Optimize water flow'
    ],
    image: IMAGES.services.poolSolar
  },
  {
    id: 'hot-water',
    name: 'Hot Water System Service',
    price: 150,
    priceUnit: 'flat rate',
    description: 'Comprehensive solar hot water system maintenance',
    features: [
      'Tank and panel flush',
      'Full system diagnostics',
      '10% off parts during service',
      'Pressure testing',
      'Sensor calibration'
    ],
    benefits: [
      'Ensure reliable hot water',
      'Reduce energy costs',
      'Prevent system failures',
      'Extend system life'
    ],
    image: IMAGES.services.hotWater
  },
  {
    id: 'panel-installation',
    name: 'Panel Installation',
    description: 'Professional solar panel installation services',
    features: [
      'Expert installation team',
      'Quality mounting hardware',
      'System testing and certification',
      'Warranty registration',
      'Post-installation support'
    ],
    benefits: [
      'Professional mounting',
      'Optimal positioning',
      'Warranty protection',
      'Code compliance'
    ],
    priceOptions: [
      {
        size: '10ft',
        price: 650,
        laborCost: 50
      },
      {
        size: '12ft',
        price: 800,
        laborCost: 50
      }
    ],
    image: IMAGES.services.panelInstallation
  }
];
