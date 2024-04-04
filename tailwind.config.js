/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {  
        primaryBackgroound: '#FFF7FF',
        darkPurple: '#655A6F',
        lightPurple: '#6E528A',
        bgPrimary: '#FFF7FF',
        primaryRed: '#d62828',
        primaryOrange: '#f77f00', 
        orangeLight: '#fcbf49',
        yellowLight: '#eae2b7',
        
      }
    },
  },
}
