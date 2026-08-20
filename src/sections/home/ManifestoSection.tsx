import React from 'react';
import { Container } from '@/components/Container';
import { SectionNumber } from '@/components/SectionNumber';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-warmwhite overflow-hidden relative z-20 -mt-[100vh] border-b border-tmr-concrete/60 shadow-[0_-25px_60px_rgba(0,0,0,0.7)]">
      <Container>
        {/* Header Bar */}
        <div className="border-t border-tmr-concrete pt-6 mb-12 md:mb-16 flex items-center justify-between font-manrope font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <SectionNumber number="01" accent />
            <span className="text-tmr-softblack">/ TMR</span>
          </div>
          <span className="text-tmr-muted">Manifesto</span>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          {/* Vertical Orange Accent Bar */}
          <div className="md:col-span-2 hidden md:block">
            <div className="w-1.5 h-72 bg-tmr-orange" />
          </div>

          {/* Main Manifesto Title */}
          <div className="md:col-span-10 relative z-10">
            <h2 className="font-manrope font-black text-4xl sm:text-6xl md:text-8xl lg:text-[110px] uppercase text-tmr-softblack leading-[0.9] tracking-tighter">
              FOR PEOPLE
              <br />
              <span className="ml-6 sm:ml-12 md:ml-24 block mt-2 sm:mt-4 text-tmr-softblack">
                WHO CARE
              </span>
              <span className="ml-12 sm:ml-24 md:ml-48 block text-tmr-orange mt-2 sm:mt-4">
                ABOUT THEIR CARS.
              </span>
            </h2>

            {/* Background Grayscale Rim Image Crop */}
            <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-20 pointer-events-none overflow-hidden hidden md:block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGQtAh2TOUO2is0MjvXxa8r7N8Kb1YlTK_AlZAt7jdB7yJNrtlnY4OggNs1GtHEdhdhmt14L3Y4B7P0gbPBqBQC-PuJiSfDstAkR1Jh-o_z4eawkYaTjd5tyryS1644qats_teGSMaFJtTbo_h8rJeGkNa964RJKoOJlS3zT9YPp5gbKj6zL7ezxJEJ2EZRKFYT9fa-hd_zmGl0i-W7dIS4SAwsDV0K29B7Y0CmhGpTGzFRyjNl5DV"
                alt="Abstract car rim close-up"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
