import ProjectsSection from "../components/project-section"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import SpecializationSection from "../components/Specialization-section"
import MethodologiesSection from "../components/methologies"

export default function ServicesPage() {
  return (
    <main 
      className="min-h-screen flex flex-col"
      style={{ cursor: 'url("/images/selection-pointer.png") 0 0, auto' }}
    >
      <Navbar />
      <ProjectsSection />
      <SpecializationSection />
      <MethodologiesSection />
      <Footer />
    </main>
  )
}