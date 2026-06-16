/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base:    '#0a0a0f',
        surface: '#111118',
        card:    '#16161f',
        border:  '#1e1e2e',
        borderB: '#2a2a3e',
        accent:  '#7c6af7',
        accentS: '#a895ff',
        teal:    '#2dd4bf',
        textP:   '#e8e8f0',
        textS:   '#9898b8',
        textM:   '#5a5a7a',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        pulse2:    'pulse2 2s infinite',
        scrollDot: 'scrollDot 1.8s infinite',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%':       { opacity: 0.5, transform: 'scale(1.4)' },
        },
        scrollDot: {
          '0%':   { top: '5px', opacity: 1 },
          '100%': { top: '18px', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
