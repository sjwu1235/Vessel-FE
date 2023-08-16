/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary-a': '#ff642e', //orange
      'primary-t': '#ffffff', //white
      'primary-c': '#000000', //black
      'secondary-dg': '#1e1f21', //dark gray
      'secondary-lg': '#b2b2b2', //light gray
      'primary-b': '#003450', //dark blue
      'secondary-b': '#013f61', //light blue
      'accent-b': '#42f595', //turqoise
      'error-t': '#ff642e', //orange
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