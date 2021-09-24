module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '32rem',
        '200': '37rem',
        '250': '40rem',
        '300': '43rem',
        '350': '48rem',
        '400': '53rem',
        '450': '60rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
