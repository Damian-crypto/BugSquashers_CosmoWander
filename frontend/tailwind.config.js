/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/background.gif')",
      },
      colors: {
        'overlay-color' : '#53284B',
        'bg-purple-light': '#2A2550',
        'bg-purple-dark': '#251D3A',
        'orange-light': '#E78F42',
        'white-white': '#FFFFFF',
        'button-purple-highlight': '#8000FF',

      },
      keyframes: {
        'border-animation': {
          '0%': { borderWidth: '0px' },
          '50%': { borderWidth: '2px' },
          '100%': { borderWidth: '0px' },
        },
      },
      width: {
        '80': '80%'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       }
      
  },
  },
  plugins: [],
}

