/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/stock', // Comment this out for local development
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
