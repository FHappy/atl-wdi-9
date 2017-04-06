let movieTemplate = require('./../movies/movie.html');
let movieController = require('./../movies/movies.controller.js');

let MovieComponent = {
  template: movieTemplate,
  controller: movieController,
  bindings: {
    // god damn either way works
    // option 1: inherit scope for data value and use {{$ctrl.data.title}}
    // data: '<',

    //option 2: inherit scope for 'movie' using the data attribute and use
    //{{$ctrl.movie.title}}
    movie: '<data'
  }
};

angular
    .module('moviesApp')
    .component('movie', MovieComponent);
