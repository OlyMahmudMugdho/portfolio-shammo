/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        sidebar: {
          DEFAULT: '#1a1a2e',
          light: '#252542',
        },
      },
      width: {
        sidebar: '280px',
      },
    },
  },
  plugins: [],
};