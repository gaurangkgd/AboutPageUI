import React from 'react';
import heroImage from '../assets/hero.png';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar integrated within Hero */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading - WE BRING OVER */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 font-antonio">
            WE BRING OVER
          </h1>
          
          {/* Highlighted Experience Text - Only 35 YEARS with background */}
          <div className="mb-6 sm:mb-8">
            <span className="text-white px-2 py-0.5 rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-antonio" style={{ backgroundColor: '#7D5326' }}>
              35 YEARS
            </span>
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ml-2 sm:ml-4 font-antonio">
              OF EXPERIENCE
            </span>
          </div>
          
          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            DP Associates is a well-established construction firm operating out of Delhi NCR. With a strong 
            commitment to quality, professionalism, and client satisfaction, we specialize in residential, 
            commercial, and public infrastructure projects. Our team blends years of experience with 
            modern techniques to create structures that are not just strong, but sustainable and efficient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
