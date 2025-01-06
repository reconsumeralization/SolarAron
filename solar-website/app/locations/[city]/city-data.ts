
export interface CityData {
  readonly title: string
  readonly subtitle: string
  readonly description: string
  readonly areasServed: ReadonlyArray<{
    readonly id: string
    readonly name: string
  }>
  readonly landmarks: ReadonlyArray<{
    readonly id: string
    readonly name: string
  }>
  readonly testimonial: {
    readonly name: string
    readonly location: string
    readonly quote: string
    readonly rating: number
    readonly service: string
    readonly date: string
  }
  readonly stats: {
    readonly customers: number
    readonly responseTime: string
    readonly satisfaction: number
    readonly experience: number
  }
  readonly services: ReadonlyArray<{
    readonly icon: 'droplets' | 'sun' | 'zap'
    readonly title: string
    readonly description: string
  }>
  readonly emergencyInfo: {
    readonly title: string
    readonly phone: string
    readonly hours: string
    readonly response: string
  }
}

export const cityData: Record<string, CityData> = {
  melbourne: {
    title: "Solar Service in Melbourne, FL",
    subtitle: "Your Trusted Solar Maintenance Partner in Melbourne",
    description: "A-Aaron's provides expert solar maintenance and repair services throughout Melbourne, Florida. From beachside properties to mainland homes, we ensure your solar systems perform at their best in Melbourne's unique coastal climate.",
    areasServed: [
      { id: 'area-downtown', name: "Downtown Melbourne" },
      { id: 'area-west', name: "West Melbourne" },
      { id: 'area-satellite', name: "Satellite Beach" },
      { id: 'area-indian-harbour', name: "Indian Harbour Beach" },
      { id: 'area-palm-bay', name: "Palm Bay" },
      { id: 'area-indialantic', name: "Indialantic" },
      { id: 'area-melbourne-beach', name: "Melbourne Beach" },
      { id: 'area-suntree', name: "Suntree" },
      { id: 'area-viera', name: "Viera" }
    ],
    landmarks: [
      { id: 'landmark-mall', name: "Melbourne Square Mall" },
      { id: 'landmark-hospital', name: "Holmes Regional Medical Center" },
      { id: 'landmark-fit', name: "Florida Institute of Technology" },
      { id: 'landmark-pier', name: "Melbourne Beach Pier" },
      { id: 'landmark-zoo', name: "Brevard Zoo" },
      { id: 'landmark-downtown', name: "Historic Downtown Melbourne" }
    ],
    testimonial: {
      name: "Sarah Johnson",
      location: "Melbourne Beach",
      quote: "A-Aaron's showed up exactly when promised and fixed our pool solar system perfectly. Best service we've had in 10 years!",
      rating: 5,
      service: "Pool Solar Repair",
      date: "January 2024"
    },
    stats: {
      customers: 500,
      responseTime: "2 hours",
      satisfaction: 99,
      experience: 15
    },
    services: [
      {
        icon: 'droplets',
        title: "Pool Solar Systems",
        description: "Expert maintenance for your pool heating system, optimized for Melbourne's coastal climate."
      },
      {
        icon: 'sun',
        title: "Hot Water Systems",
        description: "Professional service for solar water heaters, ensuring reliable performance year-round."
      },
      {
        icon: 'zap',
        title: "PV Systems",
        description: "Specialized care for photovoltaic panels, maximizing energy production in Florida's sunshine."
      }
    ],
    emergencyInfo: {
      title: "24/7 Emergency Service in Melbourne",
      phone: "(321) 506-2981",
      hours: "Available 24/7 for emergencies",
      response: "Average 2-hour response time"
    }
  },
  'vero-beach': {
    title: "Solar Service in Vero Beach, FL",
    subtitle: "Your Trusted Solar Maintenance Partner in Vero Beach",
    description: "A-Aaron's provides expert solar maintenance and repair services throughout Vero Beach, Florida. From beachside properties to mainland homes, we ensure your solar systems perform at their best in Vero Beach's unique coastal climate.",
    areasServed: [
      { id: 'area-downtown-vero', name: "Downtown Vero Beach" },
      { id: 'area-south-vero', name: "South Vero Beach" },
      { id: 'area-indian-river', name: "Indian River Shores" },
      { id: 'area-orchid', name: "Orchid" },
      { id: 'area-gifford', name: "Gifford" },
      { id: 'area-sebastian', name: "Sebastian" }
    ],
    landmarks: [
      { id: 'landmark-beach', name: "Vero Beach" },
      { id: 'landmark-museum', name: "Vero Beach Museum of Art" },
      { id: 'landmark-riverside', name: "Riverside Park" },
      { id: 'landmark-mckee', name: "McKee Botanical Garden" },
      { id: 'landmark-jaycee', name: "Jaycee Beach Park" }
    ],
    testimonial: {
      name: "Michael Thompson",
      location: "Vero Beach",
      quote: "A-Aaron's is the best solar service provider we've had. Professional, punctual, and thorough!",
      rating: 5,
      service: "Solar Water Heater Maintenance",
      date: "February 2024"
    },
    stats: {
      customers: 300,
      responseTime: "2 hours",
      satisfaction: 98,
      experience: 15
    },
    services: [
      {
        icon: 'droplets',
        title: "Pool Solar Systems",
        description: "Expert maintenance for your pool heating system, optimized for Vero Beach's climate."
      },
      {
        icon: 'sun',
        title: "Hot Water Systems",
        description: "Professional service for solar water heaters, ensuring reliable performance year-round."
      },
      {
        icon: 'zap',
        title: "PV Systems",
        description: "Specialized care for photovoltaic panels, maximizing energy production in Florida's sunshine."
      }
    ],
    emergencyInfo: {
      title: "24/7 Emergency Service in Vero Beach",
      phone: "(321) 506-2981",
      hours: "Available 24/7 for emergencies",
      response: "Average 2-hour response time"
    }
  }
}

export function validateCityData(city: unknown): city is CityData {
  if (!city || typeof city !== 'object') return false
  const data = city as Record<string, unknown>
  return (
    typeof data.title === 'string' &&
    typeof data.subtitle === 'string' &&
    typeof data.description === 'string' &&
    Array.isArray(data.areasServed) &&
    Array.isArray(data.landmarks) &&
    typeof data.testimonial === 'object' &&
    typeof data.stats === 'object' &&
    Array.isArray(data.services) &&
    typeof data.emergencyInfo === 'object'
  )
} 