angular.module('sammyC').controller('HomeCtrl', function($scope) {
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

});
