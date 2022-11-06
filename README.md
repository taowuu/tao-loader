# tao-loader

## 什么是 loader
- 处理不同文件的加载器

## 第一步
- 配置测试环境
- 配置 webpack config
- 安装依赖
- `npm run dev`
- 可看到控制台输出了 app
- 移步至第二步分支

## 第二步
- 开始编写 loader
- 在 app.js 中引入 tpl 模板后传参输出内容
- loader 导出一个字符串化的函数
  - 正则替换模板中的空格
  - 处理传入配置选项
  - 替换模板变量

