import { useState } from 'react';

import {
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { services } from '../data/services';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    const initialValue = JSON.parse(saved || 'false');
    if (initialValue) {
      document.documentElement.classList.add('dark');
    }
    return initialValue;
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'} shadow-lg fixed w-full z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'} flex items-center gap-2`}>
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Moon className="w-6 h-6 text-blue-400" />
                ) : (
                  <Sun className="w-6 h-6 text-yellow-500" />
                )}
              </button>
              A A-ron's Solar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} flex items-center gap-1`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className={`absolute top-full left-0 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg py-2 ${isServicesOpen ? 'block' : 'hidden'}`}>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`block px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-blue-50'}`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                  <Link
                    to="/services"
                    className={`block px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-blue-50'} font-medium`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
              Pricing
            </Link>

            <Link to="/roi-calculator" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
              ROI Calculator
            </Link>
            <Link to="/system-health" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
              Health Check
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t border-gray-100 dark:border-gray-800`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Services Section */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
              <div className={`px-3 py-2 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Services</div>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md pl-6`}
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/services"
                className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md font-medium`}
                onClick={() => setIsOpen(false)}
              >
                View All Services
              </Link>
            </div>

            <Link
              to="/pricing"
              className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>

            <Link
              to="/roi-calculator"
              className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md`}
              onClick={() => setIsOpen(false)}
            >
              ROI Calculator
            </Link>
            <Link
              to="/system-health"
              className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-blue-50'} rounded-md`}
              onClick={() => setIsOpen(false)}
            >
              Health Check
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
