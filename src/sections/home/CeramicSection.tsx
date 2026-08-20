import React from 'react';
import { Container } from '@/components/Container';
import { SectionNumber } from '@/components/SectionNumber';

export const CeramicSection: React.FC = () => {
  return (
    <section className="w-full bg-tmr-warmwhite py-24 md:py-section-gap overflow-hidden border-b border-tmr-concrete/60" id="ceramic-coating-refined">
      <Container>
        {/* Header Bar */}
        <div className="border-t border-tmr-concrete pt-6 mb-12 flex items-center justify-between font-manrope font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <SectionNumber number="03" accent />
            <span className="text-tmr-softblack">/ PROTECTION</span>
          </div>
          <span className="text-tmr-muted">Signature Service</span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-end">
          {/* Left Column (4 Cols) */}
          <div className="lg:col-span-4 pb-6 lg:pb-12 space-y-8">
            <h2 className="font-manrope font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] text-tmr-softblack tracking-tighter">
              PROTECT
              <br />
              THE <span className="text-tmr-orange">FINISH</span>
            </h2>

            {/* Stepper List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-manrope font-bold text-xs text-tmr-orange">01</span>
                <div className="h-px bg-tmr-orange flex-1" />
                <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-softblack">
                  Surface
                </span>
              </div>
              <div className="flex items-center gap-4 opacity-40">
                <span className="font-manrope font-bold text-xs text-tmr-softblack">02</span>
                <div className="h-px bg-tmr-concrete flex-1" />
                <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-softblack">
                  Detail
                </span>
              </div>
              <div className="flex items-center gap-4 opacity-40">
                <span className="font-manrope font-bold text-xs text-tmr-softblack">03</span>
                <div className="h-px bg-tmr-concrete flex-1" />
                <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-softblack">
                  Repel
                </span>
              </div>
              <div className="flex items-center gap-4 opacity-40">
                <span className="font-manrope font-bold text-xs text-tmr-softblack">04</span>
                <div className="h-px bg-tmr-concrete flex-1" />
                <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-softblack">
                  Finish
                </span>
              </div>
            </div>

            <p className="font-manrope text-base text-tmr-muted leading-relaxed">
              Our ceramic coating process is a multi-stage technical application designed to bond at a molecular level, creating a permanent shield of high-gloss protection.
            </p>

            {/* Metrics Box */}
            <div className="grid grid-cols-1 gap-3 border-t border-tmr-concrete pt-6 font-manrope">
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold">
                <span className="text-tmr-softblack">Gloss Level</span>
                <span className="text-tmr-orange">+95%</span>
              </div>
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold">
                <span className="text-tmr-softblack">Hydrophobic</span>
                <span className="text-tmr-orange">Active</span>
              </div>
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold">
                <span className="text-tmr-softblack">Durability</span>
                <span className="text-tmr-orange">5-7 Years</span>
              </div>
            </div>
          </div>

          {/* Right Column (8 Cols): Main Macro Image + Inset */}
          <div className="lg:col-span-8 relative">
            <div className="aspect-video lg:h-[650px] w-full relative overflow-hidden rounded-tmr shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLsKzGWrZ6F8Q8hhfkn6R8zjffu1qwE396z8VN82Jyct17xoCvN4-yJ-hXrpfc1iJjr5bQBjv3egcpB5cR23dTCSE1i-gn22K0E68_Thw2xTqgK-x7T4IUR0KFEbp98C5Q79b0a9mfy5kcvFS_gXJdGddW7DMIoYPj1NypvHnBHkLnwf6c8YuTDM0DyL_HrVv2rTbCQseuC0U1rrm2qyZaGK7-nH5YSayslXtn-xNOHSDeH6N42I_XKoCUc"
                alt="Macro shot of ceramic coating water beading"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><rect width="1200" height="700" fill="%23050505"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="28" fill="%23FF4B00">CERAMIC HYDROPHOBIC WATER BEADING</text></svg>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tmr-warmwhite/30 to-transparent" />

              {/* Floating Top Right Badge */}
              <div className="absolute top-6 right-6 hidden sm:block bg-tmr-softblack text-white p-5 backdrop-blur-md rounded-tmr border border-white/10 shadow-xl">
                <ul className="space-y-3 font-manrope text-xs font-bold uppercase tracking-widest">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-tmr-orange rounded-full" />
                    <span>Gloss Enhancement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-tmr-orange rounded-full" />
                    <span>Easier Maintenance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-tmr-orange rounded-full" />
                    <span>Water Repellency</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Overlapping Inset Image */}
            <div className="absolute -bottom-10 -left-6 w-2/3 aspect-video border-8 border-tmr-warmwhite shadow-2xl hidden lg:block rounded-tmr overflow-hidden z-20">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLuEefxAcyu5JAvrKq3GE6O-JNRzUvLQ99LrztK5LiBLvybs80vQwsbpx0XgiAM3mgNwvW51vCUoiF-JDiLYOcdUGRmGtQb1CuNvM8xDWsKwxAwjk8IRPCRip6kv4MdugL_wtL7pwEiLOzHm3MyKIGhaNZnMgCUfs80hooNsWCOXz7cp_1DfOpAmrq5uCja1-CmEFm2yt76AjP40lkJvO1jc5Xg5lh47Tl8n9Ni3zuMK-9gc2IlGYvhtYA"
                alt="Professional detailer applying ceramic coating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
