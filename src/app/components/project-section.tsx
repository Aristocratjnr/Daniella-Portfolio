"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ProjectsSection() {
    const categories = ["Web Design", "Mobile App Design", "Wireframe", "Prototype", "Dashboard"]
    const containerRef = useRef<HTMLDivElement | null>(null)
    
    // Handle smooth infinite scroll
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.scrollWidth / 2; // Since we duplicate the content
      let animationFrameId: number;
      let startTime: number | null = null;
      const duration = 15000; // 15 seconds for one full loop
      const animationDirection = 1; // 1 for left, -1 for right

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        
        // Calculate the new position
        const offset = progress * containerWidth * animationDirection;
        container.style.transform = `translateX(-${offset}px)`;
        
        // Continue the animation
        animationFrameId = requestAnimationFrame(animate);
      };

      // Start the animation
      animationFrameId = requestAnimationFrame(animate);

      // Pause on hover
      const handleMouseEnter = () => {
        cancelAnimationFrame(animationFrameId);
      };

      const handleMouseLeave = () => {
        startTime = performance.now() - ((performance.now() - (startTime || 0)) % duration);
        animationFrameId = requestAnimationFrame(animate);
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
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
        }}
      >
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center pt-20 pb-20 px-6">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center tracking-tight">PROJECTS</h1>

          {/* Description paragraph */}
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6">
              It&apos;s not just a gallery of final products; it&apos;s a showcase of my thought process, your problem-solving
              abilities, and the impact of your work. As a UI/UX designer, I need to turn each project into a compelling
              story for an aesthetic and interactive User Experience
            </p>
          </div>

          {/* Category navigation (horizontal sliding text) */}
          <div className="w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-[#A58D84] px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <div 
                ref={containerRef}
                className="flex w-max"
                style={{
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.1s linear',
                  willChange: 'transform'
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
  