var m = require('mithril')
var MyComponent = require('./components/MyComponent')


window.App = {}

App.controller = function () {
  var ctrl = this

  // Example of controller holding view-state
  ctrl.userInput = 'Hello'
}

App.view = function (ctrl) {
  console.log("Redrawing")

  return [
    m('h1', 'Node Catapult'),

    m('p', ctrl.userInput),

    // Example of two-way data binding
    m('input', {
      value: ctrl.userInput,
      oninput: function(e) {
        ctrl.userInput = e.currentTarget.value
      }
    }),

    // Example of integrating with a 3rd party lib (select2)
    m('select', {
      config: function (elem, hasInitialized) {
        if (hasInitialized) return;
        // $(elem).select2();
      }
    }, [
      m('option', 'One'),
      m('option', 'Two')
    ]),

    // Example of a helper view
    personView({ name: "Alice" }),
  ]
}

function personView (person) {
  return m('h5', person.name)
}

// This puts our component on the page
m.mount(document.getElementById('app'), App)

//
// This is what m.mount basically does with your component
//
// var componentCtrl = new App.controller()
// var virtualDom = App.view(componentCtrl)


//
// Example of using routes (m.route replaces m.mount)
//
// m.route(document.getElementById('app'), '/', {
//   '/': App,
//   '/users': UserList
// })
