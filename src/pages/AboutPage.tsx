import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "TMR Car Care - About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 01 / HERO SECTION */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-center overflow-hidden pt-24 pb-16 border-b border-[#D8D8D5]">
        <div className="relative w-full max-w-[1360px] mx-auto px-5 md:px-16 h-full flex flex-col flex-grow">
          {/* Metadata */}
          <div className="flex items-center gap-4 mt-8 md:mt-16 z-30 mb-8">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00]">
              01 / ABOUT
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585] hidden md:inline-block">
              TMR CAR CARE / TIRUPPUR
            </span>
          </div>

          {/* Asymmetric Image Slices Motif */}
          <div className="absolute top-[20%] right-[10%] md:right-[30%] w-[40%] md:w-[15%] h-[300px] md:h-[450px] z-20 overflow-hidden shadow-2xl border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6aJ-8TfxR5MPEreRAKCJwyaQHA4RYUE9ugNQJ8dpdoxsHf69PyJ1TdOej9_gH9JNlxFzbg52OAm4K80KPfBKkiis3Tncec_NHNEhgQkDx1dY144MH9_tipZdqjB4yu_SWNiXMdybucpUTP8U_V3bwch7BFGdBK1HOFR6Xa16MXGr9NlDADFJ60jMEODkivivUQiLqkHWr4-3zoBCeFIsMGho1VfXHnu4RpEoxTy2tajDGLIniuCmQ"
              alt="High-end dual-action car polishing machine"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[10%] right-[2%] w-[30%] md:w-[22%] h-[400px] sm:h-[500px] z-0 overflow-hidden hidden md:block border border-[#D8D8D5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1uPRwG5NVWYCeOb59xZTqRrwuA3rI9QYkI0VNe4sqeaSsUhpT9wmq_YvWbn70RbLkWTWoxCdvf7D7S_MAnkpOM8865LxxWcpZLOkMeVeCzFkme-zTl8B9fiWtKFLufoTTRRHGGFX46-pTTjnP6jXNGscYrmdc4rMdKrHjm6wl-T0vjsBq9xuUbSsBOIoYtu0N9yu4TDz6XU2mCb0DommLZEFa78XBU55VEaitVs-4FhXJyyLJbzlF"
              alt="Sweeping curve of supercar rear fender"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>

          {/* Dominant Headline */}
          <div className="relative z-10 mt-auto md:mt-16 mb-12 flex flex-col">
            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[110px] text-[#111111] uppercase tracking-tighter leading-none">
              BUILT<br />
              AROUND<br />
              THE CRAFT.
            </h1>
          </div>

          {/* Supporting Statement & CTA */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full mt-auto pb-12 z-30">
            <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col items-start gap-6">
              <p className="font-editorial text-2xl sm:text-4xl text-[#111111] leading-tight max-w-md">
                Care isn't only about the finish. It's about the attention that gets you there.
              </p>
              <a
                href="#belief"
                className="inline-flex items-center gap-3 font-manrope font-bold text-xs uppercase text-[#FF4B00] hover:text-[#111111] transition-colors tracking-widest"
              >
                <span>DISCOVER THE TMR APPROACH</span>
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / THE BELIEF */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10" id="belief">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest">
              02 / THE BELIEF
            </span>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            <div className="lg:col-span-10 z-20">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[80px] leading-tight tracking-tighter uppercase text-white">
                WE BELIEVE THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">details</span> MATTER.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 mt-8 lg:-mt-24 z-10 relative border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLu76ppBIHNU6AsUvNbsOnt37wVPWAr1xhQThMWyvRy413nI6wNyEz4auNmTw9sjzvmS_Utx-q2TLm7a9hYiJBKD4AtIXyRDuRt2noQIs0qw9eEmUXQ0V_wr2FD2fLApQ2YkXQ5OYkV8xDmQgu8OckOYdADqyfeO99m0JmKbEC9G84djJnQifg4rIPaHaO85d4SXqhI_rNvsSUOCWRwkNO9CuNzpB_IcusWjxYlTG2uq1LrNXFkNBdyp1OY"
                alt="Macro detail of car surface"
                className="w-full h-[320px] lg:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="lg:col-span-5 lg:col-start-2 mt-8 lg:mt-16 z-20">
              <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-lg leading-relaxed font-normal">
                A vehicle is more than a machine. It is a surface, a material, a reflection of the person behind it. At TMR, care begins with attention — understanding the surface, respecting the material and taking the time to finish it properly.
              </p>
            </div>
          </div>

          {/* Brand Principles */}
          <div className="mt-24 flex flex-col border-t border-white/10">
            <div className="py-8 border-b border-white/10">
              <h3 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white/90">
                ATTENTION
              </h3>
            </div>
            <div className="py-8 border-b border-white/10">
              <h3 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white/90">
                PRECISION
              </h3>
            </div>
            <div className="py-8 border-b border-white/10">
              <h3 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#FF4B00]">
                FINISH
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / APPROACH */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-manrope font-bold text-xs text-[#858585] uppercase tracking-widest">
              03 / APPROACH
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest">
              HOW WE THINK ABOUT CARE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl leading-tight tracking-tighter uppercase text-[#111111] mb-12">
                CARE IS A PROCESS OF <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">attention.</span>
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex gap-6 items-start">
                  <span className="font-manrope font-bold text-xs text-[#FF4B00]">01</span>
                  <div>
                    <h4 className="font-manrope font-bold text-xl uppercase tracking-wider mb-1 text-[#111111]">
                      Observe
                    </h4>
                    <p className="text-sm text-[#5f5e5e] leading-relaxed">
                      Understand the surface before deciding how it should be cared for.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border-t border-[#D8D8D5] pt-6">
                  <span className="font-manrope font-bold text-xs text-[#FF4B00]">02</span>
                  <div>
                    <h4 className="font-manrope font-bold text-xl uppercase tracking-wider mb-1 text-[#111111]">
                      Care
                    </h4>
                    <p className="text-sm text-[#5f5e5e] leading-relaxed">
                      Work with attention to the material, finish and details that define the vehicle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border-t border-[#D8D8D5] pt-6">
                  <span className="font-manrope font-bold text-xs text-[#FF4B00]">03</span>
                  <div>
                    <h4 className="font-manrope font-bold text-xl uppercase tracking-wider mb-1 text-[#111111]">
                      Finish
                    </h4>
                    <p className="text-sm text-[#5f5e5e] leading-relaxed">
                      Bring the work together in a result that feels considered from every angle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative mt-12 lg:mt-0">
              <div className="relative aspect-[4/5] w-full border border-[#D8D8D5] overflow-hidden bg-[#111111]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAV4XgLI-J4LGjyNAB_HYVrwqSV_sZn9AIGZPnVt5LDHyjOk3g6Umx1a1HFg8PjwK2mCEE6D0mUJXa07F7q4946GkOd5PR6CXawjhviI0-E6UL_kGw3_dZqgzifcDF-1L4XIBXoareBrJr1k_PN2wxwXWdrb9mcRjsZ8OnGtctIxFUIzZLQPA8KlVUbKp43dhcKGmOT7nHUQtcteieZASU2erjYiKnYOgFFtMY580-G-12or-lP9V"
                  alt="Observe: Surface Inspection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / THE CRAFT */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              04 / THE CRAFT
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 relative border border-[#D8D8D5] bg-[#111111] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvaj89qN3bHgHU3YftHLoiYNRMYT-mgXeNJh9jDHwzdmj_D3rCflseXIQwLZAa8iIMBQGF3OtxlCK5e5iSHQ8vTvqUG7jccudrbCzlgoseyxZKr1kKZU1QzYlGsTmYb2BRHVsXPLg52swp8fHJ0vajjOGEvI5JzE-BOjHanaXb1owLHnr5iDIZU_75jh1EVzXTPiJuBZJ-VDYboanWzkEnQcWnfHmXrD_r7Xk02DdEbMgv0vmJFc8U6frk"
                alt="Detailing workspace studio bay"
                className="w-full h-[400px] lg:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="max-w-sm">
                <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl uppercase tracking-tighter mb-4 text-[#111111]">
                  BEHIND THE WORK.
                </h2>
                <p className="text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
                  The finished vehicle is only one part of the story. The environment, tools, materials and hands behind the work matter too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / THE STANDARD */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <span className="font-manrope font-bold text-xs text-[#FF4B00] uppercase tracking-widest">
                05 / STANDARD
              </span>
              <div className="w-16 h-px bg-white/20" />
              <span className="font-manrope font-bold text-xs text-[#858585] uppercase tracking-widest">
                THE TMR MINDSET
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl leading-tight tracking-tighter uppercase text-white">
                GOOD WORK SHOWS IN THE DETAILS.
              </h2>
              <p className="text-sm sm:text-base text-[#D8D8D5] leading-relaxed">
                A considered finish comes from preparation, consistency and attention to the small things.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col border-t border-white/10">
              <div className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-6">
                <span className="font-bold text-xs text-[#FF4B00]">01</span>
                <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight w-40">PREPARE</h3>
                <p className="text-sm text-[#858585]">Understand the surface and establish the right starting point.</p>
              </div>

              <div className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-6">
                <span className="font-bold text-xs text-[#FF4B00]">02</span>
                <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight w-40">CONTROL</h3>
                <p className="text-sm text-[#858585]">Work carefully through the details that shape the final presentation.</p>
              </div>

              <div className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-6">
                <span className="font-bold text-xs text-[#FF4B00]">03</span>
                <h3 className="font-manrope font-extrabold text-2xl uppercase tracking-tight w-40">FINISH</h3>
                <p className="text-sm text-[#858585]">Bring everything together into a considered final result.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 / PLACE (TMR IN TIRUPPUR) */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-20 sm:py-32 border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#858585]">
              06 / PLACE
            </span>
            <div className="w-16 h-px bg-[#D8D8D5]" />
            <span className="font-manrope font-bold text-xs uppercase tracking-widest text-[#FF4B00]">
              TMR CAR CARE / TIRUPPUR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-[#111111]">
                ROOTED IN TIRUPPUR.
              </h2>
              <p className="text-sm sm:text-base text-[#5f5e5e] leading-relaxed">
                A local presence built around considered automotive care.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#D8D8D5]">
                <div>
                  <span className="block text-[10px] font-bold text-[#858585] uppercase tracking-widest mb-1">
                    LOCATION
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.address.fullText}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-bold text-[#858585] uppercase tracking-widest mb-1">
                    HOURS
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.hours.weekdays}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-bold text-[#858585] uppercase tracking-widest mb-1">
                    CONTACT
                  </span>
                  <p className="font-bold text-sm text-[#111111]">{companyData.contact.phoneFormatted}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Directions%20to%20TMR%20Studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
                >
                  GET DIRECTIONS →
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-[#111111] text-[#111111] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors"
                >
                  WHATSAPP TMR →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[380px] sm:h-[550px] border border-[#D8D8D5] overflow-hidden bg-[#111111]">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvd2L9VVv7endAsuIj4_Fz1wPHLZz17fKAwAkD1JJ0KUmfuvTply1bhgBBQAp1d-E7S0OAJocybRnvDtooevJptn5MZ38T2Vn2nTpxcUYNG2j2qaJgoCnNli2bFBeQxvsMnGTDTr5OGYuxUje0WkPJ-CrFr6diCUm_5l3Mwtz6obvd1R0eAdN5fGA-fiTQ42fO_KhQDKKppmLc3bTDfLHX5vE1nM2OJ4-1vWplJuzC8Bu4ra6uPOlGu4Lw"
                alt="TMR Car Care studio location"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07 / SERVICES */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest">
              07 / SERVICES
            </span>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white mb-12">
            THE CARE WE OFFER.
          </h2>

          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "CAR WASH", path: "/services/car-wash-cleaning" },
              { title: "DETAILING", path: "/services/detailing-paint-care" },
              { title: "CERAMIC COATING", path: "/services/ceramic-coating" },
              { title: "PPF", path: "/services/ppf-paint-protection" },
              { title: "SUN-CONTROL", path: "/services/sun-control-films" },
              { title: "ACCESSORIES", path: "/services/car-accessories" },
            ].map((svc) => (
              <Link
                key={svc.title}
                to={svc.path}
                className="group flex justify-between items-center py-8 border-b border-white/10 hover:border-[#FF4B00] transition-colors"
              >
                <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white group-hover:text-[#FF4B00] transition-colors">
                  {svc.title}
                </h3>
                <span className="text-2xl text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-2 transition-all">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 08 / THIS IS TMR */}
      <section className="bg-[#111111] text-white relative w-full overflow-hidden py-20 sm:py-32 border-b border-white/10 text-center">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10 flex flex-col items-center">
          <span className="font-bold text-xs text-[#FF4B00] uppercase tracking-widest block mb-6">
            08 / THIS IS TMR
          </span>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white max-w-4xl leading-tight mb-12">
            WE DON'T JUST CARE FOR CARS.<br />
            <span className="text-[#FF4B00]">WE CARE ABOUT HOW THEY FEEL.</span>
          </h2>

          <div className="w-full h-[400px] sm:h-[600px] relative border border-white/10 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNp7DL2Z-k_wyLYxABHezoWHThdKMaIS6GQ2hFHgFMvS7Fdv5uW2i8QptWwwM-SlKxqgAlHCHNLQOqAZenS_6EJEVYceYTkFJyHD--6EZgClbF_ZYVhsvEoO1535MYRseAawIEkrZwcjASJ_zBjhiorsSDqRSxd4S-6THRu4Y8Qx3OLH4qPoSxJRoZByKCgyd-_cOJ89iocHPKP-A02XITG2_89YDgVL83NMGUlTaGLkX-fFJas5kQ"
              alt="Luxury automotive detail"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* 09 / FINAL ENQUIRY CTA */}
      <section className="bg-[#F5F4EF] text-[#111111] relative w-full overflow-hidden py-24 sm:py-32">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-widest block">
                09 / ENQUIRY
              </span>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-[#111111] leading-none">
                READY TO START THE CONVERSATION?
              </h2>
              <p className="text-base text-[#5f5e5e] leading-relaxed max-w-md">
                Tell TMR what you're looking for and we'll help you find the right service or next step for your vehicle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#111111] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#FF4B00] transition-colors"
                >
                  WHATSAPP TMR →
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="px-8 py-4 border border-[#111111] text-[#111111] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors"
                >
                  CALL TMR →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 border border-[#D8D8D5] bg-[#111111] h-[380px] sm:h-[500px] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHWeTEqor9dXcik8RaVihWYEH9PHEIIpd48eA6XBNiYCkZv_v0cT4TfN82N0cgYZJNt2I7413NWKEnXnLs2JD1nlJICvxwryWY_tUQo9cndRL6_p7X8J_aDNFWvHqi5g6hMdWt7wTHd4-BPyh9ob4I_ZmgcCiWzi2Tia_7CVMXBUS7co_KwW5zE-Xy9QFypUDZ4Wxo8hMc7rbuTNsegbIwCdClVJ3hW3djO8Fqt7q3U2RrYK0UeDKM"
                alt="TMR Workshop"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
