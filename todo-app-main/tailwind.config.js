/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class','[data-theme="dark"]'],
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': '500px',
        'custom-md': '700px',
        'custom-lg': '1100px',
      },
      fontFamily:{
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      letterSpacing:{
        'custom-heading': '14px',
      },
      colors:{
        'custom-blue':'hsl(220, 98%, 61%)',
        'dm-custom-bg':'hsl(235, 21%, 11%)',
        'dm-custom-light-black':'hsl(235, 24%, 19%)',
        'dm-custom-white':'hsl(236, 33%, 92%)',
        'dm-custom-light-white':'hsl(234, 39%, 85%)',
        'dm-custom-light-grey':'hsl(234, 11%, 52%)',
        'dm-custom-medium-grey':'hsl(233, 14%, 35%)',
        'dm-custom-dark-grey':'hsl(237, 14%, 26%)',
      }
    },
  },
  plugins: [],
}

