import React, { useState, useEffect } from 'react';
import { companyData } from '@/data/company';

export const PpfPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeZone, setActiveZone] = useState<number>(0);

  useEffect(() => {
    document.title = "TMR Car Care — PPF & Paint Protection Film Tiruppur";
    window.scrollTo(0, 0);
  }, []);

  const zones = [
    { id: 0, tag: "ZONE A", title: "FRONT BUMPER", desc: "Maximum impact shielding against high-velocity road gravel, flying stones, and bug splatter." },
    { id: 1, tag: "ZONE B", title: "FULL HOOD", desc: "Full seamless film coverage safeguarding the largest painted panel from stone chips and environmental fallout." },
    { id: 2, tag: "ZONE C", title: "MIRRORS", desc: "Protects high-exposure mirror caps from highway debris impacts and tight-squeeze scratches." },
    { id: 3, tag: "ZONE D", title: "ROCKER PANELS", desc: "Guards lower door sills and side skirts against aggressive stone kick-up from front tires." },
  ];

  const faqs = [
    {
      q: "Does PPF ruin the paint when removed?",
      a: "No. Premium films use advanced adhesives that hold firmly but release cleanly when removed by a professional, leaving factory paint untouched and in the condition it was when the film was applied.",
    },
    {
      q: "Will the film turn yellow over time?",
      a: "Modern TPU (Thermoplastic Polyurethane) films feature UV inhibitors and top coats that prevent yellowing, cracking, or blistering, unlike older generation PVC films. Our films come with a 10-year warranty against yellowing.",
    },
    {
      q: "Can I apply Ceramic Coating over PPF?",
      a: "Yes, highly recommended. While PPF provides physical protection, ceramic coating provides chemical resistance and makes the surface hydrophobic (water-repellent), making the car much easier to wash.",
    },
    {
      q: "Do you precut the film or cut on the car?",
      a: "We utilize advanced software and digital plotters to precision-cut the patterns specific to your vehicle's make and model. This ensures a perfect fit and eliminates the need to use blades near your vehicle's paint.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7zrVUcFRlL25KocrIRLEuXFyO_vqjEb-w_l4xXyzAN9lxOLwTVQnV0GMr3GHbVzSq-nz2lPXqmRrhEqajXG7PT9MyQ2JEmzXNfgF9nK-7gcrwc7aAN8dRAAA59fEYFrokYV2b6oX_2KIlS2HY152LxgjwW8e7ewu7siL6nSd8N-aai7y-YY3SghgTxR6f1nVGYfsgL7-gWFWz_ho5ziT6FH5TZBTjXwrQcddS8g2YmIIkj0Kl4EA"
            alt="PPF Application on luxury car at TMR Car Care Tiruppur"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#111111]/40" />
        </div>

        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-10 lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#F5F4EF]">
                01 / PROTECTION
              </span>
              <div className="h-px w-12 bg-white/30" />
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00]">
                PPF / TIRUPPUR
              </span>
            </div>

            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-[80px] text-[#F5F4EF] uppercase leading-[0.9] tracking-tighter">
              THE INVISIBLE<br />SHIELD
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-xl leading-relaxed">
              Paint protection film designed around preserving the appearance of your vehicle's painted surfaces against road debris, stone chips, and environmental damage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Enquiry%20regarding%20PPF%20Installation`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-white hover:text-[#111111] transition-colors"
              >
                WHATSAPP TMR →
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=PPF%20Coverage%20Packages`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-white hover:text-[#111111] transition-colors"
              >
                ENQUIRE ABOUT PPF →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. MATERIAL SECTION */}
      <section className="py-20 sm:py-32 w-full max-w-[1360px] mx-auto px-5 md:px-16 border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Editorial Text Left */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="flex items-center space-x-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
                02 / MATERIAL
              </span>
              <div className="h-px w-12 bg-[#D8D8D5]" />
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] leading-tight">
              A LAYER YOU<br />BARELY SEE.
            </h2>

            <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
              Self-healing thermoplastic polyurethane (TPU) precision-cut to fit every contour. It absorbs impact so your factory clear coat doesn't have to.
            </p>

            {/* Technical Specs List */}
            <div className="space-y-4 pt-4">
              <div className="border-t border-[#D8D8D5] pt-4">
                <span className="font-manrope font-bold text-xs uppercase text-[#111111] block mb-1">
                  Thickness
                </span>
                <span className="font-editorial text-xl italic text-[#858585]">
                  8 MILS / 200 MICRONS
                </span>
              </div>
              <div className="border-t border-[#D8D8D5] pt-4">
                <span className="font-manrope font-bold text-xs uppercase text-[#111111] block mb-1">
                  Finish
                </span>
                <span className="font-editorial text-xl italic text-[#858585]">
                  HIGH GLOSS OR MATTE
                </span>
              </div>
              <div className="border-t border-[#D8D8D5] pt-4">
                <span className="font-manrope font-bold text-xs uppercase text-[#111111] block mb-1">
                  Property
                </span>
                <span className="font-editorial text-xl italic text-[#858585]">
                  SELF-HEALING (HEAT)
                </span>
              </div>
            </div>
          </div>

          {/* Image Stage Right */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 relative border border-[#D8D8D5] bg-[#111111]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQxNXgg6EJJMop_4MPcNrRye5Vjv2MwUOOhJbjPJzBEo7d8DHbPf8yXstrOs33_gN-JWcRjQUGp5LHc__irGJPx8cvmvU7ueYx1HlgW0Uxa1Gtzqr6Oc_Dm5MBqLqziKzZOAbLyvZ8IjwPSBTnfklICKvVwiQA8AfJgMi2sWOL77peX_RLmrZBiOF0kKkXCZei_0s0SfNcsXyphSJf6SjwCzBDyCMr-yKjrwZaBG0PV_0LdbM38LNH"
              alt="Clear PPF TPU film thickness detail at TMR Car Care"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute top-1/4 left-[10%] hidden md:flex items-center space-x-2">
              <div className="w-16 h-px bg-white" />
              <span className="font-manrope font-bold text-[10px] text-white uppercase tracking-widest bg-black/50 px-2 py-1">
                SURFACE
              </span>
            </div>
            <div className="absolute top-1/2 right-[10%] hidden md:flex items-center flex-row-reverse space-x-reverse space-x-2">
              <div className="w-24 h-px bg-[#FF4B00]" />
              <span className="font-manrope font-bold text-[10px] text-[#FF4B00] uppercase tracking-widest bg-black/80 px-2 py-1">
                FILM EDGE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. APPLICATION (PROTECTION IN MOTION) */}
      <section className="py-20 sm:py-32 bg-[#111111] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              03 / APPLICATION
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            PROTECTION IN MOTION
          </h2>
        </div>

        {/* Track Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-5 md:px-16 pb-8 scrollbar-none">
          {/* Panel 1 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group border border-white/10 bg-[#050505]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL3Xs8fL9-GHUf1Tq8kDdmBv4iVFHTPz4KDCHqpbajMULNiPPv1W1KGEgDAsA13a9qdeDiBHMf9txsnJagm1hPs9Hz_6VxB1bUryNlTXmKCc2_fLVYcpPQQrPdiW6MqHpWw1wDOYfGy92ca6zGd2BIStc5ynP9y5QpSPsrI6LU2jmLJB8VyeZ3i1rQ-f7cnSfiIDzm2uy98kFPr32SMothg2uxSIbTe2HCb09hcMhbbxd7WGDbT2mo"
              alt="PPF surface prep step"
              className="w-full h-[320px] sm:h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="p-6 bg-[#111111]">
              <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-1">01</span>
              <h3 className="font-editorial text-2xl text-white">SURFACE PREP</h3>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group border border-white/10 bg-[#050505]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1QIFR3dFlqLvab6Cg7Fh9YissSHdti1cxJ1SFv8RGfKi7xOtuowl4iOdhFDwOmrqJDCp537h3KFgzvm_c7T4w08tnDSPWVc33yl9mUCXnNAB6vS-YlDYSqaU_xkS0nalUmt0ZQwBQjk2XsFJKcpc9FFupBp13fqlbCuhuwK4O_keD-WYWPzirmT48jkUkE_5hWbCsYY1_PTCPXTyQ8KobROtOZ15uZvp4OrTQFuyXqMjI0sFjyXLt"
              alt="PPF digital pattern alignment step"
              className="w-full h-[320px] sm:h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="p-6 bg-[#111111]">
              <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-1">02</span>
              <h3 className="font-editorial text-2xl text-white">ALIGN</h3>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group border border-white/10 bg-[#050505]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr7tae3PgN0i9KjKkZbV4LxLkaxwwtf4rTPogzsktFGAagxILX_Vu_XAl8lnvETLeddThNIPFbs7WkFTR29JzPgLRPP3IfnugSCF3ew9nbfqwXwe-S7HkL9x_x4Gz5e-L0E6HCqeG7Hn7PR3QnaKM63ZQ60DMZYrEhjkg4ZYxas1VIDPVokclitdlUaZr8Xuoe4RAMTnm8q_YBUhGA0rjmMpAg9AlH-pYrw7QV1vYDY5XbjenqbqRx"
              alt="Squeegee slip solution application step"
              className="w-full h-[320px] sm:h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="p-6 bg-[#111111]">
              <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-1">03</span>
              <h3 className="font-editorial text-2xl text-white">APPLY</h3>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group border border-white/10 bg-[#050505]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc6YPJ9odIGJrzDlcda6LaJ2qCQ-FYyobPwvlnNNxnscq0DbWhGZ_9dQqtghkyBHtNWnCalX9Hls10yGTWWwcUSRfYAeXjGM50H1MhT293xKU8ZtemSDVzJ9DfbpgFjtjyok742SONKLrhHTiMEsBZGfv7dELiHOaTRuX4gfwc7qsfAj_WVRoPQ3S9Jpkv9tTKLPYbzEozey3RROYgo_5gc0YyNUPsYkBOWAW4SzH362w9JTzdiqX7"
              alt="Final hand tucked edge protection finish"
              className="w-full h-[320px] sm:h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="p-6 bg-[#111111]">
              <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-1">04</span>
              <h3 className="font-editorial text-2xl text-white">PROTECT</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 04. COVERAGE ZONES */}
      <section className="py-20 sm:py-32 w-full max-w-[1360px] mx-auto px-5 md:px-16 border-b border-[#D8D8D5]">
        <div className="grid grid-cols-12 gap-8 mb-12 items-end">
          <div className="col-span-12 md:col-span-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
                04 / COVERAGE
              </span>
              <div className="h-px w-12 bg-[#D8D8D5]" />
            </div>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              PROTECTION<br />WHERE IT MATTERS
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-manrope text-base text-[#5f5e5e] leading-relaxed">
              Strategic application targets high-impact zones. Choose from track packs to full vehicle coverage, tailored to how you drive.
            </p>
          </div>
        </div>

        {/* Hotspot Map Stage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 relative aspect-[16/10] bg-[#111111] overflow-hidden border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUF5qDfLdyapIsIK5eboZIq2PdujTbq0-xDf3IrzzisXCPz5Ttrb5zGPfVB9Lm5wXDqJ6RJ-yBIM3yGF4PCZQMq2Xh086eHmX2xjE6CGJA8uo0ruelO6y8Y9h68DfACC0IxK3aoIAYqlt1XOuwOFVHEZIFRovCK1ZaSu3QXW3lO3I3gXbJdzPFs21_X-fSv_CMrTVsBayZpcrIytw7Gss8zm5gMtk_m_4R4DUG08Rz7pk_LstQXR88"
              alt="PPF coverage zones vehicle map"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>

          <div className="md:col-span-4 flex flex-col justify-between space-y-4">
            {zones.map((z, idx) => {
              const isActive = activeZone === idx;
              return (
                <div
                  key={z.id}
                  onClick={() => setActiveZone(idx)}
                  onMouseEnter={() => setActiveZone(idx)}
                  className={`p-5 border border-[#D8D8D5] cursor-pointer transition-all ${
                    isActive ? "bg-[#111111] text-white border-[#111111]" : "hover:border-[#111111]"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF4B00] block mb-1">
                    {z.tag}
                  </span>
                  <h4 className="font-manrope font-bold text-base uppercase mb-1">{z.title}</h4>
                  <p className={`text-xs leading-relaxed ${isActive ? "text-[#D8D8D5]" : "text-[#858585]"}`}>
                    {z.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05. PPF VS CERAMIC */}
      <section className="py-20 sm:py-32 bg-[#fff1ed] w-full border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              PPF OR CERAMIC?
            </h2>
            <p className="font-manrope text-sm sm:text-base text-[#5f5e5e]">
              Understanding the distinct roles of physical film versus liquid surface treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PPF Box */}
            <div className="bg-[#F5F4EF] p-8 border border-[#D8D8D5] space-y-6">
              <h3 className="font-editorial text-3xl text-[#111111] border-b border-[#D8D8D5] pb-4">
                PAINT PROTECTION FILM
              </h3>
              <p className="font-manrope text-sm text-[#5f5e5e] leading-relaxed">
                A physical, 8-mil thick polyurethane barrier designed to absorb impacts and prevent physical damage to the paintwork.
              </p>
              <ul className="space-y-3 font-manrope font-bold text-xs uppercase tracking-wider text-[#111111]">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">✓</span>
                  <span>Stops Rock Chips &amp; Scratches</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">✓</span>
                  <span>Self-Healing Properties</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">✓</span>
                  <span>10-Year Warranty Typical</span>
                </li>
              </ul>
            </div>

            {/* Ceramic Box */}
            <div className="bg-[#F5F4EF] p-8 border border-[#D8D8D5] space-y-6">
              <h3 className="font-editorial text-3xl text-[#111111] border-b border-[#D8D8D5] pb-4">
                CERAMIC COATING
              </h3>
              <p className="font-manrope text-sm text-[#5f5e5e] leading-relaxed">
                A liquid nanoceramic treatment that bonds at a molecular level, providing unmatched gloss, hydrophobicity, and chemical resistance.
              </p>
              <ul className="space-y-3 font-manrope font-bold text-xs uppercase tracking-wider text-[#111111]">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">✓</span>
                  <span>Extreme Hydrophobicity (Water Beading)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">✓</span>
                  <span>UV &amp; Chemical Resistance</span>
                </li>
                <li className="flex items-center gap-3 text-[#858585] line-through">
                  <span>✕</span>
                  <span>Does Not Stop Rock Chips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06. MAINTENANCE */}
      <section className="py-20 sm:py-32 max-w-[1360px] mx-auto px-5 md:px-16 border-b border-[#D8D8D5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
                06 / MAINTENANCE
              </span>
              <div className="h-px w-12 bg-[#D8D8D5]" />
            </div>

            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
              PROTECTION<br />NEEDS CARE TOO.
            </h2>

            <div className="space-y-6 pt-4">
              <div className="border-t border-[#D8D8D5] pt-4">
                <h4 className="font-manrope font-bold text-xs uppercase tracking-widest text-[#111111] mb-1">
                  The First 7 Days
                </h4>
                <p className="font-manrope text-sm text-[#5f5e5e]">
                  Do not wash the vehicle. Allow the film to fully cure and moisture to evaporate from beneath the surface.
                </p>
              </div>

              <div className="border-t border-[#D8D8D5] pt-4">
                <h4 className="font-manrope font-bold text-xs uppercase tracking-widest text-[#111111] mb-1">
                  Washing Protocols
                </h4>
                <p className="font-manrope text-sm text-[#5f5e5e]">
                  Use the two-bucket method. Avoid automated car washes with brushes. Keep pressure washer nozzles at least 36 inches away.
                </p>
              </div>

              <div className="border-t border-[#D8D8D5] pt-4">
                <h4 className="font-manrope font-bold text-xs uppercase tracking-widest text-[#111111] mb-1">
                  Self-Healing Activation
                </h4>
                <p className="font-manrope text-sm text-[#5f5e5e]">
                  Minor swirls and scratches will vanish when exposed to heat. Leave vehicle in direct sunlight or use warm water to activate.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 border border-[#D8D8D5] bg-[#111111] relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb09WMnWECwE3V43yM9gv_JE8rwBVgLuEg9T-BrUOqh2Pc2A653_RnkqN82fIs1TlsdfWpZxjct0u8qC4i0ZSkudPKTXAilih2z5O3BY3xGUd9OCmRgQ21PY5HBQWQUzetVbF_XGdGGqRgmfkd24fNDu45lj0XO9Iba5cxsDovRl-ZDRKmS1TFI3OKzgDDtDutSoBJEfs6VYkst5rjRMVakH6Z6Tc3iq_jgk3L3BXqv4jHVoxbjjXj"
              alt="Maintained PPF surface clarity at TMR Car Care"
              className="w-full aspect-[4/5] object-cover opacity-90"
            />
            <div className="absolute bottom-0 right-0 bg-[#111111] text-white p-6 border-t border-l border-[#D8D8D5]">
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest block text-[#FF4B00]">
                LIFESPAN
              </span>
              <span className="font-editorial text-3xl italic">10 YRS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07. FAQ SECTION */}
      <section className="py-20 sm:py-32 max-w-[800px] mx-auto px-5 md:px-0 border-b border-[#D8D8D5]">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
            PPF QUESTIONS.
          </h2>
        </div>

        <div className="space-y-0 border-t border-[#D8D8D5]">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-[#D8D8D5]">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="font-manrope font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-2xl text-[#FF4B00] transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6">
                    <p className="font-manrope text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 08. FINAL CTA */}
      <section className="py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00] block">
            SECURE THE FINISH
          </span>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            READY TO PROTECT<br />THE FINISH?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Booking%20PPF%20Installation`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              WHATSAPP TMR
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-white text-white px-8 py-4 font-manrope font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              CALL TMR
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
