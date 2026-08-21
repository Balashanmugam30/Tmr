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
          { opacity: 0, scale: 1.04 },
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
          y: -25,
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
      className="w-full bg-[#050505] text-white overflow-hidden relative z-20 border-b border-white/10 selection:bg-[#FF4B00] selection:text-white min-h-screen lg:min-h-[115vh] py-12 md:py-20 flex flex-col justify-between"
    >
      {/* SUBTLE CINEMATIC FILM GRAIN / NOISE OVERLAY */}
      <div
        ref={grainRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-7 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px]"
      />

      {/* TOP ARCHITECTURAL METADATA ROW */}
      <Container className="relative z-20 pt-4">
        <div className="w-full border-t border-white/10 pt-6 flex items-center justify-between font-intertight font-bold text-xs uppercase tracking-[0.14em] text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#FF4B00]">02</span>
            <span className="text-white/30">/</span>
            <span className="text-white">APPROACH</span>
          </div>
          <span className="text-white/40 tracking-[0.2em] hidden sm:inline-block">THE TMR METHOD // TIRUPPUR STUDIO</span>
        </div>
      </Container>

      {/* MAIN CINEMATIC COMPOSITION: LEFT (45% NEGATIVE SPACE + BOTTOM EDITORIAL TEXT) / RIGHT (PORTRAIT EDITORIAL VIDEO) */}
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 my-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[78vh]">
          
          {/* LEFT COLUMN (COLUMNS 1–6 / ~45% WIDTH): INTENTIONAL LARGE NEGATIVE SPACE WITH LOWER-LEFT EDITORIAL COPY */}
          <div className="lg:col-span-6 relative flex flex-col justify-between h-full py-6 lg:py-12">
            
            {/* INTENTIONAL LARGE TOP NEGATIVE SPACE */}
            <div className="hidden lg:block flex-1 min-h-[180px]" />

            {/* LOWER-LEFT RESTRAINED EDITORIAL COPY GROUP */}
            <div ref={textGroupRef} className="space-y-4 max-w-[380px] lg:pl-4">
              {/* EYEBROW */}
              <div className="approach-text-item font-intertight font-extrabold text-[11px] uppercase tracking-[0.22em] text-[#FF4B00]">
                02 // APPROACH
              </div>

              {/* RESTRAINED MAIN HEADLINE (28–40px) */}
              <h2 className="approach-text-item font-intertight font-extrabold text-3xl sm:text-4xl text-white uppercase leading-[0.96] tracking-[-0.04em]">
                PRECISION IN MOTION.
              </h2>

              {/* SHORT EDITORIAL STATEMENT */}
              <p className="approach-text-item font-editorial text-base sm:text-lg italic text-white/80 leading-relaxed">
                "We engineer every stage around the condition of the vehicle, the surface, and the finish."
              </p>

              {/* RESTRAINED EDITORIAL CTA */}
              <div className="approach-text-item pt-2">
                <Link
                  to="/services"
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

          {/* RIGHT COLUMN (COLUMNS 7–12): TALL VERTICAL PORTRAIT EDITORIAL CINEMATIC VIDEO (9:16 ASPECT RATIO) */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div
              ref={videoWrapperRef}
              className="relative w-full max-w-[380px] lg:w-[35vw] aspect-[9/16] max-h-[82vh] overflow-hidden rounded-[18px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] group bg-black"
            >
              {/* POSTER LOADING FALLBACK LAYER (FADES OUT WHEN VIDEO IS PLAYING) */}
              <img
                src="/videos/approach/approach-poster.webp"
                alt="TMR Cinematic Automotive Detailing Studio"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 pointer-events-none z-10 ${
                  isVideoPlaying ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* LOCAL H.264 MP4 CINEMATIC VIDEO (PORTRAIT COVER CROP) */}
              <video
                ref={videoRef}
                src="/videos/approach/approach-cinematic.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02] z-0 ${
                  isVideoPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Your browser does not support the video tag.
              </video>

              {/* SUBTLE CINEMATIC GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-20" />

              {/* REFINED GLASSMORPHIC BADGE */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 pointer-events-none font-intertight z-20">
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/10">
                  CINEMATIC STUDIO REFINEMENT // 9:16
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM TECHNICAL METADATA DIRECTION FOOTER */}
      <Container className="relative z-20 pb-2">
        <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-intertight text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <span>CONTINUOUS TOOL TRAJECTORY →</span>
          <span>TMR / AUTOMOTIVE CARE</span>
        </div>
      </Container>
    </section>
  );
};
