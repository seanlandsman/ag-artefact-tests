/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose",
    },
    basePath: '/packages/next-community'
};

module.exports = nextConfig;
