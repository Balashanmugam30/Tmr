import React from 'react';
import { companyData } from '@/data/company';

export const StudioProcessTimeline: React.FC = () => {
  const steps = [
    { number: "01", title: "CHOOSE", active: false },
    { number: "02", title: "ENQUIRE", active: false },
    { number: "03", title: "CONFIRM", active: false },
    { number: "04", title: "VISIT", active: true },
  ];

  return (
    <section id="studio-process" className="w-full bg-[#fff8f6] text-[#111111] py-20 md:py-32 border-b border-[#D8D8D5]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Technician / Process Visual (5 Cols) */}
        <div className="md:col-span-5 relative">
          <div className="border-b border-[#D8D8D5] pb-4 mb-6 font-manrope">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#FF4B00] block mb-2">
              THE PROCESS
            </span>
            <h3 className="font-intertight font-extrabold text-2xl sm:text-3xl uppercase text-[#111111]">
              STUDIO TIMELINE
            </h3>
          </div>

          <div className="h-[400px] sm:h-[500px] w-full overflow-hidden relative border border-[#D8D8D5] bg-[#111111] group">
            <img
              src="/images/approach/approach-parallax.jpg"
              alt="TMR Car Care Studio detailing process in Tiruppur"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: 4-Step Vertical Timeline (7 Cols) */}
        <div className="md:col-span-7 pl-0 md:pl-12 font-manrope">
          <div className="border-l-2 border-[#111111] pl-8 space-y-10 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Bullet Indicator */}
                <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  step.active
                    ? 'bg-[#FF4B00] border-[#FF4B00] shadow-[0_0_15px_rgba(255,75,0,0.6)]'
                    : 'bg-[#fff8f6] border-[#111111]'
                }`} />

                {/* Step Number & Title */}
                <span className={`font-editorial text-3xl italic block mb-1 ${
                  step.active ? 'text-[#FF4B00]' : 'text-[#858585]'
                }`}>
                  {step.number}
                </span>

                <h4 className="font-intertight font-extrabold text-3xl sm:text-4xl md:text-[40px] uppercase leading-none text-[#111111]">
                  {step.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-10 pl-8">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 w-max flex items-center gap-4 hover:bg-[#FF4B00] transition-colors duration-300 rounded-none shadow-md"
              aria-label="Contact TMR Car Care via WhatsApp"
            >
              <span>WHATSAPP TMR</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
