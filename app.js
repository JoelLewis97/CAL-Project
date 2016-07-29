var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    if (nextSlide.length === 0) {
      nextSlide = $(".slideshow").first();
      nextSlide.addClass('new');
    };
  });
}

$(document).ready(main);
