/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "/noskathonlite-website" : "",
  basePath: isProd ? "/noskathonlite-website" : "",
};

export default nextConfig;
