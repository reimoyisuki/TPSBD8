/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#363636",
        customWhite: "#F5F5F5",
      },
    },
  },
  plugins: [],
}
