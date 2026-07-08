/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // OKLCH-based Roman palette (perceptual, warm, no pure gray/black)
        parchment: {
          50: 'oklch(0.98 0.01 85)',
          100: 'oklch(0.95 0.02 82)',
          200: 'oklch(0.90 0.03 80)',
          300: 'oklch(0.84 0.04 78)',
          400: 'oklch(0.74 0.05 75)',
        },
        roman: {
          // brand red
          500: 'oklch(0.50 0.18 27)',
          600: 'oklch(0.45 0.17 27)',
          700: 'oklch(0.40 0.15 27)',
        },
        gold: {
          400: 'oklch(0.80 0.10 85)',
          500: 'oklch(0.74 0.12 82)',
          600: 'oklch(0.66 0.12 78)',
        },
        ink: {
          700: 'oklch(0.32 0.02 60)',
          800: 'oklch(0.24 0.02 60)',
          900: 'oklch(0.18 0.02 60)',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
