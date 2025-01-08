import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Home, Phone, Menu, X, Wrench, DollarSign } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: Wrench },
  { path: '/pricing', label: 'Pricing', icon: DollarSign },
  { path: '/contact', label: 'Contact', icon: Phone }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">A-Aaron's Florida Solar</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200
                  ${isActive(path) 
                    ? 'text-yellow-500 bg-blue-50' 
                    : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50'
                  }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-yellow-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200
                  ${isActive(path)
                    ? 'text-yellow-500 bg-blue-50'
                    : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}