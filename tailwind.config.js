/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/script/*.js"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#8c8c8c",
        veryDarkGrey: "#696969",
      },
      fontSize: {
        main: "15px",
      },
      fontFamily: {
        serif: ["Alata", "sans-serif"],
        sans: ["Josefin Sans", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
