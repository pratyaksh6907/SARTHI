/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    // ensure turbopack picks the correct workspace root on CI (Vercel)
    root: './',
  },
  // ensures output tracing is rooted at the project folder
  outputFileTracingRoot: __dirname,
}

export default nextConfig
