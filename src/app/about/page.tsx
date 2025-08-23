"use client";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReasonsSection } from '../components/reasons-section';
import { SkillsTools } from '../components/skillsTools';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#A58D84]">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hello,
                  <br />
                  <span className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] transition-all duration-300">I&apos;m Daniella!</span>
                </motion.h1>
                
                <motion.div 
                  className="space-y-4 text-white text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p>
                    I&apos;m a passionate UX/UI Designer based in Ghana, 
                    currently pursuing a BSc. IT from UI/UX creating 
                    products that are beautiful and easy to use.
                  </p>
                  
                  <p>
                    As a dedicated designer who pays a keener focus on making my 
                    designs accessible to all. I believe in leading 
                    simple and inclusive designs that everyone can use regardless 
                    of their technical literacy. I have a natural 
                    strong love for design.
                  </p>
                  
                  <p>
                    My passion is to design where technology is becoming 
                    increasingly complex. I drive to create interfaces that 
                    are not only visually appealing but also user-friendly 
                    bridge that helps users can interact with complex systems and 
                    improve user experience.
                  </p>
                </motion.div>
              </div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="/cv/daniella-cv.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 group
                    bg-[#F2EEED] backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]
                    hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/30
                    text-black"
                >
                  <Image 
                    src="/images/download.png" 
                    alt="" 
                    width={18} 
                    height={18} 
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  Download my CV/Resume
                </a>
                
                <a
                  href="https://www.linkedin.com/in/daniella-asiedu-961856266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 group
                    bg-gray-700/80 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(107,114,128,0.3)]
                    hover:bg-gray-600/90 hover:shadow-[0_0_25px_rgba(75,85,99,0.5)] hover:border-white/30
                    text-white"
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
                  Connect on LinkedIn
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Illustration */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Researcher Tag - Top Right */}
                <motion.div 
                  className="absolute top-20 right-0 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 whitespace-nowrap min-w-[180px] text-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                >
                  The Researcher
                </motion.div>
                
                {/* Communicator Tag - Middle Left */}
                <motion.div 
                  className="absolute top-1/2 -left-4 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 transform -translate-y-1/2 whitespace-nowrap min-w-[200px] text-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  The Communicator
                </motion.div>
                
                {/* Strategist Tag - Bottom Right */}
                <motion.div 
                  className="absolute bottom-28 right-0 bg-[#D5CAC6] rounded-full px-10 py-2.5 text-base font-normal text-gray-800 shadow-lg z-10 whitespace-nowrap min-w-[180px] text-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  The Strategist
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative"
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
    </div>
  );
}