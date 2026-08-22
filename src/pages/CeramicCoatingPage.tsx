import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const CeramicCoatingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "TMR Car Care - Ceramic Coating Tiruppur";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "How long does it take?",
      a: "A proper ceramic coating application, including mandatory paint correction and prep, typically takes 2 to 3 full days. The coating also requires curing time in our controlled environment before exposure to the elements.",
    },
    {
      q: "Does it prevent scratches?",
      a: "Ceramic coatings offer minor resistance to wash-induced marring (swirl marks), but they are not bulletproof. They will not prevent rock chips or deep key scratches. For physical impact protection, we recommend Paint Protection Film (PPF).",
    },
    {
      q: "Do I still need to wax my car?",
      a: "No. Traditional waxes will actually mask the superior hydrophobic properties of the ceramic coating. We provide specific maintenance guidelines and products designed specifically to rejuvenate the coating without traditional waxing.",
    },
    {
      q: "What happens if I don't maintain it?",
      a: "Neglect will cause contaminants to build up on top of the coating, masking its water-beading properties and gloss. Regular, proper washing is required to keep the microscopic surface of the coating clean and functional.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#050505] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-end pt-28 pb-16 overflow-hidden bg-[#050505] border-b border-white/10">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLu8fvzCmL1Ys9GLkUzSU5HhD4aQ6ZLLWAHXTqenLi5WiwmIX18xcp0jlNLKmqH_e7lw5xAFHik0G5B23Vy35bkB7Q-bbDcqwUWx6q6ZM_iWwzuHS9ABBIcYXr9mMvobZk4x50XgI0oEJ3WbFhOlnuWu_W--df5DnVVCjsbbWAzd_Qeosio4qVwTQDlSt_kRCHPUhV4p6faA7WLIanV8DX3UTNd0st4LOSN8LvB-pz0llMz2N0wzl-0K6W4"
            alt="Ceramic coating water beading macro closeup at TMR Car Care"
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-8 flex flex-col space-y-4">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] flex items-center">
              <span className="w-8 h-px bg-[#FF4B00] mr-4 inline-block" />
              01 / Protection, Ceramic Coating / Tiruppur
            </span>

            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[80px] text-white uppercase leading-none tracking-tight">
              PROTECT<br />
              THE FINISH.
            </h1>

            <p className="font-editorial text-2xl sm:text-3xl text-[#D8D8D5] max-w-2xl font-normal">
              Engineered molecular bonding for uncompromising gloss and environmental resistance.
            </p>
          </div>

          <div className="col-span-1 md:col-span-4 flex md:justify-end">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20Ceramic%20Coating%20Service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-manrope font-bold text-xs sm:text-sm px-8 py-4 bg-[#FF4B00] text-white hover:bg-white hover:text-[#050505] transition-colors uppercase tracking-widest group w-full md:w-auto"
            >
              <span>BOOK SERVICE</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. SURFACE STORY */}
      <section className="py-20 sm:py-32 w-full bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 sm:mb-24">
            <div className="col-span-1 md:col-span-5">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#050505] leading-none">
                SURFACE,<br />
                REFINED.
              </h2>
            </div>

            <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col justify-end">
              <p className="font-manrope text-base sm:text-lg text-[#5f5e5e] mb-6 leading-relaxed">
                Our ceramic coating process isn't just about application; it's about preparation. We meticulously correct the paint to its absolute peak before locking in that perfection under a rigid, transparent layer of quartz-based protection.
              </p>
              <div className="h-px w-full bg-[#D8D8D5]" />
            </div>
          </div>

          {/* Editorial Composition */}
          <div className="relative w-full h-[50vh] sm:h-[70vh] flex border border-[#D8D8D5] bg-[#050505]">
            <div className="w-full md:w-3/4 ml-auto h-full relative overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_5hUyp8aPFTQofn35tul-3HADO4eiV2mB9ucvHnwBMJ8L9OjNTOW0MoZjapKZDZWtEYByqmaUeH_7BPe4PBVNsyhnDFX849V5tSamcctjaN8ZaMXSJwbDpP0Xd4WiHp1rBAesSiI4Oar1dF2pl9WgMA7NRj8eIsZyUqMUIfrhVx2s1ZLFmBwa-dHcvRSGssFrxx_TGo1lxWP4r2ASTLooPdVykPE5Zjd8cSBGRss0Q0pI4yw_S_CB"
                alt="High-gloss ceramic coated car hood reflection"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. CERAMIC BENEFITS */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative border border-[#D8D8D5]">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvJ508kwagTZ4cJpG-maozx3-ILTksKUUwh4SSqoA0kl0SKpeXWtiKENVLXE1qjYqSsd_EFhRMUKIxFDcV31DwwiHcJNX_8xh2ZjdvAEpQ6b6SGja14HHOpAygu0MYKZT5zqmcagpSmWY7rEBEzbKglhYGHOVJYKb2xYp4wPmj-J67jPJjAAZJ95dhCOEiPIEAk49bDIHNK42fafOasDXaJ5vXeJHSBSInagLdqw4EFCD6Cmbc_2aQGTw"
                alt="Precision hand ceramic coating application at TMR Car Care"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-[#050505]/90 text-white backdrop-blur-sm border-t border-[#FF4B00]">
                <div className="flex justify-between items-center font-manrope font-bold text-[10px] sm:text-xs uppercase tracking-widest text-[#D8D8D5]">
                  <span>PROCESS: APPLICATION</span>
                  <span>TEMP: 22°C / RH: 45%</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-editorial text-4xl sm:text-6xl leading-none mb-12 text-[#050505]">
                Why Ceramic?
              </h2>

              <div className="space-y-0 border-t border-[#D8D8D5]">
                {/* Point 1 */}
                <div className="border-b border-[#D8D8D5] py-8 group hover:bg-[#F5F4EF] transition-colors -mx-4 px-4">
                  <div className="flex items-start">
                    <span className="font-manrope font-bold text-[#FF4B00] mr-6 mt-1 text-sm sm:text-base">01</span>
                    <div>
                      <h3 className="font-manrope font-bold text-xl sm:text-2xl uppercase tracking-wider mb-3 text-[#050505] group-hover:translate-x-2 transition-transform">
                        Extreme Gloss
                      </h3>
                      <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] max-w-md leading-relaxed">
                        Enhances the reflective properties of your paint, creating a deep, wet-look finish that lasts for years, not weeks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="border-b border-[#D8D8D5] py-8 group hover:bg-[#F5F4EF] transition-colors -mx-4 px-4">
                  <div className="flex items-start">
                    <span className="font-manrope font-bold text-[#FF4B00] mr-6 mt-1 text-sm sm:text-base">02</span>
                    <div>
                      <h3 className="font-manrope font-bold text-xl sm:text-2xl uppercase tracking-wider mb-3 text-[#050505] group-hover:translate-x-2 transition-transform">
                        Easier Maintenance
                      </h3>
                      <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] max-w-md leading-relaxed">
                        The ultra-slick surface prevents dirt, brake dust, and tar from adhering strongly, making routine washing significantly faster and safer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="border-b border-[#D8D8D5] py-8 group hover:bg-[#F5F4EF] transition-colors -mx-4 px-4">
                  <div className="flex items-start">
                    <span className="font-manrope font-bold text-[#FF4B00] mr-6 mt-1 text-sm sm:text-base">03</span>
                    <div>
                      <h3 className="font-manrope font-bold text-xl sm:text-2xl uppercase tracking-wider mb-3 text-[#050505] group-hover:translate-x-2 transition-transform">
                        Water Repellency
                      </h3>
                      <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] max-w-md leading-relaxed">
                        Intense hydrophobic properties force water to bead and roll off instantly, carrying loose contaminants away with it (self-cleaning effect).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. MATERIAL REVEAL */}
      <section className="w-full h-[60vh] sm:h-[80vh] bg-[#050505] relative overflow-hidden flex items-center justify-center border-b border-white/10">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLsDhwCwP233gOHISQQuo-bWQdqRutkVjMKTmZLbam202XoGulRiGRYxqW1UliGqK5QjT_q-qIVJUjKk7Gbgi1vTX_eSRFzZKLMCHQpqyciS-NUfQwwY82Zl6BjWKodbNaRvEbMaQklDFr-j4rK9fPbkzVsFSYg8l2XYzDJdFHXX4rkI-x4tkwnEZlEBrWVtQUObEn5FuxhU5fMPJaE85e71wkPM2wzroBskXoDy7ysLCgVuAn-lZtmrlWY"
          alt="Cinematic ceramic coated car finish detail"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 text-center px-4">
          <h2 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[110px] text-white uppercase tracking-tighter leading-none opacity-90">
            The Finish<br />In Detail.
          </h2>
        </div>
      </section>

      {/* 05. FAQ SECTION */}
      <section className="py-20 sm:py-32 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[800px] mx-auto px-5 md:px-0">
          <div className="mb-16 text-center space-y-4">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] block">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#050505]">
              Ceramic Coating Questions.
            </h2>
          </div>

          <div className="space-y-0 border-t border-[#D8D8D5]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#D8D8D5]">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className="font-manrope font-bold text-lg sm:text-xl uppercase tracking-wider text-[#050505] group-hover:text-[#FF4B00] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6">
                      <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
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

      {/* 06. FINAL CTA */}
      <section className="py-24 sm:py-32 bg-[#050505] text-white text-center border-b border-white/10" id="booking">
        <div className="max-w-4xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[80px] text-white uppercase tracking-tight leading-none">
            READY TO PROTECT<br />THE FINISH?
          </h2>
          <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation to inspect your vehicle's paint and determine the optimal correction and coating package.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-manrope font-bold text-xs sm:text-sm px-8 py-5 bg-[#FF4B00] text-white hover:bg-white hover:text-[#050505] transition-colors uppercase tracking-widest w-full sm:w-auto"
            >
              WHATSAPP US
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="inline-flex items-center justify-center font-manrope font-bold text-xs sm:text-sm px-8 py-5 bg-transparent border border-white text-white hover:bg-white hover:text-[#050505] transition-colors uppercase tracking-widest w-full sm:w-auto"
            >
              CALL STUDIO
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
