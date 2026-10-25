/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('node:path')
module.exports = {
  i18n,
  reactStrictMode: true,
  transpilePackages: ['@material-tailwind/react'],
  poweredByHeader: false,
  experimental: { cpus: 2 },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'flowbite.s3.amazonaws.com', pathname: '/**' },
    ],
  },
  webpack: (config, { isServer }) => {
    // Material Tailwind includes React 18.2; all bundled components must share root React.
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.dirname(require.resolve('react/package.json')),
      'react-dom': path.dirname(require.resolve('react-dom/package.json')),
    }
    if (!isServer) {
      config.resolve.fallback = { ...(config.resolve.fallback || {}), fs: false }
    }
    return config
  },
}
