import {  Instagram,  } from "lucide-react"
import Image from "next/image"
export function Footer() {
  return (
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
                  href="https://instagram.com/daniella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://dribbble.com/daniella" 
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
                  href="https://thread.com/daniella" 
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
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
