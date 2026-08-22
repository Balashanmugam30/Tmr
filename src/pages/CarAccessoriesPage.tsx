import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const CarAccessoriesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "CAR ACCESSORIES IN TIRUPPUR | TMR Car Care";
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do you install the accessories purchased?",
      a: "Yes, our trained technicians handle the installation of all accessories purchased from TMR Car Care to ensure perfect fitment and function.",
    },
    {
      q: "Are your accessories OEM or aftermarket?",
      a: "We curate a mix of premium aftermarket brands and genuine OEM accessories, depending on the vehicle and specific requirement.",
    },
    {
      q: "Can you source specific items not in stock?",
      a: "Absolutely. If you are looking for a specific premium accessory, we can source it for you through our network of suppliers.",
    },
    {
      q: "Do the accessories come with a warranty?",
      a: "Yes, most of our premium accessories carry manufacturer warranties. We will provide warranty details for specific products upon inquiry.",
    },
    {
      q: "Where is your showroom in Tiruppur?",
      a: "Our state-of-the-art facility is centrally located in Tiruppur. Please see our contact page for exact directions and working hours.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. ACCESSORIES HERO */}
      <header className="pt-24 pb-16 md:pt-36 md:pb-24 px-5 md:px-16 max-w-[1440px] mx-auto border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 relative z-10 space-y-6">
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] tracking-widest">
              01 / ACCESSORIES
            </p>
            <h1 className="font-manrope text-5xl sm:text-7xl md:text-[80px] text-[#111111] uppercase tracking-tighter leading-none font-extrabold">
              BUILT FOR<br />
              <span className="font-editorial text-[#FF4B00] italic font-normal lowercase tracking-normal">
                the drive.
              </span>
            </h1>
            <p className="text-base sm:text-lg max-w-xl text-[#858585] leading-relaxed font-normal">
              Premium automotive accessories designed to elevate utility, protection, and aesthetics. Hand-selected for the discerning driver in Tiruppur.
            </p>
          </div>

          <div className="md:col-span-4 border border-[#D8D8D5] bg-[#050505]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMG41-jMl5js2mkiQ5lj-buyxJqWIC-qGn5lMZNDqZBnJOgPEd_gctoa6q3ozoSfbP6fSHIAjO8xe_S0rBwL2u8lgHAb-TGygij5m1B89k0veiUD-eBP9sORKIzvjxjw57sKLGfVVku0okTE25RnVjaRdDxqTjFE2tlbE72DKFJMmV-vbAnKfzHS3zI6aGxIQsw9LlVFlB-U7mP7sz7Srnqd-w2uxNb02wvq_2Ir0_B6FKX0EbZylY"
              alt="Premium car interior dashboard accessories"
              className="w-full h-[380px] sm:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </header>

      {/* 02. THE OBJECTS */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <p className="font-manrope font-bold text-xs uppercase text-[#858585] mb-2 tracking-widest">
                02 / CURATION
              </p>
              <h2 className="font-manrope text-3xl sm:text-5xl text-[#111111] uppercase font-bold leading-tight">
                THE OBJECTS BEHIND<br />THE UPGRADE.
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Car%20Accessories`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#111111] text-[#111111] px-8 py-4 font-manrope font-bold text-xs uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all inline-block"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Object 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-[#D8D8D5] h-[360px] sm:h-[400px] border border-[#D8D8D5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA34tpVQR9alQNnB1vZQUkMXoV2yq8lF1SYUU9PKpcB48JXcded6DUxW3XcP7RWhp1S62nxx7lnmA4N0TrSRyKDELLga0uEd_DvpegUXPVEbVzITZFaEljCioVdTfcv-KjUE5Giaj7Z76a3D3znKdP9MckoMSEGYaoR5HkDZ0q3PrZok8t93XAHh5jYXf3sqI4PseZpOXnDAGZYpnKQVD6UTXlQ-LWOd1LefZWrG8G0rdpq-UoZ82K6"
                  alt="Precision floor matting interior protection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-manrope font-bold text-lg uppercase mb-1 text-[#111111]">
                Interior Protection
              </h3>
              <p className="text-sm text-[#858585]">Precision-fit mats and liners.</p>
            </div>

            {/* Object 2 */}
            <div className="group cursor-pointer md:mt-12">
              <div className="relative overflow-hidden mb-6 bg-[#D8D8D5] h-[360px] sm:h-[400px] border border-[#D8D8D5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3KCKpYjOy--2tcubsPSRS5uwpWGQLyep84cP_UxQbCg19ypp6cI9hAK7CVDtUrCik4T6f9FcqRYlmF4GLcJt5jYoY9kkMwjk7dHea6o89VDipmfjHefL3xpSdt9nBaJHVrC7FG-aTpmoE3Bqgc6sADVsucfZ7I6tt7ZpjHPG0RZgo4KnTS7mDai4Z3O0l11tGIJYl5RAIqZE9DFVsAP1_aIOy7bE70WMZaap1Sgs_Rhiv2vUK38bV"
                  alt="Aerodynamic utility and cargo accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-manrope font-bold text-lg uppercase mb-1 text-[#111111]">
                Utility &amp; Cargo
              </h3>
              <p className="text-sm text-[#858585]">Expand your carrying capacity.</p>
            </div>

            {/* Object 3 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="relative overflow-hidden mb-6 bg-[#D8D8D5] h-[360px] sm:h-[400px] border border-[#D8D8D5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-F9OqMd_SXdWYAeEzcTEJgS6n4ihf3R6SE6_TqdF0yHipBHOg0yWyG4jTy_PNv_sW_syh-ktS3siKNt5xSEr4-DEXMaJNoVEXjt4evLD2GpNvyu3ZfQKVx0KRkD1ebMrTLzH_ujYSf1a_CO-5DDZqtMwm2y-4LnHVULBHHF5kk78-64OtQuvfqNFpS4DkTmi7q0Hw7y_ffrhnTobVhbIP35igYXZFy56-ev87J7diXh6JEDUbb32C"
                  alt="LED lighting and electronic accessory enhancements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-manrope font-bold text-lg uppercase mb-1 text-[#111111]">
                Enhancement
              </h3>
              <p className="text-sm text-[#858585]">Lighting and electronic upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. IN CONTEXT */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5] bg-white">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto space-y-12">
          <div>
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] mb-2 tracking-widest">
              03 / IN CONTEXT
            </p>
            <h2 className="font-manrope text-3xl sm:text-5xl text-[#111111] uppercase font-bold leading-tight">
              IT BELONGS WITH <br />
              <span className="font-editorial text-[#FF4B00] italic font-normal lowercase">
                the car.
              </span>
            </h2>
          </div>

          <div className="relative h-[450px] sm:h-[650px] w-full overflow-hidden bg-[#050505] border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7yYU5B64ODCFOdl4ZBeLQvjY05w9NMdfHCwZUiINi5MJXx7_I5PmTx7EHErEhjHZ3CBL_frGWmMoVc3KwqUzKSBpVfT2uU_NEuiyImFaRXBwqNSE1aSknixAjqO9f4qSRyesCFT9XtGfvSJ_uUV_sP_OrAjtdglpHgjlleIW6BNzuBXhfCg-hoN6gen8Ju05jbIMFRxssauEpJmGzlmXhaA_7syxvCSsTGFFz6OyBK3rfCK2bybXt"
              alt="High-end vehicle interior equipment in context"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* 04. COLLECTION */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto space-y-12">
          <div>
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] mb-2 tracking-widest">
              04 / COLLECTION
            </p>
            <h2 className="font-manrope text-3xl sm:text-5xl text-[#111111] uppercase font-bold leading-tight">
              FIND YOUR UPGRADE.
            </h2>
          </div>

          <div className="flex flex-col border-t border-[#D8D8D5]">
            {["INTERIOR", "EXTERIOR", "UTILITY", "PROTECTION", "ENHANCEMENT"].map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20${item}%20Accessories`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-8 border-b border-[#D8D8D5] hover:text-[#FF4B00] hover:pl-4 transition-all duration-300 group"
              >
                <span className="font-manrope text-2xl sm:text-4xl font-bold uppercase tracking-tight">
                  {item}
                </span>
                <span className="text-2xl sm:text-3xl text-[#111111] group-hover:text-[#FF4B00] group-hover:translate-x-2 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SELECTION */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5] bg-white">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto space-y-12">
          <div>
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] mb-2 tracking-widest">
              05 / SELECTION
            </p>
            <h2 className="font-manrope text-3xl sm:text-5xl text-[#111111] uppercase font-bold leading-tight">
              WHAT ARE YOU LOOKING <br />TO IMPROVE?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {["Interior Convenience", "Protection", "Practicality", "Refined Look"].map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20${item}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b border-[#D8D8D5] pb-8 flex justify-between items-end"
              >
                <span className="font-editorial text-3xl sm:text-5xl text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                  {item}
                </span>
                <span className="text-2xl text-[#111111] group-hover:text-[#FF4B00] group-hover:translate-x-2 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06. ENQUIRE */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5] bg-[#111111] text-white">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] tracking-widest">
              06 / ENQUIRE
            </p>
            <h2 className="font-manrope text-3xl sm:text-5xl uppercase font-bold leading-tight">
              SEE SOMETHING YOU'RE <br />
              <span className="font-editorial text-[#FF4B00] italic font-normal lowercase">
                looking for?
              </span>
            </h2>
            <p className="text-base text-[#D8D8D5] leading-relaxed">
              Ask TMR about accessory options, vehicle compatibility and current availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Consultation%20regarding%20Car%20Accessories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors flex items-center justify-center gap-2"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base">↗</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-[#D8D8D5] text-white px-8 py-4 font-manrope font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors flex items-center justify-center gap-2"
            >
              <span>CALL TMR</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 07. FAQ SECTION */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 sm:gap-16">
          <div className="md:w-1/3 space-y-4">
            <p className="font-manrope font-bold text-xs uppercase text-[#858585] tracking-widest">
              07 / QUESTIONS
            </p>
            <h2 className="font-manrope text-3xl sm:text-5xl text-[#111111] uppercase font-bold leading-tight">
              ACCESSORIES <br />QUESTIONS.
            </h2>
          </div>

          <div className="md:w-2/3">
            <div className="border-t border-[#D8D8D5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#D8D8D5]">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-6 flex justify-between items-center text-left group"
                    >
                      <span className="font-manrope font-bold text-base sm:text-xl text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                        {faq.q}
                      </span>
                      <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6">
                        <p className="font-manrope text-sm sm:text-base text-[#858585] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 08. FINAL CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-[#111111] text-white text-center">
        <div className="relative z-10 px-5 md:px-16 max-w-[1440px] mx-auto space-y-8">
          <p className="font-manrope font-bold text-xs uppercase text-[#FF4B00] tracking-widest">
            08 / FINAL
          </p>
          <h2 className="font-manrope text-4xl sm:text-6xl md:text-[80px] text-white uppercase font-extrabold leading-none tracking-tighter">
            READY TO UPGRADE <br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">
              the drive?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link
              to="/services"
              className="bg-[#FF4B00] text-white px-10 py-5 font-manrope font-bold text-xs sm:text-sm uppercase hover:bg-white hover:text-[#111111] transition-colors tracking-widest"
            >
              EXPLORE SERVICES
            </Link>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#111111] px-10 py-5 font-manrope font-bold text-xs sm:text-sm uppercase hover:bg-[#D8D8D5] transition-colors tracking-widest"
            >
              CONTACT TMR
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
