module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        likepink: '#FFD9D9',
        likeblue: '#7a80be',
        likepurple: '#a3a8dc',
        likestrongblue: "#1862a8",
        likegray: "#C4C4C4",
        likewhite: "#F9F5EF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
