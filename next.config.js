const withImages = require('next-images');


module.exports = withImages({
  webpack(config, options) {
    return config
  },
  dynamicAssetPrefix: true,
  images: {
    disableStaticImages: false
  },
  env: {
    API_URL: 'https://motion-django.herokuapp.com/',
    BASE_URL: 'https://motion-web.io'
  }
});
