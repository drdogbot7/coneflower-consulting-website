module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      'transparent': 'transparent',
      'white': 'white',
      'black': 'black',
      gray: {
        100: "#EEEEEF",
        200: "#D4D5D6",
        300: "#BBBBBD",
        400: "#87898C",
        500: "#54565B",
        600: "#4C4D52",
        700: "#323437",
        800: "#262729",
        900: "#191A1B"
      },
      orange: '#E66A2C',
      purple: '#4F3590',
      lime: '#CDDC29',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
