import React from 'react';

import {
  Award,
  Clock,
  Shield,
  Sun,
  ThumbsUp,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  BeforeAfterGallery,
  ImageGallery,
  OurExpertise,
} from '@/components';

import PromoBanner from '../components/promo-banner';

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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose A-Aaron's Florida Solar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <OurExpertise />

      {/* Before/After Gallery */}
      <div className="flex justify-center w-full dark:bg-gray-900">
        <BeforeAfterGallery />
      </div>

      {/* Pool Solar Cleaning Comparison */}
      <section className="py-16 bg-muted dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Pool Solar System Cleaning Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/dirty-solar-panels.jpg"
                  alt="Initial inspection of dirty solar panels"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4">
                  <h3 className="text-lg font-semibold text-white dark:text-white/90">Step 1: Initial Inspection</h3>
                  <p className="text-gray-100 dark:text-gray-200">Assessing system condition and debris buildup</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/aaron-cleaning-solar-panels.jpg"
                  alt="Professional cleaning of solar panels"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4">
                  <h3 className="text-lg font-semibold text-white dark:text-white/90">Step 2: Deep Cleaning</h3>
                  <p className="text-gray-100 dark:text-gray-200">Professional cleaning with specialized equipment</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/clean-solar-panels.jpeg"
                  alt="Clean and efficient solar panels"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm p-4">
                  <h3 className="text-lg font-semibold text-white dark:text-white/90">Step 3: Final Results</h3>
                  <p className="text-gray-100 dark:text-gray-200">Restored efficiency and optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Benefits of Regular Maintenance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-lg shadow-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <div className="flex justify-center w-full">
        <ImageGallery />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Maximize Your Solar Investment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your maintenance service today and ensure your system's optimal performance
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/services"
              className="inline-block bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-accent/90 transition-colors"
            >
              View Services
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
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
