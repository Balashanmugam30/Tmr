import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const CarWashPage: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<number>(0);

  useEffect(() => {
    document.title = "Professional Car Wash & Car Cleaning in Tiruppur | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const coverageItems = [
    {
      id: 0,
      title: "01 Paint",
      desc: "Safe removal of bonded contaminants, road grime, and environmental fallout using pH-neutral foam.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNxJTE1CXE417DKrKonNJqzmmHARA4DANFMfUr53O5lHo9RzvePteW8C-bLoZfxHjO5tRTuDiWYcnpwC3NFc3dEP6E12d1VOK0hTlCKLuDYoRQr2NGqHJokFLFEdag7HaEN45bAbfAuLro1s-JsNMq7t32E07SzduGDenqoOJGFWshvdoP7Cc7tWhSgLgPilWQCqtOucEhhDvG-xTEQphbxsX-P_eTkAj9ZPSdyBiSbAYaG0TU2fq0",
    },
    {
      id: 1,
      title: "02 Glass",
      desc: "Streak-free mineral spot removal and interior/exterior clarity treatment for safer night driving.",
      img: "/images/services/diagnostic/diagnostic-clean-finish.jpg",
    },
    {
      id: 2,
      title: "03 Wheels",
      desc: "Deep non-acidic iron decontamination, brake dust dissolution, inner barrel clean, and satin tyre dressing.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEzhdSxgZYWeGrEnxOePccF3pjJTqVcXFiZLw2RFLH3uvuxaAORpXwEXd0EP1eoZBhPEM30mHZ4_gbkKpDniEp3FjkYHlBedKy4A3nQeyLywVXI_fTXc98TS_eZc_XfyiMOIB342cxbKKts6EcJDnlE9aLT3Mm08DqD7uz4PQCSRkfOulcRuZZVBHc5lCusInsXtDVJLLNyn62yelVeieUAgxqOpRDy2P2XWDsie9M8tIOIGackzF6",
    },
    {
      id: 3,
      title: "04 Interior",
      desc: "High-power vacuuming of carpets, leather/upholstery conditioning, air vent dusting, and sanitization.",
      img: "/images/services/diagnostic/diagnostic-interior.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. SERVICE HERO */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 px-5 md:px-16 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-12">
            <span className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FF4B00] block mb-4">
              01 / CAR CARE
            </span>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[80px] text-[#050505] uppercase mb-8 leading-none tracking-tight">
              RESET THE<br />
              SURFACE.
            </h1>
          </div>

          <div className="col-span-1 md:col-span-6 md:col-start-7">
            <p className="font-manrope text-base sm:text-lg text-[#656464] mb-8 leading-relaxed">
              <strong className="font-bold text-[#050505] uppercase">
                PROFESSIONAL CAR WASH &amp; CAR CLEANING IN TIRUPPUR.
              </strong>{" "}
              We deliver a meticulous, multi-stage wash process designed to safely remove contaminants while preserving your vehicle's delicate clear coat. A cleaner, refined vehicle starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#050505] text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <span>WHATSAPP US</span>
                <span className="text-base">↗</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Car%20Wash%20Services`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#050505] text-[#050505] px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-[#050505] hover:text-white transition-colors duration-200"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className="mt-12 sm:mt-16 w-full h-[380px] sm:h-[614px] md:h-[750px] relative overflow-hidden bg-[#050505] border border-[#D8D8D5]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbWfNBbXZiRfj_iyMazjo6pjswUyteC5B9uSch2E1_55FSRvxRZ9Y7L1YuRi8ip-Lf310NUFJZXstmjYy93Vgt3ZGSY2H-qGsuBC892JvVkqTRAiPf--YvG8rT0Z3MaGA57DHjP97nX5eNAAMc_fvHXFar-1ALpz0G-qbWOqMpa3kvhS2IuBw6IUmzZoaXMHNOCSGxIdbK-jY_2AXGkuIUFUGEVT5g3Q_B4aoBU_TJlvnb9csk7x8"
            alt="Professional car wash snow foam application at TMR Car Care Tiruppur"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 02. SURFACE STORY */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-t border-[#D8D8D5]">
        <div className="mb-12 sm:mb-24">
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-[56px] italic text-[#050505]">
            Every Surface Matters.
          </h2>
        </div>

        {/* Item 01 - Paintwork */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-8 items-center mb-20 sm:mb-32">
          <div className="col-span-1 md:col-span-5 space-y-4">
            <span className="font-manrope font-bold text-xs sm:text-sm text-[#FF4B00] uppercase tracking-widest block">
              01 — PAINTWORK
            </span>
            <h3 className="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-[#050505] tracking-tight">
              SAFE CONTACT WASH
            </h3>
            <p className="font-manrope text-sm sm:text-base text-[#656464] leading-relaxed">
              Using advanced pH-neutral snow foams and the two-bucket method, we ensure dirt is lifted safely without introducing micro-scratches or swirl marks to your delicate clear coat.
            </p>
          </div>

          <div className="col-span-1 md:col-span-6 md:col-start-7 h-[300px] sm:h-[420px] bg-[#111111] overflow-hidden border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyVB-zY7BzmXyihB0Sng2eFtDN-bO-hWAo7X-ecnID6TvnR_FSGDWYzvkdyuryMlhn21dRfOWApSBBQomRbDzEImLev-T-wtulGlNOTYcMErQ_wcs4qHOuuyBsCTe8GQMANPxa7y1am6NCOi8KyDJaCn9Ecxg2yhNwKr_LLNUdTUE-r9hA9HrFMovbmnEjBS4B3dKLb-e0-wKOdqPZ-D24-PbAZbdSGyAapCPz85OD00prAGLcFul8"
              alt="Safe pH-neutral snow foam contact wash at TMR Car Care"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Item 02 - Wheels & Arches */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-8 items-center">
          <div className="col-span-1 md:col-span-6 h-[300px] sm:h-[420px] order-2 md:order-1 bg-[#111111] overflow-hidden border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEzhdSxgZYWeGrEnxOePccF3pjJTqVcXFiZLw2RFLH3uvuxaAORpXwEXd0EP1eoZBhPEM30mHZ4_gbkKpDniEp3FjkYHlBedKy4A3nQeyLywVXI_fTXc98TS_eZc_XfyiMOIB342cxbKKts6EcJDnlE9aLT3Mm08DqD7uz4PQCSRkfOulcRuZZVBHc5lCusInsXtDVJLLNyn62yelVeieUAgxqOpRDy2P2XWDsie9M8tIOIGackzF6"
              alt="Wheel and arch decontamination wash at TMR Car Care"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="col-span-1 md:col-span-5 md:col-start-8 order-1 md:order-2 space-y-4">
            <span className="font-manrope font-bold text-xs sm:text-sm text-[#FF4B00] uppercase tracking-widest block">
              02 — WHEELS &amp; ARCHES
            </span>
            <h3 className="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-[#050505] tracking-tight">
              DEEP DECONTAMINATION
            </h3>
            <p className="font-manrope text-sm sm:text-base text-[#656464] leading-relaxed">
              Wheels are often the dirtiest part of any vehicle. We use dedicated iron fallout removers and specialized brushes to clean deep into the barrels, faces, and arches, restoring a factory-fresh finish.
            </p>
          </div>
        </div>
      </section>

      {/* 03. WASH STORY (HORIZONTAL SEQUENCE) */}
      <section className="py-20 sm:py-32 bg-[#050505] text-[#F5F4EF] overflow-hidden">
        <div className="px-5 md:px-16 max-w-[1360px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            THE WASH, SEEN IN MOTION.
          </h2>
        </div>

        {/* Scroll Track */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 px-5 md:px-16 pb-8 scrollbar-none">
          {/* Step 1 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[700px] snap-center flex-shrink-0">
            <div className="h-[320px] sm:h-[480px] w-full relative mb-6 border border-white/10 bg-[#111111]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIiC0nJmw6OfGtsSvg-KCeSUcoAuHZd5P8ay7ZZentFM6AiiL012H_KAYzKC3-qLPMz1jP5G09tCsrI-MHGqaNuTMUF7gKUB1Ui9Cyw2wU0fwI_jfxsG4E9NwY6ZoUzinkZ0oA0sTVGo4u8z2CLlAAOnKOdT6WoLG-SObVc8sRwwiZgejUtDU34bo6_XGWX3FL6tv09BTgEtVPb8eX_9FEb30ermr6XGLe1YFC7v5QI44DGeMqJC79"
                alt="High-pressure pre-rinse car wash step"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <span className="font-editorial text-3xl sm:text-4xl italic text-[#FF4B00]">01.</span>
              <div>
                <h4 className="font-manrope font-bold text-sm sm:text-base uppercase tracking-wider text-white mb-1">
                  PRE-RINSE
                </h4>
                <p className="text-xs sm:text-sm text-[#858585] max-w-sm leading-relaxed">
                  High-pressure flush to remove loose dirt and heavy grime, preparing the surface for safe contact.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[700px] snap-center flex-shrink-0">
            <div className="h-[320px] sm:h-[480px] w-full relative mb-6 border border-white/10 bg-[#111111]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzzSqLlUz21QL7wH48pF8ShRbeU_gYnkd8MuWAaLjsdTZQvsi1apLkWhz7mO_dXeGbbuRQTdneiJAdQMiHRudGbBvI49aduLuxN6UxzhAQZnNM6gw5u2r0Sc6k5lg4Lt1BuglSdaEVBEkc60acUwQe5wOYW9V8a5nWTqbu3mdVZxigTpmkmQPezA3Wnju5yZk3AQ8edPA1xSAS4w8ezVVMLhyjOu837uPIIoaI6VjTFHfiGxn0m1s6"
                alt="Snow foam application car wash step"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <span className="font-editorial text-3xl sm:text-4xl italic text-[#FF4B00]">02.</span>
              <div>
                <h4 className="font-manrope font-bold text-sm sm:text-base uppercase tracking-wider text-white mb-1">
                  SNOW FOAM
                </h4>
                <p className="text-xs sm:text-sm text-[#858585] max-w-sm leading-relaxed">
                  A thick layer of pH-neutral foam is applied to encapsulate and lift remaining surface contaminants.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[700px] snap-center flex-shrink-0">
            <div className="h-[320px] sm:h-[480px] w-full relative mb-6 border border-white/10 bg-[#111111]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbiXQsflXMUgaVTkVJ33ier9gNLVLl3s7aDEmz_iIpijNaLE4bmCM4XyWbJD8LrveFwgPVI4nbsokIu1j7sbO_HFEpDSt4AfTCqL8bjbIhwhc3-9TJTntkOZ1rUHBOWZLjhxfgfCDUfMtenTDj8Ze9FSjCPBoNb_RRsB5E8ZgUMfkbGqd3GGFhLXmWXGHXPBzLRyPqImnX6gpOaMqULoldmZJPk1DYJ0J6qm4XihPvIXwPthz88XS"
                alt="Two-bucket contact wash step"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <span className="font-editorial text-3xl sm:text-4xl italic text-[#FF4B00]">03.</span>
              <div>
                <h4 className="font-manrope font-bold text-sm sm:text-base uppercase tracking-wider text-white mb-1">
                  CONTACT WASH
                </h4>
                <p className="text-xs sm:text-sm text-[#858585] max-w-sm leading-relaxed">
                  Meticulous two-bucket wash using ultra-soft microfiber mitts to ensure zero swirl marks are introduced.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[700px] snap-center flex-shrink-0">
            <div className="h-[320px] sm:h-[480px] w-full relative mb-6 border border-white/10 bg-[#111111]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABarJPtNo_vbJT1XB4xHhUq2alCdO694jHTRSP1c3pSxlNx_L6VwQPieFuFvtggbKDfyx9IUa-J7aNG1NDAow_uF9Cy9UXvvu0RdU3mooHpIn79jUHhJWUQWmoHx5e4kl16ztbb7b8r0CWn47KYXV6vodWzO1PyX2mxPE0lUOVdomXt6EX6Wu1Xxudh3qU8SpxiFLFc0lbN7XSoYRzRSTtpQ352nwR5VvpFgYLvAx87IzJ4t7a2cSH"
                alt="Purified rinse and dry finish step"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <span className="font-editorial text-3xl sm:text-4xl italic text-[#FF4B00]">04.</span>
              <div>
                <h4 className="font-manrope font-bold text-sm sm:text-base uppercase tracking-wider text-white mb-1">
                  THE FINISH
                </h4>
                <p className="text-xs sm:text-sm text-[#858585] max-w-sm leading-relaxed">
                  A thorough rinse and safe drying process leaves a spot-free, brilliant shine ready for protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. STANDARD INCLUSIONS */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase text-[#050505] tracking-tight">
            STANDARD INCLUSIONS.
          </h2>
        </div>

        <div className="w-full flex flex-col">
          {/* Row 1 */}
          <div className="border-t border-[#D8D8D5] py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#eae8e1] px-4 transition-colors">
            <div className="flex items-center gap-8 md:w-1/3">
              <span className="font-editorial text-3xl italic text-[#858585] group-hover:text-[#FF4B00] transition-colors">
                01.
              </span>
              <h4 className="font-manrope font-bold text-base uppercase tracking-wider text-[#050505]">
                EXTERIOR BODY
              </h4>
            </div>
            <div className="md:w-1/2">
              <p className="font-manrope text-sm sm:text-base text-[#656464] leading-relaxed">
                Complete safe wash, intricate badge cleaning, and application of a protective hydrophobic sealant spray.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xl text-[#858585] group-hover:text-[#050505] transition-colors">↗</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="border-t border-[#D8D8D5] py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#eae8e1] px-4 transition-colors">
            <div className="flex items-center gap-8 md:w-1/3">
              <span className="font-editorial text-3xl italic text-[#858585] group-hover:text-[#FF4B00] transition-colors">
                02.
              </span>
              <h4 className="font-manrope font-bold text-base uppercase tracking-wider text-[#050505]">
                INTERIOR REFRESH
              </h4>
            </div>
            <div className="md:w-1/2">
              <p className="font-manrope text-sm sm:text-base text-[#656464] leading-relaxed">
                Thorough vacuuming of seats and carpets, dashboard wipe-down, and interior glass cleaning for perfect clarity.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xl text-[#858585] group-hover:text-[#050505] transition-colors">↗</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="border-t border-b border-[#D8D8D5] py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#eae8e1] px-4 transition-colors">
            <div className="flex items-center gap-8 md:w-1/3">
              <span className="font-editorial text-3xl italic text-[#858585] group-hover:text-[#FF4B00] transition-colors">
                03.
              </span>
              <h4 className="font-manrope font-bold text-base uppercase tracking-wider text-[#050505]">
                WHEELS &amp; TYRES
              </h4>
            </div>
            <div className="md:w-1/2">
              <p className="font-manrope text-sm sm:text-base text-[#656464] leading-relaxed">
                Deep clean of wheel faces and barrels, followed by a premium, non-sling tyre dressing for a satin finish.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xl text-[#858585] group-hover:text-[#050505] transition-colors">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CARE COVERAGE (360° CLEAN) */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto">
        <div className="mb-12 sm:mb-16">
          <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] block mb-4">
            05 / CARE COVERAGE
          </span>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase text-[#050505] mb-4 tracking-tight">
            360° CLEAN.
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#656464] max-w-2xl">
            A cleaner vehicle is more than a single surface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Visual Frame */}
          <div className="col-span-1 md:col-span-8 relative">
            <div className="aspect-[16/10] w-full relative bg-[#D8D8D5] overflow-hidden border border-[#D8D8D5]">
              <img
                src={coverageItems[activeMarker].img}
                alt={`TMR 360 Clean view for ${coverageItems[activeMarker].title}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Hotspot Markers */}
              <div
                onClick={() => setActiveMarker(0)}
                className={`absolute top-[30%] left-[20%] w-4 h-4 rounded-full cursor-pointer transition-transform ${
                  activeMarker === 0
                    ? "bg-[#FF4B00] scale-125 shadow-[0_0_0_4px_rgba(255,75,0,0.3)]"
                    : "bg-[#050505] hover:scale-110"
                }`}
              />
              <div
                onClick={() => setActiveMarker(1)}
                className={`absolute top-[20%] left-[50%] w-4 h-4 rounded-full cursor-pointer transition-transform ${
                  activeMarker === 1
                    ? "bg-[#FF4B00] scale-125 shadow-[0_0_0_4px_rgba(255,75,0,0.3)]"
                    : "bg-[#050505] hover:scale-110"
                }`}
              />
              <div
                onClick={() => setActiveMarker(2)}
                className={`absolute top-[70%] left-[15%] w-4 h-4 rounded-full cursor-pointer transition-transform ${
                  activeMarker === 2
                    ? "bg-[#FF4B00] scale-125 shadow-[0_0_0_4px_rgba(255,75,0,0.3)]"
                    : "bg-[#050505] hover:scale-110"
                }`}
              />
              <div
                onClick={() => setActiveMarker(3)}
                className={`absolute top-[40%] left-[60%] w-4 h-4 rounded-full cursor-pointer transition-transform ${
                  activeMarker === 3
                    ? "bg-[#FF4B00] scale-125 shadow-[0_0_0_4px_rgba(255,75,0,0.3)]"
                    : "bg-[#050505] hover:scale-110"
                }`}
              />
            </div>
          </div>

          {/* Interactive Menu List */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            {coverageItems.map((item, idx) => {
              const isActive = activeMarker === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMarker(idx)}
                  onMouseEnter={() => setActiveMarker(idx)}
                  className={`pl-6 py-4 border-l-2 cursor-pointer transition-all ${
                    isActive
                      ? "border-[#FF4B00] bg-[#eae8e1]"
                      : "border-[#D8D8D5] hover:border-[#FF4B00]"
                  }`}
                >
                  <h4
                    className={`font-manrope font-bold text-sm uppercase tracking-wider mb-1 ${
                      isActive ? "text-[#FF4B00]" : "text-[#050505]"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#656464] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06. FINAL SERVICE CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-[#050505] text-white text-center">
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKo264FcO3mJj8JNKbZ2Tf2C39qkfPpSUHCb4QAJnMCYPrb61scY0rUibdFZMeCQqeAKLryyoXtFCaLn8ny4yNIHH23TlVjD_378EYvUD0r6Rm2qQqnsDE4hGY724mkQOjHrKf-kvhLfm9JKqKFWQLgR4Mc3E6Rudmarl3yqJ3xwJO9ozMt-MThxIgUdlBKZBULrOfjWN7NvaeDFJjdOSA71awneFApqKAkKkwUDxvM3qAyijyMfr4"
            alt="TMR Car Care studio facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 px-5 md:px-16 max-w-3xl mx-auto space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY FOR A<br />
            CLEANER FINISH?
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl mx-auto leading-relaxed">
            Book your premium car wash and cleaning service in Tiruppur today. Experience the TMR standard of automotive care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors duration-300"
            >
              BOOK VIA WHATSAPP
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-white text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors duration-300"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
