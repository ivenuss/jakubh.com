import { withContentlayer } from 'next-contentlayer';

/**
 * @type {import('next').NextConfig}
 */
const config = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: []
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  env: {
    SITE_URL: 'https://jakubh.com',
    EMAIL: 'hello@jakubh.com',
    BEHANCE_URL: 'https://www.behance.net/jakubhabrcetl',
    GITHUB_URL: 'https://github.com/ivenuss',
    LINKEDIN_URL: 'https://www.linkedin.com/in/jakubhabrcetl',
    TWITTER_URL: 'https://twitter.com/ijakubh'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
});

export default config;
