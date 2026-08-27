import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

interface Clause {
  id: string;
  num: string;
  title: string;
}

const clauses: Clause[] = [
  { id: 'website-use', num: '01', title: 'Website Use & Access' },
  { id: 'enquiries-communication', num: '02', title: 'Enquiries & Communication' },
  { id: 'quotes-pricing', num: '03', title: 'Quotes & Pricing Estimates' },
  { id: 'appointments-inspections', num: '04', title: 'Studio Appointments & Inspections' },
  { id: 'product-info', num: '05', title: 'Product Catalogue Information' },
  { id: 'intellectual-property', num: '06', title: 'Intellectual Property' },
  { id: 'user-responsibilities', num: '07', title: 'User Conduct & Responsibilities' },
  { id: 'liability-disclaimers', num: '08', title: 'Limitation of Liability' },
  { id: 'external-links', num: '09', title: 'Third-Party Services & Links' },
  { id: 'term-changes', num: '10', title: 'Changes to Terms' },
  { id: 'governing-law', num: '11', title: 'Governing Law & Jurisdiction' },
  { id: 'contact-clarification', num: '12', title: 'Contact & Clarifications' },
];

export const TermsPage: React.FC = () => {
  const [activeClause, setActiveClause] = useState<string>('website-use');

  useEffect(() => {
    // Dynamic SEO Metadata
    const titleText = `Terms & Conditions | TMR Car Care Tiruppur`;
    const descText = `Read the official website terms, enquiry rules, quote policies, and service interaction conditions for TMR Car Care in Tiruppur.`;
    const canonicalUrl = `https://tmrcarcare.com/terms`;

    document.title = titleText;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descText);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Scroll spy for active clause
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const clause of clauses) {
        const el = document.getElementById(clause.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveClause(clause.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToClause = (id: string) => {
    setActiveClause(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div data-navbar-theme="dark" className="w-full bg-[#0C0C0B] text-[#F1EEE7] font-manrope pt-28 pb-24 min-h-screen relative selection:bg-[#FF4B00] selection:text-white">
      
      {/* HEADER SECTION */}
      <header className="w-full border-b border-white/10 pb-12 pt-6 bg-gradient-to-b from-[#090909] to-[#0C0C0B]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <h1 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight mb-4">
            TERMS & CONDITIONS
          </h1>

          <p className="text-base sm:text-lg text-[#D8D8D5]/80 max-w-2xl leading-relaxed mb-6 font-medium">
            Terms governing your use of the TMR Car Care website, enquiries and digital interactions.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#888885] tracking-wider uppercase font-mono">
            <span>EFFECTIVE DATE: AUGUST 2026</span>
            <span className="text-[#FF4B00]">•</span>
            <span>LAST UPDATED: AUGUST 2026</span>
          </div>
        </div>
      </header>

      {/* MOBILE HORIZONTAL CLAUSE RAIL */}
      <div className="lg:hidden sticky top-20 z-20 bg-[#0C0C0B]/95 backdrop-blur border-b border-white/10 py-3 px-5 overflow-x-auto no-scrollbar flex items-center gap-4 text-xs font-extrabold uppercase tracking-wider">
        <span className="text-[#888885] shrink-0 text-[10px]">CLAUSES:</span>
        {clauses.map((clause) => (
          <button
            key={clause.id}
            onClick={() => scrollToClause(clause.id)}
            type="button"
            className={`shrink-0 whitespace-nowrap transition-colors ${
              activeClause === clause.id
                ? 'text-[#FF4B00] border-b border-[#FF4B00] pb-0.5'
                : 'text-[#A0A09C] hover:text-white'
            }`}
          >
            {clause.num}. {clause.title}
          </button>
        ))}
      </div>

      {/* MAIN DOCUMENT BODY */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* DESKTOP STICKY NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4 pr-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#888885] block mb-4">
              CLAUSE NAVIGATION
            </span>
            <nav className="flex flex-col space-y-2 text-xs font-extrabold uppercase tracking-wider">
              {clauses.map((clause) => {
                const isActive = activeClause === clause.id;
                return (
                  <button
                    key={clause.id}
                    onClick={() => scrollToClause(clause.id)}
                    type="button"
                    className={`text-left transition-all duration-200 inline-flex items-center gap-2.5 ${
                      isActive
                        ? 'text-[#FF4B00] translate-x-1 font-black'
                        : 'text-[#A0A09C] hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-70">{clause.num}</span>
                    <span>{clause.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
              >
                <span>NEED CLARIFICATION?</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* DOCUMENT CONTENT (MAX WIDTH ~750PX READING COLUMN) */}
          <main className="col-span-12 lg:col-span-8 max-w-[760px] space-y-16 text-sm sm:text-base text-[#D8D8D5]/90 leading-relaxed">
            
            {/* 01. WEBSITE USE & ACCESS */}
            <section id="website-use" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">01</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Website Use & Access
                </h2>
              </div>
              <p>
                By accessing or browsing the TMR Car Care website (<strong className="text-white">tmrcarcare.com</strong>), you agree to comply with these Terms &amp; Conditions. This website is provided to communicate detailing, ceramic coating, paint protection film (PPF), and car care service information for our facility located in Tiruppur, Tamil Nadu.
              </p>
              <p>
                Access to the website is permitted on a temporary basis. TMR Car Care reserves the right to modify, suspend, or discontinue any aspect of the digital platform at any time without prior notice.
              </p>
            </section>

            {/* 02. ENQUIRIES & COMMUNICATION */}
            <section id="enquiries-communication" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">02</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Enquiries & Communication
                </h2>
              </div>
              <p>
                Information submitted through our contact forms, direct email links, or WhatsApp messaging is used solely to evaluate your vehicle requirements and respond with service options.
              </p>
              <p>
                Submitting an enquiry or requesting a detailing estimate does not create a binding service contract until a formal studio inspection is conducted and service terms are mutually confirmed at our Tiruppur studio.
              </p>
            </section>

            {/* 03. QUOTES & PRICING ESTIMATES */}
            <section id="quotes-pricing" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">03</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Quotes & Pricing Estimates
                </h2>
              </div>
              <p>
                Preliminary service pricing provided via website consultation or messaging channels represents an initial estimate based on owner-supplied information.
              </p>
              <p>
                Final service pricing for paint correction, ceramic coating, PPF installation, or interior detailing is confirmed following an in-person paint depth measurement and physical vehicle inspection at our Tiruppur studio. Factors such as severe paint oxidation, deep scratch depth, or panel repair needs may adjust the final scope of work.
              </p>
            </section>

            {/* 04. STUDIO APPOINTMENTS & INSPECTIONS */}
            <section id="appointments-inspections" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">04</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Studio Appointments & Inspections
                </h2>
              </div>
              <p>
                Appointments scheduled online or via phone reserve specific bay time and specialist technician allocation at our Tiruppur facility.
              </p>
              <p>
                We request at least 24 hours&apos; prior notice if you need to reschedule or cancel a studio inspection or service date. Vehicle owners are advised to remove personal valuables from vehicle interiors prior to handing over the vehicle for studio detailing or film application.
              </p>
            </section>

            {/* 05. PRODUCT CATALOGUE INFORMATION */}
            <section id="product-info" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">05</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Product Catalogue Information
                </h2>
              </div>
              <p>
                Products displayed in our online catalogue (including professional compounds, polishes, performance abrasives, and detailing accessories from brand partners like 3M™ and Meguiar&apos;s®) are listed for technical informational purposes regarding tools and materials used within TMR studio processes.
              </p>
              <p>
                Product availability for direct supply or studio application is verified upon request. TMR Car Care makes no unauthorized distributor or manufacturer claims beyond professional studio application standards.
              </p>
            </section>

            {/* 06. INTELLECTUAL PROPERTY */}
            <section id="intellectual-property" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">06</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Intellectual Property
                </h2>
              </div>
              <p>
                All website design elements, studio photography, video showcases, branding marks, editorial typography, and software components are the intellectual property of TMR Car Care or used under licence.
              </p>
              <p>
                Reproduction, redistribution, or commercial copying of website media, text, or visual design assets without prior written consent from TMR Car Care is strictly prohibited.
              </p>
            </section>

            {/* 07. USER CONDUCT & RESPONSIBILITIES */}
            <section id="user-responsibilities" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">07</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  User Conduct & Responsibilities
                </h2>
              </div>
              <p>
                Users agree not to misuse website communication forms, transmit malicious code, attempt unauthorized server access, or send false service enquiries.
              </p>
            </section>

            {/* 08. LIMITATION OF LIABILITY */}
            <section id="liability-disclaimers" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">08</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Limitation of Liability
                </h2>
              </div>
              <p>
                While we strive to maintain accurate service information, technical specifications, and studio schedules on this website, digital content is provided &quot;as is&quot; without warranties of uninterrupted availability.
              </p>
              <p>
                TMR Car Care is not liable for indirect, incidental, or consequential damages resulting from website downtime, communication delays, or reliance on unverified third-party internet connections.
              </p>
            </section>

            {/* 09. THIRD-PARTY SERVICES & LINKS */}
            <section id="external-links" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">09</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Third-Party Services & Links
                </h2>
              </div>
              <p>
                This website contains direct links to external services including WhatsApp, Google Maps, and social media platforms. TMR Car Care is not responsible for the privacy practices, content, or availability of external third-party websites.
              </p>
            </section>

            {/* 10. CHANGES TO TERMS */}
            <section id="term-changes" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">10</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Changes to Terms
                </h2>
              </div>
              <p>
                We reserve the right to update these Terms &amp; Conditions as studio operations or regulatory requirements evolve. Updated terms take effect immediately upon posting to this website.
              </p>
            </section>

            {/* 11. GOVERNING LAW & JURISDICTION */}
            <section id="governing-law" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">11</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Governing Law & Jurisdiction
                </h2>
              </div>
              <p>
                These Terms &amp; Conditions and any digital enquiries arising from website usage are governed by and construed in accordance with the laws of India. Any legal proceedings or disputes shall be subject to the exclusive jurisdiction of the competent courts in Tiruppur, Tamil Nadu.
              </p>
            </section>

            {/* 12. CONTACT & CLARIFICATIONS */}
            <section id="contact-clarification" className="scroll-mt-32 space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold text-[#FF4B00] tracking-widest">12</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Contact & Clarifications
                </h2>
              </div>
              <p>
                If you have questions regarding these Terms &amp; Conditions or wish to verify detailing service terms prior to booking, please contact our studio:
              </p>
              <div className="bg-[#141413] p-6 rounded-lg border border-white/10 space-y-2 mt-4 font-mono text-xs">
                <p className="font-bold text-white">{companyData.name}</p>
                <p className="text-[#A0A09C]">{companyData.address.fullText}</p>
                <p className="text-white">Phone: {companyData.contact.phoneFormatted}</p>
                <p className="text-white">Email: {companyData.contact.email}</p>
              </div>
            </section>

            {/* FINAL NEED CLARIFICATION LINK */}
            <div className="pt-12 border-t border-white/10 flex items-center justify-between">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
              >
                <span>NEED CLARIFICATION? CONTACT TMR STUDIO</span>
                <span className="text-base">→</span>
              </Link>

              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#888885] hover:text-white transition-colors"
              >
                <span>VIEW PRIVACY POLICY</span>
                <span className="text-base">→</span>
              </Link>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
};

export default TermsPage;
