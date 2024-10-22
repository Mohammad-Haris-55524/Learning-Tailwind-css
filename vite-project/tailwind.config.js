/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Include your main HTML file
    './src/**/*.{html,js,jsx}', // Include all files in the src directory with JS, JSX, TS, or TSX extensions
  ],
theme: {
    extend: {},
    colors:{
      primary:'#3238f2',
      gray: '#E8E8E8',
      white: 'white',
      fontColor: '#2f3033',
      yellow: '#facc15'
    },
    
    fontFamily:{
      display: ["Poppins", "Sans-serif"],
      body:["Inter", "Sans-serif"]
    },
  },
  plugins: [],
}

