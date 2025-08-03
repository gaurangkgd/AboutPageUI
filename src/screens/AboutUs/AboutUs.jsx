import React from "react";
import HeroSection from "../../components/HeroSection";
import VisionMissionSection from "../../components/VisionMissionSection";
import ServicesOfferedSection from "../../components/ServicesOfferedSection";
import Footer from "../../components/Footer";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VisionMissionSection />
      <ServicesOfferedSection />
      <Footer />
    </div>
  );
};
