const { tplReplace } = require('./utils')
const { getOptions } = require('loader-utils')

// 将传参编译成模板
function tplLoader(source) {
  // console.log('source', source)
  // 替换空格
  source = source.replace(/\s+/g, '')
  // <div><h1>{{name}}</h1><p>{{age}}</p></div>
  const { log } = getOptions(this)
  // 选项配置处理
  const _log = log ? `console.log('complie from ${this.resourcePath}')`:""
  // 导出为函数
  return `
    export default(options) => {
      // 函数字符串化
      // 模板数据替换
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${source}', options)
    }
  `
}
// <div><h1>{{tao}}</h1><p>{{18}}</p></div>
module.exports = tplLoader
