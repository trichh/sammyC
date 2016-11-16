angular.module('sammyC', ['ngRoute', 'ngAnimate'])

angular.module('sammyC').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  // Takes '#' out of url
  $locationProvider.html5Mode(true);
  // Specifying what controllers and views to use on what route
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/')
}])

angular.module('sammyC').controller('HomeCtrl', ["$scope", function($scope) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "inline-block";
  }

  $scope.scrollGallery = function(n) {
    showDivs(slideIndex += n);
  }

}]);
