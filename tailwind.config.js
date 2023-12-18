/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-primary': '#00000',
        'light-secondary': '#86878D',
        'light-tertiary': '#BEBFC4',
        'light-quaternary': '#D4D5DA',
        'dark-primary': '#ffffff',
        'dark-secondary': '#A19EB7',
        'dark-tertiary': '#6A658A',
        'dark-quaternary': '#9589B5',
        'weather-solid-purple':'#48319D',
        'weather-solid-dark':'#1F1D47',
        'weather-solid-pink': '#C427FB',
        'weather-solid-light': '#E0D9FF',
      }
    },
  },
  plugins: [],
}
