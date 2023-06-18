/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ['ag-grid-community', 'ag-grid-react'],
  basePath: '/packages/next-community'
};

module.exports = nextConfig;
