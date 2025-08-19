"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
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
          <div className="absolute left-1/2 -translate-x-1/2 w-[98%] h-8 bg-gradient-to-b from-[#4a3025] to-transparent rounded-b-3xl opacity-60 transform -skew-y-6 scale-y-75 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[96%] h-6 bg-gradient-to-b from-[#5a4035] to-transparent rounded-b-3xl opacity-40 -bottom-2 transform -skew-y-3 scale-y-85 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[94%] h-4 bg-gradient-to-b from-[#6a5045] to-transparent rounded-b-3xl opacity-20 -bottom-4"></div>
        </div>
        <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg z-10">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A58D84] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A58D84] rounded-full -ml-48 -mb-48"></div>
          
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
                {/* Animated circle */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-96 h-96 rounded-full bg-[#A58D84] z-0"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                {/* Profile Image Container */}
                <motion.div 
                  className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
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
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#E8D8D0] z-0"></div>
                <div className="absolute top-1/2 -left-12 w-16 h-16 rounded-full bg-[#E8D8D0] z-0"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AnimatedBackground />
    </motion.div>
  )
}
