// const cronTasks = require('./cron-tasks');
const cronTasks = require('@webbio/strapi-plugin-scheduler/cron-task');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // 服务器应运行的端口
  app: {
    keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),  // 声明会话密钥（基于 Koa 会话），由用户和权限插件和文档插件的 session 中间件使用。
  },
  cron: { // Cron 配置（由 node-schedule 提供支持）
    enabled: true, // 启用或禁用 CRON 作业以在特定日期安排作业。
    tasks: cronTasks, // 声明 CRON 作业在特定日期运行。
  },
});
