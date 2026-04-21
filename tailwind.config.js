/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Te wartości odpowiadają kolorom z Twojego projektu
        primary: "oklch(0.645 0.246 16.439)", 
        accent: "oklch(0.712 0.194 46.666)",
        foreground: "oklch(0.145 0.012 46.666)",
        background: "oklch(0.985 0.001 106.423)",
        card: "oklch(0.967 0.003 106.423)",
        muted: {
          DEFAULT: "oklch(0.92 0.004 106.423)",
          foreground: "oklch(0.45 0.015 46.666)",
        },
        border: "oklch(0.92 0.004 106.423)",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Dodaj, jeśli używasz niestandardowych fontów
      }
    },
  },
  plugins: [],
}
