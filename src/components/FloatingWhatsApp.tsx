import React from 'react';
import { companyData } from '@/data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR AI Car Care, I would like to book an appointment or enquire about your detailing services.'
  )}`;

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden select-none"
      style={{
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Soft Ambient Pulsing Ring behind the button */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping pointer-events-none motion-reduce:hidden"
          aria-hidden="true"
        />

        {/* Subtle Ambient Glow */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/15 blur-md pointer-events-none"
          aria-hidden="true"
        />

        {/* Stationary Circular Button Shell */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with TMR AI Car Care on WhatsApp"
          title="Chat with TMR AI Car Care on WhatsApp"
          className="group relative w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full bg-[#111111] border border-white/20 hover:border-[#25D366]/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center justify-center text-[#25D366] hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
        </a>
      </div>
    </aside>
  );
};
