import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR AI Car Care, I would like to book an appointment or enquire about your detailing services.'
  )}`;

  return (
    <>
      <style>{`
        /* Smooth vertical floating / levitation animation */
        @keyframes tmrLiquidFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Dynamic TMR Flame Orange + WhatsApp Green shadow breathing with levitation */
        @keyframes tmrLiquidShadow {
          0%, 100% {
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.65), 0 0 20px rgba(255, 75, 0, 0.25), 0 0 12px rgba(37, 211, 102, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.35);
          }
          50% {
            box-shadow: 0 22px 46px rgba(0, 0, 0, 0.5), 0 0 34px rgba(255, 75, 0, 0.4), 0 0 20px rgba(37, 211, 102, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.45);
          }
        }

        /* Ambient TMR Orange pulse wave expanding behind the capsule */
        @keyframes tmrOrangePulseWave {
          0% {
            transform: scale(0.96);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.22);
            opacity: 0;
          }
          100% {
            transform: scale(1.22);
            opacity: 0;
          }
        }

        .animate-tmr-liquid-float {
          animation: tmrLiquidFloat 3.4s ease-in-out infinite;
        }

        .animate-tmr-liquid-shadow {
          animation: tmrLiquidShadow 3.4s ease-in-out infinite;
        }

        .animate-tmr-orange-pulse {
          animation: tmrOrangePulseWave 3.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-tmr-liquid-float,
          .animate-tmr-liquid-shadow,
          .animate-tmr-orange-pulse {
            animation: none !important;
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
        className={`fixed z-40 print:hidden select-none transition-all duration-500 ease-out tmr-entrance bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(9.5rem+env(safe-area-inset-bottom,0px))] right-4 sm:right-6 ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Floating wrapper: bobs up and down smoothly */}
        <div className="relative flex items-center justify-center group animate-tmr-liquid-float sm:right-1">
          
          {/* Ambient TMR Flame Orange Pulse Ring */}
          <span
            className="absolute -inset-2 rounded-full bg-[#FF4B00]/15 border border-[#FF4B00]/30 animate-tmr-orange-pulse pointer-events-none"
            aria-hidden="true"
          />

          {/* Secondary Soft Atmosphere Glow */}
          <span
            className="absolute -inset-1 rounded-full bg-[#FF4B00]/10 blur-md pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Floating Capsule Button: Pure Icon, Zero Tooltip, Zero Bottom Dot */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with TMR AI Car Care on WhatsApp"
            className="group/btn relative w-[54px] h-[86px] sm:w-[60px] sm:h-[94px] rounded-full bg-gradient-to-b from-[#242428]/85 via-[#121214]/90 to-[#08080a]/95 backdrop-blur-2xl border border-white/25 hover:border-[#FF4B00]/80 animate-tmr-liquid-shadow flex items-center justify-center hover:scale-[1.06] active:scale-[0.96] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B00] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer overflow-hidden"
          >
            {/* Liquid Glass Top Specular Arc Reflection */}
            <span
              className="absolute top-0 inset-x-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Subtle TMR Flame Orange Bottom Rim Reflection */}
            <span
              className="absolute bottom-0 inset-x-0 h-1/3 rounded-b-full bg-gradient-to-t from-[#FF4B00]/25 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Glowing New Modern Meta WhatsApp Icon centered with Green Radiance */}
            <div className="relative z-10 flex items-center justify-center drop-shadow-[0_0_12px_rgba(37,211,102,0.65)] group-hover/btn:drop-shadow-[0_0_18px_rgba(37,211,102,0.9)] transition-all duration-300">
              <WhatsAppIcon
                variant="brand"
                className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover/btn:scale-110"
              />
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};
