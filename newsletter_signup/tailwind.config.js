/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "custom-roboto": ['Roboto', 'sans-serif']
      },
      fontWeight: {
        'regular': '400',
        'custom-bold': '700',
      },
      fontSize:{
        'custom-xl': '50px'
      },
      width:{
        "custom-md": '75%',
        "custom-l": '46%',
        "custom-fix": '60rem',
      },
      colors: {
        "custom-dark-slate-grey": "hsl(234, 29%, 20%)",
        "custom-charcoal-grey": "hsl(235, 18%, 26%)",
        "custom-grey":"hsl(231, 7%, 60%)",
        "custom-white":"hsl(0, 0%, 100%)",
        "primary":"hsl(4, 100%, 67%)",
        "gradient-1":"#FF527B",
        "gradient-2":"#FF7D4C",
      }
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}

