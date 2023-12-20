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
        destination: "https://spotify-github-profile.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
