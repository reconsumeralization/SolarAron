import { Shield, Clock, Wrench, Zap, CheckCircle } from 'lucide-react'

interface Feature {
  icon: React.ComponentType<any>
  title: string
  description: string
}

interface Package {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  highlight: boolean
}

export default function PackagesPage() {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed and insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for urgent maintenance needs"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Highly trained specialists in solar system maintenance"
    },
    {
      icon: Zap,
      title: "Performance Guarantee",
      description: "We ensure your system operates at peak efficiency"
    }
  ]

  const packages: Package[] = [
    {
      title: "Basic Care",
      price: "$150",
      period: "per year",
      description: "Essential maintenance for single solar system",
      features: [
        "Annual system inspection",
        "Performance monitoring",
        "Basic cleaning service",
        "10% off repairs",
        "Priority scheduling",
        "24/7 phone support"
      ],
      highlight: false
    },
    {
      title: "Premium Care",
      price: "$250",
      period: "per year",
      description: "Comprehensive care for dual solar systems",
      features: [
        "Bi-annual system inspections",
        "Advanced performance monitoring",
        "Deep cleaning service",
        "15% off repairs",
        "Priority emergency response",
        "Quarterly maintenance checks"
      ],
      highlight: true
    },
    {
      title: "Ultimate Care",
      price: "$350",
      period: "per year",
      description: "Complete coverage for all solar systems",
      features: [
        "Quarterly system inspections",
        "Real-time performance tracking",
        "Premium cleaning service",
        "20% off repairs",
        "Same-day emergency service",
        "Monthly system monitoring"
      ],
      highlight: false
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solar Maintenance Packages</h1>
          <p className="text-xl text-gray-600">
            Keep your solar investment performing at its best with our professional maintenance plans
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.title} 
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                pkg.highlight ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">{pkg.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    pkg.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you? Contact us for a personalized recommendation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:3215062981" className="text-blue-600 hover:text-blue-700 font-medium">
              Call (321) 506-2981
            </a>
            <span className="text-gray-300">|</span>
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Send us a message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 