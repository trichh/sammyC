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
  $scope.less = false;
  $scope.more = false;
  $scope.single = true;
  $scope.album = false;

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

  $scope.showAlbums = function() {
    $scope.less = false;
    $scope.single = false;
    $scope.album = true;
    $scope.more = true;
    document.getElementById('albums').style.color = "#FF3300";
    document.getElementById('singles').style.color = "white";
  }

  $scope.showSingles = function() {
    $scope.less = false;
    $scope.single = true;
    $scope.album = false;
    $scope.more = false;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "#FF3300";
  }

  $scope.showMore = function() {
    $scope.less = true;
    $scope.more = true;
  }
  $scope.showLess = function() {
    $scope.less = false;
    $scope.more = false;
  }
}]);
