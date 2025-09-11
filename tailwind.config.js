/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
        main: "#0f663bff",
        main_light: "#369c61ff",
        bg: "#1e1e1e",
        card: "#2f2f2f",
      },
    },
  },
  plugins: [],
};
