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
}

export default nextConfig
