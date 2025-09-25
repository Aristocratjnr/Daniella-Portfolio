"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ProjectsSection() {
    const categories = ["Web Design", "Mobile App Design", "Wireframe", "Prototype", "Dashboard"]
    const containerRef = useRef<HTMLDivElement | null>(null)
    
    // Add CSS variable handling for dark mode
    useEffect(() => {
      const setDarkModeStyles = () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        document.documentElement.style.setProperty('--background-color', isDarkMode ? 'rgba(17, 24, 39, 0.85)' : 'transparent');
        document.documentElement.style.setProperty('--blend-mode', isDarkMode ? 'multiply' : 'normal');
      };
      
      // Initial setup
      setDarkModeStyles();
      
      // Watch for theme changes (for system preference changes)
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            setDarkModeStyles();
          }
        });
      });
      
      observer.observe(document.documentElement, { attributes: true });
      
      return () => observer.disconnect();
    }, []);

    // Handle smooth infinite scroll
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.scrollWidth / 2;
      let animationFrameId: number;
      let startTime: number | null = null;
      const duration = 15000;
      const animationDirection = 1;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        
        const offset = progress * containerWidth * animationDirection;
        container.style.transform = `translateX(-${offset}px)`;
        
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
      const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
      const handleMouseLeave = () => {
        startTime = performance.now() - ((performance.now() - (startTime || 0)) % duration);
        animationFrameId = requestAnimationFrame(animate);
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return (
      <section
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/service-bg.png')",
          backgroundColor: "var(--background-color, transparent)",
          backgroundBlendMode: "var(--blend-mode, normal)"
        }}
      >
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center pt-20 pb-20 px-6">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center tracking-tight drop-shadow-lg">PROJECTS</h1>

          {/* Description paragraph */}
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6 font-light tracking-wide">
              It&apos;s not just a gallery of final products; it&apos;s a showcase of my thought process, problem-solving
              abilities, and the impact of my work. As a UI/UX designer, I transform each project into a compelling
              story that delivers an aesthetic and interactive user experience.
            </p>
          </div>

          {/* Category navigation (horizontal sliding text) */}
          <div className="w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-[#A58D84] dark:bg-[#876D60] px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-lg dark:shadow-gray-800/50 overflow-hidden">
            <div className="relative overflow-hidden">
              <div 
                ref={containerRef}
                className="flex w-max scrollbar-hide"
                style={{
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.1s linear',
                  willChange: 'transform',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* Duplicate the content for seamless looping */}
                {[...categories, ...categories].map((category, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="flex items-center group px-6 py-3 flex-shrink-0"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-light text-white whitespace-nowrap">
                      {category}
                    </span>
                    <div className="ml-2 relative w-4 h-4">
                      <Image
                        src="/images/reward-star.png"
                        alt="star"
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
    )
  }
  