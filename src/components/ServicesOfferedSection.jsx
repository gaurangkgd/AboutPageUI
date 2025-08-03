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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
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
            className="absolute -left-8 sm:-left-12 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-200 hidden sm:block"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Services Cards Container - Cover Flow Style */}
          <div 
            className="overflow-visible w-full cursor-grab select-none flex justify-center items-center"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => {
              // Handle mouse leaving the container while dragging
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
              height: windowWidth < 640 ? '300px' : windowWidth < 1024 ? '350px' : '450px',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            <div className="relative flex justify-center items-center w-full">
              {services.map((service, index) => {
                const isCenter = index === currentSlide;
                let offset = index - currentSlide;
                
                // Handle circular positioning - wrap around for smooth circular flow
                if (offset > services.length / 2) {
                  offset -= services.length;
                } else if (offset < -services.length / 2) {
                  offset += services.length;
                }
                
                const absOffset = Math.abs(offset);
                
                // Calculate transform and styling based on position
                let transform = '';
                let scale = 1;
                let opacity = 1;
                let zIndex = 1;
                
                // Responsive spacing and sizing based on window width
                const isMobile = windowWidth < 640;
                const isTablet = windowWidth < 1024;
                const spacing = isMobile ? 200 : isTablet ? 240 : 280;
                const cardWidth = isMobile ? '280px' : '320px';
                
                if (isCenter) {
                  scale = isMobile ? 1 : 1.1;
                  zIndex = 10;
                  transform = `translateX(${isDragging ? dragOffset : 0}px) scale(${scale})`;
                } else {
                  scale = isMobile ? 0.85 : 0.8;
                  opacity = isMobile ? 0.6 : 0.7;
                  zIndex = 5 - absOffset;
                  const translateX = offset * spacing + (isDragging ? dragOffset : 0);
                  transform = `translateX(${translateX}px) scale(${scale})`;
                }
                
                // Show fewer cards on mobile
                const maxVisible = isMobile ? 1 : 2;
                
                return (
                  <div
                    key={service.id}
                    className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      width: cardWidth,
                      display: absOffset > maxVisible ? 'none' : 'block'
                    }}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="relative bg-black rounded-xl overflow-hidden group shadow-2xl" style={{ height: isMobile ? '250px' : isTablet ? '320px' : '380px' }}>
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      ></div>
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/60"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end text-white">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight font-antonio">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-amber-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Center Card Highlight */}
                      {isCenter && (
                        <div className="absolute inset-0 ring-2 sm:ring-4 ring-amber-500/50 rounded-xl pointer-events-none"></div>
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
            className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-200 hidden sm:block"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
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
