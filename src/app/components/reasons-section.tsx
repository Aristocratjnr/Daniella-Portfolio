import { motion } from 'framer-motion';
import Image from 'next/image';

export function ReasonsSection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#A58D84] mb-4">
          3 Reasons to Choose Me
        </h2>
        <div className="w-16 h-1 bg-gray-200 mx-auto"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Problem Solver Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Top-right decorative line */}
          <div className="absolute top-0 right-0">
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          {/* Bottom-left decorative line */}
          <div className="absolute bottom-0 left-0">
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                <Image 
                  src="/images/Group-1.png" 
                  alt="Problem Solver" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Problem Solver
              </h3>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              I don&apos;t just create designs, I create elegant solutions to complex user challenges. My approach focuses on understanding the root cause of usability issues and crafting designs that serve a purpose.
            </p>
          </div>
        </motion.div>
        
        {/* Build for People Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Top-right decorative line */}
          <div className="absolute top-0 right-0">
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          {/* Bottom-left decorative line */}
          <div className="absolute bottom-0 left-0">
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                <Image 
                  src="/images/Group-2.png" 
                  alt="Build for People" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                I Build for People, Not Pixels
              </h3>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              My primary focus is on the human behind the screen. I prioritize user research, usability testing, and creating experiences that genuinely improve a user&apos;s life.
            </p>
          </div>
        </motion.div>
        
        {/* Deliver Results Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Top-right decorative line */}
          <div className="absolute top-0 right-0">
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          {/* Bottom-left decorative line */}
          <div className="absolute bottom-0 left-0">
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </div>
          
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                <Image 
                  src="/images/Group-3.png" 
                  alt="Deliver Results" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                I Deliver Results Through Collaboration
              </h3>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              I thrive on working with developers, product managers, and stakeholders to transform ideas into a polished final product. I believe in effective collaboration and alignment with business goals.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
