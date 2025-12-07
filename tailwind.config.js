/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cancer-pink': '#FF69B4',
        'cancer-purple': '#DDA0DD',
        'cancer-light': '#FFE4F1',
      },
    },
  },
  plugins: [],
}