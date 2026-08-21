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
        { translateY: '8vh', scale: 1.02 },
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
      className="w-full bg-[#050505] text-[#F5F4EF] pt-16 md:pt-24 pb-8 border-t border-white/10 relative overflow-hidden font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#050505' }}
    >
      {/* SUBTLE FINE NOISE & GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-10 space-y-16">
        {/* 1. RESTRAINED TOP BRAND IDENTIFIER BAR */}
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <Logo heightClassName="h-8 sm:h-9 md:h-10" />
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FF4B00] mt-3">
              PRECISION AUTOMOTIVE CARE — TIRUPPUR, TAMIL NADU
            </p>
          </div>

          <div className="text-xs text-white/40 uppercase tracking-widest font-bold">
            01 / TMR / TIRUPPUR STUDIO
          </div>
        </div>

        {/* 2. 4-COLUMN DESKTOP INFORMATION ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* COLUMN 01 (STUDIO): CONTACT & ADDRESS (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              STUDIO
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-white/80 font-semibold leading-relaxed border-l-2 border-[#FF4B00] pl-4 py-1">
              <p>{companyData.address.fullText}</p>
              <div className="pt-1 space-y-1 text-xs text-white/60">
                <p>
                  PHONE:{' '}
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-[#FF4B00] transition-colors font-bold text-white">
                    {companyData.contact.phoneFormatted}
                  </a>
                </p>
                <p>
                  EMAIL:{' '}
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#FF4B00] transition-colors font-bold text-white">
                    {companyData.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="text-xs text-white/40 font-semibold space-y-1">
              <p><span className="text-white font-bold">Hours:</span> {companyData.hours.weekdays}</p>
              <p>{companyData.hours.sunday}</p>
            </div>
          </div>

          {/* COLUMN 02 (EXPLORE): NAVIGATION LINKS (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              EXPLORE
            </h3>
            <ul className="space-y-3 text-xs font-extrabold uppercase tracking-wider">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 text-white/80 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-white/30 group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 03 (SERVICES): SERVICE ROWS (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              SERVICES
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-center justify-between py-1.5 border-b border-white/10 hover:border-[#FF4B00] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[10px] text-[#FF4B00]">
                        {service.indexNumber}
                      </span>
                      <span className="font-bold text-white/80 group-hover:text-white transition-colors uppercase">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-white/30 group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 04 (CONNECT): SOCIAL & ACTION LINKS (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
              CONNECT
            </h3>
            <ul className="space-y-3 text-xs font-extrabold uppercase tracking-wider text-white/80">
              <li>
                <a
                  href={companyData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] hover:translate-x-1 transition-all duration-300"
                >
                  <span>INSTAGRAM</span>
                  <span className="text-white/30 group-hover:text-[#FF4B00]">↗</span>
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
                  <span className="text-white/30 group-hover:text-[#FF4B00]">↗</span>
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
                  <span className="text-white/30 group-hover:text-[#FF4B00]">↗</span>
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

        {/* 3. SIGNATURE FEATURE — THE GIANT TMR BRAND ELEMENT */}
        <div className="relative w-full pt-12 pb-4 border-t border-white/10 overflow-hidden select-none pointer-events-none">
          <div ref={giantBrandRef} className="w-full text-center transition-transform duration-700 ease-out">
            <span className="font-intertight font-black text-[22vw] sm:text-[25vw] lg:text-[28vw] leading-none text-[#141414] tracking-[-0.07em] block uppercase">
              TMR
            </span>
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF4B00]/70 px-4 -mt-4 sm:-mt-8">
              <span>EST. 2024</span>
              <span>TIRUPPUR STUDIO</span>
              <span>PRECISION / PROTECTION / PERFECTION</span>
            </div>
          </div>
        </div>

        {/* 4. FINAL LEGAL STRIP & BACK TO TOP */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-semibold gap-4">
          <p>© {new Date().getFullYear()} TMR CAR CARE. ALL RIGHTS RESERVED. TIRUPPUR, TAMIL NADU.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
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
