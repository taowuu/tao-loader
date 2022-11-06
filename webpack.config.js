/**
 * mode dev prod
 * entry 入口文件
 * output path filename 打包输出路径
 * devtool source-map 报错定位到压缩前的代码
 * module rules loader
 * plugins 插件
 * devServer 开发服务器 
 */

 const { resolve } = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 // 
 module.exports = {
   mode: 'development',
   entry: resolve(__dirname, 'src/app.js'),
   output: {
     path: resolve(__dirname, 'build'),
     filename: 'app.js',
   },
   devtool:'source-map',
   module: {
     rules:[
       {
         // 处理 .tpl 文件
        //  转成函数字符串
        // babel 再转为 js
         test:/\.tpl$/,
         use:[
           'babel-loader',
           {
             loader:'./loaders/tpl-loader',
             options: {
               log: true
             }
           }
         ]
       }
     ]
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: resolve(__dirname, 'index.html')
     })
   ],
   devServer: {
     port: 3333
   }
 }