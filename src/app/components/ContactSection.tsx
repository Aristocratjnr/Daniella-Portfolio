"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, useInView, Variants, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Animation variants for staggered form inputs
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_email: 'daniellaasiedu755@gmail.com',
          from_email: formData.email,
          from_name: formData.name,
          contact: formData.contact,
          message: formData.message
        }),
      });

      if (response.ok) {
        // Show success modal
        setIsModalOpen(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          message: ''
        });
      } else {
        // Handle error
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="flex justify-center py-4 sm:py-8 md:py-16 px-2 sm:px-4 lg:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-pink-50 dark:bg-gray-800/90 flex items-center justify-center w-full max-w-[1280px] mx-auto rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] p-4 sm:p-6 md:p-8 lg:p-16 border border-transparent dark:border-gray-700/30 backdrop-blur-sm"
          style={{
            minHeight: 'min(100vh - 2rem, 600px)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div 
            className="max-w-5xl w-full relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Floating CONTACT ME button extending beyond right edge */}
            <motion.div 
              className="absolute -top-3 sm:-top-4 md:-top-6 -right-2 sm:-right-3 md:-right-4 z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
            >
              <motion.div 
                className="flex items-center justify-center shadow-lg dark:shadow-gray-900/50 border border-transparent dark:border-gray-700/30" 
                style={{ 
                  background: "linear-gradient(to right, #B5A394, #A58D84)",
                  backgroundImage: "linear-gradient(to right, #B5A394, #A58D84)",
                  width: 'clamp(200px, 50vw, 694px)',
                  height: 'clamp(50px, 12vw, 130px)',
                  borderRadius: 'clamp(20px, 5vw, 50px) clamp(20px, 5vw, 50px) 0 clamp(20px, 5vw, 50px)'
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h1 
                  className="text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0.8)", 
                      "0 0 5px rgba(255,255,255,0.8)", 
                      "0 0 0px rgba(255,255,255,0.8)"
                    ],
                    color: [
                      "rgba(255,255,255,1)",
                      "rgba(255,255,255,0.9)",
                      "rgba(255,255,255,1)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                >
                  <span className="relative">
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 dark:bg-white/60"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                    CONTACT ME
                  </span>
                </motion.h1>
              </motion.div>
            </motion.div>
            
            <div className="bg-[#F2EEED] dark:bg-gray-900/80 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl dark:shadow-gray-950/70 pt-12 sm:pt-14 md:pt-16 border border-white/10 dark:border-gray-800/50 backdrop-filter backdrop-blur-sm dark:backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left side - Illustration */}
                <motion.div 
                  className="flex justify-center order-2 lg:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="relative w-60 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96">
                    {/* Floating particles - small circles with varied sizes and positions */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute rounded-full ${
                          i % 4 === 0 
                            ? 'bg-blue-200/40 dark:bg-blue-300/30' 
                            : i % 4 === 1 
                              ? 'bg-pink-200/30 dark:bg-pink-300/25' 
                              : i % 4 === 2
                                ? 'bg-purple-200/30 dark:bg-purple-300/25'
                                : 'bg-amber-200/30 dark:bg-amber-300/25'
                        }`}
                        style={{
                          width: `${5 + (i % 5) * 3}px`,
                          height: `${5 + (i % 5) * 3}px`,
                          left: `${10 + (i * 12) % 80}%`,
                          top: `${5 + (i * 10) % 90}%`,
                          filter: i % 5 === 0 ? 'blur(0.5px)' : 'none',
                          boxShadow: i % 3 === 0 ? '0 0 4px rgba(255,255,255,0.2)' : 'none'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0.3, 0.8, 0.3],
                          y: [`${-10 - (i % 5) * 8}px`, `${10 + (i % 3) * 8}px`, `${-10 - (i % 5) * 8}px`],
                          x: [`${-5 - (i % 3) * 7}px`, `${5 + (i % 4) * 7}px`, `${-5 - (i % 3) * 7}px`],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 5 + i % 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Additional star-like particles - enhanced for dark mode */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`star-${i}`}
                        className="absolute"
                        style={{
                          width: `${2 + (i % 3)}px`,
                          height: `${2 + (i % 3)}px`,
                          left: `${5 + (i * 20) % 90}%`,
                          top: `${10 + (i * 15) % 80}%`,
                          background: i % 2 ? '#FFF' : '#F9F9FF',
                          boxShadow: '0 0 4px rgba(255,255,255,0.6) dark:rgba(255,255,255,0.9)',
                          zIndex: 5
                        }}
                        animate={{ 
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            '0 0 2px rgba(255,255,255,0.6)',
                            '0 0 6px rgba(255,255,255,0.9)',
                            '0 0 2px rgba(255,255,255,0.6)'
                          ]
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                    {/* Chat bubbles - responsive sizing */}
                    <motion.div 
                      className="absolute -top-2 sm:-top-4 left-4 sm:left-8 bg-white rounded-lg sm:rounded-2xl px-2 sm:px-4 py-1.5 sm:py-3 shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -2, 0],
                        rotate: [0, 1, 0, -1, 0],
                        scale: [1, 1.02, 1],
                        boxShadow: [
                          "0px 4px 8px rgba(0,0,0,0.1)",
                          "0px 8px 16px rgba(0,0,0,0.15)",
                          "0px 4px 8px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{ 
                        delay: 0.8, 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -3, 3, -2, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <motion.div 
                        className="text-orange-500 text-sm sm:text-lg font-bold"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 1,
                        }}
                      >
                        !
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-2 sm:top-4 left-12 sm:left-24 bg-blue-600 rounded-lg sm:rounded-2xl px-2 sm:px-4 py-1.5 sm:py-3 shadow-lg"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -3, 0],
                        scale: [1, 1.03, 1],
                        rotate: [0, -0.5, 0, 0.5, 0],
                        boxShadow: [
                          "0px 4px 8px rgba(0,0,0,0.15)",
                          "0px 6px 12px rgba(0,0,0,0.2)",
                          "0px 4px 8px rgba(0,0,0,0.15)"
                        ] 
                      }}
                      transition={{ 
                        delay: 1.0, 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.25, 0.5, 0.75, 1]
                      }}
                      whileHover={{ 
                        scale: 1.12, 
                        rotate: [0, 3, -3, 0],
                        transition: { duration: 0.4 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex gap-1 sm:gap-1.5">
                        <motion.div 
                          className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5,
                            delay: 0
                          }}
                        ></motion.div>
                        <motion.div 
                          className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5,
                            delay: 0.4
                          }}
                        ></motion.div>
                        <motion.div 
                          className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5,
                            delay: 0.8
                          }}
                        ></motion.div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-8 sm:top-16 -right-2 sm:-right-4 bg-white rounded-lg sm:rounded-2xl px-2 sm:px-4 py-1.5 sm:py-3 shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -2, -1, -3, 0],
                        x: [0, 1, 0, -1, 0],
                        scale: [1, 1.04, 1, 1.02, 1],
                        rotate: [0, 0.8, 0, -0.8, 0],
                        boxShadow: [
                          "0px 4px 8px rgba(0,0,0,0.1)",
                          "0px 6px 10px rgba(0,0,0,0.15)",
                          "0px 4px 8px rgba(0,0,0,0.1)"
                        ] 
                      }}
                      transition={{ 
                        delay: 1.2, 
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1]
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -3, 3, -3, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <motion.div 
                        className="text-orange-500 text-sm sm:text-lg font-bold"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotateZ: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      >
                        !
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-8 sm:bottom-16 -left-2 sm:-left-4 bg-gray-800 rounded-lg sm:rounded-2xl px-2 sm:px-4 py-1.5 sm:py-3 shadow-lg"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -2, -3, -1, 0],
                        x: [0, -1, 0, 1, 0],
                        scale: [1, 1.03, 1, 1.02, 1],
                        rotate: [0, 0.5, 0, -0.5, 0],
                        boxShadow: [
                          "0px 4px 8px rgba(0,0,0,0.15)",
                          "0px 8px 12px rgba(0,0,0,0.2)",
                          "0px 4px 8px rgba(0,0,0,0.15)"
                        ] 
                      }}
                      transition={{ 
                        delay: 1.4, 
                        duration: 7.2, // Different duration for more randomness
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.3, 0.5, 0.7, 1]
                      }}
                      whileHover={{ 
                        scale: 1.12, 
                        rotate: [0, 3, -2, 1, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <div className="flex gap-0.5 sm:gap-1">
                        {[0, 0.3, 0.6, 0.9].map((delay, index) => (
                          <motion.div 
                            key={index}
                            className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: delay
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-gray-800 rounded-lg sm:rounded-2xl px-2 sm:px-4 py-1.5 sm:py-3 shadow-lg"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -1, -2, 0],
                        x: [0, 2, 0, -1, 0],
                        scale: [1, 1.05, 0.98, 1],
                        rotate: [0, -0.7, 0, 0.7, 0],
                        boxShadow: [
                          "0px 3px 6px rgba(0,0,0,0.1)",
                          "0px 6px 10px rgba(0,0,0,0.18)",
                          "0px 3px 6px rgba(0,0,0,0.1)"
                        ] 
                      }}
                      transition={{ 
                        delay: 1.6, 
                        duration: 6.5, // Different duration again
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.25, 0.6, 1]
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.4 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="flex gap-0.5 sm:gap-1">
                        <motion.div 
                          className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.2
                          }}
                        />
                        <motion.div 
                          className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.8
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Main illustration - Contact image with glow effect */}
                    <motion.div 
                      className="relative w-full h-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1
                      }}
                      transition={{ 
                        delay: 0.5, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Subtle glow effect behind the illustration */}
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200/30 via-blue-200/20 to-purple-200/30 blur-xl"
                        style={{ transform: 'translateY(5%)' }}
                        animate={{
                          opacity: [0.4, 0.6, 0.4],
                          scale: [0.85, 0.9, 0.85]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Advanced floating animation with combined movements */}
                      <motion.div
                        className="w-full h-full relative z-10"
                        animate={{ 
                          y: [0, -8, 0, -4, 0],
                          x: [0, 3, 0, -3, 0],
                          rotate: [0, 0.5, 0, -0.5, 0]
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                      >
                        {/* Subtle shine effect overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full"
                          animate={{
                            opacity: [0, 0.15, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        />
                        
                        <Image
                          src="/images/contact.png" 
                          alt="Contact illustration" 
                          width={500}
                          height={500}
                          className="w-full h-full object-contain relative z-10"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right side - Contact Form */}
                <motion.div 
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                  {/* Description - Enhanced with special styling and animations */}
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2 sm:space-y-3 text-center lg:text-left p-3 sm:p-4 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div className="relative inline-block">
                      <motion.span 
                        className="absolute -left-4 top-0 text-pink-400 dark:text-pink-300 font-bold"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                      ></motion.span>
                      <motion.h3 
                        className="text-gray-700 dark:text-gray-100 font-medium mb-1 sm:mb-2 text-base sm:text-lg"
                        animate={{ 
                          color: ["#374151", "#6366f1", "#374151"]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        Get in Touch
                      </motion.h3>
                    </motion.div>
                    <motion.p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      Please leave me your message
                    </motion.p>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      I will answer it as quickly as possible
                    </motion.p>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.form 
                    variants={containerVariants}
                    onSubmit={handleSubmit} 
                    className="space-y-4 sm:space-y-6 pt-2 sm:pt-4"
                  >
                    <motion.div variants={itemVariants} className="space-y-1">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 dark:border-gray-600 rounded-none px-0 py-2 sm:py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-gray-600 dark:focus:border-gray-400 focus:ring-0 text-sm sm:text-base focus-visible:ring-0 focus-visible:border-gray-600 dark:focus-visible:border-gray-400 transition-colors duration-200"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-1">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 dark:border-gray-600 rounded-none px-0 py-2 sm:py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-gray-600 dark:focus:border-gray-400 focus:ring-0 text-sm sm:text-base focus-visible:ring-0 focus-visible:border-gray-600 dark:focus-visible:border-gray-400"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-1">
                      <Input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Contact"
                        className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 dark:border-gray-600 rounded-none px-0 py-2 sm:py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-gray-600 dark:focus:border-gray-400 focus:ring-0 text-sm sm:text-base focus-visible:ring-0 focus-visible:border-gray-600 dark:focus-visible:border-gray-400"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-1">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={3}
                        className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 dark:border-gray-600 rounded-none px-0 py-2 sm:py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-gray-600 dark:focus:border-gray-400 focus:ring-0 resize-none text-sm sm:text-base focus-visible:ring-0 focus-visible:border-gray-600 dark:focus-visible:border-gray-400"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      className="pt-2 sm:pt-4 text-center lg:text-left"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        type="submit"
                        className="relative bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/90 dark:hover:bg-gray-700/90 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600/50 rounded-full px-6 sm:px-8 py-2 transition-all duration-300 text-sm sm:text-base font-medium shadow-sm hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 focus-visible:ring-0 w-full sm:w-auto overflow-hidden group backdrop-blur-sm"
                      >
                        <span className="relative z-10">Submit</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-100/50 dark:from-blue-700/40 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                      </Button>
                    </motion.div>
                  </motion.form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Success Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative mx-4 shadow-xl dark:shadow-gray-900/70 border border-gray-100 dark:border-gray-700/50 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <motion.button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
              
              <motion.div className="text-center">
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md dark:shadow-green-900/20 border border-green-200 dark:border-green-700/50"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(74, 222, 128, 0)",
                        "0 0 0 10px rgba(74, 222, 128, 0.1)",
                        "0 0 0 0 rgba(74, 222, 128, 0)"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: 1
                    }}
                  />
                  <motion.svg 
                    className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    ></path>
                  </motion.svg>
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Message Sent!
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </motion.p>
                
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gradient-to-r from-[#B5A394] to-[#A58D84] hover:from-[#A58D84] hover:to-[#9c8e82] text-white font-medium py-2 px-6 rounded-full transition-all duration-200 text-sm sm:text-base w-full sm:w-auto shadow-md hover:shadow-lg dark:shadow-gray-900/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}