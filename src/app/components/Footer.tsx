"use client";

import { Instagram, Github, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
const TermsOfServiceModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Terms of Service</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close terms of service"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>Last updated: August 20, 2025</p>
          
          <h3 className="text-lg font-semibold mt-6">1. Acceptance of Terms</h3>
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
          
          <h3 className="text-lg font-semibold mt-6">2. Use of Service</h3>
          <p>You agree to use this service only for lawful purposes and in accordance with these Terms.</p>
          
          <h3 className="text-lg font-semibold mt-6">3. Intellectual Property</h3>
          <p>All content on this website is the property of Daniella and is protected by copyright laws.</p>
          
          <h3 className="text-lg font-semibold mt-6">4. Contact Us</h3>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:daniellaasiedu755@gmail.com" className="text-blue-600 hover:underline">
              daniellaasiedu755@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const CookiesSettingsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

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

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSavePreferences = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Cookie Settings</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close cookie settings"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700">
            We use cookies to enhance your experience on our website. You can set your preferences below.
          </p>
          
          <div className="space-y-4">
            {/* Necessary Cookies - Always enabled */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Necessary Cookies</h3>
                <p className="text-sm text-gray-500">Essential for the website to function properly</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="necessary"
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label 
                  htmlFor="necessary"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            
            {/* Analytics Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                <p className="text-sm text-gray-500">Help us understand how visitors interact with our website</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="analytics"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={() => handlePreferenceChange('analytics')}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label 
                  htmlFor="analytics"
                  className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${preferences.analytics ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></label>
              </div>
            </div>
            
            {/* Marketing Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                <p className="text-sm text-gray-500">Used to track visitors across websites</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="marketing"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={() => handlePreferenceChange('marketing')}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label 
                  htmlFor="marketing"
                  className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${preferences.marketing ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></label>
              </div>
            </div>
            
            {/* Preferences Cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Preferences Cookies</h3>
                <p className="text-sm text-gray-500">Allow the website to remember choices you make</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="preferences"
                  id="preferences"
                  checked={preferences.preferences}
                  onChange={() => handlePreferenceChange('preferences')}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label 
                  htmlFor="preferences"
                  className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${preferences.preferences ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></label>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSavePreferences}
              className="px-4 py-2 text-sm font-medium text-white bg-[#33241E] border border-transparent rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>Last updated: August 20, 2025</p>
          
          <h3 className="text-lg font-semibold mt-6">1. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you fill out our contact form. This may include:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Contact number</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">2. How We Use Your Information</h3>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates and information about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">3. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3 className="text-lg font-semibold mt-6">4. Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of any incorrect data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your data</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">
              daniellaasiedu755@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Toggle switch styles
const toggleStyles = `
  .toggle-checkbox:checked {
    right: 0;
    border-color: #33241E;
  }
  .toggle-checkbox:checked + .toggle-label {
    background-color: #33241E;
  }
  .toggle-checkbox:disabled + .toggle-label {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
  .toggle-checkbox {
    transition: .2s;
    right: 1.5rem;
  }
  .toggle-label {
    transition: .2s;
  }
`;

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);
  return (
    <>
      <style jsx global>{toggleStyles}</style>
      <footer className="w-full bg-[#C1B1AB] px-4 sm:px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Top Row - Brand Card and Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Profile Image */}
          <div className="bg-white/90 rounded-3xl p-3 md:p-4 flex items-center justify-center backdrop-blur-sm border border-black h-40 md:h-48">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/images/her.png"
                alt="Daniella"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2 bg-white/90 rounded-3xl p-6 backdrop-blur-sm border border-black flex items-center">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed text-center w-full">
              I transform user needs into simple, clean, functional, and compelling interfaces.
            </p>
          </div>
        </div>

        {/* Middle Row - Contact and Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Contact Card */}
          <div className="bg-[#F2EEED] rounded-3xl p-4 sm:p-6 backdrop-blur-sm border border-black hover:shadow-md transition-shadow">
            <a 
              href="mailto:hello@daniella.com" 
              className="flex flex-col items-center justify-center h-full group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-gray-800 font-semibold text-lg md:text-xl">Say Hello : 💌</span>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              daniellaasiedu755@gmail.com
              </span>
            </a>
          </div>

          {/* Socials Card */}
          <div className="bg-[#F2EEED] rounded-3xl p-6 backdrop-blur-sm border border-black hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center h-full">
              <h3 className="text-gray-800 font-medium mb-4">Connect With Me</h3>
              <div className="flex items-center justify-center space-x-6 md:space-x-8">
                <a 
                  href="https://wa.me/233203430787" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Image 
                    src="/images/whatsapp.png" 
                    alt="WhatsApp" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/dani.ella8588" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/daniella-asiedu-961856266" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Portfolio"
                >
                  <Image 
                    src="/images/linkedin.png" 
                    alt="LinkedIn" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a 
                  href="https://www.threads.net/@dani.ella8588" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Portfolio"
                >
                  <Image 
                    src="/images/thread.png" 
                    alt="LinkedIn" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 object-contain"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white/90 rounded-3xl p-4 backdrop-blur-sm border border-black">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm sm:text-base font-medium text-gray-800 hover:text-gray-600 transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="bg-[#C1B1AB] rounded-3xl p-6 backdrop-blur-sm border border-black">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700 space-y-3 sm:space-y-0">
            <span>{new Date().getFullYear()} Daniella. All rights reserved.</span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:underline"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:underline"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setIsCookiesModalOpen(true)}
                className="hover:underline"
              >
                Cookies Settings
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Credits - Right Aligned */}
      <div className="max-w-6xl mx-auto pt-6 mt-8 border-t border-black/10">
        <div className="flex justify-end">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-black/60 font-light italic">Credits: Built by</span>
            <Link 
              href="https://github.com/aristocratjnr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-black/80 hover:text-black transition-colors group"
              aria-label="Visit developer's GitHub"
            >
              <span className="font-medium">aristocratjnr</span>
              <Github className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <CookiesSettingsModal
        isOpen={isCookiesModalOpen}
        onClose={() => setIsCookiesModalOpen(false)}
      />
      </footer>
    </>
  )
}
