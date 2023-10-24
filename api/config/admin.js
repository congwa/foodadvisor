module.exports = ({ env }) => ({
  auth: { // 认证配置
    secret: env('ADMIN_JWT_SECRET', '37cb4377c425a87b76e93e0435073b73'), // 用于编码 JWT 令牌的秘密
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KDUVlMFUyDvfN2JnQ/n4wg=='), // Salt用于生成API令牌
  },
  transfer: {
    token: {
      // 用于生成转移token的盐。
      // 如果没有定义传输令牌盐，传输功能将被禁用。
      salt: env('TRANSFER_TOKEN_SALT', 'xgBLKV3YFx2TAn1llipeqQ=='), 
    },
  },
});


/**
 * 
 * Strapi 中的身份验证策略可以基于用户和权限插件的使用，也可以基于内置的 API 令牌功能。
 * 
 * 使用 API 令牌允许以经过身份验证的用户身份在 REST API 或 GraphQL API 端点上执行请求。
 * 
 * API 令牌有助于授予人员或应用程序访问权限，而无需管理用户帐户或更改用户和权限插件中的任何内容。
 * 
 * 新的 API 令牌是从管理面板生成的。
 * 
 * Authorization: bearer your-api-token
 * 
 * 
 * 新的 API 令牌是使用 salt 生成的。该盐由 Strapi 自动生成，并作为 API_TOKEN_SALT 存储在 .env 中。
 * 
 * 盐可以定制：
 * 1. 通过更新 ./config/admin.js 中 apiToken.salt 的字符串值（请参阅管理面板配置文档）
 * 2. 或者通过在项目的 .env 文件中创建 API_TOKEN_SALT 环境变量
 * 
 * 更改盐会使所有现有的 API 令牌失效。
 */