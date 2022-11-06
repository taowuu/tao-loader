import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = tpl({
  name: 'tao',
  age: '20'
})

oApp.innerHTML = info
// console.log('info', info)
