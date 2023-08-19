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
        'overlay-color': '#53284B',
        'bg-purple-light': '#2A2550',
        'bg-purple-dark': '#251D3A',
        'orange-light': '#E78F42',
        'orange-dark': '#FF7700',
        'white-white': '#FFFFFF',
        'button-purple-highlight': '#8000FF',
        'text-beige': '#CEAB8C',
        'text-purple-light': '#D7AFFF',
        'card-purple-light': '#5C2BA9',

      },
      keyframes: {
        'border-animation': {
          '0%': { borderWidth: '0px' },
          '50%': { borderWidth: '2px' },
          '100%': { borderWidth: '0px' },
        },
      },
      width: {
        '80': '80%',
        '0.5px': '0.5px',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      borderWidth: {
        '0.5': '0.5px',
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      height:{
        '80': '80%',
        '85': '85%',
        '90': '90%',  
        '95': '95%',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      dropShadow: {
        '3xl': '2px 5px 3px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        '0.5px': '0.5px',
        '151.5px': '151.5px',
        '177px': '177px',
        '60px' : '60px',
        '10%': '10%',
        '1/5': '20%',
      }

    },
  },
  plugins: [],
}

