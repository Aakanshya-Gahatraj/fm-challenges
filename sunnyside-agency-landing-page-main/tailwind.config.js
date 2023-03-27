/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': '530px',
        'custom-padding': '661px',
        'custom-md': '992px',
        'custom-lg': '1400px',
      },
      fontFamily: {
        'custom-heading': ['"Fraunces"', 'serif'],
        'custom-body': ['"Barlow"', 'sans-serif'],
      },
      letterSpacing: {
        'custom-heading' : '6px',
        'custom-heading-big' : '9px',
        'custom-body' : '3px',
      },
      height: {
        'custom-0' : '94vh',
        'custom-1' : '32rem',
        'custom-2' : '37rem',
        'custom-3' : '20rem',
      },
      paddingTop: {
        'custom-1' : '22rem',
      },
      colors: {
        'custom-light-grey' : 'hsl(210, 4%, 67%)',
        'custom-moderate-grey' : 'hsl(232, 10%, 55%)',
        'custom-dark-grey' : 'hsl(213, 9%, 39%)',
        'custom-very-dark-grey' : 'hsl(212, 27%, 19%)',
        'custom-light-cyan' : 'hsl(167, 51%, 73%)',
        'custom-moderate-cyan' : 'hsl(168, 34%, 41%)',
        'custom-moderate-cyan-2' : 'hsl(168, 45%, 32%)',
        'custom-dark-cyan' : ' hsl(167, 40%, 24%)',
        'custom-soft-red' : ' hsl(7, 97%, 76%)',
        'custom-yellow' : '  hsl(51, 89%, 75%)',
        'custom-dark-blue' : '  hsl(198, 62%, 26%)',
      },
    },
  },
  plugins: [],
}
