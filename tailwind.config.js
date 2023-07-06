/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('/public/background.jpg')",
        "background1": "url('/public/background1.jpg')",
        "background2": "url('/public/background2.jpg')"
      },
    },
  },
  plugins: [],
}

