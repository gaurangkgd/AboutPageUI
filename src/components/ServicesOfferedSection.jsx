import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import manImage from '../assets/man.png';

const ServicesOfferedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const carouselRef = useRef(null);

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      id: 1,
      title: "RESIDENTIAL CONSTRUCTION:",
      description: "Independent homes, apartment buildings, villas.",
      image: manImage
    },
    {
      id: 2,
      title: "COMMERCIAL PROJECTS:",
      description: "Offices, showrooms, business parks, retail spaces.",
      image: manImage
    },
    {
      id: 3,
      title: "RESIDENTIAL CONSTRUCTION:",
      description: "Schools, colleges, training centers, hospitals.",
      image: manImage
    },
    {
      id: 4,
      title: "INFRASTRUCTURE PROJECTS:",
      description: "Roads, bridges, public facilities, utilities.",
      image: manImage
    },
    {
      id: 5,
      title: "RENOVATION & REMODELING:",
      description: "Home renovations, office remodeling, upgrades.",
      image: manImage
    }
  ];

  // Create extended array for seamless loop - duplicate services
  const extendedServices = [...services, ...services, ...services];

  // Removed autoplay as requested

  // Autoplay functionality - continuous loop with reset
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Reset to middle section when reaching end to create seamless loop
        if (nextSlide >= services.length * 2) {
          return services.length; // Jump back to middle section
        }
        return nextSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoplayInterval);
  }, [services.length]);

  // Initialize at middle section for seamless looping
  useEffect(() => {
    setCurrentSlide(services.length); // Start at middle section (index 5)
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= services.length * 2) {
        return services.length; // Jump back to middle section
      }
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      if (prevSlide < services.length) {
        return services.length * 2 - 1; // Jump to end of middle section
      }
      return prevSlide;
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
    }
    // Prevent text selection during drag
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentOffset = e.clientX - dragStart;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
    // Restore text selection
    document.body.style.userSelect = '';

    // Determine if drag was significant enough to change slide
    const threshold = 30; // Reduced threshold for more responsive dragging
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        handleMouseMove(e);
      }
    };

    const handleGlobalMouseUp = (e) => {
      if (isDragging) {
        handleMouseUp(e);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, dragOffset]);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          {/* Section Title - Left Aligned */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-700 font-antonio">
              SERVICES OFFERED
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Left Navigation Arrow - Hidden on small screens */}
          <button
            onClick={prevSlide}
            className="absolute -left-8 sm:-left-12 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-200 hidden sm:block"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Services Cards Container - Cover Flow Style */}
          <div 
            className="overflow-visible w-full cursor-grab select-none"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => {
              if (isDragging) {
                setIsDragging(false);
                setDragOffset(0);
                if (carouselRef.current) {
                  carouselRef.current.style.cursor = 'grab';
                }
                document.body.style.userSelect = '';
              }
            }}
            style={{ 
              userSelect: 'none',
              cursor: isDragging ? 'grabbing' : 'grab',
              height: '600px' // Fixed large height
            }}
          >
            {/* Cover Flow Container - True infinite loop with extended services */}
            <div className="flex items-center justify-center relative h-full px-8 sm:px-12 md:px-16">
              {extendedServices.map((service, index) => {
                const position = index - currentSlide;
                const isCenter = index === currentSlide;
                const isVisible = Math.abs(position) <= 2;
                
                if (!isVisible) return null;
                
                let transformStyle = '';
                let zIndex = 1;
                let opacity = 0.7;
                let scale = 0.8;
                
                if (isCenter) {
                  // Center card - large and prominent
                  transformStyle = 'translateX(0) scale(1.1) rotateY(0deg)';
                  zIndex = 10;
                  opacity = 1;
                  scale = 1.1;
                } else if (position === -1) {
                  // Left side card - increased gap even more
                  transformStyle = 'translateX(-320px) scale(0.85) rotateY(25deg)';
                  zIndex = 5;
                  opacity = 0.8;
                  scale = 0.85;
                } else if (position === 1) {
                  // Right side card - increased gap even more
                  transformStyle = 'translateX(320px) scale(0.85) rotateY(-25deg)';
                  zIndex = 5;
                  opacity = 0.8;
                  scale = 0.85;
                } else if (position === -2) {
                  // Far left card (partially visible) - increased gap
                  transformStyle = 'translateX(-560px) scale(0.7) rotateY(35deg)';
                  zIndex = 2;
                  opacity = 0.6;
                  scale = 0.7;
                } else if (position === 2) {
                  // Far right card (partially visible) - increased gap
                  transformStyle = 'translateX(560px) scale(0.7) rotateY(-35deg)';
                  zIndex = 2;
                  opacity = 0.6;
                  scale = 0.7;
                }
                
                return (
                  <div
                    key={`${service.id}-${index}`}
                    className="absolute transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform: transformStyle,
                      zIndex: zIndex,
                      opacity: opacity,
                      width: windowWidth < 640 ? '320px' : windowWidth < 768 ? '380px' : '420px',
                      height: '500px', // Much taller cards
                      perspective: '1000px'
                    }}
                    onClick={() => {
                      if (!isDragging && !isCenter) {
                        setCurrentSlide(index);
                      }
                    }}
                  >
                    <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-full w-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                        style={{ 
                          backgroundImage: `url(${service.image})`,
                          transform: `scale(${scale})`
                        }}
                      ></div>
                      <div className={`absolute inset-0 transition-all duration-500 ${
                        isCenter ? 'bg-black/40' : 'bg-black/60'
                      }`}></div>
                      <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end text-white">
                        <h3 className={`font-bold mb-3 sm:mb-4 leading-tight font-antonio transition-all duration-500 ${
                          isCenter ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`opacity-90 leading-relaxed font-source-sans transition-all duration-500 ${
                          isCenter ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Center Card Highlight */}
                      {isCenter && (
                        <div className="absolute inset-0 ring-2 sm:ring-4 ring-amber-500/50 rounded-xl pointer-events-none transition-all duration-500"></div>
                      )}
                      
                      {/* Gradient overlay for side cards */}
                      {!isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation Arrow - Hidden on small screens */}
          <button
            onClick={nextSlide}
            className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-200 hidden sm:block"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Dots Indicator - All 5 slides */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-amber-700' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;
