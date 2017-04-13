const controller = require('./editCriminals.controller.js');
const template = require('./editCriminals.html');

const EditCriminalsComponent = {
  controller: controller,
  template: template
};

angular
.module('criminals')
.component('editCriminal', EditCriminalsComponent);
