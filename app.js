var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    if (nextSlide.is('h1')) {
      $('body').addClass('red');
    };
  });
}

$(document).ready(main);
