"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setIsDialogOpen(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
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

                    <div className="flex items-start space-x-3 pt-1">
                      <Checkbox 
                        id="privacy"
                        className={`h-5 w-5 rounded-md border-gray-300 mt-0.5 data-[state=checked]:bg-black ${errors.privacy ? 'border-red-500' : ''}`}
                        disabled={isSubmitting}
                        checked={watch('privacy')}
                        onCheckedChange={(checked) => setValue('privacy', checked === true)}
                      />
                      <label htmlFor="privacy" className="text-gray-700 text-sm leading-tight">
                        I agree to the <a href="#" className="text-black font-medium hover:underline">Privacy & Policy</a>
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
      <Footer />
      
      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center justify-center space-y-4 pt-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <DialogTitle className="text-2xl font-bold text-center">Message Sent!</DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </DialogDescription>
            </div>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              type="button"
              onClick={() => setIsDialogOpen(false)}
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
