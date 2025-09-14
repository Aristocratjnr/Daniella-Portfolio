"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SkillsSection = () => {
  const projects = [
    {
      title: "LIFELINE",
      description: "A first aid guide built with web and mobile app interface",
      icon: "/images/aid.png",
      color: "#C1B1AB",
      tags: ["UI/UX Design", "Mobile App", "Web App"],
      links: [
        {
          label: "Mobile Version",
          url: "https://www.figma.com/design/EGiI5c7KMuLuXKZxi8c4S4/LIFELINE?node-id=384-71&t=CduuPsOgiC6eC8my-1"
        },
        {
          label: "WebApp Version",
          url: "https://www.figma.com/design/EGiI5c7KMuLuXKZxi8c4S4/LIFELINE?node-id=1-2&t=CduuPsOgiC6eC8my-1"
        }
      ]
    },
    {
      title: "SPARTANS",
      description: "An interactive automated car wash web interface for both admin and customers",
      icon: "/images/car.png",
      color: "#C1B1AB",
      tags: ["UI/UX Design", "Web App", "Dashboard"],
      links: [
        {
          label: "View Prototype",
          url: "https://www.figma.com/proto/UjcYdOgAU9Eayvlo5Z4YTB/Spartans?page-id=119%3A1941&node-id=119-2430&viewport=2%2C144%2C0.17&t=gJglwKfjvaZJ3WGy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=306%3A1543"
        }
      ]
    },
    {
      title: "TULAUNDRY",
      description: "An interactive collective laundry services web interface for both admin and customers",
      icon: "/images/machine.png",
      color: "#C1B1AB",
      tags: ["UI/UX Design", "Web App", "Dashboard"],
      links: [
        {
          label: "View Live Website",
          url: "https://tulundry.onrender.com/"
        }
      ]
    },
    {
      title: "KITCHEN & CLOSETS",
      description: "An interactive kitchen & closet furniture web app interface for both admin and customers",
      icon: "/images/lamp.png",
      color: "#C1B1AB",
      tags: ["UI/UX Design", "E-commerce", "Web App"],
      links: [
        {
          label: "View Prototype",
          url: "https://www.figma.com/design/OYIx8LWmLcdBCAyhGHUBLb/H.C.I_DCIT302__G52?node-id=15-4"
        }
      ]
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1 relative flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start">
            <h2 className="hidden lg:block text-5xl xl:text-6xl font-bold text-gray-800 transform -rotate-90 absolute -left-16 top-1/2 -translate-y-1/2 origin-center mr-2 whitespace-nowrap">
              MY PROJECTS
            </h2>
            <h2 className="lg:hidden text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center w-full">
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
          <div className="order-1 lg:order-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group w-full transition-all duration-300"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 3D Card Container */}
                  <div className="relative h-full transition-all duration-300 hover:translate-z-10 hover:-translate-y-1"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'rotateX(0deg) rotateY(0deg)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    {/* Main card with slanted top */}
                    <div 
                      className="relative z-10 h-full min-h-[240px] p-5 sm:p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between mx-auto group/card"
                      style={{
                        width: '100%',
                        maxWidth: '320px',
                        clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
                        marginTop: '1.5rem',
                        backgroundColor: project.color || '#ffffff',
                        borderColor: 'rgba(0,0,0,0.1)',
                        transform: 'translateZ(20px)',
                        backfaceVisibility: 'hidden',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                      }}
                    >
                      {/* Inner glow effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
                          zIndex: 0,
                        }}
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    {/* Top accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-3"
                      style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.05), transparent)'
                      }}
                    />
                    <div className="mt-1 flex-1 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center bg-white shadow-sm p-2" 
                          style={{
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                          }}
                        >
                          <Image 
                            src={project.icon} 
                            alt={project.title}
                            width={24}
                            height={24}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            priority
                          />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 tracking-wide uppercase font-sans">
                        {project.title}
                      </h3>
                      <div className="flex-1 flex flex-col items-start">
                        <p className="text-black text-xs sm:text-sm leading-normal sm:leading-relaxed font-light tracking-wide line-clamp-3 mb-3">
                          <span className="inline-block transition-colors duration-200 hover:text-gray-700">
                            {project.description}
                          </span>
                        </p>
                        
                        {/* Tags */}
                        {project.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-[10px] sm:text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Links */}
                        {project.links && project.links.length > 0 && (
                          <div className="mt-auto w-full space-y-1.5">
                            {project.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center text-xs sm:text-sm px-3 py-1.5 sm:py-2 bg-[#563C33] text-[#F2EEED] hover:bg-[#33241E] rounded-lg transition-colors duration-200 font-medium"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* 3D Shadow effect with glow */}
                  <div 
                    className="absolute inset-0 bg-gray-200 rounded-lg transition-all duration-500 group-hover:opacity-70 group-hover:shadow-[0_0_25px_rgba(161,98,7,0.1)] group-hover:shadow-amber-100/50"
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
            <div className="flex justify-center sm:justify-end mt-10 sm:mt-8">
              <Link 
                href="/services"
                className="relative bg-white/90 backdrop-blur-sm rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-black flex items-center gap-2 hover:bg-white transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-lg hover:shadow-blue-200/50"
                aria-label="View more projects"
              >
                <span className="relative z-10 text-gray-800 font-medium text-sm sm:text-base">See More?</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-200/60 via-blue-100/40 to-transparent -translate-x-full group-hover:translate-x-0 transition-all duration-700"></span>
                <Image 
                  src="/images/hand.png" 
                  alt="" 
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
