// @ts-check

/** @type {import('next').NextConfig} */


const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        ppr: false,
    }
}

module.exports = nextConfig;