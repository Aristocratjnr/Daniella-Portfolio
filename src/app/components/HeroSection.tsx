import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#A58D84] flex items-center justify-center p-4 pt-24 md:pt-32">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A58D84] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A58D84] rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-[#B5A394] text-lg font-medium mb-2">Hi, I am Daniella Asiedu</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  UI/UX DESIGNER
                </h1>
                <div className="h-1 w-16 bg-[#B5A394] mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a UI/UX Designer who solves complex problems to create products people love to use.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  I blend a passion for human-centered design with strategic thinking to craft intuitive and effective
                  digital experiences. Specializing in UI/UX, brand identity, and user research.
                </p>
              </div>
                {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">EXPERIENCE</p>
                  <p className="text-black text-xl font-bold">3+ years</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">PROJECTS</p>
                  <p className="text-black text-xl font-bold">10+ Designs</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-4 shadow-lg">
                  <p className="text-black text-sm font-medium mb-1">CLIENTS</p>
                  <p className="text-black text-xl font-bold">20+</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="default"
                  className="backdrop-blur-md bg-[#F0E6E0]/80 hover:bg-[#F0E6E0] text-gray-800 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 group border border-white/20 shadow-lg"
                >
                  About Me
                  <img 
                    src="/images/hand.png" 
                    alt="" 
                    className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Large circle */}
                <div className="absolute -top-6 -left-6 w-96 h-96 rounded-full bg-[#A58D84] z-0"></div>
                
                {/* Profile Image Container */}
                <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="/images/daniella.png"
                    alt="Daniella Asiedu - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Small decorative circles */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#E8D8D0] z-0"></div>
                <div className="absolute top-1/2 -left-12 w-16 h-16 rounded-full bg-[#E8D8D0] z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
