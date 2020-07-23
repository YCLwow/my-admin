const path = require('path');
// const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包分析
// const IS_PROD = ['production'].includes(process.env.NODE_ENV);
// 获取文件绝对路径
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.NODE_ENV === '/',  // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  chainWebpack: config => {
    config.resolve.symlinks(true) // 修复热更新失效
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  // configureWebpack: config => {
  //   // 开启 gzip 压缩
  //   // 需要 npm i -D compression-webpack-plugin
  //   const plugins = [];
  //   if (IS_PROD) {
  //     plugins.push(
  //       new CompressionWebpackPlugin({
  //         filename: "[path].gz[query]",
  //         algorithm: "gzip",
  //         test: productionGzipExtensions,
  //         threshold: 10240,
  //         minRatio: 0.8
  //       })
  //     );
  //   }
  //   config.plugins = [...config.plugins, ...plugins];
  // },
  // css: {
  //   extract: IS_PROD,
  //   requireModuleExtension: true,// 去掉文件名中的 .module
  //   loaderOptions: {
  //     // 给 less-loader 传递 Less.js 相关选项
  //     less: {
  //       // `globalVars` 定义全局对象，可加入全局变量
  //       globalVars: {
  //         primary: '#333'
  //       }
  //     }
  //   }
  // },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    //配置跨域处理,只有一个代理
    // proxy: 'http://localhost:3000'
    proxy: { //配置多个跨域
      "/dev": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/dev": ""
        }
      },
      "/prod": {
        target: "http://localhost:4000",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/prod": ""
        }
      },
    }
  }
}