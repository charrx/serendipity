/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            offBlack: '#1e1e1e'
        },
        letterSpacing: {
          thicc: "1rem"
        },
        fontFamily: {
            ginger: 'Ginger',
        }
    },
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
