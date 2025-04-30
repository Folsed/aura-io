import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.waifu.im',
                port: '',
                pathname: '/**',
            },
        ],
    },
    allowedDevOrigins: ['*'],
}

export default nextConfig
