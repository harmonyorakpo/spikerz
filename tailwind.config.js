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
  safelist: [
    "text-red-600",
    "text-orange-600",
    "text-green-600",
    "bg-red-600",
    "bg-orange-600",
    "bg-green-600",

    {
      pattern: /text-(red|orange|green)-(500|600)/,
    },
    {
      pattern: /bg-(red|orange|green)-(500|600)/,
    },
  ],
};
