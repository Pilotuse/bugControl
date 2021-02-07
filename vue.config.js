
module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://49.234.235.135:6666',
            changeOrigin: true,
            pathRewrite:{
              '^/api' : ''
            }
          },
        }
      },
};