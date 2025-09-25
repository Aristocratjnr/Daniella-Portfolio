"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

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
          label: "View Prototype",
          url: "https://www.figma.com/design/OYIx8LWmLcdBCAyhGHUBLb/H.C.I_DCIT302__G52?node-id=15-4"
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
          label: "View Prototype",
          url: "https://www.figma.com/design/OYIx8LWmLcdBCAyhGHUBLb/H.C.I_DCIT302__G52?node-id=226-66"
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
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-black dark:text-gray-100 mb-4">My Specialization</h2>
            <p className="text-xl text-[#33241E] dark:text-[#C1B1AB]">Projects I Designed Including Collaborations</p>
          </motion.div>
  
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`bg-[#F2EEED] dark:bg-gray-800 rounded-xl p-6 relative before:absolute before:-left-0.5 before:top-0 before:w-2 before:h-16 before:bg-[#563C33] dark:before:bg-[#876D60] before:rounded-l-full overflow-hidden group`}
                variants={item}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 15px 40px rgba(86, 60, 51, 0.1)',
                  transition: { 
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#563C33]/5 dark:from-[#876D60]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.icon || "/placeholder.svg"}
                    alt={`${project.title} icon`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </motion.div>
  
                <h3 className="text-lg font-medium text-black dark:text-gray-100 mb-3 tracking-wide">{project.title}</h3>
  
                <p className="text-black dark:text-gray-300 text-sm leading-relaxed mb-3">{project.description}</p>
                
                {project.links && project.links.length > 0 && (
                  <div className="mt-auto space-y-2">
                    {project.links.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center text-xs sm:text-sm px-3 py-2 bg-[#563C33]/90 dark:bg-[#876D60]/90 backdrop-blur-sm text-[#F2EEED] hover:bg-[#33241E] dark:hover:bg-[#563C33] border border-white/10 dark:border-gray-700/30 rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-[#563C33]/20 dark:hover:shadow-[#876D60]/30 relative overflow-hidden group"
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <motion.span 
                          className="absolute inset-0 bg-[#33241E] dark:bg-[#563C33] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                          initial={{ scaleX: 0 }}
                        />
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }
  