/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: { 


      gray: {
        900: '#202024',
        800: '#09090A',
        400: '#7C7C8A',
        100: '#E1E1E6',
      },
      cyan: {
        500: '#81D8F7',
        300: '#9EDCF2',
      },

      'transparent': 'transparent',
      'black': '#000',
      'white': '#FFF',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
