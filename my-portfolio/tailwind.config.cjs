/** @type {import('tailwindcss').Config} */
module.exports = {
  // Look for Tailwind classes in all HTML/JS/JSX files
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {}, // You can add custom colors, fonts, etc. later
  },
  plugins: [], // Add plugins later if needed
};