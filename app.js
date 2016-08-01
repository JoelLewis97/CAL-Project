var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    var currentCaption = $(".activecaption");
    var nextCaption = currentCaption.next();
    if (currentSlide.is(':last-child')) {
      nextSlide = $(".slideshow").first();
      nextCaption = $(".slideshow-captions").first();
    };
    window.alert(currentSlide.get(0).tagName + "WHY" + nextSlide.get(0).tagName)
    currentSlide.fadeOut(1000).removeClass("activeslide");
    currentCaption.fadeOut(1000).removeClass("activecaption");
    nextSlide.fadeIn(1000).addClass("activeslide");
    nextCaption.fadeIn(1000).addClass("activecaption");
  });
}

$(document).ready(main);
