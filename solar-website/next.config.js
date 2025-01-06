/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true,
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig 