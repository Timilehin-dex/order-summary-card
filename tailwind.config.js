/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          paleBlue: "hsl(225, 100%, 94%)",
          brightBlue: "hsl(245, 75%, 52%)",
        },
        neutral: {
          veryPaleBlue: "hsl(225, 100%, 98%)",
          desaturatedBlue: "hsl(224, 23%, 55%)",
          darkBlue: "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
      boxShadow: {
        "bottom-darkBlue": "0 15px 20px hsla(245, 75%, 52%, 0.25)",
      },
    },
  },
  plugins: [],
};
