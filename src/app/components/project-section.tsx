import Image from 'next/image';

export default function ProjectsSection() {
    const categories = ["Web Design", "Mobile App Design", "Wireframe", "Prototype", "Dashboard"]
  
    return (
      <section
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/service-bg.png')",
        }}
      >
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center pt-20 pb-20 px-6">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center tracking-tight">PROJECTS</h1>
  
          {/* Description paragraph */}
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6">
              It&apos;s not just a gallery of final products; it&apos;s a showcase of my thought process, your problem-solving
              abilities, and the impact of your work. As a UI/UX designer, I need to turn each project into a compelling
              story for an aesthetic and interactive User Experience
            </p>
          </div>
  
          {/* Category navigation */}
          <div className="w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-[#A58D84] px-6 sm:px-8 md:px-12 py-5 md:py-6 rounded-xl shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 md:gap-x-10 text-white">
              {categories.map((category, index) => (
                <div key={category} className="flex items-center group">
                  <span className="text-sm sm:text-base md:text-lg font-light hover:text-gray-100 transition-all duration-200 cursor-pointer whitespace-nowrap">
                    {category}
                  </span>
                  {index < categories.length - 0 && (
                    <div className="ml-1 md:ml-2 relative w-4 h-4 transform group-hover:scale-110 transition-transform">
                      <Image 
                        src="/images/reward-star.png" 
                        alt="star" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  