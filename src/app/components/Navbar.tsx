"use client"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState } from 'react'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export function Navbar() {
  const [activeLink, setActiveLink] = useState('HOME');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={`w-full bg-[#F2EEED] text-gray-900 px-6 py-4 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/images/logo.png" 
            alt="Daniella" 
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu - Centered */}
        <div className="hidden md:flex items-center space-x-12">
          {['HOME', 'ABOUT ME', 'SERVICES', 'CONTACT ME'].map((link) => (
            <a
              key={link}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link);
              }}
              className={`text-[18px] font-normal leading-normal transition-colors ${
                activeLink === link
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex-shrink-0">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-2 border border-gray-900 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-900 hover:bg-opacity-10 transition-colors"
          >
            REQUEST QUOTE
          </a>
        </div>
      </div>
    </nav>
  )
}
