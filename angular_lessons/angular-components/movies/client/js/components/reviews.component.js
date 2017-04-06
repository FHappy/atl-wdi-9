let reviewsTemplate             = require('./../reviews/reviews.html');
let reviewsController           = require('./../reviews/reviews.controller.js');

let ReviewsComponent = {
    template: reviewsTemplate,
    controller: reviewsController
};

angular
    .module('moviesApp')
    .component('reviews', ReviewsComponent);
