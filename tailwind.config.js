
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
      "./public/index.html"         
    ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite', 
      },
      fontFamily: {
        'sans': [ "Delius Swash Caps", 'cursive'],
        
      },
      colors: {
          'primary': '#F0F9FF',   // sky-50
          'secondary': '#E0F2FE', // sky-100
          'accent': '#FDBA74',    // orange-300
          'dark': '#1F2937',      // gray-800
          'white': '#FFFFFF',
      }
    },
  },
};
