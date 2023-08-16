/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'orange': '#ff642e',
      'white': '#ffffff',
      'black': '#000000',
      'dark-gray': '#1e1f21',
      'light-gray': '#b2b2b2',
      'dark-blue': '#003450',
      'light-blue': '#013f61',
      'turquoise': '#42f595',
    },
    extend: {
      fontFamily: {
        primary: "nasalization",
        audiowide: "Audiowide, cursive",
      },
      space: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}