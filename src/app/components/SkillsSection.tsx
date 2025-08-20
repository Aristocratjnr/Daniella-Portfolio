"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsSection = () => {
  const projects = [
    {
      title: "LIFELINE",
      description: "A first aid guide built with web mobile app interface",
      icon: "/images/aid.png",
      color: "#C1B1AB",
    },
    {
      title: "SPARTANS",
      description: "An interactive automated interface for both admin and customers",
      icon: "/images/car.png",
      color: "#C1B1AB",
    },
    {
      title: "TULAUNDRY",
      description: "An interactive collective laundry services web interface for both admin and customers",
      icon: "/images/lamp.png",
      color: "#C1B1AB",
    },
    {
      title: "KITCHEN & CLOSETS",
      description: "An interactive kitchen & closet furniture web app interface for both admin and customers",
      icon: "/images/machine.png",
      color: "#C1B1AB",
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1 relative flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
            <h2 className="hidden lg:block text-5xl xl:text-6xl font-bold text-gray-800 transform -rotate-90 absolute -left-16 top-1/2 -translate-y-1/2 origin-center mr-2 whitespace-nowrap">
              MY PROJECTS
            </h2>
            <h2 className="lg:hidden text-4xl font-bold text-gray-800 mb-6 text-center w-full">
              MY PROJECTS
            </h2>
            {/* Animated Illustration */}
            <motion.div 
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:ml-16 xl:ml-24"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/woman.png"
                  alt="Woman with laptop"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Project cards */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group overflow-visible transition-all duration-500 hover:transform hover:transition-transform"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 3D Card Container */}
                  <div className="relative h-full transition-transform duration-500 group-hover:translate-z-10 group-hover:translate-y-[-10px]"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'rotateX(0deg) rotateY(0deg)',
                      transition: 'transform 0.5s ease-out',
                    }}
                  >
                    {/* Main card with slanted top */}
                    <div 
                      className="relative z-10 h-full p-6 sm:p-7 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                      style={{
                        width: '240px',
                        height: '211px',
                        flexShrink: 0,
                        clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
                        marginTop: '1.75rem',
                        backgroundColor: project.color || '#ffffff',
                        borderColor: 'rgba(0,0,0,0.1)',
                        transform: 'translateZ(20px)',
                        backfaceVisibility: 'hidden',
                        borderRadius: '20px',
                      }}
                    >
                    {/* Top accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-3"
                      style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.05), transparent)'
                      }}
                    />
                    
                    <div className="mt-1">
                      <div className="flex items-start justify-between mb-4 sm:mb-5">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" 
                          style={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(4px)'
                          }}
                        >
                          <Image 
                            src={project.icon} 
                            alt={project.title}
                            width={24}
                            height={24}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide uppercase font-sans">{project.title}</h3>
                      <p className="text-black text-sm leading-relaxed font-light tracking-wide">
                        <span className="inline-block transform transition-all duration-300 hover:scale-105">
                          {project.description}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                    {/* 3D Shadow effect */}
                    <div 
                      className="absolute inset-0 bg-gray-200 rounded-lg transition-all duration-500 group-hover:opacity-70"
                      style={{
                        clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
                        zIndex: 0,
                        transform: 'translateZ(0)',
                        filter: 'blur(8px)',
                        opacity: 0.6,
                        margin: '0 10px 10px 0',
                      }}
                    />
                    
                    {/* Edge highlight */}
                    <div 
                      className="absolute inset-0 border-2 border-white/30 rounded-lg pointer-events-none"
                      style={{
                        clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
                        zIndex: 15,
                        transform: 'translateZ(1px)',
                        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.5)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* See More button */}
            <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
              <button 
                type="button"
                className="bg-white/90 backdrop-blur-sm rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-black flex items-center gap-2 hover:bg-white transition-all duration-300 group"
                aria-label="View more projects"
              >
                <span className="text-gray-800 font-medium text-sm sm:text-base">See More?</span>
                <Image 
                  src="/images/hand.png" 
                  alt="" 
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
