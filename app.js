var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    var currentCaption = $(".activecaption");
    var nextCaption = currentCaption.next();
    if (nextSlide.length === 0) {
      nextSlide = $(".slideshow").first();
      nextCaption = $(".slideshow-captions").first();
    };
  });
}

$(document).ready(main);
