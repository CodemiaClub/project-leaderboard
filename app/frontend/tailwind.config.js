/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Codemia-dark": "#0D1620",
        "Codemia-dark-ultra": "#01050A",
        "Codemia-green": "#4EB1A4",
        "Codemia-green-dark": "#1A343A",
        "Codemia-green-dark-2": "#101822",
        "Codemia-orange": "#F49830",
        "Codemia-blue-dark": "#0A111B",
        "Codemia-blue": "#018AAA",
        "Codemia-green2": "#11313D",
        "Codemia-yellow": "#E6E894",
      },
    },

    backgroundImage: {
      "Codemia-bg": "url('./images/bg.png')",
    },
  },
  plugins: [],
};
