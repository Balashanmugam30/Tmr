import React from 'react';
import { Container } from '@/components/Container';
import { SectionNumber } from '@/components/SectionNumber';

export const StandardSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-warmwhite overflow-hidden border-b border-tmr-concrete/60" id="tmr-standard">
      <Container>
        {/* Header Bar */}
        <div className="border-t border-tmr-concrete pt-6 mb-16 md:mb-24 flex items-center justify-between font-manrope font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <SectionNumber number="04" accent />
            <span className="text-tmr-softblack">/ STANDARD</span>
          </div>
          <span className="text-tmr-muted">Editorial Manifesto</span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-16">
            <h2 className="font-manrope font-black text-4xl sm:text-6xl lg:text-8xl uppercase leading-[0.85] text-tmr-softblack tracking-tighter">
              THE DIFFERENCE
              <br />
              IS IN THE <span className="text-tmr-orange">DETAIL.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
              {/* Item 01 */}
              <div className="relative pt-8 border-t border-tmr-concrete/60">
                <span className="absolute -top-4 left-0 text-5xl md:text-7xl font-manrope font-black text-tmr-concrete/40 select-none">
                  01
                </span>
                <h3 className="font-manrope font-bold text-sm uppercase mb-3 tracking-widest text-tmr-softblack pt-4">
                  Attention to Detail
                </h3>
                <p className="font-manrope text-sm text-tmr-muted leading-relaxed">
                  We see what others miss. Every crevice, every stitch, every micron of paint is accounted for.
                </p>
              </div>

              {/* Item 02 */}
              <div className="relative pt-8 border-t border-tmr-concrete/60">
                <span className="absolute -top-4 left-0 text-5xl md:text-7xl font-manrope font-black text-tmr-concrete/40 select-none">
                  02
                </span>
                <h3 className="font-manrope font-bold text-sm uppercase mb-3 tracking-widest text-tmr-softblack pt-4">
                  The Right Approach
                </h3>
                <p className="font-manrope text-sm text-tmr-muted leading-relaxed">
                  No shortcuts. We use the safest, most effective methods tailored to your vehicle's specific needs.
                </p>
              </div>

              {/* Item 03 */}
              <div className="relative pt-8 border-t border-tmr-concrete/60">
                <span className="absolute -top-4 left-0 text-5xl md:text-7xl font-manrope font-black text-tmr-concrete/40 select-none">
                  03
                </span>
                <h3 className="font-manrope font-bold text-sm uppercase mb-3 tracking-widest text-tmr-softblack pt-4">
                  Professional Finish
                </h3>
                <p className="font-manrope text-sm text-tmr-muted leading-relaxed">
                  Our results speak for themselves. A mirror-like finish that lasts for years, not weeks.
                </p>
              </div>

              {/* Item 04 */}
              <div className="relative pt-8 border-t border-tmr-concrete/60">
                <span className="absolute -top-4 left-0 text-5xl md:text-7xl font-manrope font-black text-tmr-concrete/40 select-none">
                  04
                </span>
                <h3 className="font-manrope font-bold text-sm uppercase mb-3 tracking-widest text-tmr-softblack pt-4">
                  Care Beyond Service
                </h3>
                <p className="font-manrope text-sm text-tmr-muted leading-relaxed">
                  We educate our clients on maintenance, ensuring the TMR standard is preserved long after you leave.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Inspection Image */}
          <div className="lg:col-span-5 flex items-center mt-8 lg:mt-0">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-tmr shadow-2xl border border-tmr-concrete group">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvaj89qN3bHgHU3YftHLoiYNRMYT-mgXeNJh9jDHwzdmj_D3rCflseXIQwLZAa8iIMBQGF3OtxlCK5e5iSHQ8vTvqUG7jccudrbCzlgoseyxZKr1kKZU1QzYlGsTmYb2BRHVsXPLg52swp8fHJ0vajjOGEvI5JzE-BOjHanaXb1owLHnr5iDIZU_75jh1EVzXTPiJuBZJ-VDYboanWzkEnQcWnfHmXrD_r7Xk02DdEbMgv0vmJFc8U6frk"
                alt="Precision paint inspection with LED light"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
