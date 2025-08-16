/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E9FAF0",
          DEFAULT: "#02983E",
        },
        accent: {
          DEFAULT: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
