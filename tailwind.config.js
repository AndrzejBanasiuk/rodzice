/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.985 0.012 85)",
        foreground: "oklch(0.22 0.03 150)",
        primary: {
          DEFAULT: "oklch(0.38 0.07 155)",
          foreground: "oklch(0.985 0.012 85)",
        },
        accent: {
          DEFAULT: "oklch(0.78 0.13 75)",
          foreground: "oklch(0.22 0.04 150)",
        },
        muted: {
          DEFAULT: "oklch(0.94 0.018 85)",
          foreground: "oklch(0.48 0.03 150)",
        },
        card: "oklch(0.995 0.008 85)",
        border: "oklch(0.88 0.02 85)",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [], // PUSTE! To naprawi błąd "Cannot find module"
}
