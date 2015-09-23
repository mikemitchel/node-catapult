var m = require('mithril')
window.m = m

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
  return m('div.my-component', [
    m('h2', options.title),
    m('p', "This is some text")
  ])
}


// Downsides of Mithril
//   - Smaller community
//   - Not as popular as other things
//   - More DIY
