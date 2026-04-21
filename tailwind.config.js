/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(0.645 0.246 16.439)", // Twoje kolory z projektu
        accent: "oklch(0.712 0.194 46.666)",
      }
    },
  },
  plugins: [],
}
