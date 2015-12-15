var m = require('mithril')

var plant = {

  model: function(name, days) {
    this.name = m.prop(name);
    this.days = m.prop(days);
  },

  controller: function (options) {
  // return {plant: new plant.model("Fred", 6)}
  var inputPlant = new plant.model("PLANTY", "");

  var save = function(e) {
    e.preventDefault()
     console.log('input plant', inputPlant.name)
  }

  // var name = m.prop('');

  return {
    inputPlant: inputPlant,
    name: name,
    save: save
  }

},

  view: function (ctrl, options) {
    // console.log(ctrl)
    // return m('.enter-plant', [
    //   m('h2', options.title),
    //   m("table"),
    //     m("form", [
    //     m("label", "Plant name"),
    //     m("input", {onchange: m.withAttr("value", ctrl.inputPlant.name)}),
    //     m("label", "Days until next water"),
    //     m("input", {onchange: m.withAttr("value", ctrl.inputPlant.days), value: ctrl.inputPlant.days()}),
    //     m("button", { onclick: ctrl.save }, "Save")
    //     ]),
    //     m('div')

    // ])

    return m('.holder', [
      m('input', {onchange: function(e) {
        ctrl.inputPlant.name = e.currentTarget.value
      }}),
      m("button", {onclick: ctrl.save }, "save")

      ])
  }
}

module.exports = plant;

// var user = {
//     model: function(name) {
//         this.name = m.prop(name);
//     },
//     controller: function() {
//         return {user: new user.model("John Doe")};
//     },
//     view: function(controller) {
//         m.render("body", [
//             m("input", {onchange: m.withAttr("value", controller.user.name), value: controller.user.name()})
//         ]);
//     }
// };
