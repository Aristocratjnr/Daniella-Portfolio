const photoCards = [
    {
      src: "/images/mock-1.png",
      className:
        "absolute w-[180px] h-[225px] top-[280px] left-[-50px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[-35deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[100px] h-[265px] top-[50px] left-[70px] rotate-[35deg] object-cover",
      alt: "Mock 1 - Research Interface",
    },
    {
      src: "/images/mock-2.png",
      className:
        "absolute w-[170px] h-[280px] top-[-20px] left-[120px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[-25deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[250px] h-[360px] top-[-40px] left-[-40px] rotate-[25deg] object-cover",
      alt: "Mock 2 - Payment Interface",
    },
    {
      src: "/images/mock-3.png",
      className:
        "absolute w-[165px] h-[290px] top-[-30px] left-[380px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[15deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[220px] h-[340px] top-[-25px] left-[-30px] rotate-[-15deg] object-cover",
      alt: "Mock 3 - UX Design Interface",
    },
    {
      src: "/images/mock-4.png",
      className:
        "absolute w-[175px] h-[220px] top-[300px] left-[450px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[40deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[115px] h-[190px] top-[80px] left-[2px] rotate-[-40deg] object-cover",
      alt: "Mock 4 - Development Interface",
    },
    {
      src: "/images/mock-5.png",
      className:
        "absolute w-[185px] h-[290px] top-[10px] left-[580px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[25deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[270px] h-[380px] top-[-45px] left-[-45px] rotate-[-25deg] object-cover",
      alt: "Mock 5 - Workspace Overview",
    },
    {
      src: "/images/mock-6.png",
      className:
        "absolute w-[160px] h-[285px] top-[280px] left-[650px] rounded-[25px] overflow-hidden border-[0.3px] border-solid border-black rotate-[-30deg] shadow-[0px_6px_12px_#00000030]",
      imgClassName: "absolute w-[195px] h-[320px] top-[-18px] left-[-20px] rotate-[30deg] object-cover",
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
  
          <div className="relative mb-12 h-[600px] flex items-center justify-center">
            {/* Phone Mockups with precise positioning */}
            <div className="relative w-[800px] h-[500px]">
              {photoCards.map((card, index) => (
                <div key={index} className={card.className}>
                  <img className={card.imgClassName} alt={card.alt} src={card.src || "/placeholder.svg"} />
                </div>
              ))}
  
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="600" height="500" className="absolute">
                  <defs>
                    <path id="circle" d="M 300, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" />
                  </defs>
                </svg>
              </div>
            </div>
          </div>
  
          <div className="mb-8 text-center relative pt-32 pb-20 px-4">
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
  