"use client";

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
        className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close privacy policy"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="prose prose-sm sm:prose text-gray-700 space-y-4">
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
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:daniellaasiedu755@gmail.com" className="text-blue-600 hover:underline">daniellaasiedu755@gmail.com</a>.</p>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
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

  return (
    <div className="min-h-screen flex flex-col bg-[#A58D84] bg-opacity-95">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[calc(100vh-12rem)]">
            {/* Contact Info Section */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 sm:space-y-8 bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-r-none">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Me</h1>
                <p className="text-white text-base sm:text-lg font-medium">Let&apos;s connect and build something great together!</p>
                <p className="text-white text-sm sm:text-base font-medium">I would love to hear from YOU</p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-5 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Connect with me via:</p>
                  <a href="mailto:daniellaasiedu755@gmail.com" className="text-white font-medium hover:underline text-sm sm:text-base">daniellaasiedu755@gmail.com</a>
                </div>

                <div className="p-4 sm:p-5 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Phone</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">Get in Touch with me via:</p>
                  <a href="tel:0203430787" className="text-white font-medium hover:underline text-sm sm:text-base">020 343 0787</a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-[#F2EEED] rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Write me a message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="text-gray-700 text-sm font-medium">First name <span className="text-red-500">*</span></label>
                        <Input
                          type="text"
                          className={`bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all ${errors.firstName ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                          {...register('firstName')}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-gray-700 text-sm font-medium">Last name <span className="text-red-500">*</span></label>
                        <Input
                          type="text"
                          className={`bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all ${errors.lastName ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                          {...register('lastName')}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-gray-700 text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        type="email"
                        className={`bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all ${errors.email ? 'border-red-500' : ''}`}
                        disabled={isSubmitting}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-gray-700 text-sm font-medium">Message <span className="text-red-500">*</span></label>
                      <Textarea
                        rows={4}
                        className={`bg-gray-50 border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 resize-none transition-all ${errors.message ? 'border-red-500' : ''}`}
                        disabled={isSubmitting}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 pt-1">
                      <Checkbox 
                        id="privacy"
                        className={`h-5 w-5 rounded-md border-gray-300 data-[state=checked]:bg-black ${errors.privacy ? 'border-red-500' : ''}`}
                        disabled={isSubmitting}
                        checked={watch('privacy')}
                        onCheckedChange={(checked) => setValue('privacy', checked === true)}
                      />
                      <label htmlFor="privacy" className="text-gray-700 text-sm">
                        I agree to the{' '}
                        <button 
                          type="button" 
                          onClick={(e) => {
                            e.preventDefault();
                            setIsPrivacyModalOpen(true);
                          }} 
                          className="text-black font-medium hover:underline focus:outline-none"
                        >
                          Privacy & Policy
                        </button>
                      </label>
                    </div>
                    {errors.privacy && (
                      <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>
                    )}
                  </div>

                  <div className="mt-8 sm:mt-auto pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#33241E] hover:bg-gray-900 text-white rounded-xl px-6 py-3.5 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send'
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <DialogTitle className="text-center text-2xl font-semibold text-gray-900">
                Message Sent Successfully!
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600 mt-2">
                Thank you for reaching out, {watch('firstName') || 'there'}! I'll get back to you at{' '}
                <span className="font-medium text-gray-900">{watch('email') || 'your email'}</span> as soon as possible.
              </DialogDescription>
            </div>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setIsDialogOpen(false)}
              className="px-8 py-2 bg-[#B5A394] hover:bg-[#9c8e82] text-white font-medium rounded-lg transition-colors"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
