export interface ServiceDetail {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  frequency: string;
  includes: string[];
  standardOperatingProcedures: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'panel-cleaning',
    name: 'Professional Panel Cleaning',
    description: 'Comprehensive cleaning service using specialized equipment and eco-friendly solutions',
    benefits: [
      'Increase energy production by up to 30%',
      'Remove harmful debris and residue',
      'Extend panel lifespan',
      'Maintain warranty compliance'
    ],
    frequency: 'Quarterly recommended',
    includes: [
      'Bird dropping removal',
      'Pollen and dust elimination',
      'Salt residue treatment',
      'Performance testing'
    ],
    standardOperatingProcedures: [
      'Initial system inspection and photography',
      'Application of specialized cleaning solution',
      'Soft brush cleaning of panel surface',
      'Deionized water rinse',
      'Post-cleaning performance measurement',
      'Detailed cleaning report with before/after comparisons'
    ]
  },
  {
    id: 'system-inspection',
    name: 'Technical System Inspection',
    description: 'Detailed examination of all system components',
    benefits: [
      'Early problem detection',
      'Optimal performance assurance',
      'Prevent costly repairs',
      'Extended system life'
    ],
    frequency: 'Bi-annual recommended',
    includes: [
      'Wiring inspection',
      'Connection testing',
      'Inverter performance check',
      'Mounting system evaluation'
    ],
    standardOperatingProcedures: [
      'Visual inspection of all components',
      'Thermal imaging of connections',
      'Voltage and current measurements',
      'Mounting hardware torque verification',
      'Inverter diagnostic testing',
      'Comprehensive system health report'
    ]
  },
  {
    id: 'monitoring-setup',
    name: 'Performance Monitoring Setup',
    description: 'Installation and configuration of advanced monitoring systems',
    benefits: [
      'Real-time performance tracking',
      'Instant alert notifications',
      'Historical data analysis',
      'Mobile app access'
    ],
    frequency: 'One-time setup with monthly checkups',
    includes: [
      'Monitoring hardware installation',
      'Software configuration',
      'Mobile app setup',
      'User training'
    ],
    standardOperatingProcedures: [
      'Site survey and network assessment',
      'Hardware compatibility verification',
      'Sensor installation and calibration',
      'Software setup and testing',
      'Alert system configuration',
      'User interface customization'
    ]
  }
];