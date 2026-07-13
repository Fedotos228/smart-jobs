import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://novalines-cdn.stellarsolutions.md/smartjobs/**'),
      new URL('https://*.public.blob.vercel-storage.com/**'),
    ]
  },
  turbopack: {
    resolveAlias: {
      '@payload-config': './src/payload.config.ts',
    },
    rules: {
      "*.svg": {
        loaders: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })
    return config
  },
}

export default withPayload(nextConfig)
