/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.generator.asset.publicPath = "/_next/";

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NEXT_PUBLIC_PROXY_NOW_PAYING ||
          "http://localhost:3000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
