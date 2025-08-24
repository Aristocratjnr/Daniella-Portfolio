import React from 'react'
import Image from "next/image"
import { Star } from "lucide-react"


export default function Testimonials() {
  return (
    <div className="w-full bg-white py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#6E4D42] mb-16 md:mb-20 px-4">Testimonials</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-8 px-4 max-w-5xl mx-auto">
        {/* First Testimonial */}
        <div className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30">
          <div className="absolute -top-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100">
              <Image
                src="/images/akua.png"
                alt="Akua Donkor"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="pt-12 flex flex-col items-center">
            <h3 className="text-xl font-bold">Akua Donkor</h3>
            <p className="text-gray-600 mb-4">Founder and CEO</p>
            
            <p className="text-center text-sm mb-4">
              &ldquo;Daniella&apos;s design skills are exceptional. She created a beautiful and intuitive interface for our mobile app that our users love. Her attention to detail is remarkable.&ldquo;
            </p>
            
            <div className="flex mt-auto">
              <div style={{ border: '0.1px solid #D9D9D9', borderRadius: '4px', padding: '2px 8px', display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-5 text-[#D9D9D9]" fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Testimonial */}
        <div className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30">
          <div className="absolute -top-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100">
              <Image
                src="/images/ataa.png"
                alt="Ataa Ayi"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
          
        <div className="pt-12 flex flex-col items-center">
        <h3 className="text-xl font-bold">Ataa Ayi</h3>
        <p className="text-gray-600 mb-4">Product Manager</p>

        <p className="text-center text-sm mb-4">
            &ldquo;Working with Daniella was a pleasure. She transformed our website with her creative design solutions and improved our user engagement significantly. Highly recommended!&ldquo;
        </p>

        <div className="flex mt-auto">
              <div style={{ border: '0.1px solid #D9D9D9', borderRadius: '4px', padding: '2px 8px', display: 'flex', gap: '2px' }}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-5 text-[#D9D9D9]" fill="currentColor" strokeWidth={1.5} />
                ))}
                {/* Half Star */}
                <Star className="w-6 h-5 text-[#D9D9D9]" fill="currentColor" strokeWidth={1.5} style={{clipPath: 'inset(0 50% 0 0)'}} />
              </div>
        </div>
        </div>
        </div>

        
        {/* Third Testimonial */}
        <div className="flex-1 border border-gray-900 rounded-3xl p-4 md:p-6 flex flex-col items-center relative h-[340px] max-w-xs mx-auto w-full
          bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(110,77,66,0.1)] hover:border-[#A58D84]/30">
          <div className="absolute -top-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-1 border-white shadow-sm bg-gray-100">
              <Image
                src="/images/diana.png"
                alt="Diana Asamoah"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="pt-12 flex flex-col items-center">
            <h3 className="text-xl font-bold">Diana Asamoah</h3>
            <p className="text-gray-600 mb-4">Construction Manager</p>
            
            <p className="text-center text-sm mb-4">
              &ldquo;Daniella&apos;s UI/UX designs are not just visually appealing but also highly functional. She understands user behavior and creates designs that are both beautiful and easy to use.&ldquo;
            </p>
            
            <div className="flex mt-auto">
                <div style={{ border: '0.1px solid #D9D9D9', borderRadius: '4px', padding: '2px 8px', display: 'flex', gap: '2px' }}>
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-6 h-5 text-[#D9D9D9]" fill="currentColor" strokeWidth={1.5} />
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}