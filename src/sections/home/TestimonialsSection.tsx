import React from 'react';
import { Container } from '@/components/Container';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-warmwhite border-b border-tmr-concrete/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column (7 Cols): Main Featured Quote */}
          <div className="lg:col-span-7 relative">
            <span className="text-8xl sm:text-[140px] font-editorial text-tmr-orange absolute -top-16 -left-6 opacity-20 select-none pointer-events-none">
              “
            </span>
            <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-6xl leading-tight text-tmr-softblack mb-8 relative z-10">
              The attention to detail at TMR is unmatched. My car looks better than the day it rolled off the showroom floor. True artisans of their craft.
            </blockquote>
            <div className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-muted">
              — Karthik R. / Range Rover SV
            </div>
          </div>

          {/* Right Column (5 Cols): Secondary Quotes */}
          <div className="lg:col-span-5 space-y-10 lg:border-l border-tmr-concrete lg:pl-12">
            <div className="space-y-3">
              <p className="font-manrope text-base text-tmr-softblack leading-relaxed">
                "Absolutely flawless ceramic coating job. The gloss is unbelievable and washing it now is a breeze."
              </p>
              <div className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-muted">
                — S. Kumar / BMW M340i
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-tmr-concrete/40">
              <p className="font-manrope text-base text-tmr-softblack leading-relaxed">
                "Professional, punctual, and passionate. The interior restoration brought my classic back to life."
              </p>
              <div className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-muted">
                — Arvind T. / Mercedes W124
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
