/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "nosk-green": "#1d7d40",
      "nosk-yellow": "#ffb618",
      "nosk-white": "#f4f4f5",
      "nosk-black": "#060709",
      "nosk-grey": "#1e1e1e",
    },
    extend: {
      colors: {
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
