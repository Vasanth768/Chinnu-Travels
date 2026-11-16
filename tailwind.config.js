/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040B14',
          900: '#07111F', // Deep Midnight Navy
          800: '#0D1B2E',
          700: '#142742',
          600: '#1D3557',
        },
        gold: {
          100: '#FDFBF7',
          200: '#F9F1E0',
          300: '#ECD8B0',
          400: '#E1C283',
          500: '#D6AD60', // Luxury Gold
          600: '#B88F3B',
          700: '#946F25',
          800: '#6C4F17',
        },
        charcoal: {
          900: '#101820', // Dark Charcoal
          800: '#1A232E',
          700: '#263240',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ECC880 0%, #D6AD60 50%, #A87E2C 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D6AD60 0%, #FFF2CC 50%, #D6AD60 100%)',
        'navy-gradient': 'linear-gradient(180deg, #07111F 0%, #040B14 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 27, 46, 0.8) 0%, rgba(7, 17, 31, 0.95) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(214, 173, 96, 0.3)',
        'gold-glow-lg': '0 0 45px -5px rgba(214, 173, 96, 0.4)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

