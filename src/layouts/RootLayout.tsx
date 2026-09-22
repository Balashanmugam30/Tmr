import React, { useEffect, useState, useRef, useCallback, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { OfflineState } from '@/components/OfflineState';
import { ScrollToHash } from '@/components/ScrollToHash';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { NavbarThemeProvider } from '@/context/NavbarThemeContext';

gsap.registerPlugin(ScrollTrigger);

export interface LenisContextType {
  lenis: Lenis | null;
  setHeroGateActive: (active: boolean, gateScrollY?: number) => void;
}

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
  setHeroGateActive: () => {},
});

export const useLenis = () => useContext(LenisContext);

export const RootLayout: React.FC = () => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const heroGateRef = useRef<{ active: boolean; gateScrollY: number }>({
    active: false,
    gateScrollY: 0,
  });

  const setHeroGateActive = useCallback((active: boolean, gateScrollY?: number) => {
    heroGateRef.current.active = active;
    if (typeof gateScrollY === 'number' && gateScrollY > 0) {
      heroGateRef.current.gateScrollY = gateScrollY;
    }
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (active) {
      const targetY = typeof gateScrollY === 'number' && gateScrollY > 0 ? gateScrollY : heroGateRef.current.gateScrollY;
      if (targetY > 0) {
        lenis.scrollTo(targetY, { immediate: true });
      }
    }
  }, []);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      virtualScroll: (data) => {
        // Freeze downward scroll accumulation when hero completion gate is active
        if (heroGateRef.current.active && data.deltaY > 0) {
          if (data.event?.cancelable) {
            data.event.preventDefault();
          }
          return false;
        }
        return true;
      },
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);
    (window as any).__TMR_LENIS__ = lenis;

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    return () => {
      delete (window as any).__TMR_LENIS__;
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, setHeroGateActive }}>
      <NavbarThemeProvider>
        <ScrollToHash />
        <div className="min-h-screen flex flex-col bg-tmr-black text-tmr-softblack font-sans selection:bg-tmr-orange selection:text-white">
          <Navbar />
          <main className="flex-grow w-full overflow-x-clip">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <Footer />
          <OfflineState />
          <FloatingWhatsApp />
        </div>
      </NavbarThemeProvider>
    </LenisContext.Provider>
  );
};
