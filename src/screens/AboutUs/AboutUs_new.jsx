import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { ServicesOfferedSection } from "./sections/ServiceOfferedSection";

export const AboutUs = () => {
  // Core values data for mapping
  const coreValues = [
    {
      number: "01",
      title: "Integrity",
      description:
        "We believe in transparency, honesty, and ethical business practices.",
    },
    {
      number: "02",
      title: "Quality",
      description: "We commit to excellence in every aspect of construction.",
    },
    {
      number: "03",
      title: "Innovation",
      description:
        "We leverage new technologies and techniques to improve outcomes.",
    },
    {
      number: "04",
      title: "Safety",
      description:
        "We prioritize the health and safety of our workers, clients, and environment.",
    },
    {
      number: "05",
      title: "Client Focus",
      description:
        "We build lasting relationships through communication and accountability.",
    },
  ];

  // Footer links data
  const footerLinks = [
    { text: "ABOUT US" },
    { text: "OUR PROJECTS" },
    { text: "SERVICES" },
    { text: "CONTACT US" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="relative z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-orange-500 font-bold text-xl">
                DP ASSOCIATES
              </div>
              <div className="ml-2 text-white text-sm">WE BUILD TRUST</div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-orange-500 font-medium text-sm">
                About
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">
                Projects
              </a>
            </div>
            
            {/* Contact Button */}
            <div className="hidden md:block">
              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors">
                Contact us
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://c.animaapp.com/mdvey2vvsTasLU/img/image.png")`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            we bring over{' '}
            <span className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
              35 years
            </span>{' '}
            of experience
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            DP Associates is a well-established construction firm operating out of Delhi NCR. With a strong 
            commitment to quality, professionalism, and client satisfaction, we specialize in residential, 
            commercial, and public infrastructure projects. Our team blends years of experience with modern 
            techniques to create structures that are not just strong, but sustainable and efficient.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-50 rounded-3xl shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    VISION
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To become India's most trusted and innovative construction company by creating 
                    quality infrastructure that empowers communities.
                  </p>
                </div>

                <Separator orientation="vertical" className="hidden md:block" />
                <Separator className="md:hidden" />

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    MISSION
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To deliver top-tier construction projects by fostering a culture of excellence, 
                    safety, and sustainability — ensuring every client's dream is built to last.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coreValues.slice(0, 3).map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-orange-500">{value.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreValues.slice(3).map((value, index) => (
              <div key={index + 3} className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-orange-500">{value.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              SERVICES OFFERED
            </h2>
          </div>
          <ServicesOfferedSection />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <div className="text-orange-500 font-bold text-xl mb-2">
                  DP ASSOCIATES
                </div>
                <div className="text-sm text-gray-400">WE BUILD TRUST</div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Trusted government contractor for industrial, residential, and institutional 
                construction across Delhi NCR.
              </p>

              <div className="mb-6">
                <p className="text-gray-300 mb-4">Connect with us on:</p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">@</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">W</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {footerLinks.map((link, index) => (
                  <div key={index} className="text-center">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center text-gray-400">
              2025 DP Associates. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
