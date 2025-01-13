import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Droplets, Battery, CircleDollarSign } from 'lucide-react'
import React from 'react'

export function Services() {
  const services = [
    {
      title: "Pool/Spa Solar System",
      description: "Complete system inspection including checking your pool solar system for leaks and proper operation.",
      icon: Sun,
      price: null
    },
    {
      title: "DHW (Hot Water) System",
      description: "Full hot water system inspection with silicone resealed panels, sensor checks, and tank inspection.",
      icon: Droplets,
      price: null
    },
    {
      title: "PV (Electric) System",
      description: "Thorough inspection of all panels and supplies, testing grid connection, and performance monitoring.",
      icon: Battery,
      price: null
    },
    {
      title: "Yearly Maintenance Plans",
      description: "Choose from our tiered maintenance plans:\n• Single System: $150/year\n• Double System: $250/year\n• Triple System: $350/year",
      icon: CircleDollarSign,
      price: "Starting at $150/year"
    },
  ]

  return (
    <section className="py-20 bg-zinc-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="bg-zinc-900 border-yellow-400/20">
              <CardHeader>
                <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle className="text-yellow-200">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 whitespace-pre-line">{service.description}</p>
                {service.price && (
                  <p className="text-yellow-400 mt-4 font-semibold">{service.price}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

