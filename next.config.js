/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { isServer }
      ) => {
        config.module.generator.asset.publicPath = "/_next/";
    
        return config
      },
}

module.exports = nextConfig
