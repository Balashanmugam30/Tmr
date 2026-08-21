import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/Container';

gsap.registerPlugin(ScrollTrigger);

export const ApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Programmatic Video Playback & Viewport Intersection Observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted & playsInline for browser autoplay compliance
    video.muted = true;
    video.playsInline = true;

    const handlePlaying = () => {
      setIsVideoPlaying(true);
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('timeupdate', () => {
      if (video.currentTime > 0 && !isVideoPlaying) {
        setIsVideoPlaying(true);
      }
    });

    // Programmatic play attempt
    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsVideoPlaying(true);
      } catch (err) {
        console.warn('Approach video autoplay interaction required:', err);
      }
    };

    // IntersectionObserver to play video when in viewport and pause when out
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

    return () => {
      video.removeEventListener('playing', handlePlaying);
      observer.disconnect();
    };
  }, [isVideoPlaying]);

  // GSAP Entrance Timelines
  useEffect(() => {
    if (!sectionRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      });

      if (videoWrapperRef.current) {
        tl.fromTo(
          videoWrapperRef.current,
          { opacity: 0, scale: 1.03 },
          { opacity: 1, scale: 1.00, duration: 1.1 },
          0
        );
      }

      if (grainRef.current) {
        tl.fromTo(
          grainRef.current,
          { opacity: 0 },
          { opacity: 0.07, duration: 0.8 },
          0.1
        );
      }

      if (textGroupRef.current) {
        const textElements = textGroupRef.current.querySelectorAll('.approach-text-item');
        tl.fromTo(
          textElements,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.06 },
          0.2
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 78%',
        end: 'bottom 20%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.pause(0),
        onLeaveBack: () => tl.pause(0),
      });

      if (videoWrapperRef.current) {
        gsap.to(videoWrapperRef.current, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="w-full bg-[#050505] text-white overflow-hidden relative z-20 border-b border-white/10 selection:bg-[#FF4B00] selection:text-white min-h-screen flex flex-col justify-between"
    >
      {/* RIGHT HALF (50% VIEWPORT WIDTH, 100% HEIGHT): FULL-BLEED CINEMATIC VIDEO PANEL */}
      <div
        ref={videoWrapperRef}
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden bg-black rounded-none"
      >
        {/* POSTER LOADING FALLBACK LAYER */}
        <img
          src="/videos/approach/approach-poster.webp"
          alt="TMR Cinematic Automotive Detailing Studio"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 pointer-events-none z-10 ${
            isVideoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* LOCAL H.264 MP4 CINEMATIC VIDEO (FULL-BLEED COVER CROP) */}
        <video
          ref={videoRef}
          src="/videos/approach/approach-cinematic.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out z-0 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Your browser does not support the video tag.
        </video>

        {/* SUBTLE CINEMATIC GRADIENT OVERLAY ON VIDEO */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none z-20" />
      </div>

      {/* SUBTLE CINEMATIC FILM GRAIN / NOISE OVERLAY */}
      <div
        ref={grainRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-7 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px]"
      />

      {/* CONTENT LAYER OVER 50/50 SPLIT SCREEN */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center py-12 md:py-16">
        
        {/* MAIN EDITORIAL CONTENT: LEFT 50% VIEWPORT CONTAINING RESTRAINED LOWER-LEFT EDITORIAL COPY */}
        <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 my-auto">
          <div className="w-full lg:w-1/2 flex flex-col justify-end lg:pr-12 py-8 lg:py-16">
            <div ref={textGroupRef} className="space-y-4 max-w-[380px]">
              {/* RESTRAINED MAIN HEADLINE */}
              <h2 className="approach-text-item font-intertight font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[0.94] tracking-[-0.04em]">
                PRECISION IN MOTION.
              </h2>

              {/* SHORT EDITORIAL STATEMENT */}
              <p className="approach-text-item font-editorial text-base sm:text-lg lg:text-xl italic text-white/85 leading-relaxed">
                "We engineer every stage around the condition of the vehicle, the surface, and the finish."
              </p>

              {/* RESTRAINED EDITORIAL CTA */}
              <div className="approach-text-item pt-2">
                <Link
                  to="/services"
                  aria-label="Discover the TMR car care detailing method and process"
                  className="group inline-flex flex-col gap-1 text-xs font-intertight font-extrabold uppercase tracking-widest text-white hover:text-[#FF4B00] transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>DISCOVER THE TMR METHOD</span>
                    <span className="text-[#FF4B00] group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                  </span>
                  <span className="h-[1.5px] w-10 group-hover:w-full bg-[#FF4B00] transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
