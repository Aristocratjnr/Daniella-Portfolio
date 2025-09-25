"use client";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, Variants, useMotionValue, useTransform, AnimatePresence, useAnimation } from 'framer-motion';
import { ReasonsSection } from '../components/reasons-section';
import { SkillsTools } from '../components/skillsTools';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  // Mouse-based parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  // Simple variants for container
  const containerVariants: Variants = {
    visible: { opacity: 1 },
  };

  const itemVariants: Variants = {
    visible: { opacity: 1 },
  };

  const floatingVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Smooth sliding text animation variants with fixed dimensions
  const textVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      position: 'absolute' as const,
      width: '100%',
      display: 'inline-block'
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
      width: '100%',
      display: 'inline-block',
      transition: {
        x: { 
          type: 'tween',
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.6
        },
        opacity: { 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -30 : 30,
      opacity: 0,
      position: 'absolute' as const,
      width: '100%',
      display: 'inline-block',
      transition: {
        x: { 
          type: 'tween',
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.4
        },
        opacity: { 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    })
  };

  // Text to cycle through
  const roles = [
    'I\'m Daniella',  // First item is the initial state
    'a UI/UX Designer',
    'a Strategist',
    'a Communicator',
    'a Problem Solver',
    'a Creative Thinker'
  ];
  
  const [roleIndex, setRoleIndex] = useState(0); // Start with first role (I'm Daniella)
  const [direction, setDirection] = useState(1);
  const [showInitial, setShowInitial] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Removed unused state: const [isTransitioning, setIsTransitioning] = useState(false);
  const controls = useAnimation();

  // Handle mouse movement and hover state
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position with a small offset to position the loader below the cursor
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY + 12 // 12px below cursor
      });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], [tabindex]');
      
      if (isInteractive) {
        controls.start({
          scale: 1,
          opacity: 1,
          transition: { 
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          }
        });
      } else {
        controls.start({
          scale: 0.8,
          opacity: 0,
          transition: { 
            duration: 0.1,
            ease: [0.4, 0, 0.2, 1]
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  // Auto-rotate text with better timing
  useEffect(() => {
    // Start with "I'm Daniella" for 2.5 seconds
    const initialTimer = setTimeout(() => {
      // Removed transition state management as it wasn't used
      setTimeout(() => {
        setShowInitial(false);
        setDirection(1);
        setRoleIndex(1); // Move to first role after initial delay
      }, 300);
    }, 2500);

    // Then rotate through roles every 4 seconds
    const rotationTimer = setInterval(() => {
      if (showInitial) return; // Don't rotate until initial delay is done
      
      // Removed transition state management as it wasn't used
      setTimeout(() => {
        setDirection(prev => -prev); // Alternate direction
        setRoleIndex((prev: number) => {
          // Skip the first item (I'm Daniella) in the rotation
          const nextIndex = (prev + 1) % roles.length;
          return nextIndex === 0 ? 1 : nextIndex;
        });
      }, 300);
    }, 4000);
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(rotationTimer);
    };
  }, [roles.length, showInitial, controls]);

  return (
    <motion.div 
      className="min-h-screen bg-[#A58D84] dark:bg-gray-900 overflow-x-hidden transition-colors duration-300"
      style={{ cursor: 'url("/images/selection-pointer.png") 0 0, auto' }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-6 lg:space-y-8 relative z-10"
              initial="visible"
              animate="visible"
              variants={containerVariants}
              style={{
                x: parallaxX,
                y: parallaxY
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                    <span className="inline-block">
                      Hello,
                    </span>
                    <br />
                    <div className="relative inline-block min-w-[250px] h-[1.2em] overflow-hidden">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.span 
                          key={roleIndex}
                          className="absolute left-0 top-0 text-black text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                          custom={direction}
                          variants={textVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                        >
                          {roles[roleIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </h1>
                </div>
                
                <div className="space-y-4 text-white text-base md:text-lg leading-relaxed">
                  <p>
                    I&apos;m a self-taught UI/UX designer driven by a curiosity for human behavior and a passion for creating products that just feel right.
                  </p>
                  
                  <p>
                    After spending some years in marketing, I realized my true passion wasn&apos;t only in selling products, but in understanding the people who use them. This led me to a career pivot where I could blend my research skills with a love for design.
                  </p>
                  
                  <p>
                    My vision is to design a future where technology is both seamless and human-centered. I believe in the power of collaboration to solve complex problems and create innovative, empathetic products that genuinely improve people&apos;s lives.
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col gap-4 w-full sm:w-auto"
                variants={containerVariants}
              >
                <motion.a
                  href="/cv/daniella-cv.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 group
                    bg-[#F2EEED] backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]
                    hover:bg-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:border-white/30
                    text-black"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image 
                    src="/images/download.png" 
                    alt="Download icon" 
                    width={20}
                    height={20}
                    className="w-[18px] h-auto mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <motion.span className="relative z-10">
                    Download my CV/Resume
                  </motion.span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/daniella-asiedu-961856266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 group
                    bg-gray-700/80 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(107,114,128,0.3)]
                    hover:bg-gray-600/90 hover:shadow-[0_0_30px_rgba(75,85,99,0.6)] hover:border-white/30
                    text-white"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mr-2 p-1.5 bg-[#0A66C2] rounded-md group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src="/images/link.png" 
                      alt="LinkedIn" 
                      width={16} 
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <motion.span className="relative z-10">
                    Connect on LinkedIn
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right Illustration */}
            <motion.div 
              className="flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              style={{
                x: parallaxX,
                y: parallaxY
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Animated Tags */}
                <motion.div 
                  className="absolute top-20 right-0 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 whitespace-nowrap min-w-[180px] text-center"
                  variants={floatingVariants}
                  initial="float"
                  animate="float"
                  transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                >
                  Researcher
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -left-4 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 transform -translate-y-1/2 whitespace-nowrap min-w-[200px] text-center"
                  variants={floatingVariants}
                  initial="float"
                  animate="float"
                  transition={{ duration: 3, delay: 1, repeat: Infinity }}
                >
                  Communicator
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-28 right-0 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 whitespace-nowrap min-w-[180px] text-center"
                  variants={floatingVariants}
                  initial="float"
                  animate="float"
                  transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                >
                  Strategist
                </motion.div>
                
                <motion.div
                  variants={floatingVariants}
                  initial="float"
                  animate="float"
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="relative"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/images/illustration.png"
                    alt="Daniella UX/UI Designer Illustration"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
        
        {/* 3 Reasons to Choose Me Section */}
        <div className="mt-12">
          <ReasonsSection />
        </div>
        
        {/* Skills & Tools Section */}
        <div className="mt-12">
          <SkillsTools />
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-12">
          <Testimonials />
        </div>
      </main>
      
      <Footer />
      
      {/* Circular loader that follows mouse - positioned directly below cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={controls}
        initial={{ scale: 0, opacity: 0 }}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: 12,
          height: 12,
          borderRadius: '50%',
          border: '2px solid #000',
          borderTopColor: 'transparent',
          position: 'fixed' as const,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          pointerEvents: 'none' as const,
          filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5))',
        }}
      >
        <style jsx>{`
          .fixed {
            animation: spin 0.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
          @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}