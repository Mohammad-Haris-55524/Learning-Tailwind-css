/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Include your main HTML file
    './src/**/*.{html,js,jsx}', // Include all files in the src directory with JS, JSX, TS, or TSX extensions
  ],
darkMode: 'class', // Enable class-based dark mode
theme: {
    extend: {},
    colors:{
      secondary:'#3238f2',
      gray: '#E8E8E8',
      white: 'white',
      fontColor: '#2f3033',
      yellow: '#facc15',
      primary: '#1a1a1a', // Customize your dark mode primary color

    },
    
    fontFamily:{
      display: ["Poppins", "Sans-serif"],
      body:["Inter", "Sans-serif"]
    },
  },
  plugins: [],
}

