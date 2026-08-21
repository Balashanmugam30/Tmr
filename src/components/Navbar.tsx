import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { megaMenuData } from '@/data/megaMenu';
import { Logo } from './Logo';
import { MegaMenuPanel } from './MegaMenuPanel';
import { LiquidGlassSurface } from './LiquidGlassSurface';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [dockRect, setDockRect] = useState<DOMRect | null>(null);

  const lastScrollY = useRef(0);
  const location = useLocation();
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const centerDockRef = useRef<HTMLDivElement>(null);

  // Measure dock bounding box
  const updateDockRect = () => {
    if (centerDockRef.current) {
      setDockRect(centerDockRef.current.getBoundingClientRect());
    }
  };

  // Scroll direction observer
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else {
        if (diff > 10) {
          setIsVisible(false);
          setActiveTab(null);
        } else if (diff < -10) {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
      updateDockRect();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDockRect);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDockRect);
    };
  }, []);

  // Keyboard accessibility: Escape key closes active menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveTab(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveTab(null);
    setIsMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnterTab = (label: string) => {
    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = null;
    }
    updateDockRect();
    const key = label.trim().toUpperCase();
    setActiveTab(key);
  };

  const handleMouseLeaveNav = () => {
    navTimeoutRef.current = setTimeout(() => {
      setActiveTab(null);
    }, 180);
  };

  const activeConfig = activeTab ? megaMenuData[activeTab] : null;

  return (
    <>
      {/* HIDDEN SVG FILTER PRIMITIVE FOR LIQUID GLASS REFRACTION ENGINE */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={0}
        height={0}
        style={{ position: 'absolute', overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id="lg-nav-filter"
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              result="dispMap"
              x={0}
              y={0}
              width={600}
              height={60}
              preserveAspectRatio="none"
              href="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'600'%20height%3D'60'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'gx'%20x1%3D'0%25'%20y1%3D'0%25'%20x2%3D'100%25'%20y2%3D'0%25'%3E%3Cstop%20offset%3D'0%25'%20stop-color%3D'%23000'%2F%3E%3Cstop%20offset%3D'100%25'%20stop-color%3D'%23f00'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D'gy'%20x1%3D'0%25'%20y1%3D'0%25'%20x2%3D'0%25'%20y2%3D'100%25'%3E%3Cstop%20offset%3D'0%25'%20stop-color%3D'%23000'%2F%3E%3Cstop%20offset%3D'100%25'%20stop-color%3D'%230f0'%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D'b'%3E%3CfeGaussianBlur%20stdDeviation%3D'8'%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D'600'%20height%3D'60'%20rx%3D'30'%20fill%3D'url(%23gx)'%20style%3D'mix-blend-mode%3Ascreen'%2F%3E%3Crect%20width%3D'600'%20height%3D'60'%20rx%3D'30'%20fill%3D'url(%23gy)'%20style%3D'mix-blend-mode%3Ascreen'%2F%3E%3Crect%20width%3D'600'%20height%3D'60'%20rx%3D'30'%20fill%3D'%23808080'%20filter%3D'url(%23b)'%2F%3E%3C%2Fsvg%3E"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="dispMap"
              scale={-35}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* GLOBAL NAVBAR CONTAINER LAYER */}
      <header
        className={`fixed top-4 md:top-6 left-0 right-0 z-[1000] px-4 md:px-8 pointer-events-none transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-95'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
          
          {/* ZONE 1: BOXY ARCHITECTURAL LOGO LIQUID GLASS CONTAINER */}
          <div className="pointer-events-auto shrink-0 z-[1010]">
            <Logo useGlass={true} />
          </div>

          {/* ZONE 2: CENTER DYNAMIC NAVIGATION DOCK (SINGLE LIQUID GLASS MATERIAL CAPSULE) */}
          <div
            ref={centerDockRef}
            onMouseEnter={() => {
              if (navTimeoutRef.current) {
                clearTimeout(navTimeoutRef.current);
                navTimeoutRef.current = null;
              }
              updateDockRect();
            }}
            onMouseLeave={handleMouseLeaveNav}
            className="pointer-events-auto hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 z-[1100]"
          >
            <LiquidGlassSurface className="h-[62px] px-3 border border-white/20">
              <nav className="flex items-center gap-1 font-manrope text-xs font-bold uppercase tracking-wider relative z-10">
                {navigationItems.map((item) => {
                  const itemKey = item.label.trim().toUpperCase();
                  const isActive =
                    location.pathname === item.href ||
                    (item.href !== '/' && location.pathname.startsWith(item.href));
                  const isHovered = activeTab === itemKey;

                  return (
                    <div
                      key={item.label}
                      onMouseEnter={() => handleMouseEnterTab(item.label)}
                      className="relative"
                    >
                      <Link
                        to={item.href}
                        className={`relative px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                          isActive
                            ? 'text-white font-extrabold shadow-sm'
                            : isHovered
                            ? 'text-white font-bold bg-white/10'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {/* NESTED ACTIVE INNER OPTICAL HIGHLIGHT */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0 bg-white/15 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />
                        )}

                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#FF4B00] inline-block" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </LiquidGlassSurface>
          </div>

          {/* ZONE 3: RIGHT CONTACT ACTION CAPSULE (PERFECTLY CENTERED LIQUID GLASS CONTROL) */}
          <div className="pointer-events-auto shrink-0 z-[1010]">
            <Link to="/contact" className="inline-flex">
              <LiquidGlassSurface className="h-[62px] px-6 border border-white/20 hover:border-[#FF4B00]/60 transition-colors">
                <div className="group inline-flex items-center justify-center gap-2 text-white font-manrope font-extrabold text-xs uppercase tracking-widest leading-none relative z-10 my-auto">
                  <span>CONTACT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF4B00] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>
              </LiquidGlassSurface>
            </Link>
          </div>

        </div>
      </header>

      {/* PORTAL-BASED MEGA MENU PANEL (ALWAYS UNCLIPPED & ANCHORED) */}
      {activeConfig && (
        <MegaMenuPanel
          config={activeConfig}
          dockRect={dockRect}
          onMouseEnter={() => {
            if (navTimeoutRef.current) {
              clearTimeout(navTimeoutRef.current);
              navTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeaveNav}
        />
      )}

      {/* MOBILE TRIGGER BUTTON WITH UNIFIED GLASS MATERIAL SURFACE */}
      <div className="lg:hidden fixed top-4 right-4 z-[1050] pointer-events-auto">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-3 bg-[#050505]/75 backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:text-[#FF4B00] transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.25)] min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN DRAWER WITH UNIFIED LIQUID GLASS FLOATING PANEL */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[1040] bg-[#050505]/85 text-white backdrop-blur-2xl pt-24 px-6 pb-12 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Logo heightClassName="h-7" useGlass={false} />
            </div>

            <nav className="space-y-3 font-manrope">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-3">
                  <Link
                    to={item.href}
                    className={`text-xl font-extrabold uppercase tracking-wider flex items-center justify-between ${
                      location.pathname === item.href ? 'text-[#FF4B00]' : 'text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#FF4B00]" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/15">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-[#FF4B00] text-white font-manrope font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg hover:bg-white hover:text-black transition-colors"
            >
              <span>CONTACT TMR STUDIO →</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
