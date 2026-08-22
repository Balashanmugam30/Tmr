import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const DetailingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePin, setActivePin] = useState<number>(0);

  useEffect(() => {
    document.title = "PROFESSIONAL CAR DETAILING & PAINT CARE IN TIRUPPUR | TMR CAR CARE";
    window.scrollTo(0, 0);
  }, []);

  const inspectionPins = [
    { id: 0, label: "01 / SURFACE", desc: "Surface clear coat micro-marring and oxidation assessment under high-intensity light." },
    { id: 1, label: "02 / PAINT", desc: "Digital ultrasonic paint thickness gauge audit to measure factory clear coat depth." },
    { id: 2, label: "03 / TRIM", desc: "Restoration assessment for faded exterior rubber, vinyl, and plastic trims." },
  ];

  const faqs = [
    {
      q: "How long does a full detail take?",
      a: "Depending on the condition of the vehicle and the level of correction required, a full detail can take anywhere from 1 to 3 days. We prioritize quality over speed.",
    },
    {
      q: "Will polishing thin my clear coat?",
      a: "Yes, marginally. However, we use paint thickness gauges before and during the process to ensure we safely remove only microscopic layers to level defects without compromising the integrity of the paint.",
    },
    {
      q: "Do I need a ceramic coating after?",
      a: "While not mandatory, we highly recommend it. Correction perfects the paint, but protection preserves it. Without a coating or sealant, the pristine finish is vulnerable to rapid degradation.",
    },
    {
      q: "Can deep scratches be removed?",
      a: "If a scratch catches your fingernail, it has likely penetrated beyond the clear coat and cannot be fully polished out. However, we can significantly reduce its appearance through careful leveling and rounding of the scratch edges.",
    },
    {
      q: "How often should I get my car detailed?",
      a: "For daily drivers, a major correction is usually a one-time process if maintained properly. After that, we recommend maintenance details every 4-6 weeks to keep the vehicle in optimal condition.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#050505] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      <h1 className="sr-only">PROFESSIONAL CAR DETAILING &amp; PAINT CARE IN TIRUPPUR</h1>

      {/* 01 HERO */}
      <section className="relative min-h-[85vh] grid grid-cols-1 md:grid-cols-12 bg-[#F5F4EF] overflow-hidden border-b border-[#D8D8D5]">
        {/* Left Column: Media Stage */}
        <div className="md:col-span-8 relative h-[45vh] md:h-full bg-[#050505] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLuerGKC_1ULZcPObVg8PpCBLfX_aWHLPXezoH_L7xpPXQQb-ZYzaEdS6ZUJtoZVWt8Sm7LZiytK5p3Ybb0ffrfZt6e59-PYIoY29P2352gEf0Kv2bKewzCjSC-qCRFm6Y-1bzR72-vK1zu2w23HXTJElhKGWPShqhMUl_rSoKuidJBEQCxdHnL6NHDBqOjefdqA44pdOPlh5Y_v4Pfla3tSGbU4jzT2u42hH_FVEa4kSX0_bcK1ySJt6g"
            alt="Professional automotive paint correction and detailing at TMR Car Care Tiruppur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050505]/20" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF4B00]/60 blur-sm animate-pulse" />
        </div>

        {/* Right Column: Copy & Actions */}
        <div className="md:col-span-4 flex flex-col justify-center p-6 md:p-12 gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00]">
              01 / DETAILING
            </span>
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#5f5e5e]">
              PAINT CARE / TIRUPPUR
            </span>
          </div>

          <h2 className="font-manrope font-black text-4xl sm:text-6xl md:text-[64px] leading-none uppercase text-[#050505] tracking-tighter">
            REVEAL THE<br />FINISH.
          </h2>

          <p className="font-manrope text-base sm:text-lg text-[#858585] leading-relaxed">
            Professional car detailing and paint-care services in Tiruppur focused on refining the vehicle's appearance.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope font-bold text-xs sm:text-sm uppercase bg-[#050505] text-white px-8 py-4 hover:bg-[#FF4B00] transition-colors flex justify-between items-center group"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Detailing%20%26%20Paint%20Care`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope font-bold text-xs sm:text-sm uppercase border border-[#050505] text-[#050505] px-8 py-4 hover:bg-[#050505] hover:text-white transition-colors flex justify-between items-center group"
            >
              <span>ENQUIRE ABOUT DETAILING</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02 INSPECTION */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 sm:mb-16 items-end">
          <div className="md:col-span-4">
            <div className="flex gap-4 items-center mb-4">
              <span className="font-editorial text-2xl italic text-[#FF4B00]">02</span>
              <h3 className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#5f5e5e]">
                INSPECTION
              </h3>
            </div>
            <h4 className="font-editorial text-3xl sm:text-4xl text-[#050505] leading-tight">
              SEE WHAT OTHERS MISS.
            </h4>
          </div>

          <div className="md:col-span-8">
            <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-xl leading-relaxed">
              Before correction begins, the vehicle's current surface condition should be understood. Our detailers perform paint depth and optical light audits to detect hidden swirls.
            </p>
          </div>
        </div>

        {/* Interactive Inspection Stage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 relative h-[380px] sm:h-[500px] md:h-[600px] bg-[#D8D8D5] overflow-hidden border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLu76ppBIHNU6AsUvNbsOnt37wVPWAr1xhQThMWyvRy413nI6wNyEz4auNmTw9sjzvmS_Utx-q2TLm7a9hYiJBKD4AtIXyRDuRt2noQIs0qw9eEmUXQ0V_wr2FD2fLApQ2YkXQ5OYkV8xDmQgu8OckOYdADqyfeO99m0JmKbEC9G84djJnQifg4rIPaHaO85d4SXqhI_rNvsSUOCWRwkNO9CuNzpB_IcusWjxYlTG2uq1LrNXFkNBdyp1OY"
              alt="Paint defect light audit inspection at TMR Car Care"
              className="w-full h-full object-cover"
            />

            {/* Pins */}
            {inspectionPins.map((pin, idx) => (
              <div
                key={pin.id}
                onClick={() => setActivePin(idx)}
                className={`absolute cursor-pointer transition-all ${
                  idx === 0
                    ? "top-1/4 left-1/3"
                    : idx === 1
                    ? "top-1/2 right-1/4"
                    : "bottom-1/4 left-1/4"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full transition-all ${
                      activePin === idx
                        ? "bg-[#FF4B00] ring-4 ring-[#FF4B00]/30 scale-125"
                        : "bg-[#858585]"
                    }`}
                  />
                  <div className="w-16 sm:w-24 h-px bg-[#FF4B00]" />
                  <span className="font-manrope font-bold text-[10px] sm:text-xs text-white bg-[#050505] px-2 py-1 uppercase tracking-widest">
                    {pin.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Inspection Detail Card */}
          <div className="md:col-span-4 flex flex-col justify-between border border-[#D8D8D5] bg-[#050505] text-white p-6 sm:p-8">
            <div className="space-y-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] block">
                AUDIT // {inspectionPins[activePin].label}
              </span>
              <p className="font-manrope text-sm text-[#D8D8D5] leading-relaxed">
                {inspectionPins[activePin].desc}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest text-[#FF4B00]">
                MAGNIFIED OPTICAL AUDIT
              </span>
              <span className="text-base">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CORRECTION STORY */}
      <section className="py-20 sm:py-32 bg-[#050505] text-[#F5F4EF] overflow-hidden border-b border-white/10">
        <div className="px-5 md:px-16 max-w-[1360px] mx-auto text-center mb-16 space-y-4">
          <div className="flex justify-center items-center gap-4">
            <span className="font-editorial text-2xl italic text-[#FF4B00]">03</span>
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#D8D8D5]">
              / FINISH
            </span>
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[72px] uppercase max-w-4xl mx-auto leading-tight text-white">
            THE FINISH SHOULD <span className="font-editorial italic font-normal text-[#FF4B00]">SPEAK</span> FOR ITSELF.
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl mx-auto leading-relaxed">
            A refined finish begins with careful preparation and attention to the surface.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link
              to="/services/ceramic-coating"
              className="font-manrope font-bold text-xs sm:text-sm uppercase bg-[#FF4B00] text-white px-8 py-4 hover:bg-white hover:text-[#050505] transition-colors inline-flex items-center justify-center gap-2 group"
            >
              <span>EXPLORE CERAMIC COATING</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope font-bold text-xs sm:text-sm uppercase border border-white text-white px-8 py-4 hover:bg-white hover:text-[#050505] transition-colors inline-flex items-center justify-center gap-2 group"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Visual Stage */}
        <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden border-t border-white/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9AOJcdNEtxeski-6omIvXy1GVrRX32dAExAWMOA3xpKeZPpzlJ_DcwlUsFPRoqyNdxFxYNScG3QQcp2XyPt4oduydRAJbDLzL2yduSd08i_mLbp5mIP78mmjWy54iFwDMiTZDV13UAxQc2AFRLIQ1zU7IFmuJ2emnLwnktaSNuAt83w3X3zZunfUNVM5vhxnBTvx8eeuyHM-CZahGmmD1_usxO_D594-L0tq0-zscM5ofFCSNFziQ"
            alt="Perfectly finished high-gloss premium sports car detailing result"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 04 SCOPE */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex gap-4 mb-8 md:mb-0">
            <span className="font-editorial text-2xl italic text-[#FF4B00]">04</span>
            <h3 className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#5f5e5e] mt-1">
              SCOPE
            </h3>
          </div>

          <div className="md:col-span-8 flex flex-col gap-6">
            <h4 className="font-editorial text-3xl sm:text-5xl text-[#050505] mb-6">
              WHAT WE LOOK AFTER.
            </h4>

            {/* Scope Rows */}
            <div className="border-t border-[#D8D8D5] pt-6 pb-6 group hover:pl-4 transition-all">
              <h5 className="font-manrope font-extrabold text-2xl sm:text-4xl text-[#050505] group-hover:text-[#FF4B00] transition-colors uppercase tracking-tight mb-2">
                Exterior Paint
              </h5>
              <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl leading-relaxed">
                Complete surface leveling, defect removal, and gloss enhancement for all clear coat types.
              </p>
            </div>

            <div className="border-t border-[#D8D8D5] pt-6 pb-6 group hover:pl-4 transition-all">
              <h5 className="font-manrope font-extrabold text-2xl sm:text-4xl text-[#050505] group-hover:text-[#FF4B00] transition-colors uppercase tracking-tight mb-2">
                Interior
              </h5>
              <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl leading-relaxed">
                Deep extraction, leather restorative care, and precision cleaning of all cabin materials.
              </p>
            </div>

            <div className="border-t border-[#D8D8D5] pt-6 pb-6 group hover:pl-4 transition-all">
              <h5 className="font-manrope font-extrabold text-2xl sm:text-4xl text-[#050505] group-hover:text-[#FF4B00] transition-colors uppercase tracking-tight mb-2">
                Glass
              </h5>
              <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl leading-relaxed">
                Water spot removal, polishing, and hydrophobic treatment for optimal visibility.
              </p>
            </div>

            <div className="border-t border-[#D8D8D5] pt-6 pb-6 group hover:pl-4 transition-all">
              <h5 className="font-manrope font-extrabold text-2xl sm:text-4xl text-[#050505] group-hover:text-[#FF4B00] transition-colors uppercase tracking-tight mb-2">
                Trim
              </h5>
              <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl leading-relaxed">
                Restoration of faded plastics and protection of delicate exterior components.
              </p>
            </div>

            <div className="border-t border-b border-[#D8D8D5] pt-6 pb-6 group hover:pl-4 transition-all">
              <h5 className="font-manrope font-extrabold text-2xl sm:text-4xl text-[#050505] group-hover:text-[#FF4B00] transition-colors uppercase tracking-tight mb-2">
                Wheels
              </h5>
              <p className="font-manrope text-sm sm:text-base text-[#858585] max-w-2xl leading-relaxed">
                Iron decontamination, inner barrel cleaning, and face polishing for alloys and calipers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 PROTECT THE INVESTMENT (NEXT STEPS) */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="flex gap-4 mb-12">
          <span className="font-editorial text-2xl italic text-[#FF4B00]">05</span>
          <h3 className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#5f5e5e] mt-1">
            PROTECT THE INVESTMENT
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ceramic Coating Link Card */}
          <Link
            to="/services/ceramic-coating"
            className="group block relative overflow-hidden bg-[#050505] h-[450px] sm:h-[500px] border border-[#D8D8D5]"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA764RQDmFjGAto7EdmWTAhZv38NiZIrm6iLB666fk4qTQDXFvcJ55i8iIP4sg65qtMOucAstZC1yLS1rPXGkx8b5DR59pw4mXX1g4A9T_HY5QGtp-b293MsqeDEGA-W9hJ-L35fM71X_7CRitMdB7qPD-kE3CRVkgH2iLsADvX1rKM2SYx0TLFS59dYlVadh1O5AwHPLbi1y-VJfeH5YGa1cOK8BZ61iLfI0yswb_rp67satLS8J-Y"
              alt="Ceramic Coating service at TMR Car Care"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-4">
              <h4 className="font-editorial text-3xl sm:text-4xl text-white group-hover:text-[#FF4B00] transition-colors">
                CERAMIC COATING
              </h4>
              <p className="font-manrope text-sm text-[#D8D8D5] max-w-sm leading-relaxed">
                Lock in the perfection with nanoceramic technology for long-lasting gloss and protection.
              </p>
              <span className="font-manrope font-bold text-xs text-white uppercase flex items-center gap-2 mt-2">
                <span>EXPLORE</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </span>
            </div>
          </Link>

          {/* PPF Link Card */}
          <Link
            to="/services/ppf-paint-protection"
            className="group block relative overflow-hidden bg-[#050505] h-[450px] sm:h-[500px] border border-[#D8D8D5]"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMtxZJJitR7x0BLxvDJJ4JS80fOfm3u3a9puOzFHDD0TmzZQBFuv-14p47vNZa4UPEr-OkAXQvzu1hHF2Et19b67Hz05Vd_PIQWEzwKpzWx2ud96cQArXY-jBONhaiu1wd_2_v_oL5j4UXsmjdEAbOhG1Jp__Id5K73CpFAOR03iNBYGRuFvFqNC7Q9_PT9eSwu-bhAoUWjYNMeFZ_4sn_LdjBXGhCOneneitflWahDw-cY6st8PDY"
              alt="Paint Protection Film (PPF) installation at TMR Car Care"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-4">
              <h4 className="font-editorial text-3xl sm:text-4xl text-white group-hover:text-[#FF4B00] transition-colors">
                PPF &amp; PAINT PROTECTION
              </h4>
              <p className="font-manrope text-sm text-[#D8D8D5] max-w-sm leading-relaxed">
                The ultimate physical barrier against rock chips, scratches, and environmental damage.
              </p>
              <span className="font-manrope font-bold text-xs text-white uppercase flex items-center gap-2 mt-2">
                <span>EXPLORE</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 06 FAQ */}
      <section className="py-20 sm:py-32 px-5 md:px-16 max-w-[1360px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex gap-4 mb-8 md:mb-0">
            <span className="font-editorial text-2xl italic text-[#FF4B00]">06</span>
            <h3 className="font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-[#5f5e5e] mt-1">
              QUESTIONS
            </h3>
          </div>

          <div className="md:col-span-8 flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D8D8D5]">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className="font-manrope font-bold text-lg sm:text-xl text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6">
                      <p className="font-manrope text-sm sm:text-base text-[#858585] leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 FINAL CTA */}
      <section className="py-24 sm:py-32 px-5 md:px-16 bg-[#FF4B00] text-white text-center">
        <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[80px] uppercase mb-8 max-w-4xl mx-auto leading-tight tracking-tight">
          READY TO REVEAL THE FINISH?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/${companyData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-manrope font-bold text-xs sm:text-sm uppercase bg-[#050505] text-white px-8 py-5 hover:bg-white hover:text-[#050505] transition-colors"
          >
            WHATSAPP US
          </a>
          <a
            href={`tel:${companyData.contact.phone}`}
            className="font-manrope font-bold text-xs sm:text-sm uppercase border border-[#050505] text-[#050505] px-8 py-5 hover:bg-[#050505] hover:text-white transition-colors"
          >
            CALL NOW
          </a>
        </div>
      </section>

    </div>
  );
};
