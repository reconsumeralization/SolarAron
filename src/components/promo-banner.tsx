import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -right-20 -top-20 w-40 h-40 bg-yellow-400"></div>
        <div className="absolute transform -rotate-45 -left-20 -bottom-20 w-40 h-40 bg-yellow-400"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-yellow-400">10% Off</span> All Solar<br />
          Maintenance Packages
        </h2>
        
        <p className="text-xl mb-8 text-blue-100">
          Exclusive offer for existing Florida Solar East customers
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Keep your solar investment running at peak efficiency with our professional maintenance services
        </p>
        
        <Link 
          to="/services" 
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-200"
        >
          View Packages
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner; 