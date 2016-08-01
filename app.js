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
    window.alert(currentSlide.attr('class') + "mk" + nextSlide.attr('class'))
    currentSlide.fadeOut(1000).removeClass("activeslide");
    currentCaption.fadeOut(1000).removeClass("activecaption");
    nextSlide.fadeIn(1000).addClass("activeslide");
    nextCaption.fadeIn(1000).addClass("activecaption");
  });
}

$(document).ready(main);
