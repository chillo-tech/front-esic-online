/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx,ts}",
    "./src/components/**/*.{html,js,tsx,ts}",
    "./src/containers/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        primary: "#2C7CBB",
        secondary: "#418106",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
