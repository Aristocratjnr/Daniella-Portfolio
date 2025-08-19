"use client";

import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div 
      className="min-h-screen bg-[#A58D84] flex items-center justify-center p-4 pt-24 md:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* Animated Background */}
    <div className="max-w-6xl w-full relative">
        {/* Pronounced 3D shadow effect */}
        <div className="absolute -bottom-4 left-0 right-0 h-16 z-0 overflow-visible pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 w-[98%] h-8 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-60 transform -skew-y-6 scale-y-75 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[96%] h-6 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-40 -bottom-2 transform -skew-y-3 scale-y-85 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[94%] h-4 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-20 -bottom-4"></div>
        </div>
        <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg z-10">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E4D42] rounded-full -mr-32 -mt-32"></div>
          <div 
            className="absolute bottom-0 left-0 bg-[#6E4D42] rounded-full -ml-48 -mb-48 flex-shrink-0"
            style={{
              width: '402px',
              height: '532px',
              transform: 'rotate(-55.347deg)'
            }}
          ></div>
          
          <motion.div 
            className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-[#B5A394] text-lg font-medium mb-2">Hi, I am Daniella Asiedu</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  UI/UX DESIGNER
                </h1>
                <div className="h-1 w-16 bg-[#B5A394] mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a UI/UX Designer who solves complex problems to create products people love to use.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  I blend a passion for human-centered design with strategic thinking to craft intuitive and effective
                  digital experiences. Specializing in UI/UX, brand identity, and user research.
                </p>
              </div>
                {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">EXPERIENCE</p>
                  <p className="text-black text-xl font-bold">3+ years</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">PROJECTS</p>
                  <p className="text-black text-xl font-bold">10+ Designs</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">CLIENTS</p>
                  <p className="text-black text-xl font-bold">20+</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="default"
                  className="backdrop-blur-md bg-[#F0E6E0]/80 hover:bg-[#F0E6E0] text-gray-800 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 group border border-white/20 shadow-lg"
                >
                  About Me
                  <img 
                    src="/images/hand.png" 
                    alt="" 
                    className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Button>
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
                  className="relative z-10 flex-shrink-0"
                  style={{
                    width: '442px',
                    height: '590px',
                    aspectRatio: '218/291',
                    borderRadius: '476.5px'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <img
                    src="/images/daniella.png"
                    alt="Daniella Asiedu"
                    className="w-full h-full object-cover"
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
