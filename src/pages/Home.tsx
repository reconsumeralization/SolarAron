import React from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/promo-banner';
import { Sun, Shield, Wrench, ThumbsUp, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Expert Care",
    description: "Professional maintenance by certified solar technicians with years of experience"
  },
  {
    icon: Wrench,
    title: "Comprehensive Service",
    description: "From cleaning to advanced diagnostics, we handle all your solar maintenance needs"
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Results",
    description: "Improved efficiency and extended system life with our maintenance programs"
  }
];

const benefits = [
  {
    icon: Sun,
    title: "Maximum Efficiency",
    description: "Regular maintenance ensures your panels operate at peak performance"
  },
  {
    icon: Award,
    title: "Extended Lifespan",
    description: "Protect your investment with professional care and maintenance"
  },
  {
    icon: Clock,
    title: "Preventive Care",
    description: "Catch and fix issues before they become costly problems"
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose A-Aaron's Florida Solar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Regular Maintenance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Maximize Your Solar Investment?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your maintenance service today and ensure your system's optimal performance
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/services" 
              className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors"
            >
              View Services
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;