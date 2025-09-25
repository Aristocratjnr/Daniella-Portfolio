import ProjectsSection from "../components/project-section"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import SpecializationSection from "../components/Specialization-section"
import MethodologiesSection from "../components/methologies"
import AnimatedBackground from "../components/AnimatedBackground"

export default function ServicesPage() {
  return (
    <main 
      className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300"
      style={{ cursor: 'url("/images/selection-pointer.png") 0 0, auto' }}
    >
      <AnimatedBackground />
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
        <SpecializationSection />
        <MethodologiesSection />
      </div>
      <Footer />
    </main>
  )
}