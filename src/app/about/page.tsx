"use client";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
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

  return (
    <motion.div 
      className="min-h-screen bg-[#A58D84] overflow-x-hidden"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  <span className="inline-block">
                    Hello,
                  </span>
                  <br />
                  <span className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500">
                    I&apos;m Daniella!
                  </span>
                </h1>
                
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
    </motion.div>
  );
}