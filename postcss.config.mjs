/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // Import CSS files
    tailwindcss: {}, // Tailwind CSS integration
    autoprefixer: {}, // Vendor prefixing
    cssnano: process.env.NODE_ENV === "production" ? {} : false, // Minify CSS in production
    "postcss-preset-env": { stage: 2 }, // Use modern CSS features
  },
};

export default config;
