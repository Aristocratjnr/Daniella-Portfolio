"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function SkillsTools() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6E4D42] mb-4">
            SKILLS & TOOLS
          </h2>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="space-y-4 md:space-y-8">
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {/* Figma Card */}
            <motion.div 
              className="flex items-center rounded-2xl  overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex w-[80px] md:w-[120px] h-[80px] md:h-[100px] px-4 md:px-8 py-4 md:py-6 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#B5A49A]">
                <Image 
                  src="/images/skill-icons_figma-light.png" 
                  alt="Figma" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="inline-flex min-h-[60px] md:h-[77px] p-2 md:pr-4 md:pl-8 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
                  FIGMA, FIGJAM, & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* Canva Card */}
            <motion.div 
              className="flex items-center rounded-2xl overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex w-[80px] md:w-[120px] h-[80px] md:h-[100px] px-4 md:px-8 py-4 md:py-6 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#B5A49A]">
                <Image 
                  src="/images/devicon_canva.png" 
                  alt="Canva" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="inline-flex min-h-[60px] md:h-[77px] p-2 md:pr-4 md:pl-8 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
                  CANVA & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Middle Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-3xl mx-auto">
            {/* Photoshop Card */}
            <motion.div 
              className="flex items-center rounded-2xl overflow-visible mr-4
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex w-[80px] md:w-[120px] h-[80px] md:h-[100px] px-4 md:px-8 py-4 md:py-6 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#B5A49A]">
                <Image 
                  src="/images/devicon_photoshop.png" 
                  alt="Photoshop" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="inline-flex min-h-[60px] md:h-[77px] p-2 md:pr-6 md:pl-8 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
                  ADOBE PHOTOSHOP & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* PixelCut Card */}
            <motion.div 
              className="flex items-center rounded-2xl overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex w-[80px] md:w-[120px] h-[80px] md:h-[100px] px-4 md:px-8 py-4 md:py-6 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#B5A49A]">
                <Image 
                  src="/images/arcticons_pixel-icon-pack-1.png" 
                  alt="PixelCut" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="inline-flex min-h-[60px] md:h-[77px] p-2 md:pr-4 md:pl-8 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
                  PIXELCUT & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - 1 centered card */}
          <div className="flex justify-center px-2">
            <motion.div 
              className="flex items-center rounded-2xl overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex w-[80px] md:w-[120px] h-[80px] md:h-[100px] px-4 md:px-8 py-4 md:py-6 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#B5A49A]">
                <Image 
                  src="/images/hugeicons_study-desk.png" 
                  alt="Learning" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="inline-flex min-h-[60px] md:h-[77px] p-2 md:pr-4 md:pl-8 justify-center items-center flex-shrink-0 rounded-[20px] md:rounded-[30px] bg-[#F2EEED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide text-center">
                  OPEN TO & STILL DISCOVERING & LEARNING MORE DESIGN TOOLS
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}