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
      ashGray: '#B2BEB5',
      darkGrey: '#808080',
      white: 'white',
      fontColor: '#2f3033',
      yellow: '#facc15',
      primary: '#1a1a1a', // Customize your dark mode primary color
      'custom-gray-50': '#f9fafb',
      'custom-gray-100': '#f3f4f6',
      'theme-red-light': '#fbb6ce',    // for hover from color
      'theme-purple-light': '#d8b4fe', // for hover via color
      'theme-yellow-light': '#fef3c7', // for hover to color

    },
    
    fontFamily:{
      display: ["Poppins", "Sans-serif"],
      body:["Inter", "Sans-serif"]
    },
  },
  plugins: [],
}

