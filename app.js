var main = function() {
  $("#slideshowbutton-right").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    if (nextSlide.is('h1')) {
    }
    else {
      $('body').addClass('red');
    };
  });
}

$(document).ready(main);
