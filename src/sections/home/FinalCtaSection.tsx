import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyData } from '@/data/company';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(companyData.address.fullText)}`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        console.warn('Final CTA video autoplay interaction required:', err);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const animItems = sectionRef.current?.querySelectorAll('.cta-anim-item');

      if (animItems && animItems.length > 0) {
        gsap.fromTo(
          animItems,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="min-h-[100svh] h-[100svh] relative w-full overflow-hidden isolate z-20 bg-black text-[#F5F4EF] font-intertight flex flex-col justify-between"
    >
      {/* 4K FULL BLEED BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        src="/videos/cta/cta-cinematic.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      >
        Your browser does not support the video tag.
      </video>

      {/* LIGHTENED CINEMATIC GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none z-10" />

      {/* TOP DIVIDER LINE */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 md:px-12 pt-8">
        <div className="w-full border-t border-white/15" />
      </div>

      {/* MAIN EDITORIAL CTA CONTENT */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 md:px-12 w-full my-auto">
        <div className="max-w-[720px] space-y-6">
          <h2 className="cta-anim-item font-intertight font-extrabold text-5xl sm:text-7xl lg:text-[90px] uppercase text-white leading-[0.88] tracking-[-0.05em]">
            THE FINISH <br />
            <span className="text-[#FF4B00]">MATTERS.</span>
          </h2>

          <p className="cta-anim-item font-editorial text-xl sm:text-3xl italic text-white/90 leading-tight max-w-[560px]">
            "Precision care for the vehicle you care about."
          </p>

          <div className="cta-anim-item pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 h-[54px] px-8 rounded-[14px] bg-[#FF4B00] text-white font-intertight font-extrabold text-xs uppercase tracking-widest border border-white/20 shadow-[0_8px_24px_rgba(255,75,0,0.35)] hover:bg-[#FF5C14] hover:shadow-[0_12px_32px_rgba(255,75,0,0.5)] transition-all duration-300"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-intertight font-extrabold uppercase tracking-widest text-white/75 hover:text-white transition-colors py-3"
            >
              <span>GET DIRECTIONS</span>
              <span className="text-[#FF4B00] group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM DIVIDER LINE */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 md:px-12 pb-8">
        <div className="w-full border-t border-white/15" />
      </div>
    </section>
  );
};
