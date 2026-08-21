import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube, MessageSquare, ArrowUpRight, ArrowUp } from 'lucide-react';
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

  const socialItems = [
    {
      name: 'Instagram',
      href: companyData.social.instagram,
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: companyData.social.facebook,
      icon: Facebook,
    },
    {
      name: 'YouTube',
      href: companyData.social.youtube,
      icon: Youtube,
    },
    {
      name: 'WhatsApp',
      href: whatsappUrl,
      icon: MessageSquare,
    },
    {
      name: 'Directions',
      href: `https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`,
      icon: MapPin,
    },
  ];

  return (
    <footer
      className="w-full bg-[#050505] text-[#F5F4EF] pt-12 md:pt-16 pb-8 border-t border-white/10 relative overflow-hidden font-intertight flex flex-col justify-between"
      style={{ backgroundColor: '#050505' }}
    >
      {/* SUBTLE FINE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />

      <Container className="relative z-10 space-y-12 max-w-[1360px] mx-auto">
        
        {/* SECTION A — TOP CONTACT STRIP (3 BALANCED EQUAL ZONES WITH SAME VISUAL HIERARCHY) */}
        <div className="border-b border-white/12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/12">
            
            {/* ZONE 1: CALL / WHATSAPP */}
            <div className="md:pr-8 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-[#FF4B00]" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                  CALL / WHATSAPP
                </div>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="font-extrabold text-sm sm:text-base text-[#F5F4EF] hover:text-[#FF4B00] transition-colors block"
                >
                  {companyData.contact.phoneFormatted}
                </a>
              </div>
            </div>

            {/* ZONE 2: LOCATION */}
            <div className="md:px-8 pt-4 md:pt-0 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#FF4B00]" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                  LOCATION
                </div>
                <div className="font-extrabold text-sm sm:text-base text-[#F5F4EF]">
                  Tiruppur, Tamil Nadu
                </div>
              </div>
            </div>

            {/* ZONE 3: WORKING HOURS */}
            <div className="md:pl-8 pt-4 md:pt-0 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-[#FF4B00]" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5F4EF]/45">
                  WORKING HOURS
                </div>
                <div className="font-extrabold text-xs sm:text-sm text-[#F5F4EF]">
                  {companyData.hours.weekdays} • {companyData.hours.sunday}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION B — MAIN FOOTER GRID (4-COLUMN EDITORIAL DESKTOP LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1 — BRAND (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Logo heightClassName="h-8 sm:h-9 md:h-10" useGlass={false} />
            <div className="space-y-1 pt-1">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF4B00]">
                PRECISION AUTOMOTIVE CARE
              </div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                TIRUPPUR, TAMIL NADU
              </div>
            </div>
            <p className="text-xs text-[#F5F4EF]/75 font-medium leading-relaxed max-w-[260px]">
              Precision detailing, protection and finish.
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
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F5F4EF]/30 group-hover:text-[#FF4B00] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — SERVICES (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
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

          {/* COLUMN 4 — CONTACT + CONNECT (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] mb-3">
                CONTACT
              </h3>
              <div className="space-y-2 text-xs text-[#F5F4EF]/80 font-medium leading-relaxed">
                <p>{companyData.address.fullText}</p>
                <div className="space-y-1 font-bold text-white pt-1">
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

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FF4B00] mb-3">
                CONNECT
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {socialItems.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5F4EF]/80 hover:text-[#FF4B00] hover:bg-[#FF4B00]/10 hover:border-[#FF4B00]/40 transition-all duration-300"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* SECTION C — SMALL REFINED TMR BRAND SIGNATURE */}
        <div className="pt-8 pb-2 border-t border-white/10 text-center select-none pointer-events-none">
          <span className="font-intertight font-black text-2xl sm:text-3xl tracking-[0.25em] text-white/10 uppercase block">
            TMR / CAR CARE
          </span>
        </div>

        {/* SECTION D — LEGAL ROW & BACK TO TOP */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5F4EF]/50 font-semibold gap-4">
          <p>© {new Date().getFullYear()} TMR CAR CARE. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              TERMS & CONDITIONS
            </Link>
            <span className="hidden sm:inline-block">TIRUPPUR, TAMIL NADU</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1.5 text-[#FF4B00] hover:text-white transition-colors uppercase font-extrabold"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
};
