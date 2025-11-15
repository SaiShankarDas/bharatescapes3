/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-start': '#1C82A3',
        'primary-end': '#00BAA3',
        'accent-gold': '#FFC700',
        'accent-pink': '#F000B8',
        'text-light': '#FFFFFF',
        'text-muted': '#B2DFDB',
        'dark-bg': '#0A192F',
        'warm-white': '#FFF8E7',

        // New theme colors
        'theme-light-bg': '#EDEDED',
        'theme-text-dark': '#2E2E2E',
        'theme-accent-orange-start': '#FFAA00',
        'theme-accent-orange-end': '#FF6D00',
        
        // User requested colors
        'royal-amber': '#F6A700',
        'warm-wine': '#B23A48',
        'soft-terracotta': '#E26D5A',
        'sky-blue': '#4FD1C5',

        // Registration Page Colors
        'warm-gold-dark': '#b56205',
        'warm-gold-light': '#D97706',
        'warm-bg': '#FDFBF5',
        'warm-text': '#333333',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom right, #1C82A3 0%, #00BAA3 100%)',
        'active-nav-gradient': 'linear-gradient(to bottom right, #FFAA00, #FF6D00)',
        'doodle-pattern': `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(50 50) rotate(-20)'%3E%3Cpath d='M2 2 L40 18 L2 34 L10 18 Z' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(450 80)'%3E%3Ccircle cx='0' cy='0' r='25' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 -20 L8 0 L0 20 L-8 0 Z' stroke='white' stroke-width='1.5' fill='none' transform='rotate(45)'/%3E%3Cpath d='M0 -25 L0 -21 M0 25 L0 21 M-25 0 L-21 0 M25 0 L21 0' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(100 400)'%3E%3Crect x='-25' y='-18' width='50' height='36' rx='5' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-10 -18 q 10 -15 20 0' stroke='white' stroke-width='1.5' fill='none'/%3E%3Crect x='-18' y='-10' width='10' height='8' transform='rotate(-15)' stroke='white' stroke-width='1' fill='none'/%3E%3Ccircle cx='12' cy='5' r='5' stroke='white' stroke-width='1' fill='none'/%3E%3C/g%3E%3Cg transform='translate(280 280)'%3E%3Cpath d='M-30 15 C 0 25, 30 15' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 15 V -20' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 -20 C 20 -20, 25 -5, 20 0' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 -15 C -20 -15, -25 0, -20 5' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 -10 C 15 -25, 30 -10, 20 -5' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(400 420)'%3E%3Ccircle cx='-18' cy='0' r='12' stroke='white' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='18' cy='0' r='12' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-6 0 h12' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(150 120)'%3E%3Cpath d='M-20 0 A 20 20 0 0 1 20 0' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cline x1='-20' y1='0' x2='20' y2='0' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cline x1='5' y1='0' x2='15' y2='-25' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cg transform='translate(15 -25) rotate(-30)'%3E%3Cpath d='M0 0 L 10 0 A 10 10 0 0 1 0 10 Z' stroke='white' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(200 20)'%3E%3Cpath d='M0 -15 L5 -5 L15 0 L5 5 L0 15 L-5 5 L-15 0 L-5 -5 Z' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(40 250) rotate(20)'%3E%3Cpath d='M0 30 C 20 -10, -20 -30, 0 -50' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-1 -10 C -15 -5, -12 5' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 -30 C -20 -25, -18 -15' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M1 10 C 15 5, 12 -5' stroke='white' stroke-width='1.5' fill='none'/%3E%3C/g%3E%3Cg transform='translate(350 180)'%3E%3Cpath d='M-20 0 a10 10 0 0 1 20 0 a12 12 0 0 1 20 0 h-40z' stroke='white' stroke-width='1.5' fill='none' /%3E%3C/g%3E%3C/svg%3E")`,
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        'draw-line': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'draw-line': 'draw-line 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
