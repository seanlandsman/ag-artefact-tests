/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose",
    },
    basePath: '/packages/next-enterprise'
};

module.exports = nextConfig;
