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
        primary: '#48ABC8',
        dark: "#3F3F3F"
      },
      boxShadow: {
        white: "-1px 1px 10px 1px rgba(255,255,255,0.90)",
        dark: "-1px 1px 20px 2px rgba(130,133,134,0.75)",
        cardService: "0px 6px 4px rgba(72, 171, 200, 0.4)",
        input: "0px 6px 4px rgba(72, 171, 200, 0.4)",
      }
    },
  },
  plugins: [],
}
