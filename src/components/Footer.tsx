import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { companyData } from '@/data/company';
import { navigationItems } from '@/data/navigation';
import { servicesData } from '@/data/services';
import { Container } from './Container';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like to book an appointment or request a detailing quote.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-[#F5F4EF] min-h-[90vh] lg:h-screen flex flex-col justify-between pt-16 md:pt-24 pb-8 border-t border-[#2A2A2A] relative overflow-hidden font-manrope">
      {/* Subtle Technical Grid Lines & Background Atmosphere (10-15% visual intensity) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-15 z-0">
        <div className="absolute top-0 left-12 bottom-0 w-px bg-white/20" />
        <div className="absolute top-0 right-12 bottom-0 w-px bg-white/20" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/20" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/20" />
        <div className="absolute top-8 left-16 text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">
          COORD: 11.1085° N, 77.3411° E // TIRUPPUR STUDIO
        </div>
      </div>

      <Container className="relative z-10 flex-grow flex flex-col justify-between">
        <div className="space-y-16">
          {/* FOOTER TOP: Official Brand Identifier */}
          <div className="border-b border-[#2A2A2A] pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <Logo heightClassName="h-9 sm:h-10 md:h-12" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#858585] mt-3">
                PRECISION AUTOMOTIVE CARE — TIRUPPUR, TAMIL NADU
              </p>
            </div>

            <div className="text-xs text-[#858585] uppercase tracking-widest font-bold">
              01 / TMR / TIRUPPUR STUDIO
            </div>
          </div>

          {/* FOOTER MAIN EDITORIAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* COLUMN 01 (5 Cols): BRAND & VERIFIED LOCATION */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                STUDIO LOCATION & DIRECT CONTACT
              </h3>

              <div className="space-y-3.5 text-xs text-[#F5F4EF]/80 border-l-2 border-[#FF4B00] pl-4 py-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF4B00] shrink-0 mt-0.5" />
                  <span>{companyData.address.fullText}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF4B00] shrink-0" />
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF4B00] shrink-0" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#FF4B00] transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              <div className="text-xs text-[#858585] space-y-1">
                <p><span className="text-white font-semibold">Hours:</span> {companyData.hours.weekdays}</p>
                <p>{companyData.hours.sunday}</p>
              </div>
            </div>

            {/* COLUMN 02 (2 Cols): EXPLORE / MENU */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                EXPLORE
              </h3>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group inline-flex items-center gap-1.5 text-[#F5F4EF]/80 hover:text-[#FF4B00] transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#858585] group-hover:text-[#FF4B00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 03 (3 Cols): SERVICES */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                SERVICES
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F5F4EF]/80">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="group flex items-center justify-between py-1 border-b border-[#2A2A2A]/60 hover:border-[#FF4B00] transition-colors"
                    >
                      <span className="font-extrabold text-[10px] text-[#FF4B00]">
                        {service.indexNumber}
                      </span>
                      <span className="text-[#F5F4EF]/80 group-hover:text-white transition-colors">
                        {service.title}
                      </span>
                      <span className="text-[#858585] group-hover:text-[#FF4B00] transition-colors">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 04 (2 Cols): CONNECT */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF4B00]">
                CONNECT
              </h3>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#F5F4EF]/80">
                <li>
                  <a
                    href={companyData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] transition-colors"
                  >
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#858585] group-hover:text-[#FF4B00] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href={companyData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] transition-colors"
                  >
                    <span>FACEBOOK</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#858585] group-hover:text-[#FF4B00] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href={companyData.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-[#FF4B00] transition-colors"
                  >
                    <span>YOUTUBE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#858585] group-hover:text-[#FF4B00] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF4B00] hover:text-white transition-colors"
                  >
                    WHATSAPP TMR →
                  </a>
                </li>
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF4B00] transition-colors text-white"
                  >
                    DIRECTIONS →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MONUMENTAL TYPOGRAPHIC FOOTER SIGNATURE */}
        <div className="py-8 my-4 border-t border-[#2A2A2A]/40 text-center select-none pointer-events-none">
          <span className="font-manrope font-black text-[12vw] sm:text-[14vw] lg:text-[16vw] leading-none text-[#111111] tracking-tighter block uppercase">
            TMR CAR CARE
          </span>
        </div>

        {/* FINAL LEGAL STRIP */}
        <div className="pt-6 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between text-xs text-[#858585] gap-4">
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
              className="flex items-center gap-1.5 text-[#FF4B00] hover:text-white transition-colors uppercase font-bold"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
