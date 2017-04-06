let moviesController            = require('./../movies/movies.controller.js');
let moviesTemplate              = require('./../movies/movies.html');

let MoviesComponent = {
    template: moviesTemplate,
    controller: moviesController
};


// angular
//     .module('moviesApp')
//     .directive('movie', function() {
//         return {
//             restrict: 'E',
//             scope: {
//               movie: '=data'
//             },
//             template: '<h3>Title: {{movie.title}}</h3><h3>Year: {{movie.year}}</h3><reviews></reviews><br>'
//         }
//     })
//     .component('movies', MoviesComponent);

angular
    .module('moviesApp')
    .component('movies', MoviesComponent);
