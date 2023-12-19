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
      fontFamily: {
        'main': ['SF-Pro-Display', 'system-ui']
      },
      colors: {
        'lightPrimary': '#00000',
        'lightSecondary': '#86878D',
        'lightTertiary': '#BEBFC4',
        'lightQuaternary': '#D4D5DA',
        'darkPrimary': '#ffffff',
        'darkSecondary': '#A19EB7',
        'darkTertiary': '#6A658A',
        'darkQuaternary': '#9589B5',
        'weatherSolidPurple':'#48319D',
        'weatherSolidDark':'#1F1D47',
        'weatherSolidPink': '#C427FB',
        'weatherSolidLight': '#E0D9FF',
      },
    },
  },
  plugins: [],
}
