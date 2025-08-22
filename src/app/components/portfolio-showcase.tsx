import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import Image from 'next/image';

const photoCards = [
    {
      src: "/images/mock.png",
      width: 145,
      height: 265,
      className:
        "absolute w-[145px] h-[265px] top-[220px] left-[-30px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-45deg] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-300 hover:scale-105 hover:rotate-[-42deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock - New Interface",
    },
    {
      src: "/images/mock-1.png",
      width: 155,
      height: 275,
      className:
        "absolute w-[155px] h-[275px] top-[120px] left-[140px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-25deg] shadow-[0px_10px_26px_rgba(0,0,0,0.18)] z-20 transition-transform duration-300 hover:scale-105 hover:rotate-[-22deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 1 - Research Interface",
    },
    {
      src: "/images/mock-2.png",
      width: 160,
      height: 285,
      className:
        "absolute w-[160px] h-[285px] top-[60px] left-[330px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-8deg] shadow-[0px_12px_28px_rgba(0,0,0,0.2)] z-30 transition-transform duration-300 hover:scale-105 hover:rotate-[-5deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 2 - Payment Interface",
    },
    {
      src: "/images/mock-3.png",
      width: 165,
      height: 295,
      className:
        "absolute w-[165px] h-[295px] top-[40px] left-[540px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[8deg] shadow-[0px_14px_30px_rgba(0,0,0,0.22)] z-35 transition-transform duration-300 hover:scale-105 hover:rotate-[11deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 3 - UX Design Interface",
    },
    {
      src: "/images/mock-4.png",
      width: 160,
      height: 285,
      className:
        "absolute w-[160px] h-[285px] top-[60px] left-[750px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[25deg] shadow-[0px_12px_28px_rgba(0,0,0,0.2)] z-30 transition-transform duration-300 hover:scale-105 hover:rotate-[28deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 4 - Development Interface",
    },
    {
      src: "/images/mock-5.png",
      width: 155,
      height: 275,
      className:
        "absolute w-[155px] h-[275px] top-[120px] left-[940px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[40deg] shadow-[0px_10px_26px_rgba(0,0,0,0.18)] z-20 transition-transform duration-300 hover:scale-105 hover:rotate-[43deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 5 - Workspace Overview",
    },
    {
      src: "/images/mock-6.png",
      width: 145,
      height: 265,
      className:
        "absolute w-[145px] h-[265px] top-[220px] left-[1110px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[55deg] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-300 hover:scale-105 hover:rotate-[58deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 6 - Creative Interface",
    },
  ]
  
  export default function PortfolioShowcase() {
    interface FormData {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      timeline: string;
      budget: string;
      message: string;
    }

    interface FormErrors {
      name?: string;
      email?: string;
      phone?: string;
      projectType?: string;
      timeline?: string;
      budget?: string;
      message?: string;
    }

    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      projectType: 'website',
      timeline: '1-2 weeks',
      budget: '1000-5000',
      message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const newErrors: FormErrors = {};
      if (!formData.name) newErrors.name = 'Please enter your name';
      if (!formData.email) {
        newErrors.email = 'Please enter your email';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone) newErrors.phone = 'Please enter your phone number';
      if (!formData.message) newErrors.message = 'Please tell us about your project';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitStatus({
          success: true,
          message: 'Your quote request has been sent! We\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'website',
          timeline: '1-2 weeks',
          budget: '1000-5000',
          message: ''
        });
        
        // Close modal after delay
        setTimeout(() => {
          setIsQuoteModalOpen(false);
          setSubmitStatus(null);
        }, 3000);
        
      } catch {
        setSubmitStatus({
          success: false,
          message: 'Something went wrong. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }

    // Close modal when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          setIsQuoteModalOpen(false);
        }
      };

      if (isQuoteModalOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isQuoteModalOpen]);

    return (
      <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Rating Section */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9814 14.1777L22.3027 15.0781L23.2539 15.166L32.7656 16.0518L25.3594 23.4268L24.7852 23.998L24.9482 24.791L27.1387 35.4678L19.3682 29.9521L18.5 29.3359L17.6318 29.9521L9.86035 35.4678L12.0518 24.791L12.2148 23.998L11.6406 23.4268L4.2334 16.0518L13.7461 15.166L14.6973 15.0781L15.0186 14.1777L18.5 4.4502L21.9814 14.1777Z" fill="#6E4D42" stroke="#F1C644" strokeWidth="3"/>
                </svg>
              ))}
              <svg className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="60%" stopColor="#6E4D42" />
                    <stop offset="60%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path 
                  d="M21.9814 14.1777L22.3027 15.0781L23.2539 15.166L32.7656 16.0518L25.3594 23.4268L24.7852 23.998L24.9482 24.791L27.1387 35.4678L19.3682 29.9521L18.5 29.3359L17.6318 29.9521L9.86035 35.4678L12.0518 24.791L12.2148 23.998L11.6406 23.4268L4.2334 16.0518L13.7461 15.166L14.6973 15.0781L15.0186 14.1777L18.5 4.4502L21.9814 14.1777Z" 
                  fill="url(#half-star)" 
                  stroke="#F1C644" 
                  strokeWidth="3"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-md">
              <span className="font-semibold">4.6 ratings</span>
            </p>
            <p className="text-gray-500 text-sm">Trusted by 6+ Clients</p>
          </div>
  
          <div className="relative h-[540px] flex items-center justify-center overflow-hidden">
            {/* Phone Mockups arranged in concave arc */}
            <div className="relative w-[1250px] h-[600px]">
              {photoCards.map((card, index) => (
                <div key={index} className={card.className}>
                  <Image 
                    className={card.imgClassName} 
                    alt={card.alt} 
                    src={card.src || "/placeholder.svg"} 
                    width={card.width}
                    height={card.height}
                    fill={false}
                  />
                </div>
              ))}
  
              {/* Subtle arc guide line for visual reference (optional) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg width="1000" height="500" className="absolute opacity-5">
                  <path 
                    d="M 20,350 Q 500,80 980,350" 
                    stroke="#e5e7eb" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
      {/* Button Section */}
          <div className="mb-4 text-center relative pt-32 pb-20 px-4">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <svg width="800" height="200" viewBox="0 0 800 200" className="relative">
                <defs>
                  <path id="button-arc" d="M 150,150 C 250,40 550,40 650,150" fill="none" />
                </defs>
                <text className="fill-black text-xl font-extrabold tracking-widest">
                  <textPath href="#button-arc" startOffset="50%" textAnchor="middle" dominantBaseline="middle" letterSpacing="0.8em">
                    READY  TO  STEP  UP  ?
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-gray-800 mb-6 text-md font-thin">Join hundreds of Satisfied Clients and Users</p>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#33241E] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:shadow-blue-200/50 group"
              >
                <span className="relative z-10">REQUEST A QUOTE</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <motion.div 
            ref={modalRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 sm:p-5 w-full max-w-md mx-auto my-4 sm:my-6 relative shadow-2xl border border-white/20 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5">Get a Free Quote</h3>
              <p className="text-xs sm:text-sm text-gray-600">Fill out the form and we&apos;ll get back to you</p>
            </div>

            {submitStatus ? (
              <div className={`p-6 rounded-lg text-center ${submitStatus?.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus?.success ? (
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-500" />
                ) : (
                  <AlertCircle className="w-10 h-10 mx-auto mb-3 text-red-500" />
                )}
                <p className="text-sm font-medium">{submitStatus?.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full px-3 py-1.5 text-sm rounded border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1.5 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1.5 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                </div>

                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1.5 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-20000">$5,000 - $20,000</option>
                    <option value="20000-50000">$20,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={3}
                    className={`w-full px-3 py-1.5 text-sm rounded border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#33241E] hover:bg-gray-800 text-white py-2 px-4 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}