const controller = require('./newCriminal.controller.js');
const template = require('./newCriminal.html');

const NewCriminalComponent = {
    controller: controller,
    template: template
};

angular
    .module('criminals')
    .component('newCriminal', NewCriminalComponent);
