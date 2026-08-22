import React, { useState, useEffect, useRef } from 'react';
import { companyData } from '@/data/company';

export const GalleryPage: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [hoveredServiceImg, setHoveredServiceImg] = useState<string>(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ksa6fUrinxXOO-PTzjCm8jJmiNYsiJRvkAy7-jNcvcQzzuUzeZBwi7-QWcAiLLWzobNUTunFckyzqF1GslRmuKtc_yItmJVruWB7BKsXRfxpKJYGy0QiBpLSAxqV0ALfmfdY8tatCdbDRc2CXK-Wv_0UT6MyZq739bAj0BPI_rCcu-lnBdx06Iv8xCmb2262tF_2jrru-HDd0GOvvZ2DrGuxIB_0eaaOL-cAYjwvjlhNzITXBuy-"
  );
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    document.title = "TMR CAR CARE — GALLERY";
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const servicesList = [
    {
      id: "01",
      title: "Paint Correction",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: "02",
      title: "Ceramic Coating",
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072",
    },
    {
      id: "03",
      title: "Interior Restoration",
      img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: "04",
      title: "PPF Installation",
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  return (
    <div className="w-full bg-[#050505] text-[#F5F4EF] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* SECTION 01 — GALLERY HERO */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-end pt-32 pb-16 px-5 md:px-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-12 max-w-[1360px] mx-auto w-full h-full">
          {/* Dominant Primary Image */}
          <div className="col-span-12 lg:col-span-9 h-full relative overflow-hidden opacity-80 mix-blend-lighten">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB8-mtuWs_33gvnOrRaNDTR4YyV9T3C_y-4QYhgVf0_mRedVEKJA9fIj4AXnsyqHJJ4xCOK3yIdzYq94oFWuNFZxedEPKsdEW1o-7YIUTlL_oW3Yz2IiQV9DPUUn7kIwlOYnyO74amur78mOBBN8Ep9cKDF1QBI2b1yqFG4yjJHM76nTAlJVqDPAa8MpPMix6bs_e7H1VgeaiHF-Hz8fWJRAC3nYl3Q7N3CYG9xjP3xfilQ8IfCGNY"
              alt="High gloss sports car detailing result"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>

          {/* Secondary Overlapping Detail Image */}
          <div className="hidden lg:block col-span-5 absolute right-0 top-1/4 h-[550px] w-[40%] z-20 overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2rPw69AGhqA5CQz5P-r4aL23G0dz-hi4GgnsscDG6FrTWm_FkeQAGqWNvukXn4fay21ktjzqP1L4Sqi_qEmKtQbBDbvHLhgdnXndxMbdUC_2uz_M0fqi-6HK8EvEpkX3TK_dB9DsPcm6d5dwNxWXU6MytreHqvYVVo5Hq9tN0lIdlpPXwEsuQcSK8eJU6slObyIc8rKvIgV9Hs5K3L5lCqEK2CN2QOyiaiY-LthezhhrJfEIlZlgb"
              alt="Macro light audit inspection detail"
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF4B00] m-4" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 max-w-[1360px] w-full mx-auto flex flex-col lg:flex-row items-end justify-between gap-12 mt-auto">
          <div className="w-full lg:w-7/12 flex flex-col space-y-6">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              01 / GALLERY
            </div>

            <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl md:text-[88px] text-white leading-[0.9] tracking-tighter uppercase">
              THE WORK, <br />
              IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">frame.</span>
            </h1>

            <p className="font-manrope text-base sm:text-lg text-[#D8D8D5] max-w-md border-l pl-4 border-white/20 leading-relaxed font-normal">
              A visual archive of TMR Car Care's detailing, protection and uncompromising automotive craftsmanship.
            </p>

            <div className="pt-4">
              <a
                href="#motion"
                className="inline-flex items-center font-bold text-xs text-white tracking-widest uppercase group hover:text-[#FF4B00] transition-colors"
              >
                <span>EXPLORE THE WORK</span>
                <span className="ml-2 text-base group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE WORK IN MOTION */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10" id="motion">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="flex flex-col space-y-4 mb-12">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              02 / THE WORK
            </div>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              THE WORK IN <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">motion.</span>
            </h2>
            <p className="font-manrope text-sm sm:text-base text-[#D8D8D5] max-w-md border-l pl-4 border-white/20">
              A moving archive of detailing, protection and automotive care.
            </p>
          </div>

          {/* Horizontal Track Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none">
            {/* Frame 1 */}
            <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group overflow-hidden border border-white/10 bg-[#111111]">
              <div className="aspect-[16/9] w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlb5C-u9xddnVbHf-ZpqH_e-P3JwLAwks6K4D2rjCmd0UDaUI7U_A69oZUp2p7WdOd9_v1dw04eAyorlWgVe-fjaLr6g1TMAdWmOUYWAKSCwGE0ymS4TKjiSZY3-xrB4Tua7-OwsmvYw2ZukCwKa0o-CXucMf-s_CYKHdF44QDrx-Db3fWhSEu_GfFC1ZjzyDtoUyL7FP80qsrhS-J8sBFLExtjWDA8bA7j_DU6WDU8ZCZ8RHwrrnG"
                  alt="Paint Refinement study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 bg-[#111111]">
                <span className="font-bold text-[10px] text-white tracking-widest uppercase">
                  01 / PAINT REFINEMENT
                </span>
              </div>
            </div>

            {/* Frame 2 */}
            <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group overflow-hidden border border-white/10 bg-[#111111]">
              <div className="aspect-[16/9] w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdqqs-4hWgkrSXcf9dkfIOvnmAEoI17QE6Ff2OSfN8iNrlzbl7T0vcw2QIJwA0lSvXPHv2LBt0Sz9I5fp5XuJKJ6eE-zO4ld4SFTD_zteRI_hqJuk8qpy1ooaRpphcFttIa6Dttk1XFCAW0dstKoZC2NXVMN-E67fjJzWbg5BOAg7fM10GuUmDCfachF19VwaQdAdT32UVUn0HdEVt1Y4YmJg7gZjFVRxZpaDuDh9-fB-Y3ce3b35Z"
                  alt="Ceramic Study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 bg-[#111111]">
                <span className="font-bold text-[10px] text-white/50 tracking-widest uppercase">
                  02 / CERAMIC STUDY
                </span>
              </div>
            </div>

            {/* Frame 3 */}
            <div className="min-w-[85vw] sm:min-w-[500px] md:min-w-[650px] snap-center flex-shrink-0 relative group overflow-hidden border border-white/10 bg-[#111111]">
              <div className="aspect-[16/9] w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttEpryTXpHSqZ3iWGAwBZwb24J6d7ofXMqzxAiAHspfiQoU-LuvRzO6NtMTTXPoNQsUgim3UwQ05VF3VjuqHpPx8aH-jkJgMi9jka4WUkxA27ROb1x35pEU7kLVdkYbzav2EZK1gQGPOJoLUE1CM8Wj_K9T7y_wcTkc2FFU53D_6XZWXperTEypNSOrBikRSr9pbMvzC-yEytd85X7U6nrb--4QzagGDOYGYuAUygPd2tjzeq0HML"
                  alt="Interior Precision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 bg-[#111111]">
                <span className="font-bold text-[10px] text-white/50 tracking-widest uppercase">
                  03 / INTERIOR PRECISION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — SIGNATURE WORK */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            03 / SIGNATURE WORK
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-white uppercase tracking-tighter mb-12">
            <span className="font-editorial italic font-normal text-[#FF4B00] lowercase pr-2">Signature</span> WORK.
          </h2>

          <div className="relative w-full min-h-[500px] sm:min-h-[700px]">
            {/* Dominant Image */}
            <div className="absolute right-0 top-0 w-full md:w-[70%] h-[400px] sm:h-[600px] overflow-hidden border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsD9SwXDLg3n9CQXzzo9uTjunwC-xEOYyPeLaCoRWa__kbCCxsY73J4feuQZJFv6d7EbaKlnOzLqIFp3Nyf6w1NT6pkUZMia37vOLqSyDj2GEX8vvoyW6lS2IdJ2ebyVIZcL5xrfQi8v4p_wbjUvBskM4DVGgHlJA-fQlGG8CTf8BGsyHQNPo_lpO5JWjqd_mZfmeBBvyJWgikR0cLrIk5fIwoYL5nM4qx8jEao0b4e_b7rSWIdQX"
                alt="Signature Detail Work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute left-0 top-[25%] w-[80%] md:w-[45%] h-[300px] sm:h-[420px] z-10 overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-D8_MROHQEciDTd6rWNoDtr5Br-lWK2S2j_785jxOeMDrjSetLV8ujRsnEvT568vug32n_fK8UT_BEzQ_v2Ahm8lPzxUf_nvBpcVbjCk2Al_1mcCX4I-ISBoXNOKHrkcO2yi9ityXVbl1GkHgYA_wpjCvKgBaiex6ZicxlIoWTvjp6UxJpc7GZkRX6C_lQPxflqKvD3yzeFx5dfIR1eUXQ_27sW8toagSlehi7u6d1MS1uMKt8ya"
                alt="Signature Ceramic Coat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DETAIL / MACRO */}
      <section className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            04 / DETAIL
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-7xl text-[#111111] uppercase tracking-tighter leading-none mb-16 text-center">
            DETAIL CHANGES <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">everything.</span>
          </h2>

          <div className="relative w-full h-[500px] sm:h-[700px] flex items-center justify-center">
            <div className="w-[85%] md:w-[60%] h-[80%] overflow-hidden relative shadow-2xl z-10 border border-[#D8D8D5] group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADaJAruM7G0wRfflrKpqGKwOR-oXwr-lJodnXYqVJ59VlQ959L7jArbhRE39fziHgoUB5XO9lyuLBnKPYDWI6mreyCjRaATnqok-fPMpneC8mWSJu-sB6L2OzZDWYVOy2mgDLhMfBUVUkJmw-Bj1inM9dA-F07EFit036USwjnImMQ9GQGRPDBI-DJrrkmyM4QEGw_GR4OUpoPphrEVT8pBzaoZQ1C5Pvrf4tzJtrv9rr_80YuNAXn"
                alt="Macro Paint Reflection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TRANSFORMATION (BEFORE / AFTER INTERACTIVE SLIDER) */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden min-h-[650px] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 mb-8 flex justify-between items-center">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            05 / TRANSFORMATION
          </div>
        </div>

        <div className="text-center mb-8 px-5">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tighter leading-none">
            FROM CONDITION TO <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">finish.</span>
          </h2>
          <p className="text-xs text-[#858585] mt-2 tracking-widest uppercase">Drag slider to reveal before / after</p>
        </div>

        {/* Interactive Slider Stage */}
        <div
          className="relative max-w-[1200px] mx-auto aspect-[16/9] w-full overflow-hidden cursor-ew-resize border border-white/10"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8hcseQYUUnUI0q20tNGed5MR6LmK9dwieR5Odz-Jo7YovQ1eUuVpiecxlFKwZBT9RF3AGKmQ4ZmCqXijRLZ_O7YKrECSHrjR340k6KuUlA4ASxEOTeTaCsm11-3ZntypMx7DqiyE9TWFivnzxFbapYLBKdg_5wapgfsMvN9bjDaEmHRJyn3KOUhFW4FeoPwUU2D5FQUI67H5ugWphUaXRAdiMmXhikIir-dTO9-33nUuxu1_zn0nF"
            alt="Before condition paint swirls"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc0JgHuLft8felwzq5Aogb6gnplgoi72Mf7hFSvl66wz3YnZWXbAnpCMP50ZZQMOl8YyK4OcAbvExMIr7fvPkXUwC1JQaGh_LEjPjslZEKlx-M6MrtpVzW7iVK-zcS_Zh1DE-BzGBjd_VaBQjQDC0fe-b-LAyaesrGqd1Z26xdQDCPD9KrTRXrukMh3GN9e9ZN1T-QvSnogeMdoEg7-wlfiC3RGSwm23lKhNUlaFB11ki2xmE6xX5v"
              alt="After paint correction flawless mirror finish"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#FF4B00] z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF4B00] text-white flex items-center justify-center text-xs font-bold shadow-lg">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — SERVICES IN FRAME */}
      <section className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 relative">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-12">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            06 / BY SERVICE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Rows */}
            <div className="col-span-12 md:col-span-6 space-y-4">
              <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] mb-8">
                THE WORK, <br />
                <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">by service.</span>
              </h2>

              <div className="flex flex-col border-t border-[#D8D8D5]">
                {servicesList.map((svc) => (
                  <div
                    key={svc.id}
                    onMouseEnter={() => setHoveredServiceImg(svc.img)}
                    className="group flex items-center justify-between py-6 border-b border-[#D8D8D5] cursor-pointer hover:bg-white px-4 transition-colors"
                  >
                    <span className="font-bold text-xs text-[#FF4B00] w-8">{svc.id}</span>
                    <h3 className="font-manrope font-bold text-xl sm:text-2xl uppercase flex-grow group-hover:text-[#FF4B00] transition-colors">
                      {svc.title}
                    </h3>
                    <span className="text-xl text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Preview Stage */}
            <div className="col-span-12 md:col-span-6 h-[350px] sm:h-[500px] border border-[#D8D8D5] bg-[#111111] overflow-hidden">
              <img
                src={hoveredServiceImg}
                alt="Service preview"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — THE TMR ARCHIVE */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            07 / THE TMR ARCHIVE
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight mb-12">
            THE TMR <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">Archive.</span>
          </h2>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 h-[350px] sm:h-[480px] overflow-hidden border border-white/10 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcEqmR99aQmy_JCjzhQxygB0uxT8P3Hbu_Qi16dBiUIqb4VgauRxDUoYP2whEvuC09xjrSU4pIP27ROmF4-1MuoF3cuhlgwB6PaJhxFjQRDtSDlLhbDVlbxbeIa7a1fuqXVWzIvDAPl7_HYIINY14C37cmbz-Yl3ecGXQqqg9xgjh9AwKrWqT2hzaB0_Dmh-_jrt_XdXo0PA_ckrHCtpGsjcN3SPSXPS5nZRlUP54h7sW4E40R9xHr"
                alt="Archive 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-12 md:col-span-4 h-[350px] sm:h-[480px] overflow-hidden border border-white/10 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC27tKraASMFzFKuUTqRr-7lzZyvoW6tc1e-cc_a3mKF0o1Fqlmy0NXrBMui7nomnrkdVrBpeeMPvFp9ZlbLLg_XM-9xLiF7WmeZLwV-e2ZO1eWiUwaOp-rmPboDG8YV4J5_EqVDZ3AA4W9fZu7XJT_UMdxELXEMDz4iSVoSj5xQnqzZa8Ug97dSTexArk2eyOkNWFTXOKM-c_WYyCtKC59s5wyuqz-kS9EZxQAeco-L5Qr15lUhsmj"
                alt="Archive 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — SHOWROOM */}
      <section className="relative bg-[#050505] py-20 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center mb-6">
            <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
            08 / SHOWROOM
          </div>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight mb-12">
            BEHIND THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">work.</span>
          </h2>

          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7 h-[380px] sm:h-[550px] overflow-hidden border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoVRw5hup9rsU6bmGNihsq8s5zyxn3tsHAbiz_AeOXIdU0LfejIpk7bbgD8Y2wcwiwq7qgrAd-FHInYtirxIslxrXFVigAYnq3Diu7pdQS9W4LO1bhHZi2MD7xpt4HCIJ1W2gBcjDCIwRQPREKOXzCMHajtbJl4-e6wCNVMs_Zc_g4ehDv_UXGwO8NiYEwKEXdVNS641uSkwk7v3h7IZJQrd8MhIYT6e0W8rkwQLiZwG2A6niqG4EG"
                alt="Workshop Bay"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
              <div className="h-[250px] overflow-hidden border border-white/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQdRixaW4XJxgp0i53xz62dOVGGZMoDmzkL1hC4EoiOSbp9wkKbqmcAM1bTbxeE_PJut0_EYEWepatduYRrzK_ew46PZBPe67c2VvYMiPV8AYxjJceKINgPPq1heyocLjovfJ3orD-g_VC4j8Kx-KkaQXwUJosWQqdo74-vozgRMrV2DRwmCrnlFdfRnC_zU5yzziQcnizS4iUpM-nh85ZWWCe8djVCfp2ao_4yHH92qrK9pDn7WMy"
                  alt="Tools Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — VISIT */}
      <section className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden text-[#111111] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="font-bold text-xs text-[#858585] tracking-widest uppercase flex items-center">
              <span className="w-12 h-px bg-[#FF4B00] mr-4 block" />
              09 / VISIT
            </div>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              SEE THE WORK.<br />VISIT <span className="text-[#FF4B00]">TMR.</span>
            </h2>
            <div className="space-y-1 text-sm sm:text-base text-[#5f5e5e]">
              <p className="font-bold text-[#111111]">Tiruppur, Tamil Nadu</p>
              <p>{companyData.address.street}, {companyData.address.city}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Visiting%20TMR%20Studio`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] transition-colors"
              >
                WHATSAPP TMR →
              </a>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="border border-[#111111] text-[#111111] px-8 py-4 font-bold text-xs uppercase tracking-widest text-center hover:bg-[#111111] hover:text-white transition-colors"
              >
                CALL TMR →
              </a>
            </div>
          </div>

          <div className="h-[400px] sm:h-[550px] overflow-hidden border border-[#D8D8D5] shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoP49MCpRS9UJoKPjDAjmcShcGcukxlYkt8tSe6V6Sn_Ef9vIECsIUs2s_9uE7qGGHqYfzyBzVT-yKx6BYQGA-XpLivEsfgWVdlJ3o2Fbd5ipckWqw0x1ZMJG3RmFKqb_-hmCGggljoPRwB-ZkSGPSU5M2c7fNtpx04lmNjDo0kO2ITw_WH2z_Z2wp252NtvRDmRnpf23awUTlqSXZKT-6g8W-G2-bBj_7AGPLU1gmBitXtyfng6nw"
              alt="TMR Car Care studio location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CALL TO ACTION */}
      <section className="relative py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-6xl uppercase tracking-tighter text-white leading-tight">
            READY TO GIVE YOUR CAR THE <span className="font-editorial italic font-normal text-[#FF4B00] lowercase">right care?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              WHATSAPP NOW
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="bg-white text-[#111111] px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-[#D8D8D5] transition-colors"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
