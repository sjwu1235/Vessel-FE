/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    colors: {
      'primary-a': '#5bcacf', //turqoise
      'primary-d': '#fcd77b', //yellow
      'primary-t': '#ffffff', //white
      'primary-c': '#000000', //black
      'primary-x': '#1a1632', //skyfall
      'secondary-dg': '#1e1f21', //dark gray
      'secondary-lg': '#b2b2b2', //light gray
      'primary-b': '#1a1632', //skyfall
      'secondary-b': '#2f2759', //light blue
      'secondary-d': '#fcd77b', //white
      'accent-b': '#fcd77b', //turqoise
      'error-t': '#ff642e', //error
    },
    extend: {
      fontFamily: {
        primary: "nasalization",
        audiowide: "Audiowide, cursive",
        monserrat: "montserrat"
      },
      space: {
        '5px': '5px',
      },
      width: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '128': '32rem'
      },
      backgroundColor: {
        'input-autofill': 'transparent',
      },
      // boxShadow: {
      //   'inner-xl': '0 0 0 50px inset #1a1632 !important',
      //   'inner-sm': '0 0 0 2px #1a1632a2 !important'
      // },
      backgroundImage: {
        "background-image": 'url("https://www.transparenttextures.com/patterns/axiom-pattern.png")'
      },
      boxShadow: {
        'inner-xl': '0 0 0 100px inset transparent !important',
        'inner-sm': '0 0 0 2px inset transparent !important'
      },
      textColor: {
        'autofill': '#ffffff',
      },
    },
  },
  plugins: [
  ],
}