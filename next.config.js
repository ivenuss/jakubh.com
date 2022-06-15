const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co',
      'res.cloudinary.com',
      'images.squarespace-cdn.com',
      'lh3.googleusercontent.com',
      'smvgwa.sn.files.1drv.com',
      'dropbox.com'
    ]
  },
  env: {
    SITE_URL: 'https://jakubh.com',
    EMAIL: 'jhabrcetl@seznam.cz',
    INSTAGRAM_URL: undefined,
    BEHANCE_URL: 'https://www.behance.net/jakubhabrcetl',
    GITHUB_URL: 'https://github.com/ivenuss',
    LINKEDIN_URL: 'https://www.linkedin.com/in/jakubhabrcetl',
    TWITTER_URL: undefined
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
});
