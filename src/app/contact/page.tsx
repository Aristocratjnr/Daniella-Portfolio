"use client";

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import  PortfolioShowcase  from "../components/portfolio-showcase"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  privacy: z.boolean().refine((val: boolean) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type FormData = z.infer<typeof formSchema>;

const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-gray-700/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            aria-label="Close privacy policy"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="prose prose-sm sm:prose text-gray-700 dark:text-gray-300 space-y-4">
          <p className="font-medium">Last updated: August 20, 2025</p>
          
          <h3 className="text-lg font-semibold mt-6">1. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you fill out our contact form. This may include your name, email address, and any other information you choose to provide.</p>
          
          <h3 className="text-lg font-semibold mt-6">2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates and information about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">3. Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h3 className="text-lg font-semibold mt-6">4. Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your personal information</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at           <a href="mailto:daniellaasiedu755@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">daniellaasiedu755@gmail.com</a>.</p>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_email: 'daniellaasiedu755@gmail.com',
          from_email: data.email,
          from_name: `${data.firstName} ${data.lastName}`,
          message: data.message,
          contact: 'N/A' // Not collected in this form
        }),
      });

      if (response.ok) {
        setIsDialogOpen(true);
        reset();
      } else {
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-[#A58D84] dark:bg-gray-900 bg-opacity-95 transition-colors duration-300"
      style={{ cursor: 'url("/images/selection-pointer.png") 0 0, auto' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[calc(100vh-12rem)]"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {/* Contact Info Section */}
            <motion.div 
              className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 sm:space-y-8 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-r-none"
              variants={item}
              whileHover={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div className="space-y-4" variants={item}>
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Contact Me
                </motion.h1>
                <motion.p 
                  className="text-white text-base sm:text-lg font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Let&apos;s connect and build something great together!
                </motion.p>
                <motion.p 
                  className="text-white text-sm sm:text-base font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  I would love to hear from YOU
                </motion.p>
              </motion.div>

              <motion.div className="space-y-6 sm:space-y-8" variants={container}>
                <motion.div 
                  className="p-4 sm:p-5 bg-white/10 dark:bg-white/5 rounded-xl backdrop-blur-sm group"
                  variants={item}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Connect with me via:</p>
                  <a 
                    href="mailto:daniellaasiedu755@gmail.com" 
                    className="text-white font-medium hover:underline text-sm sm:text-base relative inline-block"
                  >
                    <span className="relative z-10">daniellaasiedu755@gmail.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>

                <motion.div 
                  className="p-4 sm:p-5 bg-white/10 dark:bg-white/5 rounded-xl backdrop-blur-sm group"
                  variants={item}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Phone</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Get in Touch with me via:</p>
                  <a 
                    href="tel:0203430787" 
                    className="text-white font-medium hover:underline text-sm sm:text-base relative inline-block"
                  >
                    <span className="relative z-10">020 343 0787</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              className="bg-[#F2EEED] dark:bg-gray-800 rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-10 shadow-xl"
              variants={item}
              whileHover={{ 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-full flex flex-col">
                <motion.h2 
                  className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Write me a message
                </motion.h2>
                
                <motion.form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="flex-1 flex flex-col"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="space-y-5 sm:space-y-6" variants={container}>
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                      variants={container}
                    >
                      <motion.div 
                        className="space-y-1.5"
                        variants={item}
                      >
                        <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">First name <span className="text-red-500 dark:text-red-400">*</span></label>
                        <motion.div whileHover={{ scale: 1.01 }}>
                          <Input
                            type="text"
                            className={`bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 transition-all ${errors.firstName ? 'border-red-500 dark:border-red-400' : ''}`}
                            disabled={isSubmitting}
                            {...register('firstName')}
                          />
                        </motion.div>
                        {errors.firstName && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors.firstName.message}
                          </motion.p>
                        )}
                      </motion.div>
                      <motion.div 
                        className="space-y-1.5"
                        variants={item}
                      >
                        <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Last name <span className="text-red-500 dark:text-red-400">*</span></label>
                        <motion.div whileHover={{ scale: 1.01 }}>
                          <Input
                            type="text"
                            className={`bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 transition-all ${errors.lastName ? 'border-red-500 dark:border-red-400' : ''}`}
                            disabled={isSubmitting}
                            {...register('lastName')}
                          />
                        </motion.div>
                        {errors.lastName && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {errors.lastName.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="space-y-1.5"
                      variants={item}
                    >
                      <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Email Address <span className="text-red-500 dark:text-red-400">*</span></label>
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <Input
                          type="email"
                          className={`bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 transition-all ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
                          disabled={isSubmitting}
                          {...register('email')}
                        />
                      </motion.div>
                      {errors.email && (
                        <motion.p 
                          className="text-red-500 text-xs mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      className="space-y-1.5"
                      variants={item}
                    >
                      <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Message <span className="text-red-500 dark:text-red-400">*</span></label>
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <Textarea
                          rows={4}
                          className={`bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 resize-none transition-all ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
                          disabled={isSubmitting}
                          {...register('message')}
                        />
                      </motion.div>
                      {errors.message && (
                        <motion.p 
                          className="text-red-500 text-xs mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      className="flex items-center space-x-2 pt-1"
                      variants={item}
                    >
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Checkbox 
                          id="privacy"
                          className={`h-5 w-5 rounded-md border-gray-300 data-[state=checked]:bg-black ${errors.privacy ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                          checked={watch('privacy')}
                          onCheckedChange={(checked) => setValue('privacy', checked === true)}
                        />
                      </motion.div>
                      <label htmlFor="privacy" className="text-gray-700 dark:text-gray-300 text-sm">
                        I agree to the{' '}
                        <motion.button 
                          type="button" 
                          onClick={(e) => {
                            e.preventDefault();
                            setIsPrivacyModalOpen(true);
                          }} 
                          className="text-black dark:text-gray-100 font-medium hover:underline focus:outline-none relative group"
                          whileHover={{ color: '#563C33' }}
                        >
                          <span className="relative z-10">Privacy & Policy</span>
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#563C33] group-hover:w-full transition-all duration-300"></span>
                        </motion.button>
                      </label>
                    </motion.div>
                    {errors.privacy && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors.privacy.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div 
                    className="mt-8 sm:mt-auto pt-4"
                    variants={item}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-[#33241E] hover:bg-gray-900 dark:bg-[#563C33] dark:hover:bg-[#6E4D42] text-white rounded-xl px-6 py-3.5 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <svg 
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                />
                              </svg>
                            </>
                          )}
                        </span>
                        <span className="absolute inset-0 bg-[#563C33] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <PortfolioShowcase />
      <Footer />
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      
      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <motion.div 
              className="mx-auto flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <DialogTitle className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Message Sent Successfully!
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  Thank you for reaching out, {watch('firstName') || 'there'}! I&apos;ll get back to you at{' '}
                  <span className="font-medium text-gray-900 dark:text-gray-100">{watch('email') || 'your email'}</span> as soon as possible.
                </DialogDescription>
              </motion.div>
            </motion.div>
          </DialogHeader>
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={() => setIsDialogOpen(false)}
                className="px-8 py-2 bg-[#B5A394] dark:bg-[#876D60] hover:bg-[#9c8e82] dark:hover:bg-[#6E4D42] text-white font-medium rounded-lg transition-colors"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
