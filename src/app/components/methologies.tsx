"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Method = {
  id: string;
  title: string;
  description: string;
  icon: string;
  position?: 'top' | 'bottom';
};

const methods: Method[] = [
  {
    id: '01',
    title: 'Research',
    description:
      "This phase focuses on understanding the target audience, their needs, and the problems they face. It involves conducting user analysis, and market research.",
    icon: '/images/research.png',
    position: 'top',
  },
  {
    id: '02',
    title: 'Define',
    description:
      'Based on the research, the problem is clearly defined, and user needs are articulated. This stage often involves creating user personas and journey maps.',
    icon: '/images/define.png',
    position: 'top',
  },
  {
    id: '03',
    title: 'Ideate',
    description:
      'This stage involves brainstorming potential solutions to the identified problems. It may include sketching, wireframing, and exploring different design concepts.',
    icon: '/images/idea.png',
    position: 'top',
  },
  {
    id: '04',
    title: 'Prototype',
    description:
      'Prototypes, ranging from low-fidelity paper mockups to high-fidelity interactive prototypes, are created to test and refine the design.',
    icon: '/images/Vector.png',
    position: 'bottom',
  },
  {
    id: '05',
    title: 'Testing',
    description:
      'Prototypes are tested with real users to gather feedback and identify areas for improvement. This iterative process helps refine the design based on user input.',
    icon: '/images/testing.png',
    position: 'bottom',
  },
  {
    id: '06',
    title: 'Iterate',
    description:
      'Based on the testing results, the design is iterated upon, and the process repeats until a satisfactory user experience is achieved.',
    icon: '/images/rotate.png',
    position: 'bottom',
  },
];

const TopCard: React.FC<{ item: Method; index: number }> = ({ item, index }) => (
  <motion.div 
    className="flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.3 }
    }}
  >
    <div className="bg-[#f5f5f5] p-4 pt-3 pb-20 flex-grow relative rounded-md transition-all duration-300 hover:shadow-lg">
      <motion.div 
        className="flex justify-between items-start mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + (index * 0.1) }}
      >
        <motion.div 
          className="bg-[#C1B1AB] rounded-[20px] w-[90px] h-[90px] flex items-center justify-center shadow-sm"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-5xl font-black text-black">{item.id}</span>
        </motion.div>
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Image src={item.icon} alt={`${item.title} icon`} width={32} height={32} className="object-contain w-8 h-8" />
          <span className="font-medium text-xs text-black mt-1">{item.title}</span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="h-[70px] overflow-y-auto pr-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + (index * 0.1) }}
      >
        <p className="text-sm text-gray-800 leading-tight">{item.description}</p>
      </motion.div>
    </div>
  </motion.div>
);

const BottomCard: React.FC<{ item: Method; index: number }> = ({ item, index }) => (
  <motion.div 
    className="flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.3 }
    }}
  >
    <div className="bg-[#f5f5f5] p-4 pt-3 pb-20 flex-grow relative rounded-md transition-all duration-300 hover:shadow-lg">
      <motion.div 
        className="h-[100px] overflow-y-auto pr-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + (index * 0.1) }}
      >
        <p className="text-sm text-gray-800 leading-tight">{item.description}</p>
      </motion.div>

      <motion.div 
        className="absolute bottom-3 left-4 flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <Image src={item.icon} alt={`${item.title} icon`} width={32} height={32} className="object-contain w-8 h-8 mb-1" />
        <span className="font-medium text-xs text-black">{item.title}</span>
      </motion.div>

      <motion.div 
        className="absolute bottom-3 right-4 bg-[#C1B1AB] rounded-[20px] w-[90px] h-[90px] flex items-center justify-center shadow-sm"
        whileHover={{ scale: 1.05, rotate: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <span className="text-5xl font-black text-black">{item.id}</span>
      </motion.div>
    </div>
  </motion.div>
);

const Methodologies: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Design Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A structured approach to creating exceptional user experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {methods.map((item, index) => (
            <div key={item.id} className="h-full">
              {item.position === 'top' ? 
                <TopCard item={item} index={index} /> : 
                <BottomCard item={item} index={index} />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodologies;