/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tmr: {
          orange: '#FF4B00',
          black: '#050505',
          softblack: '#111111',
          warmwhite: '#F5F4EF',
          white: '#FFFFFF',
          concrete: '#D8D8D5',
          muted: '#858585',
          surface: '#fff8f6',
          surfacedim: '#f3d3ca',
          surfacecontainer: '#ffe9e4',
          outline: '#916f66',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        intertight: ['Inter Tight', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        editorial: ['Instrument Serif', 'serif'],
      },
      maxWidth: {
        'container': '1360px',
      },
      spacing: {
        'section-gap': '160px',
        'desktop-margin': '64px',
        'mobile-margin': '20px',
      },
      borderRadius: {
        'tmr': '2px',
      }
    },
  },
  plugins: [],
}
