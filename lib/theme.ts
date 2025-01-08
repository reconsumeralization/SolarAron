export const theme = {
  colors: {
    primary: '#1a237e',     // Deep blue
    secondary: '#0d47a1',   // Secondary blue
    accent: '#ffd700',      // Gold
    light: '#e3f2fd',      // Light blue
    background: '#ffffff',  // Background
    text: {
      primary: '#333333',   // Main text
      secondary: '#666666',   // Secondary text
      light: '#ffffff'     // Light text
    },
  },
  values: {
    phone: '(321) 506-2981',
    email: 'service@aaronsfloridasolar.com',
    address: '123 Solar Way, Melbourne, FL 32901',
    companyName: "A Aaron's Florida Solar",
    serviceAreas: [
      'Melbourne',
      'Palm Bay',
      'Vero Beach',
      'Merritt Island',
      'Titusville',
      'Space Coast'
    ],
    hours: {
      weekday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed (Emergency Service Available)'
    },
    reliabilityStats: {
      experienceYears: 15,
      satisfiedCustomers: 1000,
      responseTimeHours: 24,
      warrantyYears: 10
    }
  }
} as const

export type Theme = typeof theme 