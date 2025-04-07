/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1624',
        lightgray: '#929EB0',
        violet: '#945DD6',
        blue: '#13ADC7',
        purple: '#6978D1'
      },
      dropShadow: {
        glow: '0 0 8px rgba(96, 165, 250, 0.8)'
      },
      backgroundSize: {
        '200%': '200% auto'
      },

      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        gradient: 'gradientFlow 3s infinite linear',
        pulseScale: 'pulseScale 3s ease-in-out infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: []
}
