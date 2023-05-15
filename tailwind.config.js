/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "red",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif;"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      wb: "869px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
