import { ArrowRight, Plus, Car, Shirt, ChefHat } from "lucide-react"
import Image from "next/image"

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "LIFELINE",
      description: "A first aid guide built with web mobile app interface",
      icon: Plus,
      color: "#E53E3E",
    },
    {
      title: "SPARTANS",
      description: "An interactive automated interface for both admin and customers",
      icon: Car,
      color: "#2D3748",
    },
    {
      title: "TULAUNDRY",
      description: "An interactive collective laundry services web interface for both admin and customers",
      icon: Shirt,
      color: "#2B6CB0",
    },
    {
      title: "KITCHEN & CLOSETS",
      description: "An interactive kitchen & closet furniture web app interface for both admin and customers",
      icon: ChefHat,
      color: "#38A169",
    },
  ]

  return (
    <div className="min-h-screen px-4 py-12" style={{ backgroundColor: "#F5F1ED" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="text-6xl font-bold text-gray-800 transform -rotate-90 absolute -left-16 top-1/2 -translate-y-1/2 origin-center mr-2">
              MY PROJECTS
            </div>
            <div className="relative w-full max-w-md ml-24">
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
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-black hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: "#A58D84" }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-3">{project.title}</h3>

                    <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                  </div>
                )
              })}
            </div>

            {/* See More button */}
            <div className="flex justify-end mt-8">
              <button className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-black flex items-center gap-2 hover:bg-white transition-all duration-300 group">
                <span className="text-gray-800 font-medium">See More?</span>
                <ArrowRight className="w-4 h-4 text-gray-800 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
