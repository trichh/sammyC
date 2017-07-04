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

angular.module('sammyC').controller('HomeCtrl', ["$scope", "$http", function($scope, $http) {
  var slideIndex = 1;
  $scope.videos = false;
  showDivs(slideIndex);
  $scope.less = false;
  $scope.more = false;
  $scope.single = false;
  $scope.album = true;
  $scope.contact = false;

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
    $scope.contact = false;
    $scope.videos = false;
    document.getElementById('albums').style.color = "#FF3300";
    document.getElementById('singles').style.color = "white";
    document.getElementById('contact').style.color = "white";
    document.getElementById('videos').style.color = "white";
  }

  $scope.showSingles = function() {
    $scope.less = false;
    $scope.single = true;
    $scope.album = false;
    $scope.more = false;
    $scope.contact = false;
    $scope.videos = false;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "#FF3300";
    document.getElementById('contact').style.color = "white";
    document.getElementById('videos').style.color = "white";
  }

  $scope.showContact = function() {
    $scope.less = false;
    $scope.single = false;
    $scope.album = false;
    $scope.more = true;
    $scope.contact = true;
    $scope.videos = false;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "white";
    document.getElementById('contact').style.color = "#FF3300";
    document.getElementById('videos').style.color = "white";
  }

  $scope.showVideos = function() {
    $scope.less = false;
    $scope.single = false;
    $scope.album = false;
    $scope.more = true;
    $scope.contact = false;
    $scope.videos = true;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "white";
    document.getElementById('contact').style.color = "white";
    document.getElementById('videos').style.color = "#FF3300";
  }

  $scope.showMore = function() {
    $scope.less = true;
    $scope.more = true;
  }

  $scope.showLess = function() {
    $scope.less = false;
    $scope.more = false;
  }

  $scope.sendEmail = function() {
    var email = $scope.email;
    var recipient = "sammyc407music@gmail.com";
    var subject = $scope.subject;
    var message = $scope.message + "\n\nFrom: " + email;

    $http.post('/email', {
      email: email,
      recipient: recipient,
      subject: subject,
      message: message
    })
    .then(function(data) {

    });

    window.location.reload(true);
  }
}]);
