// next-i18next.config.js

module.exports = {
    i18n: {
      // all the locales supported in the application
      locales: ['bg', 'en'], 
      // the default locale to be used when visiting a non-localized route
      defaultLocale: 'bg'
    },
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales'
  }