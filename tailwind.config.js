/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* WebKit browserlar uchun */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Standart scrollbars */
          "-ms-overflow-style": "none" /* Internet Explorer */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
