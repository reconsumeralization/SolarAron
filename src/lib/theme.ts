export const theme = {
  colors: {
    primary: '#1a237e',     // Deep blue
    secondary: '#0d47a1',   // Secondary blue
    accent: '#ffd700',      // Gold
    light: '#e3f2fd',      // Light blue
    background: {
      light: '#ffffff',
      dark: '#0f172a'
    },
    text: {
      primary: {
        light: '#333333',
        dark: '#f8fafc'
      },
      secondary: {
        light: '#666666',
        dark: '#cbd5e1'
      },
      accent: {
        light: '#1a237e',
        dark: '#ffd700'
      }
    },
    card: {
      light: '#ffffff',
      dark: '#1e293b'
    },
    border: {
      light: '#e2e8f0',
      dark: '#334155'
    },
    hover: {
      light: '#f8fafc',
      dark: '#334155'
    }
  },
  values: {
    phone: '1-321-720-1500',
    email: 'a.a.ronshomeimprovement321@gmail.com',
    address: '123 Solar Way, Melbourne, FL 32901',
    companyName: "A A-ron's Florida Solar",
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
