/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },

  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/start",
        destination: "/html/index.html",
      },
    ];
  },
  images: {
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "13.200.23.235",
        port: "8000",
      },
    ],

    domains: [
      "api.luxorpen.com",
      "luxorpen.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
