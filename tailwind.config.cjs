/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        spinner: "url('./images/spinner.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
