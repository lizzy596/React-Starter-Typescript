/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#26a7de',  // Primary color
          light: '#05ddff',   // Light shade
          dark: '#2b81a5'     // Dark shade
        },
        // secondary: {
        //   DEFAULT: '#ffed4a',  // Secondary color
        //   light: '#fff382',   // Light shade
        //   dark: '#f9d71c'     // Dark shade
        // },
        secondary: {
          DEFAULT: '#d9004c',  // Secondary color
          light: '#f7c0c3',   // Light shade
          dark: '#b41742'     // Dark shade
        },
        // You can add more colors as needed
        success: {
          DEFAULT: '#38c172',
          light: '#51d88a',
          dark: '#2f9e44'
        },
        danger: {
          DEFAULT: '#e3342f',
          light: '#ef5753',
          dark: '#cc1f1a'
        },
      },
      // fontFamily: {
      //   body:["Atkinson Hyperlegible", "san-serif"]
      // }
    }
  },
  plugins: [],
}
