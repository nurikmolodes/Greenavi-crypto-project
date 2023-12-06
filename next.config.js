const svg = require('@neodx/svg/webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          resetColors: false,
          root: 'src/assets',
          output: 'public',
          metadata: 'src/ui/icon/sprite.gen.ts',
        }),
      );
    }
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
