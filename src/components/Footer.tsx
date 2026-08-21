import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyData } from '@/data/company';
import { navigationItems } from '@/data/navigation';
import { servicesData } from '@/data/services';
import { Container } from './Container';
import { Logo } from './Logo';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const giantBrandRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book an appointment or request a detailing quote.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!footerRef.current || !giantBrandRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // GIANT TMR WORDMARK SCROLL-LINKED RISE MOTION
      gsap.fromTo(
        giantBrandRef.current,
        { translateY: '10vh', scale: 1.02 },
        {
          translateY: '0vh',
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#063A34] text-[#F5F4EF] pt-12 md:pt-16 pb-8 border-t border-white/10 relative overflow-hidden font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#063A34' }}
    >
      {/* SUBTLE FINE NOISE & GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        
        {/* SECTION A — CONTACT STRIP (TOP COMPACT HORIZONTAL BAR WITH VERTICAL DIVIDERS) */}
        <div className="border-b border-white/14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/14">
            
            {/* STRIP 1: CALL / WHATSAPP */}
            <div className="md:pr-8 space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                CALL / WHATSAPP
              </div>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="font-extrabold text-sm sm:text-base text-[#F5F4EF] hover:text-[#FF4B00] transition-colors"
              >
                {companyData.contact.phoneFormatted}
              </a>
            </div>

            {/* STRIP 2: LOCATION */}
            <div className="md:px-8 pt-4 md:pt-0 space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                LOCATION
              </div>
              <div className="font-extrabold text-sm sm:text-base text-[#F5F4EF]">
                Tiruppur, Tamil Nadu
              </div>
            </div>

            {/* STRIP 3: WORKING HOURS */}
            <div className="md:pl-8 pt-4 md:pt-0 space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                WORKING HOURS
              </div>
              <div className="font-extrabold text-xs sm:text-sm text-[#F5F4EF]">
                {companyData.hours.weekdays} • {companyData.hours.sunday}
              </div>
            </div>

          </div>
        </div>

        {/* SECTION B — MAIN FOOTER GRID (5-COLUMN DESKTOP LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1 — BRAND (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Logo heightClassName="h-8 sm:h-9 md:h-10" />
            <div className="space-y-1 pt-1">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF4B00]">
                PRECISION AUTOMOTIVE CARE
              </div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                TIRUPPUR, TAMIL NADU
              </div>
            </div>
            <p className="text-xs text-[#F5F4EF]/75 font-medium leading-relaxed max-w-[260px]">
              Precision detailing, protection and finish for exceptional motor vehicles.
            </p>
          </div>

          {/* COLUMN 2 — NAVIGATION (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-extrabold uppercase tracking-wider">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 text-[#F5F4EF]/85 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#F5F4EF]/30 group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — SERVICES (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">
              SERVICES
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-center justify-between py-1 border-b border-white/10 hover:border-[#FF4B00] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[10px] text-[#FF4B00]">
                        {service.indexNumber}
                      </span>
                      <span className="font-bold text-[#F5F4EF]/85 group-hover:text-white transition-colors uppercase">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-[#F5F4EF]/30 group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">
              CONTACT
            </h3>
            <div className="space-y-3 text-xs text-[#F5F4EF]/80 font-medium leading-relaxed">
              <p>{companyData.address.fullText}</p>
              <div className="space-y-1 font-bold text-white">
                <p>
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.phoneFormatted}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 5 — FOLLOW / CONNECT (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00]">
              FOLLOW / CONNECT
            </h3>
            <ul className="space-y-2.5 text-xs font-extrabold uppercase tracking-wider text-[#F5F4EF]/85">
              <li>
                <a
                  href={companyData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                >
                  <span>INSTAGRAM</span>
                  <span className="text-[#F5F4EF]/30 group-hover:text-[#FF4B00]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={companyData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                >
                  <span>FACEBOOK</span>
                  <span className="text-[#F5F4EF]/30 group-hover:text-[#FF4B00]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                >
                  <span>YOUTUBE</span>
                  <span className="text-[#F5F4EF]/30 group-hover:text-[#FF4B00]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4B00] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>WHATSAPP TMR</span>
                  <span>→</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4B00] transition-colors text-white inline-flex items-center gap-1"
                >
                  <span>DIRECTIONS</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION C — GIANT TMR BRAND ENDING */}
        <div className="relative w-full pt-10 pb-2 border-t border-white/10 overflow-hidden select-none pointer-events-none">
          <div ref={giantBrandRef} className="w-full text-center transition-transform duration-700 ease-out">
            <span className="font-intertight font-black text-[28vw] sm:text-[31vw] lg:text-[34vw] leading-none text-[rgba(245,244,239,0.06)] tracking-[-0.07em] block uppercase">
              TMR
            </span>
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF4B00]/70 px-4 -mt-4 sm:-mt-8">
              <span>EST. 2024</span>
              <span>TIRUPPUR / TAMIL NADU</span>
              <span>PRECISION / PROTECTION / PERFECTION</span>
            </div>
          </div>
        </div>

        {/* SECTION D — LEGAL ROW & BACK TO TOP */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5F4EF]/50 font-semibold gap-4">
          <p>© {new Date().getFullYear()} TMR CAR CARE. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline-block">TIRUPPUR, TAMIL NADU</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1.5 text-[#FF4B00] hover:text-white transition-colors uppercase font-extrabold"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
};
