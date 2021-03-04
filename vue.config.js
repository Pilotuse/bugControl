
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://49.234.235.135:6666',
        // target: 'http://127.0.0.1:6060',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
};