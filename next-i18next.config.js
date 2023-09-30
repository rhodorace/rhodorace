// next-i18next.config.js

module.exports = {
    i18n: {
      // all the locales supported in the application
      locales: ['bg', 'en'], 
      defaultLocale: 'bg',
      localeDetection: false
    },
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales'
  }