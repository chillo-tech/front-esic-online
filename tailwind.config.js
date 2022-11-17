/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx,ts}",
    "./src/components/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#4C52BC"
      }
    },
  },
  plugins: [],
}
