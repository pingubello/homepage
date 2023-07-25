const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  plugins: [
    forms({
      strategy: "base", // only generate global styles
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true },
      );
    }),
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        md: "840px",
        xl: "1300px",
      },
      fontFamily: {
        sans: ["Tajawal", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#ffefd3",
        "dark-background": "#f3debd",
        "dark-green": "#183a37",
        orange: "#c44900",
        "dark-purple": "#432534",
        text: "#04151f",
        wall: "#858b82",
        pullover: "#794323",
        jacket: "#cfcbb7",
        "light-background": "#fff6e8",
        hair: "#634944",
      },
      transitionProperty: {
        "background-image": "background-image",
      },
    },
  },
};
