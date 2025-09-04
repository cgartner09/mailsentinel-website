/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9", // sky-500
          accent: "#22c55e",  // green-500
        },
      },
    },
  },
  plugins: [],
};
