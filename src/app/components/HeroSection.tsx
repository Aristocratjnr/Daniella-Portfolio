"use client";

import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.div 
      className="min-h-screen bg-[#A58D84] flex items-start sm:items-center justify-center px-2 pt-16 pb-8 sm:py-12 md:pt-16 lg:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* Animated Background */}
    <div className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-6 relative">
        {/* Pronounced 3D shadow effect */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-12 sm:h-16 z-0 overflow-visible pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 w-[98%] h-6 sm:h-8 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-60 transform -skew-y-6 scale-y-75 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[96%] h-4 sm:h-6 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-40 -bottom-1.5 sm:-bottom-2 transform -skew-y-3 scale-y-85 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[94%] h-3 sm:h-4 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-20 -bottom-3 sm:-bottom-4"></div>
        </div>
        <div className="bg-[#F0E6E0]/80 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden shadow-lg z-10 mt-4 sm:mt-0">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#6E4D42] rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 md:-mr-24 md:-mt-24 lg:-mr-32 lg:-mt-32 transition-all duration-300"></div>
          <div 
            className="absolute bottom-0 left-0 bg-[#6E4D42] rounded-full -ml-16 -mb-16 sm:-ml-24 sm:-mb-24 md:-ml-36 md:-mb-36 lg:-ml-48 lg:-mb-48 flex-shrink-0 transition-all duration-300"
            style={{
              width: '200px',
              height: '264px',
              transform: 'rotate(-55.347deg)'
            }}
            onLoad={(e) => {
              // Adjust size on larger screens
              if (window.innerWidth >= 768) {
                e.currentTarget.style.width = '300px';
                e.currentTarget.style.height = '396px';
              }
              if (window.innerWidth >= 1024) {
                e.currentTarget.style.width = '402px';
                e.currentTarget.style.height = '532px';
              }
            }}
          ></div>
          
          <motion.div 
            className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <p className="text-[#6E4D42] text-sm xs:text-base sm:text-lg font-medium mb-1 sm:mb-2">Hi, I am Daniella Asiedu</p>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-2 sm:mb-4 md:mb-6">
                  UI/UX DESIGNER
                </h1>
                <div className="h-1 w-8 sm:w-12 md:w-16 bg-[#B5A394] mb-2 sm:mb-4 md:mb-6"></div>
              </div>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                  I&apos;m a UI/UX Designer who solves complex problems to create products people love to use.
                </p>
                
                <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                  I blend a passion for human-centered design with strategic thinking to craft intuitive and effective digital experiences. Simplicity in UI/UX is what I always aim to achieve.
                </p>
              </div>
                {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                <div className="relative group">
                  <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#B5A394] via-[#6E4D42] to-[#B5A394] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 hover:scale-[1.02] hover:border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">EXPERIENCE</p>
                      <p className="text-black text-xs sm:text-sm font-semibold">3+ yrs</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#6E4D42] via-[#B5A394] to-[#6E4D42] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 hover:scale-[1.02] hover:border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">PROJECTS</p>
                      <p className="text-black text-xs sm:text-sm font-semibold">10+</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#B5A394] via-[#6E4D42] to-[#B5A394] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 hover:scale-[1.02] hover:border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">CLIENTS</p>
                      <p className="text-black text-xs sm:text-sm font-semibold">20+</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/about" className="block w-full">
                  <Button
                    variant="default"
                    className="w-full max-w-[280px] mx-auto backdrop-blur-lg bg-white/30 hover:bg-white/40 text-gray-900 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 group border-2 border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    About Me
                    <Image 
                      src="/images/hand.png" 
                      alt="" 
                      width={20}
                      height={20}
                      className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div 
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                {/* Animated SVG shape */}
                <motion.div 
                  className="absolute -top-12 -left-12 z-0 opacity-90 flex-shrink-0"
                  style={{
                    width: '537px',
                    height: '600px'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    rotate: [0, 2, 0, -2, 0],
                    opacity: 1
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    },
                    opacity: {
                      duration: 1,
                      ease: 'easeOut'
                    }
                  }}
                >
                  <svg 
                    viewBox="0 0 537 600" 
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <motion.path
                      d="M232.88 3.89857C310.082 22.1545 305.698 127.785 359.913 182.055C409.764 231.956 508.174 234.841 528.858 300.177C552.479 374.788 522.649 459.714 465.909 516.859C407.393 575.791 318.494 608.062 232.88 598.263C154.21 589.259 94.678 530.824 50.9292 469.364C15.6523 419.805 25.8047 359.418 20.6953 300.177C14.7758 231.545 -21.842 158.795 19.2 101.487C64.9242 37.6412 152.931 -15.0068 232.88 3.89857Z"
                      fill="#6E4D42"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ 
                        pathLength: 1,
                        pathOffset: 0,
                        scale: [0.98, 1, 0.98]
                      }}
                      transition={{
                        pathLength: { 
                          duration: 4,
                          ease: "easeInOut",
                        },
                        pathOffset: {
                          duration: 4,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 10,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut'
                        }
                      }}
                    />
                  </svg>
                </motion.div>
                
                {/* Profile Image Container */}
                <motion.div 
                  className="relative z-10 flex-shrink-0 w-[280px] h-[373px] sm:w-[350px] sm:h-[467px] md:w-[400px] md:h-[534px] lg:w-[442px] lg:h-[590px] rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/images/daniella.png"
                    alt="Daniella Asiedu"
                    width={442}
                    height={590}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
                
                {/* Small decorative circles */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#6E4D42] z-0"></div>
                <div className="absolute top-1/2 -left-12 w-16 h-16 rounded-full bg-[#6E4D42] z-0"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AnimatedBackground />
    </motion.div>
  )
}
