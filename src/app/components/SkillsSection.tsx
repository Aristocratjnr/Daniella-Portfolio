import { ArrowRight } from "lucide-react"
import Image from "next/image"

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "LIFELINE",
      description: "A first aid guide built with web mobile app interface",
      icon: "/images/aid.png",
      color: "#C1B1AB",
    },
    {
      title: "SPARTANS",
      description: "An interactive automated interface for both admin and customers",
      icon: "/images/car.png",
      color: "#C1B1AB",
    },
    {
      title: "TULAUNDRY",
      description: "An interactive collective laundry services web interface for both admin and customers",
      icon: "/images/lamp.png",
      color: "#C1B1AB",
    },
    {
      title: "KITCHEN & CLOSETS",
      description: "An interactive kitchen & closet furniture web app interface for both admin and customers",
      icon: "/images/machine.png",
      color: "#C1B1AB",
    },
  ]

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#F5F1ED" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1 relative flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
            <div className="hidden lg:block text-5xl xl:text-6xl font-bold text-gray-800 transform -rotate-90 absolute -left-16 top-1/2 -translate-y-1/2 origin-center mr-2 whitespace-nowrap">
              MY PROJECTS
            </div>
            <div className="lg:hidden text-4xl font-bold text-gray-800 mb-6 text-center w-full">
              MY PROJECTS
            </div>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:ml-16 xl:ml-24">
              <Image
                src="/images/woman.png"
                alt="Woman working"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Project cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-black hover:shadow-lg transition-all duration-300 h-full"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <Image 
                        src={project.icon} 
                        alt={project.title}
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="text-black font-bold text-base sm:text-lg mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-black text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>

            {/* See More button */}
            <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
              <button className="bg-white/90 backdrop-blur-sm rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-black flex items-center gap-2 hover:bg-white transition-all duration-300 group">
                <span className="text-gray-800 font-medium text-sm sm:text-base">See More?</span>
                <Image 
                  src="/images/hand.png" 
                  alt="Hand pointing right" 
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
