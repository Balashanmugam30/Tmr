import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'How long does a ceramic coating last?',
    answer: 'Depending on the specific protocol selected, our multi-stage nano-ceramic coatings provide durable hydrophobic protection, UV resistance, and mirror clearcoat depth under proper maintenance.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Do you need to keep my car overnight?',
    answer: 'Yes. Precision paint correction, clearcoat decontamination, and ceramic curing require adequate time in our Tiruppur studio bay to ensure optimal surface bonding.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'What is the difference between PPF and Ceramic Coating?',
    answer: 'Paint Protection Film (PPF) is an 8-10 mil transparent TPU layer designed for high-impact physical stone chip protection. Ceramic Coating is a liquid SiO2 matrix that cures over paint or PPF for extreme hydrophobicity, chemical resistance, and high-gloss depth.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Do you offer pick-up and drop services?',
    answer: 'Yes. We offer vehicle pick-up and drop arrangements for client vehicles across Tiruppur and surrounding regions upon advance booking.',
  },
];

export const FaqCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [openId, setOpenId] = useState<string>('faq-1');

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
      });

      if (textGroupRef.current) {
        const textItems = textGroupRef.current.querySelectorAll('.faq-anim-text');
        tl.fromTo(
          textItems,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0
        );
      }

      if (listRef.current) {
        const rows = listRef.current.querySelectorAll('.faq-anim-row');
        tl.fromTo(
          rows,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 },
          0.15
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // DESKTOP INTENTIONAL HOVER HANDLER (WITH 120MS DELAY & UNIFIED QUESTION+ANSWER CONTAINER)
  const handleItemMouseEnter = (id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setOpenId(id);
    }, 120);
  };

  const handleItemMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // CLICK / TOUCH TOGGLE HANDLER
  const handleItemClick = (id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq-section"
      className="w-full py-16 md:py-24 bg-[#F3F0EA] text-[#111111] border-t border-b border-black/10 relative overflow-hidden isolate font-intertight"
      style={{ backgroundColor: '#F3F0EA' }}
    >
      {/* SUBTLE FINE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-4 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* MAIN CONTENT: EDITORIAL 12-COLUMN FAQ COMPOSITION */}
      <Container className="relative z-20 my-auto py-8 lg:py-12 space-y-12">
        {/* EDITORIAL HEADER GROUP */}
        <div ref={textGroupRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="faq-anim-text font-intertight font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase text-[#111111] leading-[0.9] tracking-[-0.04em]">
              BEFORE <br />
              YOU <span className="text-[#FF4B00]">ARRIVE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="faq-anim-text font-editorial text-lg sm:text-2xl italic text-[#333333] leading-tight">
              "The essentials before you bring your vehicle to TMR."
            </p>
          </div>
        </div>

        {/* INTERACTIVE EDITORIAL FAQ LIST */}
        <div ref={listRef} className="space-y-4 border-t border-black/15 pt-6">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="faq-anim-row border-b border-black/10 transition-colors duration-300"
                onMouseEnter={() => handleItemMouseEnter(item.id)}
                onMouseLeave={handleItemMouseLeave}
              >
                {/* UNIFIED INTERACTIVE QUESTION BUTTON & CONTAINER */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 font-intertight group focus:outline-none"
                >
                  <div className="flex items-center gap-4 transition-transform duration-300" style={{ transform: isOpen ? 'translateX(6px)' : 'none' }}>
                    <span className={`text-xs font-extrabold transition-colors ${isOpen ? 'text-[#FF4B00]' : 'text-black/30'}`}>
                      {item.number}
                    </span>
                    <h3 className={`text-base sm:text-lg lg:text-xl uppercase transition-colors ${isOpen ? 'font-extrabold text-[#111111]' : 'font-bold text-black/80 group-hover:text-[#111111]'}`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* ROTATING MINIMAL ARROW ACCENT */}
                  <div className="flex items-center gap-3 shrink-0">
                    {isOpen && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] animate-pulse hidden sm:inline-block" />}
                    <span
                      className={`text-[#FF4B00] text-sm font-extrabold transition-transform duration-400 ease-out ${
                        isOpen ? 'rotate-45 scale-110' : 'rotate-0 group-hover:translate-x-1'
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                </button>

                {/* SMOOTH EXPANDING ANSWER CONTAINER */}
                <div
                  id={`faq-answer-${item.id}`}
                  className="grid transition-all duration-400 ease-out overflow-hidden"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0 pb-6 pl-9 sm:pl-10 pr-6">
                    <p className="font-intertight text-xs sm:text-sm text-[#333333] leading-relaxed max-w-[680px] border-l-2 border-[#FF4B00] pl-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* EDITORIAL FAQ CTA LINK */}
        <div className="pt-4 flex items-center justify-between border-t border-black/15 font-intertight">
          <Link
            to="/contact"
            className="group inline-flex flex-col gap-1 text-xs font-extrabold uppercase tracking-widest text-[#111111] hover:text-[#FF4B00] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <span>STILL HAVE QUESTIONS? CONTACT TMR</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </span>
            <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
