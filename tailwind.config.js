/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm':{'min': '0px', 'max': '568px'},
      'other': {'min':'568px'},
    },
  },
  plugins: [],
}