/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'accent': ['Dancing Script', 'cursive'],
        'primary': ['Lato', 'sans-serif'],
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'black-25': 'rgba(0, 0, 0, 0.25)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'black-75': 'rgba(0, 0, 0, 0.75)',
        'black-85': 'rgba(0, 0, 0, 0.85)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
        'misty-sky': '#DADFE3',
        'forest-night': '#181C18',
        'vibrant-green': '#57B957',
        'charcoal-gray': '#555555',
        'silver-mist': '#B3B3B3',
        'silver-mist-25': 'rgba(179, 179, 179, 0.25)',
        'soft-sage': '#C7DAC6',
        'detail-color': 'rgb(199 218 198 / 77%);',
        'lavender-haze': '#E7E3E7',
        'frosty-blue': '#ECF0F6',
        'midnight-blue': '#171B27',
        'slate-black': '#262931',
        'meadow-green': '#A0C39E',
        'ocean-blue': '#5784B9',
      },
    },
  },
  plugins: [],
}

