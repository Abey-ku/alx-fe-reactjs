module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Example of adding the 'active' variant for background color
    },
  },
  plugins: [],
}
