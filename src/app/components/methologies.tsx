"use client";

import React from 'react';
import Image from 'next/image';

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

const TopCard: React.FC<{ item: Method }> = ({ item }) => (
  <div className="flex flex-col h-full">
    <div className="bg-[#f5f5f5] p-4 pt-3 pb-20 flex-grow relative rounded-md">
      <div className="flex justify-between items-start mb-3">
        <div className="bg-[#C1B1AB] rounded-[20px] w-[90px] h-[90px] flex items-center justify-center shadow-sm">
          <span className="text-5xl font-black text-black">{item.id}</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={item.icon} alt={`${item.title} icon`} width={32} height={32} className="object-contain w-8 h-8" />
          <span className="font-medium text-xs text-black mt-1">{item.title}</span>
        </div>
      </div>
      
      <div className="h-[70px] overflow-y-auto pr-1">
        <p className="text-xs text-gray-800 leading-tight">{item.description}</p>
      </div>
    </div>
  </div>
);

const BottomCard: React.FC<{ item: Method }> = ({ item }) => (
  <div className="flex flex-col h-full">
    <div className="bg-[#f5f5f5] p-4 pt-3 pb-20 flex-grow relative rounded-md">
      <div className="h-[100px] overflow-y-auto pr-1">
        <p className="text-xs text-gray-800 leading-tight">{item.description}</p>
      </div>

      <div className="absolute bottom-3 left-4 flex flex-col items-center">
        <Image src={item.icon} alt={`${item.title} icon`} width={32} height={32} className="object-contain w-8 h-8 mb-1" />
        <span className="font-medium text-xs text-black">{item.title}</span>
      </div>

      <div className="absolute bottom-3 right-4 bg-[#C1B1AB] rounded-[20px] w-[90px] h-[90px] flex items-center justify-center shadow-sm">
        <span className="text-5xl font-black text-black">{item.id}</span>
      </div>
    </div>
  </div>
);

const Methodologies: React.FC = () => {
  const topItems = methods.filter((m) => m.position === 'top');
  const bottomItems = methods.filter((m) => m.position === 'bottom');

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-[#33241E]">
            Core Methodologies I Follow in Designing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {topItems.map((item) => (
            <TopCard key={item.id} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomItems.map((item) => (
            <BottomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodologies;