module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  i18n: {
    enabled: true,
    config: {
      // user plugin config goes here
      defaultLocale: 'zh-Hans',
      locales: ['en', 'fr', 'zh-Hans'],
    },
  }
});

/**
 * 预装插件
 * - Content Manager
 * - Content Type Builder 
 * - Email 
 * - Media Library 
 * - Internationalization
 * - Roles and Permissions
 * 
 * 这些插件对于 Strapi 应用程序的运行至关重要，并且无法卸载。
 * 
 */