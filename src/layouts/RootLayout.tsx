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
  setHeroReverseGateActive: (active: boolean) => void;
  setHeroBackpressure: (constraints: {
    active: boolean;
    maxScrollY?: number;
    minScrollY?: number;
  }) => void;
}

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
  setHeroGateActive: () => {},
  setHeroReverseGateActive: () => {},
  setHeroBackpressure: () => {},
});

export const useLenis = () => useContext(LenisContext);

export const RootLayout: React.FC = () => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const heroGateRef = useRef<{
    forwardActive: boolean;
    gateScrollY: number;
    reverseActive: boolean;
    backpressureActive: boolean;
    maxScrollY: number;
    minScrollY: number;
  }>({
    forwardActive: false,
    gateScrollY: 0,
    reverseActive: false,
    backpressureActive: false,
    maxScrollY: Infinity,
    minScrollY: 0,
  });

  const setHeroGateActive = useCallback((active: boolean, gateScrollY?: number) => {
    heroGateRef.current.forwardActive = active;
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

  const setHeroReverseGateActive = useCallback((active: boolean) => {
    heroGateRef.current.reverseActive = active;
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (active) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const setHeroBackpressure = useCallback((constraints: {
    active: boolean;
    maxScrollY?: number;
    minScrollY?: number;
  }) => {
    heroGateRef.current.backpressureActive = constraints.active;
    heroGateRef.current.maxScrollY = typeof constraints.maxScrollY === 'number' ? constraints.maxScrollY : Infinity;
    heroGateRef.current.minScrollY = typeof constraints.minScrollY === 'number' ? constraints.minScrollY : 0;

    const lenis = lenisRef.current;
    if (!lenis || !constraints.active) return;

    // Smoothly constrain targetScroll if it has overshot the active boundary
    if (typeof constraints.maxScrollY === 'number' && lenis.targetScroll > constraints.maxScrollY) {
      lenis.targetScroll = constraints.maxScrollY;
    }
    if (typeof constraints.minScrollY === 'number' && lenis.targetScroll < constraints.minScrollY) {
      lenis.targetScroll = constraints.minScrollY;
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
        // 1. Forward completion gate: Freeze downward scroll accumulation
        if (heroGateRef.current.forwardActive && data.deltaY > 0) {
          if (data.event?.cancelable) {
            data.event.preventDefault();
          }
          return false;
        }

        // 2. Reverse completion gate: Freeze upward scroll accumulation at top
        if (heroGateRef.current.reverseActive && data.deltaY < 0) {
          if (data.event?.cancelable) {
            data.event.preventDefault();
          }
          return false;
        }

        // 3. Resource-aware scroll backpressure: Constrain physical/Lenis accumulation
        if (heroGateRef.current.backpressureActive) {
          const currentTarget = lenisRef.current ? lenisRef.current.targetScroll : window.scrollY;

          if (data.deltaY > 0 && typeof heroGateRef.current.maxScrollY === 'number') {
            if (currentTarget >= heroGateRef.current.maxScrollY) {
              if (data.event?.cancelable) {
                data.event.preventDefault();
              }
              return false;
            } else if (currentTarget + data.deltaY > heroGateRef.current.maxScrollY) {
              data.deltaY = Math.max(0, heroGateRef.current.maxScrollY - currentTarget);
              if (data.deltaY <= 0) {
                if (data.event?.cancelable) data.event.preventDefault();
                return false;
              }
            }
          }

          if (data.deltaY < 0 && typeof heroGateRef.current.minScrollY === 'number') {
            if (currentTarget <= heroGateRef.current.minScrollY) {
              if (data.event?.cancelable) {
                data.event.preventDefault();
              }
              return false;
            } else if (currentTarget + data.deltaY < heroGateRef.current.minScrollY) {
              data.deltaY = Math.min(0, heroGateRef.current.minScrollY - currentTarget);
              if (data.deltaY >= 0) {
                if (data.event?.cancelable) data.event.preventDefault();
                return false;
              }
            }
          }
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
    <LenisContext.Provider
      value={{
        lenis: lenisInstance,
        setHeroGateActive,
        setHeroReverseGateActive,
        setHeroBackpressure,
      }}
    >
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
