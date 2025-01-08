import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">A-Aaron's Florida Solar</h2>
          <p className="text-blue-100">
            Professional solar maintenance and repair services across Florida
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>(321) 506-2981</li>
            <li>Email Us</li>
            <li>Brevard County, FL</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <p className="text-blue-100">
            Serving Brevard County
          </p>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-8 pt-8">
        <div className="container mx-auto px-4 text-center text-blue-200">
          © 2025 Home Improvement LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;