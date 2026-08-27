import React from 'react';
import { Link } from 'react-router-dom';

interface EmptySearchStateProps {
  query?: string;
  category?: string;
  onReset?: () => void;
}

export const EmptySearchState: React.FC<EmptySearchStateProps> = ({
  query = '',
  category = 'ALL',
  onReset,
}) => {
  const displayQuery = query.trim();

  return (
    <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-8 sm:p-14 text-center relative overflow-hidden my-8">
      {/* SUBTLE BACKGROUND VIGNETTE & GLOW */}
      <div className="absolute inset-0 bg-radial from-[#FF4B00]/5 via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        
        {/* SUBTLE CATEGORY BADGE */}
        <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF4B00]">
          <span>PRODUCT SEARCH</span>
          <span>•</span>
          <span>NO MATCHES</span>
        </div>

        {/* HEADLINE */}
        <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tighter text-white">
          NOTHING MATCHED.
        </h3>

        {/* INTENTIONAL SEARCH EXPLANATION */}
        <p className="font-manrope text-sm sm:text-base text-[#D8D8D5]/80 leading-relaxed max-w-lg mx-auto">
          {displayQuery ? (
            <>
              Your search for <strong className="text-white">&quot;{displayQuery}&quot;</strong>{' '}
              {category !== 'ALL' ? `under category "${category}"` : ''} didn&apos;t return any matching specimens.
            </>
          ) : (
            <>No products match your selected category filter ({category}).</>
          )}
        </p>

        <div className="w-16 h-px bg-white/10 mx-auto" />

        {/* RECOVERY ACTION LINKS (NON-BOXY TEXT + ARROW) */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
          {onReset && (
            <button
              onClick={onReset}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] border-b border-[#FF4B00] pb-1 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <span>RESET SEARCH &amp; FILTERS</span>
              <span>→</span>
            </button>
          )}

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors"
          >
            <span>VIEW ALL PRODUCTS</span>
            <span>→</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#A0A09C] border-b border-white/20 pb-1 hover:text-white hover:border-white transition-colors"
          >
            <span>EXPLORE SERVICES</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EmptySearchState;
