module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        likepink: '#fdcbcb',
        likeblue: '#7a80be',
        likepurple: '#a3a8dc',
        likestrongblue: "#1862a8"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
