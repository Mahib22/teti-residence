/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        italian: ["Italiana", "serif"],
      },

      animation: {
        "spin-slow": "spin 5s linear infinite",
      },

      height: {
        128: "32rem",
      },
    },
  },
};
