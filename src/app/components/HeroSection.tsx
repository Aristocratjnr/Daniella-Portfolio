"use client";

import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function HeroSection() {
  // Mouse-based parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const bgParallaxX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const bgParallaxY = useTransform(mouseY, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#A58D84] to-[#8a7269] dark:from-gray-800 dark:to-gray-900 flex items-start sm:items-center justify-center px-2 pt-16 pb-8 sm:py-12 md:pt-16 lg:pt-20 overflow-hidden relative" 
      style={{ cursor: 'url(\"/images/selection-pointer.png\") 0 0, auto' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Animated Particles UI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tiny Floating Particles - Different shapes & behaviors */}
        {[...Array(30)].map((_, i) => {
          // Determine particle type for variety
          const particleType = i % 5;
          const isCircle = particleType < 3; // 60% circles, 40% other shapes
          const size = 2 + (i % 6) * (particleType === 4 ? 0.5 : 1); // Smaller for special particles
          
          // Dynamic colors based on light/dark mode with varying opacity
          const colorClasses = [
            'bg-[#6E4D42]/20 dark:bg-amber-200/15',
            'bg-amber-100/15 dark:bg-blue-200/20',
            'bg-[#B5A394]/20 dark:bg-pink-200/15',
            'bg-white/10 dark:bg-white/5',
            'bg-pink-100/10 dark:bg-purple-200/15'
          ];
          
          // Calculate positions with better distribution
          const leftPos = 5 + (i * 3.33) % 90; // More evenly distributed
          const topPos = 5 + ((i * 7) % 90);
          
          // Animation parameters for variety
          const duration = 10 + (i % 15) + (particleType * 2);
          const delay = i * 0.2 + (particleType * 0.1);
          
          // Rotation for non-circle shapes
          const rotate = !isCircle ? [0, 45, 90, 45, 0, -45, -90, -45, 0] : undefined;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className={`absolute ${colorClasses[particleType]} ${
                isCircle ? 'rounded-full' : particleType === 3 ? 'rotate-45' : ''
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${leftPos}%`,
                top: `${topPos}%`,
                // Special styling for different particle types
                ...(particleType === 3 ? {
                  borderRadius: '0%', // Square
                  transform: 'rotate(45deg)' // Diamond shape
                } : particleType === 4 ? {
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic blob shape
                  boxShadow: '0 0 2px rgba(255,255,255,0.1)'
                } : {})
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1, 0.8],
                y: [`${-10 - (i % 8) * 5}px`, `${10 + (i % 6) * 5}px`, `${-10 - (i % 8) * 5}px`],
                x: [`${-5 - (i % 6) * 3}px`, `${5 + (i % 7) * 3}px`, `${-5 - (i % 6) * 3}px`],
                rotate: rotate,
                filter: particleType === 4 ? ['blur(0px)', 'blur(0.5px)', 'blur(0px)'] : undefined
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
                // Staggered times for more natural movement
                times: particleType === 0 ? [0, 0.5, 1] : [0, 0.6, 1]
              }}
            />
          );
        })}
        
        {/* Twinkling Star Effect Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute bg-white dark:bg-white"
            style={{
              width: `${1 + (i % 2) * 0.5}px`,
              height: `${1 + (i % 2) * 0.5}px`,
              borderRadius: '50%',
              left: `${10 + (i * 6) % 85}%`,
              top: `${8 + (i * 5.5) % 85}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 2px rgba(255,255,255,0.8)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
              repeatDelay: i * 0.3
            }}
          />
        ))}
        
        {/* Light trails - only visible in dark mode */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={`trail-${i}`}
            className="hidden dark:block absolute h-px"
            style={{
              width: `${30 + (i % 3) * 15}px`,
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 10) % 60}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.4, 0],
              width: [`${30 + (i % 3) * 15}px`, `${45 + (i % 4) * 20}px`, `${30 + (i % 3) * 15}px`],
              x: ['-50px', '50px', '-50px'],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Animated Background */}
      <motion.div 
        className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* Pronounced 3D shadow effect */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-12 sm:h-16 z-0 overflow-visible pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 w-[98%] h-6 sm:h-8 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-60 transform -skew-y-6 scale-y-75 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[96%] h-4 sm:h-6 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-40 -bottom-1.5 sm:-bottom-2 transform -skew-y-3 scale-y-85 origin-bottom"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[94%] h-3 sm:h-4 bg-gradient-to-b from-[#6E4D42] to-transparent rounded-b-3xl opacity-20 -bottom-3 sm:-bottom-4"></div>
        </div>
        <div className="bg-[#F0E6E0]/80 dark:bg-gray-900/80 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden shadow-lg z-10 mt-4 sm:mt-0 backdrop-blur-sm">
          {/* Animated subtle gradient background */}
          <motion.div 
            className="absolute inset-0 opacity-40 dark:opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.5, 0.4],
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Decorative Elements */}
          <motion.div 
            style={{ x: bgParallaxX, y: bgParallaxY }}
            className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#6E4D42] dark:bg-[#A58D84] rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 md:-mr-24 md:-mt-24 lg:-mr-32 lg:-mt-32 transition-all duration-300"
          />
          <div 
            className="absolute bottom-0 left-0 bg-[#6E4D42] dark:bg-[#A58D84] rounded-full -ml-16 -mb-16 sm:-ml-24 sm:-mb-24 md:-ml-36 md:-mb-36 lg:-ml-48 lg:-mb-48 flex-shrink-0 transition-all duration-300"
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
            <motion.div 
              className="space-y-3 sm:space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: 'easeOut',
                delay: 0.3
              }}
            >
              <div className="overflow-hidden">
                <motion.p 
                  className="text-[#6E4D42] dark:text-[#B5A394] text-sm xs:text-base sm:text-lg font-medium mb-1 sm:mb-2"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hi, I am Daniella Asiedu
                </motion.p>
                <motion.h1 
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 sm:mb-4 md:mb-6"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    UI/UX DESIGNER
                  </motion.span>
                </motion.h1>
                <motion.div 
                  className="h-1 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-[#B5A394] to-[#8a7269] mb-2 sm:mb-4 md:mb-6 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 0.8, 
                    type: 'spring',
                    stiffness: 200,
                    damping: 20
                  }}
                />
              </div>

              <motion.div 
                className="space-y-2 sm:space-y-3 md:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.p 
                  className="text-gray-800 dark:text-gray-200 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  I&apos;m a UI/UX Designer who solves complex problems to create products people love to use.
                </motion.p>
                
                <motion.p 
                  className="text-gray-800 dark:text-gray-200 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  I blend a passion for human-centered design with strategic thinking to craft intuitive and effective digital experiences. Simplicity in UI/UX is what I always aim to achieve.
                </motion.p>
              </motion.div>
                {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                <div className="relative group">
                  <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#B5A394] via-[#6E4D42] to-[#B5A394] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 dark:bg-gray-800/50 border border-white/40 dark:border-gray-700/60 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 dark:hover:bg-gray-700/60 hover:scale-[1.02] hover:border-white/60 dark:hover:border-gray-600/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 dark:from-gray-600/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 dark:text-white/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">EXPERIENCE</p>
                      <p className="text-black dark:text-white text-xs sm:text-sm font-semibold">3+ yrs</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#6E4D42] via-[#B5A394] to-[#6E4D42] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 dark:bg-gray-800/50 border border-white/40 dark:border-gray-700/60 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 dark:hover:bg-gray-700/60 hover:scale-[1.02] hover:border-white/60 dark:hover:border-gray-600/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 dark:from-gray-600/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 dark:text-white/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">PROJECTS</p>
                      <p className="text-black dark:text-white text-xs sm:text-sm font-semibold">10+</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#B5A394] via-[#6E4D42] to-[#B5A394] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" style={{
                    maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
                  }}></div>
                  <div className="relative backdrop-blur-xl bg-white/30 dark:bg-gray-800/50 border border-white/40 dark:border-gray-700/60 rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow transition-all duration-200 hover:bg-white/40 dark:hover:bg-gray-700/60 hover:scale-[1.02] hover:border-white/60 dark:hover:border-gray-600/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 dark:from-gray-600/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <p className="text-black/80 dark:text-white/80 text-[8px] xs:text-[9px] sm:text-xs font-medium uppercase tracking-wider leading-tight">CLIENTS</p>
                      <p className="text-black dark:text-white text-xs sm:text-sm font-semibold">20+</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                className="pt-2 sm:pt-4 -mt-2 sm:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link href="/about" className="block w-full">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { 
                        type: 'spring',
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: { 
                        type: 'spring',
                        stiffness: 400,
                        damping: 20
                      }
                    }}
                    transition={{ 
                      delay: 1.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Button
                      variant="default"
                      className="w-full max-w-[280px] mx-auto backdrop-blur-lg bg-white/30 hover:bg-white/40 dark:bg-gray-800/40 dark:hover:bg-gray-700/60 text-gray-900 dark:text-gray-100 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 group border-2 border-white/40 dark:border-gray-700/40 hover:border-white/60 dark:hover:border-gray-600/70 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/10 dark:from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      About Me
                      <Image 
                        src="/images/hand.png" 
                        alt="" 
                        width={20}
                        height={20}
                        className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

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
                  style={{ x: parallaxX, y: parallaxY }}
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
      </motion.div>
      <AnimatedBackground />

      {/* Floating Crystal Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crystal elements - subtle geometric shapes */}
        {[...Array(4)].map((_, i) => {
          const size = 15 + (i % 3) * 10;
          const leftPos = 10 + ((i * 25) % 80);
          const topPos = 10 + ((i * 20) % 80);
          
          return (
            <motion.div
              key={`crystal-${i}`}
              className="absolute bg-gradient-to-br from-white/5 to-transparent dark:from-white/3 dark:to-transparent backdrop-blur-[1px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${leftPos}%`,
                top: `${topPos}%`,
                borderRadius: i % 2 === 0 ? '30% 70% 50% 50% / 50% 30% 70% 50%' : '50% 50% 30% 70% / 70% 50% 50% 30%',
                border: '1px solid rgba(255,255,255,0.05)',
                transform: `rotate(${i * 45}deg)`,
                opacity: 0,
                filter: 'blur(0.5px)'
              }}
              animate={{
                opacity: [0, 0.1, 0],
                rotate: [`${i * 45}deg`, `${i * 45 + 20}deg`, `${i * 45}deg`],
                scale: [0.8, 1, 0.8],
                filter: ['blur(0.5px)', 'blur(0px)', 'blur(0.5px)']
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          )
        })}

        {/* Particle Dust - tiny moving dots */}
        {[...Array(20)].map((_, i) => {
          const size = 0.5 + (i % 3) * 0.5;
          const leftPos = 5 + ((i * 4.5) % 90);
          const topPos = 5 + ((i * 5) % 90);
          
          return (
            <motion.div
              key={`dust-${i}`}
              className="absolute bg-white/10 dark:bg-white/20 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${leftPos}%`,
                top: `${topPos}%`,
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [`${0}px`, `${-10 - (i % 5) * 5}px`, `${0}px`],
                x: [`${0}px`, `${5 - (i % 10)}px`, `${0}px`],
              }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
                repeatDelay: i * 0.1
              }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}
