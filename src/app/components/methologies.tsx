"use client";

import React from 'react';
import Image from 'next/image';

const Methodologies = () => {
  // No data arrays needed as we're using a direct approach

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Core Methodologies I Follow in Designing
          </h2>
        </div>

        {/* Top Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Item 1 */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              {/* Number box and Title on Left */}
              <div className="flex items-center gap-4">
                <div className="bg-[#C1B1AB] rounded-[20px] w-[120px] h-[112px] flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">01</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/images/research.png" alt="Research icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                  <h3 className="font-medium text-black">Research</h3>
                </div>
              </div>
            </div>
            {/* Description Box */}
            <div className="mt-3 bg-[#f5f5f5] p-4">
              <p className="text-xs text-gray-800 leading-tight">
                This phase focuses on understanding the target audience, their needs, and the problems they face. It involves conducting user analysis, and market research.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              {/* Number box and Title on Left */}
              <div className="flex items-center gap-4">
                <div className="bg-[#C1B1AB] rounded-[20px] w-[120px] h-[112px] flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">02</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/images/define.png" alt="Define icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                  <h3 className="font-medium text-black">Define</h3>
                </div>
              </div>
            </div>
            {/* Description Box */}
            <div className="mt-3 bg-[#f5f5f5] p-4">
              <p className="text-xs text-gray-800 leading-tight">
                Based on the research, the problem is clearly defined, and user needs are articulated. This stage often involves creating user personas and journey maps.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              {/* Number box and Title on Left */}
              <div className="flex items-center gap-4">
                <div className="bg-[#C1B1AB] rounded-[20px] w-[120px] h-[112px] flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">03</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/images/idea.png" alt="Ideate icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                  <h3 className="font-medium text-black">Ideate</h3>
                </div>
              </div>
            </div>
            {/* Description Box */}
            <div className="mt-3 bg-[#f5f5f5] p-4">
              <p className="text-xs text-gray-800 leading-tight">
                This stage involves brainstorming potential solutions to the identified problems. It may include sketching, wireframing, and exploring different design concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Item 4 - Prototype */}
          <div className="flex flex-col h-full">
            {/* Description Box with Number at Bottom Right */}
            <div className="bg-[#f5f5f5] p-4 pt-5 pb-36 flex-grow relative">
              <p className="text-xs text-gray-800 leading-tight">
                Prototypes, ranging from low-fidelity paper mockups to high-fidelity interactive prototypes, are created to test and refine the design.
              </p>
              <div className="absolute bottom-4 left-4 flex flex-col items-center">
                <Image src="/images/Vector.png" alt="Prototype icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                <span className="font-medium text-xs text-black">Prototype</span>
              </div>
              {/* Number box positioned at bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#C1B1AB] rounded-[20px]  w-[120px] h-[112px]  flex items-center justify-center">
                <span className="text-4xl font-bold text-black">04</span>
              </div>
            </div>
          </div>

          {/* Item 5 - Testing */}
          <div className="flex flex-col h-full">
            {/* Description Box with Number at Bottom Right */}
            <div className="bg-[#f5f5f5] p-4 pt-5 pb-36 flex-grow relative">
              <p className="text-xs text-gray-800 leading-tight">
                Prototypes are tested with real users to gather feedback and identify areas for improvement. This iterative process helps refine the design based on user input.
              </p>
              <div className="absolute bottom-4 left-4 flex flex-col items-center">
                <Image src="/images/testing.png" alt="Testing icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                <span className="font-medium text-xs text-black">Testing</span>
              </div>
              {/* Number box positioned at bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#C1B1AB] rounded-[20px]  w-[120px] h-[112px]  flex items-center justify-center">
                <span className="text-4xl font-bold text-black">05</span>
              </div>
            </div>
          </div>

          {/* Item 6 - Iterate */}
          <div className="flex flex-col h-full">
            {/* Description Box with Number at Bottom Right */}
            <div className="bg-[#f5f5f5] p-4 pt-5 pb-36 flex-grow relative">
              <p className="text-xs text-gray-800 leading-tight">
                Based on the testing results, the design is iterated upon, and the process repeats until a satisfactory user experience is achieved.
              </p>
              <div className="absolute bottom-4 left-4 flex flex-col items-center">
                <Image src="/images/rotate.png" alt="Iterate icon" width={40} height={40} className="object-contain w-10 h-10 mb-1" />
                <span className="font-medium text-xs text-black">Iterate</span>
              </div>
              {/* Number box positioned at bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#C1B1AB] rounded-[20px]  w-[120px] h-[112px]  flex items-center justify-center">
                <span className="text-4xl font-bold text-black">06</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodologies;