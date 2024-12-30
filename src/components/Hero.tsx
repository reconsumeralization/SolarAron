import React from 'react';
import { Sun } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform -rotate-45 -left-1/4 -top-1/4">
          <Sun className="w-96 h-96 text-yellow-500/20" />
        </div>
        <div className="absolute transform rotate-45 -right-1/4 -bottom-1/4">
          <Sun className="w-96 h-96 text-yellow-500/20" />
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          10% Off All Solar
          <span className="block text-yellow-400">Maintenance Packages</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Keep your solar investment running at peak efficiency
        </p>
        <a
          href="/packages"
          className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
        >
          View Packages
        </a>
      </div>
    </div>
  );
}