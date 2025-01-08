import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Shield, Wrench, Droplets, ThermometerSun } from 'lucide-react';

interface ServiceDetail {
  title: string;
  icon: React.ElementType;
  description: string;
  process: string[];
  benefits: string[];
}

const ServicePage: React.FC = () => {
  const services: ServiceDetail[] = [
    {
      title: "PV Panel Cleaning",
      icon: Droplets,
      description: "Our specialized cleaning process ensures maximum efficiency while protecting your investment. We use only the highest quality materials and techniques to maintain your panels.",
      process: [
        "Initial inspection for any damage or issues",
        "Gentle cleaning with deionized water and proprietary solution",
        "Manual squeegee application with special attention to stubborn areas",
        "Final polish with professional-grade microfiber cloth",
        "Post-cleaning inspection and performance check"
      ],
      benefits: [
        "Increased energy production",
        "Extended panel lifespan",
        "Prevention of hot spots and damage",
        "Improved system efficiency"
      ]
    },
    {
      title: "Solar System Tune-Up",
      icon: Wrench,
      description: "A comprehensive maintenance package that covers all aspects of your solar system, ensuring optimal performance and longevity.",
      process: [
        "Detailed inspection of all roof penetrations and seals",
        "Check and reseal mounting points as needed",
        "Thorough testing of all electrical connections",
        "Complete rack mounting system inspection",
        "Performance analysis and optimization",
        "Cleaning of selected panels",
        "Advanced inspection of critical components"
      ],
      benefits: [
        "Comprehensive system health check",
        "Prevention of potential issues",
        "Optimal system performance",
        "Extended system lifespan"
      ]
    },
    {
      title: "Advanced System Inspection",
      icon: Shield,
      description: "In-depth diagnostic testing and analysis to identify and prevent potential issues before they become problems.",
      process: [
        "Complete IV curve analysis for performance testing",
        "Thermal imaging to detect hot spots and potential issues",
        "Detailed inverter diagnostic check",
        "Comprehensive shading analysis",
        "System efficiency evaluation",
        "Detailed problem-solving consultation",
        "Performance optimization recommendations"
      ],
      benefits: [
        "Early problem detection",
        "Maximized system efficiency",
        "Professional documentation",
        "Expert recommendations"
      ]
    },
    {
      title: "Bird/Debris Prevention",
      icon: Shield,
      description: "Professional installation of protective measures to prevent wildlife interference and debris accumulation.",
      process: [
        "Site assessment and measurement",
        "Custom wire mesh cutting and preparation",
        "Professional installation around panel perimeter",
        "Secure mounting with specialized hardware",
        "Final inspection and adjustment"
      ],
      benefits: [
        "Prevention of nest building",
        "Protection from debris accumulation",
        "Maintained system aesthetics",
        "Reduced maintenance needs"
      ]
    },
    {
      title: "Pool Solar Maintenance",
      icon: Sun,
      description: "Comprehensive maintenance service for your pool solar system to ensure efficient heating and operation.",
      process: [
        "Complete system pressure testing",
        "Thorough flush of all panels and pipes",
        "Detailed inspection of all fasteners and connections",
        "Leak detection and repair",
        "Flow rate testing and optimization",
        "System efficiency analysis"
      ],
      benefits: [
        "Optimal heating efficiency",
        "Prevention of leaks",
        "Extended system life",
        "Reduced operating costs"
      ]
    },
    {
      title: "Hot Water System Service",
      icon: ThermometerSun,
      description: "Detailed maintenance and inspection of your solar hot water system to ensure reliable performance.",
      process: [
        "Tank inspection and flush",
        "Panel cleaning and inspection",
        "Complete voltage testing from panels",
        "DC pipe inspection and insulation check",
        "System pressure testing",
        "Temperature sensor verification",
        "Controller programming check"
      ],
      benefits: [
        "Consistent hot water supply",
        "Improved system efficiency",
        "Extended equipment life",
        "Lower operating costs"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Professional solar maintenance solutions with attention to every detail
        </p>

        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Our Process:</h3>
                    <ul className="space-y-3">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Benefits:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/pricing"
            className="inline-block bg-blue-900 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-800 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage; 