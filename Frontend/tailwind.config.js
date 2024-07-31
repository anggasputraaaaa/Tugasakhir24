/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#070F2B",
          secondary: "#1B1A55"
          
        },
        fontFamily: {
          "raleway": ["Raleway", "sans-serif"]
        },
      },
    },
    plugins: [],
  });