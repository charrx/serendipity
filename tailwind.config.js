/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    letterSpacing: {
      tightest: "-.075rem",
      tighter: "-.05rem",
      tight: "-.025rem",
      normal: "0",
      wide: ".025rem",
      wider: ".05rem",
      widest: ".1rem",
    },
  },
  plugins: [],
};
