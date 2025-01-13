'use client'

import React from 'react'

const stats = [
  { id: 'systems', value: '1000+', label: 'Systems Maintained' },
  { id: 'experience', value: '15+', label: 'Years Experience' },
  { id: 'satisfaction', value: '100%', label: 'Customer Satisfaction' },
  { id: 'response', value: '24', label: 'Hour Response Time' }
]

export function Stats(): JSX.Element {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-blue-100 relative">
                {stat.label}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-yellow-400/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 