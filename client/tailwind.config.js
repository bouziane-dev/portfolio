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
        primary: '#1a1a2e',
        lightgray: '#929EB0'
      },
      backgroundSize: {
        '200%': '200% auto'
      },
      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        gradient: 'gradientFlow 3s infinite linear'
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
