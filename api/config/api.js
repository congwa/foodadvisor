module.exports = {
  // REST API 配置 https://www.strapi.cn/dev-docs/configurations/api
  rest: {
    defaultLimit: 25, // API 调用中使用的默认 limit 参数
    maxLimit: 100,
    withCount: true,
  },
};
