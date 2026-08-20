import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { companyData } from '@/data/company';

export const PpfSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    'Hello TMR Car Care! I would like an estimate for PPF (Paint Protection Film) installation.'
  )}`;

  return (
    <section className="w-full py-24 md:py-section-gap bg-tmr-black text-white overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column (7 Cols): PPF Laser Image & Watermark */}
          <div className="lg:col-span-7 relative group">
            <div className="aspect-video overflow-hidden relative rounded-tmr shadow-2xl bg-tmr-softblack">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvQQfIqcXcZOAl4e-4mlcK-4w8R0wuNVXd-bnlon4KLk4iJRU9cCeFiQhYV91XBfzmaFc2A2j0xUbVBEUlXXhEt1J4KpiELHNhqUT7d6qsO8llv5kCL2EjoxvblVTm8MxauYZV4RDdCaF_47siXdD2fo9orXzGJDigCilM-4cjrgxTX4GeIuLnZPuluRaEHuRYd3lZXLmqg0vZsTBYnDhqnqh-fSSXSYpNb-7YPUVXwAuaG5o-UB2BRKUs"
                alt="PPF Paint Protection Film Application"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="%23111111"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="28" fill="%23FF4B00">PPF SELF-HEALING TPU ARMOR</text></svg>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 -skew-x-12 animate-pulse pointer-events-none" />
              {/* Laser Line Accent */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-tmr-orange shadow-[0_0_15px_rgba(255,75,0,0.8)] z-20" />
            </div>

            {/* Typography Watermark */}
            <div className="absolute -bottom-10 -right-6 text-7xl sm:text-9xl md:text-[140px] font-manrope font-black text-white/5 leading-none select-none pointer-events-none hidden sm:block">
              SHIELD
            </div>
          </div>

          {/* Right Column (5 Cols): Content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-manrope font-bold text-xs text-tmr-orange uppercase tracking-[0.3em] mb-4 block">
                The Invisible Shield
              </span>
              <h2 className="font-manrope font-black text-4xl sm:text-5xl lg:text-6xl leading-none uppercase tracking-tighter">
                PROTECTION
                <br />
                YOU CAN{' '}
                <span className="font-editorial italic lowercase text-tmr-orange font-normal">
                  see.
                </span>
              </h2>
            </div>

            <p className="font-manrope text-base text-white/60 leading-relaxed max-w-md">
              The ultimate invisible shield against rock chips, scratches, and road debris. Self-healing technology keeps your investment flawless.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" className="bg-white text-tmr-softblack hover:bg-tmr-orange hover:text-white" href="/services/ppf-paint-protection">
                Explore PPF
              </Button>
              <Button variant="outline" href={whatsappUrl} target="_blank">
                WhatsApp TMR
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
