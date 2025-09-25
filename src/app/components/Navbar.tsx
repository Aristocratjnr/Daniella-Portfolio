"use client"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}

export function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('HOME');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'website',
    timeline: '1-2 weeks',
    budget: '1000-5000',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<QuoteFormData>>({});
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  useEffect(() => {
    // Set active link based on current path
    if (pathname === '/services') {
      setActiveLink('SERVICES');
    } else if (pathname === '/about') {
      setActiveLink('ABOUT ME');
    } else if (pathname === '/contact') {
      setActiveLink('CONTACT ME');
    } else if (pathname === '/') {
      setActiveLink('HOME');
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Project details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
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
          message: 'Your quote request has been sent successfully! We\'ll get back to you soon.'
        });
        
        // Reset form after successful submission
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
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(link);
    setIsOpen(false);
    
    if (link === 'HOME') {
      window.location.href = '/';
    } else if (link === 'CONTACT ME') {
      window.location.href = '/contact';
    } else if (link === 'ABOUT ME') {
      window.location.href = '/about';
    } else if (link === 'SERVICES') {
      window.location.href = '/services';
    } else {
      // For section links
      const sectionId = link.toLowerCase().replace(' ', '-');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // If we're on the home page, just scroll to the section
        if (window.location.pathname === '/' || window.location.pathname === '') {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If we're on another page, go to home first then scroll
          window.location.href = `/#${sectionId}`;
          // The actual scroll will be handled by the home page's useEffect
        }
      }
    }
  };

  const [currentActiveLink, setCurrentActiveLink] = useState('HOME');
  const navbarRef = useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // This code runs only on the client side
    if (window.location.pathname === '/contact') {
      setCurrentActiveLink('CONTACT ME');
    } else if (window.location.pathname === '/about') {
      setCurrentActiveLink('ABOUT ME');
    } else if (window.location.pathname === '/' || window.location.pathname === '') {
      setCurrentActiveLink('HOME');
    } else {
      setCurrentActiveLink(activeLink);
    }
  }, [activeLink]);

  return (
    <nav ref={navbarRef} className={`w-full fixed top-0 left-0 bg-background text-foreground px-4 sm:px-6 py-3 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'py-3'
    } ${poppins.className}`}>
      {/* Theme Toggle Button - Moved to navigation */}
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Daniella" 
              width={40}
              height={40}
              priority
              className="h-9 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground hover:text-muted-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background absolute left-0 right-0 top-full px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((link) => (
              <a
                key={link}
                href={
                  link === 'CONTACT ME' ? '/contact' : 
                  link === 'ABOUT ME' ? '/about' : 
                  link === 'HOME' ? '/' :
                  link === 'SERVICES' ? '/services' :
                  `#${link.toLowerCase().replace(' ', '-')}`
                }
                onClick={(e) => handleLinkClick(link, e)}
                className={`text-lg font-medium leading-normal transition-colors px-4 py-2 rounded-lg ${
                  currentActiveLink === link
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-2">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                REQUEST QUOTE
              </button>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">
        {/* Desktop Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/images/logo.png" 
            alt="Daniella" 
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation Menu - Centered */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
          {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((link) => (
            <a
              key={link}
              href={
                link === 'CONTACT ME' ? '/contact' : 
                link === 'ABOUT ME' ? '/about' : 
                link === 'HOME' ? '/' :
                link === 'SERVICES' ? '/services' :
                `#${link.toLowerCase().replace(' ', '-')}`
              }
              onClick={(e) => handleLinkClick(link, e)}
              className={`text-[18px] font-normal leading-normal transition-colors px-1 ${
                currentActiveLink === link
                  ? 'text-foreground border-b-2 border-primary pb-1'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Right Side - Quote Button and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center px-6 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            REQUEST QUOTE
          </button>
        </div>
      </div>
      
      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div 
            className="relative bg-card/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] my-4 overflow-y-auto shadow-2xl border border-border"
          >
            <button 
              onClick={() => !isSubmitting && setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              disabled={isSubmitting}
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-card-foreground">Request a Quote</h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">Fill out the form below and we&apos;ll get back to you shortly</p>
            </div>
            
            {submitStatus ? (
              <div className={`p-6 rounded-lg text-center ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                <div className="flex flex-col items-center">
                  {submitStatus.success ? (
                    <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
                  ) : (
                    <AlertCircle className="h-12 w-12 text-red-500 mb-3" />
                  )}
                  <p className="font-medium text-lg mt-2">{submitStatus.success ? 'Success!' : 'Error'}</p>
                  <p className="mt-1">{submitStatus.message}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name <span className="text-red-600 dark:text-red-400">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-background text-foreground`}
                      placeholder="Junior David"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-600 dark:text-red-400">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-background text-foreground`}
                      placeholder="junior@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number <span className="text-red-600 dark:text-red-400">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-background text-foreground`}
                      placeholder="+233 551784926"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent bg-background text-foreground"
                    >
                      <option value="website">Website</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent bg-background text-foreground"
                    >
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent bg-background text-foreground"
                    >
                      <option value="1000-5000">₵1,000 - ₵5,000</option>
                      <option value="5000-10000">₵5,000 - ₵10,000</option>
                      <option value="10000-25000">₵10,000 - ₵25,000</option>
                      <option value="25000-50000">₵25,000 - ₵50,000</option>
                      <option value="50000+">₵50,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Details <span className="text-red-600 dark:text-red-400">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:ring-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] focus:border-transparent bg-background text-foreground`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#33241E] dark:bg-[#A08D87] hover:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33241E] dark:focus:ring-[#A08D87] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="-ml-1 mr-2 h-5 w-5" />
                        Send Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
