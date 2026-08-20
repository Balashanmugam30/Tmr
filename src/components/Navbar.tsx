import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { megaMenuData } from '@/data/megaMenu';
import { Logo } from './Logo';
import { MegaMenuPanel } from './MegaMenuPanel';

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
      {/* GLOBAL NAVBAR CONTAINER LAYER */}
      <header
        className={`fixed top-4 md:top-6 left-0 right-0 z-[1000] px-4 md:px-8 pointer-events-none transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-95'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
          
          {/* ZONE 1: INDEPENDENT LEFT BRAND LOGO CAPSULE */}
          <div className="pointer-events-auto shrink-0 z-[1010]">
            <Logo />
          </div>

          {/* ZONE 2: CENTER DYNAMIC ISLAND NAVIGATION DOCK */}
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
            <div className="bg-[#F5F4EF] backdrop-blur-xl border border-black/10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-h-[58px] flex items-center px-4 py-2">
              <nav className="flex items-center gap-1 font-manrope text-xs font-bold uppercase tracking-wider">
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
                            ? 'text-[#FF4B00] bg-black/5 font-extrabold'
                            : isHovered
                            ? 'text-[#050505] bg-black/5 font-extrabold'
                            : 'text-[#050505]/80 hover:text-[#050505]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00] inline-block" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* ZONE 3: INDEPENDENT RIGHT CONTACT ACTION CAPSULE (WARM-WHITE SURFACE) */}
          <div className="pointer-events-auto shrink-0 z-[1010]">
            <Link
              to="/contact"
              className="group flex items-center gap-1.5 bg-[#F5F4EF] border border-black/10 hover:border-[#FF4B00]/50 text-[#050505] px-5 py-3 rounded-full font-manrope font-extrabold text-xs uppercase tracking-widest shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all min-h-[58px]"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF4B00] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
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

      {/* MOBILE TRIGGER & FULLSCREEN DRAWER */}
      <div className="lg:hidden fixed top-4 right-4 z-[1050] pointer-events-auto">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-3 bg-[#F5F4EF] border border-black/10 rounded-full text-[#050505] hover:text-[#FF4B00] transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN DRAWER */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[1040] bg-[#F5F4EF] text-[#050505] backdrop-blur-2xl pt-24 px-6 pb-12 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <Logo heightClassName="h-7" />
            </div>

            <nav className="space-y-4 font-manrope">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-black/10 pb-3">
                  <Link
                    to={item.href}
                    className={`text-xl font-extrabold uppercase tracking-wider flex items-center justify-between ${
                      location.pathname === item.href ? 'text-[#FF4B00]' : 'text-[#050505]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#FF4B00]" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-black/10">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-[#050505] text-white font-manrope font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-lg"
            >
              <span>CONTACT TMR STUDIO →</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
