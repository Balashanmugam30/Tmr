import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';

export const GalleryShowcaseSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-section-gap bg-white border-b border-tmr-concrete/60">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <h2 className="font-manrope font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-tmr-softblack leading-none">
            The Gallery
          </h2>
          <p className="font-editorial text-2xl sm:text-3xl text-tmr-muted italic">
            Proof in the reflections.
          </p>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: 8 Columns - Porsche 911 GT3 */}
          <Link
            to="/gallery"
            className="md:col-span-8 aspect-video relative group overflow-hidden rounded-tmr shadow-lg bg-tmr-softblack"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtViPMJVOTL-F-lWKcYYHw5p7-56uTvgQZTOyQqxaKf-kU-YkCA32qPM4Gd0gvMeK1FI5-1q7tubsoKmUCaDmNTKKK6DzJ1naZxlVj98z_K9MfsyoD8zWIrBT8Jp6LlXT9LU8kuv6JNrkiNYROHAp4oJfF5pB6YPcyd8bA1hss4cDLFC3NuAPFl8n5n-Fi7qsjw_YN2YHzcEivqD_MFUVAqHmGybU7SSLFltCW1PwK1newPN0-C_Oi"
              alt="Porsche 911 GT3 detailed"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/80 via-tmr-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6 md:p-8">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-orange mb-1">
                Paint Correction + Ceramic Coating
              </span>
              <h3 className="font-manrope font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
                Porsche 911 GT3
              </h3>
            </div>
          </Link>

          {/* Card 2: 4 Columns - Mercedes AMG */}
          <Link
            to="/gallery"
            className="md:col-span-4 aspect-[3/4] relative group overflow-hidden rounded-tmr shadow-lg bg-tmr-softblack"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBofmA6lRrMKkH0CbLpeV2SHdxiMYsuEcY9NvyNxO2Lp0TY2CX1YNicnyhKml3xG0B5iucvmg-bDH-L3YiZo4zYQtS4DWjqLGHueScRios_V_NWBmLkKBkAzVNyaj6ZzcKa1HKAa6FWLn_P_y3jmPiBg-S7bsUGZXywOM35iWOhOi0vbu70Yik94q0U8ohOf_Qohx59wQvcYNKFNymTdSVzq0B_5BU6G4HEU1Qa5mQq2sW63KTp2i6w"
              alt="Mercedes AMG detailed"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-orange mb-1">
                PPF Full Armor
              </span>
              <h3 className="font-manrope font-extrabold text-xl text-white uppercase">
                Mercedes-AMG E63s
              </h3>
            </div>
          </Link>

          {/* Card 3: 12 Columns Full-Bleed Banner - Ferrari Interior */}
          <Link
            to="/gallery"
            className="md:col-span-12 aspect-[21/9] relative group overflow-hidden rounded-tmr shadow-lg bg-tmr-softblack"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Ox6Kt_qeROXP2ZRD-UOTsRNHhAGii8sUJKzv8HPkEzNow6LeYIrFHiEHEu523CpRtJDkUJH_lQQp3R7dx0Y4XUNAjT5qsn3DSvJ8VKJSBh_YKOdunldXBUNQhy7Cvdzpw__kcf9bnO4dqJs7RbRC_DF40xfoTRmEBvKUM45biakCJTPHzLVjo08Hgp05er9viJMniySUlchN7_g7GXUWIPBwTYSgUDP46ETHEEJM9jfHqciNvKsx"
              alt="Ferrari interior detailed"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tmr-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="font-manrope font-bold text-xs uppercase tracking-widest text-tmr-orange mb-1">
                Interior Leather & Cockpit Restoration
              </span>
              <h3 className="font-manrope font-extrabold text-2xl md:text-4xl text-white uppercase">
                Ferrari Cockpit Precision
              </h3>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};
