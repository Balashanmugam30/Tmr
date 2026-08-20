import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { companyData } from '@/data/company';

export const ShowroomSection: React.FC = () => {
  return (
    <section className="w-full h-[80vh] min-h-[600px] relative flex items-center bg-tmr-softblack">
      {/* Background Image */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGobyku5YJCXyB2Rc0aowUUYUcvOsUHhFFYxg9qCACu7gFr-kFiwSKAx0hYp8qMGzf_D70GQMVNwX_SjbhsUI5NF9dEQPxxVHoUUsrqWESfHMzjz6XchhOZAAsG__azrHGdukeQWWcGpC7yfuCkaJ1GXFeOgV5pJMK2CLlynLo_QnKbd6Hp1BqYHhfwoeYoxHWhDlv-0pLT1VzFIAKoy1Kf8vooQeryIOsNaeWKFpFBZVQZO8MTA3"
        alt="TMR Car Care studio exterior in Tiruppur"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="900" viewBox="0 0 1920 900"><rect width="1920" height="900" fill="%23050505"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="32" fill="%23FF4B00">TMR TIRUPPUR STUDIO FACILITY</text></svg>`;
        }}
      />
      <div className="absolute inset-0 bg-tmr-softblack/60" />

      {/* Content Overlay */}
      <Container className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="text-white space-y-3">
          <h2 className="font-manrope font-black text-4xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tighter">
            COME SEE
            <br />
            THE DIFFERENCE
          </h2>
          <p className="font-editorial text-3xl sm:text-4xl italic text-tmr-orange">
            Our Tiruppur Studio
          </p>
        </div>

        {/* Floating White Visit Card */}
        <div className="bg-white p-8 max-w-sm w-full rounded-tmr shadow-2xl space-y-4">
          <h4 className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-softblack border-b border-tmr-concrete pb-3">
            Visit Us
          </h4>
          <p className="font-manrope text-sm text-tmr-softblack leading-relaxed">
            {companyData.address.fullText}
          </p>
          <p className="font-manrope text-xs text-tmr-muted">
            Phone: {companyData.contact.phoneFormatted}
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              className="w-full text-center"
              href={`https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`}
              target="_blank"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
