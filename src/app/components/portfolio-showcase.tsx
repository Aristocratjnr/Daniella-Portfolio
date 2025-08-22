const photoCards = [
    {
      src: "/images/mock.png",
      className:
        "absolute w-[150px] h-[270px] top-[220px] left-[-40px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-45deg] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-300 hover:scale-105 hover:rotate-[-42deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock - New Interface",
    },
    {
      src: "/images/mock-1.png",
      className:
        "absolute w-[160px] h-[280px] top-[120px] left-[120px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-25deg] shadow-[0px_10px_26px_rgba(0,0,0,0.18)] z-20 transition-transform duration-300 hover:scale-105 hover:rotate-[-22deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 1 - Research Interface",
    },
    {
      src: "/images/mock-2.png",
      className:
        "absolute w-[165px] h-[290px] top-[60px] left-[300px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[-8deg] shadow-[0px_12px_28px_rgba(0,0,0,0.2)] z-30 transition-transform duration-300 hover:scale-105 hover:rotate-[-5deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 2 - Payment Interface",
    },
    {
      src: "/images/mock-3.png",
      className:
        "absolute w-[170px] h-[300px] top-[40px] left-[500px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[8deg] shadow-[0px_14px_30px_rgba(0,0,0,0.22)] z-35 transition-transform duration-300 hover:scale-105 hover:rotate-[11deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 3 - UX Design Interface",
    },
    {
      src: "/images/mock-4.png",
      className:
        "absolute w-[165px] h-[290px] top-[60px] left-[700px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[25deg] shadow-[0px_12px_28px_rgba(0,0,0,0.2)] z-30 transition-transform duration-300 hover:scale-105 hover:rotate-[28deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 4 - Development Interface",
    },
    {
      src: "/images/mock-5.png",
      className:
        "absolute w-[160px] h-[280px] top-[120px] left-[880px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[40deg] shadow-[0px_10px_26px_rgba(0,0,0,0.18)] z-20 transition-transform duration-300 hover:scale-105 hover:rotate-[43deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 5 - Workspace Overview",
    },
    {
      src: "/images/mock-6.png",
      className:
        "absolute w-[150px] h-[270px] top-[220px] left-[1040px] rounded-[25px] overflow-hidden border-[0.5px] border-solid border-gray-300 rotate-[55deg] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-300 hover:scale-105 hover:rotate-[58deg]",
      imgClassName: "absolute w-full h-full object-cover",
      alt: "Mock 6 - Creative Interface",
    },
  ]
  
  export default function PortfolioShowcase() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Rating Section */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9814 14.1777L22.3027 15.0781L23.2539 15.166L32.7656 16.0518L25.3594 23.4268L24.7852 23.998L24.9482 24.791L27.1387 35.4678L19.3682 29.9521L18.5 29.3359L17.6318 29.9521L9.86035 35.4678L12.0518 24.791L12.2148 23.998L11.6406 23.4268L4.2334 16.0518L13.7461 15.166L14.6973 15.0781L15.0186 14.1777L18.5 4.4502L21.9814 14.1777Z" fill="#6E4D42" stroke="#F1C644" strokeWidth="3"/>
                </svg>
              ))}
              <svg className="flex-shrink-0" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="60%" stopColor="#6E4D42" />
                    <stop offset="60%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  d="M21.9814 14.1777L22.3027 15.0781L23.2539 15.166L32.7656 16.0518L25.3594 23.4268L24.7852 23.998L24.9482 24.791L27.1387 35.4678L19.3682 29.9521L18.5 29.3359L17.6318 29.9521L9.86035 35.4678L12.0518 24.791L12.2148 23.998L11.6406 23.4268L4.2334 16.0518L13.7461 15.166L14.6973 15.0781L15.0186 14.1777L18.5 4.4502L21.9814 14.1777Z" 
                  fill="url(#half-star)" 
                  stroke="#F1C644" 
                  strokeWidth="3"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-md">
              <span className="font-semibold">4.6 ratings</span>
            </p>
            <p className="text-gray-500 text-sm">Trusted by 6+ Clients</p>
          </div>
  
          <div className="relative mb-0 h-[530px] flex items-center justify-center overflow-hidden">
            {/* Phone Mockups arranged in concave arc */}
            <div className="relative w-[1200px] h-[600px]">
              {photoCards.map((card, index) => (
                <div key={index} className={card.className}>
                  <img className={card.imgClassName} alt={card.alt} src={card.src || "/placeholder.svg"} />
                </div>
              ))}
  
              {/* Subtle arc guide line for visual reference (optional) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg width="1000" height="500" className="absolute opacity-5">
                  <path 
                    d="M 20,350 Q 500,80 980,350" 
                    stroke="#e5e7eb" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
      {/* Button Section */}
          <div className="mb-4 text-center relative pt-32 pb-20 px-4">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <svg width="800" height="200" viewBox="0 0 800 200" className="relative">
                <defs>
                  <path id="button-arc" d="M 150,150 C 250,40 550,40 650,150" fill="none" />
                </defs>
                <text className="fill-black text-xl font-extrabold tracking-widest">
                  <textPath href="#button-arc" startOffset="50%" textAnchor="middle" dominantBaseline="middle" letterSpacing="0.8em">
                    READY  TO  STEP  UP  ?
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-gray-800 mb-6 text-md font-thin">Join hundreds of Satisfied Clients and Users</p>
              <button className="bg-[#33241E] hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 mx-auto shadow-lg">
                REQUEST A QUOTE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  