"use client";

import Image from "next/image";

const projects = [
    {
      id: 1,
      title: "LIFELINE",
      description: "A line call girls both with and mobile App interface",
      icon: "/images/aid.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 2,
      title: "SPARTANS",
      description: "An interactive dashboard car wash app that has the best UI for business",
      icon: "/images/car.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 3,
      title: "TULAUNDRY",
      description: "An interactive collection laundry service app that has the best UI both mobile and web",
      icon: "/images/machine.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 4,
      title: "KITCHEN & CLOSETS",
      description: "An interactive dashboard kitchen features with app interface for both admin and customer",
      icon: "/images/lamp.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 5,
      title: "BANK WEB APP",
      description: "An interactive Bank web app interface for both admin and customer with the best UI",
      icon: "/images/bank.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 6,
      title: "REAL ESTATE",
      description: "An interactive real estate landing page with the best UI for both admin and customer",
      icon: "/images/real-estate.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 7,
      title: "BEAUTICIAN",
      description: "An interactive Beautician web app interface for both admin and customer",
      icon: "/images/costmetic.png",
      borderColor: "border-l-[#563C33]",
    },
    {
      id: 8,
      title: "PORTFOLIO",
      description: "An interactive Portfolio website interface for both admin and customer with the best UI",
      icon: "/images/portfolio.png",
      borderColor: "border-l-[#563C33]",
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
  
                <p className="text-black text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  