import React from 'react';
import { ExternalLink } from 'lucide-react';

export const EXTERNAL_STORE_URL = 'https://3mtamilmani.com/';

export const ExternalProductSalesSection: React.FC = () => {
  return (
    <section
      id="product-sales"
      className="w-full py-20 sm:py-28 bg-[#0A0A0B] text-[#F5F4EF] border-t border-white/10 relative overflow-hidden font-manrope"
    >
      {/* Background Subtle Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />

      <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
        <div className="max-w-4xl space-y-6">
          <span className="block font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-[0.25em]">
            SHOP THE PRODUCTS
          </span>

          <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.96]">
            WANT TO PURCHASE THE <br />
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">products?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8D8D5] leading-relaxed max-w-2xl border-l-2 border-[#FF4B00] pl-5">
            Browse professional car-care and detailing products through our external product store.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={EXTERNAL_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop automotive care products — opens external store"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF4B00] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all rounded shadow-lg group cursor-pointer"
            >
              <span>SHOP PRODUCTS</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
