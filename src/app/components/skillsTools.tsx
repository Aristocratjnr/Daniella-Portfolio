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
          <h2 className="text-3xl md:text-4xl font-bold text-[#A58D84] mb-4">
            SKILLS & TOOLS
          </h2>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="space-y-8">
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Figma Card */}
            <motion.div 
              className="flex items-center bg-[#F2EEED] rounded-2xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-[#B5A49A] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/images/skill-icons_figma-light.png" 
                  alt="Figma" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1 px-6 h-12 flex items-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  FIGMA, FIGJAM, & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* Canva Card */}
            <motion.div 
              className="flex items-center bg-[#F2EEED] rounded-2xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-[#B5A49A] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/images/devicon_canva.png" 
                  alt="Canva" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1 px-6 h-12 flex items-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  CANVA & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Middle Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Photoshop Card */}
            <motion.div 
              className="flex items-center bg-[#F2EEED] rounded-2xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-20 h-20 bg-[#B5A49A] rounded-2xl flex items-center justify-center flex-shrink-1">
                <Image 
                  src="/images/devicon_photoshop.png" 
                  alt="Photoshop" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1 px-6 h-12 flex items-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  ADOBE PHOTOSHOP & ITS TOOLS
                </h3>
              </div>
            </motion.div>

            {/* PixelCut Card */}
            <motion.div 
              className="flex items-center bg-[#F2EEED] rounded-2xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-20 h-20 bg-[#B5A49A] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/images/arcticons_pixel-icon-pack-1.png" 
                  alt="PixelCut" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1 px-6 h-12 flex items-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  PIXELCUT & ITS TOOLS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - 1 centered card */}
          <div className="flex justify-center">
            <motion.div 
              className="flex items-center bg-[#F2EEED] rounded-2xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-20 h-20 bg-[#B5A49A] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/images/hugeicons_study-desk.png" 
                  alt="Learning" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1 px-6 h-12 flex items-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
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