
/**
 * 
 * 1. 全局中间件： 全局中间件作为整个 Strapi 服务器应用程序的全局中间件进行配置和启用
 * 2. 路由中间件：路由中间件的范围更有限，并且在路由级别被配置和用作中间件
 * 
 */

// 此文件用于定义 Strapi 服务器应应用的所有全局中间件

// 装载顺序:  如果您不确定将中间件放置在堆栈中的位置，请将其添加到列表的末尾(最后执行)。

/**
 * 中间件的类型
 * 
 * 1. 内部的 - 内置中间件（即包含在 Strapi 中），自动加载。  strapi::middleware-name
 * 2. 应用层 - 从 ./src/middlewares 文件夹加载   global::middleware-name
 * 3. api级 - 从 ./src/api/[api-name]/middlewares 文件夹加载 api::api-name.middleware-name
 * 4. plugin - 从插件接口的 middlewares 属性中的 strapi-server.js 导出 plugin::plugin-name.middleware-name
 * 5. external 外部的 
 *    - 使用 npm 安装的任一节点模块
 *    - ./config/middlewares.js.
 *    - ./config/middlewares.js 中配置的自定义中间件
 *  由于它们是直接从配置文件中配置和解析的，因此它们没有命名约定。
 *  
 */
module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  'strapi::session',
];
