import React, { useEffect } from 'react';
import { companyData } from '@/data/company';

export const SunControlFilmsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sun-Control Films | TMR Car Care Tiruppur";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F5F4EF] text-[#281712] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col md:flex-row relative border-b border-[#D8D8D5]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-5 md:px-16 py-16 sm:py-24 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              01 / FILMS
            </span>
            <div className="h-px w-12 bg-[#D8D8D5]" />
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              SUN-CONTROL / TIRUPPUR
            </span>
          </div>

          <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[84px] text-[#111111] mb-6 leading-tight tracking-tight uppercase">
            CONTROL <br />
            <span className="text-[#FF4B00] italic font-editorial text-6xl sm:text-8xl md:text-[96px] tracking-normal lowercase">
              the light.
            </span>
          </h1>

          <p className="font-manrope text-base sm:text-lg text-[#5f5e5e] max-w-md mb-10 leading-relaxed">
            Premium automotive window films engineered to reject heat, reduce glare, and elevate your vehicle's aesthetic precision in the demanding Tiruppur climate.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="#selection"
              className="font-manrope font-bold text-xs sm:text-sm uppercase text-[#111111] border-b-2 border-[#111111] pb-1 hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors"
            >
              EXPLORE FILMS
            </a>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Sun-Control%20Films`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#111111] text-white font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#FF4B00] transition-colors"
            >
              BOOK CONSULTATION
            </a>
          </div>
        </div>

        {/* Hero Visual Right */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-auto overflow-hidden bg-[#111111] border-l border-[#D8D8D5]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi81vol7hcO1Qr8bBe2qAomtrQDw-27DYdQGRe33dWAl30SiK58rkZO7FdhqqlWmVBKO0-xoP1n6yrZPhnPtCgDt0LqEUGWYUAwPC6NsyGOUTCJOS2oJlgz4KEKq0CBmzwAdvPTYXZWsq1L3ogDzsAmWPXXQNJNBQTgCUQk4lFPM6LLg46WlvZSgVDBYz7oWX42xLm0DptilFCQBMRpuQDZ1eYy1UtEn8F8jNbpI3CqV07GHi7afxD"
            alt="Sun control window film heat rejection at TMR Car Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-[#F5F4EF]/90 backdrop-blur-sm p-4 border border-[#D8D8D5] flex items-center gap-3">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#111111]">
              Up to 99% UV Rejection
            </span>
          </div>
        </div>
      </section>

      {/* 02. LIGHT COMPARISON */}
      <section className="py-20 sm:py-32 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              02 / LIGHT
            </span>
            <div className="h-px w-12 bg-[#FF4B00]" />
          </div>

          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] mb-12">
            SEE THE DIFFERENCE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative border border-[#D8D8D5] bg-[#050505] overflow-hidden">
              <div className="aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                  alt="Direct unfiltered sunlight through vehicle glass"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute top-6 left-6 bg-[#111111] text-white px-4 py-2 font-manrope font-bold text-xs uppercase tracking-widest">
                DIRECT LIGHT
              </div>
            </div>

            <div className="relative border border-[#D8D8D5] bg-[#050505] overflow-hidden">
              <div className="aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                  alt="Sun control ceramic film filtered solar light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 bg-[#FF4B00] text-white px-4 py-2 font-manrope font-bold text-xs uppercase tracking-widest">
                CONTROLLED LIGHT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. THROUGH THE GLASS */}
      <section className="py-20 sm:py-32 bg-[#111111] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12">
          <div className="flex items-center gap-4">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              03 / GLASS
            </span>
          </div>

          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            THROUGH THE GLASS.
          </h2>

          <div className="relative h-[450px] sm:h-[650px] w-full bg-white/5 border border-white/10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
              alt="Cinematic window view through sun control film"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
              <div className="border-r border-white/10 flex flex-col justify-end p-6 sm:p-8 hover:bg-white/5 transition-colors">
                <span className="font-editorial text-2xl sm:text-4xl italic mb-2 text-[#FF4B00]">Light</span>
                <p className="text-xs sm:text-sm text-[#858585]">Natural brilliance.</p>
              </div>
              <div className="border-r border-white/10 flex flex-col justify-end p-6 sm:p-8 hover:bg-white/5 transition-colors">
                <span className="font-editorial text-2xl sm:text-4xl italic mb-2 text-[#FF4B00]">Shade</span>
                <p className="text-xs sm:text-sm text-[#858585]">Heat rejection.</p>
              </div>
              <div className="border-r border-white/10 flex flex-col justify-end p-6 sm:p-8 hover:bg-white/5 transition-colors">
                <span className="font-editorial text-2xl sm:text-4xl italic mb-2 text-[#FF4B00]">Privacy</span>
                <p className="text-xs sm:text-sm text-[#858585]">Personal space.</p>
              </div>
              <div className="flex flex-col justify-end p-6 sm:p-8 hover:bg-white/5 transition-colors">
                <span className="font-editorial text-2xl sm:text-4xl italic mb-2 text-[#FF4B00]">Clarity</span>
                <p className="text-xs sm:text-sm text-[#858585]">HD visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. COMFORT (BUILT AROUND THE DRIVE) */}
      <section className="py-20 sm:py-32 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
                04 / COMFORT
              </span>
            </div>

            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              BUILT AROUND THE DRIVE.
            </h2>

            <div className="flex flex-col">
              <div className="py-6 border-t border-[#D8D8D5]">
                <h3 className="font-manrope font-bold text-xl text-[#111111] mb-2 uppercase">
                  LIGHT CONTROL
                </h3>
                <p className="text-sm text-[#5f5e5e]">Precision filtering of the solar spectrum.</p>
              </div>
              <div className="py-6 border-t border-[#D8D8D5]">
                <h3 className="font-manrope font-bold text-xl text-[#111111] mb-2 uppercase">
                  COMFORT
                </h3>
                <p className="text-sm text-[#5f5e5e]">Reduced cabin temperatures for long journeys.</p>
              </div>
              <div className="py-6 border-t border-b border-[#D8D8D5]">
                <h3 className="font-manrope font-bold text-xl text-[#111111] mb-2 uppercase">
                  PRIVACY
                </h3>
                <p className="text-sm text-[#5f5e5e]">Sophisticated aesthetics with interior security.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 border border-[#D8D8D5] bg-[#111111] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
              alt="Premium car cabin interior solar tint protection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 05. SELECTION (FIND YOUR BALANCE) */}
      <section id="selection" className="py-20 sm:py-32 bg-[#F5F4EF]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 text-center space-y-12">
          <div className="space-y-4">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585] block">
              05 / SELECTION
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              FIND YOUR BALANCE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-12 border border-[#D8D8D5] bg-white space-y-4">
              <h3 className="font-manrope font-bold text-base uppercase tracking-widest text-[#111111]">
                LIGHTER
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Maximum optical clarity with high infrared heat rejection.
              </p>
            </div>

            <div className="p-8 sm:p-12 border border-[#FF4B00] bg-[#fff1ed] space-y-4">
              <h3 className="font-manrope font-bold text-base uppercase tracking-widest text-[#FF4B00]">
                BALANCED
              </h3>
              <p className="text-xs sm:text-sm text-[#5f5e5e] leading-relaxed">
                The perfect equilibrium of thermal shade, glare reduction, and daytime sight.
              </p>
            </div>

            <div className="p-8 sm:p-12 border border-[#D8D8D5] bg-white space-y-4">
              <h3 className="font-manrope font-bold text-base uppercase tracking-widest text-[#111111]">
                DEEPER
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
                Ultimate cabin privacy and aggressive architectural styling.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20Sun-Control%20Film%20Shades`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#111111] text-white font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#FF4B00] transition-colors inline-flex items-center gap-2"
            >
              <span>ENQUIRE ON SUN-CONTROL</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
