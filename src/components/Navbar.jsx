import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 pt-2 sm:pt-4">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Actual logo image */}
              <img 
                src={logo} 
                alt="DP Associates Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto mr-3"
              />
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-white hover:text-orange-500 px-2 lg:px-3 py-2 text-sm font-medium transition-colors font-source-sans-pro">
              Home
            </a>
            <a href="#about" className="text-orange-500 px-2 lg:px-3 py-2 text-sm font-medium font-source-sans-pro">
              About
            </a>
            <a href="#services" className="text-white hover:text-orange-500 px-2 lg:px-3 py-2 text-sm font-medium transition-colors font-source-sans-pro">
              Services
            </a>
            <a href="#projects" className="text-white hover:text-orange-500 px-2 lg:px-3 py-2 text-sm font-medium transition-colors font-source-sans-pro">
              Projects
            </a>
          </div>

          {/* Contact us button - Right side */}
          <div className="hidden md:flex">
            <button className="text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-colors font-source-sans-pro hover:opacity-90" style={{ backgroundColor: '#473018' }}>
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white hover:text-orange-500 focus:outline-none focus:text-orange-500"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-50">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a 
                href="#home" 
                className="block text-white hover:text-orange-500 px-3 py-3 text-base font-medium transition-colors font-source-sans-pro border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-orange-500 px-3 py-3 text-base font-medium font-source-sans-pro border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block text-white hover:text-orange-500 px-3 py-3 text-base font-medium transition-colors font-source-sans-pro border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="block text-white hover:text-orange-500 px-3 py-3 text-base font-medium transition-colors font-source-sans-pro border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-orange-500 px-3 py-3 text-base font-medium transition-colors font-source-sans-pro"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
