const angular = require('angular');
require('angular-ui-router');

angular
    .module('criminals', ['ui.router'])
    .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            // template: '<home></home>'
            template: '<h1>Home</h1>'
        })
        .state('about', {
            url: '/about',
            // template: '<about></about>'
            template: '<about></about>'
        })
        .state('criminals', {
            url: '/criminals',
            template: '<criminals></criminals>'
        })
        .state('show', {
          url: '/show/:criminalId',
          template: '<show-criminal></show-criminal>'
        })
        .state('new', {
          url:'/criminals/new',
          template: '<new-criminal></new-criminal>'
        })
        .state('edit', {
          url: '/criminals/:criminalId/edit',
          template: '<edit-criminal></edit-criminal>'
        });

    $urlRouterProvider.otherwise('/');
}
