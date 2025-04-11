/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./assets/**/*.{html,js,css}",
    "./components/**/*.{html,js,css}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        protest: ['"Protest Strike"', "sans-serif"],
      },
      colors: {
        primary: "#3182CE",
        secondary: "#FFB900",
        danger: "#E3342F",
      },
      spacing: {
        "12": "3rem",
        "16": "4rem",
        "24": "6rem",
      },
    },
  },
  plugins: [],
};
