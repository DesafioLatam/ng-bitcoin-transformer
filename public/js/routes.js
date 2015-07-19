angular.module('app')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'BitController',
        templateUrl: 'templates/buy.html'
      })
      .when('/sell', {
        controller: 'BitController',
        templateUrl: 'templates/sell.html'
      });
  });