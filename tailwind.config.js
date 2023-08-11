/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'turquoise': '#1F9C95',
    },
    extend: {
      fontFamily: {
        'ibm': ['IBM Plex Mono', 'sans-serif'],
        'libre': ['Libre Franklin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}