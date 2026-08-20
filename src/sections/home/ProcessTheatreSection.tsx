import React, { useState } from 'react';
import { Container } from '@/components/Container';
import { SectionNumber } from '@/components/SectionNumber';

const processStages = [
  {
    number: '01',
    title: 'ARRIVE',
    description: 'Every great finish starts with the right first look.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8cr1Efg12-NOle3puc89GzCo0eX_ixLg0zALHN8742PUWy4IkxQ9ihbs2EInrham1Hfi9FmB2ZcNIuVzo1ru_hf5r_NpKjRrzkiRRsCY_Yn-3zOfZ-AQuxoYCJQ-Enj0eV-CZ6l_jLgS0B-zLVFxSTU6Lg2JJXub2un3JVfSweRaZWIQ9K-IGY6c9yrXOCjLsn7kFYgICEeZFHDD-L2AjqjCL8otlMD-Oc7oGupcj0rAEl-7E7G2h',
    alt: 'A premium dark automotive garage at night',
  },
  {
    number: '02',
    title: 'INSPECT',
    description: 'Understand the vehicle before deciding what it needs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqw0yQ70QJlHwUDed75WXT3KXO5qZjcXshvb_vKF6E0WrSg2hXTosyeXYufu5RZI-Wq25bJfj50htC0nWgAkJOxUJ4NZJgN6yv7fJMc5uzH9EqsWGd284JccNkS9yeHGKVJXUWhcULwhsZ3ByB_T4CkkczN3SpemGj-2mZPwjdhaidCFG1emXPOoDN8EYBnQeM_HdeM4lfLND0JaXb0Q-ilvY83V32Jl0bgrJ9hGUjSZW5DZTwzmyv',
    alt: 'Professional automotive detailer inspecting car paint with LED light',
  },
  {
    number: '03',
    title: 'PREPARE',
    description: 'Prepare every surface for the work ahead.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ463qSMfdkCWneZe6i_q34Bib--fwGadaYLYPYGKSzaEdwZhzREvyBp11gkD6ub7kGWnex1lJ37wsD7PCC5T7R-mkesnOQXlHweXF01lqTqY1mfSV4l0H5UWpI2c5Yg54aF-2IIwGgUApkvJD--fYAgpOGmZ3GWlD6_7hGm7DWynoqVRTgcK-u9scg93HZ0odl23eF9VuaRaUX5nTB2jUEo8nKfWp1A8gxZbjQxXIEIN6Rskoc3YU',
    alt: 'Sports car prepared for detailing with foam and masking tape',
  },
  {
    number: '04',
    title: 'TRANSFORM',
    description: 'The detail work begins to change the vehicle.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC26ZtDDKhpG4TWMFS4BiPB91xSglt4htT89bPS_OpkdqwVkcBpX2kGYoc_ey--qZVVZfft0qpXeWJ6fYccWbaHG04WEH7K529wYhqpQEMhPnJpHcpiGdJcT76o1L1GVgT6T5FXG2ut_jS-vFp9DwUdmrL9Ao6DEgJ1l4uACTVGJjh1rDnNY-wYqWVF95irmI-jcMn1PoUMNIowPclQxcyTiUWAD9kvvCK6qwI0wRXwNkMsQMx8ruth',
    alt: 'Machine polishing and paint correction process',
  },
  {
    number: '05',
    title: 'REVEAL',
    description: 'The finished vehicle, ready to leave looking its best.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDM2nU_Ha9AYwiZwkkcPba6eCVHqmf9T8seVmju3W3iKkOGD5pPBHhuI2lpQXnE7NATt2lguwqr0K5Ij8k0bhXSThZu1lHS1Je5VcTU225Xd8buoaxgpLBnmtUj78Bm3oHw7wQDon72xSxK_MLy0sgq0IQQKBWQM5RSWDHufYxGipbdRk0--SbruB9Up3TAQrvn8gUXqIniHG7Y_7H51iXGxloLOL7NNGK-M2WF7_K1zpgZVF8fah5u',
    alt: 'Finished premium sports car in detailing studio',
  },
];

export const ProcessTheatreSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-tmr-softblack text-white py-24 md:py-section-gap relative" id="process-theatre">
      <Container>
        {/* Header Bar */}
        <div className="border-t border-white/10 pt-6 mb-12 flex items-center justify-between font-manrope font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <SectionNumber number="04" accent />
            <span className="text-white/50">/ THE PROCESS</span>
          </div>
          <span className="text-white/30">Cinematic Storytelling</span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">
          {/* Left Column (5 Cols): Editorial Navigation Rail */}
          <div className="lg:col-span-5 relative z-20">
            <div className="font-manrope font-bold text-xs text-tmr-orange mb-4 tracking-widest">
              0{activeIndex + 1} / 05
            </div>
            <h2 className="font-manrope font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase mb-8 leading-tight tracking-tighter">
              FROM ARRIVAL
              <br />
              TO FINISH.
            </h2>

            <ul className="space-y-0 w-full border-l border-white/10">
              {processStages.map((stage, index) => {
                const isActive = activeIndex === index;
                return (
                  <li
                    key={stage.number}
                    onClick={() => setActiveIndex(index)}
                    className={`py-5 pl-6 sm:pl-8 cursor-pointer transition-all duration-300 border-l-4 ${
                      isActive ? 'border-tmr-orange bg-white/5' : 'border-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <h3
                        className={`font-manrope font-extrabold text-xl sm:text-2xl uppercase transition-colors ${
                          isActive ? 'text-tmr-orange' : 'text-white/30'
                        }`}
                      >
                        {stage.number} {stage.title}
                      </h3>
                      {isActive && (
                        <p className="font-manrope text-sm text-white/70 leading-relaxed mt-1 animate-fadeIn">
                          {stage.description}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column (7 Cols): Cinematic Media Display */}
          <div className="lg:col-span-7 relative w-full">
            <div className="w-full h-[450px] sm:h-[550px] lg:h-[650px] relative overflow-hidden rounded-tmr bg-tmr-black border border-white/10 shadow-2xl">
              {processStages.map((stage, index) => (
                <div
                  key={stage.number}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23050505"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="28" fill="%23FF4B00">STAGE 0${index + 1} — ${stage.title}</text></svg>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-tmr-softblack/90 text-white px-4 py-2 text-xs font-manrope font-bold uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                    {stage.number} / {stage.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
