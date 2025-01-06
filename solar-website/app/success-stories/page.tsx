import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
  service: string
  date: string
}

interface CaseStudy {
  title: string
  description: string
  challenge: string
  solution: string
  result: string
  savings: string
  location: string
  date: string
}

export default function SuccessStoriesPage() {
  const generateStarKey = (rating: number, name: string) => `${name}-star-${rating}`

  const testimonials: Testimonial[] = [
    {
      name: "John D.",
      location: "Melbourne, FL",
      quote: "A A-ron's's Solar transformed our system's performance. Their maintenance program has kept our pool at the perfect temperature year-round.",
      rating: 5,
      service: "Pool Solar Maintenance",
      date: "January 2024"
    },
    {
      name: "Sarah M.",
      location: "Vero Beach, FL",
      quote: "Professional, punctual, and thorough. Our solar water heater has never worked better since their maintenance visit.",
      rating: 5,
      service: "DHW System Service",
      date: "December 2023"
    },
    {
      name: "Michael R.",
      location: "Palm Bay, FL",
      quote: "The difference in our energy production after their cleaning and maintenance service was remarkable. Highly recommended!",
      rating: 5,
      service: "PV Panel Maintenance",
      date: "November 2023"
    }
  ]

  const caseStudies: CaseStudy[] = [
    {
      title: "Pool Solar System Revival",
      description: "Complete restoration of an aging pool solar heating system",
      challenge: "A 10-year-old solar pool heating system with significant performance degradation and multiple leaks.",
      solution: "Comprehensive system inspection, leak repair, panel restoration, and system optimization.",
      result: "Restored system efficiency to 95%, extending system life by 5+ years.",
      savings: "Saved client $3,500 compared to system replacement",
      location: "Merritt Island, FL",
      date: "October 2023"
    },
    {
      title: "DHW System Optimization",
      description: "Performance enhancement for domestic hot water system",
      challenge: "Inefficient hot water production and increasing energy bills.",
      solution: "System rebalancing, sensor calibration, and tank maintenance.",
      result: "40% improvement in hot water production efficiency.",
      savings: "Reduced energy costs by $45/month",
      location: "Melbourne Beach, FL",
      date: "September 2023"
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600">
            See how we've helped Florida homeowners maintain and optimize their solar investments
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-sm p-8">
                <Quote className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, rating) => (
                    <Star 
                      key={generateStarKey(rating, testimonial.name)}
                      className="w-5 h-5 text-yellow-400" 
                    />
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <p className="text-blue-600 text-sm mt-2">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <p className="text-gray-600 mb-4">{study.result}</p>
                      <div className="bg-blue-50 p-4 rounded-md">
                        <p className="text-blue-600 font-semibold">{study.savings}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{study.location}</span>
                    <span>{study.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Ready to experience similar results with your solar system?
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 