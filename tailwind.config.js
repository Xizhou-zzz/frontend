/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('/background.jpg')",
        "background1": "url('/background1.jpg')",
        "background2": "url('/background2.jpg')",
        "background3": "url('/background3.jpg')",
        "background4": "url('/background4.png')",
        "background5": "url('/background5.jpg')",
        "exit": "url('/exit.png')"
      },
    },
  },
  plugins: [],
}

