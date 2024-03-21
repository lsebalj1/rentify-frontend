const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your Express.js backend URL
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  transpileDependencies: true
});
