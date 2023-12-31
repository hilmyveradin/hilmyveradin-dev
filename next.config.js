// const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

// module.exports = withMDX(nextConfig)
module.exports = withContentlayer(nextConfig)
