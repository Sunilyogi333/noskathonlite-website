/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px", // Extra Small (e.g., small phones)
      sm: "576px", // Small (e.g., larger phones)
      md: "768px", // Medium (e.g., tablets)
      lg: "992px", // Large (e.g., laptops)
      xl: "1200px", // Extra Large (e.g., desktops)
      "2xl": "1400px", // 2XL (e.g., wide desktops)
      "3xl": "1920px", // For large 1080p and ultra-wide monitors
      "4xl": "2560px", // For 2K and 4K displays
    },
    colors: {
      "nosk-green": "#1d7d40",
      "nosk-yellow": "#ffb618",
      "nosk-white": "#f4f4f5",
      "nosk-black": "#060709",
      "nosk-grey": "#1e1e1e",
    },
    extend: {
      maxWidth: {
        "8xl": "96rem", // 1536px
        "9xl": "112rem", // 1792px
      },
      fontFamily: {
        ibmplex: ["IBM Plex Mono", "sans-serif"],
      },
      colors: {
        "custom-green": "#1D7D40",
        "custom-black": "#1E1E1E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Hide scrollbars
    require("tailwindcss-animate"), // Prebuilt animations
  ],
};
