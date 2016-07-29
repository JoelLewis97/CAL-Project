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
    currentSlide.fadeOut(1000).removeClass("activeslide");
    currentCaption.fadeOut(1000).removeClass("activecaption");
    nextSlide.fadeIn(1000).addClass("activeslide");
    nextCaption.fadeIn(1000).addClass("activecaption");
    window.alert($(".slideshow:first").prop('class'));
  });
}

$(document).ready(main);
