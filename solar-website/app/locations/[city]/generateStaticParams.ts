import { cityData } from './city-data'

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city
  }))
} 