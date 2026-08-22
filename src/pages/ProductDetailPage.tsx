import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { companyData } from '@/data/company';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "3M™ Perfect-It™ EX AC Rubbing Compound | TMR DETAILING";
    window.scrollTo(0, 0);
  }, [slug]);

  const faqs = [
    {
      q: "What type of pads are recommended for application?",
      a: "For optimal cutting power and finish, we recommend using a 3M Perfect-It Foam Compounding Pad or a high-quality wool pad, depending on the severity of the defects being addressed.",
    },
    {
      q: "Is this safe for clear coats and single-stage paints?",
      a: "Yes, the EX AC formula is explicitly designed to be safe and highly effective on all modern clear coats, as well as classic single-stage paint systems when used correctly by a professional.",
    },
    {
      q: "Does it contain fillers?",
      a: "No, this is a true abrasive compound. It permanently removes scratches and defects rather than temporarily filling or hiding them, ensuring long-lasting results.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#F5F4EF] text-[#111111] font-manrope selection:bg-[#FF4B00] selection:text-white pt-20">
      
      {/* 02 / PRODUCT HERO */}
      <header className="relative w-full pt-16 pb-24 sm:pb-32 overflow-hidden border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-6 flex flex-col z-10">
              <div className="mb-6 flex items-center gap-3 text-[#858585] font-bold uppercase tracking-wider text-xs sm:text-sm">
                <Link to="/products" className="hover:text-[#FF4B00] transition-colors">
                  PRODUCTS
                </Link>
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
                <span>3M</span>
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full" />
                <span>Compounds &amp; Polishes</span>
              </div>

              <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-[64px] text-[#111111] mb-8 leading-tight tracking-tighter uppercase">
                3M™ Perfect-It™ EX AC Rubbing Compound
              </h1>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Inquiry%20regarding%203M%20Perfect-It%20EX%20AC%20Rubbing%20Compound`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#FF4B00] transition-colors inline-flex items-center gap-2"
                >
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                  <span className="text-base">↗</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#111111] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#111111] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <span>WHATSAPP TMR</span>
                  <span className="text-base">↗</span>
                </a>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className="col-span-12 md:col-span-6 relative mt-8 md:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-square bg-white border border-[#D8D8D5] overflow-hidden flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtDNeIeaCXftujf48uGsi1X5vwPAIIMY-tAlkaS2K2TXi1lE-g7UoMyb3a6Co9_4EYe9_XtIhuhhO-lWX1Jj-YOjKvQF8P8L5z8Yuu_g_Y0_NC4Xu87cN9GK-43AzLQwPuZRK0L0g257KYJPJ5h60ZE09lcN0drHYkBCtfV9jSWDkBTcwe3Z4r4op-LsbXQJd2QZFBfSGEmkBlWkqPR4k6wviL7oiz8t3IMKYgzjVw6kt0WML5mbiLDJi0"
                  alt="3M Perfect-It EX AC Rubbing Compound high resolution bottle"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 03 / PRODUCT OVERVIEW */}
      <section className="py-20 sm:py-32 border-b border-[#D8D8D5] bg-white">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
                What It Is.
              </span>
              <div className="w-12 h-1 bg-[#111111]" />
            </div>

            <div className="col-span-12 md:col-span-8">
              <p className="font-editorial text-2xl sm:text-4xl text-[#111111] leading-relaxed">
                The definitive solution for high-performance paint correction. Engineered to remove P1200 or finer grade sand scratches, this advanced formula delivers a flawless, high-gloss finish while drastically reducing application time and sling. It is the cornerstone of professional automotive detailing precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / VERIFIED PRODUCT INFORMATION */}
      <section className="py-20 sm:py-24 bg-[#F5F4EF] border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="mb-12">
            <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block">
              The Details.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#D8D8D5] bg-white">
            <div className="border-r border-b md:border-b-0 border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-6">Brand</span>
              <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#111111]">3M</span>
            </div>

            <div className="border-r border-b md:border-b-0 border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-6">Category</span>
              <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#111111]">Compounds</span>
            </div>

            <div className="border-r border-[#D8D8D5] p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-6">Grade</span>
              <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#111111]">P1200+</span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider mb-6">Finish</span>
              <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-[#111111]">High-Gloss</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / PRODUCT IN CONTEXT */}
      <section className="relative w-full h-[50vh] sm:h-[75vh] overflow-hidden bg-[#111111]">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLuerGKC_1ULZcPObVg8PpCBLfX_aWHLPXezoH_L7xpPXQQb-ZYzaEdS6ZUJtoZVWt8Sm7LZiytK5p3Ybb0ffrfZt6e59-PYIoY29P2352gEf0Kv2bKewzCjSC-qCRFm6Y-1bzR72-vK1zu2w23HXTJElhKGWPShqhMUl_rSoKuidJBEQCxdHnL6NHDBqOjefdqA44pdOPlh5Y_v4Pfla3tSGbU4jzT2u42hH_FVEa4kSX0_bcK1ySJt6g"
          alt="3M Rubbing compound in action at TMR Car Care"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 z-10 flex justify-between items-end bg-gradient-to-t from-[#111111] via-transparent to-transparent">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-6xl text-white uppercase tracking-tight">
            See it at work.
          </h2>
        </div>
      </section>

      {/* 06 / WHY IT BELONGS */}
      <section className="py-20 sm:py-32 bg-[#111111] text-white border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-square w-full max-w-md border border-white/20 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu76ppBIHNU6AsUvNbsOnt37wVPWAr1xhQThMWyvRy413nI6wNyEz4auNmTw9sjzvmS_Utx-q2TLm7a9hYiJBKD4AtIXyRDuRt2noQIs0qw9eEmUXQ0V_wr2FD2fLApQ2YkXQ5OYkV8xDmQgu8OckOYdADqyfeO99m0JmKbEC9G84djJnQifg4rIPaHaO85d4SXqhI_rNvsSUOCWRwkNO9CuNzpB_IcusWjxYlTG2uq1LrNXFkNBdyp1OY"
                  alt="TMR Car Care technician paint correction"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 space-y-6">
              <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block">
                Part of the TMR Workflow.
              </span>
              <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
                Engineered for absolute clarity.
              </h3>
              <p className="text-base text-[#D8D8D5] leading-relaxed">
                We don't just sell products; we integrate them into our high-performance detailing workflows. The Perfect-It™ EX AC is a critical phase in our paint correction service, ensuring a flawless foundation before final polishing and protection layers are applied.
              </p>

              <div className="pt-4">
                <Link
                  to="/services/detailing-paint-care"
                  className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-2 hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors"
                >
                  <span>EXPLORE RELATED SERVICE</span>
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 / RELATED PRODUCTS */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="mb-12">
            <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
              From the Same Collection.
            </span>
            <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
              Complete the system.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="group block border border-[#D8D8D5] p-6 hover:border-[#111111] transition-colors bg-[#F5F4EF]"
            >
              <div className="aspect-square bg-white mb-6 relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwnKcjB68PTdQRy7E-2UPEuOc9_fkmnGsyj8J__tMaBaDJI8gPu_EkYTpyEfVNG7SYLVlDblsJbocMUPWFGnn82sjC595P8cG-ydOO9TR2olB0Rfwkkl_ZPZxArQL3Y0rag6dZzCapRBUcdMnvQU4nLHhqqCTpMgpoZ3X-jKqKcqrA3FPmtgbjgdcA5IID9oF9_BLO6KTFjUXLV9FS3QvpdKq1VK4kIVVJlS36XnJh4xhBg14N0TK"
                  alt="3M Trizact Performance Abrasives"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider block mb-1">
                Abrasives
              </span>
              <h4 className="font-bold text-base text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                3M Trizact Performance Abrasives
              </h4>
            </Link>

            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="group block border border-[#D8D8D5] p-6 hover:border-[#111111] transition-colors bg-[#F5F4EF]"
            >
              <div className="aspect-square bg-white mb-6 relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4M619X4myj2a9bkv2N3cvVOsiiDAZYvSoDDO4NieTYC8Ss5l_X6RYJhqEZw-4HGeHg7l-jfkrquWHo2gREyyIOgNYlX6N5_JCPvCk7b3frttOgk41L0X0zLR8Ew82XiTwnSvYIyQ-jxFvWzkkGt7ByPB9B3jKNqmp0OF1IJykDXBuiZSDDFdg3fETn4CSKFqH06qaQGhYZuWEyMEzgdEkMCO3FLmpOw7Q8gvRerHby8PzXvtOvuRn"
                  alt="3M Quick Wax"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider block mb-1">
                Protection
              </span>
              <h4 className="font-bold text-base text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                3M Quick Wax
              </h4>
            </Link>

            <Link
              to="/products/3m-perfect-it-ex-ac-rubbing-compound"
              className="group block border border-[#D8D8D5] p-6 hover:border-[#111111] transition-colors bg-[#F5F4EF]"
            >
              <div className="aspect-square bg-white mb-6 relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC37ICfsUlWN4F9_a93BqZ7qsxXTBQRRUkBdYggRHeVVFKzpLhh7SGLtAhmUZYu5p1cgDKIrGPJqjxtaSkwZ7RBkiQSjBzQkYK84G8GNMYdPQGotWqehLwYIxA1oVueUoKEgDyNmlNeu8auE3hfjfTgx03QMJTd7F5KW94N6ybAqkECJXqix2Xmm4KIuVE4aSRUvXVKyyJhUZ40ni9kUChYj49OnT9H00B5vnV_c_VeVLsHmF0J4tQn"
                  alt="3M Perfect-It Machine Polish"
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-bold text-xs text-[#858585] uppercase tracking-wider block mb-1">
                Polishes
              </span>
              <h4 className="font-bold text-base text-[#111111] group-hover:text-[#FF4B00] transition-colors">
                3M Perfect-It Machine Polish
              </h4>
            </Link>
          </div>
        </div>
      </section>

      {/* 08 / PRODUCT FAQ */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="font-bold uppercase tracking-widest text-[#858585] text-xs block mb-2">
                Questions.
              </span>
              <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                Technical Details.
              </h3>
            </div>

            <div className="col-span-12 md:col-span-8 flex flex-col border-t border-[#D8D8D5]">
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
                        <p className="font-manrope text-sm sm:text-base text-[#858585] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 09 / PRODUCT ENQUIRY CTA */}
      <section className="py-24 sm:py-32 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
            Secure this product for your workflow.
          </h2>
          <p className="text-base text-[#D8D8D5] max-w-lg mx-auto leading-relaxed">
            Available in various sizes for professional studios or serious enthusiasts. Contact our team to confirm stock and arrange pickup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Ordering%203M%20Perfect-It%20EX%20AC%20Rubbing%20Compound`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4B00] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              WHATSAPP TMR
            </a>
            <a
              href={`tel:${companyData.contact.phone}`}
              className="border border-white/30 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors"
            >
              CALL TMR
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
