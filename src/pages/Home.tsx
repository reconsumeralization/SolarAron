import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Maintenance Services?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800"
                alt="Solar Panel Maintenance"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Our certified technicians ensure your solar system performs at its best.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800"
                alt="Solar Performance"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maximum Efficiency</h3>
              <p className="text-gray-600">Regular maintenance keeps your system running at peak performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800"
                alt="Savings Calculator"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Save More</h3>
              <p className="text-gray-600">Preventive maintenance helps avoid costly repairs and extends system life.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}