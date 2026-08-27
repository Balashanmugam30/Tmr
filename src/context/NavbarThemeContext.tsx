import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type NavbarTheme = 'dark' | 'light';

interface NavbarThemeContextType {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
}

const NavbarThemeContext = createContext<NavbarThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
});

export const NavbarThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<NavbarTheme>('dark');
  const location = useLocation();

  useEffect(() => {
    // Determine section under navbar on scroll or DOM mutation
    const updateThemeFromScroll = () => {
      const navbarTop = 0;
      const navbarBottom = 120;
      const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
      
      let currentTheme: NavbarTheme = 'dark'; // Safe fallback default

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Section overlaps top navbar region
        if (rect.top <= navbarBottom && rect.bottom >= navbarTop) {
          const attrTheme = section.getAttribute('data-navbar-theme');
          if (attrTheme === 'light' || attrTheme === 'dark') {
            currentTheme = attrTheme;
          }
        }
      });

      setTheme(currentTheme);
    };

    // Initial check
    updateThemeFromScroll();

    // Attach IntersectionObserver for precise performance
    const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const attrTheme = entry.target.getAttribute('data-navbar-theme');
            if (attrTheme === 'light' || attrTheme === 'dark') {
              const rect = entry.target.getBoundingClientRect();
              if (rect.top <= 140 && rect.bottom >= 0) {
                setTheme(attrTheme);
              }
            }
          }
        });
      },
      {
        rootMargin: '-20px 0px -80% 0px',
        threshold: [0, 0.05],
      }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', updateThemeFromScroll, { passive: true });
    window.addEventListener('resize', updateThemeFromScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateThemeFromScroll);
      window.removeEventListener('resize', updateThemeFromScroll);
    };
  }, [location.pathname, location.search]);

  return (
    <NavbarThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
};

export const useNavbarTheme = () => useContext(NavbarThemeContext);
