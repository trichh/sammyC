angular.module('sammyC', ['ngRoute', 'ngAnimate'])

angular.module('sammyC').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  // Takes '#' out of url
  $locationProvider.html5Mode(true);
  // Specifying what controllers and views to use on what route
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .otherwise('/')
}])
