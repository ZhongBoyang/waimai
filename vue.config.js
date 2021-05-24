const px2rem = require('postcss-px2rem')
const path = require('path');


module.export = {
  runtimeCompiler: false,
  lintOnSave: false,

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          // 配置postcss-px2rem
          px2rem({
            remUnit: 37.5   // 设计稿等分后的rem值   375/10
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '',
        //ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", '.vue'],
      alias: {
        '@' : path.join(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          loader: "stylus-loader", // compiles Styl to CSS
        }
      ]
    }
  }
}