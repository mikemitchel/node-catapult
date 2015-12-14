var m = require('mithril')
var EnterPlant = require('./components/EnterPlant')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

//
// Client-side routing
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {
    // Controllers are optional
    // controller: function () {},

    view: function (ctrl) {
      return m('.app', [
        m('h1', 'Waterify'),
        m.component(EnterPlant, { title: 'Stay moist, Stay Green' })
      ])
    }
  }

})
