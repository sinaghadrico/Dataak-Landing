/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        baseURL: process.env.baseURL,
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        removeConsole: true,
    },
    images: {
        domains: ['cdn.dataak.com'],
      },
};

module.exports = nextConfig;
