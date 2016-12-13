angular.module('sammyC').controller('HomeCtrl', function($scope, $http) {
  var slideIndex = 1;
  showDivs(slideIndex);
  $scope.less = false;
  $scope.more = false;
  $scope.single = true;
  $scope.album = false;
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
    document.getElementById('albums').style.color = "#FF3300";
    document.getElementById('singles').style.color = "white";
    document.getElementById('contact').style.color = "white";
    document.getElementById('shop').style.color = "white";
  }

  $scope.showSingles = function() {
    $scope.less = false;
    $scope.single = true;
    $scope.album = false;
    $scope.more = false;
    $scope.contact = false;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "#FF3300";
    document.getElementById('contact').style.color = "white";
    document.getElementById('shop').style.color = "white";
  }

  $scope.showContact = function() {
    $scope.less = false;
    $scope.single = false;
    $scope.album = false;
    $scope.more = true;
    $scope.contact = true;
    document.getElementById('albums').style.color = "white";
    document.getElementById('singles').style.color = "white";
    document.getElementById('contact').style.color = "#FF3300";
    document.getElementById('shop').style.color = "white";
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

    $http.post('/api/email', {
      email: email,
      recipient: recipient,
      subject: subject,
      message: message
    })
    .then(function(data) {

    });
    
    window.location.reload(true);
  }
});
