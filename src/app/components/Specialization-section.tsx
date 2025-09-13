"use client";

import Image from "next/image";

const projects = [
    {
      id: 1,
      title: "LIFELINE",
      description: "A first aid guide with both web and mobile App interface",
      icon: "/images/aid.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "Mobile Version",
          url: "https://www.figma.com/design/EGiI5c7KMuLuXKZxi8c4S4/LIFELINE?node-id=384-71&t=CduuPsOgiC6eC8my-1"
        },
        {
          label: "WebApp Version",
          url: "https://www.figma.com/design/EGiI5c7KMuLuXKZxi8c4S4/LIFELINE?node-id=1-2&t=CduuPsOgiC6eC8my-1"
        }
      ]
    },
    {
      id: 2,
      title: "SPARTANS",
      description: "An interactive dashboard car wash app that has the best UI for business",
      icon: "/images/car.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "View Prototype",
          url: "https://www.figma.com/proto/UjcYdOgAU9Eayvlo5Z4YTB/Spartans?page-id=119%3A1941&node-id=119-2430&viewport=2%2C144%2C0.17&t=gJglwKfjvaZJ3WGy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=306%3A1543"
        }
      ]
    },
    {
      id: 3,
      title: "TULAUNDRY",
      description: "Interactive laundry service platform with a clean, user-friendly interface",
      icon: "/images/machine.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "View Live Website",
          url: "https://tulundry.onrender.com/"
        }
      ]
    },
    {
      id: 5,
      title: "GCB BANK",
      description: "Modern banking interface with seamless user experience and clean design",
      icon: "/images/bank.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "View Live Website",
          url: "https://the-devgenius.github.io/GCB-Kaneshie-Website/"
        }
      ]
    },
    {
      id: 4,
      title: "KITCHEN & CLOSETS",
      description: "An interactive dashboard kitchen features with app interface for both admin and customer",
      icon: "/images/lamp.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "Coming Soon",
          url: "#"
        }
      ]
    },
    {
      id: 7,
      title: "BEAUTICIAN",
      description: "An interactive Beautician web app interface for both admin and customer",
      icon: "/images/costmetic.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "Coming Soon",
          url: "#"
        }
      ]
    },
    {
      id: 6,
      title: "REAL ESTATE",
      description: "An interactive real estate landing page with the best UI for both admin and customer",
      icon: "/images/real-estate.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "Coming Soon",
          url: "#"
        }
      ]
    },
    {
      id: 8,
      title: "PORTFOLIO",
      description: "Interactive portfolio website showcasing design projects and skills",
      icon: "/images/portfolio.png",
      borderColor: "border-l-[#563C33]",
      links: [
        {
          label: "View Prototype",
          url: "https://www.figma.com/proto/r07WNEMu1XWRUy2vzJ72zX/Portfolio?page-id=4%3A351&node-id=227-858&p=f&viewport=-1498%2C-1992%2C0.67&t=VXumcjDCIYjOqCke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=227%3A858"
        }
      ]
    },
  ]
  
  export default function SpecializationSection() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">My Specialization</h2>
            <p className="text-xl text-[#33241E]">Projects I Designed Including Collaborations</p>
          </div>
  
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-[#F2EEED] rounded-xl p-6 transition-all duration-300 relative before:absolute before:-left-0.5 before:top-0 before:w-2 before:h-16 before:bg-[#563C33] before:rounded-l-full`}
              >
                
                <div className="mb-4">
                  <Image
                    src={project.icon || "/placeholder.svg"}
                    alt={`${project.title} icon`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
  
                <h3 className="text-lg  font-medium text-black mb-3 tracking-wide">{project.title}</h3>
  
                <p className="text-black text-sm leading-relaxed mb-3">{project.description}</p>
                {project.links && project.links.length > 0 && (
                  <div className="mt-auto space-y-2">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center text-xs sm:text-sm px-3 py-2 bg-[#563C33]/90 backdrop-blur-sm text-[#F2EEED] hover:bg-[#33241E]/90 border border-white/10 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:shadow-[#563C33]/20"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  