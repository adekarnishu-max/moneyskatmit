/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d5dff0',
          200: '#adc0e1',
          300: '#7d9dcd',
          400: '#5479b8',
          500: '#3358a0',
          600: '#1e3a6e',
          700: '#162d56',
          800: '#0f1f3d',
          900: '#091529',
          950: '#050d1a',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #091529 0%, #162d56 40%, #1e3a6e 70%, #1a3060 100%)',
        'orange-gradient': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'card-gradient': 'linear-gradient(145deg, #162d56 0%, #0f1f3d 100%)',
      },
    },
  },
  plugins: [],
};
