module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    domains: [
      'www.datocms-assets.com',
      'a.storyblok.com',
      'images.ctfassets.net',
      'images.prismic.io',
      'cdn.aglty.io',
      'i0.wp.com',
      'i1.wp.com',
      'i2.wp.com',
      'localhost', // For Strapi
    ],
    imageSizes: [24, 64, 300],
  },
}
