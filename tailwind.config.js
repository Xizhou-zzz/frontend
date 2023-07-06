/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tjw-sb": "url('src/components/img/background.jpg')",
      },
    },
  },
  plugins: [],
}

