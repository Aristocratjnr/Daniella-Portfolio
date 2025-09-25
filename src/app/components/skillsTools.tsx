"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function SkillsTools() {
  return (
    <div className="bg-white dark:bg-gray-900 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6E4D42] dark:text-[#C1B1AB] mb-4">
            SKILLS & TOOLS
          </h2>
          <motion.div 
            className="w-16 h-1 bg-[#C1B1AB] dark:bg-[#876D60] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="space-y-4 md:space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {/* Figma Card */}
            <motion.div 
              className="flex items-center rounded-xl overflow-hidden group relative"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6E4D42] dark:from-[#876D60] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="flex w-[60px] md:w-[80px] h-[60px] md:h-[80px] px-4 justify-center items-center flex-shrink-0 rounded-[20px] bg-[#B5A49A] dark:bg-[#876D60] z-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/skill-icons_figma-light.png" 
                  alt="Figma" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex min-h-[40px] md:h-[50px] p-2 md:px-4 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ml-[-10px] z-0 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-xs md:text-sm font-light text-gray-900 dark:text-gray-200 uppercase tracking-wide text-center">
                  FIGMA, FIGJAM, & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* Canva Card */}
            <motion.div 
              className="flex items-center rounded-xl overflow-hidden group relative"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6E4D42] dark:from-[#876D60] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="flex w-[60px] md:w-[80px] h-[60px] md:h-[80px] px-4 justify-center items-center flex-shrink-0 rounded-[20px] bg-[#B5A49A] dark:bg-[#876D60] z-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/devicon_canva.png" 
                  alt="Canva" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex min-h-[40px] md:h-[50px] p-2 md:px-4 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ml-[-10px] z-0 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-xs md:text-sm font-light text-gray-900 dark:text-gray-200 uppercase tracking-wide text-center">
                  CANVA & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Middle Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-3xl mx-auto">
            {/* Photoshop Card */}
            <motion.div 
              className="flex items-center rounded-xl overflow-hidden group relative"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6E4D42] dark:from-[#876D60] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="flex w-[60px] md:w-[80px] h-[60px] md:h-[80px] px-4 justify-center items-center flex-shrink-0 rounded-[20px] bg-[#B5A49A] dark:bg-[#876D60] z-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/devicon_photoshop.png" 
                  alt="Photoshop" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex min-h-[40px] md:h-[50px] p-2 md:px-4 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ml-[-10px] z-0 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-[10px] md:text-xs font-light text-gray-900 dark:text-gray-200 uppercase tracking-wide text-center px-2">
                  ADOBE PHOTOSHOP & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* PixelCut Card */}
            <motion.div 
              className="flex items-center rounded-xl overflow-hidden group relative"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6E4D42] dark:from-[#876D60] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="flex w-[60px] md:w-[80px] h-[60px] md:h-[80px] px-4 justify-center items-center flex-shrink-0 rounded-[20px] bg-[#B5A49A] dark:bg-[#876D60] z-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/arcticons_pixel-icon-pack-1.png" 
                  alt="PixelCut" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex min-h-[40px] md:h-[50px] p-2 md:px-4 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ml-[-10px] z-0 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-[10px] md:text-xs font-light text-gray-900 dark:text-gray-200 uppercase tracking-wide text-center px-2">
                  PIXELCUT & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Row - 1 centered card */}
          <div className="flex justify-center px-2">
            <motion.div 
              className="flex items-center rounded-xl overflow-hidden group relative"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={item}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6E4D42] dark:from-[#876D60] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="flex w-[60px] md:w-[80px] h-[60px] md:h-[80px] px-4 justify-center items-center flex-shrink-0 rounded-[20px] bg-[#B5A49A] dark:bg-[#876D60] z-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/hugeicons_study-desk.png" 
                  alt="Learning" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex min-h-[40px] md:h-[50px] p-2 md:px-4 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] ml-[-10px] z-0 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-[10px] md:text-xs font-light text-gray-900 dark:text-gray-200 uppercase tracking-wide text-center px-2">
                  OPEN TO & STILL DISCOVERING & LEARNING MORE DESIGN TOOLS
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}