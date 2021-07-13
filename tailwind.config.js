module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    zIndex: {
          '-1': -1,
        },
    fontFamily: {
      "text": ['Indie Flower', 'cursive'],
      'h': ['Rochester', 'cursive'],
      'head1':['Sevillana', 'cursive'],
      'sat': ['Satisfy', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
