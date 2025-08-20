"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { X } from "lucide-react"

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success modal
    setIsModalOpen(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full">
      <div className="flex justify-center py-8 md:py-16 px-4 sm:px-6">
        <div 
          className="bg-pink-50 flex items-center justify-center w-full max-w-[1280px] mx-auto rounded-[50px] p-8 md:p-16"
          style={{
            minHeight: 'min(100vh - 4rem, 838px)'
          }}
        >
          <div className="max-w-5xl w-full relative">
            {/* Floating CONTACT ME button extending beyond right edge */}
            <div className="absolute -top-6 -right-4 z-10">
              <div 
                className="flex items-center justify-center shadow-lg" 
                style={{ 
                  backgroundColor: "#B5A394",
                  width: '694px',
                  height: '130px',
                  borderRadius: '50px 50px 0 50px'
                }}
              >
                <h1 className="text-white font-semibold text-2xl tracking-wide">CONTACT ME</h1>
              </div>
            </div>
            
            <div className="bg-[#F2EEED] rounded-3xl p-8 md:p-12 shadow-xl pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-80 h-96">
                {/* Chat bubbles */}
                <div className="absolute -top-4 left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="text-orange-500 text-lg font-bold">!</div>
                </div>
                <div className="absolute top-4 left-24 bg-blue-600 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-16 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="text-orange-500 text-lg font-bold">!</div>
                </div>
                <div className="absolute bottom-16 -left-4 bg-gray-800 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 bg-gray-800 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Main illustration - Contact image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/contact.png" 
                    alt="Contact illustration" 
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <p className="text-black text-base leading-relaxed">Please leave me your message</p>
                <p className="text-black text-base leading-relaxed">I will answer it as quickly as possible</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="space-y-1">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-base focus-visible:ring-0 focus-visible:border-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-base focus-visible:ring-0 focus-visible:border-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 text-base focus-visible:ring-0 focus-visible:border-gray-600"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    className="bg-transparent border-0 border-b-2 border-dotted border-gray-300 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 resize-none text-base focus-visible:ring-0 focus-visible:border-gray-600"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-full px-8 py-2 transition-all duration-200 text-base font-medium shadow-sm hover:shadow focus-visible:ring-0"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      
      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  className="w-10 h-10 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#B5A394] hover:bg-[#9c8e82] text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
