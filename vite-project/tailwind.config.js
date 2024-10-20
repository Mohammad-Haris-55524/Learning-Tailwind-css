/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:'#3238f2',
      gray: '#E8E8E8',
      white: 'white',
      fontColor: '#2f3033'
    },
    fontFamily:{
      display: ["Poppins", "Sans-serif"],
      body: ["Inter","Sans-serif" ]
    }
  },
  plugins: [],
}