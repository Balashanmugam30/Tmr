import React from 'react';
import { Container } from '@/components/Container';
import { companyData } from '@/data/company';

export const ShowroomSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to schedule a visit or studio tour at your Tiruppur facility.'
  )}`;

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`;

  return (
    <section
      id="showroom"
      className="w-full bg-[#050505] text-[#F5F4EF] border-t border-b border-white/10 py-16 md:py-24 relative overflow-hidden isolate font-intertight"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-20 pt-2">
        <div className="w-full border-t border-white/10" />
      </Container>

      {/* MAIN CONTENT AREA */}
      <Container className="relative z-20 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: EDITORIAL STATEMENT & CONTACT ACTION */}
          <div className="lg:col-span-6 space-y-6">
            {/* MAIN HEADLINE */}
            <h2 className="font-intertight font-extrabold text-4xl sm:text-6xl uppercase text-white leading-[0.92] tracking-[-0.04em]">
              COME SEE <br />
              THE <span className="text-[#FF4B00]">DIFFERENCE.</span>
            </h2>

            {/* EDITORIAL SUBTITLE STATEMENT */}
            <p className="font-editorial text-lg sm:text-2xl italic text-white/85 leading-tight max-w-[480px]">
              "Our Tiruppur Studio is engineered as a cleanroom detailing environment for vehicle transformation."
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-intertight">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>GET DIRECTIONS</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span>WHATSAPP TMR</span>
                  <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </span>
                <span className="h-[1.5px] w-0 group-hover:w-full bg-white transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: ESSENTIAL STUDIO ADDRESS & OPERATIONAL HOURS INFORMATION */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF4B00] mb-2">
                LOCATION ADDRESS
              </div>
              <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {companyData.address.fullText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">
                  DIRECT PHONE
                </div>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="font-extrabold text-sm text-white hover:text-[#FF4B00] transition-colors"
                >
                  {companyData.contact.phoneFormatted}
                </a>
              </div>

              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">
                  WORKING HOURS
                </div>
                <div className="font-extrabold text-xs text-white/90 leading-tight">
                  <p>{companyData.hours.weekdays}</p>
                  <p className="text-[#FF4B00] mt-0.5">{companyData.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10" />
      </Container>
    </section>
  );
};
