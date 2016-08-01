var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    var currentCaption = $(".activecaption");
    var nextCaption = currentCaption.next();
    if (currentSlide.is(':last-child')) {
      nextSlide = $("ul.slideshow li:first");
      nextCaption = $("ul.slideshow-captions li:first");
    };
    currentSlide.fadeOut(1000);
    currentCaption.fadeOut(1000);
    nextSlide.delay(1000).fadeIn(1000);
    nextCaption.delay(1000).fadeIn(1000);
  });
}

$(document).ready(main);
