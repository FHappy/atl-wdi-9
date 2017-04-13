const controller = require('./showCriminal.controller.js');
const template = require('./showCriminal.html');

const ShowCriminalComponent = {
  controller: controller,
  template: template
}

angular
    .module('criminals')
    .component('showCriminal', ShowCriminalComponent);
