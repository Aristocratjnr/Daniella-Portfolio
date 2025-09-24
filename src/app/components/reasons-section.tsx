import { motion } from 'framer-motion';
import Image from 'next/image';

export function ReasonsSection() {
  // Animation configuration with proper TypeScript types
  const getCardAnimation = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: delay * 0.2,
        duration: 0.6,
        ease: 'easeOut' as const
      }
    },
    whileHover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const
      }
    }
  });

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#6E4D42] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            3 Reasons to Choose Me
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-[#C1B1AB] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Problem Solver Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto overflow-hidden group"
          {...getCardAnimation(0)}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#F2EEED] to-[#e8e2e0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          />
          
          {/* Decorative elements with animation */}
          <motion.div 
            className="absolute top-0 right-0"
            initial={{ x: 20, y: -20, rotate: 10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0"
            initial={{ x: -20, y: 20, rotate: -10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col h-full relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6">
              <motion.div 
                className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:bg-white/90 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Image 
                  src="/images/Group-1.png" 
                  alt="Problem Solver" 
                  width={32} 
                  height={32}
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-light text-black uppercase tracking-wider mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Problem Solver
              </motion.h3>
            </div>
            
            <motion.p 
              className="text-sm text-black leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I don&apos;t just create designs, I create elegant solutions to complex user challenges. My approach focuses on understanding the root cause of usability issues and crafting designs that serve a purpose.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Build for People Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto overflow-hidden group"
          {...getCardAnimation(1)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#F2EEED] to-[#e8e2e0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          />
          
          <motion.div 
            className="absolute top-0 right-0"
            initial={{ x: 20, y: -20, rotate: 10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0"
            initial={{ x: -20, y: 20, rotate: -10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col h-full relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-6">
              <motion.div 
                className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:bg-white/90 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Image 
                  src="/images/Group-2.png" 
                  alt="Build for People" 
                  width={32} 
                  height={32}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-light text-black uppercase tracking-wider mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                I Build for People, Not Pixels
              </motion.h3>
            </div>
            
            <motion.p 
              className="text-sm text-black leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              My primary focus is on the human behind the screen. I prioritize user research, usability testing, and creating experiences that genuinely improve a user&apos;s life.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Deliver Results Card */}
        <motion.div 
          className="bg-[#F2EEED] rounded-2xl p-6 relative border border-gray-100 h-full flex flex-col min-h-[400px] max-w-[280px] mx-auto overflow-hidden group"
          {...getCardAnimation(2)}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#F2EEED] to-[#e8e2e0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          />
          
          <motion.div 
            className="absolute top-0 right-0"
            initial={{ x: 20, y: -20, rotate: 10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <Image 
              src="/images/Line 29.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0"
            initial={{ x: -20, y: 20, rotate: -10 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <Image 
              src="/images/Line 30.png" 
              alt="" 
              width={80} 
              height={60}
              className="w-20 h-15"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col h-full relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-6">
              <motion.div 
                className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:bg-white/90 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Image 
                  src="/images/Group-3.png" 
                  alt="Deliver Results" 
                  width={32} 
                  height={32}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.h3 
                className="text-lg font-light text-black uppercase tracking-wider mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                I Deliver Results Through Collaboration
              </motion.h3>
            </div>
            
            <motion.p 
              className="text-sm text-black leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I thrive on working with developers, product managers, and stakeholders to transform ideas into a polished final product. I believe in effective collaboration and alignment with business goals.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
