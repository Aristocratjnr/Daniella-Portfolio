"use client";

import React from 'react';
import Image from "next/image";
import { motion, Variants } from 'framer-motion';
import { Star } from "lucide-react";

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
      duration: 0.6,
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

export default function Testimonials() {
  return (
    <div className="w-full bg-white py-12">
      <motion.h1 
        className="text-3xl md:text-5xl font-bold text-center text-[#6E4D42] mb-16 md:mb-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-8 px-4 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* First Testimonial */}
        <motion.div 
          className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
          variants={item}
          whileHover={{ 
            y: -8,
            boxShadow: '0 15px 40px rgba(110, 77, 66, 0.15)',
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute -top-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/akua.png"
                alt="Akua Donkor"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="pt-12 flex flex-col items-center">
            <h3 className="text-xl font-bold">Akua Donkor</h3>
            <p className="text-gray-600 mb-4">Founder and CEO</p>
            
            <p className="text-center text-sm mb-4">
              &ldquo;Daniella's design skills are exceptional. She created a beautiful and intuitive interface for our mobile app that our users love. Her attention to detail is remarkable.&ldquo;
            </p>
            
            <div className="flex mt-auto">
              <motion.div 
                className="border border-gray-200 rounded-md p-1 flex gap-0.5"
                initial={false}
                whileHover={{ 
                  boxShadow: '0 4px 12px rgba(110, 77, 66, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Star 
                      className="w-5 h-5" 
                      fill="#D1D5DB" 
                      stroke="#9CA3AF"
                      strokeWidth={1.5} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Second Testimonial */}
        <motion.div 
          className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
          variants={item}
          whileHover={{ 
            y: -8,
            boxShadow: '0 15px 40px rgba(110, 77, 66, 0.15)',
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute -top-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ataa.png"
                alt="Ataa Ayi"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="pt-12 flex flex-col items-center">
            <h3 className="text-xl font-bold">Ataa Ayi</h3>
            <p className="text-gray-600 mb-4">Product Manager</p>
            
            <p className="text-center text-sm mb-4">
              &ldquo;Working with Daniella was a pleasure. She transformed our website with her creative design solutions and improved our user engagement significantly. Highly recommended!&ldquo;
            </p>
            
            <div className="flex mt-auto">
              <motion.div 
                className="border border-gray-200 rounded-md p-1 flex gap-0.5"
                initial={false}
                whileHover={{ 
                  boxShadow: '0 4px 12px rgba(110, 77, 66, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Star 
                      className="w-5 h-5" 
                      fill="#D1D5DB" 
                      stroke="#9CA3AF"
                      strokeWidth={1.5} 
                    />
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Star 
                    className="w-5 h-5" 
                    fill="#D1D5DB"
                    stroke="#9CA3AF"
                    strokeWidth={1.5}
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Third Testimonial */}
        <motion.div 
          className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30"
          variants={item}
          whileHover={{ 
            y: -8,
            boxShadow: '0 15px 40px rgba(110, 77, 66, 0.15)',
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="absolute -top-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/diana.png"
                alt="Diana Asamoah"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="pt-12 flex flex-col items-center">
            <h3 className="text-xl font-bold">Diana Asamoah</h3>
            <p className="text-gray-600 mb-4">Construction Manager</p>
            
            <p className="text-center text-sm mb-4">
              &ldquo;Daniella's attention to detail and creative approach to problem-solving made our construction company's rebranding project a huge success. The new visual identity perfectly captures our values.&ldquo;
            </p>
            
            <div className="flex mt-auto">
              <motion.div 
                className="border border-gray-200 rounded-md p-1 flex gap-0.5"
                initial={false}
                whileHover={{ 
                  boxShadow: '0 4px 12px rgba(110, 77, 66, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Star 
                      className="w-5 h-5" 
                      fill="#D1D5DB" 
                      stroke="#9CA3AF"
                      strokeWidth={1.5} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
