"use client"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export function Navbar() {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(link);
    setIsOpen(false);
    
    if (link === 'HOME') {
      window.location.href = '/';
    } else if (link === 'CONTACT ME') {
      window.location.href = '/contact';
    } else {
      // For section links (ABOUT ME, SERVICES, etc.)
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

  useEffect(() => {
    // This code runs only on the client side
    if (window.location.pathname === '/contact') {
      setCurrentActiveLink('CONTACT ME');
    } else if (window.location.pathname === '/' || window.location.pathname === '') {
      setCurrentActiveLink('HOME');
    } else {
      setCurrentActiveLink(activeLink);
    }
  }, [activeLink]);

  return (
    <nav className={`w-full fixed top-0 left-0 bg-[#F2EEED] text-gray-900 px-4 sm:px-6 py-3 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'py-3'
    } ${poppins.className}`}>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <Image 
            src="/images/logo.png" 
            alt="Daniella" 
            width={36}
            height={36}
            className="h-9 w-auto"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 hover:text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F2EEED] absolute left-0 right-0 top-full px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((link) => (
              <a
                key={link}
                href={link === 'CONTACT ME' ? '/contact' : `#${link.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleLinkClick(link, e)}
                className={`text-lg font-medium leading-normal transition-colors px-4 py-2 rounded-lg ${
                  currentActiveLink === link
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link}
              </a>
            ))}
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2 border border-gray-900 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              REQUEST QUOTE
            </a>
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
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((link) => (
            <a
              key={link}
              href={link === 'CONTACT ME' ? '/contact' : `#${link.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleLinkClick(link, e)}
              className={`text-[18px] font-normal leading-normal transition-colors ${
                currentActiveLink === link
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex flex-shrink-0">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-2 border border-gray-900 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            REQUEST QUOTE
          </a>
        </div>
      </div>
    </nav>
  )
}
