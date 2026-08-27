import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '@/data/company';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'overview', title: 'Overview & Scope' },
  { id: 'information-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Information' },
  { id: 'whatsapp-contact', title: 'WhatsApp & Direct Enquiries' },
  { id: 'cookies-storage', title: 'Cookies & Local Storage' },
  { id: 'data-sharing', title: 'Data Sharing & Third Parties' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'security', title: 'Data Security' },
  { id: 'user-rights', title: 'Your Rights & Fiduciary Contact' },
  { id: 'policy-updates', title: 'Policy Updates' },
];

export const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    // Dynamic SEO Metadata
    const titleText = `Privacy Policy | TMR Car Care Tiruppur`;
    const descText = `Learn how TMR Car Care collects, uses, and protects personal information provided through our website, contact forms, and WhatsApp enquiries in Tiruppur.`;
    const canonicalUrl = `https://tmrcarcare.com/privacy-policy`;

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

    // Scroll spy for active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#F6F5F0] text-[#1C1C1A] font-manrope pt-28 pb-24 min-h-screen relative selection:bg-[#FF4B00] selection:text-white">
      
      {/* HEADER SECTION */}
      <header className="w-full border-b border-[#E2DFD7] pb-12 pt-6">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <h1 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#141414] tracking-tight uppercase leading-tight mb-4">
            PRIVACY POLICY
          </h1>

          <p className="text-base sm:text-lg text-[#555450] max-w-2xl leading-relaxed mb-6 font-medium">
            How TMR Car Care collects, uses and protects information provided through this website and related enquiries.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#777570] tracking-wider uppercase font-mono">
            <span>EFFECTIVE DATE: AUGUST 2026</span>
            <span className="text-[#FF4B00]">•</span>
            <span>LAST UPDATED: AUGUST 2026</span>
          </div>
        </div>
      </header>

      {/* MOBILE HORIZONTAL NAVIGATION RAIL */}
      <div className="lg:hidden sticky top-20 z-20 bg-[#F6F5F0]/95 backdrop-blur border-b border-[#E2DFD7] py-3 px-5 overflow-x-auto no-scrollbar flex items-center gap-4 text-xs font-extrabold uppercase tracking-wider">
        <span className="text-[#999790] shrink-0 text-[10px]">ON THIS PAGE:</span>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            type="button"
            className={`shrink-0 whitespace-nowrap transition-colors ${
              activeSection === section.id
                ? 'text-[#FF4B00] border-b border-[#FF4B00] pb-0.5'
                : 'text-[#555450] hover:text-[#141414]'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* MAIN DOCUMENT BODY */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* DESKTOP STICKY NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4 pr-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#999790] block mb-4">
              ON THIS PAGE
            </span>
            <nav className="flex flex-col space-y-2.5 text-xs font-extrabold uppercase tracking-wider">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    type="button"
                    className={`text-left transition-all duration-200 inline-flex items-center gap-2 ${
                      isActive
                        ? 'text-[#FF4B00] translate-x-1 font-black'
                        : 'text-[#66645E] hover:text-[#141414]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-[#FF4B00]' : 'bg-transparent'}`} />
                    <span>{section.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-[#E2DFD7]/80">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#141414] border-b border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
              >
                <span>HAVE PRIVACY QUESTIONS?</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* DOCUMENT CONTENT (MAX WIDTH ~750PX READING COLUMN) */}
          <main className="col-span-12 lg:col-span-8 max-w-[760px] space-y-16 text-sm sm:text-base text-[#33322E] leading-relaxed">
            
            {/* 1. OVERVIEW */}
            <section id="overview" className="scroll-mt-32 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">01. SCOPE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Overview & Scope
              </h2>
              <p>
                TMR Car Care (&quot;TMR&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website located at{' '}
                <strong className="text-[#141414]">tmrcarcare.com</strong> and provides automotive detailing, ceramic coating, paint protection film (PPF), sun control film, and car care services in Tiruppur, Tamil Nadu.
              </p>
              <p>
                This Privacy Policy describes how we handle information collected directly from vehicle owners, studio visitors, and prospective customers through website browsing, online contact form submissions, and direct communication channels including WhatsApp, phone calls, and email.
              </p>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section id="information-collected" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">02. DATA TYPES</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Information We Collect
              </h2>
              <p>
                We limit data collection to information necessary to answer service requests, provide accurate detailing quotes, and schedule studio appointments in Tiruppur.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#44433E]">
                <li>
                  <strong className="text-[#141414]">Contact & Identification Information:</strong> Name, phone number, WhatsApp contact details, and email address provided voluntarily when requesting a quote or booking an appointment.
                </li>
                <li>
                  <strong className="text-[#141414]">Vehicle Details:</strong> Vehicle make, model, model year, paint condition, and specific service preferences (e.g., PPF, Ceramic Coating, Detailing) shared during enquiries.
                </li>
                <li>
                  <strong className="text-[#141414]">Technical & Usage Data:</strong> Basic HTTP request headers, IP address, browser type, operating system, and device screen parameters automatically collected by standard web servers for site performance monitoring.
                </li>
              </ul>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section id="how-we-use" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">03. PURPOSE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                How We Use Information
              </h2>
              <p>
                Information submitted to TMR Car Care is strictly used to fulfill your requested automotive services and maintain high studio service standards.
              </p>
              <div className="space-y-3 pt-2">
                <p><strong className="text-[#141414]">Primary Business Purposes:</strong></p>
                <ol className="list-decimal pl-5 space-y-1.5 text-[#44433E]">
                  <li>Responding to quote requests, service enquiries, and vehicle compatibility questions.</li>
                  <li>Scheduling and confirming studio inspection appointments at our Tiruppur facility.</li>
                  <li>Providing service progress updates and inspection reports for vehicles in our care.</li>
                  <li>Maintaining client service histories for warranty records (e.g., Ceramic Coating / PPF warranty verification).</li>
                  <li>Improving website performance, navigation ease, and local studio accessibility.</li>
                </ol>
              </div>
            </section>

            {/* 4. WHATSAPP & DIRECT ENQUIRIES */}
            <section id="whatsapp-contact" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">04. COMMUNICATION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                WhatsApp & Direct Enquiries
              </h2>
              <p>
                Our website offers direct click-to-chat links for WhatsApp (<span className="font-mono text-xs text-[#141414] font-bold">wa.me</span>) and phone dialling (<span className="font-mono text-xs text-[#141414] font-bold">tel:</span>).
              </p>
              <p>
                When you initiate a WhatsApp conversation, WhatsApp/Meta processes your message according to WhatsApp&apos;s Privacy Policy. TMR Car Care receives your phone number, profile name, and message content solely to answer your automotive query and manage your studio appointment. We do not transmit unsolicited commercial broadcasts or share your number with third-party telemarketers.
              </p>
            </section>

            {/* 5. COOKIES & LOCAL STORAGE */}
            <section id="cookies-storage" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">05. STORAGE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Cookies & Local Storage
              </h2>
              <p>
                Our website utilizes minimal technical cookies and client-side browser local storage to ensure smooth page transitions, remember user interface preferences, and analyze site stability.
              </p>
              <p>
                We do not deploy invasive third-party cross-site behavioral tracking cookies. You may disable cookies or clear local storage through your web browser settings at any time without restricting access to our core service content.
              </p>
            </section>

            {/* 6. DATA SHARING & THIRD PARTIES */}
            <section id="data-sharing" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">06. SHARING</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Data Sharing & Third Parties
              </h2>
              <p className="font-bold text-[#141414]">
                TMR Car Care does NOT sell, rent, trade, or monetize personal customer information to advertising networks, data brokers, or third parties.
              </p>
              <p>
                Personal information is disclosed only under the following limited operational circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#44433E]">
                <li><strong className="text-[#141414]">Technical Infrastructure Providers:</strong> Web hosting servers, DNS infrastructure, and security services processing site traffic.</li>
                <li><strong className="text-[#141414]">Legal Obligations:</strong> Compliance with applicable laws in India, valid judicial orders, or governmental requests issued by authorized law enforcement agencies.</li>
              </ul>
            </section>

            {/* 7. DATA RETENTION */}
            <section id="data-retention" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">07. RETENTION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Data Retention
              </h2>
              <p>
                Enquiry records and contact information submitted for detailing consultations are retained for as long as required to fulfill the requested service, verify warranty commitments (e.g., multi-year ceramic coating maintenance schedules), or comply with statutory accounting and tax retention obligations under Indian law.
              </p>
            </section>

            {/* 8. SECURITY */}
            <section id="security" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">08. PROTECTION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Data Security
              </h2>
              <p>
                We implement appropriate administrative and technical safeguards to protect your personal information against unauthorized access, loss, misuse, or alteration. All web communications pass over encrypted SSL/TLS connections.
              </p>
            </section>

            {/* 9. USER RIGHTS & FIDUCIARY CONTACT */}
            <section id="user-rights" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">09. YOUR RIGHTS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Your Rights & Data Fiduciary Contact
              </h2>
              <p>
                In accordance with applicable Indian data protection frameworks, vehicle owners and website users have the right to request access to, correction of, or erasure of their personal information maintained in our studio records.
              </p>
              <div className="bg-[#ECEAE2] p-6 rounded-lg border border-[#DCD9CE] space-y-2 mt-4 font-mono text-xs">
                <span className="font-extrabold text-[#FF4B00] uppercase tracking-wider block text-sm font-manrope">
                  DATA FIDUCIARY CONTACT:
                </span>
                <p className="font-bold text-[#141414]">{companyData.name}</p>
                <p className="text-[#555450]">{companyData.address.fullText}</p>
                <p className="text-[#141414]">Phone: {companyData.contact.phoneFormatted}</p>
                <p className="text-[#141414]">Email: {companyData.contact.email}</p>
              </div>
            </section>

            {/* 10. POLICY UPDATES */}
            <section id="policy-updates" className="scroll-mt-32 space-y-4 pt-8 border-t border-[#E2DFD7]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF4B00]">10. UPDATES</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] uppercase tracking-tight">
                Policy Updates
              </h2>
              <p>
                We may revise this Privacy Policy periodically to reflect updates in studio operations, digital services, or regulatory requirements. Any modifications will be posted on this page with an updated &quot;LAST UPDATED&quot; revision date.
              </p>
            </section>

            {/* FINAL BACK TO CONTACT LINK */}
            <div className="pt-12 border-t border-[#E2DFD7] flex items-center justify-between">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#141414] border-b-2 border-[#FF4B00] pb-1 hover:text-[#FF4B00] transition-colors"
              >
                <span>BACK TO CONTACT STUDIO</span>
                <span className="text-base">→</span>
              </Link>

              <Link
                to="/terms"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#777570] hover:text-[#141414] transition-colors"
              >
                <span>VIEW TERMS & CONDITIONS</span>
                <span className="text-base">→</span>
              </Link>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicyPage;
