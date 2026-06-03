/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side features (API routes, dynamic pages)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
