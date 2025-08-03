import React from 'react';
import section2Image from '../assets/section2.png';

const VisionMissionSection = () => {
  return (
    <section 
      className="relative min-h-screen pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16"
      style={{ backgroundImage: `url(${section2Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Light overlay for better readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      {/* Vision and Mission Cards - Positioned to overlap between hero and this section */}
      <div className="absolute -top-24 sm:-top-32 md:-top-40 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            {/* Vision Card */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-wide font-antonio">
                VISION
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                To become India's most trusted and innovative construction company by 
                creating quality infrastructure that empowers communities.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 border-t md:border-t-0 md:border-l border-gray-300">
              <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-wide font-antonio">
                MISSION
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                To deliver top-tier construction projects by fostering a culture of excellence, safety, and 
                sustainability — ensuring every client's dream is built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Core Values Section */}
        <div className="space-y-8 sm:space-y-12 mt-16 sm:mt-20 md:mt-24">
          {/* Row 1: Integrity, Quality, Innovation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-1 h-24 sm:h-32 bg-orange-600 shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-amber-700 text-2xl sm:text-3xl font-bold block mb-3 sm:mb-4 font-antonio">01</span>
                <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-source-sans">Integrity</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-source-sans">
                  We believe in transparency, honesty, and ethical business practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-1 h-24 sm:h-32 bg-orange-600 shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-amber-700 text-2xl sm:text-3xl font-bold block mb-3 sm:mb-4 font-antonio">02</span>
                <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-source-sans">Quality</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-source-sans">
                  We commit to excellence in every aspect of construction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 sm:col-span-2 lg:col-span-1">
              <div className="w-1 h-24 sm:h-32 bg-orange-600 shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-amber-700 text-2xl sm:text-3xl font-bold block mb-3 sm:mb-4 font-antonio">03</span>
                <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-source-sans">Innovation</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-source-sans">
                  We leverage new technologies and techniques to improve outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Safety, Client Focus (centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-1 h-24 sm:h-32 bg-orange-600 shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-amber-700 text-2xl sm:text-3xl font-bold block mb-3 sm:mb-4 font-antonio">04</span>
                <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-source-sans">Safety</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-source-sans">
                  We prioritize the health and safety of our workers, clients, and environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-1 h-24 sm:h-32 bg-orange-600 shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-amber-700 text-2xl sm:text-3xl font-bold block mb-3 sm:mb-4 font-antonio">05</span>
                <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-source-sans">Client Focus</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-source-sans">
                  We build lasting relationships through communication and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
