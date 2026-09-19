import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Restrained entrance animation on page load
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR AI Car Care, I would like to book an appointment or enquire about your detailing services.'
  )}`;

  return (
    <>
      <style>{`
        @keyframes tmrPulseRing {
          0% {
            transform: scale(0.96);
            opacity: 0.55;
          }
          45% {
            transform: scale(1.28);
            opacity: 0;
          }
          100% {
            transform: scale(1.28);
            opacity: 0;
          }
        }
        .animate-tmr-pulse-ring {
          animation: tmrPulseRing 4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-tmr-pulse-ring {
            animation: none !important;
            display: none !important;
          }
          .tmr-entrance {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <aside
        aria-label="Contact via WhatsApp"
        className={`fixed z-40 print:hidden select-none transition-all duration-500 ease-out tmr-entrance ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{
          bottom: 'calc(1.125rem + env(safe-area-inset-bottom, 0px))',
          right: '1.125rem',
        }}
      >
        <div className="relative flex items-center justify-center group sm:right-1.5 sm:bottom-1.5">
          {/* Soft Ambient Pulsing Ring behind the button (Stationary button, calm 4s cycle) */}
          <span
            className="absolute -inset-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 animate-tmr-pulse-ring pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle Ambient Depth Glow */}
          <span
            className="absolute -inset-0.5 rounded-full bg-black/10 blur-sm pointer-events-none"
            aria-hidden="true"
          />

          {/* Desktop Hover Tooltip (Smooth fade/slide to the left, zero layout shift) */}
          <div
            className="hidden sm:flex absolute right-[calc(100%+14px)] items-center pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out"
            aria-hidden="true"
          >
            <div className="bg-[#111111] text-white text-[11px] font-manrope font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xl border border-white/10 whitespace-nowrap flex items-center gap-1.5">
              <span>CHAT ON WHATSAPP</span>
              <span className="text-[#25D366]">●</span>
            </div>
          </div>

          {/* Stationary Circular Button Shell (Clean White Surface, 68px Desktop / 62px Mobile) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with TMR AI Car Care on WhatsApp"
            title="Chat with TMR AI Car Care on WhatsApp"
            className="group/btn relative w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-full bg-white border border-black/[0.08] hover:border-[#FF4B00]/30 shadow-[0_10px_30px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25),0_6px_16px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B00] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
          >
            {/* Perfectly Centered WhatsApp Brand Mark with Generous Breathing Room */}
            <WhatsAppIcon
              variant="brand"
              className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover/btn:scale-105"
            />
          </a>
        </div>
      </aside>
    </>
  );
};
