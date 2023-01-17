/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Camaufalge"],
        body: ["Helvetica"]
      },
      colors: {
        primary: '#48ABC8'
      },
      boxShadow: {
        white: "-1px 1px 10px 1px rgba(255,255,255,0.90)",
        dark: "-1px 1px 20px 2px rgba(130,133,134,0.75)"
      }
    },
  },
  plugins: [],
}
