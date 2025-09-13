"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ProjectsSection() {
    const categories = ["Web Design", "Mobile App Design", "Wireframe", "Prototype", "Dashboard"]
    const containerRef = useRef<HTMLDivElement | null>(null)
    
    // Add CSS for scrollbar and animation
    useEffect(() => {
      // Apply CSS to hide scrollbar and set up animation
      const style = document.createElement('style');
      style.textContent = `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .sliding-text {
          display: flex;
          white-space: nowrap;
          animation: slideLeft 15s linear infinite;
        }
        
        .sliding-text:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
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
          <div className="w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-[#A58D84] px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <div ref={containerRef} className="sliding-text scrollbar-none">
                {/* Display categories twice to create seamless loop effect */}
                {[...categories, ...categories].map((category, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="flex items-center group px-6 py-3"
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
  