/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      height: {
        '1/2-screen': '50vh',
        'screen-70s': '70vh',
      }
    },
  },
  plugins: [],
}