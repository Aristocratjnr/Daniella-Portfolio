import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


export default function Home() {
  return (
    <div className="min-h-screen">


      <div className="flex items-center justify-center p-4" style={{ backgroundColor: "#A58D84" }}>
        <div className="relative max-w-4xl w-full">
          {/* Main Card Container */}
          <div
            className="rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundColor: "#A58D84",
              boxShadow: `
                0 35px 60px -15px rgba(0, 0, 0, 0.4),
                0 20px 35px -10px rgba(0, 0, 0, 0.25),
                0 8px 20px -5px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            {/* Organic Background Shapes */}
            <div
              className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-48 -translate-y-48 blur-3xl"
              style={{ backgroundColor: "rgba(165, 141, 132, 0.3)" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full translate-x-40 translate-y-40 blur-2xl"
              style={{ backgroundColor: "rgba(165, 141, 132, 0.2)" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-xl"
              style={{ backgroundColor: "rgba(165, 141, 132, 0.15)" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full blur-2xl"
              style={{ backgroundColor: "rgba(180, 155, 145, 0.2)" }}
            ></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Greeting */}
                <p className="text-stone-200/70 text-lg font-medium">Hi, I am Daniella Asiedu</p>

                {/* Main Title */}
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  UI/UX DESIGNER
                </h1>

                {/* Description */}
                <p className="text-stone-200/60 text-base leading-relaxed max-w-md">
                  I'm a UI/UX Designer who solves complex problems to create products people love to use.
                </p>

                <p className="text-stone-200/60 text-base leading-relaxed max-w-md">
                  I blend a passion for human-centered design with strategic thinking to craft intuitive and effective
                  digital experiences. Specializing in UI/UX, brand identity, and user research.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-lg">
                    <p className="text-white text-sm font-semibold mb-1">EXPERIENCE</p>
                    <p className="text-white text-lg font-bold">3+ years</p>
                  </div>

                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-lg">
                    <p className="text-white text-sm font-semibold mb-1">PROJECTS</p>
                    <p className="text-white text-lg font-bold">10+ Designs</p>
                  </div>

                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-lg">
                    <p className="text-white text-sm font-semibold mb-1">CLIENTS</p>
                    <p className="text-white text-lg font-bold">6+ Satisfied</p>
                  </div>

                  <div className="flex items-center">
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-stone-800 hover:bg-white rounded-full px-6 py-2 font-medium shadow-lg border border-white/30 backdrop-blur-sm"
                    >
                      About Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  {/* Large organic shape behind profile */}
                  <div
                    className="absolute -top-12 -left-12 w-96 h-96 rounded-full opacity-60"
                    style={{
                      backgroundColor: "rgba(140, 115, 105, 0.8)",
                      transform: "rotate(-15deg) scale(0.9)",
                    }}
                  ></div>

                  {/* Medium organic shape */}
                  <div
                    className="absolute -top-8 -right-8 w-72 h-72 rounded-full opacity-50"
                    style={{
                      backgroundColor: "rgba(155, 130, 120, 0.7)",
                      transform: "rotate(25deg) scale(0.8)",
                    }}
                  ></div>

                  {/* Small accent shape */}
                  <div
                    className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full opacity-40"
                    style={{
                      backgroundColor: "rgba(125, 100, 90, 0.6)",
                      transform: "rotate(45deg) scale(0.7)",
                    }}
                  ></div>

                  {/* Profile Image Container */}
                  <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                    <img
                      src="/images/daniella-profile.png"
                      alt="Daniella Asiedu - UI/UX Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full"
            style={{
              backgroundColor: "rgba(165, 141, 132, 0.8)",
              boxShadow: `
                0 25px 45px -8px rgba(0, 0, 0, 0.35),
                0 15px 25px -5px rgba(0, 0, 0, 0.2),
                0 6px 12px -2px rgba(0, 0, 0, 0.1)
              `,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
