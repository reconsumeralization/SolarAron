import { Droplets, Battery, Shield, Sun } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Sun,
      title: "Pool Solar Excellence",
      description: "Expert maintenance and optimization of your pool solar system for maximum efficiency.",
      gradient: "from-orange-400 to-yellow-400"
    },
    {
      icon: Droplets,
      title: "Hot Water Solutions",
      description: "Comprehensive DHW system care to ensure reliable hot water year-round.",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Battery,
      title: "PV System Care",
      description: "Professional maintenance of your photovoltaic system for optimal power generation.",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: Shield,
      title: "Guaranteed Service",
      description: "Licensed and insured professionals you can trust with your solar investment.",
      gradient: "from-purple-400 to-indigo-400"
    }
  ]

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-blue-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-white mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transform rotate-45 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 