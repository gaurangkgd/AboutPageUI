import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
          
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="mr-4">
                <img 
                  src={logo} 
                  alt="DP Associates" 
                  className="h-16 sm:h-18 md:h-20 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Trusted government contractor for industrial, residential, and institutional construction across Delhi NCR.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-1 flex justify-center lg:justify-center">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 text-center sm:text-left">
              <a 
                href="#about" 
                className="text-white hover:text-amber-600 transition-colors duration-200 font-medium text-sm"
              >
                ABOUT US
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-amber-600 transition-colors duration-200 font-medium text-sm"
              >
                OUR PROJECTS
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-amber-600 transition-colors duration-200 font-medium text-sm"
              >
                SERVICES
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="pt-4 sm:pt-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Social Media Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-gray-300 text-xs sm:text-sm mr-0 sm:mr-2">CONNECT WITH US ON:</span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-700 hover:bg-amber-600 rounded-sm flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-700 hover:bg-amber-600 rounded-sm flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-700 hover:bg-amber-600 rounded-sm flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-700 hover:bg-amber-600 rounded-sm flex items-center justify-center transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Contact Us Text - Right Side */}
            <div className="text-white text-xs sm:text-sm font-medium">
              CONTACT US
            </div>
          </div>
        </div>

        {/* Copyright Section - Centered at Bottom */}
        <div className="border-t border-gray-800 pt-4">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              2025 DP Associates. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
