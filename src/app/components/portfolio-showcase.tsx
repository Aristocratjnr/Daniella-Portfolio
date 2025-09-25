import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useMotionValue, useSpring } from 'framer-motion';
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
  
  // Add haptic feedback function with intensity control
  const triggerHapticFeedback = (duration = 10, intensity = 0.7) => {
    if ('vibrate' in navigator) {
      // Adjust duration based on intensity (0-1)
      const adjustedDuration = Math.min(Math.max(duration * intensity, 10), 50);
      navigator.vibrate(adjustedDuration);
    }
  };

  // Mobile-specific animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
        scale: { type: 'spring', stiffness: 300, damping: 20 }
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.98,
      transition: { type: 'spring', stiffness: 500, damping: 20 }
    }
  };

  // Individual card variants for staggered animations
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        scale: { type: 'spring', stiffness: 300, damping: 20 }
      }
    }
  };

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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    // Motion value for thumb translation to avoid transform conflicts with Framer
    const thumbX = useMotionValue(0);
    const springThumbX = useSpring(thumbX, { stiffness: 300, damping: 30 });
    const [thumbWidthPct, setThumbWidthPct] = useState(30);
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
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to_email: 'davidayim01@gmail.com',
            from_email: formData.email,
            from_name: formData.name,
            contact: formData.phone,
            message: `Project Type: ${formData.projectType}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Details:
${formData.message}`
          }),
        });

        if (response.ok) {
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
          
          // Close modal after 3 seconds
          setTimeout(() => {
            setIsQuoteModalOpen(false);
            setSubmitStatus(null);
          }, 3000);
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error('Error sending email:', errorData);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later.'
          });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again later.'
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

    // Handle mobile scroll indicator
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      const scrollThumb = scrollThumbRef.current;
      
      if (scrollContainer && scrollThumb) {
        let rafId: number | null = null;
        let lastScrollLeft = -1;
        const handleScroll = () => {
          const maxScroll = Math.max(scrollContainer.scrollWidth - scrollContainer.clientWidth, 0);
          if (maxScroll === 0) {
            // No overflow; pin thumb to start and set full width
            thumbX.set(0);
            return;
          }
          const scrollPercentage = (scrollContainer.scrollLeft / maxScroll) * 100;
          const thumbPosition = Math.min(Math.max(scrollPercentage, 0), 100);
          
          // Calculate the maximum translation to keep the thumb within the track
          const trackElement = scrollThumb.closest('.scrollbar-track');
          const trackWidth = trackElement && trackElement.clientWidth > 0 ? trackElement.clientWidth : scrollContainer.clientWidth;
          const thumbWidth = scrollThumb.clientWidth;
          const translation = (trackWidth - thumbWidth) * (thumbPosition / 100);
          
          // Drive translation via motion value to avoid transform override
          thumbX.set(translation);
          
          // Add a pulsing effect when scrolling
          scrollThumb.style.opacity = '1';
          const timeoutId = scrollThumb.getAttribute('data-timeout-id');
          if (timeoutId) {
            window.clearTimeout(parseInt(timeoutId));
          }
          
          const newTimeoutId = window.setTimeout(() => {
            scrollThumb.style.opacity = '0.85';
          }, 800);
          
          scrollThumb.setAttribute('data-timeout-id', newTimeoutId.toString());
          
          // Update animation state for cards based on scroll position
          const cardsContainer = scrollContainer.querySelector('.cards-container');
          if (cardsContainer) {
            const cards = Array.from(cardsContainer.children) as HTMLElement[];
            cards.forEach((card, index) => {
              // Calculate a staggered animation effect based on scroll position and card index
              const offset = scrollPercentage * 0.2 - (index * 0.5);
              card.style.transform = `translateY(${Math.sin(offset) * 5}px)`;
            });
          }
        };

        // rAF polling in case scroll events are throttled/missed during touch swipes
        const tick = () => {
          if (scrollContainer.scrollLeft !== lastScrollLeft) {
            lastScrollLeft = scrollContainer.scrollLeft;
            handleScroll();
          }
          rafId = window.requestAnimationFrame(tick);
        };
        
        // Set initial thumb width based on viewport vs content ratio
        const updateThumbWidth = () => {
          const maxScroll = Math.max(scrollContainer.scrollWidth - scrollContainer.clientWidth, 0);
          if (maxScroll === 0) {
            setThumbWidthPct(100);
            thumbX.set(0);
            return;
          }
          const ratio = scrollContainer.clientWidth / scrollContainer.scrollWidth;
          const minWidth = 40; // Minimum width in pixels
          const trackElement = scrollThumb.closest('.scrollbar-track');
          const trackWidth = trackElement && trackElement.clientWidth > 0 ? trackElement.clientWidth : scrollContainer.clientWidth;
          const calculatedWidth = Math.max(ratio * 100, (minWidth / trackWidth) * 100);
          setThumbWidthPct(calculatedWidth);
        };
        
        // Auto-scroll animation for demonstration
        let autoScrollInterval: number | null = null;
        let scrollDirection = 1; // 1 for right, -1 for left
        let isUserScrolling = false;
        let userScrollTimeout: number | null = null;
        
        const startAutoScroll = () => {
          if (autoScrollInterval) return;
          
          autoScrollInterval = window.setInterval(() => {
            if (isUserScrolling) return;
            
            // Check if we need to change direction
            if (scrollDirection > 0 && scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 5) {
              scrollDirection = -1;
              
              // Add bounce effect when changing direction
              const trackElement = scrollThumb.closest('.scrollbar-track');
              if (trackElement) {
                trackElement.animate([
                  { boxShadow: '0 0 0 rgba(110, 77, 66, 0)' },
                  { boxShadow: '0 0 10px rgba(110, 77, 66, 0.6)' },
                  { boxShadow: '0 0 0 rgba(110, 77, 66, 0)' }
                ], {
                  duration: 800,
                  easing: 'ease-out'
                });
              }
              
            } else if (scrollDirection < 0 && scrollContainer.scrollLeft <= 5) {
              scrollDirection = 1;
              
              // Add bounce effect when changing direction
              const trackElement = scrollThumb.closest('.scrollbar-track');
              if (trackElement) {
                trackElement.animate([
                  { boxShadow: '0 0 0 rgba(110, 77, 66, 0)' },
                  { boxShadow: '0 0 10px rgba(110, 77, 66, 0.6)' },
                  { boxShadow: '0 0 0 rgba(110, 77, 66, 0)' }
                ], {
                  duration: 800,
                  easing: 'ease-out'
                });
              }
            }
            
            scrollContainer.scrollBy({ left: scrollDirection * 1, behavior: 'auto' });
          }, 50);
        };
        
        const stopAutoScroll = () => {
          if (autoScrollInterval) {
            window.clearInterval(autoScrollInterval);
            autoScrollInterval = null;
          }
        };
        
        // Handle user scroll to pause auto-scroll
        const handleUserScroll = () => {
          isUserScrolling = true;
          
          if (userScrollTimeout) {
            window.clearTimeout(userScrollTimeout);
          }
          
          userScrollTimeout = window.setTimeout(() => {
            isUserScrolling = false;
          }, 3000);
        };
        
        updateThumbWidth();
        window.addEventListener('resize', updateThumbWidth);
        scrollContainer.addEventListener('scroll', handleScroll);
        // Update position continuously during touch move
        scrollContainer.addEventListener('touchmove', handleScroll, { passive: true } as AddEventListenerOptions);
        scrollContainer.addEventListener('touchstart', handleUserScroll);
        scrollContainer.addEventListener('mousedown', handleUserScroll);
        
        // Start auto-scroll after a delay
        const initialTimeout = window.setTimeout(() => {
          startAutoScroll();
        }, 2000);
        
        // Run once to initialize
        handleScroll();
        rafId = window.requestAnimationFrame(tick);
        
        return () => {
          window.removeEventListener('resize', updateThumbWidth);
          scrollContainer.removeEventListener('scroll', handleScroll);
          scrollContainer.removeEventListener('touchstart', handleUserScroll);
          scrollContainer.removeEventListener('touchmove', handleScroll);
          scrollContainer.removeEventListener('mousedown', handleUserScroll);
          stopAutoScroll();
          if (userScrollTimeout) window.clearTimeout(userScrollTimeout);
          window.clearTimeout(initialTimeout);
          if (rafId) cancelAnimationFrame(rafId);
        };
      }
    }, [thumbX]);

    return (
      <>
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          {/* Rating Section */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9814 14.1777L22.3027 15.0781L23.2539 15.166L32.7656 16.0518L25.3594 23.4268L24.7852 23.998L24.9482 24.791L27.1387 35.4678L19.3682 29.9521L18.5 29.3359L17.6318 29.9521L9.86035 35.4678L12.0518 24.791L12.2148 23.998L11.6406 23.4268L4.2334 16.0518L13.7461 15.166L14.6973 15.0781L15.0186 14.1777L18.5 4.4502L21.9814 14.1777Z" fill="#6E4D42" stroke="#F1C644" strokeWidth="3" className="dark:fill-[#876D60]"/>
                </svg>
              ))}
              <svg className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="60%" stopColor="#6E4D42" className="dark:stop-color-[#876D60]" />
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
            <p className="text-gray-600 dark:text-gray-300 text-md">
              <span className="font-semibold">4.6 ratings</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Trusted by 6+ Clients</p>
          </div>
  
          {/* Desktop View - Hidden on mobile */}
          <div className="relative h-[540px] items-center justify-center overflow-hidden hidden md:flex">
            {/* Phone Mockups arranged in concave arc */}
            <div className="relative w-[1250px] h-[600px]">
              {photoCards.map((card, index) => (
                <div 
                  key={index} 
                  className={card.className}
                  onMouseDown={() => triggerHapticFeedback(10)}
                  onMouseUp={() => triggerHapticFeedback(5)}
                  onTouchStart={() => triggerHapticFeedback(10)}
                  onTouchEnd={() => triggerHapticFeedback(5)}
                >
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
                    className="dark:stroke-gray-700"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile View with Improved Animations */}
          <div className="md:hidden relative py-6">
            <div 
              ref={scrollContainerRef} 
              className="overflow-x-auto scrollbar-container pb-4 px-4"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                scrollPadding: '0 16px',
                scrollBehavior: 'smooth'
              }}
            >
              <motion.div 
                className="flex space-x-6 px-2 min-w-max cards-container"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                {photoCards.map((card, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="relative flex-shrink-0 rounded-[20px] overflow-hidden border-[0.5px] border-solid border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 photo-card-mobile"
                    style={{ 
                      width: `${card.width * 0.9}px`, 
                      height: `${card.height * 0.9}px`,
                      scrollSnapAlign: 'center',
                      transformOrigin: 'center bottom',
                      willChange: 'transform, opacity',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitTransform: 'translateZ(0)'
                    }}
                    onMouseDown={() => triggerHapticFeedback(10, 0.8)}
                    onMouseUp={() => triggerHapticFeedback(5, 0.5)}
                    onTouchStart={() => triggerHapticFeedback(8, 0.6)}
                    onTouchEnd={() => triggerHapticFeedback(3, 0.4)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 z-10 pointer-events-none"></div>
                    <motion.div 
                      className="w-full h-full relative"
                      whileInView={{ scale: 1.05 }}
                      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image 
                        className="object-cover w-full h-full select-none" 
                        alt={card.alt} 
                        src={card.src || "/placeholder.svg"} 
                        width={card.width}
                        height={card.height}
                        priority={index < 3}
                        loading={index < 3 ? 'eager' : 'lazy'}
                        quality={85}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 opacity-100 transition-all duration-500 group-hover:opacity-100">
                      <span className="block text-sm font-semibold mb-0.5">{card.alt.split(' - ')[0]}</span>
                      <span className="text-xs opacity-80 font-normal">{card.alt.split(' - ')[1]}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Enhanced Scrollbar with Progress Indicator */}
            <div className="scrollbar-track relative mx-auto max-w-[180px] mt-6 mb-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                ref={scrollThumbRef}
                className="scroll-thumb absolute left-0 top-0 h-full bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-500 dark:to-[#876D60] rounded-full shadow-md"
                style={{ x: springThumbX, width: `${thumbWidthPct}%` }}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">Swipe to explore more</p>
          </div>
      {/* Button Section */}
          <div className="mb-4 text-center relative pt-4 pb-6 px-4">
            <div className="absolute inset-x-0 -top-4 flex justify-center">
              <svg width="800" height="140" viewBox="0 0 800 140" className="relative -mt-14">
                <defs>
                  <path id="button-arc" d="M 100,100 C 250,40 550,40 700,100" fill="none" />
                </defs>
                <text className="fill-black dark:fill-gray-100 text-3xl font-black tracking-widest [text-shadow:0_0_3px_rgba(0,0,0,0.2),0_0_6px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.05)] dark:[text-shadow:0_0_3px_rgba(255,255,255,0.2),0_0_6px_rgba(255,255,255,0.1),0_0_10px_rgba(255,255,255,0.05)]">
                  <textPath href="#button-arc" startOffset="50%" textAnchor="middle" dominantBaseline="middle" letterSpacing="0.6em">
                    Ready To Step Up ?
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-gray-800 dark:text-gray-300 mb-8 mt-2 text-md font-thin">Join hundreds of Satisfied Clients and Users</p>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#33241E] hover:bg-gray-800 dark:bg-[#563C33] dark:hover:bg-[#6E4D42] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-amber-900/30 group"
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
                    <option value="design">E-Commerce</option>
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
                    <option value="1000-5000">₵1,000 - ₵5,000</option>
                    <option value="5000-20000">₵5,000 - ₵20,000</option>
                    <option value="20000-50000">₵20,000 - ₵50,000</option>
                    <option value="50000+">₵50,000+</option>
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