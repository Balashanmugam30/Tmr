import React from 'react';
import { Container } from '@/components/Container';
import { SectionNumber } from '@/components/SectionNumber';
import { EditorialButton } from '@/components/EditorialButton';
import { ParallaxImage } from '@/components/ParallaxImage';

export const ApproachSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-warmwhite overflow-hidden relative" id="approach-refined">
      <Container>
        {/* Header Bar */}
        <div className="border-t border-tmr-concrete pt-6 mb-16 md:mb-24 flex items-center justify-between font-manrope font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <SectionNumber number="02" accent />
            <span className="text-tmr-softblack">/ APPROACH</span>
          </div>
          <span className="text-tmr-muted">Architecture + Parallax</span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
          {/* Left Column (5 Cols): Editorial Narrative */}
          <div className="lg:col-span-5 relative z-10 space-y-8">
            <h2 className="font-manrope font-black text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] text-tmr-softblack tracking-tighter">
              MORE THAN
              <br />A <span className="text-tmr-orange">CAR WASH.</span>
            </h2>

            <div className="space-y-6 max-w-md">
              <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-tmr-softblack leading-tight">
                We engineered a facility dedicated to the preservation of automotive excellence.
              </p>

              <p className="font-manrope text-base text-tmr-muted leading-relaxed">
                Located in the heart of Tiruppur, our studio combines technical precision with an obsession for detail. Every vehicle receives bespoke treatment designed to protect, restore, and elevate.
              </p>

              <div className="pt-2">
                <EditorialButton href="/about">Discover Our Approach</EditorialButton>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Facility Media & Badge */}
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] lg:h-[700px] w-full overflow-hidden relative rounded-tmr shadow-2xl group">
              <ParallaxImage
                src="https://lh3.googleusercontent.com/aida/AP1WRLvd2L9VVv7endAsuIj4_Fz1wPHLZz17fKAwAkD1JJ0KUmfuvTply1bhgBBQAp1d-E7S0OAJocybRnvDtooevJptn5MZ38T2Vn2nTpxcUYNG2j2qaJgoCnNli2bFBeQxvsMnGTDTr5OGYuxUje0WkPJ-CrFr6diCUm_5l3Mwtz6obvd1R0eAdN5fGA-fiTQ42fO_KhQDKKppmLc3bTDfLHX5vE1nM2OJ4-1vWplJuzC8Bu4ra6uPOlGu4Lw"
                alt="TMR Car Care Studio Facility in Tiruppur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-tmr-softblack/20" />
            </div>

            {/* Overlapping Est. Badge */}
            <div className="absolute -bottom-10 -left-8 bg-tmr-orange text-white p-8 md:p-12 hidden lg:block z-20 shadow-2xl rounded-tmr">
              <span className="font-manrope font-black text-3xl md:text-5xl leading-none block">
                EST. 2024
              </span>
              <span className="font-manrope text-xs uppercase tracking-widest opacity-80 mt-1 block">
                Tiruppur Studio
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
