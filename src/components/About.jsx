import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import VisionMissionSection from './VisionMissionSection';
import ServicesOfferedSection from './ServicesOfferedSection';
import Footer from './Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMissionSection />
      <ServicesOfferedSection />
      <Footer />
    </div>
  );
};

export default About;
